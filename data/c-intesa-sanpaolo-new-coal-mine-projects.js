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
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "A coal mine on a new site is blocked. Growing a mine that already produces is not new, and financing agreed before July 2021 runs on.",
      "how_it_compares": {
        "text": "General lending to the company behind the mine falls under a separate rule, which caps it rather than stopping it.",
        "links": [
          {
            "slug": "intesa-sanpaolo-coal-mining-general-purpose",
            "title": "Intesa Sanpaolo's Freeze on Coal Mining Financing"
          }
        ]
      },
      "actual_reading": "it will not finance building a coal mine on a site never mined before, but it can finance enlarging, deepening or reopening mines that already exist",
      "gaps": [
        {
          "title": "Growing an existing mine",
          "phrase_refs": [
            "greenfield",
            "construction-expansion"
          ],
          "text": "The bank calls what it excludes “Greenfield Projects”: mines on sites not mined before. Extending, deepening or reopening a mine that exists is not covered, however much coal it adds."
        },
        {
          "title": "Deals agreed before the rules",
          "phrase_refs": [
            "contracts-underway"
          ],
          "text": "Financing agreed before the rules took effect runs until its agreed end date. A facility signed then can still pay for mine work years later."
        }
      ],
      "in_practice": "Take a company planning a coal mine on land that has never been mined. It asks Intesa Sanpaolo for a loan for that mine. The bank will not provide it, nor any other financial product or service for it.\n\nNow take a company that runs a mine and wants to double its output. It plans to extend the mine into the next stretch of the same coal seam. That is an expansion of an existing mine, not a new mine. The bank calls new mines “Greenfield Projects”, and this is not one. So the commitment does not apply, even though the extra coal is the same.\n\nReopening a closed mine works the same way. So does extending a mine's life by digging deeper. The site has been mined before.\n\nThe footnote leaves one more route. Financing agreed before the rules took effect in July 2021 runs until its agreed end date. Take a facility, an amount a company can draw on when it needs it. If it was signed before then, it can still pay for mine work.\n\nThe commitment is also about financing raised for a mine, not loans to the company. A general loan to the company as a whole is not financing for a project, so this commitment does not reach it.",
      "gets_right": "A coal mine on a new site gets no financing from the bank. There is no size test or revenue test to argue over."
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
    "built": "2026-09-29",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 262, document 8201",
    "reading": "drafted"
  }
};
