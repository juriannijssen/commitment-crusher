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
    "plain_language_note": "The plain version names the bank, drops the footnote marker, and turns the list item into a full sentence.",
    "sources_intro": "This commitment comes from a single policy document. We quote two passages from it below, because both are needed to see what it covers:",
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
        "intro": "Intesa Sanpaolo will not hold debt or equity securities of companies earning more than 10% of production revenues from unconventional resources. This commitment covers the bank's own portfolios.",
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
              "It also leaves the figure impossible to check. Production revenues are not a line most companies publish, and the document does not say who calculates the share."
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
        "intro": "A footnote narrows what this commitment covers in the trading book.",
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
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "It covers only bonds and shares the bank keeps for itself, in companies above a 10% threshold most large producers stay under. Selling the same bonds to others is not covered.",
      "actual_reading": "it will not keep, as its own investment, bonds or shares of companies earning more than 10% of their production revenues from unconventional oil and gas",
      "gaps": [
        {
          "title": "Selling bonds on is not holding",
          "phrase_refs": [
            "hold-securities"
          ],
          "text": "This commitment stops the bank from holding the bonds and shares. But it can still underwrite them: buy a company's new bonds and sell them on to investors."
        },
        {
          "title": "Large producers stay under 10%",
          "phrase_refs": [
            "ten-percent"
          ],
          "text": "A large producer with a small shale business usually earns less than 10% of its production revenues from it. The share is rarely published, and the document does not say who works it out."
        },
        {
          "title": "Holdings for clients",
          "phrase_refs": [
            "proprietary-only"
          ],
          "text": "In the trading book, only the bank's own investments count. Bonds and shares it holds for clients, or to make a market, are not covered."
        }
      ],
      "in_practice": "A bank holds bonds and shares in two places. The banking book holds investments it plans to keep, and the trading book holds securities it buys and sells, often for clients.\n\nTake a company that earns most of its production revenues from tar sands. Intesa Sanpaolo will not keep its bonds or shares as its own investment. That applies in both books.\n\nBut the bank can still help the company raise the same financing. It can underwrite the company's new bonds: buy them when they are issued and sell them on to investors. Once they are sold, the bank no longer holds them, so this commitment does not cover that.\n\nIn the trading book, the bank can also hold the bonds for a client, or to make a market. Making a market means standing ready to buy and sell a security so others can trade it. Only the bank's own investments count there.\n\nNow take a large oil company with a small shale business. Its unconventional share is likely below 10% of production revenues, so it is not caught. Few companies publish that share, and the document does not say who calculates it.\n\nSo this commitment keeps specialized producers out of the bank's own investments. But it does not stop the bank from bringing their bonds to market."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Intesa Sanpaolo commits not to hold bonds or shares in companies earning more than 10% of their production revenues from unconventional oil and gas. We have not reviewed its holdings against this commitment yet.",
    "headline_figure": {
      "display": null,
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-10-02",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 261, document 8195",
    "reading": "drafted"
  }
};
