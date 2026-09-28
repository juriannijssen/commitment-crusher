/* Commitment data — generated from commitments/commitment-intesa-sanpaolo-new-coal-power-projects.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "intesa-sanpaolo-new-coal-power-projects",
    "bank": "Intesa Sanpaolo",
    "commitment_number": 7,
    "category": "coal",
    "effective_date": null,
    "title": "Intesa Sanpaolo's Restriction on New Coal Power Projects",
    "short_title": "Restriction on New Coal Power Projects",
    "subject": "New Coal Power Projects",
    "article_published": null,
    "intro": "Intesa Sanpaolo states this commitment in its Rules for Lending Operations in the Coal Sector, effective from July 2021. It is the project-level rule for coal power. The document pulls the contractors in with it.",
    "naive_reading": "it will not help pay for any new coal power plant",
    "plain_language_note": "The plain version names the bank. The elision marks a footnote reference, and the footnote itself is quoted below.",
    "sources_intro": "One policy document states this commitment. Three passages from it are needed to see what it covers:",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "coal2021",
        "document_title": "Intesa Sanpaolo Rules for Lending Operations in the Coal Sector",
        "document_url": null,
        "synthesis_url": "https://watchtower.bank.green/institution/intesa_sanpaolo/document/8201/synthesis?run=262&commitment=7",
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
          "passages": 6,
          "found": 6,
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
        "intro": "This sentence covers financing raised for a named plant rather than for a company. It names three kinds of work.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide financial products and services … to projects aimed at the construction of new coal-fired power plants, the purchase or expansion of coal-fired power plants that are already in operation.",
        "plain_rendering": "Intesa Sanpaolo will not provide financial products and services … to projects aimed at the construction of new coal-fired power plants, the purchase or expansion of coal-fired power plants that are already in operation.",
        "phrases": [
          {
            "id": "to-projects",
            "label": "to projects",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              61,
              72
            ],
            "plain_range": [
              67,
              78
            ],
            "means": "This explains what financing the restriction covers: financing raised for a named plant.",
            "lets_through": [
              "This wording lets through general purpose lending to the company that owns the plant. The company borrows for itself, and can spend it on the plant."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "purchase-or-expansion",
            "label": "the purchase or expansion of coal-fired power plants that are already in operation",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              131,
              213
            ],
            "plain_range": [
              137,
              219
            ],
            "means": "This explains how far the restriction reaches: past new plants, to buying and enlarging the ones already running.",
            "lets_through": [
              "This wording lets through financing that keeps an existing plant running, such as maintenance or refurbishment that does not add capacity."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "scope",
        "source_id": "coal2021",
        "title": "What it covers",
        "intro": "The scope section pulls in the firms that build and run the plants, not just the owners.",
        "location": {
          "distance": "nearby",
          "signposting": "weak",
          "signposting_note": "The rule does not point at the scope section; only the definitions earlier in the document say that contractors are included."
        },
        "verbatim": "When dealing with projects, the scope of application also refers to the Engineering, Procurement and Construction (EPC) Contractors … and/or Operation and Maintenance (O&M) Contractors … with direct involvement in the above-mentioned activities.",
        "plain_rendering": "When dealing with projects, the scope of application also refers to the Engineering, Procurement and Construction (EPC) Contractors … and/or Operation and Maintenance (O&M) Contractors … with direct involvement in the above-mentioned activities.",
        "phrases": [
          {
            "id": "epc-contractors",
            "label": "Engineering, Procurement and Construction (EPC) Contractors",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              72,
              131
            ],
            "plain_range": [
              72,
              131
            ],
            "means": "This explains who else is inside the rule: the contractors that build the plant, and the ones that run and maintain it.",
            "lets_through": [
              "This wording reaches a contractor only where it is directly involved in the work named above. A supplier further down the chain is not covered."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 3,
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
      "coal-fired-power-generation",
      "project-finance",
      "capacity-expansion",
      "grandfathering",
      "advisory"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 262,
      "document_id": 8201,
      "institution": "intesa_sanpaolo",
      "commitment_index": 7,
      "commitment_id": "ca06e220-6b68-571c-98cb-94c4b6c84432",
      "url": "https://watchtower.bank.green/institution/intesa_sanpaolo/document/8201/synthesis?run=262&commitment=7",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        5449,
        5662
      ],
      "summary_text": "Intesa Sanpaolo excludes financial products and services for projects aimed at constructing new coal-fired power plants or purchasing/expanding existing operational plants (including EPC and O&M contractors), grandfathering ongoing contracts.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "downstream",
          "activity_scope": "new_and_existing"
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
          "angle": "what_it_gets_right",
          "text": "Intesa Sanpaolo will not finance a new coal plant, and it will not finance buying or enlarging one that is already running.\n\nThe document also reaches the firms around the plant. Contractors that build it, and contractors that run and maintain it, are inside the scope where they are directly involved.\n\nIt applies globally and took effect immediately, with no threshold to argue about.\n\nTwo limits remain. The rule covers financing raised for the plant, while the company that owns it borrows under a ceiling rather than a ban. And a footnote lets financing agreed before the rules run to its natural expiry.",
          "recommended": true,
          "recommended_because": "Almost every route into a coal plant is closed here, and saying so first is what makes the two remaining limits land."
        },
        {
          "angle": "fails_to_block",
          "text": "Intesa Sanpaolo will not finance projects to build, buy or expand coal power plants. The wording is wide, and the gaps are elsewhere.\n\nThe first is the borrower. This rule covers financing raised for a named plant. It does not reach the company that owns the plant.\n\nThe second is the footnote. Financing the bank had already agreed runs to its natural expiry, whatever it is funding.\n\nThe third is the edge of the contractor definition. A firm is inside the rule where it is directly involved in the work, which leaves the wider supply chain outside.",
          "recommended": false,
          "recommended_because": null
        },
        {
          "angle": "who_it_catches",
          "text": "Who does this commitment stop, and when?\n\nIt stops financing raised to build a new coal plant, and financing raised to buy or enlarge one already in operation. That has applied since July 2021, everywhere the group operates.\n\nIt also stops financing the contractors that build, run or maintain those plants, where they are directly involved in the work.\n\nIt does not stop the owner borrowing at company level.\n\nAnd it does not reach financing the bank agreed before the rules came in, which runs to its natural expiry.",
          "recommended": false,
          "recommended_because": null
        }
      ],
      "verdict_selected": 0,
      "verdict_final": "Intesa Sanpaolo will not finance a new coal plant, and it will not finance buying or enlarging one that is already running.\n\nThe document also reaches the firms around the plant. Contractors that build it, and contractors that run and maintain it, are inside the scope where they are directly involved in the work.\n\nIt applies globally, took effect immediately, and has no threshold to argue about.\n\nTwo limits remain. The rule covers financing raised for the plant, not general lending to the company that owns it. And a footnote lets financing agreed before the rules run to its natural expiry.",
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green, the final verdict included, at Jurian's instruction on 2026-09-17. It still needs a human to read it and sign off: reviewed_by and reviewed_at are unset.",
      "what_needs_to_change": [
        {
          "title": "Put an end date on existing contracts",
          "content": "Agreed financing runs to its natural expiry. Without a backstop date, long contracts outlive the rule."
        },
        {
          "title": "Cover lending to the owner",
          "content": "Refuse general purpose lending to companies building, buying or expanding coal plants, not only financing for the plant."
        }
      ],
      "what_needs_to_change_closing": "Until then, the plants are closed off and the companies behind them are not.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "It stops financing for coal plants themselves, contractors included, but not general lending to the company that owns them, and old contracts run on.",
      "how_it_compares": {
        "text": "Companies building or expanding coal plants face a separate rule. It caps their general purpose lending rather than banning it.",
        "links": [
          {
            "slug": "intesa-sanpaolo-coal-power-expansion",
            "title": "Intesa Sanpaolo's Restriction on Coal Power Expansion"
          }
        ]
      }
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Intesa Sanpaolo commits not to finance projects to build, buy or expand coal-fired power plants. We have not yet reviewed what it financed against this commitment.",
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
