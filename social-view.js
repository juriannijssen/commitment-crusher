/* The social campaign drafts on the all-commitments page (2026-10-01).

   Adds two things to the table that commitments.js draws:

   - a Social column in the table: each commitment's draft status, the reasons
     on hover;
   - an Article | Social switch. Social keeps the table's rows and grouping, and
     gives each commitment one line: what it is, the post as LinkedIn would
     show it, whether the draft works, and a download of its four images.

   It reads the table from the page after commitments.js has drawn it, so the
   filters, search, grouping and "Read as" all apply unchanged. Data:
   window.WATCHTOWER_SOCIAL, written by social/build.py.

   The two post layouts are LinkedIn's, as seen on 2026-10-01:
   - Desktop: a strip of 3:4 tiles, 236 × 313 at a 557px post width, 4px apart,
     8px corners, cropped to fit, with a "1/4" counter and a next arrow
     (measured on Bank.Green's own posts page).
   - Phone app: the first, portrait image in the left column and the other
     three stacked on the right (LinkedIn's help page; Jurian's screenshots). */
(function () {
  var SOCIAL = window.WATCHTOWER_SOCIAL || {};
  /* Kept in the address with the table's own filters (see toUrl in
     commitments.js): ?view=social and ?seen=phone, the defaults left out. */
  var state = { view: "article", device: "desktop" };
  function fromUrl() {
    var u = new URLSearchParams(location.search);
    state.view = u.get("view") === "social" ? "social" : "article";
    state.device = u.get("seen") === "phone" ? "phone" : "desktop";
  }
  function toUrl() {
    var u = new URLSearchParams(location.search);
    if (state.view === "social") u.set("view", "social"); else u.delete("view");
    if (state.view === "social" && state.device === "phone") u.set("seen", "phone"); else u.delete("seen");
    var query = u.toString().replace(/%2C/gi, ",");
    history.pushState(null, "", location.pathname + (query ? "?" + query : "") + location.hash);
  }


  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstChild;
  }
  function idOf(href) {
    var m = /commitment-(.+)\.html$/.exec(href || "");
    return m ? m[1] : null;
  }
  function reasons(s) {
    if (!s) return ["Not built yet"];
    if (s.status === "variant") return [s.reason];
    return (s.problems || []).concat(s.issues || []);
  }
  function img(id, s, n) { return "social/" + id + "/" + s.images[n - 1]; }

  /* Drawn icons rather than ‹ › × characters: a character sits on its font's
     baseline, so it never lands in the middle of its circle. */
  var GLYPH = {
    prev: '<path d="M15 5l-7 7 7 7"/>',
    next: '<path d="M9 5l7 7-7 7"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>'
  };
  function glyph(name) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + GLYPH[name] + "</svg>";
  }

  /* --- the column in the Article view ------------------------------------ */


  /* The table's own Status column (commitments.js) covers the article and the
     post together, so this only marks the listing as seen. */
  function decorateTable(listing) {
    listing.dataset.social = "1";
  }

  /* --- the post ---------------------------------------------------------- */

  function post(id, s, title) {
    var li = el('<div class="soc-li"></div>');
    li.appendChild(el('<header class="soc-li-head">'
      + '<span class="soc-li-avatar">bank<br>green</span>'
      + '<span class="soc-li-who"><b>Bank.Green</b><span>Draft · not posted</span></span>'
      + '<span class="soc-li-more">···</span></header>'));
    li.appendChild(caption(s, title));
    li.appendChild(state.device === "desktop" ? strip(id, s) : grid(id, s));
    return li;
  }

  /* The post text, two lines and "…more" as LinkedIn shows it; "…more"
     opens the whole text in place. The last line links to the article. The
     article's public address is not set yet, so the link goes to the
     prototype page and says so. */
  function caption(s, title) {
    var paras = Array.isArray(s.caption) ? s.caption : [s.caption || title];
    var box = el('<div class="soc-li-caption"></div>');
    var text = el('<div class="soc-li-text"></div>');
    paras.forEach(function (p, i) {
      var para = el("<p>" + esc(p) + "</p>");
      if (i === paras.length - 1 && s.article) {
        para.appendChild(document.createTextNode(" "));
        var a = el('<a href="' + esc(s.article) + '">[link to the article]</a>');
        a.title = "Public address not set yet; opens the prototype page";
        para.appendChild(a);
      }
      text.appendChild(para);
    });
    box.appendChild(text);
    var more = el('<button type="button" class="soc-li-seemore">…more</button>');
    more.addEventListener("click", function () {
      box.classList.add("is-open");
      more.remove();
    });
    box.appendChild(more);
    return box;
  }

  function tile(id, s, n, cls) {
    var b = el('<button type="button" class="soc-li-img ' + cls + '" aria-label="Open image '
      + n + ' of ' + s.images.length + '"><img alt="" src="' + esc(img(id, s, n)) + '"></button>');
    b.addEventListener("click", function () { viewer(id, s, n); });
    return b;
  }

  function grid(id, s) {
    var g = el('<div class="soc-li-grid is-' + s.images.length + '"></div>');
    s.images.forEach(function (_, i) { g.appendChild(tile(id, s, i + 1, "soc-li-img-" + (i + 1))); });
    return g;
  }

  function strip(id, s) {
    var wrap = el('<div class="soc-li-stripwrap"></div>');
    var track = el('<div class="soc-li-strip"></div>');
    var total = s.images.length;
    s.images.forEach(function (_, i) { track.appendChild(tile(id, s, i + 1, "soc-li-tile")); });
    var count = el('<span class="soc-li-count">1/' + total + "</span>");
    var next = el('<button type="button" class="soc-li-next" aria-label="Next image">' + glyph("next") + '</button>');
    var prev = el('<button type="button" class="soc-li-prev" aria-label="Previous image" hidden>' + glyph("prev") + '</button>');
    function step(d) { track.scrollBy({ left: d * 240 }); }
    next.addEventListener("click", function () { step(1); });
    prev.addEventListener("click", function () { step(-1); });
    track.addEventListener("scroll", function () {
      var n = Math.min(total, Math.round(track.scrollLeft / 240) + 1);
      count.textContent = n + "/" + total;
      prev.hidden = track.scrollLeft < 4;
      next.hidden = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    });
    wrap.appendChild(track);
    wrap.appendChild(count);
    wrap.appendChild(prev);
    wrap.appendChild(next);
    return wrap;
  }

  /* The viewer LinkedIn opens on a click: one image at a time on black. */
  function viewer(id, s, n) {
    /* The arrows hang off the image's own sides, centred on its height, so
       they stay beside it whatever the window's size. */
    var box = el('<div class="soc-viewer" role="dialog" aria-label="Post images">'
      + '<div class="soc-viewer-stage">'
      + '<div class="soc-viewer-frame"><img alt="">'
      + '<button type="button" class="soc-viewer-btn soc-viewer-prev" aria-label="Previous">' + glyph("prev") + "</button>"
      + '<button type="button" class="soc-viewer-btn soc-viewer-next" aria-label="Next">' + glyph("next") + "</button>"
      + "</div>"
      + '<p class="soc-viewer-count"></p></div>'
      + '<button type="button" class="soc-viewer-btn soc-viewer-x" aria-label="Close">' + glyph("close") + "</button>"
      + "</div>");
    var im = box.querySelector("img"), count = box.querySelector(".soc-viewer-count");
    function show(k) {
      var total = s.images.length;
      n = ((k - 1) % total + total) % total + 1;
      im.src = img(id, s, n);
      count.textContent = n + " of " + total;
    }
    function close() { box.remove(); document.removeEventListener("keydown", key); }
    function key(e) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(n + 1);
      if (e.key === "ArrowLeft") show(n - 1);
    }
    box.querySelector(".soc-viewer-x").addEventListener("click", close);
    box.querySelector(".soc-viewer-prev").addEventListener("click", function () { show(n - 1); });
    box.querySelector(".soc-viewer-next").addEventListener("click", function () { show(n + 1); });
    box.addEventListener("click", function (e) {
      if (e.target === box || e.target.classList.contains("soc-viewer-stage")) close();
    });
    document.addEventListener("keydown", key);
    show(n);
    document.body.appendChild(box);
  }

  /* --- the Social view: one line per commitment --------------------------- */

  /* The row as the Article view shows it — the same bank and category cells,
     at the same widths, and the same title link — so switching views moves
     nothing. The draft's status goes under the title; the post follows, then
     the download. */
  function socialRow(row, widths) {
    var a = row.querySelector(".repo-link");
    var id = a && idOf(a.getAttribute("href"));
    var s = id && SOCIAL[id];
    var line = el('<div class="soc-row"></div>');
    var cols = [];

    [".repo-col-bank", ".repo-col-fuel"].forEach(function (sel, i) {
      var c = row.querySelector(sel);
      if (!c) return;
      line.appendChild(c.cloneNode(true));
      cols.push(widths[cols.length] || "150px");
    });

    var main = el('<div class="soc-main"></div>');
    var title = row.querySelector(".repo-col-title");
    if (title) main.appendChild(title.cloneNode(true));

    /* The commitment's Status, as in the table; under it, in red, whatever a
       check found on the post. */
    var stage = row.querySelector(".repo-col-status");
    if (stage) main.appendChild(stage.cloneNode(true));
    if (s && s.status !== "draft") {
      main.appendChild(el('<ul class="soc-bad ts-body-sm">' + reasons(s).filter(Boolean).map(function (r) {
        return "<li>" + esc(r) + "</li>";
      }).join("") + "</ul>"));
    }
    /* What on this post was written for social and still wants a read. */
    if (s && s.to_review && s.to_review.length) {
      main.appendChild(el('<p class="soc-review ts-body-sm">To review: ' + esc(s.to_review.join(", ")) + "</p>"));
    }
    line.appendChild(main);

    var cell = el('<div class="soc-post"></div>');
    if (s && s.images) cell.appendChild(post(id, s, a ? a.textContent : ""));
    else cell.appendChild(el('<div class="soc-nopost ts-body-sm">No post yet</div>'));
    line.appendChild(cell);

    var dl = el('<div class="soc-dl"></div>');
    if (s && s.zip) {
      var name = s.zip.split("/").pop();
      var link = el('<a class="soc-dl-link" download href="social/' + esc(s.zip) + '" aria-label="Download the images: '
        + esc(name) + '"><svg aria-hidden="true"><use href="#i-download"/></svg></a>');
      link.title = "Download " + name;
      dl.appendChild(link);
    }
    line.appendChild(dl);

    line.style.gridTemplateColumns = cols.concat(["minmax(220px, 1fr)", "var(--post)", "32px"]).join(" ");
    return line;
  }

  function socialList(listing) {
    var wrap = el('<div class="soc-list is-' + state.device + '"></div>');
    /* The bank and category widths the Article view is using right now. */
    var widths = (listing.style.getPropertyValue("--repo-cols").match(/\d+px(?![^(]*\))/g) || []);
    listing.querySelectorAll(".repo-group").forEach(function (g) {
      var sec = el('<section class="soc-group"></section>');
      var head = g.querySelector(".repo-group-head");
      if (head) sec.appendChild(head.cloneNode(true));
      g.querySelectorAll(".repo-row").forEach(function (row) { sec.appendChild(socialRow(row, widths)); });
      wrap.appendChild(sec);
    });
    if (!wrap.querySelector(".soc-row")) {
      wrap.appendChild(el('<p class="soc-empty ts-body-md">No commitments match these filters.</p>'));
    }
    return wrap;
  }

  /* --- switches ---------------------------------------------------------- */

  function seg(label, options, current, onPick) {
    var wrap = el('<div class="repo-seg-wrap"><span class="repo-seg-label ts-label-sm">' + esc(label) + "</span></div>");
    var s = el('<div class="repo-seg" role="group"></div>');
    options.forEach(function (o) {
      var on = o[0] === current;
      var b = el('<button type="button" class="repo-seg-btn ts-label-sm' + (on ? " is-active" : "")
        + '" aria-pressed="' + on + '">' + esc(o[1]) + "</button>");
      b.addEventListener("click", function () { onPick(o[0]); });
      s.appendChild(b);
    });
    wrap.appendChild(s);
    return wrap;
  }

  function apply() {
    var card = document.querySelector(".repo-card");
    var listing = card && card.querySelector(".repo-listing");
    if (!card || !listing) return;
    decorateTable(listing);

    var tools = card.querySelector(".repo-tools");
    var slot = tools.querySelector(".soc-switches");
    if (!slot) {
      slot = el('<div class="soc-switches"></div>');
      tools.insertBefore(slot, tools.querySelector(".repo-groupby"));
    }
    /* "Seen on" comes in to the left of "View", so the View switch stays
       where it is when Social is picked. */
    slot.replaceChildren(seg("View:", [["article", "Article"], ["social", "Social"]], state.view,
      function (v) { state.view = v; toUrl(); apply(); }));
    if (state.view === "social") {
      slot.prepend(seg("Seen on:", [["desktop", "Desktop"], ["phone", "Phone"]], state.device,
        function (d) { state.device = d; toUrl(); apply(); }));
    }

    card.classList.toggle("is-social", state.view === "social");
    var old = card.querySelector(".soc-list");
    if (old) old.remove();
    if (state.view === "social") listing.after(socialList(listing));
  }

  function start() {
    var root = document.getElementById("ov-root");
    fromUrl();
    window.addEventListener("popstate", function () { fromUrl(); apply(); });
    /* commitments.js swaps in a new listing on every filter change. Only that
       is acted on; this script's own changes leave the listing marked, so they
       do not set it off again. */
    new MutationObserver(function () {
      var listing = root.querySelector(".repo-listing");
      if (listing && !listing.dataset.social) apply();
    }).observe(root, { childList: true, subtree: true });
    apply();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
