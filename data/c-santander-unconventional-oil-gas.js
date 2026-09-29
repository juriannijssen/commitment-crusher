/* Commitment data — generated from commitments/commitment-santander-unconventional-oil-gas.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "santander-unconventional-oil-gas",
    "bank": "Santander",
    "commitment_number": 5,
    "category": "fracking",
    "effective_date": null,
    "title": "Santander's Commitment on Unconventional Oil & Gas",
    "short_title": "Commitment on Unconventional Oil & Gas",
    "article_published": "2026-08-28",
    "intro": "Santander sets out this restriction in its Environmental and Social Risk Management Policy; the version on file is the revision approved in June 2025. The policy commits the bank not to invest in, or provide financial products and services to, oil and gas producers built around fracking, tar sands, coalbed methane and Arctic oil and gas.",
    "naive_reading": "it will not finance companies whose business is fracking, tar sands or Arctic oil",
    "plain_language_note": "The rule and the passages that qualify it sit in different parts of the policy — one in a footnote to the rule, one at the start of the document. Reading the rule alone gives the wrong impression, which is why all three are shown here.",
    "sources_intro": "One policy document states this commitment. Three separate passages in it are needed to see what it actually covers.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "esg",
        "document_title": "Santander Environmental and Social Risk Management Policy",
        "document_url": "https://www.santander.com/content/dam/santander-com/en/contenido-paginas/nuestro-compromiso/pol%C3%ADticas/do-environmental-social-and-climate-change-risk-policy-en.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=5",
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
          "passages": 4,
          "found": 4,
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
        "intro": "This is the sentence that creates the rule. It sets two tests for oil and gas producers, both measured against the client's own business.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Santander Group will not directly invest in and/or provide financial products and/or services to… Clients involved in exploration and production for whom the activities derived from the combination of fracking, tar sands, coalbed methane and Arctic oil & gas represent a significant part of their reserves, or account for more than 30% of their activity.",
        "plain_rendering": "Santander will not directly invest in, or provide financial products or services to, clients in exploration and production where fracking, tar sands, coalbed methane and Arctic oil & gas combined are a significant part of their reserves, or account for more than 30% of their activity.",
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
              19,
              27
            ],
            "means": "The word “directly” limits this commitment to financing Santander gives the activity itself. The policy does not define it, and does not say what counts as indirect.",
            "lets_through": [
              "This wording lets through financing that reaches the activity through someone else — for example a general loan to the parent company, which then pays for it."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "significant",
            "label": "significant part",
            "type": "undefined_term",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              271,
              287
            ],
            "plain_range": [
              202,
              218
            ],
            "means": "The word “significant” sets the other of two parallel tests in the same sentence, measured against the client's reserves. It has no number attached, and the policy does not define it.",
            "lets_through": [
              "This wording lets through whatever the bank decides. Where the published figure would be inconvenient, the softer test is available instead, and nobody outside the bank can tell which of the two was applied to a given client."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "threshold",
            "label": "more than 30%",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              322,
              335
            ],
            "plain_range": [
              253,
              266
            ],
            "means": "This explains the one number in this commitment. It covers fracking, tar sands, coalbed methane and Arctic oil and gas combined, measured as a share of the client's activity.",
            "lets_through": [
              "This wording lets through producers below the line. Above it, a producer is restricted — read by itself, this part works.",
              "It also leaves “activity” undefined. Revenue, production and capital spending give different answers, and the policy does not say which it uses."
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
        "intro": "In a footnote on scope, early in the policy, Santander says who counts as the client, and where the test is measured when a group works across several industries.",
        "location": {
          "distance": "later_in_document",
          "signposting": "none",
          "signposting_note": "The rule reads as complete. The footnote that changes who counts as the client is attached to the policy's scope section at the start of the document, and nothing in the rule points back to it."
        },
        "verbatim": "Defining clients as corporate entities (last parent company) hence not including funds. In the case of multi-industry conglomerates with independent business entities across different industries, the Policy will apply at subsidiary level. Should a subsidiary be prohibited, Santander might still provide products and services to the parent company (if they are unrelated to the restricted entity) and/or to other subsidiaries within the conglomerate.",
        "plain_rendering": "A client is a corporate entity — the last parent company — and funds are not clients. For multi-industry conglomerates with independent businesses in different industries, the Policy will apply at subsidiary level. If a subsidiary is prohibited, Santander might still provide products and services to the parent company (if unrelated to the restricted entity) or to other subsidiaries.",
        "phrases": [
          {
            "id": "subsidiary-level",
            "label": "will apply at subsidiary level",
            "type": "narrowing_qualifier",
            "source": "watchtower_exception",
            "watchtower_ref": "the policy applies at the subsidiary level",
            "not_in_synthesis": false,
            "verbatim_range": [
              207,
              237
            ],
            "plain_range": [
              183,
              213
            ],
            "means": "This explains where the test is measured for a group that spans several industries: at the subsidiary, not the group.",
            "lets_through": [
              "This wording lets through the parent company and every other subsidiary of a conglomerate, even when one subsidiary fails the test. Financing to the parent is allowed if it is “unrelated to the restricted entity”, and the policy does not say how that is shown."
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
        "title": "The exception",
        "intro": "In a footnote, attached to the word “fracking” above, Santander says when the rule need not apply to fracking.",
        "location": {
          "distance": "nearby",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Due to the necessity to support the energy transition, energy security and affordability, and in situations where there can be exceptional social and economic implications, that could ultimately enable the transition and may play a crucial role in the economic and social local development (developing countries/emerging economies), exceptions in relation to fracking may be considered in jurisdictions where these activities are permissible under local regulation, subject to enhanced due diligence and appropriate approval.",
        "plain_rendering": "To support the energy transition, energy security and affordability, and where there can be exceptional social and economic implications that could enable the transition and local development (developing countries/emerging economies), exceptions for fracking may be considered where these activities are permissible under local regulation — subject to enhanced due diligence and appropriate approval.",
        "phrases": [
          {
            "id": "exceptional",
            "label": "exceptional social and economic implications",
            "type": "undefined_term",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              127,
              171
            ],
            "plain_range": [
              92,
              136
            ],
            "means": "The words “exceptional social and economic implications” set the occasion for the exception. Nothing in the policy says what counts as exceptional, or who judges it.",
            "lets_through": [
              "This wording lets through any case the bank can describe as important to energy security, affordability or local development. The brackets name developing countries and emerging economies as the setting, but the sentence does not say the exception is limited to them."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "may-be-considered",
            "label": "may be considered",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "Exceptions for fracking may be considered",
            "not_in_synthesis": false,
            "verbatim_range": [
              368,
              385
            ],
            "plain_range": [
              259,
              276
            ],
            "means": "This explains that the carve-out is a discretion, not a rule, and that it applies to fracking only. It does not raise the threshold. It removes it for the case in hand.",
            "lets_through": [
              "The words “may be considered” let through any fracking client the bank decides to take on. Nothing is published about how often the discretion is used, on what grounds, or by whom."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "permissible",
            "label": "permissible under local regulation",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "where permissible under local regulation",
            "not_in_synthesis": false,
            "verbatim_range": [
              430,
              464
            ],
            "plain_range": [
              304,
              338
            ],
            "means": "This explains the one hard condition attached to the carve-out: the activity has to be legal where it happens. The reasons in front of it are reasons, not tests.",
            "lets_through": [
              "This wording lets through fracking in the places it actually happens at scale. Fracking occurs where it is permitted, so this condition is met wherever the exception would be needed. The threshold holds without question only where fracking is already banned or restricted."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "shale",
      "oil-sands",
      "arctic",
      "unconventional",
      "reserves",
      "subsidiary",
      "parent-company",
      "discretionary-carve-out"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 149,
      "document_id": 25536,
      "institution": "santander",
      "commitment_index": 5,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=5",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-03",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        7282,
        7551
      ],
      "summary_text": "Santander restricts corporate financial services to upstream oil and gas clients for whom fracking, tar sands, coalbed methane, and Arctic activities represent a significant part of reserves or over 30% of activity, with exceptions for fracking and conglomerates.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "shale",
            "oil_sands",
            "coalbed methane",
            "arctic"
          ],
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "group",
          "relationship_status": "new_and_existing",
          "certainty": "4"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new_and_existing"
        }
      },
      "triggers": [
        {
          "metric": "other",
          "inequality": null,
          "value": null,
          "definition": "Activities derived from the combination of fracking, tar sands, coalbed methane and Arctic oil & gas represent a significant part of their reserves"
        },
        {
          "metric": "other",
          "inequality": ">",
          "value": 30,
          "definition": "percentage of activity derived from the combination of fracking, tar sands, coalbed methane and Arctic oil & gas"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Exceptions for fracking may be considered in jurisdictions where permissible under local regulation, subject to enhanced due diligence and appropriate approval.",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": true,
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
      "strength": "crushed",
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
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "The 30% line sits beside a second test with no number, and nobody outside the bank can tell which was used. For fracking, an exception is available wherever fracking is legal.",
      "actual_reading": "it will not finance oil and gas producers for whom fracking, tar sands, coalbed methane and Arctic work together are more than 30% of their activity or a “significant part” of their reserves, unless it makes a fracking exception",
      "gaps": [
        {
          "title": "Two tests, and neither is fixed",
          "phrase_refs": [
            "significant",
            "threshold"
          ],
          "text": "A producer is caught above 30% of its “activity”, or where these sources are a “significant part” of its reserves. “Significant” has no number. “Activity” could mean revenue, production or spending, and the policy does not say which."
        },
        {
          "title": "A fracking exception wherever fracking is legal",
          "phrase_refs": [
            "permissible",
            "may-be-considered",
            "exceptional"
          ],
          "text": "For fracking, Santander “may” consider exceptions where it is legal locally. Fracking happens where it is legal, so the exception is there wherever it would be needed."
        },
        {
          "title": "The parent and sister companies",
          "phrase_refs": [
            "subsidiary-level"
          ],
          "text": "For a group across several industries, the test is applied to one subsidiary. The parent and the other subsidiaries can still be financed."
        }
      ],
      "in_practice": "Fracking, tar sands and coalbed methane get oil and gas out of rock, sand and coal seams that ordinary wells cannot reach. Arctic oil and gas comes from north of the Arctic Circle. This commitment adds the four together and asks how much of a producer's business they make up.\n\nTake a producer whose shale wells are 40% of its production but 20% of its revenue. Is it above 30% of its “activity”? The policy does not say which measure counts, so the answer depends on Santander's choice.\n\nThen there is the second test: a “significant part” of the producer's reserves. It has no number. Santander can apply whichever test suits the case, and nobody outside the bank can tell which one it used.\n\nNow take a producer clearly above the line, fracking in a country where fracking is legal. Santander “may” consider an exception, for energy security, affordability or local development. The sentence mentions developing countries and emerging economies, but does not limit the exception to them. The one firm condition is that fracking is legal there. That is true wherever fracking actually happens. Nothing is published about how often the exception is used.\n\nFinally, take a group with businesses in several industries. The test is applied to its oil and gas subsidiary. The parent and the other subsidiaries can still be financed, if the financing is “unrelated to the restricted entity”.\n\nWhat is left is a tar sands, coalbed methane or Arctic producer that is clearly caught by whichever test Santander applies."
    },
    "featured": {
      "rank": 3,
      "kind": "exceptions that are always available",
      "because": "Two exceptions carry most of the weight; $2.3B found."
    }
  },
  "evidence": {
    "status": "financing_found",
    "teaser": "That is what Santander put into shale producers and the majors that drill alongside them, against a commitment written to stop it.",
    "what_it_funded": "shale producers and the majors that drill alongside them",
    "headline_figure": {
      "display": "$2.3B",
      "combines": "9 2025 financings to Argentine shale producers and diversified majors",
      "complete": false
    },
    "deals": [
      {
        "id": "santander-totalenergies-2025",
        "company": "TotalEnergies SE",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 480000000.00304,
        "amount_display": "$480M",
        "instruments": [],
        "contradiction": "A French oil major with shale gas in Argentina and a share of Canadian oil sands. This commitment restricts a client only above 30% of its activity. Unconventional is a small fraction of what a major of this size produces.",
        "phrase_refs": [
          "threshold"
        ],
        "source_url": null
      },
      {
        "id": "santander-vista-energy-argentina-2025",
        "company": "Vista Energy Argentina SAU",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 443314030.75,
        "amount_display": "$443.3M",
        "instruments": [],
        "contradiction": "A shale producer in Vaca Muerta, the Argentine formation that is almost all of its output. The threshold would restrict a producer this concentrated. The exception turns on whether fracking is permitted locally, and Argentina permits it.",
        "phrase_refs": [
          "permissible"
        ],
        "source_url": null
      },
      {
        "id": "santander-ypf-2025",
        "company": "YPF SA",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 395000000,
        "amount_display": "$395M",
        "instruments": [
          "general corporate finance",
          "bond underwriting"
        ],
        "contradiction": "Argentina's state-controlled oil company, whose production is around 60% shale from Vaca Muerta. That is well above the published limit of 30%. But the limit only holds where fracking is restricted, and Argentina permits it.",
        "phrase_refs": [
          "permissible"
        ],
        "source_url": null
      },
      {
        "id": "santander-tecpetrol-2025",
        "company": "Tecpetrol SA",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 295130134.93333304,
        "amount_display": "$295.1M",
        "instruments": [],
        "contradiction": "An Argentine producer whose Fortin de Piedra field is one of the largest shale gas developments in Vaca Muerta. Fracking is lawful in Argentina, which is the condition this exception asks about.",
        "phrase_refs": [
          "permissible"
        ],
        "source_url": null
      },
      {
        "id": "santander-bp-international-2025",
        "company": "BP International Ltd",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 256500000.0,
        "amount_display": "$256.5M",
        "instruments": [],
        "contradiction": "The financing arm of an integrated major with US shale production. A threshold measured as a share of the whole lets through every producer this diversified.",
        "phrase_refs": [
          "threshold"
        ],
        "source_url": null
      },
      {
        "id": "santander-chevron-usa-2025",
        "company": "Chevron USA Inc",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 254098521.635995,
        "amount_display": "$254.1M",
        "instruments": [],
        "contradiction": "The US arm of an oil major and one of the largest producers in the Permian basin. Its shale output is very large in absolute terms and well under 30% of the group's activity.",
        "phrase_refs": [
          "threshold"
        ],
        "source_url": null
      },
      {
        "id": "santander-compania-general-de-combustibles-sa-cgc-2025",
        "company": "Compania General de Combustibles SA (CGC)",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 78594970.0146493,
        "amount_display": "$78.6M",
        "instruments": [],
        "contradiction": "An Argentine oil and gas producer with shale acreage in Vaca Muerta and conventional fields in the south. The exception applies wherever fracking is permitted, and that is where fracking happens.",
        "phrase_refs": [
          "permissible"
        ],
        "source_url": null
      },
      {
        "id": "santander-eni-2025",
        "company": "Eni SpA",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 68700000.0,
        "amount_display": "$68.7M",
        "instruments": [],
        "contradiction": "An Italian major with unconventional interests alongside conventional fields worldwide. The share test is measured against everything else it does, which keeps it below the line.",
        "phrase_refs": [
          "threshold"
        ],
        "source_url": null
      },
      {
        "id": "santander-pan-american-energy-2025",
        "company": "Pan American Energy LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 19336304.025000002,
        "amount_display": "$19.3M",
        "instruments": [],
        "contradiction": "An Argentine producer with shale operations in Vaca Muerta alongside its conventional fields. Local law permits the drilling, so the condition attached to this restriction is met.",
        "phrase_refs": [
          "permissible"
        ],
        "source_url": null
      }
    ]
  },
  "provenance": {
    "built": "2026-09-29",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 149, document 25536",
    "reading": "drafted"
  }
};
