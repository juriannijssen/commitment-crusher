/* Commitment data — generated from commitments/commitment-santander-coal-power-2030.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "santander-coal-power-2030",
    "bank": "Santander",
    "commitment_number": 9,
    "category": "coal",
    "effective_date": null,
    "title": "Santander's 2030 Phase-out of Coal Power Clients",
    "short_title": "2030 Phase-out of Coal Power Clients",
    "subject": "Coal Power Clients",
    "article_published": null,
    "intro": "Santander sets out this phase-out in the power generation section of its Environmental and Social Risk Management Policy, which carries the bank's 2030 coal strategy, added in revision 2SA678-2 in February 2021. It commits the bank to stop financing clients that make power from coal.",
    "naive_reading": "it is ending its financing of companies that make power from coal",
    "plain_language_note": "The item is a sentence fragment completed by the lead-in. The plain version joins the two and keeps the carve-out word for word.",
    "sources_intro": "One policy document states this commitment, and two passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "esg",
        "document_title": "Santander Environmental and Social Risk Management Policy",
        "document_url": "https://www.santander.com/content/dam/santander-com/en/contenido-paginas/nuestro-compromiso/pol%C3%ADticas/do-environmental-social-and-climate-change-risk-policy-en.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=9",
        "watchtower_document_id": 25536,
        "watchtower_institution": "santander",
        "synthesis_run": 149,
        "version_label": "June 2025",
        "published": "2025-07-28",
        "published_source": null,
        "published_confidence": null,
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "verbatim_check": {
          "document": "25536-santander-unconventional-oil-gas.md",
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
        "source_id": "esg",
        "title": "The promise",
        "intro": "This is an item in the power list of restrictions, under the lead-in that covers them all.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Santander Group will not directly invest in and/or provide financial products and/or services to the following activities in any client segment: … By 2030, any client with more than 10% of revenues, on a consolidated basis, directly derived from coal fired power generation, except for sustainable finance and products to finance the transition.",
        "plain_rendering": "By 2030, Santander will not directly invest in or provide financial products or services to any client with more than 10% of revenues, on a consolidated basis, directly derived from coal fired power generation, except for sustainable finance and products to finance the transition.",
        "phrases": [
          {
            "id": "directly",
            "label": "directly",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              25,
              33
            ],
            "plain_range": [
              28,
              36
            ],
            "means": "The word “directly” limits this commitment to financing Santander gives the activity itself. The policy does not define it, and does not say what counts as indirect.",
            "lets_through": [
              "This wording lets through financing that reaches the activity through someone else — for example a general loan to the parent company, which then pays for it."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "by-2030",
            "label": "By 2030",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              147,
              154
            ],
            "plain_range": [
              0,
              7
            ],
            "means": "This explains when this commitment takes effect: in 2030. Until then, the only coal-power limit in the policy is the 25% threshold for new clients.",
            "lets_through": [
              "This wording lets through existing clients with any share of revenue from coal power until 2030. The sentence does not say whether the limit applies from the start of 2030 or by its end."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "threshold",
            "label": "more than 10% of revenues",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              172,
              197
            ],
            "plain_range": [
              108,
              133
            ],
            "means": "This explains the threshold: revenue directly derived from coal-fired power generation, as a share of the client's consolidated revenue.",
            "lets_through": [
              "This wording lets through clients at or below 10%, however large their coal fleet. The test is a share, so a utility with a big coal fleet and bigger other businesses passes.",
              "It also counts only revenue directly derived from generating power from coal. Coal mining, coal trading and coal-related services are not in the measure."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "transition-finance",
            "label": "except for sustainable finance and products to finance the transition",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "finance and products to finance the transition",
            "not_in_synthesis": false,
            "verbatim_range": [
              275,
              344
            ],
            "plain_range": [
              211,
              280
            ],
            "means": "This explains the carve-out: sustainable finance and products that finance the transition stay available to clients above the threshold. The policy does not define either term or say who decides what qualifies.",
            "lets_through": [
              "This wording lets through any financing Santander classes as sustainable or transition finance, for a client of any coal share. The classification is the bank's, and the policy publishes no framework for it."
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
        "source_id": "esg",
        "title": "Who it applies to",
        "intro": "In a footnote on scope, early in the policy, Santander says who counts as the client when a group works across several industries.",
        "location": {
          "distance": "later_in_document",
          "signposting": "none",
          "signposting_note": "The rule reads as complete. The footnote that changes who counts as the client is attached to the policy's scope section at the start of the document, and nothing in the rule points back to it."
        },
        "verbatim": "In the case of multi-industry conglomerates with independent business entities across different industries, the Policy will apply at subsidiary level. Should a subsidiary be prohibited, Santander might still provide products and services to the parent company (if they are unrelated to the restricted entity) and/or to other subsidiaries within the conglomerate.",
        "plain_rendering": "For multi-industry conglomerates with independent businesses in different industries, the Policy will apply at subsidiary level. If a subsidiary is prohibited, Santander might still provide products and services to the parent company (if unrelated to the restricted entity) or to other subsidiaries.",
        "phrases": [
          {
            "id": "subsidiary-level",
            "label": "will apply at subsidiary level",
            "type": "narrowing_qualifier",
            "source": "watchtower_exception",
            "watchtower_ref": "the policy applies at the subsidiary level",
            "not_in_synthesis": false,
            "verbatim_range": [
              119,
              149
            ],
            "plain_range": [
              97,
              127
            ],
            "means": "This explains where the 10% test is measured for a group that spans several industries: at the subsidiary, not the group.",
            "lets_through": [
              "This wording lets through the parent and every other subsidiary of a conglomerate that owns a coal-power business, if the financing is “unrelated to the restricted entity” — a condition the policy does not say how it checks."
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
      "revenue-threshold",
      "phase-out",
      "subsidiary",
      "parent-company"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 149,
      "document_id": 25536,
      "institution": "santander",
      "commitment_index": 9,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=9",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-03",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        8076,
        8274
      ],
      "summary_text": "By 2030, Santander will phase out corporate financing for clients with over 10% of consolidated revenues from coal-fired power generation, except for sustainable or transition finance.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": "downstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "group",
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
          "definition": "revenues directly derived from coal fired power generation, on a consolidated basis"
        }
      ],
      "commitment_type": "phase_out",
      "effective_date": "2030",
      "exceptions": [
        {
          "condition": "Sustainable finance and products to finance the transition are permitted.",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": false,
          "standing": false,
          "where": null
        },
        {
          "condition": "For multi-industry conglomerates, the policy applies at the subsidiary level, allowing financing to the parent or other unrelated subsidiaries.",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": false,
          "standing": false,
          "where": null
        },
        {
          "condition": "Exceptions may be approved by corporate governance bodies (Risk Proposal Forum, Executive Risk Committee, or Executive Committee) if they are aligned with environmental and social risk principles and undergo enhanced due diligence.",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": true,
          "standing": true,
          "where": null
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 0 fields corrected]\nCHANGES:\nNone. The junior analyst's extraction is highly accurate and fully compliant with the schema and splitting rules.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "Exceptions may be approved by corporate governance bodies (Risk Proposal Forum, Executive Risk Committee, or Executive Committee) if they are aligned with environmental and social risk principles and undergo enhanced due diligence.",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "recorded_by_watchtower": true,
        "where": null
      },
      {
        "condition": "APPLICABLE LAW CAN REPLACE A RESTRICTION WITH DUE DILIGENCE · FOOTNOTE 7 — “To the extent required by applicable law, customers and transactions involving activities enumerated in this section will be subject to an enhanced due diligence process to determine the unique risks presented prior to decisioning.” The change log ties this to Florida's HB3 Act. Where a law requires it, a client or transaction in a restricted activity is reviewed before a decision instead of being refused outright.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "FOOTNOTE 7"
      },
      {
        "condition": "SOME BUSINESSES MAY SKIP THE INDIVIDUAL REVIEW · FOOTNOTE 6 — Businesses of the Group managed mostly using investable universes or automatic methods “may have operational limitations to carry out an individualized review”; periodic reviews of internal or supplier data are used instead.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "FOOTNOTE 6"
      }
    ],
    "general_clauses_page": {
      "url": "general-clauses-santander.html",
      "title": "The clauses that apply to every Santander commitment"
    },
    "disagreements": [
      {
        "field": "loopholes.exceptions",
        "severity": "omission",
        "watchtower": "The record does not carry footnote 7's applicable-law provision or footnote 6's operational limitation on any commitment.",
        "bank_green": "Footnote 7 subjects restricted clients and transactions to enhanced due diligence before a decision wherever applicable law requires it; the change log names Florida's HB3 Act. Footnote 6 lets businesses run on investable universes or automatic methods rely on periodic data reviews instead of individual review. Both reach every restriction in section 2.1.",
        "action": "Record both as standing exceptions on every commitment in section 2.1."
      },
      {
        "field": "loopholes.exceptions",
        "severity": "inconsistency",
        "watchtower": "The conglomerate rule is recorded as an exception on commitments 5, 9, 10, 13 and 14 only.",
        "bank_green": "It is footnote 1 to the policy's definition of a client, in section 1.2, so it applies to every commitment in the document.",
        "action": "Record it as a standing exception on every commitment."
      },
      {
        "field": "document",
        "severity": "unreliable",
        "watchtower": "Watchtower now titles this document Policy 2025 (Group). Until September 2026 it titled it Environmental and Social Risk Management Policy 2021.",
        "bank_green": "The year is now right. The PDF Watchtower stores is the June 2025 revision, approved 25 June 2025 (2LO678-7). But the new title drops the policy's name, which leaves the document unidentifiable.",
        "action": "Keep the policy's own name with the corrected year: Environmental and Social Risk Management Policy 2025."
      }
    ],
    "assessment": {
      "strength": "hollowed",
      "strength_derivation": {
        "rule": "spec v3.29 §4.1 — the gap between the naive reading and what it catches",
        "inputs_source": "Watchtower record",
        "record_score": "hollowed",
        "weakness": false,
        "commitment_specific_carve_outs": 2,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "The date, the share-based test and an undefined transition carve-out each leave a clear gap, best stated flatly.",
          "text": "The commitment sets a date and a threshold, and each leaves room.\n\nThe date is 2030. Until then, no coal power limit applies to existing clients at all. The policy's other coal power rule only covers new clients above 25%.\n\nThe threshold is 10% of group revenue that comes directly from coal power. A share test releases the largest companies: a utility with many coal plants and even bigger other businesses passes. And only power revenue counts, not coal mining or trading.\n\nAbove the line, “sustainable finance and products to finance the transition” stay available. The policy defines neither, or says who decides. And for large groups, the test runs one subsidiary at a time, so the parent can still be financed.\n\nWhat remains is financing, from 2030, for a client above 10%, that no one calls transition finance."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Which clients will this commitment actually cost Santander in 2030?\n\nA company that earns more than 10% of its group revenue from coal power. It must not be a subsidiary of a large group with other businesses. And it must ask for financing the bank does not call sustainable or transition finance. That company is caught.\n\nA large utility whose coal plants are a small part of a large business is not. A group's parent is not, if the financing is unrelated to its coal power subsidiary. A coal-heavy client seeking transition finance is not.\n\nSo the commitment binds the mid-sized generator that depends on coal. It releases the largest owners of coal plants."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: this is a dated phase-out that reaches company-level financing, with a published threshold of 10% of group revenue. Anyone can check it against a client's accounts.\n\nThat is stronger than a rule on new plants, which leaves an existing coal fleet free to borrow. Here, from 2030, a generator that depends on coal loses access to Santander's financial products and services, not only its project loans.\n\nWhere it stops is the exception and the measure. Sustainable finance and transition products stay open to any client, however much coal it burns, and the policy defines neither. And a share of revenue lets the largest coal owners through.\n\nA phase-out with a date and a number is the right shape. The exception decides how much of it is left."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Define the transition exception",
          "content": "Publish what counts as sustainable or transition finance for a coal power client. And disclose how much is given under it."
        },
        {
          "title": "Count coal plants, not only revenue share",
          "content": "Add a size test, such as coal capacity or output. Then the largest coal owners cannot pass on share alone."
        },
        {
          "title": "Test the group, not the subsidiary",
          "content": "Apply the threshold to the whole group, so financing to a parent cannot reach a coal power subsidiary."
        }
      ],
      "what_needs_to_change_closing": "Until then, the 2030 date drops the clients that are mostly coal, and keeps the ones with other businesses.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "A real 2030 end for coal power clients above 10%, counting only revenue from generating and not from mining or trading."
    }
  },
  "evidence": {
    "status": "financing_found",
    "teaser": "That is what Santander put into utilities that still generate from coal, against a commitment written to stop it.",
    "headline_figure": {
      "display": "$1.3B",
      "combines": "9 2025 financings to US and global utilities that still burn coal",
      "complete": false
    },
    "deals": [
      {
        "id": "santander-talen-energy-supply-2025",
        "company": "Talen Energy Supply LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 347876379.76296306,
        "amount_display": "$347.9M",
        "instruments": [],
        "contradiction": "A US power producer with coal generation in Pennsylvania and a stake in the Colstrip plant in Montana. This commitment covers a client above 10% of revenue from coal power. A generator that also sells nuclear and gas output sits below that.",
        "phrase_refs": [
          "threshold"
        ],
        "source_url": null
      },
      {
        "id": "santander-the-southern-company-2025",
        "company": "The Southern Company",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 194241758.241758,
        "amount_display": "$194.2M",
        "instruments": [],
        "contradiction": "A US utility group whose subsidiaries still burn coal in Alabama, Georgia and Mississippi. Coal generation is a small share of revenue once gas, nuclear and networks are counted.",
        "phrase_refs": [
          "threshold"
        ],
        "source_url": null
      },
      {
        "id": "santander-duke-energy-corporation-2025",
        "company": "Duke Energy Corporation",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 177600000.0,
        "amount_display": "$177.6M",
        "instruments": [],
        "contradiction": "One of the largest US utilities, still operating coal units in the Carolinas and Indiana. The test is a share, and a very large revenue base keeps coal under 10%.",
        "phrase_refs": [
          "threshold"
        ],
        "source_url": null
      },
      {
        "id": "santander-nrg-energy-2025",
        "company": "NRG Energy Inc",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 156991902.4703859,
        "amount_display": "$157M",
        "instruments": [],
        "contradiction": "A US power producer running coal units in Texas alongside a large retail electricity business. Retail and gas revenue keep coal power below the line this commitment draws.",
        "phrase_refs": [
          "threshold"
        ],
        "source_url": null
      },
      {
        "id": "santander-georgia-power-2025",
        "company": "Georgia Power Co",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 128240000.00000001,
        "amount_display": "$128.2M",
        "instruments": [],
        "contradiction": "The Georgia utility running Plant Bowen and Plant Scherer, two of the largest coal stations in the country. Even here coal is a minority of revenue, and the test counts revenue rather than output.",
        "phrase_refs": [
          "threshold"
        ],
        "source_url": null
      },
      {
        "id": "santander-duke-energy-progress-2025",
        "company": "Duke Energy Progress LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 125118000.0,
        "amount_display": "$125.1M",
        "instruments": [],
        "contradiction": "The Carolinas utility in that group, still generating from coal at Roxboro and Mayo. Coal is a minority of regulated revenue, so the 10% test is not met.",
        "phrase_refs": [
          "threshold"
        ],
        "source_url": null
      },
      {
        "id": "santander-duke-energy-florida-2025",
        "company": "Duke Energy Florida LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 108790000.0,
        "amount_display": "$108.8M",
        "instruments": [],
        "contradiction": "The Florida utility in the same group, drawing on coal generation in its supply. Most of what it sells is gas-fired, which puts coal well under the threshold.",
        "phrase_refs": [
          "threshold"
        ],
        "source_url": null
      },
      {
        "id": "santander-the-aes-corporation-2025",
        "company": "The AES Corporation",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 72336000.0,
        "amount_display": "$72.3M",
        "instruments": [],
        "contradiction": "A global power company still operating coal plants in Asia and the Americas. Its revenue spans renewables, gas and utilities in many countries, which dilutes coal below 10%.",
        "phrase_refs": [
          "threshold"
        ],
        "source_url": null
      },
      {
        "id": "santander-mississippi-power-2025",
        "company": "Mississippi Power Co",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 4560000.00003648,
        "amount_display": "$4.6M",
        "instruments": [],
        "contradiction": "A Mississippi utility with coal generation on its system. The share test counts everything it sells, and coal is one fuel among several.",
        "phrase_refs": [
          "threshold"
        ],
        "source_url": null
      }
    ],
    "what_it_funded": "utilities that still generate from coal"
  },
  "provenance": {
    "built": "2026-09-25",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 149, document 25536",
    "reading": "drafted"
  }
};
