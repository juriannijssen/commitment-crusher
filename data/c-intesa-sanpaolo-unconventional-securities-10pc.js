/* Commitment data — generated from commitments/commitment-intesa-sanpaolo-unconventional-securities-10pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "intesa-sanpaolo-unconventional-securities-10pc",
    "bank": "Intesa Sanpaolo",
    "commitment_number": 5,
    "category": "fracking",
    "effective_date": null,
    "title": "Intesa Sanpaolo's 10% Threshold on Holding Securities",
    "short_title": "10% Threshold on Holding Securities",
    "subject": "Unconventional Oil & Gas Securities",
    "article_published": null,
    "intro": "Intesa Sanpaolo states this commitment in its Rules on the Oil & Gas Sector, published in June 2024. It is the rule for what the bank holds rather than what it lends. The threshold here is lower than the one for lending.",
    "naive_reading": "it will not invest in companies that produce unconventional oil and gas",
    "plain_language_note": "The plain version names the bank, drops the footnote marker and turns the list item into a full sentence.",
    "sources_intro": "One policy document states this commitment. Two passages from it are needed to see what it covers:",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "rules2024",
        "document_title": "Intesa Sanpaolo Rules on the Oil & Gas Sector",
        "document_url": null,
        "synthesis_url": "https://watchtower.bank.green/institution/intesa_sanpaolo/document/8195/synthesis?run=261&commitment=5",
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
        "intro": "Intesa Sanpaolo will not hold debt or equity securities of companies earning more than 10% of production revenues from unconventional resources. It covers the bank's own portfolios.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "With reference to this activity, the Group commits to: … not hold debt and equity securities of counterparties that derive more than 10% of their production revenues from unconventional resources in the banking book and trading book",
        "plain_rendering": "Intesa Sanpaolo will not hold debt and equity securities of counterparties that derive more than 10% of their production revenues from unconventional resources, in the banking book and the trading book.",
        "phrases": [
          {
            "id": "hold-securities",
            "label": "hold debt and equity securities",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              61,
              92
            ],
            "plain_range": [
              25,
              56
            ],
            "means": "This explains what the restriction covers: bonds and shares the bank holds in its own portfolios.",
            "lets_through": [
              "This wording lets through the same securities when the bank arranges them for other people. Underwriting a bond and selling it on is not holding it."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "ten-percent",
            "label": "more than 10% of their production revenues",
            "type": "unverifiable_metric",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              123,
              165
            ],
            "plain_range": [
              87,
              129
            ],
            "means": "This explains who the restriction applies to: a company earning more than 10% of its production revenues from unconventional oil and gas.",
            "lets_through": [
              "This wording lets through every company below the line. A diversified producer with a shale business usually earns less than 10% of its production revenues from it.",
              "It also leaves the figure unverifiable. Production revenues are not a line most companies publish, and the document does not say who calculates the share."
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
        "source_id": "rules2024",
        "title": "Where it stops",
        "intro": "A footnote narrows what the rule covers in the trading book.",
        "location": {
          "distance": "nearby",
          "signposting": "weak",
          "signposting_note": "The only pointer is a footnote marker after the words trading book; the rule itself gives no sign that one of its two portfolios is treated differently."
        },
        "verbatim": "As regards the trading book portfolio, the scope of application is limited to proprietary investments",
        "plain_rendering": "For the trading book portfolio, the scope of application is limited to proprietary investments.",
        "phrases": [
          {
            "id": "proprietary-only",
            "label": "limited to proprietary investments",
            "type": "narrowing_qualifier",
            "source": "watchtower_exception",
            "watchtower_ref": "limited to proprietary investments",
            "not_in_synthesis": false,
            "verbatim_range": [
              67,
              101
            ],
            "plain_range": [
              60,
              94
            ],
            "means": "This explains how far the trading book is covered: only what the bank buys and holds for itself.",
            "lets_through": [
              "This wording lets through securities the bank holds in the trading book for a client or to make a market. In that portfolio, only the bank's own positions are covered."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "capital-markets",
      "bond-underwriting",
      "market-making",
      "revenue-threshold",
      "unconventional",
      "exposure"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 261,
      "document_id": 8195,
      "institution": "intesa_sanpaolo",
      "commitment_index": 5,
      "commitment_id": "2f21847f-9945-551b-85d5-f59eecdee4cc",
      "url": "https://watchtower.bank.green/institution/intesa_sanpaolo/document/8195/synthesis?run=261&commitment=5",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        14067,
        14275
      ],
      "summary_text": "Intesa Sanpaolo restricts holding debt and equity securities in banking and trading books for counterparties deriving more than 10% of production revenues from unconventional resources (limited to proprietary investments for trading book).",
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
          "capital_markets": true,
          "transaction_status": "new_and_existing"
        }
      },
      "triggers": [
        {
          "metric": "revenue_share",
          "inequality": ">",
          "value": 10,
          "definition": "percentage of production revenues derived from unconventional resources"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "For trading book portfolios, the restriction is limited to proprietary investments",
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
    "disagreements": [
      {
        "field": "triggers",
        "severity": "inconsistency",
        "watchtower": "The record's 10% threshold is supported by a quotation of the 15% sentence.",
        "bank_green": "The document sets 10% for holding securities, in the sentence after the 15% one. The threshold value is right; the quotation points at the wrong sentence.",
        "action": "Repoint the threshold quotation at the securities sentence."
      },
      {
        "field": "commitments",
        "severity": "omission",
        "watchtower": "The record carries no commitment for the asset management rule in section 3.2.1.",
        "bank_green": "The section before this one commits the group's asset managers not to support counterparties deriving more than 10% of their revenues from unconventional resources, under their own policies.",
        "action": "Raise it with Watchtower as a missing commitment. It is not read on this page."
      }
    ],
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
          "recommended_because": "The threshold is lower than the lending rule's, which reads as the stricter promise, so the reader needs to see how much narrower the thing being restricted actually is.",
          "text": "This rule is about what Intesa Sanpaolo owns, not what it lends. It stops the bank holding bonds and shares in companies above the line.\n\nThe line is more than 10% of production revenues from unconventional oil and gas. That is lower than the 15% used for lending. It still leaves diversified producers outside, and the share is one a reader cannot check.\n\nHolding is also a narrow act. The bank can arrange and underwrite the same bonds for other investors without holding them.\n\nIn the trading book, a footnote cuts the restriction back to the bank's own positions. Securities held for clients or to make a market are not covered."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Who does this commitment stop, and when?\n\nIt stops the bank buying or keeping bonds and shares in certain companies. Those are companies earning more than 10% of their production revenues from unconventional oil and gas.\n\nIt covers the banking book in full. In the trading book it covers only the bank's own positions.\n\nIt does not stop the bank arranging those securities for other investors.\n\nIt does not reach companies below the threshold, which is where most large producers sit.\n\nAnd it does not stop lending."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "The bank set a lower bar for its own investments than for its lending. More than 10% of production revenues, against more than 15% for loans. That order makes sense: it is easier to sell a bond than to end a lending relationship.\n\nThe rule covers both debt and equity, and it names both the banking book and the trading book.\n\nIts limits are in the verbs. Holding is not arranging, so the bank can still bring these securities to market. And in the trading book only the bank's own positions count, which a footnote establishes rather than the rule itself."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": "This rule is about what Intesa Sanpaolo owns, not what it lends. It stops the bank holding bonds and shares in companies above the line.\n\nThe line is more than 10% of production revenues from unconventional oil and gas. That is stricter than the 15% used for lending, and the order makes sense. Selling a bond is easier than ending a lending relationship.\n\nHolding is a narrow act, though. The bank can still arrange and underwrite the same bonds for other investors.\n\nAnd in the trading book, a footnote cuts the rule back to the bank's own positions. Securities held for clients, or to make a market, are not covered.",
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green, the final verdict included, at Jurian's instruction on 2026-09-17. It still needs a human to read it and sign off: reviewed_by and reviewed_at are unset.",
      "what_needs_to_change": [
        {
          "title": "Cover securities the bank arranges for others",
          "content": "The restriction stops the bank holding these bonds and shares. It does not stop the bank selling them to other investors."
        },
        {
          "title": "Bring the trading book fully into scope",
          "content": "A footnote limits the trading book to the bank's own positions. Client and market-making holdings sit outside the rule."
        }
      ],
      "what_needs_to_change_closing": "Until then, the bank can keep bringing these companies' securities to market without holding any itself.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "It covers the bank's own book only: the same securities arranged for others, or held to make a market, are outside.",
      "how_it_compares": {
        "text": "Lending falls under a separate rule with a higher threshold: 15% of production revenues.",
        "links": [
          {
            "slug": "intesa-sanpaolo-unconventional-15pc-revenues",
            "title": "Intesa Sanpaolo's 15% Unconventional Revenue Threshold"
          }
        ]
      }
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Intesa Sanpaolo commits not to hold bonds or shares in companies earning more than 10% of their production revenues from unconventional oil and gas. We have not yet reviewed what it held against this commitment.",
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
