#!/usr/bin/env python3
"""Build prototype/search/ (index.html, bank.html, date.html): a static demo
of title and text search in the document repository, for the query "NZBA"
across Commerzbank, Deutsche Bank, HSBC, Société Générale, CaixaBank and
ABN AMRO. Every page is the same results, grouped by relevance, bank or date.

Data is real Watchtower data (2026-10-13): titles and original titles from
search_documents, matches from search_document_text, mention counts counted
in each document's parsed markdown. The page reuses the all-commitments
repository elements (rail, card, chips, group-by, rows) from commitments.css.

    python3 prototype/build/build_document_search.py
"""
import datetime, html, json, os, re

PROTO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TERM = "NZBA"
# What counts as a mention: the abbreviation or the alliance's full name.
# Documents write either ("Net Zero Banking Alliance", "Net-Zero Banking
# Alliance (NZBA)"), and HSBC's 2024 plans only spell it out.
MATCH = r"NZBA|Net[- ]Zero Banking Alliance"
# The other spellings searched along with the term, each its own removable
# pill next to "Search: NZBA".
VARIANTS = ["Net-Zero Banking Alliance", "Net Zero Banking Alliance"]
VARIANT_CHIPS = "".join(
    '<button type="button" class="repo-chip srch-chip ts-body-sm-bold">Also: %s'
    '<span class="repo-chip-x" aria-hidden="true">×</span></button>' % v for v in VARIANTS)

CB = "Commerzbank AG"
DB = "Deutsche Bank Aktiengesellschaft"
HS = "HSBC Holdings plc"
SG = "Société Générale S.A."
CX = "Fundación Bancaria Caixa d'Estalvis i Pensions de Barcelona, \"la Caixa\""
AB = "ABN AMRO Bank N.V."

# Real Watchtower data for "NZBA" (2026-10-13): search_documents (titles) and
# search_document_text, mentions counted in each document's parsed markdown.
# bank, title, original title (only where it holds the term and the title
# does not), category, type, date, mentions, the one snippet shown
TITLE_HITS = [
    (SG, "Progress Report 2024 (Group)", "NZBA PROGRESS REPORT 2024 (JULY 2024)",
     "PRB Report", "PDF", "31 Jul 2024", 25, [""]),
    (AB, "Sustainability Research Report 2025 (Group)",
     "1 Group Economics – Sustainability Research – ESG Economist | 30 April 2025 NZBA loosens climate ambitions Introduction The Net",
     "Miscellaneous", "PDF", "30 Apr 2025", 23, [""]),
    (CX, "Sectoral Decarbonisation Targets 2024 (Group)", "NZBA: Sectoral decarbonisation targets",
     "Net Zero Transition Plan", "PDF", "1 Apr 2024", 5, [""]),
]

