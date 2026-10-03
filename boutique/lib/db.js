import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { fileURLToPath } from "node:url";
import { CATEGORIES, CONTRIBUTION_RATE, ROLES } from "./constants.js";
import { compareSize, todayParis } from "./format.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = path.join(root, "data");
fs.mkdirSync(dataDir, { recursive: true });

const db = new DatabaseSync(path.join(dataDir, "maison-celeste.sqlite"));
db.exec(`
  PRAGMA foreign_keys = ON;
  PRAGMA journal_mode = WAL;
  PRAGMA busy_timeout = 3000;
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    brand TEXT NOT NULL,
    sku TEXT NOT NULL UNIQUE,
    purchase_cents INTEGER NOT NULL,
    sale_cents INTEGER NOT NULL,
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS variants (
    id INTEGER PRIMARY KEY,
    product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    color TEXT NOT NULL,
    size TEXT NOT NULL,
    sku TEXT NOT NULL UNIQUE,
    quantity INTEGER NOT NULL,
    threshold INTEGER NOT NULL,
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS movements (
    id INTEGER PRIMARY KEY,
    variant_id INTEGER NOT NULL REFERENCES variants(id) ON DELETE CASCADE,
    type TEXT NOT NULL CHECK (type IN ('entree', 'vente', 'retour', 'ajustement')),
    quantity INTEGER NOT NULL,
    note TEXT NOT NULL DEFAULT '',
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    role TEXT NOT NULL,
    contract TEXT NOT NULL CHECK (contract IN ('horaire', 'mensuel')),
    rate_cents INTEGER NOT NULL,
    start_date TEXT NOT NULL,
    active INTEGER NOT NULL DEFAULT 1 CHECK (active IN (0, 1)),
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS shifts (
    id INTEGER PRIMARY KEY,
    employee_id INTEGER NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
    work_date TEXT NOT NULL,
    minutes INTEGER NOT NULL,
    note TEXT NOT NULL DEFAULT '',
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS pay_runs (
    id INTEGER PRIMARY KEY,
    employee_id INTEGER NOT NULL REFERENCES employees(id),
    employee_name TEXT NOT NULL,
    role TEXT NOT NULL,
    contract TEXT NOT NULL,
    rate_cents INTEGER NOT NULL,
    period_start TEXT NOT NULL,
    period_end TEXT NOT NULL,
    minutes INTEGER NOT NULL,
    gross_cents INTEGER NOT NULL,
    contribution_rate REAL NOT NULL,
    contribution_cents INTEGER NOT NULL,
    net_cents INTEGER NOT NULL,
    created_at TEXT NOT NULL,
    UNIQUE (employee_id, period_start, period_end)
  );

  CREATE INDEX IF NOT EXISTS idx_variants_product ON variants(product_id);
  CREATE INDEX IF NOT EXISTS idx_movements_created ON movements(created_at);
  CREATE INDEX IF NOT EXISTS idx_shifts_employee ON shifts(employee_id, work_date);
`);

function qAll(sql, ...params) {
  return db.prepare(sql).all(...params);
}

function qGet(sql, ...params) {
  return db.prepare(sql).get(...params);
}

function qRun(sql, ...params) {
  return db.prepare(sql).run(...params);
}

function insertId(result) {
  return Number(result.lastInsertRowid);
}

function cleanText(value, max) {
  const text = String(value ?? "").replace(/\s+/g, " ").trim();
  return { text, tooLong: text.length > max };
}

function parseMoney(value) {
  const raw = String(value ?? "").trim().replace(/\s/g, "").replace(",", ".");
  if (!/^\d+(\.\d{1,2})?$/.test(raw)) return null;
  return Math.round(Number(raw) * 100);
}

function parseIntStrict(value) {
  const raw = String(value ?? "").trim();
  if (!/^\d+$/.test(raw)) return null;
  return Number(raw);
}

function parseDate(value) {
  const raw = String(value ?? "").trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(raw)) return null;
  const [year, month, day] = raw.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null;
  }
  return raw;
}

function parseHours(value) {
  const raw = String(value ?? "").trim().replace(",", ".");
  if (!/^\d+(\.\d{1,2})?$/.test(raw)) return null;
  return Math.round(Number(raw) * 60);
}

export function skuify(value) {
  const raw = String(value ?? "").trim();
  if (!raw) return "";
  const sku = raw
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
  if (!sku || !/^[A-Z0-9]+(?:-[A-Z0-9]+)*$/.test(sku)) return "";
  return sku;
}

function skuTaken(sku, ignoreProductId = null) {
  const product = qGet(`SELECT id FROM products WHERE sku = ?`, sku);
  if (product && product.id !== ignoreProductId) return true;
  const variant = qGet(`SELECT id FROM variants WHERE sku = ?`, sku);
  return Boolean(variant);
}

function uniqueSku(base) {
  const root = base.replace(/-+$/g, "").slice(0, 36) || "CEL-ART";
  let sku = root;
  let n = 2;
  while (skuTaken(sku)) {
    const suffix = `-${n++}`;
    sku = root.slice(0, 40 - suffix.length) + suffix;
  }
  return sku;
}

function baseFromName(name) {
  const words = skuify(name)
    .split("-")
    .filter((word) => word.length > 2)
    .slice(0, 2);
  const part = words.map((word) => word.slice(0, 4)).join("-") || "ART";
  return `CEL-${part}`;
}

function variantSku(productSku, color, size) {
  const colorPart = (skuify(color) || "COULEUR").replace(/-/g, "").slice(0, 8);
  const sizePart = (skuify(size) || "T").replace(/-/g, "").slice(0, 4);
  return uniqueSku(`${productSku}-${colorPart}-${sizePart}`);
}

function norm(value) {
  return String(value ?? "").trim().toLocaleLowerCase("fr-FR");
}

function fail(errors, values) {
  return { ok: false, errors, values };
}

function monthBounds(which = "current", today = todayParis()) {
  let [year, month] = today.split("-").map(Number);
  if (which === "previous") {
    month -= 1;
    if (month === 0) {
      month = 12;
      year -= 1;
    }
  }
  const start = `${year}-${String(month).padStart(2, "0")}-01`;
  const last = new Date(Date.UTC(year, month, 0)).getUTCDate();
  const end = `${year}-${String(month).padStart(2, "0")}-${String(last).padStart(2, "0")}`;
  return { start, end };
}

