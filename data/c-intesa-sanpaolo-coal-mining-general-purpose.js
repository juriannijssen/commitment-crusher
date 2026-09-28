/* Commitment data — generated from commitments/commitment-intesa-sanpaolo-coal-mining-general-purpose.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "intesa-sanpaolo-coal-mining-general-purpose",
    "bank": "Intesa Sanpaolo",
    "commitment_number": 1,
    "category": "coal",
    "effective_date": null,
    "title": "Intesa Sanpaolo's Freeze on Coal Mining Financing",
    "short_title": "Freeze on Coal Mining Financing",
    "subject": "Coal Mining Financing",
    "article_published": null,
    "intro": "Intesa Sanpaolo states this commitment in its Rules for Lending Operations in the Coal Sector, effective from July 2021. It is the first of the rules for coal mining. It sets a ceiling on one kind of lending rather than ending it.",
    "naive_reading": "it will stop lending to coal mining companies",
    "plain_language_note": "The plain version names the bank and unpicks the sentence's two halves. The bank's own terms are kept.",
    "sources_intro": "One policy document states this commitment. Two passages from it are needed to see what it covers:",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "coal2021",
        "document_title": "Intesa Sanpaolo Rules for Lending Operations in the Coal Sector",
        "document_url": null,
        "synthesis_url": "https://watchtower.bank.green/institution/intesa_sanpaolo/document/8201/synthesis?run=262&commitment=1",
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
          "passages": 2,
          "found": 2,
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
        "intro": "It fixes a ceiling for one kind of lending and says what happens to the rest.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "From the date of issue of these Rules, the Group will not increase its exposure relating to general purpose financial products and services towards companies belonging to the coal mining sector and will manage the current exposures in line with the phase-out as indicated below.",
        "plain_rendering": "From the date these Rules were issued, Intesa Sanpaolo will not increase its exposure relating to general purpose financial products and services towards companies belonging to the coal mining sector, and will manage the current exposures in line with the phase-out set out below.",
        "phrases": [
          {
            "id": "not-increase",
            "label": "will not increase its exposure",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              49,
              79
            ],
            "plain_range": [
              55,
              85
            ],
            "means": "This explains what the commitment does: it holds lending at the level it had reached, rather than reducing it.",
            "lets_through": [
              "This wording lets through a replacement loan of the same size when an old one matures. A ceiling is not a cut, and the sentence sets no date by which the level must fall."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "general-purpose",
            "label": "general purpose financial products and services",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              92,
              139
            ],
            "plain_range": [
              98,
              145
            ],
            "means": "This explains what financing the ceiling covers: lending where the bank does not know what the borrowing will be spent on.",
            "lets_through": [
              "This wording lets through lending with a stated purpose. The bank's own definitions put project finance, project related corporate finance and acquisition finance outside the term."
            ],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "manage-current",
            "label": "manage the current exposures",
            "type": "undefined_term",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              203,
              231
            ],
            "plain_range": [
              210,
              238
            ],
            "means": "This explains what happens to lending already on the books: the bank will manage it, in line with the phase-out set out later in the document.",
            "lets_through": [
              "This wording sets no schedule of its own. Everything that decides when the exposure actually falls sits in the phase-out sentence, not here."
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
        "intro": "Earlier in the document, the bank defines the two kinds of lending it is talking about.",
        "location": {
          "distance": "nearby",
          "signposting": "weak",
          "signposting_note": "The rule uses the defined term without pointing back to the definitions section that sets it."
        },
        "verbatim": "The Rules apply to all forms of financing, both to the so-called \"general purpose\" loans, i.e. with an unknown use of the disbursements made available, and to defined use of proceeds loans (such as project finance, project related corporate finance, acquisition finance).",
        "plain_rendering": "The Rules apply to all forms of financing: both \"general purpose\" loans, where the use of the disbursements is unknown, and defined use of proceeds loans (such as project finance, project related corporate finance, acquisition finance).",
        "phrases": [
          {
            "id": "use-of-proceeds",
            "label": "defined use of proceeds loans",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              159,
              188
            ],
            "plain_range": [
              124,
              153
            ],
            "means": "This explains what sits outside the ceiling: lending raised for a stated purpose, which the bank lists as project finance, project related corporate finance and acquisition finance.",
            "lets_through": [
              "This wording means a coal mining company can still borrow for a named purpose without touching the ceiling. Separate rules cover new mines and acquisitions, but nothing else on that list."
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
      "corporate-finance",
      "project-finance",
      "exposure",
      "phase-out",
      "new-financing"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 262,
      "document_id": 8201,
      "institution": "intesa_sanpaolo",
      "commitment_index": 1,
      "commitment_id": "475118ef-b7b5-508c-9f2c-25c637a3c16e",
      "url": "https://watchtower.bank.green/institution/intesa_sanpaolo/document/8201/synthesis?run=262&commitment=1",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        4163,
        4441
      ],
      "summary_text": "Intesa Sanpaolo commits not to increase general purpose financing exposure to companies active in the coal mining sector, managing existing exposures toward phase-out.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": "new_and_existing",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": false,
          "transaction_status": "new"
        }
      },
      "triggers": [],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 4 fields corrected]\nCHANGES:\n- Added certainty objects to exceptions missing them to comply with schema requirements.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [],
    "general_clauses_page": null,
    "disagreements": [],
    "assessment": {
      "strength": "crushed",
      "strength_derivation": {
        "rule": "spec v3.29 §4.1 — the gap between the naive reading and what it catches",
        "inputs_source": "Watchtower record",
        "record_score": "hollowed",
        "weakness": false,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": false,
        "new_business_only": true,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "text": "Intesa Sanpaolo will not increase its general purpose lending to coal mining companies. Two words carry most of the weight.\n\nThe first is increase. The rule is a ceiling, not a cut. A loan that matures can be replaced by another of the same size. The level is held, not reduced.\n\nThe second is general purpose. The bank's own definitions limit that to lending where the use of the borrowing is unknown. Lending with a stated purpose sits outside this rule.\n\nWhat happens to the lending already there is left to a single word: manage. The schedule is elsewhere, in the phase-out sentence, and that has its own limits.\n\nSo from 2021 the door was held open at its existing width.",
          "recommended": true,
          "recommended_because": "A reader takes a coal mining rule as a stop, and the two words that make it a ceiling instead are the first thing to correct."
        },
        {
          "angle": "who_it_catches",
          "text": "Who does this commitment stop, and when?\n\nIt stops a coal mining company asking Intesa Sanpaolo for more general purpose lending than it already has. That applies from July 2021, everywhere the group operates.\n\nIt does not stop the same company refinancing what it has. A ceiling holds the level, and a replacement loan does not raise it.\n\nIt does not stop lending for a stated purpose. The bank puts project finance, project related corporate finance and acquisition finance in a different category.\n\nAnd it does not set a date for the existing lending to end. That is left to the phase-out rule further down the page.",
          "recommended": false,
          "recommended_because": null
        },
        {
          "angle": "what_it_gets_right",
          "text": "The rule reaches whole companies, not projects. That matters, because a coal mining company borrows mostly at group level.\n\nIt also applies to the sector as the document defines it, which includes exploration, development, processing and waste, not just the digging.\n\nAnd it starts immediately. There is no phase-in, no review step and no committee to clear before it applies.\n\nWhat it does not do is reduce anything. The bank holds its general purpose lending at the level it had reached and manages the rest towards a phase-out described elsewhere. Lending with a stated purpose is outside the sentence altogether.",
          "recommended": false,
          "recommended_because": null
        }
      ],
      "verdict_selected": 0,
      "verdict_final": "Intesa Sanpaolo will not increase its general purpose lending to coal mining companies. Two words carry most of the weight.\n\nThe first is increase. This is a ceiling, not a cut. A loan that matures can be replaced by one of the same size.\n\nThe second is general purpose. The bank's own definitions limit that to lending where the use of the borrowing is unknown. Lending raised for a stated purpose sits outside this rule.\n\nWhat happens to the lending already on the books is left to one word: manage. The schedule lives in the phase-out sentence, which has its own carve-out.\n\nFrom July 2021, the door was held open at the width it had already reached.",
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green, the final verdict included, at Jurian's instruction on 2026-09-17. It still needs a human to read it and sign off: reviewed_by and reviewed_at are unset.",
      "what_needs_to_change": [
        {
          "title": "Turn the ceiling into a reduction",
          "content": "The rule holds general purpose lending at its existing level. A published annual cut would make it fall."
        },
        {
          "title": "Cover lending with a stated purpose",
          "content": "Only general purpose lending is capped. A coal mining company can still borrow for a named purpose outside the two project rules."
        }
      ],
      "what_needs_to_change_closing": "Until then, a coal mining company keeps the lending it already has.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "A ceiling, not a cut: a maturing loan can be replaced at the same size, and lending with a stated purpose does not touch it."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Intesa Sanpaolo commits not to increase its general purpose lending to coal mining companies. We have not yet reviewed what it financed against this commitment.",
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
