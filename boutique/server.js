import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as db from "./lib/db.js";
import { todayParis } from "./lib/format.js";
import * as views from "./lib/views.js";

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT) || 3040;

const files = {
  "/styles.css": ["public/styles.css", "text/css; charset=utf-8"],
  "/app.js": ["public/app.js", "text/javascript; charset=utf-8"],
  "/favicon.svg": ["public/favicon.svg", "image/svg+xml"],
};

function send(res, html, status = 200) {
  res.writeHead(status, {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(html);
}

function redirect(res, location) {
  res.writeHead(303, { Location: location });
  res.end();
}

const TEXT_LIMIT = 200_000;
const FILE_LIMIT = 8_000_000;
const PHOTO_MAX = 5_000_000;

function readBody(req, limit) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > limit) {
        reject(Object.assign(new Error("Corps de requête trop volumineux."), { status: 413 }));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

function formFromParams(params, file = null) {
  return {
    get: (name) => params.get(name),
    getAll: (name) => params.getAll(name),
    entries: () => params.entries(),
    has: (name) => params.has(name),
    file,
  };
}

function headerValue(header, key) {
  const match = new RegExp(`${key}="([^"]*)"`, "i").exec(header);
  return match ? match[1] : "";
}

function parseMultipart(buffer, contentType) {
  const match = /boundary=(?:"([^"]+)"|([^;]+))/i.exec(contentType);
  const boundary = (match?.[1] || match?.[2] || "").trim();
  if (!boundary) throw Object.assign(new Error("Formulaire incomplet."), { status: 400 });
  const delimiter = Buffer.from(`--${boundary}`);
  const params = new URLSearchParams();
  let file = null;
  let start = buffer.indexOf(delimiter);
  if (start < 0) throw Object.assign(new Error("Formulaire incomplet."), { status: 400 });
  while (start >= 0 && start < buffer.length) {
    let cursor = start + delimiter.length;
    if (buffer[cursor] === 45 && buffer[cursor + 1] === 45) break;
    if (buffer[cursor] === 13 && buffer[cursor + 1] === 10) cursor += 2;
    const next = buffer.indexOf(delimiter, cursor);
    if (next < 0) break;
    let partEnd = next;
    if (partEnd >= 2 && buffer[partEnd - 2] === 13 && buffer[partEnd - 1] === 10) partEnd -= 2;
    const part = buffer.subarray(cursor, partEnd);
    const sep = part.indexOf(Buffer.from("\r\n\r\n"));
    if (sep >= 0) {
      const header = part.subarray(0, sep).toString("latin1");
      const body = part.subarray(sep + 4);
      const name = headerValue(header, "name");
      if (name && /filename="/i.test(header)) {
        const filename = headerValue(header, "filename");
        if (name === "photo" && filename && body.length) file = { filename, buffer: Buffer.from(body) };
      } else if (name) {
        params.append(name, body.toString("utf8"));
      }
    }
    start = next;
  }
  return formFromParams(params, file);
}

function readForm(req) {
  const type = String(req.headers["content-type"] || "");
  if (type.toLowerCase().includes("multipart/form-data")) {
    return readBody(req, FILE_LIMIT).then((body) => parseMultipart(body, type));
  }
  return readBody(req, TEXT_LIMIT).then((body) => formFromParams(new URLSearchParams(body.toString("utf8"))));
}

function imageKind(buffer) {
  if (!Buffer.isBuffer(buffer) || buffer.length < 12) return null;
  if (buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) return "jpg";
  if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4e && buffer[3] === 0x47) return "png";
  if (buffer.toString("ascii", 0, 4) === "RIFF" && buffer.toString("ascii", 8, 12) === "WEBP") return "webp";
  return null;
}

function takePhoto(form) {
  const file = form.file;
  if (!file) return { file: null, error: "" };
  if (file.buffer.length > PHOTO_MAX) return { file: null, error: "La photo dépasse 5 Mo." };
  const ext = imageKind(file.buffer);
  if (!ext) return { file: null, error: "Choisissez une image JPEG, PNG ou WebP." };
  return { file: { buffer: file.buffer, ext }, error: "" };
}

function servePhoto(pathname, res) {
  let name = pathname.slice("/photos/".length);
  try {
    name = decodeURIComponent(name);
  } catch {
    return false;
  }
  if (name.includes("/") || name.includes("\\")) return false;
  const full = db.readProductPhoto(name);
  if (!full) return false;
  const types = { ".jpg": "image/jpeg", ".png": "image/png", ".webp": "image/webp" };
  res.writeHead(200, {
    "Content-Type": types[path.extname(full).toLowerCase()] || "application/octet-stream",
    "Cache-Control": "private, max-age=86400",
  });
  res.end(fs.readFileSync(full));
  return true;
}

