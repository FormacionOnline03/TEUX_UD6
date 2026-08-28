let selectedId = RESOURCES[0].id;

const byId = (id) => RESOURCES.find((r) => r.id === id);
const pad = (n) => String(n).padStart(2, "0");

function imageMarkup(style) {
  if (style.imageUrls) {
    return `<div class="multi-wrap">${style.imageUrls
      .map((url, i) => `<img src="${url}" alt="${style.nameSpanish} ${i + 1}" />`)
      .join("")}</div>`;
  }
  if (style.imageUrl) {
    return `<img src="${style.imageUrl}" alt="${style.nameSpanish}" />`;
  }
  return "";
}

function primaryLink(style) {
  if (style.link) return style.link;
  if (style.links && style.links.length) return style.links[0].url;
  return null;
}

function embedMarkup(style) {
  if (style.embedImage) {
    const href = primaryLink(style);
    const img = `<img src="${style.embedImage}" alt="${style.nameSpanish}" loading="lazy" />`;
    return `<div class="detail-embed">${href ? `<a href="${href}" target="_blank" rel="noopener noreferrer">${img}</a>` : img}</div>`;
  }
  if (!style.embedUrl) return "";
  return `<div class="detail-embed"><iframe src="${style.embedUrl}" title="${style.nameSpanish}" loading="lazy"></iframe></div>`;
}

function linksMarkup(style) {
  if (style.links) {
    return style.links
      .map((l) => `<a class="btn-link" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label}</a>`)
      .join("");
  }
  if (style.link) {
    return `<a class="btn-link" href="${style.link}" target="_blank" rel="noopener noreferrer">Ver recurso</a>`;
  }
  return "";
}

function renderDesktopList() {
  const el = document.getElementById("desktopList");
  el.innerHTML = RESOURCES.map((style) => `
    <div class="list-item ${style.id === selectedId ? "is-selected" : ""}" data-id="${style.id}">
      <p class="num">${pad(style.id)}</p>
      <h2 class="${style.titleEs ? "" : "en-title"}">${style.nameSpanish}</h2>
    </div>
  `).join("");
  el.querySelectorAll(".list-item").forEach((node) => {
    node.addEventListener("click", () => selectStyle(Number(node.dataset.id)));
  });
}

function renderDesktopDetail() {
  const style = byId(selectedId);
  const el = document.getElementById("desktopDetail");
  const image = imageMarkup(style);
  el.innerHTML = `
    ${image ? `<div class="detail-image" key="${style.id}">${image}</div>` : ""}
    <h2 class="detail-title ${style.titleEs ? "" : "en-title"}">${style.name}</h2>
    <div class="detail-meta">
      <div>
        <div class="meta-field"><p class="label">Sección</p><p class="value">${style.section}</p></div>
        <div class="meta-field"><p class="label">Tipo de material</p><p class="value">${style.materialType}</p></div>
        <div class="meta-field"><p class="label">Año y contexto</p><p class="value">${style.yearContext}</p></div>
        <div class="meta-field"><p class="label">Idioma</p><p class="value">${style.language}</p></div>
        ${(style.link || style.links) ? `<div class="meta-field"><p class="label">Enlace</p><div class="link-group">${linksMarkup(style)}</div></div>` : ""}
      </div>
      <div>
        <div class="meta-field"><p class="label">Relevancia</p><p class="value">${style.relevance}</p></div>
        ${style.extraInfo ? `<div class="meta-field"><p class="label">Información Extra</p><p class="value">${style.extraInfo}</p></div>` : ""}
      </div>
    </div>
    ${embedMarkup(style)}
  `;
}

function renderMobile() {
  const style = byId(selectedId);
  const el = document.getElementById("mobileLayout");
  const image = imageMarkup(style);
  el.innerHTML = `
    ${image ? `<div class="mobile-image-wrap"><div class="mobile-image" key="${style.id}">${image}</div></div>` : ""}
    <div class="mobile-list">
      ${RESOURCES.map((s) => `
        <div class="mobile-item ${s.id === selectedId ? "is-selected" : ""}" data-id="${s.id}">
          <p class="num">${pad(s.id)}</p>
          <h2 class="${s.titleEs ? "" : "en-title"}">${s.name}</h2>
        </div>
      `).join("")}
    </div>
  `;
  el.querySelectorAll(".mobile-item").forEach((node) => {
    node.addEventListener("click", () => selectStyle(Number(node.dataset.id)));
  });
}

function selectStyle(id) {
  selectedId = id;
  renderDesktopList();
  renderDesktopDetail();
  renderMobile();
}

document.getElementById("btnVerMas").addEventListener("click", () => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("app").style.display = "block";
  selectStyle(selectedId);
});
