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
              "This wording lets through existing clients with 30% or less of their revenue from coal mining, and any entity with little coal revenue of its own, whatever its group earns from coal."
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
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "It drops the existing clients most dependent on coal mining. A client earning 25% of its revenue from coal keeps all its financing.",
      "how_it_compares": {
        "text": "Barclays' coal mining phase-out ends this financing in 2030 in the EU and OECD, and 2035 elsewhere.",
        "links": [
          {
            "slug": "barclays-coal-mining-phase-out",
            "title": "Barclays' Phase-out of Coal Mining Clients"
          }
        ]
      },
      "actual_reading": "it will not keep financing an existing client whose own revenue from thermal coal mining is more than 30% of its total",
      "gaps": [
        {
          "title": "Clients at 30% or less",
          "text": "An existing client earning up to 30% of its revenue from thermal coal mining keeps its financing. That can include large miners with big coal businesses.",
          "phrase_refs": [
            "more-than-30pc"
          ]
        },
        {
          "title": "A low-coal company in a coal-heavy group",
          "text": "The test runs on the company Barclays finances, not its group. A group company with little coal revenue of its own can borrow, whatever the group earns from coal.",
          "phrase_refs": [
            "more-than-30pc"
          ]
        }
      ],
      "in_practice": "The test is a share of revenue. It is measured on the company Barclays finances. Above 30% from thermal coal mining, an existing client loses its financing. That means every kind of financing, not only loans for one project.\n\nTake a mining company that earns 60% of its revenue from thermal coal. It is far above the line, and Barclays has to stop financing it.\n\nNow take a mining group that digs thermal coal, copper and iron ore. It earns 25% of its revenue from coal. Its coal business may be one of the largest there is. But 25% is under 30%, so it keeps all its financing. The larger its other businesses, the further it sits from the line.\n\nThen take a group that earns most of its revenue from coal, but borrows through a company that trades or ships other goods. That company's own coal revenue is small. The test is run on it, not on the group, so the loan can go ahead.\n\nSo what this commitment stops is financing to existing clients that live mainly on coal. The size of a coal business does not decide it. The share does."
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
    "built": "2026-09-29",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 219, document 4122",
    "reading": "drafted"
  }
};
