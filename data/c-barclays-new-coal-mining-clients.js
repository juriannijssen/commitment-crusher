/* Commitment data — generated from commitments/commitment-barclays-new-coal-mining-clients.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "barclays-new-coal-mining-clients",
    "bank": "Barclays",
    "commitment_number": 19,
    "category": "coal",
    "effective_date": null,
    "title": "Barclays' Commitment on New Coal Mining Clients",
    "short_title": "Commitment on New Coal Mining Clients",
    "article_published": null,
    "intro": "Barclays sets out this restriction at entity level in the Thermal Coal Mining section of its Climate Change Statement of December 2025. It commits the bank not to take on companies engaged in thermal coal mining.",
    "naive_reading": "it will not finance companies that mine coal for power stations",
    "plain_language_note": "The rule is short; the two definitions that decide its reach come from the table at the end of the statement.",
    "sources_intro": "One policy document states this commitment. Three passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=19",
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
        "source_id": "ccs2025",
        "title": "The promise",
        "intro": "This is where Barclays makes the commitment.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not provide financing to new clients engaged in thermal coal mining.",
        "plain_rendering": "Barclays will not provide financing to new clients engaged in thermal coal mining.",
        "phrases": [
          {
            "id": "new-clients",
            "label": "new clients",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              33,
              44
            ],
            "plain_range": [
              39,
              50
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "see-engaged-in",
            "label": "engaged in",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              45,
              55
            ],
            "plain_range": [
              51,
              61
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 3,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "definition",
        "source_id": "ccs2025",
        "title": "The definition of “new clients”",
        "intro": "How Barclays' policy defines it in the same table.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“New clients” is set in italics in the rule, and nothing else points to its definition."
        },
        "verbatim": "New client(s) — Refers to an entity in relation to whom no member of the Group is an existing client of Barclays.",
        "plain_rendering": "A new client is an entity in relation to whom no member of the Group is an existing client of Barclays.",
        "phrases": [
          {
            "id": "no-member",
            "label": "no member of the Group is an existing client",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              56,
              100
            ],
            "plain_range": [
              46,
              90
            ],
            "means": "This definition of “new clients” is narrower than what it usually means. By a new client we normally mean a company you have not done business with before. Barclays judges newness across the whole group: an entity is new only if no company in its group already banks with Barclays. A subsidiary Barclays has never served is not a new client, so the restriction blocks fewer companies the larger and longer-standing the group is.",
            "lets_through": [
              "This wording lets through a new coal-mining entity of any group Barclays already serves.",
              "This wording lets through every existing client engaged in thermal coal mining."
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
          "signposting_note": "“Engaged in” is set in italics in the rule, and nothing else points to the definitions table."
        },
        "verbatim": "Engaged in — In relation to Thermal Coal Mining and Thermal Coal Power, a client is defined as “engaged in” if it generates more than 5% of its revenues from thermal coal-fired power generation and/or thermal-coal mining.",
        "plain_rendering": "For thermal coal, a client is engaged in it if it generates more than 5% of its revenues from thermal coal-fired power generation or thermal coal mining.",
        "phrases": [
          {
            "id": "more-than-5pc",
            "label": "more than 5% of its revenues",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              124,
              152
            ],
            "plain_range": [
              60,
              88
            ],
            "means": "This definition of “engaged in” is narrower than what it usually means. In ordinary English, a company engaged in coal mining is one that mines coal. Barclays makes it a revenue test: more than 5% of what the company earns, measured on the entity being financed. A company that mines coal and takes 4% of its revenues from it is still not engaged in coal mining here, whatever it digs up in absolute terms. It blocks fewer companies than the words suggest, and the ones it lets through are the diversified giants whose coal output is largest.",
            "lets_through": [
              "This wording lets through a new client at or below 5% — and an entity with little coal revenue of its own, whatever its group earns from coal."
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
      "thermal-coal",
      "existing-client",
      "revenue-threshold"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 19,
      "commitment_id": "36fdd664-14fa-5c8c-83eb-ad05f3cf0355",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=19",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        10191,
        10273
      ],
      "summary_text": "Barclays will not provide financing to new clients engaged in thermal coal mining (>5% revenue).",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": "new",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new"
        }
      },
      "triggers": [
        {
          "metric": "revenue_share",
          "inequality": ">",
          "value": 5,
          "definition": "revenue generated from thermal coal mining"
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
        "condition": "A CASE-BY-CASE EXCEPTION FOR TRANSITION FINANCE · THERMAL COAL MINING — “We will consider exceptions to our thermal coal mining policy on a case-by-case basis for any transition finance provided by Barclays to clients reducing their thermal coal portfolio including retrofitting of existing facilities.”",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "THERMAL COAL MINING · EXCEPTION"
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
      },
      {
        "condition": "COAL THRESHOLDS APPLY TO THE ENTITY FINANCED · KEY DEFINITIONS — Any restriction relating to the % revenue a client generates from thermal coal “applies to the consolidated revenues of the entity being financed, whether transacting with a Group parent, subsidiary or joint venture.” A subsidiary with little coal revenue passes, whatever its group earns from coal.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "KEY DEFINITIONS"
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
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "It covers only coal miners in groups that have never banked with Barclays. Any miner in a group Barclays already serves is outside it.",
      "how_it_compares": {
        "text": "Barclays' existing coal mining clients are left to its phase-out, in 2030 in the EU and OECD and 2035 elsewhere.",
        "links": [
          {
            "slug": "barclays-coal-mining-phase-out",
            "title": "Barclays' Phase-out of Coal Mining Clients"
          }
        ]
      },
      "actual_reading": "it will not finance a company earning more than 5% of its revenue from thermal coal mining, if no company in its group already banks with Barclays",
      "gaps": [
        {
          "title": "Every group Barclays already serves",
          "phrase_refs": [
            "no-member"
          ],
          "text": "A company is a “new client” only if no company in its group already banks with Barclays. A new coal-mining company in a group Barclays already serves is not new."
        },
        {
          "title": "Coal measured on the borrower alone",
          "phrase_refs": [
            "more-than-5pc"
          ],
          "text": "The 5% is measured on the company being financed. A company with little coal revenue of its own can borrow, whatever its group earns from coal."
        }
      ],
      "in_practice": "Thermal coal is the coal burned in power stations. This commitment reaches companies that earn more than 5% of their revenue from mining it, but only if they are new to Barclays.\n\nTake a mining group that has banked with Barclays for years. Coal is a big part of its business. It is not a new client, so this commitment does not apply. Barclays can keep lending to it.\n\nNow the same group sets up a new company to open a coal mine. Barclays has never served that company. It is still not a “new client”, because another company in its group already banks with Barclays.\n\nNext take a group that has never banked with Barclays. It asks for a loan through its trading or holding company, which earns little from coal itself. The 5% is measured on that company, not the group. So the loan can go ahead.\n\nA company is caught only when both lines hold. It earns more than 5% of its own revenue from thermal coal mining. And no company in its group has ever been a Barclays client.\n\nSo this commitment keeps new coal miners out. The coal miners already inside, and their new companies, are not touched."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Barclays commits not to take on companies engaged in thermal coal mining. We have not yet reviewed what it financed against this commitment.",
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