CONTENT_HITS = [
    (DB, "Towards Net Zero Emissions Q4 2022 (AG)", None, "Climate / TCFD Report", "PDF", "3 Mar 2022", 12, [
        "…Deutsche Bank joined the Net Zero Banking Alliance (NZBA) as a founder member in April 2021. The NZBA, convened by the United Nations Environment Programme Finance Initiative (UNEP FI), is a collaboration among some of the world's…"]),
    (HS, "Net Zero Aligned Finance Approach Update Q4 2021 (Holdings)", None, "Net Zero Transition Plan", "PDF", "1 Dec 2021", 12, [
        "…In April 2021, HSBC was one of 43 founding members of the Net Zero Banking Alliance (“NZBA”) which seeks to reinforce, accelerate and support the implementation of decarbonisation strategies, providing an internationally coherent framework and guidelines…"]),
    # Shown as its newest version that mentions the alliance (29 Jan 2024).
    # The latest version (7 Nov 2025, after HSBC left in July 2025) does not:
    # it appears, in coral, above the row once the versions are opened.
    (HS, "Net Zero Transition Plan 2024 (Holdings)", None, "Net Zero Transition Plan", "PDF", "29 Jan 2024", 1, [
        "…Launched $100m five-year Climate Solutions Partnership · Made the transition to net zero a key pillar of the Group corporate strategy · Became a member of the Net Zero Banking Alliance and Net Zero Asset Managers Initiative…"]),
    (SG, "Climate Report Q4 2021 (Group)", None, "Climate / TCFD Report", "PDF", "1 Dec 2021", 26, [
        "…Hence, it felt natural to contribute to join as a founding member the Net Zero Banking Alliance (NZBA) and as a member the Net Zero Asset Owner Alliance (NZAOA), both belonging to the GFANZ…"]),
    (CB, "Sustainability Report Q 2023 (Group)", None, "Sustainability Report", "PDF", "25 Jul 2024", 6, [
        "…we were one of the first signatories of the Net-Zero Banking Alliance of the United Nations Environment Programme Finance Initiative (UNEP FI). The NZBA requires concrete measures to reduce greenhouse gas emissions…"]),
    (CB, "ESG Framework 2026 (Group)", None, "ESG Guidelines", "PDF", "12 May 2026", 2, [
        "…2019 · Science Based Targets initiative (SBTi) · 2020 · Net-Zero Banking Alliance (NZBA) · 2021 · Biodiversity in Good Company (BiGCI) · 2022 · Partnership for Carbon Accounting Financials (PCAF)…"]),
]
# Twenty more text matches, shown once by "Show N more" (collected from the
# same searches; build/document-search-extra.json).
def load_extra():
    path = os.path.join(PROTO, "build", "document-search-extra.json")
    if not os.path.exists(path):
        return []
    banks = {"commerzbank": CB, "deutsche_bank": DB, "hsbc": HS,
             "societe_generale": SG, "la_caixa_group": CX, "abn_amro": AB}
    out = []
    for d in json.load(open(path, encoding="utf-8")):
        orig = d["title_original"]
        show_orig = (re.search(MATCH, orig, re.I) and not re.search(MATCH, d["title_clean"], re.I))
        out.append((banks[d["bank_tag"]], d["title_clean"], orig if show_orig else None,
                    d["category"], d["type"], d["date"], d["mentions"], [d["snippet"]]))
    return out


EXTRA = load_extra()

# Documents, counting a document with its versions once: 3 in the title;
# 101 text hits across the six banks less the 6 title documents.
TITLE_TOTAL = 3
CONTENT_TOTAL = 95

# Versions, as on the live list: the "N versions" button is always the same
# button, and opening it lists the other versions, each with what search
# found in it: older ones under the row, newer ones above it (Figma "Version
# Top"), since a row shows the newest version that holds the term.
# (count, open?, [older (date, type, mentions[, title])], [newer ...])
VERSIONS = {
    "Progress Report 2024 (Group)": (4, False, [
        ("1 Jul 2024", "PDF", 2, "NZBA Progress Report 2024 (Group)"),
        ("30 Nov 2023", "PDF", 3, "Progress Report 2023 (Group)"),
        ("1 Nov 2023", "PDF", 21, "Progress Report 2023 (Group)")]),
    "Net Zero Transition Plan 2024 (Holdings)": (3, False,
        [("25 Jan 2024", "PDF", 1)],
        [("7 Nov 2025", "PDF", 0, "Net Zero Transition Plan 2025 (Holdings)")]),
    "ESG Framework 2026 (Group)": (2, False, [("17 Feb 2026", "PDF", 2)]),
}

# Documents per bank whose text (not title) mentions the term:
# search_document_text counts less that bank's title matches.
CONTENT_PER_BANK = {CB: 15, DB: 19, HS: 11, SG: 21, CX: 19, AB: 10}


def hl(text):
    """Escape, then mark every occurrence of the term."""
    return re.sub(r"(?i)(%s)" % MATCH, r"<mark>\1</mark>", html.escape(text, quote=False))


# Which columns a row carries in each view, as on the live repository: the
# grouping's own field is dropped from the row, because the bar above says it.
COLS = {
    "relevance": ("bank", "cat"),
    "bank": (),
    "date": ("bank",),
}
TRACKS = {
    "relevance": "16px 180px 180px minmax(0, 1fr) 112px 44px 92px",
    "bank": "16px minmax(0, 1fr) 112px 44px 92px",
    "date": "16px 180px minmax(0, 1fr) 112px 44px 92px",
}


