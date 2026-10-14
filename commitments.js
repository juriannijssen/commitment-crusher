/* ==========================================================================
   Commitments overview — renders the case index (Figma 15199:63789), then
   the full commitment table below it (Figma 14372:49, the repository frame:
   its tools bar, its filter badges and its 40px row rhythm).

   The cards come from window.WATCHTOWER_CASES, the table from
   window.WATCHTOWER_TABLE — both generated, neither written by hand.
   ========================================================================== */
(function () {
  "use strict";

  /* Only the overview needs the case index; all-commitments.html loads the
     table alone, so the check is made where the cards are built. */
  var CASES = window.WATCHTOWER_CASES;

  /* The general-clauses articles, one per document whose policy-wide provisions
     have been analysed. Empty on a build where none has been written, and the
     block below is simply not drawn. */
  var GENERAL = window.WATCHTOWER_GENERAL || [];

  /* Title from Figma 15199:63789 and 15786:119703. The intro was rewritten 2026-10-02
     to spec 3.64 (American English, calm in tone) and no longer matches Figma's text. */
  var HERO = {
    title: "Climate Commitment Misconceptions",
    intro: [
      "A bank’s climate commitment can sound clear on a first read, " +
        "while the details say something narrower.",
      "Here we read each one the way a policy analyst would: phrase by phrase, " +
        "looking at what it covers and what it leaves out."
    ]
  };

  /* Only `arctic` was given a label by the design; the rest are humanised
     from the field rather than invented. */
  var CATEGORY_LABELS = { arctic: "Arctic Oil & Gas", oil_gas_expansion: "Oil & Gas Expansion" };

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  /* Barclays’ Commitment, not Barclays’s — a name already ending in s takes a
     bare apostrophe, as the frame shows. */
  function possessive(name) {
    return /s$/i.test(name) ? name + "\u2019" : name + "\u2019s";
  }

  function categoryLabel(c) {
    return CATEGORY_LABELS[c] ||
      String(c || "").replace(/_/g, " ").replace(/\b\w/g, function (m) { return m.toUpperCase(); });
  }

  function card(e, featured) {
    var a = el('<a class="ov-card' + (featured ? " is-featured" : "") + '" href="'
      + esc(e.page) + '"></a>');

    /* The scale the hover shrinks the card by, worked out as the pointer
       arrives so it is always 16px off the card's current width, whichever
       breakpoint set it — see .ov-card:hover in commitments.css. offsetWidth
       is the layout width, which the transform itself does not change. */
    a.addEventListener("pointerenter", function () {
      var w = a.offsetWidth;
      if (w > 16) a.style.setProperty("--ov-hover-scale", String((w - 16) / w));
    });

    /* "#5 Santander": the bank alone. Only the featured card keeps a noun after
       it, "#15 Barclays’ Commitment" — Figma 15199:63789 and 15786:119703 both
       draw it that way. */
    var who = featured ? possessive(e.bank) + " Commitment" : e.bank;
    a.appendChild(el('<div class="ov-head">'
      /* The space between the spans is for a screen reader, which otherwise
         reads "#15Barclays’"; a flex container drops it from the layout. */
      + "<span>#" + esc(e.number) + '</span> <span class="who">' + esc(who) + "</span></div>"));

    /* The plain rendering, the commitment's own words with the pronouns resolved
       to the bank, rather than the verbatim — which the page the card opens
       still quotes in full. */
    a.appendChild(el('<p class="ov-quote">' + esc(e.plain || e.quote) + "</p>"));

    /* The foot, as Figma 14771:1381 draws it: "View the analysis" on the left,
       the badges on the right. The button is a span, not a link — the whole
       card is already the link to the same page, and a link cannot hold
       another. Primary inverted on the featured card, secondary on the rest. */
    var foot = el('<div class="ov-foot"></div>');
    foot.appendChild(el('<span class="ov-btn ts-button-sm">View the analysis</span>'));
    var badges = el('<div class="ov-badges"></div>');
    badges.appendChild(el('<span class="badge">' + esc(categoryLabel(e.category)) + "</span>"));
    foot.appendChild(badges);
    a.appendChild(foot);
    return a;
  }

  /* The other kind of card in the set: Figma 14771:1381 `Type=Other Clauses`.
     Same shell, same square, same hover, same "View the analysis" — and two
     deliberate differences. Its line is a title, not a quotation, so it is set
     in the titles face rather than the quote one; and it carries no badges,
     because a category belongs to a commitment and these provisions sit above
     every category in the document.

     No head row at all. The commitment card opens with "#3 ING" — a number and a
     bank; an article has no number, and its bank is already the first word of the
     line below. Jurian took the row out of the frame on 2026-09-23. */
  function clausesCard(g) {
    var a = el('<a class="ov-card is-clauses" href="' + esc(g.page) + '"></a>');
    a.addEventListener("pointerenter", function () {
      var w = a.offsetWidth;
      if (w > 16) a.style.setProperty("--ov-hover-scale", String((w - 16) / w));
    });
    /* Worded to sit beside the article's own title, "The clauses that apply to
       every Barclays commitment" — the card names the bank, the page does not
       have to repeat it. */
    a.appendChild(el('<p class="ov-clauses-title">'
      + esc(possessive(g.bank)) + " general clauses that apply to every commitment</p>"));
    var foot = el('<div class="ov-foot"></div>');
    foot.appendChild(el('<span class="ov-btn ts-button-sm">View the analysis</span>'));
    a.appendChild(foot);
    return a;
  }

  /* The commitment page's quote ladder — the Lora quote/* ramp from large down
     to extra_small, with quote/extra_large above it for the featured card.
     Only the names are written here: the sizes are read off the .ts-quote-*
     classes, which styles.css generates from figma design/design-tokens.json,
     the same way commitment.js reads them. */
  function readSteps(classes) {
    return classes.map(function (c) {
      var probe = document.createElement("span");
      probe.className = c;
      probe.style.cssText = "position:absolute;visibility:hidden";
      document.body.appendChild(probe);
      var cs = getComputedStyle(probe);
      var step = { size: parseFloat(cs.fontSize), leading: parseFloat(cs.lineHeight) };
      probe.remove();
      return step;
    });
  }
  var QUOTE_STEPS = readSteps(["ts-quote-lg", "ts-quote-md", "ts-quote-sm", "ts-quote-xs"]);
  var FEATURED_STEP = readSteps(["ts-quote-xl"])[0];
  /* The other-clauses card steps down the titles ramp instead, from title/large
     — the size the frame sets it at — to title/extra_small. */
  var TITLE_STEPS = readSteps(["ts-title-lg", "ts-title-md", "ts-title-sm", "ts-title-xs"]);

  /* A card is a square at least: --ov-card-min, set here to its width. Its quote
     takes the largest step at which the whole card — head, quote and badges —
     still fits that square and the quote runs to no more lines than the clamp
     allows, so a step is never chosen only to be cut. Measured at the card's
     natural height, without the clamp. If no step manages both, it keeps the
     smallest; the clamp cuts the quote at seven lines, and the card grows only
     as far as those seven lines need. */
  function fitQuote(card) {
    var w = card.offsetWidth;
    if (!w) return;
    var clauses = card.classList.contains("is-clauses");
    var q = card.querySelector(clauses ? ".ov-clauses-title" : ".ov-quote");
    if (!q) return;
    /* The line limit is read off the stylesheet's clamp, not restated here. */
    var maxLines = parseInt(getComputedStyle(q).webkitLineClamp, 10) || Infinity;
    /* The featured card starts a step higher, at quote/extra_large 48/56 — the
       size the frame gives it — so a short quote there is set as large as it
       was before the ladder. A longer one steps down exactly as the others do. */
    var steps = clauses ? TITLE_STEPS
      : card.classList.contains("is-featured") ? [FEATURED_STEP].concat(QUOTE_STEPS)
      : QUOTE_STEPS;
    card.classList.add("is-measuring");
    var chosen = steps[steps.length - 1];
    for (var i = 0; i < steps.length; i++) {
      var step = steps[i];
      card.style.setProperty("--ov-quote-size", step.size + "px");
      card.style.setProperty("--ov-quote-leading", step.leading + "px");
      var lines = Math.round(q.scrollHeight / step.leading);
      if (card.offsetHeight <= w && lines <= maxLines) { chosen = step; break; }
    }
    card.style.setProperty("--ov-quote-size", chosen.size + "px");
    card.style.setProperty("--ov-quote-leading", chosen.leading + "px");
    card.classList.remove("is-measuring");
    card.style.setProperty("--ov-card-min", w + "px");
  }

  function fitQuotes() {
    Array.prototype.forEach.call(document.querySelectorAll(".ov-card"), fitQuote);
  }


  /* ======================================================================
     The commitment list

     Structure, spacing and hover measured off
     watchtower.bank.green/institution/abn_amro: a 312px filter rail on the
     page ground, a 1112px white card, a 52px tools bar carrying the grouping
     control, then group headings over 32px rows separated by 8px of space —
     no rules between rows, the hover tint does that work.

     Every type style here is one of the classes defined in styles.css from
     the Figma text styles. Nothing sets a font size or weight of its own.
     ====================================================================== */

  /* The general-clauses articles are rows of the repository, not a list beside
     it: a reader filtering to Barclays should be shown everything of Barclays'
     that has been analysed, and these provisions reach all of it.

     `kind` is what the table branches on. They are not commitments — no number,
     no category of their own, no rating, no financing checked against them — so
     the columns and the counts below say so rather than filling those cells in
     with something that looks like data. Merged here rather than written into
     commitments-table.js, so that file stays one row per commitment. */
  var ROWS = (window.WATCHTOWER_TABLE || []).concat(
    (window.WATCHTOWER_GENERAL || []).map(function (g) {
      return {
        kind: "general", page: g.page, bank: g.bank,
        title: g.title, short_title: g.short_title,
        provisions: g.provisions,
        published: g.published, published_confidence: g.published_confidence,
        fuel: null, result: null, deals: 0,
        /* Every article is on the landing page, so it carries the same mark as
           the commitments picked for it — or "Shown on landing page" would
           leave out rows that are shown there. */
        featured: true,
        /* Released with its bank's first published page, which links to it (spec 3.65). */
        selected_for_publication: !!g.selected_for_publication
      };
    }));

  /* The star marks a landing-page pick, so those stay easy to spot. Being
     chosen to publish first is no longer a mark of its own: it is a stage of
     the commitment's Status (Jurian, 2026-10-12). */
  var PUBLICATION = [
    { label: "Shown on landing page", mark: '<span class="repo-pick" aria-hidden="true">\u2605</span>',
      test: function (r) { return !!r.featured; } }
  ];

  var COMMITMENT_TOTAL = (window.WATCHTOWER_TABLE || []).length;

  /* Where each commitment stands with its social post, from the drafts
     social/build.py writes (data/social-table.js). Pages that do not load
     that file get no Social filter. An article of general clauses has no
     post of its own and is not a row this filter answers for. */
  var SOCIAL = window.WATCHTOWER_SOCIAL || null;
  function socialOf(r) {
    var m = SOCIAL && /commitment-(.+)\.html$/.exec(r.page || "");
    return (m && SOCIAL[m[1]]) || null;
  }

  /* One status per commitment, for the article and its social post together:
     they are made from the same content and checked at the same time
     (Jurian, 2026-10-12).

       Draft                  the default
       Selected               chosen to publish first (selected_for_publication)
       Ready for publication  the rating reviewed by a person, the post's own
                              text reviewed, and no issue left in the checks
       Published              released to users (published_live; not in the
                              data yet)

     Pages that do not load the social data can only say Draft, Selected or
     Published. */
  var STAGES = [
    { key: "draft",     label: "Draft" },
    { key: "selected",  label: "Selected" },
    { key: "ready",     label: "Ready for publication" },
    { key: "published", label: "Published" }
  ];
  function stageOf(r) {
    if (r.published_live) return "published";
    var s = socialOf(r);
    if (s && s.images && s.status === "draft" && s.rating_reviewed
        && !(s.to_review && s.to_review.length)) return "ready";
    if (r.selected_for_publication) return "selected";
    return "draft";
  }
  function stageLabel(r) {
    var k = stageOf(r);
    return STAGES.filter(function (st) { return st.key === k; })[0].label;
  }

  /* What is still open on the way to Ready for publication: a check that
     found something on the post, or text written for social that nobody
     has read yet ("reviewed" in its copy file). */
  var CHECKS = [
    { key: "issues", label: "Has issues",        test: function (s) { return !!(s && s.images && s.status !== "draft"); } },
    { key: "review", label: "Needs your review", test: function (s) { return !!(s && s.to_review && s.to_review.length); } }
  ];

  /* Worst first. Alphabetical order would put Crushed next to Holds and say
     nothing; this is the order the assessment itself is graded in. */
  var RESULT_RANK = { crushed: 0, hollowed: 1, holds: 2 };

  /* Bank, then category, then the commitment itself: widest context first,
     narrowing to the thing being named. */
  var COLUMNS = [
    { key: "bank",      label: "Bank",       width: "180px" },
    { key: "fuel",      label: "Category",   width: "150px" },
    { key: "title",     label: "Commitment", width: "minmax(0, 1fr)" },
    { key: "deals",     label: "Deals",      width: "90px" },
    { key: "result",    label: "Assessment", width: "120px" },
    { key: "status",    label: "Status",     width: "170px" },
    /* The date the commitment takes effect. For now that is the publication
       date of the document it is stated in — the only date on file. */
    { key: "published", label: "Active from", width: "100px" }
  ];

  /* A column that only repeats the heading above it is noise, so the grouped
     field drops out of the rows. The date is the exception: the heading is a
     year and the cell is the day, so the cell still says something. */
  function activeColumns() {
    return COLUMNS.filter(function (c) {
      return c.key === "published" || c.key !== state.group;
    });
  }

  /* Financing found against the commitment, as the total the case records.
     Blank where there is none, rather than a zero — 56 of 59 have nothing, and
     a column of noughts reads as data when it is really an absence.

     The tag carries the figure alone. That the figure is a floor rather than a
     closed total, and which deals make it up, are true but not things a 60px
     tag can say; they go to the tooltip instead. */
  function dealCell(r) {
    var n = r.deals || 0;
    if (!n) return el('<span class="repo-col-deals"></span>');

    var label = r.deal_amount || (n + "x");   /* the count, if no figure was recorded */
    var c = el('<span class="repo-col-deals"><span class="repo-deal">'
      + '<svg class="repo-deal-ico" aria-hidden="true"><use href="#i-deal"/></svg>'
      + '<span class="ts-label-sm">' + esc(label) + "</span></span></span>");

    var note = n === 1 ? "1 deal found against this commitment"
                       : n + " deals found against this commitment";
    if (r.deal_amount_combines) note += ": " + r.deal_amount_combines;
    if (r.deal_amount && r.deal_amount_complete === false) {
      note += ". This is what has been found so far, not a closed total.";
    }
    c.title = note;
    return c;
  }

  /* Grouping, not sorting: the question is which commitments belong together,
     and the ordering inside a group is always the same — newest first. */
  var GROUPINGS = [
    { key: "bank",      label: "Bank" },
    { key: "fuel",      label: "Category" },
    { key: "result",    label: "Assessment" },
    { key: "status",    label: "Status" },
    { key: "published", label: "Date" }
  ];

  function distinct(key) {
    var seen = {}, out = [];
    ROWS.forEach(function (r) {
      var v = r[key];
      if (v == null || seen[v]) return;
      seen[v] = 1; out.push(v);
    });
    return out;
  }

  var FUELS = distinct("fuel").sort();
  var BANKS = distinct("bank").sort();
  var RESULTS = distinct("result").sort(function (a, b) {
    return RESULT_RANK[a.toLowerCase()] - RESULT_RANK[b.toLowerCase()];
  });

  /* `result` is a list because picking two of three verdicts is a real
     question; the other two facets answer one value at a time. */
  var state = {
    group: "bank",
    query: "",
    /* "short" is the title with the bank stripped; "plain" is the commitment
       as a reader would first take it. Some analysts would rather read the
       second, so it is a view of the same row, not a different list. */
    titleMode: "short",
    filters: { fuel: "", bank: "", result: [], dealsOnly: false, publication: [], status: [], checks: [] }
  };

  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  /* ISO in, "Apr 23, 2026" out, in American order (spec 3.64). Parsed by hand rather than through Date, which
     reads a bare ISO date as UTC and can shift it a day west of Greenwich. */
  function formatDate(iso) {
    if (!iso) return "—";
    var p = String(iso).split("-");
    if (p.length !== 3) return iso;
    return MONTHS[Number(p[1]) - 1] + " " + Number(p[2]) + ", " + p[0];
  }

  /* Two kinds of row, counted as two kinds of thing. Saying "122 commitments"
     of a list holding 120 and two articles is the sort of small untruth this
     repository exists to catch. */
  function countLabel(rows) {
    var arts = 0;
    rows.forEach(function (r) { if (r.kind === "general") arts++; });
    var coms = rows.length - arts, parts = [];
    if (coms || !arts) parts.push(coms + (coms === 1 ? " commitment" : " commitments"));
    if (arts) parts.push(arts + (arts === 1 ? " article" : " articles"));
    return parts.join(" and ");
  }

  function visibleRows() {
    var q = state.query.trim().toLowerCase();
    var f = state.filters;
    return ROWS.filter(function (r) {
      var general = r.kind === "general";
      /* Category and assessment pull in opposite directions for an article.
         A category names a kind of commitment and these provisions reach every
         one of them, so narrowing to Coal does not narrow them away. An
         assessment is a score on a commitment and they carry none, so asking
         for a verdict is asking a question they are not an answer to — and the
         same goes for financing found, which the deals test already handles
         because they have none. Jurian, 2026-09-23. */
      if (f.fuel && !general && r.fuel !== f.fuel) return false;
      if (f.bank && r.bank !== f.bank) return false;
      if (f.result.length && (general || f.result.indexOf(r.result) === -1)) return false;
      if (f.dealsOnly && !r.deals) return false;
      /* Ticked together, these read as either, like the assessments. */
      if (f.status.length && f.status.indexOf(stageOf(r)) === -1) return false;
      if (f.checks.length && (general || !CHECKS.some(function (o) {
        return f.checks.indexOf(o.key) !== -1 && o.test(socialOf(r));
      }))) return false;
      /* Ticked together, the two read as either, the way two assessments do. */
      if (f.publication.length && !PUBLICATION.some(function (p) {
        return f.publication.indexOf(p.label) !== -1 && p.test(r);
      })) return false;
      if (!q) return true;
      /* Search covers both readings, so a term is findable in whichever one
         is currently on screen — and in the one that is not. */
      return (r.title + " " + r.bank + " " + (r.plain_rendering || ""))
        .toLowerCase().indexOf(q) !== -1;
    });
  }

  /* Grouped by the chosen key, newest first inside every group. Date groups by
     year: a heading per day would be a heading per row. */
  function groupRows(rows) {
    var key = state.group;
    var buckets = {}, order = [];
    rows.forEach(function (r) {
      /* An article has no category and no rating, and "Unrecorded" would say it
         was missing one. It is not missing: a category belongs to a commitment,
         and these sit across all of them. Bank and date it answers like any row. */
      var v = key === "published"
        ? String(r.published || "").slice(0, 4) || "Undated"
        : key === "status" ? stageLabel(r)
        : r.kind === "general" && key === "fuel" ? "Every category"
        : r.kind === "general" && key === "result" ? "Not rated"
        : (r[key] || "Unrecorded");
      if (!buckets[v]) { buckets[v] = []; order.push(v); }
      buckets[v].push(r);
    });

    order.sort(function (a, b) {
      if (key === "published") return b.localeCompare(a);          /* newest year first */
      if (key === "status") {                                      /* furthest along first: Published down to Draft */
        var rank = function (x) { return STAGES.map(function (st) { return st.label; }).indexOf(x); };
        return rank(b) - rank(a);
      }
      /* The two group names the articles bring are not values on the ramp they
         are sorted against, so they go last rather than into it. */
      var aOut = a === "Every category" || a === "Not rated";
      var bOut = b === "Every category" || b === "Not rated";
      if (aOut !== bOut) return aOut ? 1 : -1;
      if (aOut) return a.localeCompare(b);
      if (key === "result") {
        return RESULT_RANK[a.toLowerCase()] - RESULT_RANK[b.toLowerCase()];
      }
      return a.localeCompare(b);
    });

    return order.map(function (name) {
      var list = buckets[name].slice().sort(function (a, b) {
        return String(b.published || "").localeCompare(String(a.published || ""));
      });
      return { name: name, rows: list };
    });
  }

  /* --- the filter rail ---------------------------------------------------- */

  function field(label) {
    var f = el('<div class="repo-field"></div>');
    f.appendChild(el('<span class="repo-label ts-label-md">' + esc(label) + "</span>"));
    return f;
  }

  function selectField(label, plural, values, current, onPick) {
    var f = field(label);
    var sel = el('<select class="repo-select ts-body-sm"></select>');
    sel.setAttribute("aria-label", label);
    sel.appendChild(el('<option value="">All ' + esc(plural) + "</option>"));
    values.forEach(function (v) {
      sel.appendChild(el('<option value="' + esc(v) + '">' + esc(v) + "</option>"));
    });
    sel.value = current;
    sel.addEventListener("change", function () { onPick(sel.value); });
    f.appendChild(sel);
    return f;
  }

  /* Two callbacks, because they cost different things. Changing a facet
     rebuilds the rail so every control redraws; typing must not, or the input
     is replaced under the caret and focus is lost mid-word. */
  function buildRail(onChange, onQuery) {
    var rail = el('<aside class="repo-side" aria-label="Filter commitments"></aside>');

    var searchField = field("Search titles");
    var search = el('<input class="repo-input ts-body-sm" type="search"'
      + ' placeholder="Search commitments and banks"'
      + ' aria-label="Search commitments">');
    search.value = state.query;          /* survives a rebuild from elsewhere */
    search.addEventListener("input", function () {
      state.query = search.value;
      onQuery();
    });
    searchField.appendChild(search);
    rail.appendChild(searchField);

    rail.appendChild(selectField("Bank", "banks", BANKS, state.filters.bank, function (v) {
      state.filters.bank = v; onChange();
    }));

    rail.appendChild(selectField("Category", "categories", FUELS, state.filters.fuel, function (v) {
      state.filters.fuel = v; onChange();
    }));

    var assess = field("Assessment");
    var checks = el('<div class="repo-checks"></div>');
    RESULTS.forEach(function (v) {
      var on = state.filters.result.indexOf(v) !== -1;
      var row = el('<label class="repo-check ts-body-sm"></label>');
      var box = el('<input type="checkbox"' + (on ? " checked" : "") + ">");
      box.addEventListener("change", function () {
        var i = state.filters.result.indexOf(v);
        if (box.checked && i === -1) state.filters.result.push(v);
        else if (!box.checked && i !== -1) state.filters.result.splice(i, 1);
        onChange();
      });
      row.appendChild(box);
      row.appendChild(el("<span>" + esc(v) + "</span>"));
      checks.appendChild(row);
    });
    assess.appendChild(checks);
    rail.appendChild(assess);

    function checkGroup(label, options, list) {
      var g = field(label);
      var box = el('<div class="repo-checks"></div>');
      options.forEach(function (o) {
        var row = el('<label class="repo-check ts-body-sm"></label>');
        var input = el('<input type="checkbox"' + (list.indexOf(o.key) !== -1 ? " checked" : "") + ">");
        input.addEventListener("change", function () {
          var i = list.indexOf(o.key);
          if (input.checked && i === -1) list.push(o.key);
          else if (!input.checked && i !== -1) list.splice(i, 1);
          onChange();
        });
        row.appendChild(input);
        row.appendChild(el("<span>" + esc(o.label) + "</span>"));
        box.appendChild(row);
      });
      g.appendChild(box);
      return g;
    }
    rail.appendChild(checkGroup("Status", STAGES, state.filters.status));

    /* Only three of 59 have financing on file, so this is the fastest way to
       the cases where the money has actually been traced. */
    var fin = field("Financing");
    var finChecks = el('<div class="repo-checks"></div>');
    var finRow = el('<label class="repo-check ts-body-sm"></label>');
    var finBox = el('<input type="checkbox"'
      + (state.filters.dealsOnly ? " checked" : "") + ">");
    finBox.addEventListener("change", function () {
      state.filters.dealsOnly = finBox.checked;
      onChange();
    });
    finRow.appendChild(finBox);
    finRow.appendChild(el("<span>Deals found only</span>"));
    finChecks.appendChild(finRow);
    fin.appendChild(finChecks);
    rail.appendChild(fin);

    var pub = field("Publication");
    var pubChecks = el('<div class="repo-checks"></div>');
    PUBLICATION.forEach(function (p) {
      var row = el('<label class="repo-check ts-body-sm"></label>');
      var box = el('<input type="checkbox"'
        + (state.filters.publication.indexOf(p.label) !== -1 ? " checked" : "") + ">");
      box.addEventListener("change", function () {
        var i = state.filters.publication.indexOf(p.label);
        if (box.checked && i === -1) state.filters.publication.push(p.label);
        else if (!box.checked && i !== -1) state.filters.publication.splice(i, 1);
        onChange();
      });
      row.appendChild(box);
      row.appendChild(el("<span>" + p.mark + esc(p.label) + "</span>"));
      pubChecks.appendChild(row);
    });
    pub.appendChild(pubChecks);
    rail.appendChild(pub);

    if (SOCIAL) rail.appendChild(checkGroup("Checks", CHECKS, state.filters.checks));

    /* Not a filter — it changes how each row reads, not which rows are here —
       so it sits below them, after a rule. */
    var reading = field("Read as");
    reading.classList.add("repo-field-reading");
    var seg = el('<div class="repo-seg" role="group" aria-label="Read as"></div>');
    [{ key: "short", label: "Title" },
     { key: "plain", label: "Commitment" }].forEach(function (m) {
      var on = state.titleMode === m.key;
      var b = el('<button type="button" class="repo-seg-btn ts-label-sm'
        + (on ? " is-active" : "") + '" aria-pressed="' + (on ? "true" : "false")
        + '">' + esc(m.label) + "</button>");
      b.addEventListener("click", function () { state.titleMode = m.key; onChange(); });
      seg.appendChild(b);
    });
    reading.appendChild(seg);
    rail.appendChild(reading);

    /* Always built, shown or hidden by render(). Typing does not rebuild the
       rail — that would take the caret with it — so a button that only
       existed when something was filtered would never appear for a search. */
    var clear = el('<button type="button" class="repo-clear ts-body-sm">Clear all filters</button>');
    clear.hidden = !isFiltered();
    clear.addEventListener("click", function () {
      state.query = "";
      state.filters = { fuel: "", bank: "", result: [], dealsOnly: false, publication: [], status: [], checks: [] };
      onChange();
    });
    rail.appendChild(clear);
    return rail;
  }

  /* --- the address bar -------------------------------------------------- */

  /* Every filter and setting is written into the address, so the back and
     forward buttons bring a view back and a link carries it to someone else
     (Jurian, 2026-10-01). Only what differs from the defaults is written, so
     a plain visit keeps a plain address. Other scripts on the page (the
     social view) keep their own keys in the same address; these leave them
     alone. */
  var PUB_KEYS = ["landing"];                  /* PUBLICATION, in order */

  function fromUrl() {
    var u = new URLSearchParams(location.search);
    function list(key) { return (u.get(key) || "").split(",").filter(Boolean); }
    function pick(values, wanted) {
      return values.filter(function (v) {
        return wanted.indexOf(String(v).toLowerCase()) !== -1;
      });
    }
    state.query = u.get("q") || "";
    state.group = GROUPINGS.some(function (g) { return g.key === u.get("group"); })
      ? u.get("group") : "bank";
    state.titleMode = u.get("read") === "commitment" ? "plain" : "short";
    state.filters = {
      bank: BANKS.indexOf(u.get("bank")) !== -1 ? u.get("bank") : "",
      fuel: FUELS.indexOf(u.get("category")) !== -1 ? u.get("category") : "",
      result: pick(RESULTS, list("assessment")),
      dealsOnly: u.get("deals") === "1",
      publication: PUBLICATION.filter(function (p, i) {
        return list("publication").indexOf(PUB_KEYS[i]) !== -1;
      }).map(function (p) { return p.label; }),
      status: STAGES.map(function (st) { return st.key; }).filter(function (k) {
        return list("status").indexOf(k) !== -1
          /* links from before the Status: ?publication=selected */
          || (k === "selected" && list("publication").indexOf("selected") !== -1);
      }),
      checks: SOCIAL ? CHECKS.map(function (o) { return o.key; }).filter(function (k) {
        /* ?social=review, from before the Checks, still opens the same view */
        return list("checks").indexOf(k) !== -1 || list("social").indexOf(k) !== -1;
      }) : []
    };
  }

  function toUrl(how) {
    var u = new URLSearchParams(location.search);
    var f = state.filters;
    function put(key, value) { if (value) u.set(key, value); else u.delete(key); }
    put("q", state.query.trim());
    put("bank", f.bank);
    put("category", f.fuel);
    put("assessment", f.result.map(function (v) { return v.toLowerCase(); }).join(","));
    put("deals", f.dealsOnly ? "1" : "");
    put("publication", PUBLICATION.map(function (p, i) {
      return f.publication.indexOf(p.label) !== -1 ? PUB_KEYS[i] : "";
    }).filter(Boolean).join(","));
    put("status", f.status.join(","));
    put("checks", f.checks.join(","));
    u.delete("social");
    put("group", state.group === "bank" ? "" : state.group);
    put("read", state.titleMode === "plain" ? "commitment" : "");
    /* Commas left readable in a shared link: ?status=draft,selected, not draft%2Cselected. */
    var query = u.toString().replace(/%2C/gi, ",");
    var next = location.pathname + (query ? "?" + query : "") + location.hash;
    if (next === location.pathname + location.search + location.hash) return;
    /* A click is a step back can return to; a keystroke in the search box
       only updates the step it is part of. */
    history[how === "push" ? "pushState" : "replaceState"](null, "", next);
  }

  function isFiltered() {
    var f = state.filters;
    return !!(f.fuel || f.bank || f.result.length || f.dealsOnly || f.publication.length
      || f.status.length || f.checks.length
      || state.query.trim());
  }

  /* The row's headline, in whichever reading is selected.

     Plain language is the commitment's own words with the pronouns resolved —
     clauses[0].plain_rendering — not naive_reading. naive_reading is what a
     lay reader would *believe* the commitment does, written deliberately
     wider than the text supports so the loophole lands later in the page. In
     a list an analyst scans, that would misstate the commitment. */
  function rowTitle(r) {
    if (state.titleMode === "plain" && r.plain_rendering) return r.plain_rendering;
    return r.short_title || r.title;
  }

  /* Active filters repeated as removable badges in the card header, the way
     the repository header carries them. */
  function buildChips(onChange) {
    var wrap = el('<div class="repo-chips"></div>');

    function chip(label, remove) {
      var c = el('<button type="button" class="repo-chip ts-body-sm-bold">' + esc(label)
        + '<span class="repo-chip-x" aria-hidden="true">×</span></button>');
      c.setAttribute("aria-label", "Remove filter " + label);
      c.addEventListener("click", function () { remove(); onChange(); });
      wrap.appendChild(c);
    }

    if (state.filters.bank) chip("Bank: " + state.filters.bank,
      function () { state.filters.bank = ""; });
    if (state.filters.fuel) chip("Category: " + state.filters.fuel,
      function () { state.filters.fuel = ""; });
    state.filters.result.slice().forEach(function (v) {
      chip("Assessment: " + v, function () {
        state.filters.result.splice(state.filters.result.indexOf(v), 1);
      });
    });
    if (state.filters.dealsOnly) chip("Deals found only",
      function () { state.filters.dealsOnly = false; });
    state.filters.publication.slice().forEach(function (v) {
      chip(v, function () {
        state.filters.publication.splice(state.filters.publication.indexOf(v), 1);
      });
    });
    STAGES.forEach(function (o) {
      if (state.filters.status.indexOf(o.key) === -1) return;
      chip("Status: " + o.label, function () {
        state.filters.status.splice(state.filters.status.indexOf(o.key), 1);
      });
    });
    CHECKS.forEach(function (o) {
      if (state.filters.checks.indexOf(o.key) === -1) return;
      chip(o.label, function () {
        state.filters.checks.splice(state.filters.checks.indexOf(o.key), 1);
      });
    });
    if (state.query.trim()) chip("Search: " + state.query.trim(),
      function () { state.query = ""; });

    return wrap;
  }

  /* --- the list ----------------------------------------------------------- */

  function cell(col, r) {
    if (col.key === "title") {
      var t = el('<span class="repo-col-title"></span>');
      /* The same pick as the overview cards, marked where a reader scanning 124
         rows can see it. A star rather than a word: the column is already the
         longest on the row and a second label would push the title out. */
      if (r.featured) {
        var star = el('<span class="repo-pick" aria-label="Shown on landing page">\u2605</span>');
        star.title = "Shown on the landing page";
        t.appendChild(star);
      }
      var plain = state.titleMode === "plain" && r.plain_rendering;
      var a = el('<a class="repo-link ' + (plain ? "is-plain ts-body-sm" : "ts-body-sm-bold")
        + '" href="' + esc(r.page) + '">' + esc(rowTitle(r)) + "</a>");
      /* Rows are one line, so a long quotation is cut. The full text of both
         readings sits on the element, with a note where the commitment has
         more clauses than the one shown. */
      var tip = r.title;
      if (r.plain_rendering) tip += "\n\n" + r.plain_rendering;
      if (r.clause_count > 1) {
        tip += "\n\n(1 of " + r.clause_count + " quoted passages — open the page for the rest)";
      }
      a.title = tip;
      t.appendChild(a);
      return t;
    }
    if (col.key === "result") {
      /* No pill where there is no rating. A row that reads "—" in the shape of a
         verdict looks like a verdict that went missing; an article was never
         scored, and an empty cell is what that looks like. */
      if (!r.result) return el('<span class="repo-col-result"></span>');
      return el('<span class="repo-col-result"><span class="repo-result is-'
        + esc(r.result_key || "unknown") + ' ts-label-sm">'
        + esc(r.result) + "</span></span>");
    }
    if (col.key === "deals") return dealCell(r);
    if (col.key === "status") {
      var k = stageOf(r);
      var st = el('<span class="repo-col-status"><span class="repo-status is-' + k + ' ts-label-sm">'
        + esc(stageLabel(r)) + "</span></span>");
      /* What still stands between this commitment and the next stage. */
      var s = socialOf(r), open = [];
      if (s && s.issues) open = open.concat(s.issues.filter(function (x) { return x.indexOf("tried for") !== 0; }));
      if (s && s.to_review && s.to_review.length) open.push("To review: " + s.to_review.join(", "));
      if (s && !s.rating_reviewed && r.kind !== "general") open.push("Rating not yet reviewed by a person");
      if (open.length) st.title = open.join("\n");
      return st;
    }
    if (col.key === "published") {
      /* A `low` confidence date was inferred by the analyst, not read off the
         document. It is shown, but marked, rather than passed off as read. */
      var approx = r.published_confidence === "low";
      var d = el('<span class="repo-col-published ts-body-sm'
        + (approx ? " is-approx" : "") + '">'
        + (approx ? "c. " : "") + esc(formatDate(r.published)) + "</span>");
      if (approx) d.title = "Date inferred; the document does not state it";
      return d;
    }
    /* "All", not a dash. A dash is this table's mark for a value that is missing;
       an article's category is not missing, it is every one of them — which is why
       narrowing to Coal leaves it in place. The field itself stays null, so "All"
       never turns up as an option in the Category filter. */
    if (col.key === "fuel" && r.kind === "general") {
      return el('<span class="repo-col-fuel ts-body-sm">All</span>');
    }
    return el('<span class="repo-col-' + esc(col.key) + ' ts-body-sm">'
      + esc(r[col.key] || "—") + "</span>");
  }

  function buildList() {
    var groups = groupRows(visibleRows());
    var wrap = el('<div class="repo-listing'
      + (state.titleMode === "plain" ? " is-plain" : "") + '"></div>');

    if (!groups.length) {
      wrap.appendChild(el('<p class="repo-empty ts-body-md">'
        + "No commitments match these filters.</p>"));
      return wrap;
    }

    /* One track list, set here and read by the label row and every row, so
       they stay aligned as columns come and go. */
    var cols = activeColumns();
    wrap.style.setProperty("--repo-cols",
      cols.map(function (c) { return c.width; }).join(" "));

    groups.forEach(function (g) {
      var sec = el('<section class="repo-group"></section>');
      var h = el('<div class="repo-group-head"></div>');
      h.appendChild(el('<h3 class="ts-body-md-bold">' + esc(g.name) + "</h3>"));
      h.appendChild(el('<span class="repo-group-count ts-body-sm">('
        + esc(countLabel(g.rows)) + ")</span>"));
      sec.appendChild(h);

      var list = el('<div class="repo-rows" role="list"></div>');
      g.rows.forEach(function (r) {
        var row = el('<div class="repo-row" role="listitem"></div>');
        cols.forEach(function (c) { row.appendChild(cell(c, r)); });
        list.appendChild(row);
      });
      sec.appendChild(list);
      wrap.appendChild(sec);
    });

    return wrap;
  }

  /* --- assembly ----------------------------------------------------------- */

  function mountTable(host) {
    if (!ROWS.length) {
      console.error("No table index on window.WATCHTOWER_TABLE");
      return;
    }

    /* The ground runs the full width of the page; the rail and card inside it
       do not. Left to grow, the title column swallows every extra pixel and
       opens a hole between the commitment and its verdict. */
    var section = el('<section class="ov-repo" id="all-commitments"></section>');
    var shell = el('<div class="repo-shell"></div>');
    section.appendChild(shell);
    var railSlot = el('<div class="repo-rail"></div>');
    var card = el('<div class="repo-card"></div>');
    shell.appendChild(railSlot);
    shell.appendChild(card);

    /* The title and the tools bar stay at the top while the list scrolls
       under them (Jurian, 2026-10-01), so they share one sticky wrapper: two
       sticky siblings would need the header's height, which the filter chips
       change. */
    var bar = el('<div class="repo-bar"></div>');
    card.appendChild(bar);

    var header = el('<header class="repo-header"></header>');
    header.appendChild(el('<h2 class="ts-title-sm">All commitments</h2>'));
    var chipSlot = el('<div class="repo-chipslot"></div>');
    header.appendChild(chipSlot);
    bar.appendChild(header);

    var tools = el('<div class="repo-tools"></div>');
    var count = el('<span class="repo-count ts-body-sm"></span>');
    tools.appendChild(count);
    var groupSlot = el('<div class="repo-groupby"></div>');
    tools.appendChild(groupSlot);
    bar.appendChild(tools);

    var listSlot = el('<div class="repo-list"></div>');
    card.appendChild(listSlot);

    function buildGroupBy() {
      var wrap = el('<div class="repo-seg-wrap"></div>');
      wrap.appendChild(el('<span class="repo-seg-label ts-label-sm">Group by:</span>'));
      var seg = el('<div class="repo-seg" role="group" aria-label="Group by"></div>');
      GROUPINGS.forEach(function (g) {
        var on = state.group === g.key;
        var b = el('<button type="button" class="repo-seg-btn ts-label-sm'
          + (on ? " is-active" : "") + '" aria-pressed="' + (on ? "true" : "false")
          + '">' + esc(g.label) + "</button>");
        b.addEventListener("click", function () { state.group = g.key; render(false, "push"); });
        seg.appendChild(b);
      });
      wrap.appendChild(seg);
      return wrap;
    }

    function render(rebuildRail, how) {
      if (rebuildRail) {
        railSlot.replaceChildren(buildRail(
          function () { render(true, "push"); },       /* a facet changed */
          function () { render(false, "replace"); })); /* a keystroke */
      }
      chipSlot.replaceChildren(buildChips(function () { render(true, "push"); }));
      groupSlot.replaceChildren(buildGroupBy());
      listSlot.replaceChildren(buildList());

      /* Kept in step on light renders too, when the rail itself is untouched. */
      var clear = railSlot.querySelector(".repo-clear");
      if (clear) clear.hidden = !isFiltered();

      /* The "x of y" belongs to the commitments, which are what the filters are
         written about; the articles are appended as their own count. */
      var shown = visibleRows(), arts = 0;
      shown.forEach(function (r) { if (r.kind === "general") arts++; });
      var coms = shown.length - arts;
      var text = coms === COMMITMENT_TOTAL
        ? COMMITMENT_TOTAL + " commitments"
        : coms + " of " + COMMITMENT_TOTAL + " commitments";
      if (arts) text += " and " + arts + (arts === 1 ? " article" : " articles");
      count.textContent = text;

      if (how) toUrl(how);
    }

    fromUrl();
    render(true);
    window.addEventListener("popstate", function () { fromUrl(); render(true); });
    host.appendChild(section);
  }

  /* Wherever the hero is a single column — from 1100 down — the intro goes
     above the card, as Figma 15786:119703 draws it for the phone. Between 700
     and 1100 the column reads just as it does on a phone, so it is ordered the
     same. (The commitment page lifts its title above its card at the same
     break — placeTitle in commitment.js.) The node moves rather than
     being reordered with CSS `order`, so a screen reader and a keyboard walk
     the hero in the order it is shown. matchMedia rather than resize: it fires
     on the crossing, not on every pixel of a drag. */
  function placeIntro(grid, side, intro) {
    var narrow = window.matchMedia("(max-width: 1100px)");
    function apply() {
      if (narrow.matches) grid.insertBefore(intro, side);
      else grid.appendChild(intro);
    }
    apply();
    if (narrow.addEventListener) narrow.addEventListener("change", apply);
    else if (narrow.addListener) narrow.addListener(apply);
  }

  /* The same footer the commitment pages render, in its default light form.
     The dark variant belongs to the commitment page, where the footer meets
     the dark assessment section; here it meets the page ground. */
  function footer() {
    return el('<footer class="cm-footer ts-body-sm"><div class="inner">'
      + '<span class="cm-wordmark">'
      + '<svg class="ico" aria-hidden="true"><use href="#i-logo-dark"/></svg>Watchtower</span>'
      + '<span class="sep"></span>'
      + '<a href="https://bank.green">A Bank.Green Initiative</a>'
      + '<span class="spacer"></span>'
      + '<span>Send enquiries to <a href="mailto:enquiries@bank.green">enquiries@bank.green</a></span>'
      + '<span class="sep"></span>'
      + "<span>© 2026 Bank.Green. All rights reserved.</span>"
      + "</div></footer>");
  }

  function mount() {
    var host = document.getElementById("ov-root");

    /* all-commitments.html is the repository on a page of its own: the filter
       rail and the full table, then the footer. commitments.html is the
       overview — hero and cards — and links to it. */
    if (host.dataset.view === "all") {
      mountTable(host);
      host.appendChild(footer());
      return;
    }

    if (!CASES) { console.error("No index on window.WATCHTOWER_CASES"); return; }

    /* Bank.Green's picks, in the rank the editorial layer gives them, and only
       those. The commitments that are not picked are still on the site — every
       one of them is in the table on all-commitments.html, with the financing
       found against it — but the strip is a choice, not an index.
       Ordering used to be whichever commitment carried the highest number. */
    var list = CASES.filter(function (e) { return e.featured; })
      .sort(function (a, b) { return a.featured.rank - b.featured.rank; });
    var featured = list[0];

    /* The hero is built on the commitment page's own grid — .cm-grid, with a
       .cm-side for the card and a .cm-main for the prose, and `cm` on the
       section for the variables those read — so the two pages share one set of
       columns and one set of breaks: the card in the 571 column on the left,
       the intro in the 560 one beside it (Figma 15199:63789), and a single
       column from 1100 down. Moving from the overview to a commitment then
       changes nothing about where things sit. */
    var hero = el('<section class="ov-hero cm"></section>');
    var grid = el('<div class="cm-grid"></div>');
    var side = el('<div class="cm-side"></div>');
    var intro = el('<div class="cm-main ov-intro"></div>');

    /* title/extra_large, the class the commitment pages set their title in, so
       the two step down the same ramp: 60/60, and 40/48 on a phone. */
    intro.appendChild(el('<h1 class="ov-title ts-title-xl">' + esc(HERO.title) + "</h1>"));
    /* One block for the two paragraphs, so the intro's gap falls around them as
       a whole and the space between them is theirs to set. */
    var lede = el('<div class="ov-lede"></div>');
    HERO.intro.forEach(function (para) { lede.appendChild(el("<p>" + esc(para) + "</p>")); });
    intro.appendChild(lede);
    /* No call to action here: the featured card beside it carries its own
       "View the analysis" button to the same page (Figma 15199:63789). */

    side.appendChild(card(featured, true));
    grid.appendChild(side);
    grid.appendChild(intro);
    hero.appendChild(grid);
    host.appendChild(hero);
    placeIntro(grid, side, intro);

    var container = el('<div class="ov-container"></div>');
    var grid = el('<div class="ov-grid"></div>');
    list.slice(1).forEach(function (e) { grid.appendChild(card(e, false)); });
    /* After the picks, in the same grid. They are the other kind of card in the
       set rather than a section of their own — the face and the missing badges
       are what say they are a different kind of thing. */
    GENERAL.forEach(function (g) { grid.appendChild(clausesCard(g)); });
    container.appendChild(grid);
    /* No "See all commitments" link: Jurian, 2026-09-29 — the landing page is
       the ten picks and the general-clauses articles, for sharing with potential
       users. all-commitments.html still exists. */
    host.appendChild(container);

    host.appendChild(footer());

    /* Fitted now, again once Lora lands — it moves the wrap points — and
       whenever the width changes, since the width is the square. A height-only
       resize, a phone's toolbar folding away, changes nothing and is skipped. */
    fitQuotes();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitQuotes);
    var fitW = window.innerWidth, fitTimer;
    window.addEventListener("resize", function () {
      clearTimeout(fitTimer);
      fitTimer = setTimeout(function () {
        if (window.innerWidth === fitW) return;
        fitW = window.innerWidth;
        fitQuotes();
      }, 80);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
