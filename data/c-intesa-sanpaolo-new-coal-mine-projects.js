/* Commitment data — generated from commitments/commitment-intesa-sanpaolo-new-coal-mine-projects.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "intesa-sanpaolo-new-coal-mine-projects",
    "bank": "Intesa Sanpaolo",
    "commitment_number": 2,
    "category": "coal",
    "effective_date": null,
    "title": "Intesa Sanpaolo's Restriction on New Coal Mine Projects",
    "short_title": "Restriction on New Coal Mine Projects",
    "subject": "New Coal Mine Projects",
    "article_published": null,
    "intro": "Intesa Sanpaolo states this commitment in its Rules for Lending Operations in the Coal Sector, effective from July 2021. It is the project-level half of the bank's coal mining rules. The bank gives it its own name in the sentence.",
    "naive_reading": "it will not help pay for any new coal mine",
    "plain_language_note": "The plain version names the bank. The elision marks a footnote reference, and the footnote itself is quoted below.",
    "sources_intro": "One policy document states this commitment. Two passages from it are needed to see what it covers:",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "coal2021",
        "document_title": "Intesa Sanpaolo Rules for Lending Operations in the Coal Sector",
        "document_url": null,
        "synthesis_url": "https://watchtower.bank.green/institution/intesa_sanpaolo/document/8201/synthesis?run=262&commitment=2",
        "watchtower_document_id": 8201,
        "watchtower_institution": "intesa_sanpaolo",
        "synthesis_run": 262,
        "version_label": "July 2021",
        "published": "2021-07-31",
        "published_source": null,
        "published_confidence": null,
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "verbatim_check": {
          "document": "8201-intesa-sanpaolo-coal.md",
          "passages": 3,
          "found": 3,
          "missing": []
        }
      }
    ],
    "clauses": [
      {
        "index": 1,
        "role": "rule",
        "source_id": "coal2021",
        "title": "The promise",
        "intro": "This sentence sits directly under the lending ceiling. It covers financing raised for a named development rather than for a company.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will also not provide financial products and services … to projects aimed at the construction or expansion of new coal mines (namely, \"Greenfield Projects\") or the purchase of companies operating in the coal mining sector.",
        "plain_rendering": "Intesa Sanpaolo will also not provide financial products and services … to projects aimed at the construction or expansion of new coal mines (namely, \"Greenfield Projects\") or the purchase of companies operating in the coal mining sector.",
        "phrases": [
          {
            "id": "construction-expansion",
            "label": "construction or expansion of new coal mines",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              91,
              134
            ],
            "plain_range": [
              97,
              140
            ],
            "means": "This explains what the restriction covers: building a new coal mine, or making one bigger.",
            "lets_through": [
              "This wording turns on the word new. Expanding a mine that is already producing is not the construction or expansion of a new mine, and the sentence does not reach it."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "greenfield",
            "label": "Greenfield Projects",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              145,
              164
            ],
            "plain_range": [
              151,
              170
            ],
            "means": "The bank's own label for what it is excluding: a mine on a site that has not been mined before.",
            "lets_through": [
              "This wording lets through a project at an existing site, however much it adds. Reopening, deepening or extending a working mine is brownfield, not greenfield."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "exception",
        "source_id": "coal2021",
        "title": "When it may not apply",
        "intro": "A footnote to the same sentence keeps one category of financing outside it.",
        "location": {
          "distance": "nearby",
          "signposting": "weak",
          "signposting_note": "The only pointer is a footnote marker on the sentence; the rule itself gives no sign that agreed financing is treated differently."
        },
        "verbatim": "The foregoing is without prejudice to the contractual commitments already underway until their natural expiry",
        "plain_rendering": "The foregoing is without prejudice to the contractual commitments already underway until their natural expiry.",
        "phrases": [
          {
            "id": "contracts-underway",
            "label": "contractual commitments already underway",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "Contractual commitments already underway",
            "not_in_synthesis": false,
            "verbatim_range": [
              42,
              82
            ],
            "plain_range": [
              42,
              82
            ],
            "means": "This explains what the restriction does not touch: financing the bank has already agreed, which runs to the end of its term.",
            "lets_through": [
              "This wording lets through drawdowns under a facility signed before the rules. A long contract signed in 2021 can still be funding coal years later."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "thermal-coal",
      "greenfield",
      "brownfield",
      "project-finance",
      "capacity-expansion",
      "grandfathering"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 262,
      "document_id": 8201,
      "institution": "intesa_sanpaolo",
      "commitment_index": 2,
      "commitment_id": "0c4e9246-2cf9-5f69-bf59-0703ce6a439c",
      "url": "https://watchtower.bank.green/institution/intesa_sanpaolo/document/8201/synthesis?run=262&commitment=2",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        4443,
        4674
      ],
      "summary_text": "Intesa Sanpaolo excludes financial products and services dedicated to projects for the construction or expansion of new coal mines (greenfield projects), subject to existing contractual commitments.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "upstream",
          "activity_scope": "new"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": null,
          "certainty": "5"
        },
        "product": {
          "financing_type": "project",
          "capital_markets": null,
          "transaction_status": null
        }
      },
      "triggers": [],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Contractual commitments already underway are permitted until their natural expiry",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": null
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 4 fields corrected]\nCHANGES:\n- Added certainty objects to exceptions missing them to comply with schema requirements.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [],
    "general_clauses_page": null,
    "disagreements": [],
    "assessment": {
      "strength": "hollowed",
      "strength_derivation": {
        "rule": "spec v3.29 §4.1 — the gap between the naive reading and what it catches",
        "inputs_source": "Watchtower record",
        "record_score": "hollowed",
        "weakness": false,
        "commitment_specific_carve_outs": 1,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 2
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "text": "Intesa Sanpaolo will not finance projects to build or expand new coal mines. The bank gives the restriction its own name: greenfield projects.\n\nThat name is also the limit. A greenfield project is one on a site not mined before. Reopening a mine, deepening it or extending its life is brownfield work, and this sentence does not reach it.\n\nMost coal tonnage now comes from mines that already exist. The restriction points at the smallest part of the pipeline.\n\nA footnote takes more back. Financing already agreed runs to its natural expiry, so a facility signed before July 2021 can keep funding work under it.",
          "recommended": true,
          "recommended_because": "The bank's own word, greenfield, is doing the narrowing, and a reader has no reason to know that it excludes the expansion of existing mines."
        },
        {
          "angle": "who_it_catches",
          "text": "Who does this commitment stop, and when?\n\nIt stops financing raised for building a coal mine on a new site. That applies anywhere in the world, from July 2021 onwards.\n\nIt does not stop financing to enlarge a mine that is already producing. That is not a new mine.\n\nIt does not stop general lending to the company behind the mine.\n\nAnd it does not reach financing the bank agreed before the rules came in. Those contracts run to their natural expiry, however long that takes.",
          "recommended": false,
          "recommended_because": null
        },
        {
          "angle": "what_it_gets_right",
          "text": "This is a clean project-level restriction. There is no threshold, no scoring and no committee to clear. A greenfield coal mine does not get financed, wherever it is.\n\nThe bank also names the category itself, using its own term for it, so there is no argument about what was meant.\n\nIt covers the sector as the document defines it, which reaches exploration, feasibility studies and final design as well as construction.\n\nWhat it leaves out is the expansion of mines already in production, which is where most new coal tonnage now comes from. And financing agreed before the rules keeps running until it expires.",
          "recommended": false,
          "recommended_because": null
        }
      ],
      "verdict_selected": 0,
      "verdict_final": "Intesa Sanpaolo will not finance projects to build or expand new coal mines. The bank names the category itself: greenfield projects.\n\nThat name is also the limit. A greenfield project is one on a site not mined before. Reopening a mine, deepening it, or extending its life is brownfield work, and this sentence does not reach it.\n\nMost coal tonnage now comes from mines that already exist, so the restriction points at the smallest part of the pipeline.\n\nA footnote takes more back. Financing the bank had already agreed runs to its natural expiry, which means a facility signed before July 2021 can still be funding work under it.",
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green, the final verdict included, at Jurian's instruction on 2026-09-17. It still needs a human to read it and sign off: reviewed_by and reviewed_at are unset.",
      "what_needs_to_change": [
        {
          "title": "Cover expansion of existing coal mines",
          "content": "The restriction stops greenfield mines. Enlarging a working mine adds the same coal and is not covered."
        },
        {
          "title": "Put an end date on existing contracts",
          "content": "Agreed financing runs to its natural expiry. Without a backstop date, long contracts outlive the rule."
        }
      ],
      "what_needs_to_change_closing": "Until then, the coal that comes from enlarging today's mines is financed as before.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "New mines are genuinely blocked; reopening, deepening or extending one already producing is not new.",
      "how_it_compares": {
        "text": "General lending to the company behind the mine falls under a separate rule, which caps it rather than stopping it.",
        "links": [
          {
            "slug": "intesa-sanpaolo-coal-mining-general-purpose",
            "title": "Intesa Sanpaolo's Freeze on Coal Mining Financing"
          }
        ]
      }
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Intesa Sanpaolo commits not to finance projects that build or expand new coal mines. We have not yet reviewed what it financed against this commitment.",
    "headline_figure": {
      "display": null,
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-09-28",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 262, document 8201",
    "reading": "drafted"
  }
};
