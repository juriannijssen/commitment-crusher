/* Commitment data — generated from commitments/commitment-barclays-existing-coal-mining-clients-30pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "barclays-existing-coal-mining-clients-30pc",
    "bank": "Barclays",
    "commitment_number": 21,
    "category": "coal",
    "effective_date": null,
    "title": "Barclays' 30% Threshold for Existing Coal Mining Clients",
    "short_title": "30% Threshold for Existing Coal Mining Clients",
    "subject": "Existing Coal Mining Clients",
    "article_published": null,
    "intro": "Barclays sets out this restriction at entity level in the Thermal Coal Mining section of its Climate Change Statement of December 2025. It commits the bank to stop financing existing clients that depend heavily on thermal coal mining.",
    "naive_reading": "it will not keep financing clients that depend on coal mining",
    "plain_language_note": "The rule is plain and the plain version changes nothing.",
    "sources_intro": "One policy document states this commitment, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=21",
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
          "passages": 1,
          "found": 1,
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
        "intro": "Barclays will not finance existing clients that earn more than 30% of their revenue from thermal coal mining.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not provide financing to existing clients that generate more than 30% of their revenues from thermal coal mining.",
        "plain_rendering": "Barclays will not provide financing to existing clients that generate more than 30% of their revenues from thermal coal mining.",
        "phrases": [
          {
            "id": "more-than-30pc",
            "label": "more than 30% of their revenues",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              64,
              95
            ],
            "plain_range": [
              70,
              101
            ],
            "means": "This explains the threshold for existing clients today: thermal coal mining revenue above 30% of the revenue of the entity being financed.",
            "lets_through": [
              "This wording lets through existing clients between 5% and 30% until the 2030 and 2035 phase-out dates, and any entity with little coal revenue of its own, whatever its group earns from coal."
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
      "existing-client",
      "revenue-threshold"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 21,
      "commitment_id": "b63fa424-b5bb-5e10-89ff-a016c09585d2",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=21",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        10419,
        10546
      ],
      "summary_text": "Barclays will not finance existing clients that generate more than 30% of their revenues from thermal coal mining.",
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
          "relationship_status": "existing",
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
          "value": 30,
          "definition": "consolidated revenues generated from thermal coal mining"
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
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "A 30% line for existing clients is where the gap sits, beside a 5% line for new ones.",
          "text": "New coal mining clients are refused above 5% of revenue. Existing ones are kept up to 30%.\n\nThat gap is the shape of this commitment. An existing client earning 25% of its revenue from thermal coal mining keeps its financing.\n\nThe threshold is also measured on the company financed, not its group. So a coal-heavy group can borrow through a company with less coal.\n\nThe limit is the number itself."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Who loses financing under this commitment today?\n\nAn existing client earning more than 30% of its revenue from thermal coal mining. That client is caught, for all financing.\n\nA client earning between 5% and 30% is not caught, until 2030 or 2035. A company with little coal, inside a coal-heavy group, is not caught either.\n\nSo the rule binds the clients that depend most on coal. For everyone between the two lines, nothing changes for years. That middle group can include large mining companies with sizeable coal businesses. Until then, they keep all their financing, and can keep mining at the same level."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: this rule reaches existing clients, not only new ones. And it covers all financing, not just project loans.\n\nThat matters. This rule acts now, for the clients most dependent on coal.\n\nWhere it stops is the height of the line. 30% is six times the 5% used for new clients. And it is measured on the company financed, not its group.\n\nSo the rule applies now, but only to the most coal-heavy existing clients."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Use the same threshold for all clients",
          "content": "Apply the 5% threshold to existing clients as well as new ones. Or publish a path from 30% down to 5% before 2030."
        },
        {
          "title": "Test the group",
          "content": "Measure coal revenue for the whole group, not only for the company being financed."
        }
      ],
      "what_needs_to_change_closing": "Until then, an existing coal miner can earn up to 30% of its revenue from coal and keep its financing.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Catches existing clients above 30%; everyone between 5% and 30% keeps its financing.",
      "how_it_compares": {
        "text": "Barclays' coal mining phase-out ends this financing in 2030 in the EU and OECD, and 2035 elsewhere.",
        "links": [
          {
            "slug": "barclays-coal-mining-phase-out",
            "title": "Barclays' Phase-out of Coal Mining Clients"
          }
        ]
      }
    }
  },
  "evidence": {
    "status": "financing_found",
    "teaser": "That is what Barclays put into the finance arms of coal mining groups, against a commitment written to stop it.",
    "headline_figure": {
      "display": "$439.2M",
      "combines": "4 2025 financings to the treasury companies of mining groups that produce coal",
      "complete": false
    },
    "deals": [
      {
        "id": "barclays-glencore-capital-finance-2025",
        "company": "Glencore Capital Finance DAC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 317613408.451667,
        "amount_display": "$317.6M",
        "instruments": [],
        "contradiction": "The financing arm of the world's largest exporter of thermal coal. The test counts the coal revenue of the entity being financed, and a treasury company mines nothing. The coal sits in the group behind it, which this wording does not look at.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-bhp-billiton-finance-usa-2025",
        "company": "BHP Billiton Finance (USA) Ltd",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 72864000.0,
        "amount_display": "$72.9M",
        "instruments": [],
        "contradiction": "The US financing arm of a mining group that still produces coal. It is a treasury entity with no mining revenue of its own, so the 30% test is measured against nothing.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-bhp-group-uk-2025",
        "company": "BHP Group (UK) Ltd",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 33717391.3043478,
        "amount_display": "$33.7M",
        "instruments": [],
        "contradiction": "Another financing entity of the same group. The wording asks what share of this entity's revenue comes from thermal coal mining, and the answer is none.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-mitsubishi-corporation-finance-2025",
        "company": "Mitsubishi Corporation Finance PLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 15000000.0,
        "amount_display": "$15M",
        "instruments": [],
        "contradiction": "The London financing arm of a Japanese trading house with coal mining interests in Australia. Coal is a small part of the group and none of it is revenue of the entity borrowing here.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      }
    ],
    "what_it_funded": "the finance arms of coal mining groups"
  },
  "provenance": {
    "built": "2026-09-28",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 219, document 4122",
    "reading": "drafted"
  }
};
