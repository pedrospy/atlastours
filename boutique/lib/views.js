import {
  ACCESSORY_SIZES,
  APPAREL_SIZES,
  BRANDS,
  CATEGORIES,
  COLOR_HEX,
  COLOR_SUGGESTIONS,
  CONTRIBUTION_RATE,
  CONTRACTS,
  LIGHT_COLORS,
  MOVEMENT_TYPES,
  ROLES,
  SHOE_SIZES,
} from "./constants.js";
import { navCounts } from "./db.js";
import {
  categoryLabel,
  contractLabel,
  esc,
  euro,
  formatDate,
  formatDateMedium,
  formatDateTime,
  formatHours,
  formatInt,
  formatSignedQty,
  formatTodayLabel,
  moneyValue,
  movementLabel,
  rateLabel,
  stockState,
} from "./format.js";

const STOCK_NAV = [
  ["dashboard", "/", "Tableau de bord"],
  ["catalogue", "/catalogue", "Catalogue"],
  ["nouveau", "/catalogue/nouveau", "Nouveau produit"],
  ["mouvements", "/mouvements", "Mouvements"],
  ["alertes", "/alertes", "Alertes"],
];

const PAY_NAV = [
  ["paie", "/paie", "Vue d’ensemble"],
  ["employe-nouveau", "/paie/employes/nouveau", "Nouvel employé"],
  ["heures", "/paie/heures", "Heures"],
  ["estimations", "/paie/estimations", "Estimations"],
];

function layout({ title, section, active, body, query }) {
  const { alerts } = navCounts();
  const items = section === "paie" ? PAY_NAV : STOCK_NAV;
  const nav = items
    .map(([key, href, label]) => {
      const badge = key === "alertes" && alerts > 0 ? `<span class="count-pill">${alerts}</span>` : "";
      return `<a href="${href}" class="${key === active ? "on" : ""}" ${key === active ? 'aria-current="page"' : ""}>${esc(label)}${badge}</a>`;
    })
    .join("");
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)} · Maison Céleste</title>
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/styles.css">
  <script>document.documentElement.classList.add("js")</script>
</head>
<body>
  <a class="skip" href="#contenu">Aller au contenu</a>
  <header class="topbar">
    <a class="brand" href="/">
      <span class="mark" aria-hidden="true">C</span>
      <span class="brand-text">
        <strong>Maison Céleste</strong>
        <em>Lyon · prêt-à-porter</em>
      </span>
    </a>
    <nav class="sections" aria-label="Espaces">
      <a href="/" class="${section === "stock" ? "on" : ""}">Stock</a>
      <a href="/paie" class="${section === "paie" ? "on" : ""}">Paie</a>
    </nav>
    <p class="today">${esc(formatTodayLabel())}</p>
  </header>
  <div class="shell">
    <aside class="sidenav" aria-label="${section === "paie" ? "Paie" : "Stock"}">
      <p>${section === "paie" ? "Paie" : "Stock"}</p>
      ${nav}
    </aside>
    <main id="contenu">
      ${renderFlash(query)}
      ${body}
    </main>
  </div>
  <footer class="colophon">Maison Céleste · 14 rue de la République, 69002 Lyon · Outil interne de la boutique</footer>
  <script src="/app.js"></script>