function sortVariants(rows) {
  return [...rows].sort((a, b) => {
    const color = a.color.localeCompare(b.color, "fr");
    if (color !== 0) return color;
    return compareSize(a.size, b.size);
  });
}

export function navCounts() {
  const alerts = qGet(`SELECT COUNT(*) AS n FROM variants WHERE quantity <= threshold`).n;
  return { alerts };
}

export function getDashboard() {
  const variants = qAll(`
    SELECT v.*, p.name, p.brand, p.category, p.purchase_cents, p.sale_cents, p.id AS product_id
    FROM variants v
    JOIN products p ON p.id = v.product_id
  `);
  const productCount = qGet(`SELECT COUNT(*) AS n FROM products`).n;
  let purchaseValue = 0;
  let saleValue = 0;
  let units = 0;
  for (const variant of variants) {
    purchaseValue += variant.quantity * variant.purchase_cents;
    saleValue += variant.quantity * variant.sale_cents;
    units += variant.quantity;
  }
  const since = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
  const recentCount = qGet(`SELECT COUNT(*) AS n FROM movements WHERE created_at >= ?`, since).n;
  const low = variants
    .filter((variant) => variant.quantity <= variant.threshold)
    .sort((a, b) => a.quantity - b.quantity || a.name.localeCompare(b.name, "fr"));
  return {
    purchaseValue,
    saleValue,
    units,
    alerts: low.length,
    variantCount: variants.length,
    productCount,
    recentCount,
    recent: listMovements({ limit: 8 }),
    low: low.slice(0, 6),
  };
}

export function listProducts({ q = "", category = "" } = {}) {
  const products = qAll(`SELECT * FROM products`);
  const variants = qAll(`SELECT * FROM variants`);
  const grouped = new Map();
  for (const variant of variants) {
    if (!grouped.has(variant.product_id)) grouped.set(variant.product_id, []);
    grouped.get(variant.product_id).push(variant);
  }
  const query = q.trim().toLocaleLowerCase("fr-FR");
  const order = new Map(CATEGORIES.map(([key], index) => [key, index]));
  return products
    .map((product) => {
      const items = sortVariants(grouped.get(product.id) || []);
      const colors = [...new Set(items.map((item) => item.color))];
      const sizes = [...items.map((item) => item.size)].sort(compareSize);
      const uniqueSizes = [...new Set(sizes)];
      const stock = items.reduce((sum, item) => sum + item.quantity, 0);
      const alerts = items.filter((item) => item.quantity <= item.threshold).length;
      return { ...product, variants: items, colors, sizes: uniqueSizes, stock, alerts };
    })
    .filter((product) => {
      if (category && product.category !== category) return false;
      if (!query) return true;
      const haystack = [
        product.name,
        product.brand,
        product.sku,
        ...product.colors,
        ...product.sizes,
        ...product.variants.map((item) => item.sku),
      ]
        .join(" ")
        .toLocaleLowerCase("fr-FR");
      return haystack.includes(query);
    })
    .sort((a, b) => {
      const categoryOrder = (order.get(a.category) ?? 99) - (order.get(b.category) ?? 99);
      if (categoryOrder !== 0) return categoryOrder;
      return a.name.localeCompare(b.name, "fr");
    });
}

export function getProduct(id) {
  const product = qGet(`SELECT * FROM products WHERE id = ?`, id);
  if (!product) return null;
  const variants = sortVariants(qAll(`SELECT * FROM variants WHERE product_id = ?`, id));
  const movements = qAll(
    `
      SELECT m.*, v.color, v.size, v.sku AS variant_sku
      FROM movements m
      JOIN variants v ON v.id = m.variant_id
      WHERE v.product_id = ?
      ORDER BY m.created_at DESC, m.id DESC
      LIMIT 8
    `,
    id,
  );
  return { product, variants, movements };
}

function productValues(input, rows = []) {
  return {
    name: String(input.name ?? ""),
    category: String(input.category ?? ""),
    brand: String(input.brand ?? ""),
    sku: String(input.sku ?? ""),
    purchase: String(input.purchase ?? ""),
    sale: String(input.sale ?? ""),
    color: String(input.color ?? ""),
    rows: rows.map((row) => ({
      size: String(row.size ?? ""),
      qty: String(row.qty ?? ""),
      threshold: String(row.threshold ?? "2"),
    })),
  };
}

