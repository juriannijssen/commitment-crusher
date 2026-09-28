/* Commitment data — generated from commitments/commitment-intesa-sanpaolo-unconventional-15pc-revenues.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "intesa-sanpaolo-unconventional-15pc-revenues",
    "bank": "Intesa Sanpaolo",
    "commitment_number": 4,
    "category": "fracking",
    "effective_date": null,
    "title": "Intesa Sanpaolo's 15% Unconventional Revenue Threshold",
    "short_title": "15% Unconventional Revenue Threshold",
    "subject": "Unconventional Revenue Threshold",
    "article_published": null,
    "intro": "Intesa Sanpaolo states this commitment in its Rules on the Oil & Gas Sector, published in June 2024. It is the rule that reaches companies rather than sites. A single number decides who it applies to.",
    "naive_reading": "it will not lend to companies that produce unconventional oil and gas",
    "plain_language_note": "The plain version names the bank and turns the list item into a full sentence. The bank's own terms for the two financing types are kept.",
    "sources_intro": "One policy document states this commitment. Two passages from it are quoted here:",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "rules2024",
        "document_title": "Intesa Sanpaolo Rules on the Oil & Gas Sector",
        "document_url": null,
        "synthesis_url": "https://watchtower.bank.green/institution/intesa_sanpaolo/document/8195/synthesis?run=261&commitment=4",
        "watchtower_document_id": 8195,
        "watchtower_institution": "intesa_sanpaolo",
        "synthesis_run": 261,
        "version_label": "June 2024",
        "published": "2024-06-30",
        "published_source": null,
        "published_confidence": null,
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "verbatim_check": {
          "document": "8195-intesa-sanpaolo-oil-gas.md",
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
        "source_id": "rules2024",
        "title": "The promise",
        "intro": "This is where Intesa Sanpaolo makes the commitment.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "With reference to this activity, the Group commits to: … not finance counterparties that derive more than 15% of their production revenues from unconventional resources (targeted financing and generic financing)",
        "plain_rendering": "Intesa Sanpaolo will not finance counterparties that derive more than 15% of their production revenues from unconventional resources (targeted financing and generic financing).",
        "phrases": [
          {
            "id": "fifteen-percent",
            "label": "more than 15% of their production revenues",
            "type": "unverifiable_metric",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              96,
              138
            ],
            "plain_range": [
              60,
              102
            ],
            "means": "This explains who the restriction applies to: a company earning more than 15% of its production revenues from unconventional oil and gas. The share is measured against production revenues, not everything the company earns.",
            "lets_through": [
              "This wording lets through every company that stays under the threshold. A large producer with a small unconventional business is below 15%, however much shale oil or tar sands it produces.",
              "It also leaves the reader unable to check the figure. Production revenues are not a line most companies publish, and the document does not say who calculates the share or how often."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "targeted-and-generic",
            "label": "(targeted financing and generic financing)",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              169,
              211
            ],
            "plain_range": [
              133,
              175
            ],
            "means": "This explains what financing this commitment covers: both financing raised for a named purpose and general corporate financing, a loan to the company as a whole.",
            "lets_through": [
              "This wording lets through the capital markets side. Arranging or underwriting a bond is not financing the bank provides, and Watchtower's record marks capital markets as outside this commitment."
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
        "source_id": "rules2024",
        "title": "What it allows",
        "intro": "Two sections later, under sustainable finance, the abstract names one kind of financing the rules never stop.",
        "location": {
          "distance": "later_in_document",
          "signposting": "none",
          "signposting_note": "The restriction gives no sign that a later section reaches back into it, and the sustainable finance section does not name the restrictions it overrides."
        },
        "verbatim": "Consequently, financing aligned with the European taxonomy and classified as sustainable from an environmental point of view is always permitted, in line with internal classification rules.",
        "plain_rendering": "So financing aligned with the European taxonomy and classified as sustainable from an environmental point of view is always permitted, in line with internal classification rules.",
        "phrases": [
          {
            "id": "always-permitted",
            "label": "always permitted",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "is always permitted",
            "not_in_synthesis": false,
            "verbatim_range": [
              128,
              144
            ],
            "plain_range": [
              117,
              133
            ],
            "means": "The words \"always permitted\" put this financing outside every restriction in the document, including this commitment.",
            "lets_through": [
              "This wording lets through financing to a company above the threshold, where the financing itself is classified as environmentally sustainable."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "corporate-finance",
      "revenue-threshold",
      "unconventional",
      "shale",
      "oil-sands",
      "capital-markets"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 261,
      "document_id": 8195,
      "institution": "intesa_sanpaolo",
      "commitment_index": 4,
      "commitment_id": "112f8dd7-68ff-56c9-8661-a1a0b69b7460",
      "url": "https://watchtower.bank.green/institution/intesa_sanpaolo/document/8195/synthesis?run=261&commitment=4",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        13905,
        14070
      ],
      "summary_text": "Intesa Sanpaolo excludes targeted and generic corporate financing for counterparties deriving more than 15% of their production revenues from unconventional oil and gas resources.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "shale",
            "oil_sands",
            "coalbed methane"
          ],
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
          "transaction_status": "new_and_existing"
        }
      },
      "triggers": [
        {
          "metric": "revenue_share",
          "inequality": ">",
          "value": 15,
          "definition": "percentage of production revenues derived from unconventional resources"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Financing aligned with the European taxonomy and classified as environmentally sustainable under internal classification rules is always permitted",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": null
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 3 fields corrected]\nCHANGES:\n- Intesa Sanpaolo commits to phase out all outstanding exposures subject to unconventional resources exclusions (section 3.2.2) by 2025.: Changed activity_scope, relationship_status, and transaction_status to 'new_and_existing' — schema dictates using 'new_and_existing' for phase-out commitments when the policy does not explicitly distinguish between new and existing stages.",
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
        "commitment_specific_carve_outs": 1,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "This is the rule that reaches whole companies, so the threshold is what decides whether it means anything, and it is set where the largest producers sit below it.",
          "text": "This rule reaches the company, not just the project.\n\nThe threshold is what decides who it catches. A company must earn more than 15% of its production revenues from unconventional oil and gas. The largest producers are diversified. A company can produce a great deal of shale oil and stay well under 15%.\n\nThe share is also hard to check. Production revenues are not a figure most companies publish. The document does not say who works the number out, or how often.\n\nOne financing route is untouched. Arranging and underwriting bonds is not lending, so capital markets work falls outside this commitment."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Who does this commitment stop, and when?\n\nIt stops lending to a company earning more than 15% of its production revenues from shale, tar sands or coalbed methane. That covers loans for a named purpose and loans to the company as a whole.\n\nIt catches specialists. A company built around fracking sits above the threshold, and stays there.\n\nIt misses the diversified majors. A company with conventional fields and a shale business is usually below 15%, so nothing here applies to it.\n\nIt does not stop the bank arranging that company's bonds.\n\nAnd it does not stop financing the bank has classified as environmentally sustainable."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "This rule reaches the borrower rather than the project. That matters, because most oil and gas financing is lending to a company, not to a named site.\n\nIntesa Sanpaolo says so in its own words: targeted financing and generic financing. A company above the threshold cannot come back for a general loan instead.\n\nIt applies to existing clients as well as new ones, and it applies everywhere the group operates.\n\nThe weakness is where the line sits. At more than 15% of production revenues, the rule catches specialists and leaves diversified producers alone. The share is also one the reader cannot verify."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": "This rule reaches the company rather than the project. It covers financing raised for a named purpose and loans to the company as a whole.\n\nThe threshold decides who it catches. A company must earn more than 15% of its production revenues from unconventional oil and gas. Diversified producers sit below that line, however much shale oil they pump. It catches the specialists.\n\nThe share is also hard to check. Production revenues are not a figure most companies publish, and the rules do not say who calculates it.\n\nOne route stays open. Arranging and underwriting bonds is not lending, and the record puts capital markets outside this commitment.",
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green, the final verdict included, at Jurian's instruction on 2026-09-17. It still needs a human to read it and sign off: reviewed_by and reviewed_at are unset.",
      "what_needs_to_change": [
        {
          "title": "Lower the threshold and publish the working",
          "content": "At more than 15% of production revenues, a large producer with a shale business stays outside. The bank does not say how it calculates the share."
        },
        {
          "title": "Cover bond arranging and underwriting",
          "content": "The restriction reaches lending. A company above the threshold can still raise financing through bonds the bank helps arrange."
        }
      ],
      "what_needs_to_change_closing": "Until then, the rule catches the companies built on unconventional oil and gas, and few others.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "A 15% line on a figure companies do not publish, with capital markets outside it and an environmental-classification exception on top."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Intesa Sanpaolo commits not to finance companies earning more than 15% of their production revenues from unconventional oil and gas. We have not yet reviewed what it financed against this commitment.",
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
    "source": "Watchtower synthesis run 261, document 8195",
    "reading": "drafted"
  }
};
