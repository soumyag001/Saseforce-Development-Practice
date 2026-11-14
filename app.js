(function () {
  "use strict";

  var KEY = "sfdev-sheet-v1";
  var DIFF = { E: "Easy", M: "Medium", H: "Hard" };
  var TYPE = { C: "Concept", K: "Coding", S: "Scenario" };
  var SEARCH_BASE = "https://www.google.com/search?q=";

  // ---------- state ----------
  var state = load();
  var activeTab = state.tab || "all";

  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY));
      if (s && s.done) return s;
    } catch (e) {}
    return { done: {}, star: {}, notes: {}, tab: "all", theme: "" };
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }

  // ---------- flatten data ----------
  var all = [];
  window.SHEET.forEach(function (sec) {
    sec.topics.forEach(function (t, ti) {
      t.qs.forEach(function (q, qi) {
        all.push({
          id: sec.id + "-" + ti + "-" + qi,
          sec: sec.id, secName: sec.name, topic: t.name,
          title: q[0], diff: q[1], type: q[2]
        });
      });
    });
  });

  // ---------- helpers ----------
  function $(s) { return document.querySelector(s); }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }

  // ---------- theme ----------
  function applyTheme() {
    var t = state.theme;
    if (!t && window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches) t = "dark";
    document.documentElement.setAttribute("data-theme", t || "light");
  }
  $("#themeBtn").onclick = function () {
    var cur = document.documentElement.getAttribute("data-theme");
    state.theme = cur === "dark" ? "light" : "dark";
    save(); applyTheme();
  };

  // ---------- stats ----------
  function renderStats() {
    var items = activeTab === "all" ? all : all.filter(function (q) { return q.sec === activeTab; });
    function count(d) {
      var tot = 0, dn = 0;
      items.forEach(function (q) {
        if (d && q.diff !== d) return;
        tot++; if (state.done[q.id]) dn++;
      });
      return { tot: tot, dn: dn };
    }
    var o = count(), e = count("E"), m = count("M"), h = count("H");
    var starred = items.filter(function (q) { return state.star[q.id]; }).length;
    var box = $("#stats");
    box.innerHTML = "";
    [
      ["Overall", o, "", o.dn + " / " + o.tot + " (" + pct(o.dn, o.tot) + "%)"],
      ["Easy", e, "easy", e.dn + " / " + e.tot],
      ["Medium", m, "med", m.dn + " / " + m.tot],
      ["Hard", h, "hard", h.dn + " / " + h.tot]
    ].forEach(function (r) {
      var d = el("div", "stat");
      d.innerHTML = "<h3>" + r[0] + "</h3><div class='num'>" + r[3] + "</div>" +
        "<div class='bar " + r[2] + "'><i style='width:" + pct(r[1].dn, r[1].tot) + "%'></i></div>";
      box.appendChild(d);
    });
    var s = el("div", "stat");
    s.innerHTML = "<h3>Marked for revision</h3><div class='num'>" + starred + "</div>";
    box.appendChild(s);
  }

  // ---------- tabs ----------
  function renderTabs() {
    var nav = $("#tabs");
    nav.innerHTML = "";
    var list = [{ id: "all", name: "All" }].concat(window.SHEET.map(function (s) { return { id: s.id, name: s.name }; }));
    list.forEach(function (t) {
      var b = el("button", "tab" + (t.id === activeTab ? " active" : ""), esc(t.name));
      b.onclick = function () { activeTab = t.id; state.tab = t.id; save(); renderTabs(); renderStats(); renderList(); };
      nav.appendChild(b);
    });
  }

  // ---------- list ----------
  function matches(q) {
    if (activeTab !== "all" && q.sec !== activeTab) return false;
    var s = $("#search").value.trim().toLowerCase();
    if (s && (q.title + " " + q.topic).toLowerCase().indexOf(s) === -1) return false;
    var d = $("#fDiff").value; if (d && q.diff !== d) return false;
    var t = $("#fType").value; if (t && q.type !== t) return false;
    var st = $("#fStatus").value;
    if (st === "todo" && state.done[q.id]) return false;
    if (st === "done" && !state.done[q.id]) return false;
    if (st === "star" && !state.star[q.id]) return false;
    return true;
  }

  function renderList() {
    var root = $("#list");
    var openSet = {};
    root.querySelectorAll("details[open]").forEach(function (d) { openSet[d.dataset.key] = true; });
    var filtering = $("#search").value || $("#fDiff").value || $("#fType").value || $("#fStatus").value;
    root.innerHTML = "";

    // group by section + topic, preserving order
    var groups = [], map = {};
    all.forEach(function (q) {
      var k = q.sec + "|" + q.topic;
      if (!map[k]) { map[k] = { key: k, secName: q.secName, topic: q.topic, all: [], shown: [] }; groups.push(map[k]); }
      map[k].all.push(q);
      if (matches(q)) map[k].shown.push(q);
    });

    var any = false;
    groups.forEach(function (g) {
      if (!g.shown.length) return;
      any = true;
      var dn = g.all.filter(function (q) { return state.done[q.id]; }).length;
      var det = el("details", "topic");
      det.dataset.key = g.key;
      if (filtering || openSet[g.key]) det.open = true;
      var label = (activeTab === "all" ? esc(g.secName) + " &middot; " : "") + esc(g.topic);
      det.innerHTML = "<summary><span class='tname'>" + label + "</span><span class='tcount'>" + dn + " / " + g.all.length + "</span></summary>" +
        "<div class='tbar'><i style='width:" + pct(dn, g.all.length) + "%'></i></div>";
      g.shown.forEach(function (q) { det.appendChild(row(q)); });
      root.appendChild(det);
    });
    if (!any) root.appendChild(el("div", "empty", "No questions match your filters."));
  }

  function row(q) {
    var r = el("div", "q" + (state.done[q.id] ? " done" : ""));
    var cb = el("input"); cb.type = "checkbox"; cb.checked = !!state.done[q.id];
    cb.onchange = function () {
      if (cb.checked) state.done[q.id] = 1; else delete state.done[q.id];
      save(); r.classList.toggle("done", cb.checked); refresh();
    };
    var t = el("span", "qt", esc(q.title));
    var b = el("span", "badge " + q.diff, DIFF[q.diff]);
    var ty = el("span", "type", TYPE[q.type]);
    var sr = el("span", "search", "<a target='_blank' rel='noopener' href='" + SEARCH_BASE + encodeURIComponent("salesforce " + q.title) + "'>Search</a>");
    var star = el("button", "star" + (state.star[q.id] ? " on" : ""), "&#9733;");
    star.title = "Mark for revision";
    star.onclick = function () {
      if (state.star[q.id]) delete state.star[q.id]; else state.star[q.id] = 1;
      save(); star.classList.toggle("on", !!state.star[q.id]); renderStats();
    };
    var nb = el("button", "note-btn" + (state.notes[q.id] ? " has" : ""), "&#9998;");
    nb.title = "Notes";
    var note = el("div", "note");
    var ta = el("textarea"); ta.placeholder = "Your notes / answer...";
    ta.value = state.notes[q.id] || "";
    ta.oninput = function () {
      if (ta.value) state.notes[q.id] = ta.value; else delete state.notes[q.id];
      nb.classList.toggle("has", !!ta.value); save();
    };
    note.appendChild(ta);
    nb.onclick = function () { note.classList.toggle("open"); if (note.classList.contains("open")) ta.focus(); };

    [cb, t, b, ty, sr, star, nb].forEach(function (n) { r.appendChild(n); });
    // mobile layout has 4 columns; put star + note after badge
    r.appendChild(note);
    return r;
  }

  function refresh() {
    renderStats();
    // update topic counters without losing open state
    var openSet = {};
    $("#list").querySelectorAll("details[open]").forEach(function (d) { openSet[d.dataset.key] = true; });
    var st = $("#fStatus").value;
    if (st === "todo" || st === "done") renderList();
    else {
      $("#list").querySelectorAll("details").forEach(function (d) {
        var k = d.dataset.key;
        var qs = all.filter(function (q) { return (q.sec + "|" + q.topic) === k; });
        var dn = qs.filter(function (q) { return state.done[q.id]; }).length;
        d.querySelector(".tcount").textContent = dn + " / " + qs.length;
        d.querySelector(".tbar>i").style.width = pct(dn, qs.length) + "%";
      });
    }
  }

  // ---------- export / import / reset ----------
  $("#exportBtn").onclick = function () {
    var blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "sfdev-sheet-progress.json";
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  };
  $("#importBtn").onclick = function () { $("#importFile").click(); };
  $("#importFile").onchange = function (e) {
    var f = e.target.files[0]; if (!f) return;
    var rd = new FileReader();
    rd.onload = function () {
      try {
        var s = JSON.parse(rd.result);
        if (!s || typeof s.done !== "object") throw new Error("bad file");
        state = { done: s.done || {}, star: s.star || {}, notes: s.notes || {}, tab: s.tab || "all", theme: s.theme || "" };
        save(); applyTheme(); activeTab = state.tab; renderTabs(); renderStats(); renderList();
      } catch (err) { alert("That file is not a valid progress export."); }
    };
    rd.readAsText(f);
    e.target.value = "";
  };
  $("#resetBtn").onclick = function () {
    if (confirm("Reset all progress, stars and notes on this browser?")) {
      state = { done: {}, star: {}, notes: {}, tab: "all", theme: state.theme };
      activeTab = "all"; save(); renderTabs(); renderStats(); renderList();
    }
  };

  ["#search", "#fDiff", "#fType", "#fStatus"].forEach(function (s) {
    $(s).addEventListener("input", renderList);
    $(s).addEventListener("change", renderList);
  });

  // ---------- init ----------
  applyTheme();
  renderTabs();
  renderStats();
  renderList();
  // open the first topic by default for new visitors
  var first = $("#list details");
  if (first && !Object.keys(state.done).length) first.open = true;
})();