def row(r, cols=("bank", "cat")):
    bank, title, orig, cat, kind, date, n, snips = r
    ver = VERSIONS.get(title)
    extra = r in EXTRA
    out = ['<div class="srch-doc%s%s" role="listitem"%s>' % (
        " has-versions" if ver else "", " srch-extra" if extra else "", " hidden" if extra else "")]
    newer = ver[3] if ver and len(ver) > 3 else []
    for i, v in enumerate(newer):
        out.append(version_row(bank, v[3] if len(v) > 3 else title, cat, cols, v[0], v[1], v[2],
                               hidden=not ver[1], place="top"))
    out += ['<div class="repo-row srch-row srch-main-row">', ICON]
    if "bank" in cols:
        out.append('<span class="repo-col-bank srch-first ts-body-sm" title="%s">%s</span>' % (html.escape(bank), html.escape(bank)))
    if "cat" in cols:
        out.append('<span class="repo-col-fuel ts-body-sm%s">%s</span>' % ("" if "bank" in cols else " srch-first", html.escape(cat)))
    out += ['<div class="srch-main">',
            '<a class="repo-link srch-title ts-body-sm-bold" href="#">%s</a>' % hl(title)]
    if orig:
        out.append('<p class="srch-orig ts-body-xs">Original title: %s</p>' % hl(orig))
    if r in TITLE_HITS:
        # The title already shows why it matched: no quote, only the count.
        out.append(found(n))
    else:
        if snips[0]:
            out.append('<p class="srch-snip ts-body-sm">%s</p>' % hl(snips[0]))
        out.append(found(n))
    out.append('</div>')
    out.append('<span class="srch-ver">%s</span>' % (versions_button(ver) if ver else ""))
    out.append('<span class="srch-type ts-label-md">%s</span>' % kind)
    out.append('<span class="repo-col-published ts-body-sm">%s</span>' % date)
    out.append('</div>')
    if ver:
        for v in ver[2]:
            vdate, vkind, vn = v[:3]
            vtitle = v[3] if len(v) > 3 else title   # its own title where it differs
            out.append(version_row(bank, vtitle, cat, cols, vdate, vkind, vn, hidden=not ver[1], place="below"))
    out.append('</div>')
    return "".join(out)


ICON = '<svg class="ico srch-ico" aria-hidden="true"><use href="#i-article"/></svg>'
# The live category link (material-symbols:link), copying the section's address.
ANCHOR = ('<button type="button" class="srch-anchor" aria-label="Copy link to this category">'
          '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 17H7q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12t.875 2.125T7 15h4v2Zm-3-4v-2h8v2H8Zm5 4v-2h4q1.25 0 2.125-.875T20 12t-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17h-4Z"/></svg></button>')


EXPAND = ('<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22 6 16l1.4-1.4 4.6 4.6 4.6-4.6L18 16l-6 6ZM7.4 9.4 6 8l6-6 6 6-1.4 1.4L12 4.8 7.4 9.4Z"/></svg>')
COLLAPSE = ('<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.4 22 6 20.6l6-6 6 6-1.4 1.4-4.6-4.6L7.4 22ZM12 9.4l-6-6L7.4 2 12 6.6 16.6 2 18 3.4l-6 6Z"/></svg>')


# Opens and closes a document's other versions; removes a search pill.
TOGGLE = """<script>
document.addEventListener("click", function (e) {
  var b = e.target.closest(".srch-versions");
  if (!b) return;
  var open = b.getAttribute("aria-expanded") !== "true";
  b.setAttribute("aria-expanded", open ? "true" : "false");
  b.innerHTML = (open ? %s : %s) + "<span>" + (open ? "Hide versions" : b.dataset.closed) + "</span>";
  b.closest(".srch-doc").classList.toggle("is-open", open);
  b.closest(".srch-doc").querySelectorAll(".srch-vrow").forEach(function (r) { r.hidden = !open; });
});
document.addEventListener("click", function (e) {
  var c = e.target.closest(".srch-chip");
  if (c) c.remove();
});
document.addEventListener("click", function (e) {
  var m = e.target.closest(".srch-more-btn");
  if (!m) return;
  var scope = m.closest(".repo-group, .srch-bargroup, .srch-dateview");
  scope.querySelectorAll(".srch-extra").forEach(function (x) { x.hidden = false; });
  scope.querySelectorAll("[data-full]").forEach(function (p) { p.textContent = p.dataset.full; });
  (m.closest(".srch-cat-more") || m.closest(".srch-more")).remove();
});
</script>
""" % (json.dumps(COLLAPSE), json.dumps(EXPAND))