function idFrom(value) {
  const id = Number(value);
  if (!Number.isInteger(id) || id <= 0) return null;
  return id;
}

function sizeRows(form) {
  const sizes = form.getAll("size");
  const qtys = form.getAll("qty");
  const thresholds = form.getAll("threshold");
  const count = Math.max(sizes.length, qtys.length, thresholds.length);
  const rows = [];
  for (let index = 0; index < count; index += 1) {
    rows.push({
      size: sizes[index] ?? "",
      qty: qtys[index] ?? "",
      threshold: thresholds[index] ?? "2",
    });
  }
  return rows;
}

function thresholdPairs(form) {
  const pairs = [];
  for (const [key, value] of form.entries()) {
    const match = /^threshold_(\d+)$/.exec(key);
    if (match) pairs.push({ id: Number(match[1]), threshold: value });
  }
  return pairs;
}

function serveStatic(pathname, res) {
  const file = files[pathname];
  if (!file) return false;
  const full = path.join(root, file[0]);
  if (!full.startsWith(root)) return false;
  const body = fs.readFileSync(full);
  res.writeHead(200, {
    "Content-Type": file[1],
    "Cache-Control": "no-cache",
  });
  res.end(body);
  return true;
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
  const pathname = url.pathname.replace(/\/+$/, "") || "/";
  try {
    if (req.method === "GET" && serveStatic(pathname, res)) return;
    if (req.method === "GET" && pathname.startsWith("/photos/")) {
      if (servePhoto(pathname, res)) return;
      send(res, views.notFoundPage(url.searchParams), 404);
      return;
    }
    if (req.method !== "GET" && req.method !== "POST") {
      res.writeHead(405, { Allow: "GET, POST" });
      res.end("Méthode non prise en charge.");
      return;
    }

    if (req.method === "GET" && pathname === "/") {
      send(res, views.dashboardPage(db.getDashboard(), url.searchParams));
      return;
    }

    if (req.method === "GET" && pathname === "/catalogue") {
      send(
        res,
        views.cataloguePage(
          db.listProducts({ q: url.searchParams.get("q") || "", category: url.searchParams.get("categorie") || "" }),
          url.searchParams,
        ),
      );
      return;
    }

    if (req.method === "GET" && pathname === "/catalogue/nouveau") {
      send(res, views.newProductPage({ query: url.searchParams }));
      return;
    }

    if (req.method === "POST" && pathname === "/catalogue") {
      const form = await readForm(req);
      const photo = takePhoto(form);
      const result = db.createProduct({
        name: form.get("name"),
        category: form.get("category"),
        brand: form.get("brand"),
        sku: form.get("sku"),
        purchase: form.get("purchase"),
        sale: form.get("sale"),
        color: form.get("color"),
        rows: sizeRows(form),
        photo: photo.file,
        photoError: photo.error,
      });
      if (!result.ok) {
        send(res, views.newProductPage({ values: result.values, errors: result.errors, query: url.searchParams }), 422);
        return;
      }
      redirect(res, `/catalogue/${result.id}?ok=produit`);
      return;
    }

    const productMatch = pathname.match(/^\/catalogue\/(\d+)$/);
    if (productMatch && req.method === "GET") {
      const record = db.getProduct(idFrom(productMatch[1]));
      if (!record) {
        send(res, views.notFoundPage(url.searchParams), 404);
        return;
      }
      send(res, views.productPage({ record, query: url.searchParams }));
      return;
    }

    if (productMatch && req.method === "POST") {
      const id = idFrom(productMatch[1]);
      const form = await readForm(req);
      const photo = takePhoto(form);
      const result = db.updateProduct(id, {
        name: form.get("name"),
        category: form.get("category"),
        brand: form.get("brand"),
        sku: form.get("sku"),
        purchase: form.get("purchase"),
        sale: form.get("sale"),
        photo: photo.file,
        photoError: photo.error,
      });
      if (result.notFound) {
        send(res, views.notFoundPage(url.searchParams), 404);
        return;
      }
      if (!result.ok) {
        const record = db.getProduct(id);
        send(res, views.productPage({ record, values: result.values, errors: result.errors, query: url.searchParams }), 422);
        return;
      }
      redirect(res, `/catalogue/${id}?ok=produit-modifie`);
      return;
    }

    const variantMatch = pathname.match(/^\/catalogue\/(\d+)\/variantes$/);
    if (variantMatch && req.method === "POST") {
      const id = idFrom(variantMatch[1]);
      const form = await readForm(req);
      const result = db.addVariant(id, {
        color: form.get("color"),
        size: form.get("size"),
        qty: form.get("qty"),
        threshold: form.get("threshold"),
      });
      if (result.notFound) {
        send(res, views.notFoundPage(url.searchParams), 404);
        return;
      }
      if (!result.ok) {
        const record = db.getProduct(id);
        send(res, views.productPage({ record, values: result.values, errors: result.errors, query: url.searchParams }), 422);
        return;
      }
      redirect(res, `/catalogue/${id}?ok=variante`);
      return;
    }

    const thresholdMatch = pathname.match(/^\/catalogue\/(\d+)\/seuils$/);
    if (thresholdMatch && req.method === "POST") {
      const id = idFrom(thresholdMatch[1]);
      const form = await readForm(req);
      const result = db.updateThresholds(id, thresholdPairs(form));
      if (result.notFound) {
        send(res, views.notFoundPage(url.searchParams), 404);
        return;
      }
      if (!result.ok) {
        const record = db.getProduct(id);
        send(res, views.productPage({ record, errors: result.errors, query: url.searchParams }), 422);
        return;
      }
      redirect(res, `/catalogue/${id}?ok=seuils`);
      return;
    }

    if (pathname === "/mouvements" && req.method === "GET") {
      const filtre = url.searchParams.get("filtre") || "";
      const allowed = ["entree", "vente", "retour", "ajustement", "location"];
      send(
        res,
        views.movementsPage({
          movements: db.listMovements({ limit: 50, type: allowed.includes(filtre) ? filtre : "" }),
          variants: db.listVariantsDetailed(),
          query: url.searchParams,
        }),
      );
      return;
    }

    if (pathname === "/mouvements" && req.method === "POST") {
      const form = await readForm(req);
      const result = db.recordMovement({
        variantId: form.get("variant_id"),
        type: form.get("type"),
        direction: form.get("direction"),
        quantity: form.get("quantity"),
        note: form.get("note"),
      });
      if (!result.ok) {
        send(
          res,
          views.movementsPage({
            movements: db.listMovements({ limit: 50 }),
            variants: db.listVariantsDetailed(),
            values: result.values,
            errors: result.errors,
            query: url.searchParams,
          }),
          422,
        );
        return;
      }
      redirect(res, `/mouvements?ok=mouvement&reste=${result.stock}&alerte=${result.alert}`);
      return;
    }

    if (pathname === "/alertes" && req.method === "GET") {
      send(res, views.alertsPage(db.listLowStock(), url.searchParams));
      return;
    }

    if (pathname === "/locations" && req.method === "GET") {
      send(
        res,
        views.locationsPage({
          boards: db.rentalBoards(),
          variants: db.listVariantsDetailed(),
          query: url.searchParams,
        }),
      );
      return;
    }

    if (pathname === "/locations" && req.method === "POST") {
      const form = await readForm(req);
      const result = db.createRental({
        variantId: form.get("variant_id"),
        clientName: form.get("client_name"),
        clientPhone: form.get("client_phone"),
        startDate: form.get("start_date"),
        dueDate: form.get("due_date"),
        price: form.get("price"),
        deposit: form.get("deposit"),
        status: form.get("status"),
      });
      if (!result.ok) {
        send(
          res,
          views.locationsPage({
            boards: db.rentalBoards(),
            variants: db.listVariantsDetailed(),
            values: result.values,
            errors: result.errors,
            query: url.searchParams,
          }),
          422,
        );
        return;
      }
      redirect(res, `/locations?ok=location&reste=${result.stock}`);
      return;
    }

    const rentalReturn = pathname.match(/^\/locations\/(\d+)\/retour$/);
    if (rentalReturn && req.method === "POST") {
      const result = db.returnRental(idFrom(rentalReturn[1]));
      if (!result || result.notFound) {
        send(res, views.notFoundPage(url.searchParams), 404);
        return;
      }
      if (!result.ok) {
        redirect(res, `/locations?err=${encodeURIComponent(result.errors.status || "Retour impossible.")}`);
        return;
      }
      redirect(res, "/locations?ok=location-retour");
      return;
    }

    if (pathname === "/paie" && req.method === "GET") {
      send(res, views.payrollPage(db.getPayrollHome(), url.searchParams));
      return;
    }

    if (pathname === "/paie/employes/nouveau" && req.method === "GET") {
      send(res, views.newEmployeePage({ query: url.searchParams }));
      return;
    }

    if (pathname === "/paie/employes" && req.method === "POST") {
      const form = await readForm(req);
      const result = db.createEmployee({
        firstName: form.get("first_name"),
        lastName: form.get("last_name"),
        role: form.get("role"),
        contract: form.get("contract"),
        rate: form.get("rate"),
        startDate: form.get("start_date"),
      });
      if (!result.ok) {
        send(res, views.newEmployeePage({ values: result.values, errors: result.errors, query: url.searchParams }), 422);
        return;
      }
      redirect(res, `/paie/employes/${result.id}?ok=employe`);
      return;
    }

    const employeeMatch = pathname.match(/^\/paie\/employes\/(\d+)$/);
    if (employeeMatch && req.method === "GET") {
      const record = db.getEmployee(idFrom(employeeMatch[1]));
      if (!record) {
        send(res, views.notFoundPage(url.searchParams), 404);
        return;
      }
      send(res, views.employeePage({ record, query: url.searchParams }));
      return;
    }

    if (employeeMatch && req.method === "POST") {
      const id = idFrom(employeeMatch[1]);
      const form = await readForm(req);
      const result = db.updateEmployee(id, {
        firstName: form.get("first_name"),
        lastName: form.get("last_name"),
        role: form.get("role"),
        contract: form.get("contract"),
        rate: form.get("rate"),
        startDate: form.get("start_date"),
        active: form.has("active"),
      });
      if (result.notFound) {
        send(res, views.notFoundPage(url.searchParams), 404);
        return;
      }
      if (!result.ok) {
        send(
          res,
          views.employeePage({ record: db.getEmployee(id), values: result.values, errors: result.errors, query: url.searchParams }),
          422,
        );
        return;
      }
      redirect(res, `/paie/employes/${id}?ok=employe-modifie`);
      return;
    }

    if (pathname === "/paie/heures" && req.method === "GET") {
      const current = db.monthRange("current");
      send(
        res,
        views.hoursPage({
          employees: db.activeEmployees(),
          shifts: db.listShifts({ from: current.start, to: current.end, limit: 60 }),
          values: { work_date: todayParis() },
          query: url.searchParams,
        }),
      );
      return;
    }

    if (pathname === "/paie/heures" && req.method === "POST") {
      const form = await readForm(req);
      const result = db.addShift({
        employeeId: form.get("employee_id"),
        workDate: form.get("work_date"),
        hours: form.get("hours"),
        note: form.get("note"),
      });
      if (!result.ok) {
        const current = db.monthRange("current");
        send(
          res,
          views.hoursPage({
            employees: db.activeEmployees(),
            shifts: db.listShifts({ from: current.start, to: current.end, limit: 60 }),
            values: result.values,
            errors: result.errors,
            query: url.searchParams,
          }),
          422,
        );
        return;
      }
      redirect(res, "/paie/heures?ok=heures");
      return;
    }

    if (pathname === "/paie/estimations" && req.method === "GET") {
      const current = db.monthRange("current");
      send(
        res,
        views.estimationsPage({
          runs: db.listPayRuns(40),
          employees: db.listEmployees(),
          values: { period_start: current.start, period_end: todayParis() },
          query: url.searchParams,
        }),
      );
      return;
    }

    if (pathname === "/paie/estimations" && req.method === "POST") {
      const form = await readForm(req);
      const result = db.createPayRun({
        employeeId: form.get("employee_id"),
        periodStart: form.get("period_start"),
        periodEnd: form.get("period_end"),
      });
      if (!result.ok) {
        send(
          res,
          views.estimationsPage({
            runs: db.listPayRuns(40),
            employees: db.listEmployees(),
            values: result.values,
            errors: result.errors,
            existingId: result.existingId || null,
            query: url.searchParams,
          }),
          422,
        );
        return;
      }
      redirect(res, `/paie/estimations/${result.id}?ok=bulletin`);
      return;
    }

    const slipMatch = pathname.match(/^\/paie\/estimations\/(\d+)$/);
    if (slipMatch && req.method === "GET") {
      const detail = db.getPayRun(idFrom(slipMatch[1]));
      if (!detail) {
        send(res, views.notFoundPage(url.searchParams), 404);
        return;
      }
      send(res, views.payslipPage({ detail, query: url.searchParams }));
      return;
    }

    send(res, views.notFoundPage(url.searchParams), 404);
  } catch (error) {
    console.error(error);
    const status = error.status || 500;
    send(
      res,
      views.notFoundPage(url.searchParams).replace("Page introuvable", status === 413 ? "Formulaire trop volumineux" : "Erreur inattendue"),
      status,
    );
  }
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Maison Céleste — http://localhost:${port}`);
});
