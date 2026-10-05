const sizeTemplate = () => {
  const row = document.createElement("div");
  row.className = "size-row";
  row.innerHTML = `
    <label>Taille
      <input name="size" required maxlength="12" placeholder="M" autocomplete="off">
    </label>
    <label>Quantité
      <input name="qty" required inputmode="numeric" placeholder="0">
    </label>
    <label>Seuil
      <input name="threshold" value="2" inputmode="numeric">
    </label>
    <button type="button" class="btn btn-ghost btn-small remove-size">Retirer</button>
  `;
  return row;
};

function bindSizeEditor() {
  const holder = document.querySelector("#size-rows");
  const add = document.querySelector("#add-size");
  if (!holder || !add) return;

  add.addEventListener("click", () => holder.append(sizeTemplate()));

  holder.addEventListener("click", (event) => {
    const button = event.target.closest(".remove-size");
    if (!button) return;
    const rows = holder.querySelectorAll(".size-row");
    if (rows.length === 1) {
      rows[0].querySelectorAll("input").forEach((input) => {
        if (input.name !== "threshold") input.value = "";
        else input.value = "2";
      });
      return;
    }
    button.closest(".size-row")?.remove();
  });

  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const size = chip.dataset.size || "";
      const inputs = [...holder.querySelectorAll('input[name="size"]')];
      if (inputs.some((input) => input.value.trim().toLocaleLowerCase("fr-FR") === size.toLocaleLowerCase("fr-FR"))) {
        return;
      }
      const empty = inputs.find((input) => !input.value.trim());
      if (empty) {
        empty.value = size;
        empty.focus();
        return;
      }
      const row = sizeTemplate();
      row.querySelector('input[name="size"]').value = size;
      holder.append(row);
    });
  });
}

function bindMovementType() {
  const type = document.querySelector("#movement-type");
  const field = document.querySelector("#direction-field");
  if (!type || !field) return;
  const sync = () => field.classList.toggle("on", type.value === "ajustement");
  type.addEventListener("change", sync);
  sync();
}

function bindPrint() {
  document.querySelector("[data-print]")?.addEventListener("click", () => window.print());
}

function bindPhotoPreview() {
  document.querySelectorAll("[data-photo-input]").forEach((input) => {
    const field = input.closest(".field-photo");
    const preview = field?.querySelector("[data-photo-preview]");
    const note = field?.querySelector("[data-photo-note]");
    const current = field?.querySelector("[data-photo-current]");
    if (!preview) return;
    let objectUrl = "";
    input.addEventListener("change", () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      objectUrl = "";
      const file = input.files?.[0];
      const allowed = file && (
        ["image/jpeg", "image/png", "image/webp"].includes(file.type) ||
        /\.(jpe?g|png|webp)$/i.test(file.name)
      );
      if (!file || !allowed) {
        preview.hidden = true;
        preview.removeAttribute("src");
        if (current) current.hidden = false;
        if (note) {
          note.hidden = !file;
          if (file) note.textContent = "Choisissez une image JPEG, PNG ou WebP.";
        }
        return;
      }
      objectUrl = URL.createObjectURL(file);
      preview.src = objectUrl;
      preview.hidden = false;
      if (note) note.hidden = true;
      if (current) current.hidden = true;
    });
  });
}

bindSizeEditor();
bindMovementType();
bindPrint();
bindPhotoPreview();
