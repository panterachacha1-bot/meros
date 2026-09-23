/* MEROS — sayt mantiqi: til, sarlavha, qidiruv, sahifalar, oʻqish va tinglash */
(function () {
  "use strict";
  const RAW = window.MEROS_PEOPLE || [];
  const I18N = window.MEROS_I18N || {};
  const TOP = window.MEROS_TOP || {};
  const AUDIO = window.MEROS_AUDIO || {};
  const TR = { ru: window.MEROS_PEOPLE_RU || {}, en: window.MEROS_PEOPLE_EN || {} };
  const LANGS = ["uz", "ru", "en"];
  const ROMAN = ["","I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX","XXI","XXII"];
  const NO_ARCHIVE = new Set(["buxoriy"]);

  /* ---------- Til ---------- */
  const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
  const urlLang = new URLSearchParams(location.search).get("lang");
  let LANG = LANGS.includes(urlLang) ? urlLang : (store.get("meros-lang") || "uz");
  if (!LANGS.includes(LANG)) LANG = "uz";
  store.set("meros-lang", LANG);
  document.documentElement.lang = LANG;
  const D = I18N[LANG] || I18N.uz;
  const t = (k, vars) => {
    let s = (D.ui && D.ui[k] != null) ? D.ui[k] : (I18N.uz && I18N.uz.ui[k] != null ? I18N.uz.ui[k] : k);
    if (vars) for (const v in vars) s = s.split("{" + v + "}").join(vars[v]);
    return s;
  };
  const FIELDS = {};
  Object.keys(D.fields).forEach((k) => { FIELDS[k] = { name: D.fields[k][0], desc: D.fields[k][1] }; });
  const ERAS = D.eras, MONTHS = D.months;
  const withLang = (href) => LANG === "uz" ? href : href + (href.includes("?") ? "&" : "?") + "lang=" + LANG;
  const L = (o) => (o && typeof o === "object") ? (o[LANG] || o.uz || "") : (o || "");

  function loc(p) {
    const x = TR[LANG] && TR[LANG][p.id]; if (!x) return p;
    return Object.assign({}, p, {
      name: x.name || p.name, fullName: x.fullName || p.fullName, role: x.role || p.role, summary: x.summary || p.summary,
      bio: x.bio || p.bio, keyPoints: x.keyPoints || p.keyPoints,
      born: Object.assign({}, p.born, { place: x.bornPlace || p.born.place }),
      died: p.died ? Object.assign({}, p.died, { place: x.diedPlace || p.died.place }) : null,
      timeline: p.timeline.map((e, i) => ({ y: e.y, t: (x.timeline && x.timeline[i]) || e.t })),
      works: p.works.map((w, i) => Object.assign({}, w, x.works && x.works[i] ? { title: x.works[i].title || w.title, note: x.works[i].note != null ? x.works[i].note : w.note } : {})),
      quote: p.quote ? (x.quote || p.quote) : null
    });
  }
  const PEOPLE = RAW.map(loc);

  /* ---------- Yordamchilar ---------- */
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const byId = (id) => PEOPLE.find((p) => p.id === id);
  const centuryN = (y) => Math.floor((y - 1) / 100) + 1;
  const ordinal = (n) => n + (n % 10 === 1 && n !== 11 ? "st" : n % 10 === 2 && n !== 12 ? "nd" : n % 10 === 3 && n !== 13 ? "rd" : "th");
  const centuryLabel = (n) => LANG === "en" ? `${ordinal(n)} century` : LANG === "ru" ? `${ROMAN[n]} век` : `${ROMAN[n]} asr`;
  const years = (p) => `${p.born.approx ? "≈" : ""}${p.born.y}–${p.died ? (p.died.approx ? "≈" : "") + p.died.y : ""}`;
  const fullDate = (d) => {
    if (!d) return "";
    const y = (d.approx ? "≈" : "") + d.y;
    if (d.d && d.m) return LANG === "en" ? `${MONTHS[d.m - 1]} ${d.d}, ${y}` : LANG === "ru" ? `${d.d} ${MONTHS[d.m - 1]} ${y}` : `${d.d}-${MONTHS[d.m - 1]} ${y}`;
    if (d.m) return `${MONTHS[d.m - 1]} ${y}`;
    return y;
  };
  const age = (p) => (p.died ? p.died.y - p.born.y : null);
  const normalize = (s) => String(s).toLowerCase().replace(/[ʻʼ'’`‘]/g, "").replace(/ё/g, "е").replace(/[^a-z0-9а-я\s]/gi, " ").replace(/\s+/g, " ").trim();
  const eraOf = (p) => { const y = p.born.y; return y < 1600 ? "orta" : y < 1900 ? "xix" : y < 1950 ? "xx" : "zamon"; };
  const sortedChrono = () => PEOPLE.slice().sort((a, b) => a.born.y - b.born.y || a.name.localeCompare(b.name));
  const initials = (p) => { const parts = p.name.replace(/[«»()]/g, "").split(/\s+/).filter(Boolean); return parts.length > 1 ? parts[0][0] + parts[parts.length - 1][0] : parts[0].slice(0, 1); };
  const href = (p) => withLang(`shaxs.html?id=${p.id}`);
  const asarHref = (id, n) => withLang(`asar.html?id=${id}&n=${n}`);
  const fvar = (f) => `--f:var(--f-${f})`;

  const ICON = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 7h18M3 12h18M3 17h18"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5"/></svg>',
    audio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 14v-2a9 9 0 0 1 18 0v2"/><rect x="3" y="14" width="4" height="7" rx="1"/><rect x="17" y="14" width="4" height="7" rx="1"/></svg>',
    ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 4h6v6M20 4l-9 9M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg>'
  };

  /* ---------- Portret ---------- */
  function portrait(p, opts) {
    opts = opts || {};
    const cls = "portrait" + (opts.reveal ? " reveal-img" : "");
    if (p.photo) return `<div class="${cls}"><img src="${esc(p.photo)}" alt="${esc(p.name)}" loading="${opts.eager ? "eager" : "lazy"}"></div>`;
    return `<div class="${cls}"><div class="monogram" aria-label="${esc(p.name)}"><b>${esc(initials(p))}</b><span>${esc(years(p))}</span></div></div>`;
  }
  function thumb(p) {
    if (p.photo) return `<div class="thumb"><img src="${esc(p.photo)}" alt="" loading="lazy"></div>`;
    return `<div class="thumb"><div class="monogram"><b>${esc(initials(p))}</b></div></div>`;
  }
  function card(p, d) {
    return `<a class="card rv" href="${href(p)}" style="--d:${(d || 0) * 0.06}s;${fvar(p.field)}">${portrait(p)}
      <div class="card-name">${esc(p.name)}</div>
      <div class="card-meta"><span class="num">${esc(years(p))}</span><span class="tag dot"><i></i>${esc(FIELDS[p.field].name)}</span></div>
      <div class="card-role">${esc(p.role)}</div></a>`;
  }
  function row(p) {
    return `<a class="row" href="${href(p)}">${thumb(p)}
      <div><div class="row-name">${esc(p.name)}</div><div class="row-sub">${esc(p.role)} · ${esc(FIELDS[p.field].name)}</div></div>
      <div class="row-years">${esc(years(p))}</div></a>`;
  }

  /* ---------- Animatsiya: koʻrinishga kirganda ---------- */
  let io = null;
  function observe(root) {
    const els = $$(".rv:not(.in), .jline:not(.in), .span-chart:not(.in)", root || document);
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    if (!io) io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -6% 0px", threshold: 0.01 });
    els.forEach((e) => io.observe(e));
    checkVisible();
  }
  // Zaxira: koʻrinishdagi elementlarni scroll paytida ham tekshirish
  function checkVisible() {
    const h = innerHeight;
    $$(".rv:not(.in), .jline:not(.in), .span-chart:not(.in)").forEach((e) => { const r = e.getBoundingClientRect(); if (r.top < h * 0.96 && r.bottom > 0) e.classList.add("in"); });
  }
  let cvT; addEventListener("scroll", () => { clearTimeout(cvT); cvT = setTimeout(checkVisible, 60); }, { passive: true });
  addEventListener("resize", () => checkVisible());

  /* ---------- Statik matnlar ---------- */
  function applyI18n() {
    $$("[data-i18n]").forEach((el) => { const v = t(el.dataset.i18n, { n: PEOPLE.length }); if (/<[a-z]/i.test(v)) el.innerHTML = v; else el.textContent = v; });
    $$("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    $$("a[href]").forEach((a) => { const h = a.getAttribute("href"); if (LANG !== "uz" && /^[a-z]+\.html/.test(h) && !/lang=/.test(h)) a.setAttribute("href", withLang(h)); });
  }

  /* ---------- Sarlavha va footer ---------- */
  const NAV = [["index.html", "nav.home"], ["shaxslar.html", "nav.people"], ["davrlar.html", "nav.eras"], ["sinov.html", "nav.quiz"], ["haqida.html", "nav.about"]];
  function switchLang(l) {
    store.set("meros-lang", l);
    const u = new URL(location.href); if (l === "uz") u.searchParams.delete("lang"); else u.searchParams.set("lang", l); location.href = u.toString();
  }
  function renderChrome() {
    const page = document.body.dataset.page || "";
    const header = $("#site-header");
    if (header) {
      header.className = "site-header";
      header.innerHTML = `<div class="wrap">
        <a class="brand" href="${withLang("index.html")}" aria-label="MEROS"><span class="brand-mark">MEROS</span></a>
        <nav class="nav" id="nav">${NAV.map(([h, k]) => `<a href="${withLang(h)}"${h.replace(".html", "") === page || (page === "shaxs" && h === "shaxslar.html") || (page === "asar" && h === "shaxslar.html") ? ' aria-current="page"' : ""}>${t(k)}</a>`).join("")}</nav>
        <div class="header-tools">
          <div class="lang" role="group" aria-label="Til / Язык / Language">${LANGS.map((l) => `<button type="button" data-lang="${l}" aria-pressed="${l === LANG}">${l.toUpperCase()}</button>`).join("")}</div>
          <button class="icon-btn" id="open-search" type="button" aria-label="${t("ui.searchLabel")}" title="${t("ui.searchLabel")} ( / )">${ICON.search}</button>
          <button class="icon-btn nav-toggle" id="nav-toggle" type="button" aria-label="${t("ui.menu")}" aria-expanded="false">${ICON.menu}</button>
        </div></div>`;
      $("#nav-toggle").addEventListener("click", () => { const nav = $("#nav"); const open = nav.classList.toggle("open"); $("#nav-toggle").setAttribute("aria-expanded", String(open)); });
      $("#open-search").addEventListener("click", openSearch);
      $$("[data-lang]").forEach((b) => b.addEventListener("click", () => switchLang(b.dataset.lang)));
    }
    const footer = $("#site-footer");
    if (footer) {
      footer.className = "site-footer";
      footer.innerHTML = `<div class="wrap">
        <div class="top">
          <div><span class="brand-mark">MEROS</span><p class="fq">«${t("footer.quote")}»</p></div>
          <div><h4>${t("footer.sections")}</h4><ul>${NAV.map(([h, k]) => `<li><a href="${withLang(h)}">${t(k)}</a></li>`).join("")}</ul></div>
          <div><h4>${t("footer.fields")}</h4><ul>${Object.keys(FIELDS).map((k) => `<li><a href="${withLang("shaxslar.html?soha=" + k)}">${FIELDS[k].name}</a></li>`).join("")}<li><a href="${withLang("shaxslar.html?soha=jadid")}">${t("catalog.jadids")}</a></li></ul></div>
        </div>
        <div class="bottom"><span>${t("footer.line1")} · ${new Date().getFullYear()}</span><span>${t("footer.line2", { n: PEOPLE.length, m: Object.keys(FIELDS).length })}</span></div></div>`;
    }
    applyI18n();
    buildSearch();
    document.addEventListener("keydown", (e) => {
      const tag = (e.target.tagName || "").toLowerCase();
      if ((e.key === "/" || (e.key === "k" && (e.metaKey || e.ctrlKey))) && !["input", "textarea", "select"].includes(tag)) { e.preventDefault(); openSearch(); }
      if (e.key === "Escape") { closeSearch(); closePhoto(); }
    });
  }

  /* ---------- Qidiruv ---------- */
  let searchEl, searchInput, searchRes, selIdx = 0, curResults = [];
  function buildSearch() {
    searchEl = document.createElement("div");
    searchEl.className = "search-modal"; searchEl.setAttribute("role", "dialog");
    searchEl.innerHTML = `<div class="backdrop"></div><div class="search-panel"><div class="in">${ICON.search}<input type="search" id="search-input" placeholder="${t("ui.searchPh")}" autocomplete="off" aria-label="${t("ui.searchLabel")}"></div><div class="res" id="search-res"></div></div>`;
    document.body.appendChild(searchEl);
    searchInput = $("#search-input"); searchRes = $("#search-res");
    $(".backdrop", searchEl).addEventListener("click", closeSearch);
    searchInput.addEventListener("input", () => renderSearch(searchInput.value));
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") { e.preventDefault(); selIdx = Math.min(selIdx + 1, curResults.length - 1); paintSel(); }
      if (e.key === "ArrowUp") { e.preventDefault(); selIdx = Math.max(selIdx - 1, 0); paintSel(); }
      if (e.key === "Enter") { const p = curResults[selIdx]; if (p) location.href = href(p); else if (searchInput.value.trim()) location.href = withLang(`shaxslar.html?q=${encodeURIComponent(searchInput.value.trim())}`); }
    });
    renderSearch("");
  }
  function search(q) {
    q = normalize(q);
    if (!q) return sortedChrono().slice(0, 8);
    const terms = q.split(" ");
    return PEOPLE.map((p) => {
      const raw = RAW.find((r) => r.id === p.id);
      const top = TOP[p.id] ? TOP[p.id].works.map((w) => L(w.t) + " " + w.t.uz).join(" ") : "";
      const hay = normalize([p.name, p.fullName, raw.name, raw.fullName, p.role, FIELDS[p.field].name, p.born.place, p.works.map((w) => w.title).join(" "), raw.works.map((w) => w.title).join(" "), top, p.summary, p.jadid ? t("catalog.jadids") : ""].join(" "));
      const nm = normalize(p.name + " " + raw.name);
      let score = 0;
      for (const term of terms) { if (nm.startsWith(term)) score += 10; else if (nm.includes(term)) score += 6; else if (hay.includes(term)) score += 2; else return null; }
      return { p, score };
    }).filter(Boolean).sort((a, b) => b.score - a.score || a.p.born.y - b.p.born.y).map((x) => x.p);
  }
  function renderSearch(q) {
    curResults = search(q).slice(0, 10); selIdx = 0;
    if (!curResults.length) { searchRes.innerHTML = `<div class="empty" style="padding:36px 18px;font-size:18px">${t("ui.nothing")}</div>`; return; }
    searchRes.innerHTML = curResults.map((p, i) => `<a class="sres" href="${href(p)}" aria-selected="${i === selIdx}">${thumb(p)}<div class="n">${esc(p.name)}<small>${esc(p.role)}</small></div><div class="y num">${esc(years(p))}</div></a>`).join("");
  }
  function paintSel() { $$(".sres", searchRes).forEach((el, i) => el.setAttribute("aria-selected", String(i === selIdx))); }
  function openSearch() { searchEl.classList.add("open"); searchInput.value = ""; renderSearch(""); setTimeout(() => searchInput.focus(), 20); document.body.style.overflow = "hidden"; }
  function closeSearch() { if (!searchEl) return; searchEl.classList.remove("open"); document.body.style.overflow = ""; }

  /* ---------- Arxiv surati ---------- */
  let phEl;
  function openPhoto(p) {
    if (!phEl) { phEl = document.createElement("div"); phEl.className = "ph-modal"; document.body.appendChild(phEl); phEl.addEventListener("click", (e) => { if (e.target === phEl || e.target.closest("[data-close]")) closePhoto(); }); }
    phEl.innerHTML = `<figure><img src="img/arxiv/${p.id}.jpg" alt="${esc(p.name)}"><figcaption><span>${t("person.archiveNote")}</span><button type="button" class="link" data-close>${t("person.close")}</button></figcaption></figure>`;
    phEl.classList.add("open");
  }
  function closePhoto() { if (phEl) phEl.classList.remove("open"); }

  /* ---------- Bosh sahifa ---------- */
  function initHome() {
    const now = new Date();
    const doy = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 864e5);
    const chrono = sortedChrono();
    const withPhoto = chrono.filter((p) => p.photo && p.id !== "buxoriy");
    const feat = withPhoto[doy % withPhoto.length];
    $("#feature").innerHTML = `<a href="${href(feat)}" style="display:block">${portrait(feat, { eager: true, reveal: true })}</a>
      <div class="feature-cap"><span class="label">${t("home.personOfDay")}</span><div><a class="name" href="${href(feat)}">${esc(feat.name)}</a></div><div class="sub">${esc(feat.role)} · <span class="num">${esc(years(feat))}</span></div></div>`;
    $("#fields").innerHTML = Object.keys(FIELDS).map((k) => {
      const list = chrono.filter((p) => p.field === k);
      return `<a class="field-item" href="${withLang("shaxslar.html?soha=" + k)}" style="${fvar(k)}"><div class="fname">${FIELDS[k].name}</div><div class="fdesc">${esc(FIELDS[k].desc)}</div><div class="fcount">${list.length} ${t("ui.person")}</div></a>`;
    }).join("");
    $("#jadids").innerHTML = chrono.filter((p) => p.jadid).map((p, i) => card(p, i)).join("");
    $("#featured").innerHTML = ["navoiy", "beruniy", "ulugbek", "qodiriy", "behbudiy", "ibnsino", "cholpon", "oripov"].map(byId).filter(Boolean).map((p, i) => card(p, i)).join("");
    const picks = [["qodiriy", 0], ["qodiriy", 1], ["cholpon", 0], ["navoiy", 1], ["behbudiy", 0], ["qahhor", 0], ["oripov", 0]];
    $("#listen").innerHTML = picks.map(([id, n]) => {
      const p = byId(id), w = TOP[id] && TOP[id].works[n]; if (!p || !w) return "";
      const badges = [w.text ? t(w.textPart ? "badge.part" : "badge.text") : "", w.audio ? t("badge.audio") : ""].filter(Boolean).join(" · ");
      return `<a class="listen-item" href="${asarHref(id, n)}"><span class="play">${w.audio ? ICON.play : ICON.book}</span><div><div class="t">${esc(L(w.t))}</div><div class="a">${esc(p.name)}</div></div><span class="label">${badges}</span></a>`;
    }).join("");
    const cents = []; for (let c = 8; c <= 20; c++) cents.push(c);
    $("#centuries").innerHTML = cents.map((c) => {
      const list = chrono.filter((p) => centuryN(p.born.y) === c);
      return `<div class="century${list.length ? "" : " empty"}"><div class="c">${LANG === "en" ? ordinal(c) : ROMAN[c]}</div><div class="n">${list.length ? list.length + " " + t("ui.person") : "—"}</div>
        <ul>${list.slice(0, 5).map((p) => `<li><a href="${href(p)}">${esc(p.name)}</a></li>`).join("")}${list.length > 5 ? `<li><a href="${withLang("davrlar.html")}#asr-${c}">${t("ui.more", { n: list.length - 5 })}</a></li>` : ""}</ul></div>`;
    }).join("");
    const form = $("#hero-form");
    form.addEventListener("submit", (e) => { e.preventDefault(); const v = $("input", form).value.trim(); location.href = withLang(v ? `shaxslar.html?q=${encodeURIComponent(v)}` : "shaxslar.html"); });
  }

  /* ---------- Katalog ---------- */
  function initCatalog() {
    const params = new URLSearchParams(location.search);
    const state = { soha: params.get("soha") || "", davr: params.get("davr") || "", q: params.get("q") || "", sort: params.get("sort") || "chrono", view: store.get("meros-view") || "grid" };
    const chips = $("#chips"), grid = $("#list"), meta = $("#meta");
    const chipList = [["", t("ui.all")]].concat(Object.keys(FIELDS).map((k) => [k, FIELDS[k].name])).concat([["jadid", t("catalog.jadids")]]);
    chips.innerHTML = chipList.map(([k, tx]) => `<button class="chip" type="button" data-soha="${k}" aria-pressed="${state.soha === k}">${tx}</button>`).join("");
    $("#davr").innerHTML = `<option value="">${t("catalog.allEras")}</option>` + Object.keys(ERAS).map((k) => `<option value="${k}">${ERAS[k]}</option>`).join("");
    $("#q").value = state.q; $("#davr").value = state.davr; $("#sort").value = state.sort;
    const sync = () => {
      const u = new URLSearchParams();
      if (state.soha) u.set("soha", state.soha); if (state.davr) u.set("davr", state.davr); if (state.q) u.set("q", state.q); if (state.sort !== "chrono") u.set("sort", state.sort); if (LANG !== "uz") u.set("lang", LANG);
      history.replaceState(null, "", location.pathname + (u.toString() ? "?" + u : ""));
      $$(".chip", chips).forEach((c) => c.setAttribute("aria-pressed", String(c.dataset.soha === state.soha)));
      $$("[data-view]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.view === state.view)));
      render();
    };
    const render = () => {
      let list = state.q ? search(state.q) : sortedChrono();
      if (state.soha === "jadid") list = list.filter((p) => p.jadid); else if (state.soha) list = list.filter((p) => p.field === state.soha);
      if (state.davr) list = list.filter((p) => eraOf(p) === state.davr);
      if (state.sort === "alpha") list = list.slice().sort((a, b) => a.name.localeCompare(b.name, LANG));
      const parts = [];
      if (state.soha) parts.push(state.soha === "jadid" ? t("catalog.jadids") : FIELDS[state.soha].name); if (state.davr) parts.push(ERAS[state.davr]); if (state.q) parts.push(`«${state.q}»`);
      meta.innerHTML = `<span class="h3">${list.length} ${t("ui.person")}</span><span class="label">${parts.length ? esc(parts.join(" · ")) : t("catalog.metaAll")}</span>`;
      if (!list.length) { grid.className = ""; grid.innerHTML = `<div class="empty">${t("ui.nothing")}. <a class="link" href="${withLang("shaxslar.html")}">${t("catalog.clear")}</a></div>`; return; }
      if (state.view === "grid") { grid.className = "grid g-4"; grid.innerHTML = list.map((p, i) => card(p, i % 8)).join(""); }
      else { grid.className = "rows"; grid.innerHTML = list.map(row).join(""); }
      observe(grid);
    };
    chips.addEventListener("click", (e) => { const b = e.target.closest(".chip"); if (!b) return; state.soha = b.dataset.soha; sync(); });
    $("#davr").addEventListener("change", (e) => { state.davr = e.target.value; sync(); });
    $("#sort").addEventListener("change", (e) => { state.sort = e.target.value; sync(); });
    let tm; $("#q").addEventListener("input", (e) => { clearTimeout(tm); tm = setTimeout(() => { state.q = e.target.value.trim(); sync(); }, 120); });
    $$("[data-view]").forEach((b) => b.addEventListener("click", () => { state.view = b.dataset.view; store.set("meros-view", state.view); sync(); }));
    sync();
  }

  /* ---------- Hayot yoʻli (journey) ---------- */
  function journeyHTML(p) {
    const top = TOP[p.id]; if (!top) return "";
    const path = top.path[LANG] || top.path.uz;
    const approxRe = /\s*\((taxminan|прибл\.|approx\.)\)/i;
    const ev = p.timeline.map((e) => ({ y: e.y, t: e.t.replace(approxRe, "") }));
    const start = p.born.y, end = p.died ? p.died.y : new Date().getFullYear();
    const span = Math.max(end - start, 1);
    let shown = ev;
    if (ev.length > 7) { const keep = new Set([0, ev.length - 1]); const step = (ev.length - 1) / 6; for (let i = 1; i < 6; i++) keep.add(Math.round(i * step)); shown = ev.filter((_, i) => keep.has(i)); }
    const pos = (y) => Math.min(100, Math.max(0, ((y - start) / span) * 100));
    // yaqin nuqtalar bir-birini bosmasligi uchun
    let last = -99; const placed = shown.map((e, i) => { let x = pos(e.y); if (x - last < 3.5 && i) x = Math.min(100, last + 3.5); last = x; return Object.assign({ x }, e); });
    const lastX = { up: -99, down: -99 };
    const dots = placed.map((e, i) => {
      const side = i % 2 ? "down" : "up";
      const edge = i === 0 ? " first" : i === placed.length - 1 ? " last" : "";
      const tight = e.x - lastX[side] < 16 && i !== placed.length - 1;
      lastX[side] = e.x;
      const txt = tight ? "" : esc(e.t.length > 64 ? e.t.slice(0, 62) + "…" : e.t);
      return `<span class="jdot${i === placed.length - 1 ? " end" : ""}" style="left:${e.x}%;transition-delay:${0.25 + i * 0.22}s" title="${esc(e.y + " — " + e.t)}"></span>
      <div class="jlabel ${side}${edge}" style="left:${e.x}%;transition-delay:${0.35 + i * 0.22}s" title="${esc(e.t)}"><b>${e.y}</b>${txt}</div>`;
    }).join("");
    return `<div class="rv"><div class="section-head" style="margin-bottom:0"><h2 class="h2">${t("person.path")}</h2><span class="label num">${esc(years(p))}</span></div>
      <div class="journey-ends"><div class="journey-end"><small>${t("person.from")}</small><p>${esc(path[0])}</p></div><div class="journey-end"><small>${t("person.to")}</small><p>${esc(path[1])}</p></div></div></div>
      <div class="jline"><svg viewBox="0 0 1000 150" preserveAspectRatio="none" aria-hidden="true"><line class="track" x1="0" y1="75" x2="1000" y2="75"/><path class="path" pathLength="1" d="M0 75 L1000 75"/></svg>${dots}</div>
      <ol class="jlist">${ev.map((e) => `<li><b>${e.y}</b>${esc(e.t)}</li>`).join("")}</ol>`;
  }
  function topWorksHTML(p) {
    const top = TOP[p.id]; if (!top) return "";
    return `<div class="section-head rv"><div><h2 class="h2">${t("person.top3")}</h2><p>${t("person.top3Text")}</p></div></div>
      <div class="tw-grid">${top.works.map((w, i) => {
        const badges = [w.text ? `<span class="badge">${ICON.book}${t(w.textPart ? "badge.part" : "badge.text")}</span>` : "", w.audio ? `<span class="badge">${ICON.audio}${t("badge.audio")}</span>` : ""].join("");
        return `<a class="tw rv" style="--d:${i * 0.1}s" href="${asarHref(p.id, i)}"><div class="kind"><span class="n">${i + 1}</span>${esc(t("kind." + w.k))}${w.y ? " · " + esc(w.y) : ""}</div>
          <h3>${esc(L(w.t))}</h3><p>${esc(L(w.s))}</p><div class="acts">${badges}<span class="badge" style="background:transparent;padding-left:0">${w.text ? t("person.read") : t("person.more")} →</span></div></a>`;
      }).join("")}</div>`;
  }

  /* ---------- Shaxs sahifasi ---------- */
  function initPerson() {
    const id = new URLSearchParams(location.search).get("id");
    const p = byId(id) || PEOPLE[0];
    const chrono = sortedChrono(); const idx = chrono.indexOf(p);
    const prev = chrono[(idx - 1 + chrono.length) % chrono.length], next = chrono[(idx + 1) % chrono.length];
    document.title = `${p.name} — MEROS`;
    const f = FIELDS[p.field];
    const approxRe = /\s*\((taxminan|прибл\.|approx\.)\)/i;
    $("#crumbs").innerHTML = `<a href="${withLang("shaxslar.html")}">${t("nav.people")}</a><span>/</span><a href="${withLang("shaxslar.html?soha=" + p.field)}">${f.name}</a>${p.jadid ? `<span>/</span><a href="${withLang("shaxslar.html?soha=jadid")}">${t("catalog.jadids")}</a>` : ""}`;
    const archive = p.photo && !NO_ARCHIVE.has(p.id);
    $("#person-head").innerHTML = `
      <div>${portrait(p, { eager: true, reveal: true })}<div class="photo-cap">${archive ? `<span>${t("person.illus")}</span><button type="button" id="arx">${t("person.archive")}</button>` : (p.photo ? "" : `<span>${t("person.noPhoto")}</span>`)}</div></div>
      <div class="load-in">
        <span class="tag" style="${fvar(p.field)}"><i></i>${esc(f.name)} · ${centuryLabel(centuryN(p.born.y))}</span>
        <h1 class="display">${esc(p.name)}</h1>
        <div class="person-role">${esc(p.role)}</div>
        <div class="person-dates">
          <div><small>${t("person.born")}</small><b>${esc(fullDate(p.born))}</b><small>${esc(p.born.place || "")}</small></div>
          ${p.died ? `<div><small>${t("person.died")}</small><b>${esc(fullDate(p.died))}</b><small>${esc(p.died.place || "")}</small></div>` : ""}
          ${age(p) != null ? `<div><small>${t("person.life")}</small><b>${t("person.years", { n: age(p) })}</b></div>` : ""}
        </div>
        <p class="lede">${esc(p.summary)}</p>
      </div>`;
    if (archive) $("#arx").addEventListener("click", () => openPhoto(p));
    $("#journey").innerHTML = journeyHTML(p);
    $("#top-works").innerHTML = topWorksHTML(p);
    $("#quote-wrap").innerHTML = p.quote ? `<div class="quote rv"><blockquote>«${esc(p.quote.text)}»</blockquote><cite>${esc(p.quote.src)}</cite></div>` : "";
    $("#bio").innerHTML = p.bio.map((x) => `<p>${esc(x)}</p>`).join("");
    $("#timeline").innerHTML = p.timeline.map((e) => `<div class="tl"><div class="y${approxRe.test(e.t) ? " approx" : ""}">${e.y}</div><div class="t">${esc(e.t.replace(approxRe, ""))}</div></div>`).join("");
    $("#works").innerHTML = p.works.map((w) => `<div class="work"><div class="wt">${esc(w.title)}</div><div class="wy">${esc(w.year || "")}</div><div class="wn">${esc(w.note || "")}</div></div>`).join("");
    $("#keypoints").innerHTML = `<h3 class="h3">${t("person.remember")}</h3><ol>${p.keyPoints.map((k) => `<li>${esc(k)}</li>`).join("")}</ol>`;
    $("#facts").innerHTML = [
      [t("person.fullName"), esc(p.fullName)],
      [t("person.field"), `<a href="${withLang("shaxslar.html?soha=" + p.field)}">${f.name}</a>`],
      [t("person.era"), `<a href="${withLang("shaxslar.html?davr=" + eraOf(p))}">${ERAS[eraOf(p)]}</a>`],
      [t("person.bornPlace"), esc(p.born.place)],
      p.died ? [t("person.diedPlace"), esc(p.died.place)] : null
    ].filter(Boolean).map(([k, v]) => `<div class="fact"><div class="k">${k}</div><div class="v">${v}</div></div>`).join("");
    $("#related").innerHTML = p.related.map(byId).filter(Boolean).map((r) => `<a class="rel" href="${href(r)}">${thumb(r)}<div class="n">${esc(r.name)}<small>${esc(years(r))}</small></div></a>`).join("");
    $("#side-actions").innerHTML = `<a class="btn btn-primary" href="${withLang("sinov.html?id=" + p.id)}">${t("person.quizThis")}</a><button class="btn btn-ghost" type="button" onclick="window.print()">${t("person.print")}</button>`;
    $("#pager").innerHTML = `<a href="${href(prev)}"><span class="label">← ${t("person.prev")}</span><span class="n">${esc(prev.name)}</span></a><a href="${href(next)}"><span class="label">${t("person.next")} →</span><span class="n">${esc(next.name)}</span></a>`;
  }

  /* ---------- Oʻqish sahifasi ---------- */
  function parseText(txt) {
    const lines = txt.replace(/\r/g, "").split("\n").map((l) => l.trim()).filter((l) => l.length);
    const blocks = []; let verse = null;
    const isHead = (l) => { if (l === "* * *" || l === "***") return true; const letters = l.replace(/[^A-Za-zʻʼ]/g, ""); return letters.length >= 3 && l.length < 70 && letters === letters.toUpperCase() && /[A-Z]/.test(letters); };
    for (const l of lines) {
      if (isHead(l)) { verse = null; blocks.push({ k: "h", s: l === "***" ? "* * *" : l }); continue; }
      if (l.length < 78 && !/[.!?…:;»"]$/.test(l) || (l.length < 60 && /,$/.test(l))) { if (!verse) { verse = { k: "v", lines: [] }; blocks.push(verse); } verse.lines.push(l); continue; }
      if (verse && l.length < 78) { verse.lines.push(l); continue; }
      verse = null; blocks.push({ k: "p", s: l });
    }
    return blocks;
  }
  function paginate(blocks, limit) {
    const pages = []; let cur = [], size = 0;
    const len = (b) => b.k === "v" ? b.lines.join("").length : b.s.length;
    for (const b of blocks) { if (size > limit && (b.k === "h" || b.k === "p")) { pages.push(cur); cur = []; size = 0; } cur.push(b); size += len(b); }
    if (cur.length) pages.push(cur);
    return pages;
  }
  const renderBlocks = (bs) => bs.map((b) => b.k === "h" ? `<h4>${esc(b.s)}</h4>` : b.k === "v" ? `<div class="stanza">${b.lines.map((l) => `<p class="verse">${esc(l)}</p>`).join("")}</div>` : `<p>${esc(b.s)}</p>`).join("");

  function speakBtn(getText, langCode) {
    if (!("speechSynthesis" in window)) return null;
    const voices = speechSynthesis.getVoices();
    const want = { uz: ["uz"], ru: ["ru"], en: ["en"] }[langCode] || [langCode];
    const has = () => speechSynthesis.getVoices().some((v) => want.some((w) => v.lang.toLowerCase().startsWith(w)));
    const b = document.createElement("button");
    b.type = "button"; b.className = "btn btn-ghost btn-sm"; b.innerHTML = `${ICON.audio}<span>${t("reader.listen")}</span>`;
    const sync = () => { b.hidden = !has(); };
    sync(); if (!voices.length) speechSynthesis.addEventListener("voiceschanged", sync);
    let on = false;
    b.addEventListener("click", () => {
      if (on) { speechSynthesis.cancel(); on = false; b.querySelector("span").textContent = t("reader.listen"); return; }
      const v = speechSynthesis.getVoices().find((x) => want.some((w) => x.lang.toLowerCase().startsWith(w)));
      const chunks = getText().match(/[^.!?…]{1,220}[.!?…]?/g) || [];
      speechSynthesis.cancel();
      chunks.forEach((c, i) => { const u = new SpeechSynthesisUtterance(c); if (v) { u.voice = v; u.lang = v.lang; } if (i === chunks.length - 1) u.onend = () => { on = false; b.querySelector("span").textContent = t("reader.listen"); }; speechSynthesis.speak(u); });
      on = true; b.querySelector("span").textContent = t("reader.stop");
    });
    window.addEventListener("pagehide", () => speechSynthesis.cancel());
    return b;
  }

  function playerHTML(keys) {
    const tracks = [];
    keys.forEach((k) => (AUDIO[k] || []).forEach((tr) => tracks.push(tr)));
    if (!tracks.length) return "";
    const label = (tr, i) => tr.k ? `${t("reader." + (tr.k === "gazal" ? "gazal" : tr.k === "ruboiy" ? "ruboiy" : tr.k === "doston" ? "doston" : "sher"))} ${tr.n}` : (tracks.length > 1 ? t("reader.part", { n: i + 1 }) : t("reader.audio"));
    return `<div class="player rv"><h4>${t("reader.audio")}</h4><audio id="audio" controls preload="none" src="${esc(tracks[0].u)}"></audio>
      ${tracks.length > 1 ? `<ol id="tracks">${tracks.map((tr, i) => `<li><button type="button" data-i="${i}" data-u="${esc(tr.u)}" aria-current="${i === 0}">${esc(label(tr, i))}<span>${i + 1}/${tracks.length}</span></button></li>`).join("")}</ol>` : ""}
      <p class="src">${t("reader.audioSrc")}</p></div>`;
  }

  function initReader() {
    const params = new URLSearchParams(location.search);
    const p = byId(params.get("id")) || PEOPLE[0];
    const top = TOP[p.id]; const n = Math.max(0, Math.min(2, +params.get("n") || 0));
    const w = top && top.works[n];
    if (!w) { location.href = href(p); return; }
    document.title = `${L(w.t)} — ${p.name} — MEROS`;
    $("#crumbs").innerHTML = `<a href="${withLang("shaxslar.html")}">${t("nav.people")}</a><span>/</span><a href="${href(p)}">${esc(p.name)}</a>`;
    $("#reader-head").innerHTML = `<span class="label">${esc(t("kind." + w.k))}${w.y ? " · " + esc(w.y) : ""}</span><h1 class="display">${esc(L(w.t))}</h1>
      <div class="by">${thumb(p)}<div><a href="${href(p)}">${esc(p.name)}</a><div class="small num">${esc(years(p))}</div></div></div>`;
    const sum = $("#reader-summary");
    sum.innerHTML = `<h2 class="label" style="margin-bottom:8px">${t("reader.summary")}</h2><p>${esc(L(w.s))}</p><div class="tts" id="sum-tts" style="margin-top:14px"></div>`;
    const sb = speakBtn(() => L(w.s), LANG); if (sb) $("#sum-tts").appendChild(sb);

    // Yon panel: audio, havolalar, boshqa asarlar
    const others = top.works.map((x, i) => i === n ? "" : `<a class="rel" href="${asarHref(p.id, i)}" style="grid-template-columns:28px 1fr"><span class="h3" style="color:var(--accent)">${i + 1}</span><div class="n">${esc(L(x.t))}<small>${esc(t("kind." + x.k))}</small></div></a>`).join("");
    $("#reader-side").innerHTML = `${w.audio ? playerHTML(w.audio) : ""}
      ${w.link ? `<a class="btn btn-ghost" href="${esc(w.link)}" target="_blank" rel="noopener">${ICON.ext}${t("reader.external")}</a>` : ""}
      <div><h3 class="label" style="margin-bottom:4px">${t("person.top3")}</h3>${others}</div>
      <a class="btn btn-ghost" href="${href(p)}">← ${t("reader.back")}</a>`;
    const audio = $("#audio");
    if (audio) {
      const list = $$("#tracks button");
      const play = (i) => { const b = list[i]; if (!b) return; audio.src = b.dataset.u; audio.play().catch(() => {}); list.forEach((x) => x.setAttribute("aria-current", String(x === b))); store.set(`meros-audio-${p.id}-${n}`, String(i)); };
      list.forEach((b, i) => b.addEventListener("click", () => play(i)));
      audio.addEventListener("ended", () => { const cur = list.findIndex((x) => x.getAttribute("aria-current") === "true"); if (cur >= 0 && cur < list.length - 1) play(cur + 1); });
      const saved = +store.get(`meros-audio-${p.id}-${n}`); if (saved && list[saved]) { audio.src = list[saved].dataset.u; list.forEach((x, i) => x.setAttribute("aria-current", String(i === saved))); }
    }

    const body = $("#reader-body");
    if (!w.text) { body.innerHTML = `<p class="small rv" style="margin-top:24px;max-width:60ch">${t("reader.noText")}</p>`; observe(); return; }
    body.innerHTML = `<p class="small" style="margin-top:24px">${t("reader.loading")}</p>`;
    fetch(w.text).then((r) => { if (!r.ok) throw new Error(r.status); return r.text(); }).then((txt) => {
      const pages = paginate(parseText(txt), 9000);
      const key = `meros-read-${p.id}-${n}`;
      let size = +store.get("meros-rsize") || 20;
      let pg = Math.min(pages.length - 1, Math.max(0, (+params.get("p") || +store.get(key) || 1) - 1));
      body.innerHTML = `<div class="reader-tools"><div class="grp"><span class="label" id="pgl"></span></div>
          <div class="grp"><span id="txt-tts"></span><button class="btn btn-ghost btn-sm" type="button" id="fsminus" aria-label="${t("reader.size")} −">A−</button><button class="btn btn-ghost btn-sm" type="button" id="fsplus" aria-label="${t("reader.size")} +">A+</button></div></div>
        <div class="reader-progress"><i id="rprog"></i></div>
        <p class="small" style="margin-top:14px">${t("reader.origNote")}${w.textPart ? " " + t("reader.excerptNote") : ""}</p>
        <article class="reader-text${w.k === "sher" || w.k === "doston" ? " poetry" : ""}" id="rtext" lang="uz"></article>
        <nav class="reader-nav"><button class="btn btn-ghost" type="button" id="pprev">← ${t("reader.prev")}</button><span class="label" id="pgl2"></span><button class="btn btn-primary" type="button" id="pnext">${t("reader.next")} →</button></nav>`;
      const art = $("#rtext");
      const show = (i, scroll) => {
        pg = i; art.innerHTML = renderBlocks(pages[i]);
        art.style.setProperty("--rs", size + "px");
        $("#pgl").textContent = $("#pgl2").textContent = t("reader.page", { i: i + 1, n: pages.length });
        $("#pprev").disabled = i === 0; $("#pnext").disabled = i === pages.length - 1;
        $("#pprev").style.visibility = i === 0 ? "hidden" : ""; $("#pnext").style.visibility = i === pages.length - 1 ? "hidden" : "";
        store.set(key, String(i + 1));
        if (scroll) art.scrollIntoView({ behavior: "smooth", block: "start" });
        art.animate && art.animate([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "none" }], { duration: 400, easing: "cubic-bezier(.22,.7,.2,1)" });
        updateProg();
      };
      const updateProg = () => {
        const r = art.getBoundingClientRect(); const within = Math.min(1, Math.max(0, (innerHeight - r.top) / (r.height + innerHeight)));
        $("#rprog").style.width = (((pg + within) / pages.length) * 100).toFixed(1) + "%";
      };
      addEventListener("scroll", updateProg, { passive: true });
      $("#pprev").addEventListener("click", () => show(Math.max(0, pg - 1), true));
      $("#pnext").addEventListener("click", () => show(Math.min(pages.length - 1, pg + 1), true));
      $("#fsminus").addEventListener("click", () => { size = Math.max(16, size - 1); store.set("meros-rsize", size); art.style.setProperty("--rs", size + "px"); });
      $("#fsplus").addEventListener("click", () => { size = Math.min(28, size + 1); store.set("meros-rsize", size); art.style.setProperty("--rs", size + "px"); });
      const tb = speakBtn(() => art.innerText, "uz"); if (tb) $("#txt-tts").appendChild(tb);
      show(pg, false);
    }).catch((err) => { console.error("MEROS reader", err); body.innerHTML = `<p class="small" style="margin-top:24px">${t("reader.noText")}</p>`; });
    observe();
  }

  /* ---------- Davrlar ---------- */
  function initEras() {
    const chrono = sortedChrono();
    const panels = [
      { id: "orta", title: t("eras.orta"), sub: t("eras.ortaSub"), from: 760, to: 1560, step: 100, filter: (p) => p.born.y < 1600 },
      { id: "yangi", title: t("eras.yangi"), sub: t("eras.yangiSub"), from: 1840, to: 2020, step: 20, filter: (p) => p.born.y >= 1600 }
    ];
    $("#eras").innerHTML = panels.map((pn) => {
      const list = chrono.filter(pn.filter); const span = pn.to - pn.from;
      const ticks = []; for (let y = pn.from + (pn.step - pn.from % pn.step) % pn.step; y <= pn.to; y += pn.step) ticks.push(y);
      const rows = list.map((p, i) => {
        const end = p.died ? p.died.y : pn.to;
        const l = (p.born.y - pn.from) / span * 100, w = Math.max(end - p.born.y, 2) / span * 100; const lab = l + w + 1;
        return `<a class="span-row" href="${href(p)}"><div class="nm">${esc(p.name)}<small>${esc(FIELDS[p.field].name)}</small></div>
          <div class="track" style="--grid:${(pn.step / span * 100).toFixed(3)}%"><div class="bar" style="${fvar(p.field)};left:${l.toFixed(2)}%;width:${w.toFixed(2)}%;transition-delay:${(i * 0.04).toFixed(2)}s"></div><span class="yrs num" style="${lab > 82 ? `right:${(100 - l + 1).toFixed(2)}%` : `left:${lab.toFixed(2)}%`}">${esc(years(p))}</span></div></a>`;
      }).join("");
      return `<section class="era-block" id="era-${pn.id}"><h2 class="h2">${pn.title}</h2><p class="lede">${pn.sub}</p>
        <div class="span-chart"><div class="span-axis"><div></div><div class="ticks">${ticks.map((y) => `<span class="tick num" style="left:${((y - pn.from) / span * 100).toFixed(2)}%">${y}</span>`).join("")}</div></div>${rows}</div>
        <div class="legend">${Object.keys(FIELDS).map((k) => `<span><i style="${fvar(k)}"></i>${FIELDS[k].name}</span>`).join("")}</div></section>`;
    }).join("");
    const groups = {};
    chrono.forEach((p) => { const c = centuryN(p.born.y); (groups[c] = groups[c] || []).push(p); });
    $("#by-century").innerHTML = Object.keys(groups).sort((a, b) => a - b).map((c) => `<section class="era-block rv" id="asr-${c}"><div class="section-head"><h2 class="h2">${centuryLabel(+c)}</h2><span class="label">${groups[c].length} ${t("ui.person")}</span></div><div class="rows">${groups[c].map(row).join("")}</div></section>`).join("");
  }

  /* ---------- Sinov ---------- */
  function initQuiz() {
    const params = new URLSearchParams(location.search);
    const focusId = params.get("id"); const soha = params.get("soha") || "";
    const pool = soha === "jadid" ? PEOPLE.filter((p) => p.jadid) : soha ? PEOPLE.filter((p) => p.field === soha) : PEOPLE;
    const rnd = (n) => Math.floor(Math.random() * n);
    const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = rnd(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };
    const others = (p, n, fn) => shuffle(PEOPLE.filter((x) => x.id !== p.id && (!fn || fn(x)))).slice(0, n);
    const gens = [
      (p) => ({ q: t("quiz.qBorn", { name: p.name }), a: String(p.born.y), opts: [String(p.born.y)].concat(others(p, 3, (x) => Math.abs(x.born.y - p.born.y) > 3).map((x) => String(x.born.y))), why: t("quiz.whyBorn", { name: p.name, date: fullDate(p.born), place: p.born.place || "" }) }),
      (p) => { const w = TOP[p.id] ? L(TOP[p.id].works[0].t) : (p.works[0] && p.works[0].title); return w ? { q: t("quiz.qAuthor", { work: w }), a: p.name, opts: [p.name].concat(others(p, 3, (x) => x.field === p.field || Math.random() < .3).map((x) => x.name)), why: t("quiz.whyAuthor", { work: w, name: p.name, year: "" }) } : null; },
      (p) => ({ q: t("quiz.qField", { name: p.name }), a: FIELDS[p.field].name, opts: Object.keys(FIELDS).map((k) => FIELDS[k].name), why: t("quiz.whyField", { name: p.name, role: p.role }) }),
      (p) => p.born.place ? { q: t("quiz.qPlace", { name: p.name }), a: p.born.place, opts: [p.born.place].concat(shuffle(Array.from(new Set(PEOPLE.map((x) => x.born.place).filter((x) => x && x !== p.born.place)))).slice(0, 3)), why: t("quiz.whyPlace", { name: p.name, place: p.born.place }) } : null,
      (p) => ({ q: t("quiz.qRole", { name: p.name }), a: p.role, opts: [p.role].concat(others(p, 3).map((x) => x.role)), why: p.summary }),
      (p) => p.died ? { q: t("quiz.qAge", { name: p.name }), a: t("person.years", { n: age(p) }), opts: [age(p)].concat(shuffle([age(p) - 7, age(p) + 6, age(p) - 15, age(p) + 12, age(p) + 20].filter((x) => x > 10)).slice(0, 3)).map((x) => t("person.years", { n: x })), why: t("quiz.whyAge", { name: p.name, b: p.born.y, d: p.died.y, n: age(p) }) } : null
    ];
    function makeQuestions(n) {
      const people = focusId ? Array(n).fill(byId(focusId)) : shuffle(pool).slice(0, n);
      const out = []; const used = new Set();
      people.forEach((p, i) => {
        let tries = 0, q = null;
        while (!q && tries < 10) { const gi = focusId ? (i + tries) % gens.length : rnd(gens.length); q = gens[gi](p); if (q && used.has(p.id + gi)) q = null; if (q) used.add(p.id + gi); tries++; }
        if (q) { q.opts = shuffle(Array.from(new Set(q.opts))).slice(0, 4); if (!q.opts.includes(q.a)) q.opts[rnd(q.opts.length)] = q.a; q.p = p; out.push(q); }
      });
      return out;
    }
    const box = $("#quiz");
    const startTitle = focusId && byId(focusId) ? t("quiz.titleFocus", { name: byId(focusId).name }) : soha === "jadid" ? t("quiz.titleField", { field: t("catalog.jadids") }) : soha ? t("quiz.titleField", { field: FIELDS[soha].name }) : t("quiz.titleDefault");
    function start() {
      const n = focusId ? 6 : 10;
      box.innerHTML = `<div class="quiz-start rv"><span class="label">${t("quiz.n", { n })}</span><h2 class="h2" style="margin:10px 0 12px">${esc(startTitle)}</h2><p class="lede">${t("quiz.intro")}</p>
        <div style="margin-top:26px;display:flex;gap:10px;flex-wrap:wrap"><button class="btn btn-primary" id="go" type="button">${t("quiz.start")}</button>
        ${!focusId ? `<a class="btn btn-ghost" href="${withLang("sinov.html?soha=adabiyot")}">${t("quiz.onlyLit")}</a><a class="btn btn-ghost" href="${withLang("sinov.html?soha=fan")}">${t("quiz.onlySci")}</a><a class="btn btn-ghost" href="${withLang("sinov.html?soha=jadid")}">${t("catalog.jadids")}</a>` : `<a class="btn btn-ghost" href="${withLang("shaxs.html?id=" + focusId)}">${t("quiz.back")}</a>`}</div></div>`;
      $("#go").addEventListener("click", () => run(makeQuestions(n)));
      observe(box);
    }
    function run(qs) {
      let i = 0, score = 0;
      const show = () => {
        if (i >= qs.length) return finish();
        const q = qs[i];
        box.innerHTML = `<span class="label">${t("quiz.q", { i: i + 1, n: qs.length, s: score })}</span>
          <div class="quiz-progress"><i style="width:${(i / qs.length * 100).toFixed(1)}%"></i></div>
          <h2 class="quiz-q" style="animation:rise .5s var(--ease)">${esc(q.q)}</h2>
          <div class="quiz-opts">${q.opts.map((o, k) => `<button class="qopt" type="button" data-v="${esc(o)}" style="animation:rise .5s var(--ease) ${0.05 * k}s both"><span class="l">${"ABCD"[k]}</span><span>${esc(o)}</span></button>`).join("")}</div><div id="fb"></div>`;
        $$(".qopt", box).forEach((b) => b.addEventListener("click", () => {
          const ok = b.dataset.v === q.a; if (ok) score++;
          $$(".qopt", box).forEach((x) => { x.disabled = true; if (x.dataset.v === q.a) x.dataset.state = "right"; else if (x === b) x.dataset.state = "wrong"; });
          $("#fb").innerHTML = `<div class="quiz-fb"><p><b>${ok ? t("quiz.right") : t("quiz.wrong")}</b> ${esc(q.why)} <a class="link" href="${href(q.p)}">${t("quiz.details")}</a></p><button class="btn btn-sm" id="next" type="button">${i + 1 < qs.length ? t("quiz.nextQ") : t("quiz.result")} →</button></div>`;
          $("#next").addEventListener("click", () => { i++; show(); }); $("#next").focus();
        }));
      };
      const finish = () => {
        const pct = Math.round(score / qs.length * 100);
        const verdict = pct === 100 ? t("quiz.v100") : pct >= 70 ? t("quiz.v70") : pct >= 40 ? t("quiz.v40") : t("quiz.v0");
        box.innerHTML = `<span class="label">${t("quiz.result")}</span><div class="score num" style="animation:rise .6s var(--ease)">${score}<small> / ${qs.length}</small></div><p class="lede" style="margin:12px 0 26px">${verdict}</p>
          <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn btn-primary" id="again" type="button">${t("quiz.again")}</button><a class="btn btn-ghost" href="${withLang("shaxslar.html")}">${t("quiz.list")}</a></div>`;
        $("#again").addEventListener("click", () => run(makeQuestions(qs.length)));
      };
      show();
    }
    start();
  }

  /* ---------- Haqida ---------- */
  function initAbout() {
    const el = $("#sources"); if (!el) return;
    const texts = [];
    Object.keys(TOP).forEach((id) => TOP[id].works.forEach((w, i) => { if (w.text) texts.push([id, i, w]); }));
    el.innerHTML = texts.map(([id, i, w]) => { const p = byId(id); return p ? `<div class="src"><a class="n" href="${asarHref(id, i)}">${esc(L(w.t))}</a><span class="small">${esc(p.name)}</span></div>` : ""; }).join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderChrome();
    ({ index: initHome, shaxslar: initCatalog, shaxs: initPerson, asar: initReader, davrlar: initEras, sinov: initQuiz, haqida: initAbout }[document.body.dataset.page] || function () {})();
    observe();
  });
})();