</body>
</html>`;
}

function renderFlash(query) {
  if (!query) return "";
  const ok = query.get("ok");
  const err = query.get("err");
  if (ok === "mouvement") {
    const reste = Number(query.get("reste"));
    const alerte = query.get("alerte") === "1";
    let message = "Mouvement de stock enregistré.";
    if (Number.isInteger(reste) && reste >= 0) message += ` Stock restant : ${formatInt(reste)}.`;
    if (alerte) message += " Cette variante est sous le seuil d’alerte.";
    return `<p class="flash flash-ok" role="status">${esc(message)}</p>`;
  }
  const messages = {
    produit: "Produit ajouté au catalogue.",
    "produit-modifie": "Fiche produit mise à jour.",
    variante: "Variante ajoutée.",
    seuils: "Seuils d’alerte enregistrés.",
    employe: "Employé ajouté à l’équipe.",
    "employe-modifie": "Fiche employé mise à jour.",
    heures: "Heures enregistrées.",
    bulletin: "Estimation de paie préparée.",
  };
  if (ok && messages[ok]) return `<p class="flash flash-ok" role="status">${esc(messages[ok])}</p>`;
  if (err) return `<p class="flash flash-err" role="alert">${esc(err)}</p>`;
  return "";
}

function pageHead({ eyebrow, title, lede, actions = "" }) {
  return `<div class="page-head">
    <div>
      <p class="eyebrow">${esc(eyebrow)}</p>
      <h1>${esc(title)}</h1>
      ${lede ? `<p class="lede">${lede}</p>` : ""}
    </div>
    ${actions ? `<div class="page-actions">${actions}</div>` : ""}
  </div>`;
}

function field({ label, name, value = "", error, type = "text", required = false, hint, attrs = "", list }) {
  const listAttr = list ? ` list="${esc(list)}"` : "";
  return `<label class="field">
    <span>${esc(label)}${required ? " <i>*</i>" : ""}</span>
    <input name="${esc(name)}" type="${esc(type)}" value="${esc(value)}"${required ? " required" : ""}${listAttr} ${attrs}>
    ${hint ? `<small>${esc(hint)}</small>` : ""}
    ${error ? `<em class="field-error">${esc(error)}</em>` : ""}
  </label>`;
}

function selectField({ label, name, value = "", options, required = false, error, hint, attrs = "", placeholder = "Choisir" }) {
  const opts = [`<option value="">${esc(placeholder)}</option>`]
    .concat(
      options.map((option) => {
        const [key, text] = Array.isArray(option) ? option : [option, option];
        const selected = String(key) === String(value) ? " selected" : "";
        return `<option value="${esc(key)}"${selected}>${esc(text)}</option>`;
      }),
    )
    .join("");
  return `<label class="field">
    <span>${esc(label)}${required ? " <i>*</i>" : ""}</span>
    <select name="${esc(name)}"${required ? " required" : ""} ${attrs}>${opts}</select>
    ${hint ? `<small>${esc(hint)}</small>` : ""}
    ${error ? `<em class="field-error">${esc(error)}</em>` : ""}
  </label>`;
}

function errorSummary(errors) {
  if (!errors || !Object.keys(errors).length) return "";
  return `<p class="flash flash-err" role="alert">Merci de corriger les champs indiqués.</p>`;
}

function dot(color) {
  const key = String(color).toLocaleLowerCase("fr-FR");
  const hex = COLOR_HEX[key] || "#c9b8a4";
  const border = LIGHT_COLORS.has(key) || !COLOR_HEX[key] ? "#c8b79f" : "rgba(0,0,0,.18)";
  return `<span class="dot" style="background:${hex};box-shadow:inset 0 0 0 1px ${border}" title="${esc(color)}"></span>`;
}

function badge(type) {
  return `<span class="badge badge-${esc(type)}">${esc(movementLabel(type))}</span>`;
}

function tag(quantity, threshold) {
  const state = stockState(quantity, threshold);
  return `<span class="tag tag-${state.key}">${esc(state.label)}</span>`;
}

function emptyState({ title, text, actionHref, actionLabel }) {
  return `<div class="empty">
    <span class="empty-mark" aria-hidden="true">C</span>
    <h2>${esc(title)}</h2>
    <p>${esc(text)}</p>
    ${actionHref ? `<a class="btn btn-primary" href="${actionHref}">${esc(actionLabel)}</a>` : ""}
  </div>`;
}

function payNotice() {
  return `<aside class="notice">
    <strong>Aide à la gestion, pas un bulletin officiel.</strong>
    Les montants (brut, charges, net) sont des estimations simplifiées pour le suivi de la boutique. Ils ne constituent pas un bulletin de paie et ne remplacent ni les déclarations sociales ni un paiement.
  </aside>`;
}

function datalists() {
  const brands = BRANDS.map((brand) => `<option value="${esc(brand)}"></option>`).join("");
  const colors = COLOR_SUGGESTIONS.map((color) => `<option value="${esc(color)}"></option>`).join("");
  return `<datalist id="marques">${brands}</datalist><datalist id="couleurs">${colors}</datalist>`;
}

export function dashboardPage(data, query) {
  const kpis = [
    ["Valeur du stock", euro(data.purchaseValue), `Vente potentielle ${euro(data.saleValue)}`],
    ["Pièces en rayon", formatInt(data.units), `${formatInt(data.productCount)} modèles · ${formatInt(data.variantCount)} variantes`],
    ["Alertes stock bas", formatInt(data.alerts), data.alerts ? "Sous le seuil ou en rupture" : "Tous les seuils sont tenus"],
    ["Mouvements, 30 jours", formatInt(data.recentCount), "Entrées, ventes, retours, ajustements"],
  ]
    .map(
      ([label, value, sub], index) => `<article class="kpi${index === 2 && data.alerts ? " alert" : ""}">
        <p class="kpi-label">${esc(label)}</p>
        <p class="kpi-value">${esc(value)}</p>
        <p class="kpi-sub">${esc(sub)}</p>
      </article>`,
    )
    .join("");

  const movements = data.recent.length
    ? `<div class="table-wrap"><table class="table">
        <thead><tr><th>Quand</th><th>Type</th><th>Article</th><th>Variante</th><th class="num">Qté</th></tr></thead>
        <tbody>${data.recent.map(movementRow).join("")}</tbody>
      </table></div>`
    : `<p class="muted">Aucun mouvement pour le moment.</p>`;

  const low = data.low.length
    ? `<ul class="alert-list">${data.low
        .map(
          (item) => `<li>
            <a href="/catalogue/${item.product_id}">
              ${dot(item.color)}
              <span><strong>${esc(item.name)}</strong><small>${esc(item.color)} · ${esc(item.size)}</small></span>
            </a>
            ${tag(item.quantity, item.threshold)}
            <b>${formatInt(item.quantity)}</b>
          </li>`,
        )
        .join("")}</ul>
      <a class="text-link" href="/alertes">Voir les ${formatInt(data.alerts)} alertes</a>`
    : `<p class="muted">Aucune alerte. Le rayon est au-dessus des seuils.</p>`;

  const body = `
    ${pageHead({
      eyebrow: "Comptoir",
      title: "Tableau de bord",
      lede: "Valeur du rayon, pièces à réassortir et derniers mouvements de la boutique.",
      actions: `<a class="btn btn-ghost" href="/mouvements">Enregistrer un mouvement</a><a class="btn btn-primary" href="/catalogue/nouveau">Nouveau produit</a>`,
    })}
    <section class="kpis">${kpis}</section>
    <section class="dash-grid">
      <article class="panel">
        <div class="panel-head"><h2>Derniers mouvements</h2><a href="/mouvements">Tout voir</a></div>
        ${movements}
      </article>
      <article class="panel">
        <div class="panel-head"><h2>À réassortir</h2><a href="/alertes">Alertes</a></div>
        ${low}
      </article>
    </section>`;
  return layout({ title: "Tableau de bord", section: "stock", active: "dashboard", body, query });
}

function movementRow(item) {
  return `<tr>
    <td>${esc(formatDateTime(item.created_at))}</td>
    <td>${badge(item.type)}</td>
    <td><a href="/catalogue/${item.product_id}">${esc(item.name)}</a></td>
    <td>${dot(item.color)} ${esc(item.color)} · ${esc(item.size)}</td>
    <td class="num">${esc(formatSignedQty(item.quantity))}</td>
  </tr>`;
}

export function cataloguePage(products, query) {
  const q = query.get("q") || "";
  const category = query.get("categorie") || "";
  const filters = `<form class="filters" method="get" action="/catalogue">
    <label class="field grow">
      <span>Recherche</span>
      <input type="search" name="q" value="${esc(q)}" placeholder="Nom, marque, SKU, couleur…">
    </label>
    ${selectField({
      label: "Catégorie",
      name: "categorie",
      value: category,
      options: CATEGORIES,
      placeholder: "Toutes les catégories",
    })}
    <button class="btn btn-primary" type="submit">Filtrer</button>
  </form>`;
  const table = products.length
    ? `<div class="table-wrap"><table class="table catalogue">
        <thead><tr>
          <th>Article</th><th>Catégorie</th><th class="num">Stock</th><th class="num">Vente</th><th>État</th>
        </tr></thead>
        <tbody>${products
          .map((product) => {
            const state = product.alerts > 0 ? (product.stock === 0 ? tag(0, 1) : `<span class="tag tag-low">${product.alerts} alerte${product.alerts > 1 ? "s" : ""}</span>`) : tag(1, 0);
            return `<tr>
              <td>
                <a href="/catalogue/${product.id}"><strong>${esc(product.name)}</strong></a>
                <small class="sub">${esc(product.brand)} · ${esc(product.sku)}</small>
                <span class="swatches">${product.colors.map((color) => `${dot(color)}<span>${esc(color)}</span>`).join("")}</span>
                <small class="sub">${esc(product.sizes.join(" · "))}</small>
              </td>
              <td>${esc(categoryLabel(product.category))}</td>
              <td class="num stock-num">${formatInt(product.stock)}</td>
              <td class="num">${esc(euro(product.sale_cents))}<small class="sub">achat ${esc(euro(product.purchase_cents))}</small></td>
              <td>${state}</td>
            </tr>`;
          })
          .join("")}</tbody>
      </table></div>`
    : emptyState({
        title: q || category ? "Aucun article ne correspond" : "Le catalogue est vide",
        text: q || category ? "Élargissez la recherche ou réinitialisez les filtres." : "Ajoutez la première pièce de la boutique.",
        actionHref: q || category ? "/catalogue" : "/catalogue/nouveau",
        actionLabel: q || category ? "Effacer les filtres" : "Nouveau produit",
      });
  const body = `
    ${pageHead({
      eyebrow: "Catalogue",
      title: "Pièces en boutique",
      lede: `${formatInt(products.length)} modèle${products.length > 1 ? "s" : ""} affiché${products.length > 1 ? "s" : ""}. Le stock se suit par couleur et par taille.`,
      actions: `<a class="btn btn-primary" href="/catalogue/nouveau">Nouveau produit</a>`,
    })}
    ${filters}
    <article class="panel">${table}</article>`;
  return layout({ title: "Catalogue", section: "stock", active: "catalogue", body, query });
}

function sizeRows(rows, errors) {
  const source = rows?.length ? rows : [{ size: "", qty: "", threshold: "2" }];
  return source
    .map(
      (row, index) => `<div class="size-row">
        <label>Taille
          <input name="size" value="${esc(row.size)}" required maxlength="12" placeholder="M" autocomplete="off">
        </label>
        <label>Quantité
          <input name="qty" value="${esc(row.qty)}" required inputmode="numeric" placeholder="0">
        </label>
        <label>Seuil
          <input name="threshold" value="${esc(row.threshold || "2")}" inputmode="numeric">
        </label>
        <button type="button" class="btn btn-ghost btn-small remove-size">Retirer</button>
        ${errors?.[`row_${index}`] ? `<em class="field-error wide-error">${esc(errors[`row_${index}`])}</em>` : ""}
      </div>`,
    )
    .join("");
}

export function newProductPage({ values = {}, errors = {}, query }) {
  const rows = values.rows?.length ? values.rows : [{ size: "", qty: "", threshold: "2" }];
  const body = `
    ${pageHead({
      eyebrow: "Catalogue",
      title: "Nouveau produit",
      lede: "Une fiche par modèle. Les tailles de la première couleur deviennent des variantes, avec leur propre stock.",
    })}
    ${errorSummary(errors)}
    <form class="form-card" method="post" action="/catalogue">
      <div class="form-grid">
        ${field({ label: "Nom", name: "name", value: values.name, error: errors.name, required: true, attrs: 'maxlength="80" autocomplete="off"' })}
        ${selectField({ label: "Catégorie", name: "category", value: values.category, options: CATEGORIES, required: true, error: errors.category })}
        ${field({ label: "Marque", name: "brand", value: values.brand, error: errors.brand, required: true, list: "marques", attrs: 'maxlength="60"' })}
        ${field({ label: "SKU", name: "sku", value: values.sku, error: errors.sku, hint: "Laissé vide, il est généré à partir du nom.", attrs: 'maxlength="32" placeholder="CEL-RIV" autocomplete="off"' })}
        ${field({ label: "Prix d’achat", name: "purchase", value: values.purchase, error: errors.purchase, required: true, hint: "En euros, par exemple 42,00.", attrs: 'inputmode="decimal" placeholder="42,00"' })}
        ${field({ label: "Prix de vente", name: "sale", value: values.sale, error: errors.sale, required: true, hint: "Prix boutique TTC indicatif.", attrs: 'inputmode="decimal" placeholder="95,00"' })}
        ${field({ label: "Couleur", name: "color", value: values.color, error: errors.color, required: true, list: "couleurs", attrs: 'class="wide-input" maxlength="40"', })}
      </div>
      <fieldset class="sizes">
        <legend>Tailles et stock initial</legend>
        <div class="chip-groups">
          <div>
            <p>Vêtements</p>
            <div class="chips">${APPAREL_SIZES.map((size) => `<button type="button" class="chip" data-size="${esc(size)}">${esc(size)}</button>`).join("")}</div>
          </div>
          <div>
            <p>Chaussures</p>
            <div class="chips">${SHOE_SIZES.map((size) => `<button type="button" class="chip" data-size="${esc(size)}">${esc(size)}</button>`).join("")}</div>
          </div>
          <div>
            <p>Accessoires</p>
            <div class="chips">${ACCESSORY_SIZES.map((size) => `<button type="button" class="chip" data-size="${esc(size)}">${esc(size)}</button>`).join("")}</div>
          </div>
        </div>
        <div id="size-rows">${sizeRows(rows, errors)}</div>
        ${errors.rows ? `<em class="field-error">${esc(errors.rows)}</em>` : ""}
        <button type="button" class="btn btn-ghost btn-small" id="add-size">Ajouter une taille</button>
      </fieldset>
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Enregistrer le produit</button>
        <a class="btn btn-ghost" href="/catalogue">Annuler</a>
      </div>
    </form>
    ${datalists()}`;
  return layout({ title: "Nouveau produit", section: "stock", active: "nouveau", body, query });
}

export function productPage({ record, errors = {}, values = {}, query, mode = "edit" }) {
  const { product, variants, movements } = record;
  const editValues = {
    name: values.name ?? product.name,
    category: values.category ?? product.category,
    brand: values.brand ?? product.brand,
    sku: values.sku ?? product.sku,
    purchase: values.purchase ?? moneyValue(product.purchase_cents),
    sale: values.sale ?? moneyValue(product.sale_cents),
  };
  const stock = variants.reduce((sum, variant) => sum + variant.quantity, 0);
  const margin = product.sale_cents - product.purchase_cents;
  const variantTable = variants.length
    ? `<form method="post" action="/catalogue/${product.id}/seuils">
        <div class="table-wrap"><table class="table">
          <thead><tr><th>Couleur</th><th>Taille</th><th>SKU</th><th class="num">Stock</th><th>Seuil</th><th>État</th><th></th></tr></thead>
          <tbody>${variants
            .map((variant) => {
              const rowClass = variant.quantity <= 0 ? "is-out" : variant.quantity <= variant.threshold ? "is-low" : "";
              return `<tr class="${rowClass}">
                <td>${dot(variant.color)} ${esc(variant.color)}</td>
                <td>${esc(variant.size)}</td>
                <td class="sku">${esc(variant.sku)}</td>
                <td class="num">${formatInt(variant.quantity)}</td>
                <td><input class="threshold" name="threshold_${variant.id}" value="${esc(variant.threshold)}" inputmode="numeric" aria-label="Seuil ${esc(variant.color)} ${esc(variant.size)}"></td>
                <td>${tag(variant.quantity, variant.threshold)}</td>
                <td><a class="text-link" href="/mouvements?variante=${variant.id}&amp;type=entree">Mouvement</a></td>
              </tr>`;
            })
            .join("")}</tbody>
        </table></div>
        ${errors.thresholds ? `<em class="field-error">${esc(errors.thresholds)}</em>` : ""}
        <div class="form-actions">
          <button class="btn btn-ghost" type="submit">Enregistrer les seuils</button>
        </div>
      </form>`
    : `<p class="muted">Aucune variante pour ce modèle.</p>`;

  const history = movements.length
    ? `<div class="table-wrap"><table class="table">
        <thead><tr><th>Quand</th><th>Type</th><th>Variante</th><th class="num">Qté</th><th>Motif</th></tr></thead>
        <tbody>${movements
          .map(
            (item) => `<tr>
              <td>${esc(formatDateTime(item.created_at))}</td>
              <td>${badge(item.type)}</td>
              <td>${esc(item.color)} · ${esc(item.size)}</td>
              <td class="num">${esc(formatSignedQty(item.quantity))}</td>
              <td>${esc(item.note || "—")}</td>
            </tr>`,
          )
          .join("")}</tbody>
      </table></div>`
    : `<p class="muted">Pas encore de mouvement sur cette fiche.</p>`;

  const body = `
    ${pageHead({
      eyebrow: categoryLabel(product.category),
      title: product.name,
      lede: `${esc(product.brand)} · SKU ${esc(product.sku)} · ${formatInt(stock)} pièce${stock > 1 ? "s" : ""} · marge ${esc(euro(margin))}`,
      actions: `<a class="btn btn-ghost" href="/catalogue">Retour catalogue</a><a class="btn btn-primary" href="/mouvements?type=vente">Enregistrer une vente</a>`,
    })}
    <section class="split">
      <article class="panel">
        <div class="panel-head"><h2>Stock par variante</h2></div>
        <p class="hint-block">Le stock ne se corrige que par un mouvement, pour garder l’historique.</p>
        ${variantTable}
      </article>
      <div class="stack">
        <article class="panel">
          <div class="panel-head"><h2>Fiche</h2></div>
          ${mode === "edit" ? errorSummary(errors.name || errors.category || errors.brand || errors.sku || errors.purchase || errors.sale ? errors : {}) : ""}
          <form method="post" action="/catalogue/${product.id}">
            <div class="form-grid one">
              ${field({ label: "Nom", name: "name", value: editValues.name, error: errors.name, required: true, attrs: 'maxlength="80"' })}
              ${selectField({ label: "Catégorie", name: "category", value: editValues.category, options: CATEGORIES, required: true, error: errors.category })}
              ${field({ label: "Marque", name: "brand", value: editValues.brand, error: errors.brand, required: true, list: "marques", attrs: 'maxlength="60"' })}
              ${field({ label: "SKU", name: "sku", value: editValues.sku, error: errors.sku, required: true, attrs: 'maxlength="32"' })}
              ${field({ label: "Prix d’achat", name: "purchase", value: editValues.purchase, error: errors.purchase, required: true, attrs: 'inputmode="decimal"' })}
              ${field({ label: "Prix de vente", name: "sale", value: editValues.sale, error: errors.sale, required: true, attrs: 'inputmode="decimal"' })}
            </div>
            <div class="form-actions"><button class="btn btn-primary" type="submit">Mettre à jour</button></div>
          </form>
        </article>
        <article class="panel">
          <div class="panel-head"><h2>Autre couleur ou taille</h2></div>
          <form method="post" action="/catalogue/${product.id}/variantes">
            <div class="form-grid one">
              ${field({ label: "Couleur", name: "color", value: values.v_color || "", error: errors.v_color, required: true, list: "couleurs", attrs: 'maxlength="40"' })}
              ${field({ label: "Taille", name: "size", value: values.v_size || "", error: errors.v_size, required: true, attrs: 'maxlength="12" placeholder="M"' })}
              ${field({ label: "Quantité initiale", name: "qty", value: values.v_qty || "", error: errors.v_qty, required: true, hint: "Crée une entrée de stock initial.", attrs: 'inputmode="numeric" placeholder="0"' })}
              ${field({ label: "Seuil d’alerte", name: "threshold", value: values.v_threshold || "2", error: errors.v_threshold, attrs: 'inputmode="numeric"' })}
            </div>
            <div class="form-actions"><button class="btn btn-ghost" type="submit">Ajouter la variante</button></div>
          </form>
        </article>
      </div>
    </section>
    <article class="panel">
      <div class="panel-head"><h2>Mouvements de cette pièce</h2><a href="/mouvements">Journal</a></div>
      ${history}
    </article>
    ${datalists()}`;
  return layout({ title: product.name, section: "stock", active: "catalogue", body, query });
}

export function movementsPage({ movements, variants, values = {}, errors = {}, query }) {
  const type = values.type || query.get("type") || "";
  const selected = values.variant_id || query.get("variante") || "";
  const groups = new Map();
  for (const variant of variants) {
    if (!groups.has(variant.name)) groups.set(variant.name, []);
    groups.get(variant.name).push(variant);
  }
  const options = [`<option value="">Choisir une variante</option>`];
  for (const [name, items] of groups) {
    options.push(`<optgroup label="${esc(name)}">`);
    for (const item of items) {
      const selectedAttr = String(item.id) === String(selected) ? " selected" : "";
      options.push(
        `<option value="${item.id}"${selectedAttr}>${esc(item.color)} · ${esc(item.size)} — ${formatInt(item.quantity)} en stock</option>`,
      );
    }
    options.push(`</optgroup>`);
  }
  const filter = query.get("filtre") || "";
  const table = movements.length
    ? `<div class="table-wrap"><table class="table">
        <thead><tr><th>Quand</th><th>Type</th><th>Article</th><th>Variante</th><th class="num">Qté</th><th>Motif</th><th class="num">Stock actuel</th></tr></thead>
        <tbody>${movements
          .map(
            (item) => `<tr>
              <td>${esc(formatDateTime(item.created_at))}</td>
              <td>${badge(item.type)}</td>
              <td><a href="/catalogue/${item.product_id}">${esc(item.name)}</a></td>
              <td>${dot(item.color)} ${esc(item.color)} · ${esc(item.size)}</td>
              <td class="num">${esc(formatSignedQty(item.quantity))}</td>
              <td>${esc(item.note || "—")}</td>
              <td class="num">${formatInt(item.stock)}</td>
            </tr>`,
          )
          .join("")}</tbody>
      </table></div>`
    : emptyState({
        title: "Aucun mouvement",
        text: filter ? "Aucun mouvement de ce type." : "Les entrées, ventes, retours et ajustements apparaîtront ici.",
        actionHref: filter ? "/mouvements" : "",
        actionLabel: "Tous les mouvements",
      });

  const body = `
    ${pageHead({
      eyebrow: "Journal",
      title: "Mouvements de stock",
      lede: "Entrée de réassort, vente, retour client ou ajustement d’inventaire. Une vente ne peut pas descendre sous zéro.",
    })}
    ${errorSummary(errors)}
    <form class="form-card" method="post" action="/mouvements">
      <div class="form-grid">
        <label class="field wide">
          <span>Variante <i>*</i></span>
          <select name="variant_id" required>${options.join("")}</select>
          ${errors.variant_id ? `<em class="field-error">${esc(errors.variant_id)}</em>` : ""}
        </label>
        ${selectField({ label: "Type", name: "type", value: type, options: MOVEMENT_TYPES, required: true, error: errors.type, attrs: 'id="movement-type"' })}
        <label class="field${type === "ajustement" ? " on" : ""}" id="direction-field">
          <span>Sens de l’ajustement</span>
          <select name="direction" id="movement-direction">
            <option value="plus"${values.direction === "plus" ? " selected" : ""}>Ajouter au stock</option>
            <option value="moins"${values.direction !== "plus" ? " selected" : ""}>Retirer du stock</option>
          </select>
          <small>Utilisé seulement pour un ajustement.</small>
          ${errors.direction ? `<em class="field-error">${esc(errors.direction)}</em>` : ""}
        </label>
        ${field({ label: "Quantité", name: "quantity", value: values.quantity || "", error: errors.quantity, required: true, attrs: 'inputmode="numeric" min="1" placeholder="1"' })}
        ${field({ label: "Motif", name: "note", value: values.note || "", error: errors.note, hint: "Facultatif. Ex. livraison fournisseur, vente comptoir.", attrs: 'maxlength="180"' })}
      </div>
      <div class="form-actions"><button class="btn btn-primary" type="submit">Enregistrer le mouvement</button></div>
    </form>
    <form class="filters" method="get" action="/mouvements">
      ${selectField({ label: "Filtrer", name: "filtre", value: filter, options: MOVEMENT_TYPES, placeholder: "Tous les types" })}
      <button class="btn btn-ghost" type="submit">Afficher</button>
    </form>
    <article class="panel">${table}</article>`;
  return layout({ title: "Mouvements", section: "stock", active: "mouvements", body, query });
}

export function alertsPage(rows, query) {
  const body = `
    ${pageHead({
      eyebrow: "Réassort",
      title: "Alertes stock bas",
      lede: "Variantes dont la quantité est inférieure ou égale au seuil. Une rupture est un stock à zéro.",
      actions: `<a class="btn btn-primary" href="/mouvements?type=entree">Entrée de stock</a>`,
    })}
    <article class="panel">
      ${
        rows.length
          ? `<div class="table-wrap"><table class="table">
              <thead><tr><th>Article</th><th>Variante</th><th>SKU</th><th class="num">Stock</th><th class="num">Seuil</th><th>État</th><th></th></tr></thead>
              <tbody>${rows
                .map((item) => {
                  const gap = Math.max(item.threshold - item.quantity, 0);
                  return `<tr class="${item.quantity <= 0 ? "is-out" : "is-low"}">
                    <td><a href="/catalogue/${item.product_id}"><strong>${esc(item.name)}</strong></a><small class="sub">${esc(item.brand)}</small></td>
                    <td>${dot(item.color)} ${esc(item.color)} · ${esc(item.size)}</td>
                    <td class="sku">${esc(item.sku)}</td>
                    <td class="num">${formatInt(item.quantity)}</td>
                    <td class="num">${formatInt(item.threshold)}</td>
                    <td>${tag(item.quantity, item.threshold)}${gap ? `<small class="sub">${formatInt(gap)} sous le seuil</small>` : ""}</td>
                    <td><a class="btn btn-small btn-ghost" href="/mouvements?variante=${item.id}&amp;type=entree">Réassortir</a></td>
                  </tr>`;
                })
                .join("")}</tbody>
            </table></div>`
          : emptyState({
              title: "Aucune alerte",
              text: "Toutes les variantes sont au-dessus de leur seuil.",
              actionHref: "/catalogue",
              actionLabel: "Voir le catalogue",
            })
      }
    </article>`;
  return layout({ title: "Alertes", section: "stock", active: "alertes", body, query });
}

export function payrollPage(data, query) {
  const monthLabel = formatDate(data.current.start).replace(/^\d+\s/, "");
  const previousLabel = formatDate(data.previous.start).replace(/^\d+\s/, "");
  const kpis = [
    ["Équipe en poste", formatInt(data.active), `${formatInt(data.employees.length)} fiche${data.employees.length > 1 ? "s" : ""}`],
    [`Heures · ${monthLabel}`, formatHours(data.monthMinutes), "Services déjà saisis ce mois-ci"],
    [`Net estimé · ${previousLabel}`, data.previousCount ? euro(data.previousNet) : "—", data.previousCount ? `${formatInt(data.previousCount)} estimations` : "Aucune estimation sur le mois précédent"],
    [`Brut estimé · ${previousLabel}`, data.previousCount ? euro(data.previousGross) : "—", "Avant retenue estimée de 22 %"],
  ]
    .map(
      ([label, value, sub]) => `<article class="kpi">
        <p class="kpi-label">${esc(label)}</p>
        <p class="kpi-value">${esc(value)}</p>
        <p class="kpi-sub">${esc(sub)}</p>
      </article>`,
    )
    .join("");

  const team = data.employees.length
    ? `<div class="table-wrap"><table class="table">
        <thead><tr><th>Employé</th><th>Rôle</th><th>Contrat</th><th class="num">Taux</th><th class="num">Heures du mois</th><th>Poste</th></tr></thead>
        <tbody>${data.employees
          .map(
            (person) => `<tr>
              <td><a href="/paie/employes/${person.id}"><strong>${esc(person.first_name)} ${esc(person.last_name)}</strong></a></td>
              <td>${esc(person.role)}</td>
              <td>${esc(contractLabel(person.contract))}</td>
              <td class="num">${esc(rateLabel(person.contract, person.rate_cents))}</td>
              <td class="num">${esc(formatHours(person.month_minutes))}</td>
              <td>${person.active ? '<span class="tag tag-ok">En poste</span>' : '<span class="tag tag-out">Parti</span>'}</td>
            </tr>`,
          )
          .join("")}</tbody>
      </table></div>`
    : emptyState({
        title: "Aucun employé",
        text: "Ajoutez la première personne de l’équipe.",
        actionHref: "/paie/employes/nouveau",
        actionLabel: "Nouvel employé",
      });

  const runs = data.runs.length
    ? `<ul class="run-list">${data.runs
        .map(
          (run) => `<li>
            <a href="/paie/estimations/${run.id}">
              <strong>${esc(run.employee_name)}</strong>
              <small>${esc(formatDateMedium(run.period_start))} — ${esc(formatDateMedium(run.period_end))}</small>
            </a>
            <b>${esc(euro(run.net_cents))}</b>
          </li>`,
        )
        .join("")}</ul>`
    : `<p class="muted">Aucune estimation pour le moment.</p>`;

  const body = `
    ${pageHead({
      eyebrow: "Équipe",
      title: "Paie de la boutique",
      lede: "Suivi des heures et estimation de rémunération. Les chiffres aident la gérance, ils ne remplacent pas la paie officielle.",
      actions: `<a class="btn btn-ghost" href="/paie/heures">Saisir des heures</a><a class="btn btn-primary" href="/paie/estimations">Préparer une estimation</a>`,
    })}
    ${payNotice()}
    <section class="kpis">${kpis}</section>
    <section class="dash-grid">
      <article class="panel">
        <div class="panel-head"><h2>Équipe</h2><a href="/paie/employes/nouveau">Ajouter</a></div>
        ${team}
      </article>
      <article class="panel">
        <div class="panel-head"><h2>Dernières estimations</h2><a href="/paie/estimations">Toutes</a></div>
        ${runs}
      </article>
    </section>`;
  return layout({ title: "Paie", section: "paie", active: "paie", body, query });
}

function employeeFields(values, errors) {
  return `<div class="form-grid">
    ${field({ label: "Prénom", name: "first_name", value: values.first_name, error: errors.first_name, required: true, attrs: 'maxlength="40" autocomplete="given-name"' })}
    ${field({ label: "Nom", name: "last_name", value: values.last_name, error: errors.last_name, required: true, attrs: 'maxlength="40" autocomplete="family-name"' })}
    ${selectField({ label: "Rôle", name: "role", value: values.role, options: ROLES, required: true, error: errors.role })}
    ${selectField({ label: "Contrat", name: "contract", value: values.contract || "horaire", options: CONTRACTS, required: true, error: errors.contract, attrs: 'id="contract-type"' })}
    ${field({
      label: "Taux",
      name: "rate",
      value: values.rate,
      error: errors.rate,
      required: true,
      hint: "Euros de l’heure, ou salaire mensuel brut si le contrat est mensuel.",
      attrs: 'inputmode="decimal" placeholder="13,50"',
    })}
    ${field({ label: "Date d’entrée", name: "start_date", value: values.start_date, error: errors.start_date, type: "date", required: true })}
  </div>`;
}

export function newEmployeePage({ values = {}, errors = {}, query }) {
  const body = `
    ${pageHead({
      eyebrow: "Équipe",
      title: "Nouvel employé",
      lede: "Vendeur, caisse, réserve ou gérance. Le taux sert uniquement à l’estimation interne.",
    })}
    ${payNotice()}
    ${errorSummary(errors)}
    <form class="form-card" method="post" action="/paie/employes">
      ${employeeFields(values, errors)}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Ajouter à l’équipe</button>
        <a class="btn btn-ghost" href="/paie">Annuler</a>
      </div>
    </form>`;
  return layout({ title: "Nouvel employé", section: "paie", active: "employe-nouveau", body, query });
}

export function employeePage({ record, values = {}, errors = {}, query }) {
  const { employee, shifts, runs } = record;
  const formValues = {
    first_name: values.first_name ?? employee.first_name,
    last_name: values.last_name ?? employee.last_name,
    role: values.role ?? employee.role,
    contract: values.contract ?? employee.contract,
    rate: values.rate ?? moneyValue(employee.rate_cents),
    start_date: values.start_date ?? employee.start_date,
    active: values.active ?? (employee.active ? "1" : "0"),
  };
  const shiftRows = shifts.length
    ? `<ul class="run-list">${shifts
        .map(
          (shift) => `<li>
            <span><strong>${esc(formatDateMedium(shift.work_date))}</strong><small>${esc(shift.note || "Service")}</small></span>
            <b>${esc(formatHours(shift.minutes))}</b>
          </li>`,
        )
        .join("")}</ul>`
    : `<p class="muted">Aucune heure saisie.</p>`;
  const runRows = runs.length
    ? `<ul class="run-list">${runs
        .map(
          (run) => `<li>
            <a href="/paie/estimations/${run.id}"><strong>${esc(formatDateMedium(run.period_start))}</strong><small>au ${esc(formatDateMedium(run.period_end))}</small></a>
            <b>${esc(euro(run.net_cents))}</b>
          </li>`,
        )
        .join("")}</ul>`
    : `<p class="muted">Pas encore d’estimation.</p>`;
  const body = `
    ${pageHead({
      eyebrow: employee.role,
      title: `${employee.first_name} ${employee.last_name}`,
      lede: `${contractLabel(employee.contract)} · ${rateLabel(employee.contract, employee.rate_cents)} · en poste depuis le ${formatDate(employee.start_date)}`,
      actions: `<a class="btn btn-ghost" href="/paie/heures?employe=${employee.id}">Saisir des heures</a><a class="btn btn-primary" href="/paie/estimations?employe=${employee.id}">Préparer une estimation</a>`,
    })}
    ${payNotice()}
    <section class="split">
      <article class="panel">
        <div class="panel-head"><h2>Fiche</h2></div>
        ${errorSummary(errors)}
        <form method="post" action="/paie/employes/${employee.id}">
          ${employeeFields(formValues, errors)}
          <label class="check">
            <input type="checkbox" name="active" value="1"${formValues.active === "1" || formValues.active === 1 ? " checked" : ""}>
            <span>Toujours en poste</span>
          </label>
          <div class="form-actions"><button class="btn btn-primary" type="submit">Enregistrer</button></div>
        </form>
      </article>
      <div class="stack">
        <article class="panel">
          <div class="panel-head"><h2>Heures récentes</h2><a href="/paie/heures?employe=${employee.id}">Saisir</a></div>
          ${shiftRows}
        </article>
        <article class="panel">
          <div class="panel-head"><h2>Estimations</h2></div>
          ${runRows}
        </article>
      </div>
    </section>`;
  return layout({ title: `${employee.first_name} ${employee.last_name}`, section: "paie", active: "paie", body, query });
}

export function hoursPage({ employees, shifts, values = {}, errors = {}, query }) {
  const selected = query.get("employe") || values.employee_id || "";
  const boundsNote = "Un service dure entre 30 minutes et 12 heures.";
  const table = shifts.length
    ? `<div class="table-wrap"><table class="table">
        <thead><tr><th>Date</th><th>Employé</th><th>Rôle</th><th class="num">Durée</th><th>Motif</th></tr></thead>
        <tbody>${shifts
          .map(
            (shift) => `<tr>
              <td>${esc(formatDateMedium(shift.work_date))}</td>
              <td><a href="/paie/employes/${shift.employee_id}">${esc(shift.first_name)} ${esc(shift.last_name)}</a></td>
              <td>${esc(shift.role)}</td>
              <td class="num">${esc(formatHours(shift.minutes))}</td>
              <td>${esc(shift.note || "—")}</td>
            </tr>`,
          )
          .join("")}</tbody>
      </table></div>`
    : emptyState({
        title: "Aucune heure sur cette vue",
        text: "Saisissez un service pour qu’il entre dans la prochaine estimation.",
      });
  const body = `
    ${pageHead({
      eyebrow: "Présences",
      title: "Heures",
      lede: "Chaque service alimente le calcul horaire. Pour un contrat mensuel, les heures restent informatives.",
    })}
    ${payNotice()}
    ${errorSummary(errors)}
    ${
      employees.length
        ? `<form class="form-card" method="post" action="/paie/heures">
            <div class="form-grid">
              ${selectField({
                label: "Employé",
                name: "employee_id",
                value: selected,
                options: employees.map((person) => [person.id, `${person.first_name} ${person.last_name} · ${person.role}`]),
                required: true,
                error: errors.employee_id,
              })}
              ${field({ label: "Date", name: "work_date", value: values.work_date || "", error: errors.work_date, type: "date", required: true })}
              ${field({ label: "Durée (heures)", name: "hours", value: values.hours || "", error: errors.hours, required: true, hint: boundsNote, attrs: 'inputmode="decimal" placeholder="7,5"' })}
              ${field({ label: "Motif", name: "note", value: values.note || "", error: errors.note, attrs: 'maxlength="180" placeholder="Ouverture, cabine, inventaire…"' })}
            </div>
            <div class="form-actions"><button class="btn btn-primary" type="submit">Enregistrer les heures</button></div>
          </form>`
        : emptyState({
            title: "Personne à planifier",
            text: "Ajoutez un employé en poste avant de saisir des heures.",
            actionHref: "/paie/employes/nouveau",
            actionLabel: "Nouvel employé",
          })
    }
    <article class="panel">
      <div class="panel-head"><h2>Services enregistrés</h2></div>
      ${table}
    </article>`;
  return layout({ title: "Heures", section: "paie", active: "heures", body, query });
}

export function estimationsPage({ runs, employees, values = {}, errors = {}, existingId = null, query }) {
  const selected = query.get("employe") || values.employee_id || "";
  const duplicate = existingId
    ? `<p class="flash flash-err" role="alert">Une estimation existe déjà pour cette période. <a href="/paie/estimations/${existingId}">L’ouvrir</a>.</p>`
    : errorSummary(errors);
  const table = runs.length
    ? `<div class="table-wrap"><table class="table">
        <thead><tr><th>Employé</th><th>Période</th><th>Contrat</th><th class="num">Heures</th><th class="num">Brut estimé</th><th class="num">Charges est.</th><th class="num">Net estimé</th></tr></thead>
        <tbody>${runs
          .map(
            (run) => `<tr>
              <td><a href="/paie/estimations/${run.id}"><strong>${esc(run.employee_name)}</strong></a><small class="sub">${esc(run.role)}</small></td>
              <td>${esc(formatDateMedium(run.period_start))} — ${esc(formatDateMedium(run.period_end))}</td>
              <td>${esc(contractLabel(run.contract))}</td>
              <td class="num">${esc(formatHours(run.minutes))}</td>
              <td class="num">${esc(euro(run.gross_cents))}</td>
              <td class="num">${esc(euro(run.contribution_cents))}</td>
              <td class="num"><strong>${esc(euro(run.net_cents))}</strong></td>
            </tr>`,
          )
          .join("")}</tbody>
      </table></div>`
    : emptyState({
        title: "Aucune estimation",
        text: "Préparez la première estimation dès que les heures de la période sont saisies.",
      });
  const body = `
    ${pageHead({
      eyebrow: "Rémunération",
      title: "Estimations de paie",
      lede: `Retenue indicative de ${Math.round(CONTRIBUTION_RATE * 100)} % du brut, pour donner un ordre de grandeur du net. Ce n’est pas un taux officiel.`,
    })}
    ${payNotice()}
    ${duplicate}
    ${
      employees.length
        ? `<form class="form-card" method="post" action="/paie/estimations">
            <div class="form-grid">
              ${selectField({
                label: "Employé",
                name: "employee_id",
                value: selected,
                options: employees.map((person) => [String(person.id), `${person.first_name} ${person.last_name}`]),
                required: true,
                error: errors.employee_id,
              })}
              ${field({ label: "Début", name: "period_start", type: "date", value: values.period_start || "", error: errors.period_start, required: true })}
              ${field({ label: "Fin", name: "period_end", type: "date", value: values.period_end || "", error: errors.period_end, required: true })}
            </div>
            <div class="form-actions"><button class="btn btn-primary" type="submit">Préparer l’estimation</button></div>
          </form>`
        : ""
    }
    <article class="panel">${table}</article>`;
  return layout({ title: "Estimations", section: "paie", active: "estimations", body, query });
}

export function payslipPage({ detail, query }) {
  const { run, shifts } = detail;
  const percent = Math.round(run.contribution_rate * 100);
  const hourly = run.contract === "horaire";
  const lines = shifts.length
    ? shifts
        .map((shift) => {
          const amount = hourly ? Math.round((shift.minutes / 60) * run.rate_cents) : null;
          return `<tr>
            <td>${esc(formatDateMedium(shift.work_date))}</td>
            <td>${esc(shift.note || "Service")}</td>
            <td class="num">${esc(formatHours(shift.minutes))}</td>
            <td class="num">${amount == null ? "—" : esc(euro(amount))}</td>
          </tr>`;
        })
        .join("")
    : `<tr><td colspan="4">Aucune heure saisie sur cette période.</td></tr>`;
  const formula = hourly
    ? `Brut = heures × ${euro(run.rate_cents)} / heure.`
    : "Brut = taux mensuel du contrat, sans prorata.";
  const body = `
    ${pageHead({
      eyebrow: "Estimation",
      title: run.employee_name,
      lede: `Période du ${formatDate(run.period_start)} au ${formatDate(run.period_end)}.`,
      actions: `<a class="btn btn-ghost" href="/paie/estimations">Toutes les estimations</a><button class="btn btn-primary" type="button" data-print>Imprimer</button>`,
    })}
    <article class="slip">
      <p class="slip-banner">Ces montants sont des estimations pour la gestion de la boutique. Ce document n’est pas un bulletin de paie officiel.</p>
      <header class="slip-head">
        <div>
          <p class="eyebrow">Maison Céleste · Lyon</p>
          <h2>Estimation de rémunération</h2>
          <p>Préparée le ${esc(formatDateTime(run.created_at))}</p>
        </div>
        <p class="stamp">Estimation</p>
      </header>
      <dl class="slip-who">
        <div><dt>Employé</dt><dd>${esc(run.employee_name)}</dd></div>
        <div><dt>Rôle</dt><dd>${esc(run.role)}</dd></div>
        <div><dt>Contrat</dt><dd>${esc(contractLabel(run.contract))}</dd></div>
        <div><dt>Taux retenu</dt><dd>${esc(rateLabel(run.contract, run.rate_cents))}</dd></div>
        <div><dt>Heures de la période</dt><dd>${esc(formatHours(run.minutes))}</dd></div>
        <div><dt>Période</dt><dd>${esc(formatDateMedium(run.period_start))} — ${esc(formatDateMedium(run.period_end))}</dd></div>
      </dl>
      <table class="slip-amounts">
        <tbody>
          <tr><th>Brut estimé</th><td>${esc(euro(run.gross_cents))}</td></tr>
          <tr><th>Charges sociales estimées (${percent} %)</th><td>− ${esc(euro(run.contribution_cents))}</td></tr>
          <tr class="net"><th>Net estimé</th><td>${esc(euro(run.net_cents))}</td></tr>
        </tbody>
      </table>
      <p class="slip-formula">${esc(formula)} Retenue indicative de ${percent} % du brut, forfait de gestion qui ne reflète pas le calcul URSSAF.</p>
      ${
        !hourly && run.minutes === 0
          ? `<p class="slip-formula">Aucune heure saisie : le brut mensuel est tout de même estimé au taux du contrat.</p>`
          : ""
      }
      <h3>Détail des heures</h3>
      <div class="table-wrap"><table class="table compact">
        <thead><tr><th>Date</th><th>Motif</th><th class="num">Durée</th><th class="num">${hourly ? "Montant estimé" : "Informatif"}</th></tr></thead>
        <tbody>${lines}</tbody>
      </table></div>
      <p class="slip-foot">Document interne Maison Céleste. À ne pas remettre comme bulletin de paie. Les cotisations réelles, le prélèvement à la source et les congés ne sont pas calculés.</p>
    </article>`;
  return layout({ title: `Estimation · ${run.employee_name}`, section: "paie", active: "estimations", body, query });
}

export function notFoundPage(query) {
  const body = emptyState({
    title: "Page introuvable",
    text: "Ce lien ne correspond à aucune fiche de la boutique.",
    actionHref: "/",
    actionLabel: "Retour au tableau de bord",
  });
  return layout({ title: "Introuvable", section: "stock", active: "", body, query });
}
