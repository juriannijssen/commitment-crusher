/* General-clauses article — generated from commitments/general-clauses-santander.md
   by prototype/build/render_commitments.py. Do not edit by hand. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "santander-general-clauses",
    "page_kind": "general_clauses",
    "bank": "Santander",
    "commitment_number": null,
    "category": "general",
    "effective_date": null,
    "title": "The clauses that apply to every Santander commitment",
    "short_title": "The clauses that apply to every commitment",
    "article_published": null,
    "intro": "Santander's policy lists the activities it restricts in the body of the document. Three provisions that decide how those restrictions land are printed underneath, as footnotes. None of the three is in the wording of any single commitment, and each reaches all of them.",
    "naive_reading": null,
    "plain_language_note": null,
    "sources_intro": "One policy document states all three, in three footnotes on the same pages as the restrictions.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "esg",
        "document_title": "Santander Environmental and Social Risk Management Policy",
        "document_url": "https://www.santander.com/content/dam/santander-com/en/contenido-paginas/nuestro-compromiso/pol%C3%ADticas/do-environmental-social-and-climate-change-risk-policy-en.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149",
        "watchtower_document_id": 25536,
        "watchtower_institution": "santander",
        "synthesis_run": 149,
        "version_label": "June 2025",
        "published": "2025-07-28",
        "published_source": null,
        "published_confidence": null,
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file"
      }
    ],
    "clauses": [
      {
        "index": 1,
        "role": "definition",
        "source_id": "esg",
        "title": "Which company is restricted",
        "intro": "The policy restricts what it calls clients. This footnote, under the list of restricted industries, says which company that is.",
        "location": {
          "distance": "elsewhere_in_document",
          "signposting": "none",
          "signposting_note": "FOOTNOTE 1"
        },
        "verbatim": "Defining clients as corporate entities (last parent company) hence not including funds. In the case of multi-industry conglomerates with independent business entities across different industries, the Policy will apply at subsidiary level. Should a subsidiary be prohibited, Santander might still provide products and services to the parent company (if they are unrelated to the restricted entity) and/or to other subsidiaries within the conglomerate.",
        "plain_rendering": "A client is a corporate entity — the last parent company — hence not including funds. For a conglomerate with separate businesses in different industries, the Policy will apply at subsidiary level. Where one subsidiary is prohibited, Santander may still serve the parent company and the other subsidiaries.",
        "phrases": [
          {
            "id": "apply-at-subsidiary-level",
            "label": "the Policy will apply at subsidiary level",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              196,
              237
            ],
            "plain_range": [
              155,
              196
            ],
            "means": "A restriction lands on one company inside the group. The rest of the group is untouched by it.",
            "lets_through": [
              "Financing the parent of a prohibited subsidiary, where it is unrelated to that subsidiary.",
              "Financing every other subsidiary in the same conglomerate."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "not-including-funds",
            "label": "hence not including funds",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              61,
              86
            ],
            "plain_range": [
              59,
              84
            ],
            "means": "The restrictions are written about clients, and a fund is not one.",
            "lets_through": [
              "Exposure to a restricted activity held through a fund rather than lent to a company."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "condition",
        "source_id": "esg",
        "title": "Whether anyone reviews the case",
        "intro": "Applying a restriction means looking at the client or the transaction in front of you. This footnote says that parts of the bank will not.",
        "location": {
          "distance": "elsewhere_in_document",
          "signposting": "none",
          "signposting_note": "FOOTNOTE 6"
        },
        "verbatim": "Potentially, some businesses of the Group may have operational limitations to carry out an individualized review of the operations/clients/underlying subjects to this policy, for which periodic reviews of the availability of internal data or provided by external suppliers will be carried out, by the responsible functions of the portfolios, to comply with the criteria of this policy.",
        "plain_rendering": "Some businesses in the group may have operational limitations to carry out an individualized review of each operation or client. Those businesses instead run periodic reviews of internal data, or of data from outside suppliers.",
        "phrases": [
          {
            "id": "operational-limitations",
            "label": "operational limitations to carry out an individualized review",
            "type": "escape_hatch",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              51,
              112
            ],
            "plain_range": [
              38,
              99
            ],
            "means": "The footnote applies to businesses run mostly on set lists of investments or automatic methods. In those, nobody assesses the case itself.",
            "lets_through": [
              "A restricted company inside a portfolio that is put together automatically.",
              "A breach that surfaces only at the next periodic data review, and only if the data carries it."
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
        "source_id": "esg",
        "title": "Where the law requires a review instead",
        "intro": "The last footnote sets out what happens where a law does not let the bank refuse.",
        "location": {
          "distance": "elsewhere_in_document",
          "signposting": "none",
          "signposting_note": "FOOTNOTE 7"
        },
        "verbatim": "To the extent required by applicable law, customers and transactions involving activities enumerated in this section will be subject to an enhanced due diligence process to determine the unique risks presented prior to decisioning.",
        "plain_rendering": "Where applicable law requires it, customers and transactions in the activities listed in this section go through an enhanced due diligence process to identify the risks, before a decision is taken.",
        "phrases": [
          {
            "id": "enhanced-due-diligence-process",
            "label": "an enhanced due diligence process",
            "type": "escape_hatch",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              136,
              169
            ],
            "plain_range": [
              113,
              146
            ],
            "means": "The restriction becomes a review. The customer is assessed rather than refused, and the policy does not say what the assessment must conclude.",
            "lets_through": [
              "Financing a restricted activity in a place whose law bars refusing a customer on these grounds — the change log names Florida's HB3 Act."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": null,
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [],
    "disagreements": [],
    "assessment": {
      "strength": null,
      "verdict_final": "All three of these sit in footnote type, under the lists of restricted activities they qualify.\n\nThe first decides who is restricted. For a conglomerate the policy applies at subsidiary level, so prohibiting one subsidiary leaves the parent and every other subsidiary available. Funds are not clients at all.\n\nThe second decides whether anyone looks. Parts of the group run on set lists of investments or automatic methods, and those parts are not expected to review the case in front of them.\n\nThe third turns a restriction into a review. Where a law requires it, a restricted customer goes through enhanced due diligence before a decision, rather than being refused. The change log names Florida's HB3 Act as the reason.\n\nA footnote is not a lesser rule. These three decide which company is measured, whether the measurement happens, and what the answer obliges the bank to do.",
      "verdict_options": [],
      "verdict_selected": null,
      "what_needs_to_change": []
    }
  },
  "evidence": {
    "status": "not_applicable",
    "teaser": null,
    "headline_figure": {
      "display": null,
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-09-28",
    "spec": "3.13",
    "source": "editorial/general-clauses-25536.json"
  }
};