def versions_button(ver):
    count, is_open = ver[0], ver[1]
    return ('<button type="button" class="srch-versions ts-label-sm" aria-expanded="%s"'
            ' data-closed="%d versions">%s<span>%s</span></button>'
            % ("true" if is_open else "false", count, COLLAPSE if is_open else EXPAND,
               "Hide versions" if is_open else "%d versions" % count))


def version_row(bank, title, cat, cols, vdate, vkind, vn, hidden=False, place="below"):
    """An earlier version, drawn as the live list draws it (tree line, grey
    title), with what search found in it."""
    out = ['<div class="repo-row srch-row srch-vrow is-%s"%s>' % (place, " hidden" if hidden else ""), ICON]
    tree = '<span class="srch-tree" aria-hidden="true"></span>'
    if "bank" in cols:
        out.append('<span class="repo-col-bank ts-body-sm srch-vfirst">%s<span class="srch-vname">%s</span></span>'
                   % (tree, html.escape(bank)))
    if "cat" in cols:
        if "bank" in cols:
            out.append('<span class="repo-col-fuel ts-body-sm">%s</span>' % html.escape(cat))
        else:
            out.append('<span class="repo-col-fuel ts-body-sm srch-vfirst">%s<span class="srch-vname">%s</span></span>'
                       % (tree, html.escape(cat)))
    body = ('<a class="repo-link srch-title srch-vtitle ts-body-sm-bold" href="#">%s</a>%s'
            % (hl(title), found(vn)))
    if "bank" in cols or "cat" in cols:
        out.append('<div class="srch-main">%s</div>' % body)
    else:
        # No cell before the title (Bank view): the tree line sits in front
        # of the whole block, so the title and what was found stay aligned.
        out.append('<div class="srch-main srch-vmain srch-vfirst">%s<div class="srch-vbody">%s</div></div>'
                   % (tree, body))
    out += ['<span></span>',
            '<span class="srch-type ts-label-md">%s</span>' % vkind,
            '<span class="repo-col-published ts-body-sm">%s</span>' % vdate, '</div>']
    return "".join(out)


def found(n):
    """The same count line for title and text matches (Jurian, 2026-10-13)."""
    if not n:
        # Shown in coral: this version is in the results only through others.
        return '<p class="srch-freq srch-notfound ts-body-xs">Not found in this version</p>'
    return ('<p class="srch-freq ts-body-xs">Found %s</p>'
            % ("once" if n == 1 else "%d times" % n))


def rows_html(rows, cols):
    return '<div class="repo-rows" role="list">' + "".join(row(r, cols) for r in rows) + "</div>"


# Form/Button, Medium, secondary — the prototype's .ov-btn. Twenty at a
# time, or what is left when that is fewer.
def more(count, view="relevance"):
    """Sits in the title column, on the list's own grid. Shows the hidden
    results of its group once, then goes away."""
    if count <= 0:
        return ""
    return ('<div class="srch-more" style="--repo-cols: %s"><button type="button" '
            'class="ov-btn ts-button-sm srch-more-btn" style="grid-column: %d">Show %d more</button></div>'
            % (TRACKS[view], TITLE_COL[view], count))


# The title column's place in each view's grid: icon, then bank and
# category where the view shows them.
TITLE_COL = {"relevance": 4, "bank": 2, "date": 3}


def group(head, rows, total):
    g = ['<section class="repo-group">',
         '<div class="repo-group-head"><h3 class="ts-body-md-bold">%s</h3></div>' % head,
         rows_html(rows, COLS["relevance"])]
    g.append(more(len([r for r in rows if r in EXTRA]), "relevance"))
    g.append('</section>')
    return "\n".join(g)


def bar(name, inner):
    """A collapsible group bar of the live repository, open."""
    return ('<section class="srch-bargroup"><div class="srch-bar ts-body-sm-bold">'
            '<span class="srch-chev" aria-hidden="true">&#8964;</span>%s</div>%s</section>'
            % (html.escape(name), inner))


def heading(text):
    return '<div class="srch-viewhead"><h3 class="ts-body-md-bold">%s</h3></div>' % text