export function createProduct(input) {
  const rows = (Array.isArray(input.rows) ? input.rows : []).filter(
    (row) => String(row.size ?? "").trim() || String(row.qty ?? "").trim(),
  );
  const values = productValues(input, rows);
  const errors = {};
  const name = cleanText(input.name, 80);
  const brand = cleanText(input.brand, 60);
  const color = cleanText(input.color, 40);
  const skuInput = String(input.sku ?? "").trim();
  const sku = skuify(skuInput);
  const purchase = parseMoney(input.purchase);
  const sale = parseMoney(input.sale);

  if (!name.text) errors.name = "Indiquez le nom du produit.";
  else if (name.tooLong) errors.name = "Le nom est trop long (80 caractères maximum).";
  if (!CATEGORIES.some(([key]) => key === input.category)) errors.category = "Choisissez une catégorie.";
  if (!brand.text) errors.brand = "Indiquez la marque.";
  else if (brand.tooLong) errors.brand = "La marque est trop longue (60 caractères maximum).";
  if (skuInput && !sku) errors.sku = "Le SKU ne peut contenir que des lettres, des chiffres et des tirets.";
  if (purchase == null) errors.purchase = "Indiquez un prix d’achat valide, par exemple 42,00.";
  else if (purchase <= 0 || purchase > 1_000_000) errors.purchase = "Le prix d’achat doit être compris entre 0,01 € et 10 000 €.";
  if (sale == null) errors.sale = "Indiquez un prix de vente valide, par exemple 95,00.";
  else if (sale <= 0 || sale > 1_000_000) errors.sale = "Le prix de vente doit être compris entre 0,01 € et 10 000 €.";
  if (!color.text) errors.color = "Indiquez une couleur.";
  else if (color.tooLong) errors.color = "La couleur est trop longue.";

  const parsedRows = [];
  const seen = new Set();
  if (!rows.length) errors.rows = "Ajoutez au moins une taille.";
  rows.forEach((row, index) => {
    const size = cleanText(row.size, 12);
    const qty = parseIntStrict(row.qty);
    const thresholdRaw = String(row.threshold ?? "").trim();
    const threshold = thresholdRaw === "" ? 2 : parseIntStrict(thresholdRaw);
    const rowErrors = [];
    if (!size.text) rowErrors.push("indiquez la taille");
    else if (size.tooLong) rowErrors.push("taille trop longue");
    if (qty == null || qty > 999) rowErrors.push("quantité entière entre 0 et 999");
    if (threshold == null || threshold > 999) rowErrors.push("seuil entier entre 0 et 999");
    const key = norm(size.text);
    if (key && seen.has(key)) rowErrors.push("taille déjà saisie");
    if (key) seen.add(key);
    if (rowErrors.length) errors[`row_${index}`] = `${rowErrors.join(", ")}.`;
    parsedRows.push({ size: size.text, qty, threshold });
  });

  if (Object.keys(errors).length) return fail(errors, values);

  const productSku = sku || uniqueSku(baseFromName(name.text));
  if (skuTaken(productSku)) {
    return fail({ sku: "Ce SKU est déjà utilisé." }, values);
  }

  const now = new Date().toISOString();
  db.exec("BEGIN");
  try {
    const productId = insertId(
      qRun(
        `INSERT INTO products (name, category, brand, sku, purchase_cents, sale_cents, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        name.text,
        input.category,
        brand.text,
        productSku,
        purchase,
        sale,
        now,
      ),
    );
    for (const row of parsedRows) {
      const created = insertVariantRow(productId, productSku, {
        color: color.text,
        size: row.size,
        qty: row.qty,
        threshold: row.threshold,
        now,
      });
      if (!created.ok) {
        db.exec("ROLLBACK");
        return fail(created.errors, values);
      }
    }
    db.exec("COMMIT");
    return { ok: true, id: productId };
  } catch (error) {
    db.exec("ROLLBACK");
    throw error;
  }
}

function insertVariantRow(productId, productSku, { color, size, qty, threshold, now }) {
  const siblings = qAll(`SELECT color, size FROM variants WHERE product_id = ?`, productId);
  if (siblings.some((item) => norm(item.color) === norm(color) && norm(item.size) === norm(size))) {
    return { ok: false, errors: { v_size: "Cette couleur et cette taille existent déjà." } };
  }
  const sku = variantSku(productSku, color, size);
  const variantId = insertId(
    qRun(
      `INSERT INTO variants (product_id, color, size, sku, quantity, threshold, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      productId,
      color,
      size,
      sku,
      qty,
      threshold,
      now,
    ),
  );
  if (qty > 0) {
    qRun(
      `INSERT INTO movements (variant_id, type, quantity, note, created_at) VALUES (?, 'entree', ?, ?, ?)`,
      variantId,
      qty,
      "Stock initial",
      now,
    );
  }
  return { ok: true, id: variantId };
}

export function updateProduct(id, input) {
  const current = qGet(`SELECT * FROM products WHERE id = ?`, id);
  if (!current) return { ok: false, notFound: true };
  const values = {
    name: String(input.name ?? ""),
    category: String(input.category ?? ""),
    brand: String(input.brand ?? ""),
    sku: String(input.sku ?? ""),
    purchase: String(input.purchase ?? ""),
    sale: String(input.sale ?? ""),
  };
  const errors = {};
  const name = cleanText(input.name, 80);
  const brand = cleanText(input.brand, 60);
  const sku = skuify(input.sku);
  const purchase = parseMoney(input.purchase);
  const sale = parseMoney(input.sale);
  if (!name.text) errors.name = "Indiquez le nom du produit.";
  else if (name.tooLong) errors.name = "Le nom est trop long (80 caractères maximum).";
  if (!CATEGORIES.some(([key]) => key === input.category)) errors.category = "Choisissez une catégorie.";
  if (!brand.text) errors.brand = "Indiquez la marque.";
  else if (brand.tooLong) errors.brand = "La marque est trop longue (60 caractères maximum).";
  if (!sku) errors.sku = "Indiquez un SKU (lettres, chiffres et tirets).";
  else if (skuTaken(sku, id)) errors.sku = "Ce SKU est déjà utilisé.";
  if (purchase == null || purchase <= 0 || purchase > 1_000_000) {
    errors.purchase = "Indiquez un prix d’achat valide, par exemple 42,00.";
  }
  if (sale == null || sale <= 0 || sale > 1_000_000) {
    errors.sale = "Indiquez un prix de vente valide, par exemple 95,00.";
  }
  if (Object.keys(errors).length) return fail(errors, values);
  qRun(
    `UPDATE products SET name = ?, category = ?, brand = ?, sku = ?, purchase_cents = ?, sale_cents = ? WHERE id = ?`,
    name.text,
    input.category,
    brand.text,
    sku,
    purchase,
    sale,
    id,
  );
  return { ok: true, id };
}

export function addVariant(productId, input) {
  const product = qGet(`SELECT * FROM products WHERE id = ?`, productId);
  if (!product) return { ok: false, notFound: true };
  const values = {
    v_color: String(input.color ?? ""),
    v_size: String(input.size ?? ""),
    v_qty: String(input.qty ?? ""),
    v_threshold: String(input.threshold ?? "2"),
  };
  const errors = {};
  const color = cleanText(input.color, 40);
  const size = cleanText(input.size, 12);
  const qty = parseIntStrict(input.qty);
  const thresholdRaw = String(input.threshold ?? "").trim();
  const threshold = thresholdRaw === "" ? 2 : parseIntStrict(thresholdRaw);
  if (!color.text) errors.v_color = "Indiquez une couleur.";
  else if (color.tooLong) errors.v_color = "La couleur est trop longue.";
  if (!size.text) errors.v_size = "Indiquez une taille.";
  else if (size.tooLong) errors.v_size = "La taille est trop longue.";
  if (qty == null || qty > 999) errors.v_qty = "Indiquez une quantité entière entre 0 et 999.";
  if (threshold == null || threshold > 999) errors.v_threshold = "Indiquez un seuil entier entre 0 et 999.";
  if (Object.keys(errors).length) return fail(errors, values);
  const now = new Date().toISOString();
  db.exec("BEGIN");
  try {
    const created = insertVariantRow(product.id, product.sku, {
      color: color.text,
      size: size.text,
      qty,
      threshold,
      now,
    });
    if (!created.ok) {
      db.exec("ROLLBACK");
      return fail(created.errors, values);
    }
    db.exec("COMMIT");
    return { ok: true, id: created.id };
  } catch (error) {
    db.exec("ROLLBACK");
    throw error;
  }
}

export function updateThresholds(productId, pairs) {
  const product = qGet(`SELECT id FROM products WHERE id = ?`, productId);
  if (!product) return { ok: false, notFound: true };
  const errors = {};
  const updates = [];
  for (const pair of pairs) {
    const variant = qGet(`SELECT id FROM variants WHERE id = ? AND product_id = ?`, pair.id, productId);
    const threshold = parseIntStrict(pair.threshold);
    if (!variant || threshold == null || threshold > 999) {
      errors.thresholds = "Chaque seuil doit être un entier entre 0 et 999.";
      break;
    }
    updates.push({ id: variant.id, threshold });
  }
  if (!updates.length && !errors.thresholds) errors.thresholds = "Aucune variante à mettre à jour.";
  if (Object.keys(errors).length) return { ok: false, errors };
  db.exec("BEGIN");
  try {
    for (const update of updates) {
      qRun(`UPDATE variants SET threshold = ? WHERE id = ?`, update.threshold, update.id);
    }
    db.exec("COMMIT");
  } catch (error) {
    db.exec("ROLLBACK");
    throw error;
  }
  return { ok: true };
}

export function listVariantsDetailed() {
  const rows = qAll(`
    SELECT v.*, p.name, p.category, p.id AS product_id
    FROM variants v
    JOIN products p ON p.id = v.product_id
    ORDER BY p.name COLLATE NOCASE, v.id
  `);
  const groups = new Map();
  for (const row of rows) {
    if (!groups.has(row.product_id)) groups.set(row.product_id, []);
    groups.get(row.product_id).push(row);
  }
  const ordered = [];
  for (const items of groups.values()) ordered.push(...sortVariants(items));
  return ordered;
}

export function listMovements({ limit = 40, type = "" } = {}) {
  const params = [];
  let where = "";
  if (type) {
    where = "WHERE m.type = ?";
    params.push(type);
  }
  params.push(limit);
  return qAll(
    `
      SELECT m.*, v.color, v.size, v.sku AS variant_sku, v.quantity AS stock, v.threshold,
             p.name, p.id AS product_id
      FROM movements m
      JOIN variants v ON v.id = m.variant_id
      JOIN products p ON p.id = v.product_id
      ${where}
      ORDER BY m.created_at DESC, m.id DESC
      LIMIT ?
    `,
    ...params,
  );
}

export function recordMovement(input) {
  const values = {
    variant_id: String(input.variantId ?? ""),
    type: String(input.type ?? ""),
    direction: String(input.direction ?? "moins"),
    quantity: String(input.quantity ?? ""),
    note: String(input.note ?? ""),
  };
  const errors = {};
  const variant = qGet(
    `
      SELECT v.*, p.name
      FROM variants v
      JOIN products p ON p.id = v.product_id
      WHERE v.id = ?
    `,
    Number(input.variantId),
  );
  const type = String(input.type ?? "");
  const qty = parseIntStrict(input.quantity);
  const note = cleanText(input.note, 180);
  if (!variant) errors.variant_id = "Choisissez une variante en stock.";
  if (!["entree", "vente", "retour", "ajustement"].includes(type)) errors.type = "Choisissez un type de mouvement.";
  if (qty == null || qty < 1 || qty > 999) errors.quantity = "Indiquez une quantité entière entre 1 et 999.";
  if (note.tooLong) errors.note = "Le motif est trop long (180 caractères maximum).";
  let direction = String(input.direction ?? "");
  if (type === "ajustement" && direction !== "plus" && direction !== "moins") {
    errors.direction = "Indiquez si l’ajustement ajoute ou retire du stock.";
  }
  if (Object.keys(errors).length) return fail(errors, values);

  let signed = qty;
  if (type === "vente") signed = -qty;
  if (type === "ajustement") signed = direction === "moins" ? -qty : qty;
  if (variant.quantity + signed < 0) {
    const pieces = variant.quantity > 1 ? "pièces" : "pièce";
    return fail(
      {
        quantity: `Stock insuffisant : il reste ${variant.quantity} ${pieces} en ${variant.color} / ${variant.size}.`,
      },
      values,
    );
  }

  const now = new Date().toISOString();
  db.exec("BEGIN");
  try {
    const current = qGet(`SELECT quantity, threshold FROM variants WHERE id = ?`, variant.id);
    if (current.quantity + signed < 0) {
      db.exec("ROLLBACK");
      return fail({ quantity: "Stock insuffisant pour cette sortie." }, values);
    }
    qRun(`UPDATE variants SET quantity = quantity + ? WHERE id = ?`, signed, variant.id);
    const id = insertId(
      qRun(
        `INSERT INTO movements (variant_id, type, quantity, note, created_at) VALUES (?, ?, ?, ?, ?)`,
        variant.id,
        type,
        signed,
        note.text,
        now,
      ),
    );
    db.exec("COMMIT");
    const stock = current.quantity + signed;
    return {
      ok: true,
      id,
      stock,
      alert: stock <= current.threshold ? 1 : 0,
    };
  } catch (error) {
    db.exec("ROLLBACK");
    throw error;
  }
}

export function listLowStock() {
  const rows = qAll(`
    SELECT v.*, p.name, p.brand, p.category, p.id AS product_id, p.sku AS product_sku
    FROM variants v
    JOIN products p ON p.id = v.product_id
    WHERE v.quantity <= v.threshold
    ORDER BY v.quantity ASC, p.name COLLATE NOCASE
  `);
  return rows;
}

export function listEmployees(bounds = monthBounds("current")) {
  return qAll(
    `
      SELECT e.*,
        COALESCE((
          SELECT SUM(minutes) FROM shifts s
          WHERE s.employee_id = e.id AND s.work_date >= ? AND s.work_date <= ?
        ), 0) AS month_minutes
      FROM employees e
      ORDER BY e.active DESC, e.last_name COLLATE NOCASE, e.first_name COLLATE NOCASE
    `,
    bounds.start,
    bounds.end,
  );
}

export function getPayrollHome() {
  const current = monthBounds("current");
  const previous = monthBounds("previous");
  const employees = listEmployees(current);
  const runs = listPayRuns(6);
  const previousTotals = qGet(
    `SELECT COALESCE(SUM(net_cents), 0) AS net, COALESCE(SUM(gross_cents), 0) AS gross, COUNT(*) AS n
     FROM pay_runs WHERE period_start = ? AND period_end = ?`,
    previous.start,
    previous.end,
  );
  return {
    employees,
    runs,
    current,
    previous,
    monthMinutes: employees.reduce((sum, employee) => sum + employee.month_minutes, 0),
    active: employees.filter((employee) => employee.active).length,
    previousNet: previousTotals.net,
    previousGross: previousTotals.gross,
    previousCount: previousTotals.n,
  };
}

export function getEmployee(id) {
  const employee = qGet(`SELECT * FROM employees WHERE id = ?`, id);
  if (!employee) return null;
  const shifts = qAll(
    `SELECT * FROM shifts WHERE employee_id = ? ORDER BY work_date DESC, id DESC LIMIT 12`,
    id,
  );
  const runs = qAll(
    `SELECT * FROM pay_runs WHERE employee_id = ? ORDER BY period_end DESC LIMIT 6`,
    id,
  );
  return { employee, shifts, runs };
}

function employeeValues(input) {
  return {
    first_name: String(input.firstName ?? ""),
    last_name: String(input.lastName ?? ""),
    role: String(input.role ?? ""),
    contract: String(input.contract ?? "horaire"),
    rate: String(input.rate ?? ""),
    start_date: String(input.startDate ?? ""),
    active: input.active ? "1" : "0",
  };
}

function validateEmployee(input, { activeField = false } = {}) {
  const values = employeeValues({ ...input, active: activeField ? input.active : true });
  const errors = {};
  const first = cleanText(input.firstName, 40);
  const last = cleanText(input.lastName, 40);
  const rate = parseMoney(input.rate);
  const start = parseDate(input.startDate);
  const today = todayParis();
  if (!first.text) errors.first_name = "Indiquez le prénom.";
  else if (first.tooLong) errors.first_name = "Le prénom est trop long.";
  if (!last.text) errors.last_name = "Indiquez le nom.";
  else if (last.tooLong) errors.last_name = "Le nom est trop long.";
  if (!ROLES.includes(input.role)) errors.role = "Choisissez un rôle.";
  if (!["horaire", "mensuel"].includes(input.contract)) errors.contract = "Choisissez un type de contrat.";
  if (rate == null || rate <= 0) {
    errors.rate = "Indiquez un taux valide, par exemple 13,50 ou 2 400.";
  } else if (input.contract === "horaire" && rate > 20_000) {
    errors.rate = "Le taux horaire semble trop élevé.";
  } else if (input.contract === "mensuel" && rate > 2_000_000) {
    errors.rate = "Le salaire mensuel semble trop élevé.";
  }
  if (!start) errors.start_date = "Indiquez une date d’entrée valide.";
  else if (start > today) errors.start_date = "La date d’entrée ne peut pas être dans le futur.";
  else if (start < "1990-01-01") errors.start_date = "La date d’entrée est trop ancienne.";
  return {
    errors,
    values,
    parsed: errors && Object.keys(errors).length
      ? null
      : {
          first: first.text,
          last: last.text,
          role: input.role,
          contract: input.contract,
          rate,
          start,
          active: activeField ? (input.active ? 1 : 0) : 1,
        },
  };
}

export function createEmployee(input) {
  const { errors, values, parsed } = validateEmployee(input);
  if (Object.keys(errors).length) return fail(errors, values);
  const id = insertId(
    qRun(
      `INSERT INTO employees (first_name, last_name, role, contract, rate_cents, start_date, active, created_at)
       VALUES (?, ?, ?, ?, ?, ?, 1, ?)`,
      parsed.first,
      parsed.last,
      parsed.role,
      parsed.contract,
      parsed.rate,
      parsed.start,
      new Date().toISOString(),
    ),
  );
  return { ok: true, id };
}

export function updateEmployee(id, input) {
  const current = qGet(`SELECT * FROM employees WHERE id = ?`, id);
  if (!current) return { ok: false, notFound: true };
  const { errors, values, parsed } = validateEmployee(input, { activeField: true });
  if (Object.keys(errors).length) return fail(errors, values);
  qRun(
    `UPDATE employees
     SET first_name = ?, last_name = ?, role = ?, contract = ?, rate_cents = ?, start_date = ?, active = ?
     WHERE id = ?`,
    parsed.first,
    parsed.last,
    parsed.role,
    parsed.contract,
    parsed.rate,
    parsed.start,
    parsed.active,
    id,
  );
  return { ok: true, id };
}

export function listShifts({ employeeId = null, from = null, to = null, limit = 40 } = {}) {
  return qAll(
    `
      SELECT s.*, e.first_name, e.last_name, e.role, e.contract
      FROM shifts s
      JOIN employees e ON e.id = s.employee_id
      WHERE (? IS NULL OR s.employee_id = ?)
        AND (? IS NULL OR s.work_date >= ?)
        AND (? IS NULL OR s.work_date <= ?)
      ORDER BY s.work_date DESC, s.id DESC
      LIMIT ?
    `,
    employeeId,
    employeeId,
    from,
    from,
    to,
    to,
    limit,
  );
}

export function addShift(input) {
  const values = {
    employee_id: String(input.employeeId ?? ""),
    work_date: String(input.workDate ?? ""),
    hours: String(input.hours ?? ""),
    note: String(input.note ?? ""),
  };
  const errors = {};
  const employee = qGet(`SELECT * FROM employees WHERE id = ?`, Number(input.employeeId));
  const workDate = parseDate(input.workDate);
  const minutes = parseHours(input.hours);
  const note = cleanText(input.note, 180);
  const today = todayParis();
  if (!employee) errors.employee_id = "Choisissez un employé.";
  else if (!employee.active) errors.employee_id = "Cet employé n’est plus en poste.";
  if (!workDate) errors.work_date = "Indiquez la date du service.";
  else if (workDate > today) errors.work_date = "La date ne peut pas être dans le futur.";
  else if (employee && workDate < employee.start_date) {
    errors.work_date = "Cette date est antérieure à l’entrée en poste.";
  }
  if (minutes == null) errors.hours = "Indiquez une durée valide, par exemple 7,5.";
  else if (minutes < 30 || minutes > 12 * 60) errors.hours = "Une vacation doit durer entre 0,5 et 12 heures.";
  if (note.tooLong) errors.note = "Le motif est trop long (180 caractères maximum).";
  if (Object.keys(errors).length) return fail(errors, values);
  const id = insertId(
    qRun(
      `INSERT INTO shifts (employee_id, work_date, minutes, note, created_at) VALUES (?, ?, ?, ?, ?)`,
      employee.id,
      workDate,
      minutes,
      note.text,
      new Date().toISOString(),
    ),
  );
  return { ok: true, id };
}

export function listPayRuns(limit = 50) {
  return qAll(
    `SELECT * FROM pay_runs ORDER BY period_end DESC, employee_name COLLATE NOCASE, id DESC LIMIT ?`,
    limit,
  );
}

export function getPayRun(id) {
  const run = qGet(`SELECT * FROM pay_runs WHERE id = ?`, id);
  if (!run) return null;
  const shifts = qAll(
    `
      SELECT * FROM shifts
      WHERE employee_id = ? AND work_date >= ? AND work_date <= ?
      ORDER BY work_date, id
    `,
    run.employee_id,
    run.period_start,
    run.period_end,
  );
  const employee = qGet(`SELECT * FROM employees WHERE id = ?`, run.employee_id);
  return { run, shifts, employee };
}

export function createPayRun(input) {
  const values = {
    employee_id: String(input.employeeId ?? ""),
    period_start: String(input.periodStart ?? ""),
    period_end: String(input.periodEnd ?? ""),
  };
  const errors = {};
  const employee = qGet(`SELECT * FROM employees WHERE id = ?`, Number(input.employeeId));
  const start = parseDate(input.periodStart);
  const end = parseDate(input.periodEnd);
  const today = todayParis();
  if (!employee) errors.employee_id = "Choisissez un employé.";
  if (!start) errors.period_start = "Indiquez le début de période.";
  if (!end) errors.period_end = "Indiquez la fin de période.";
  if (start && end && start > end) errors.period_end = "La fin de période doit suivre le début.";
  if (end && end > today) errors.period_end = "La période ne peut pas se terminer dans le futur.";
  if (start && end && start <= end) {
    const span = Math.round((Date.parse(`${end}T00:00:00Z`) - Date.parse(`${start}T00:00:00Z`)) / 86400000);
    if (span > 62) errors.period_end = "Choisissez une période d’au plus deux mois.";
  }
  if (employee && end && end < employee.start_date) {
    errors.period_end = "Cette période se termine avant l’arrivée de l’employé.";
  }
  if (Object.keys(errors).length) return fail(errors, values);

  const existing = qGet(
    `SELECT id FROM pay_runs WHERE employee_id = ? AND period_start = ? AND period_end = ?`,
    employee.id,
    start,
    end,
  );
  if (existing) {
    return {
      ok: false,
      errors: {
        period_end: "Une estimation existe déjà pour cette personne sur cette période.",
      },
      values,
      existingId: existing.id,
    };
  }

  const minutesRow = qGet(
    `SELECT COALESCE(SUM(minutes), 0) AS minutes FROM shifts
     WHERE employee_id = ? AND work_date >= ? AND work_date <= ?`,
    employee.id,
    start,
    end,
  );
  const minutes = minutesRow.minutes;
  if (employee.contract === "horaire" && minutes <= 0) {
    return fail(
      {
        period_end: "Aucune heure enregistrée sur cette période. Saisissez les heures avant de préparer l’estimation.",
      },
      values,
    );
  }

  const gross = employee.contract === "horaire"
    ? Math.round((minutes / 60) * employee.rate_cents)
    : employee.rate_cents;
  const contribution = Math.round(gross * CONTRIBUTION_RATE);
  const net = gross - contribution;
  const id = insertId(
    qRun(
      `INSERT INTO pay_runs (
         employee_id, employee_name, role, contract, rate_cents, period_start, period_end,
         minutes, gross_cents, contribution_rate, contribution_cents, net_cents, created_at
       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      employee.id,
      `${employee.first_name} ${employee.last_name}`,
      employee.role,
      employee.contract,
      employee.rate_cents,
      start,
      end,
      minutes,
      gross,
      CONTRIBUTION_RATE,
      contribution,
      net,
      new Date().toISOString(),
    ),
  );
  return { ok: true, id };
}

export function activeEmployees() {
  return qAll(
    `SELECT * FROM employees WHERE active = 1 ORDER BY last_name COLLATE NOCASE, first_name COLLATE NOCASE`,
  );
}

function paris(day, time) {
  return new Date(`${day}T${time}:00+02:00`).toISOString();
}

function openDays(year, month, until = null) {
  const days = [];
  const cursor = new Date(Date.UTC(year, month - 1, 1));
  while (cursor.getUTCMonth() === month - 1) {
    const weekday = cursor.getUTCDay();
    const iso = cursor.toISOString().slice(0, 10);
    if (weekday >= 2 && weekday <= 6 && (!until || iso <= until)) days.push(iso);
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }
  return days;
}

function seed() {
  const products = qGet(`SELECT COUNT(*) AS n FROM products`).n;
  const employees = qGet(`SELECT COUNT(*) AS n FROM employees`).n;
  if (products > 0 || employees > 0) return;

  db.exec("BEGIN");
  try {
    seedCatalogue();
    seedTeam();
    const mismatch = qAll(`
      SELECT v.id, v.sku, v.quantity, COALESCE(SUM(m.quantity), 0) AS ledger
      FROM variants v
      LEFT JOIN movements m ON m.variant_id = v.id
      GROUP BY v.id
      HAVING v.quantity != ledger
    `);
    if (mismatch.length) {
      throw new Error(`Écart de stock dans le jeu de démonstration : ${JSON.stringify(mismatch)}`);
    }
    db.exec("COMMIT");
  } catch (error) {
    db.exec("ROLLBACK");
    throw error;
  }
}

function seedCatalogue() {
  const catalogue = [
    {
      name: "Chemise lin Rivage",
      category: "hauts",
      brand: "Maison Céleste",
      sku: "CEL-RIV",
      purchase: 4200,
      sale: 9500,
      variants: [
        ["Ivoire", "XS", 3],
        ["Ivoire", "S", 6],
        ["Ivoire", "M", 8, 2, [{ type: "retour", quantity: 1, at: paris("2026-10-01", "15:05"), note: "Échange de taille" }]],
        ["Ivoire", "L", 5],
        ["Ivoire", "XL", 1, 2, [{ type: "vente", quantity: -1, at: paris("2026-09-28", "14:10"), note: "Vente comptoir" }]],
        ["Bleu nuit", "S", 4],
        ["Bleu nuit", "M", 5],
        ["Bleu nuit", "L", 3],
      ],
    },
    {
      name: "Pull mérinos Fourvière",
      category: "hauts",
      brand: "Filature Alma",
      sku: "FIL-FOU",
      purchase: 4800,
      sale: 12800,
      variants: [
        ["Bordeaux", "S", 1, 2, [{ type: "vente", quantity: -1, at: paris("2026-09-27", "16:15"), note: "Vente comptoir" }]],
        ["Bordeaux", "M", 5],
        ["Bordeaux", "L", 4],
        ["Gris perle", "M", 4],
        ["Gris perle", "L", 3],
      ],
    },
    {
      name: "Jean droit Canut",
      category: "bas",
      brand: "Atelier Brume",
      sku: "BRU-CAN",
      purchase: 3600,
      sale: 11000,
      variants: [
        ["Indigo", "36", 4],
        ["Indigo", "38", 6, 2, [{ type: "entree", quantity: 2, at: paris("2026-10-02", "11:05"), note: "Livraison Atelier Brume" }]],
        ["Indigo", "40", 5],
        ["Indigo", "42", 1, 2, [{ type: "vente", quantity: -1, at: paris("2026-09-18", "15:10"), note: "Vente comptoir" }]],
      ],
    },
    {
      name: "Pantalon tailleur Bellecour",
      category: "bas",
      brand: "Maison Céleste",
      sku: "CEL-BEL",
      purchase: 5200,
      sale: 14500,
      variants: [
        ["Noir", "36", 4],
        ["Noir", "38", 5],
        ["Noir", "40", 3],
        ["Noir", "42", 0, 2, [{ type: "vente", quantity: -1, at: paris("2026-09-19", "17:20"), note: "Dernière pièce" }]],
        ["Camel", "38", 3],
        ["Camel", "40", 4],
      ],
    },
    {
      name: "Robe midi Saône",
      category: "robes",
      brand: "Maison Céleste",
      sku: "CEL-SAO",
      purchase: 5800,
      sale: 16500,
      variants: [
        ["Terracotta", "XS", 3],
        ["Terracotta", "S", 4],
        ["Terracotta", "M", 6, 2, [{ type: "vente", quantity: -1, at: paris("2026-10-02", "16:20"), note: "Vente comptoir" }]],
        ["Terracotta", "L", 3],
        ["Écru", "S", 3],
        ["Écru", "M", 4],
        ["Écru", "L", 3],
      ],
    },
    {
      name: "Robe chemise Céladon",
      category: "robes",
      brand: "Studio Lina",
      sku: "LIN-CEL",
      purchase: 4400,
      sale: 12500,
      variants: [
        ["Vert sauge", "S", 0, 2, [{ type: "vente", quantity: -1, at: paris("2026-09-14", "16:00"), note: "Vente comptoir" }]],
        ["Vert sauge", "M", 4, 2, [{ type: "retour", quantity: 1, at: paris("2026-09-22", "10:30"), note: "Retour — taille trop petite" }]],
        ["Vert sauge", "L", 3],
      ],
    },
    {
      name: "Veste laine Croix-Rousse",
      category: "vestes",
      brand: "Filature Alma",
      sku: "FIL-CRO",
      purchase: 9200,
      sale: 24500,
      variants: [
        ["Camel", "S", 3],
        ["Camel", "M", 4, 2, [{ type: "vente", quantity: -1, at: paris("2026-09-30", "18:00"), note: "Vente comptoir" }]],
        ["Camel", "L", 3],
        ["Charbon", "M", 3],
        ["Charbon", "L", 1, 2, [{ type: "vente", quantity: -1, at: paris("2026-09-17", "15:40"), note: "Vente comptoir" }]],
      ],
    },
    {
      name: "Trench coton Presqu’île",
      category: "vestes",
      brand: "Maison Céleste",
      sku: "CEL-PRE",
      purchase: 11000,
      sale: 28900,
      variants: [
        ["Beige", "36", 3],
        ["Beige", "38", 4, 2, [{ type: "vente", quantity: -1, at: paris("2026-09-24", "15:40"), note: "Vente comptoir" }]],
        ["Beige", "40", 3],
        ["Beige", "42", 3],
      ],
    },
    {
      name: "Bottines Terreaux",
      category: "chaussures",
      brand: "Cuir du Rhône",
      sku: "RHO-TER",
      purchase: 6800,
      sale: 17900,
      variants: [
        ["Cognac", "37", 3],
        ["Cognac", "38", 4],
        ["Cognac", "39", 4, 2, [{ type: "vente", quantity: -1, at: paris("2026-10-01", "17:10"), note: "Vente comptoir" }]],
        ["Cognac", "40", 3],
        ["Cognac", "41", 0, 2, [{ type: "vente", quantity: -1, at: paris("2026-09-11", "16:45"), note: "Dernière pointure" }]],
      ],
    },
    {
      name: "Baskets toile Confluence",
      category: "chaussures",
      brand: "Atelier Brume",
      sku: "BRU-CON",
      purchase: 2900,
      sale: 8500,
      variants: [
        ["Blanc", "37", 5],
        ["Blanc", "38", 6, 2, [{ type: "entree", quantity: 4, at: paris("2026-09-12", "09:40"), note: "Livraison Atelier Brume" }]],
        ["Blanc", "39", 4],
        ["Blanc", "40", 3],
        ["Blanc", "41", 3],
      ],
    },
    {
      name: "Foulard soie Soie d’or",
      category: "accessoires",
      brand: "Soieries Céleste",
      sku: "SOI-OR",
      purchase: 2200,
      sale: 6200,
      variants: [
        ["Or vieilli", "TU", 2, 4, [{ type: "ajustement", quantity: -1, at: paris("2026-09-29", "12:30"), note: "Écart d’inventaire vitrine" }]],
        ["Bordeaux", "TU", 8, 4],
      ],
    },
    {
      name: "Ceinture cuir Quai",
      category: "accessoires",
      brand: "Cuir du Rhône",
      sku: "RHO-QUA",
      purchase: 1600,
      sale: 4800,
      variants: [
        ["Noir", "80", 4],
        ["Noir", "85", 5, 2, [{ type: "entree", quantity: 3, at: paris("2026-09-26", "11:00"), note: "Livraison Cuir du Rhône" }]],
        ["Noir", "90", 3],
        ["Camel", "85", 3],
      ],
    },
  ];

  for (const product of catalogue) {
    const productId = insertId(
      qRun(
        `INSERT INTO products (name, category, brand, sku, purchase_cents, sale_cents, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        product.name,
        product.category,
        product.brand,
        product.sku,
        product.purchase,
        product.sale,
        paris("2026-08-01", "10:00"),
      ),
    );
    for (const variant of product.variants) {
      const [color, size, target, threshold = 2, history = []] = variant;
      const delta = history.reduce((sum, item) => sum + item.quantity, 0);
      const opening = target - delta;
      if (opening < 0) {
        throw new Error(`Stock d’ouverture négatif pour ${product.sku} ${color} ${size}`);
      }
      const colorPart = (skuify(color) || "X").replace(/-/g, "").slice(0, 8);
      const sizePart = (skuify(size) || "T").replace(/-/g, "").slice(0, 4);
      const variantId = insertId(
        qRun(
          `INSERT INTO variants (product_id, color, size, sku, quantity, threshold, created_at)
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
          productId,
          color,
          size,
          `${product.sku}-${colorPart}-${sizePart}`,
          target,
          threshold,
          paris("2026-08-18", "09:00"),
        ),
      );
      if (opening > 0) {
        qRun(
          `INSERT INTO movements (variant_id, type, quantity, note, created_at) VALUES (?, 'entree', ?, ?, ?)`,
          variantId,
          opening,
          "Stock d’ouverture — rentrée",
          paris("2026-08-18", "09:00"),
        );
      }
      for (const item of history) {
        qRun(
          `INSERT INTO movements (variant_id, type, quantity, note, created_at) VALUES (?, ?, ?, ?, ?)`,
          variantId,
          item.type,
          item.quantity,
          item.note,
          item.at,
        );
      }
    }
  }
}

function seedTeam() {
  const team = [
    {
      first: "Solène",
      last: "Marchand",
      role: "Gérante",
      contract: "mensuel",
      rate: 280000,
      start: "2019-03-04",
      minutes: 480,
      match: () => true,
    },
    {
      first: "Inès",
      last: "Carvalho",
      role: "Vendeuse",
      contract: "horaire",
      rate: 1350,
      start: "2022-09-12",
      minutes: 420,
      match: () => true,
    },
    {
      first: "Malik",
      last: "Benyamina",
      role: "Caissier",
      contract: "horaire",
      rate: 1280,
      start: "2023-11-06",
      minutes: 390,
      match: () => true,
    },
    {
      first: "Camille",
      last: "Roux",
      role: "Vendeuse",
      contract: "horaire",
      rate: 1320,
      start: "2024-04-15",
      minutes: 360,
      match: (day) => [4, 5, 6].includes(new Date(`${day}T12:00:00Z`).getUTCDay()),
    },
    {
      first: "Hugo",
      last: "Pellier",
      role: "Responsable stock",
      contract: "mensuel",
      rate: 240000,
      start: "2021-06-01",
      minutes: 480,
      match: (day) => [2, 3, 4, 5].includes(new Date(`${day}T12:00:00Z`).getUTCDay()),
    },
  ];
  const notes = [
    "Ouverture de la boutique",
    "Accueil et cabine",
    "Fermeture de caisse",
    "Réassort du rayon",
    "Inventaire tournant",
  ];
  const september = openDays(2026, 9);
  const october = openDays(2026, 10, "2026-10-02");
  const ids = [];
  for (const person of team) {
    const id = insertId(
      qRun(
        `INSERT INTO employees (first_name, last_name, role, contract, rate_cents, start_date, active, created_at)
         VALUES (?, ?, ?, ?, ?, ?, 1, ?)`,
        person.first,
        person.last,
        person.role,
        person.contract,
        person.rate,
        person.start,
        paris("2026-08-01", "09:00"),
      ),
    );
    ids.push(id);
    const days = [...september, ...october].filter((day) => person.match(day));
    days.forEach((day, index) => {
      qRun(
        `INSERT INTO shifts (employee_id, work_date, minutes, note, created_at) VALUES (?, ?, ?, ?, ?)`,
        id,
        day,
        person.minutes,
        notes[index % notes.length],
        paris(day, "19:00"),
      );
    });
  }
  for (const id of ids) {
    const result = createPayRun({
      employeeId: id,
      periodStart: "2026-09-01",
      periodEnd: "2026-09-30",
    });
    if (!result.ok) {
      throw new Error(`Estimation de démonstration refusée : ${JSON.stringify(result.errors)}`);
    }
  }
}

seed();

export function monthRange(which = "current") {
  return monthBounds(which);
}
