/* Commitment data — generated from commitments/commitment-barclays-amazon-companies.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "barclays-amazon-companies",
    "bank": "Barclays",
    "commitment_number": 15,
    "category": "oil_gas_expansion",
    "effective_date": null,
    "title": "Barclays' Commitment on Amazon Oil & Gas Companies",
    "short_title": "Commitment on Amazon Oil & Gas Companies",
    "article_published": null,
    "intro": "Barclays sets out this restriction at entity level in the Unconventional Oil & Gas section of its Climate Change Statement of December 2025. It commits the bank not to finance companies engaged in oil and gas in the Amazon.",
    "naive_reading": "it will not finance companies that drill for oil and gas in the Amazon",
    "plain_language_note": "The rule is plain; its key term is defined in the table at the end of the statement.",
    "sources_intro": "One policy document states this commitment. Three passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=15",
        "watchtower_document_id": 4122,
        "watchtower_institution": "barclays",
        "synthesis_run": 219,
        "version_label": "December 2025",
        "published": "2025-12-01",
        "published_source": null,
        "published_confidence": null,
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "verbatim_check": {
          "document": "4122-barclays-arctic-oil-gas.md",
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
        "source_id": "ccs2025",
        "title": "The promise",
        "intro": "This is where Barclays makes the commitment.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not provide financing to Clients engaged in exploration, appraisal, development, and production of oil & gas in the Amazon Biome.",
        "plain_rendering": "Barclays will not provide financing to Clients engaged in exploration, appraisal, development and production of oil & gas in the Amazon Biome.",
        "phrases": [
          {
            "id": "see-clients",
            "label": "Clients",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              33,
              40
            ],
            "plain_range": [
              39,
              46
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "engaged-in",
            "label": "engaged in",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              41,
              51
            ],
            "plain_range": [
              47,
              57
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 3,
            "bank_definition": null
          },
          {
            "id": "see-amazon-biome",
            "label": "Amazon Biome",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              124,
              136
            ],
            "plain_range": [
              129,
              141
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 4,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "definition",
        "source_id": "ccs2025",
        "title": "The definition of “client”",
        "intro": "How Barclays' policy defines it in the same table.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Clients” is set in italics in the rule, and nothing else points to its definition."
        },
        "verbatim": "Client(s) — Means in relation to any proposed transaction the client entity (or entities) entering into the transaction.",
        "plain_rendering": "The client means the client entity (or entities) entering into the transaction.",
        "phrases": [
          {
            "id": "entering-transaction",
            "label": "the client entity (or entities) entering into the transaction",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              58,
              119
            ],
            "plain_range": [
              17,
              78
            ],
            "means": "This definition of “client” is narrower than what it usually means. By a bank's client we normally mean the business it deals with, parent and subsidiaries together. Barclays fixes it to the entity that signs, so the spending test in the definition of “engaged in” is applied to the borrower and not to its group. A subsidiary under the test passes whatever its parent spends in the Amazon, which means the test blocks fewer borrowers than the words suggest.",
            "lets_through": [
              "This wording lets through financing to a parent or sister company of an Amazon operator, if that entity's own spending in the Amazon stays under the test in the definition of “engaged in”."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "narrower"
      },
      {
        "index": 3,
        "role": "definition",
        "source_id": "ccs2025",
        "title": "The definition of “engaged in”",
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Engaged in” is set in italics elsewhere in the statement, but not in this rule; nothing points to the definition."
        },
        "verbatim": "Engaged in — … In relation to Amazon Oil & Gas, a client is defined as “engaged in” if more than 5% of its expenditure (CAPEX and OPEX) are on oil & gas projects in the Amazon Biome.",
        "plain_rendering": "For Amazon oil & gas, a client is engaged in it if more than 5% of its expenditure (CAPEX and OPEX) is on oil & gas projects in the Amazon Biome.",
        "phrases": [
          {
            "id": "more-than-5pc",
            "label": "more than 5% of its expenditure",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              87,
              118
            ],
            "plain_range": [
              51,
              82
            ],
            "means": "This definition of “engaged in” is narrower than what it usually means. In ordinary English, a company engaged in Amazon oil and gas is one that drills there. Barclays makes it a spending test: more than 5% of the client's total capital and operating expenditure. A company drilling in the Amazon with 4% of its spending there is still not engaged in it, so the restriction blocks fewer companies the bigger they are.",
            "lets_through": [
              "This wording lets through large companies with sizeable Amazon operations that are a small share of a larger budget.",
              "This wording lets through clients whose Amazon oil and gas spending is 5% or less of their capital and operating expenditure."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "narrower"
      },
      {
        "index": 4,
        "role": "definition",
        "source_id": "ccs2025",
        "title": "The definition of “the Amazon Biome”",
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Amazon Biome” is set in italics in the wording above, and nothing else points to the definitions table."
        },
        "verbatim": "Amazon Biome — … Refers to the world’s largest rainforest, covering 6.7 million km² across nine countries (Brazil, Bolivia, Peru, Ecuador, Colombia, Venezuela, Guyana, French Guiana, Suriname). The boundary of the Amazon Biome is defined by the Amazon Network of Georeferenced Socio-Environmental Information (RAISG) as the area formed by…",
        "plain_rendering": "The Amazon Biome is the world’s largest rainforest, covering 6.7 million km² across nine countries. The boundary of the Amazon Biome is defined by the Amazon Network of Georeferenced Socio-Environmental Information (RAISG).",
        "phrases": [
          {
            "id": "raisg-boundary",
            "label": "The boundary of the Amazon Biome is defined by",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              194,
              240
            ],
            "plain_range": [
              100,
              146
            ],
            "means": "This definition of “the Amazon Biome” is narrower than what it usually means. Most readers picture the Amazon as the rainforest and the river basin. Barclays uses a mapped boundary drawn by RAISG, a research network that publishes maps of the region, and a mapped boundary has an edge. So the biome here is an area with a line around it, not the forest region as most people think of it, and drilling just outside that line falls outside the restriction.",
            "lets_through": [
              "Oil and gas just outside the mapped boundary, in the same forest and the same river basin."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "narrower"
      }
    ],
    "glossary_refs": [
      "exploration",
      "capital-investment",
      "group-level"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 15,
      "commitment_id": "22649be6-0204-5e9a-9333-d08c6be6fc71",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=15",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        9416,
        9559
      ],
      "summary_text": "Barclays will not finance clients engaged in oil & gas exploration, appraisal, development, and production in the Amazon Biome (>5% capex and opex).",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": false
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
          "metric": "other",
          "inequality": ">",
          "value": 5,
          "definition": "share of expenditure (CAPEX and OPEX) on oil & gas projects in the Amazon Biome"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 1 fields corrected]\nCHANGES:\n- Barclays will not finance oil sands exploration and production companies (majority owners or operators deriving ≥10% revenue from oil sands).: Removed exception for <10% revenue as it is already captured in the threshold field.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "EXISTING OIL AND GAS FINANCING STAYS IN PLACE · APPLICABILITY OF FINANCING RESTRICTIONS — “Any existing commitments or financing entered into prior to any of the restrictions coming into effect under the Upstream Oil & Gas and Unconventional Oil & Gas sections of this statement may remain in place”; only refinancings are subject to the restrictions.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": "commitment 6 only",
        "where": "APPLICABILITY OF FINANCING RESTRICTIONS"
      },
      {
        "condition": "SECONDARY MARKETS AND DISTRESSED COMPANIES ARE NOT “FINANCING” · KEY DEFINITIONS — Financing “excludes, without limitation, any debt or securities traded or placed through secondary market activity”. Buying or selling a company’s existing bonds and shares is not financing here, so no restriction reaches it. Barclays also excludes primary financing for companies in financial difficulty, such as debt-for-equity swaps and other recapitalisations. A coal or oil company in trouble can be refinanced with none of these restrictions applying.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "KEY DEFINITIONS"
      },
      {
        "condition": "RESTRICTIONS DEPEND ON THIRD-PARTY DATA · THIRD PARTY DATA — “Where data is not available or is not of a reliably high quality, this may impact our ability to apply restrictions and other provisions set out in this statement.”",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "THIRD PARTY DATA"
      },
      {
        "condition": "SUBJECT TO APPLICABLE LAW · ABOUT THIS DOCUMENT — “The application of the provisions in this statement is subject to compliance with applicable laws and regulations, which may change from time to time.”",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "ABOUT THIS DOCUMENT"
      }
    ],
    "general_clauses_page": {
      "url": "general-clauses-barclays.html",
      "title": "The clauses that apply to every Barclays commitment"
    },
    "disagreements": [
      {
        "field": "loopholes.exceptions",
        "severity": "omission",
        "watchtower": "The record carries the statement's document-wide provisions on at most two commitments: the grandfathering rule on commitment 6, and the transition-finance allowance on commitments 4 and 5.",
        "bank_green": "The definition of financing excludes secondary-market activity and distressed-company financing; the statement applies only as far as third-party data allows, and subject to applicable law; existing oil and gas financing may remain in place until refinanced; and transition finance may reach restricted upstream groups. Each reaches more commitments than the record attaches it to.",
        "action": "Record each as a standing exception on every commitment it reaches."
      }
    ],
    "assessment": {
      "strength": "hollowed",
      "strength_derivation": {
        "rule": "spec v3.29 §4.1 — the gap between the naive reading and what it catches",
        "inputs_source": "Watchtower record",
        "record_score": "holds",
        "weakness": false,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 0
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "The test is a share of spending, run on the company that signs. A large group, or a group that borrows through another company, passes it.",
      "actual_reading": "it will not finance a company that spends more than 5% of its own budget on oil and gas inside a mapped Amazon boundary",
      "gaps": [
        {
          "title": "The company that signs, not its group",
          "text": "Barclays applies the test to the company entering the deal. A parent or sister company of an Amazon operator can borrow if its own spending is mostly elsewhere.",
          "phrase_refs": [
            "entering-transaction"
          ]
        },
        {
          "title": "A share of spending, not a size",
          "text": "A company is caught only if more than 5% of its spending goes on Amazon oil and gas. A large company with big Amazon operations can stay under that share.",
          "phrase_refs": [
            "more-than-5pc"
          ]
        },
        {
          "title": "Just outside the mapped line",
          "text": "The Amazon here is an area drawn on a map by a research network. Drilling just outside the line, in the same forest, is not covered.",
          "phrase_refs": [
            "raisg-boundary"
          ]
        }
      ],
      "in_practice": "Take a company set up to drill in the Amazon, with most of its budget spent there. If it asks Barclays for financing, the answer is no.\n\nNow take the group that owns it. The parent company runs oil fields on several continents. Barclays measures the company that signs the loan, not the group. So if the parent borrows, only the parent's own spending counts. The Amazon share of that is small, and the loan can go ahead. The parent can then pass the financing on to its Amazon company.\n\nNext take a large producer with sizeable Amazon fields of its own. Its Amazon spending may be large in absolute terms. But if it is 5% or less of everything the company spends, the company is not “engaged in” Amazon oil and gas. The bigger the company, the easier the test is to pass.\n\nAnd the Amazon here is a mapped area with an edge. A well just outside the line, in the same forest and the same river basin, is outside this commitment.\n\nSo what is caught is a company whose business is mostly in the Amazon, borrowing in its own name. For that company, Barclays financing is closed. The groups above it, and the large producers beside it, are not caught.",
      "gets_right": "It covers every kind of financing to a company above the line, not only loans for one project."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Barclays commits not to finance companies engaged in oil and gas in the Amazon. We have not yet reviewed what it financed against this commitment.",
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
    "source": "Watchtower synthesis run 219, document 4122",
    "reading": "drafted"
  }
};