def ordered(keyfn):
    """Groups in name order; inside each, results keep their relevance order."""
    groups = {}
    for r in ALL + EXTRA:
        groups.setdefault(keyfn(r), []).append(r)
    return sorted(groups.items(), key=lambda kv: kv[0].lower())


def view_body(view):
    q = "&ldquo;%s&rdquo;" % TERM
    if view == "relevance":
        return (group("%d documents mention %s in the title" % (TITLE_TOTAL, q), TITLE_HITS, TITLE_TOTAL)
                + group("%d documents mention %s in the text" % (CONTENT_TOTAL, q), CONTENT_HITS + EXTRA, CONTENT_TOTAL))
    if view == "bank":
        # The live repository grouped by bank: a bar per bank, then a section
        # per category — the name, a link to it and its document count on the
        # left, the rows on the right. Inside a category, title matches come
        # before text matches. One "Show N more" per bank, in the title column.
        out = [heading("Found documents per bank")]
        for bank, rows in ordered(lambda r: r[0]):
            cats = {}
            for r in ([r for r in rows if r in TITLE_HITS] + [r for r in rows if r in CONTENT_HITS]
                      + [r for r in rows if r in EXTRA]):
                cats.setdefault(r[3], []).append(r)
            sections = []
            def docs(n):
                return "(%d %s)" % (n, "document" if n == 1 else "documents")
            for cat in sorted(cats, key=str.lower):
                shown = [r for r in cats[cat] if r not in EXTRA]
                n, full = len(shown), len(cats[cat])
                # A category with only hidden results is hidden with them; the
                # count shows what is visible and updates when more are shown.
                sections.append(
                    '<section class="srch-cat%s"%s><div class="srch-cat-label">'
                    '<div class="srch-cat-name"><h3 class="ts-body-sm-bold">%s</h3>%s</div>'
                    '<p class="srch-cat-n ts-body-xs" data-full="%s">%s</p></div>'
                    '<div class="srch-cat-rows">%s</div></section>'
                    % ("" if n else " srch-extra", "" if n else " hidden",
                       html.escape(cat), ANCHOR, docs(full), docs(n or full),
                       rows_html(cats[cat], COLS["bank"])))
            btn = more(len([r for r in rows if r in EXTRA]), "bank")
            if btn:
                sections.append('<div class="srch-cat srch-cat-more"><div></div>'
                                '<div class="srch-cat-rows">%s</div></div>' % btn)
            out.append(bar(bank, "".join(sections)))
        return "\n".join(out)
    if view == "date":
        # The hidden results wait in their own date slots.
        rows = sorted(ALL + EXTRA, key=lambda r: datetime.datetime.strptime(r[5], "%d %b %Y"), reverse=True)
        return ('<div class="srch-dateview">' + heading("Found documents by publication date")
                + '<div class="srch-barbody">' + rows_html(rows, COLS["date"]) + "</div>"
                + more(len(EXTRA), "date") + "</div>")


# Category was tried and dropped (Jurian, 2026-10-13): most results sit in
# small groups of their own, so it sorted nothing.
VIEWS = [("relevance", "Relevance", "index.html"), ("bank", "Bank", "bank.html"),
         ("date", "Date", "date.html")]
ALL = TITLE_HITS + CONTENT_HITS


def main():
    src = open(os.path.join(PROTO, "all-commitments.html"), encoding="utf-8").read()
    head = src[:src.index('<main')]
    head = head.replace("<title>All commitments — Watchtower</title>", "<title>Document search — Watchtower</title>")
    head = head.replace('<link rel="stylesheet" href="social-view.css?v=1791808870">\n', "")
    head = head.replace('<a href="document-repository.html">Document Repository</a>',
                        '<a href="index.html" class="is-active" aria-current="page">Document Repository</a>')
    head = head.replace('<a href="commitments.html" class="is-active" aria-current="page">Commitments</a>',
                        '<a href="commitments.html">Commitments</a>')
    # Versioned by the stylesheet's own change time, so a browser never keeps
    # an old copy after an edit.
    css_v = int(os.path.getmtime(os.path.join(PROTO, "search", "document-search.css")))
    head = head.replace("</head>", '<link rel="stylesheet" href="document-search.css?v=%d">\n</head>' % css_v)
    # One folder down: every link and asset of the copied head points up a level.
    head = re.sub(r'(href|src)="(?!https?:|#|document-search\.css|index\.html)([^"]+)"', r'\1="../\2"', head)

    q = "&ldquo;%s&rdquo;" % TERM
    rail = """
<div class="repo-rail"><aside class="repo-side" aria-label="Filter documents">
  <div class="repo-field"><span class="repo-label ts-label-md">Search documents</span>
    <input class="repo-input ts-body-sm" type="search" value="NZBA" aria-label="Search documents"></div>
  <div class="repo-field"><span class="repo-label ts-label-md">Bank</span>
    <select class="repo-select ts-body-sm" aria-label="Bank"><option>6 banks selected</option></select></div>
  <div class="repo-field"><span class="repo-label ts-label-md">Location</span>
    <select class="repo-select ts-body-sm" aria-label="Location"><option>All locations</option></select></div>
  <div class="repo-field"><span class="repo-label ts-label-md">Category</span>
    <select class="repo-select ts-body-sm" aria-label="Category"><option>All categories</option></select></div>
  <div class="repo-field"><span class="repo-label ts-label-md">Time period</span>
    <select class="repo-select ts-body-sm" aria-label="Time period"><option>Current - Oct 2026</option></select></div>
  <div class="repo-field"><span class="repo-label ts-label-md">Document type</span>
    <div class="repo-checks">
      <label class="repo-check ts-body-sm"><input type="checkbox" checked><span>PDF documents</span></label>
      <label class="repo-check ts-body-sm"><input type="checkbox" checked><span>HTML webpages</span></label>
    </div></div>
</aside></div>"""

    for view, _, filename in VIEWS:
        # The group-by control links the four views.
        seg = "".join('<a class="repo-seg-btn ts-label-sm%s" href="%s"%s>%s</a>'
                      % (" is-active" if v == view else "", f,
                         ' aria-current="page"' if v == view else "", lab)
                      for v, lab, f in VIEWS)
        card = """
    <div class="repo-card">
      <div class="repo-bar">
        <header class="repo-header srch-header"><div class="srch-header-main"><h2 class="ts-title-sm">Repository</h2>
          <div class="repo-chipslot"><div class="repo-chips">
            <button type="button" class="repo-chip srch-chip ts-body-sm-bold">Search: %s<span class="repo-chip-x" aria-hidden="true">×</span></button>%s
          </div></div></div>
          <button type="button" class="srch-upload ts-button-sm"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M9.17 13.33V6.54L7.01 8.7 5.83 7.5 10 3.33l4.17 4.17-1.18 1.2-2.16-2.16v6.79H9.17ZM5 16.67c-.46 0-.85-.17-1.18-.49A1.6 1.6 0 0 1 3.33 15v-2.5H5V15h10v-2.5h1.67V15c0 .46-.17.85-.49 1.18-.33.32-.72.49-1.18.49H5Z"/></svg>Upload Policies</button>
        </header>
        <div class="repo-tools srch-tools"><nav class="srch-tabs" aria-label="Repository sections">
            <a class="srch-tab ts-body-sm is-active" href="#" aria-current="page">Documents</a>
            <a class="srch-tab ts-body-sm" href="#">Updates</a>
            <a class="srch-tab ts-body-sm" href="#">Syntheses</a>
            <a class="srch-tab ts-body-sm" href="#">My Uploads</a>
          </nav>
          <div class="repo-groupby"><div class="repo-seg-wrap"><span class="repo-seg-label ts-label-sm">Group by:</span>
            <div class="repo-seg" role="group" aria-label="Group by">%s</div></div></div>
        </div>
      </div>
      <div class="repo-list"><div class="repo-listing srch-listing" style="--repo-cols: %s">
    %s
      </div></div>
    </div>""" % (TERM, VARIANT_CHIPS, seg, TRACKS[view], view_body(view))

        page = (head + '  <main id="ov-root"><section class="ov-repo"><div class="repo-shell">'
                + rail + card + "</div></section></main>\n</div>\n"
                + TOGGLE + '<script src="../shell.js?v=1791808870"></script>\n</body>\n</html>\n')
        out = os.path.join(PROTO, "search", filename)
        open(out, "w", encoding="utf-8").write(page)
        print("wrote", out)


if __name__ == "__main__":
    main()
