/* Commitment data — generated from commitments/commitment-barclays-coal-mining-phase-out.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "barclays-coal-mining-phase-out",
    "bank": "Barclays",
    "commitment_number": 23,
    "category": "coal",
    "effective_date": "2030-01-01",
    "title": "Barclays' Phase-out of Coal Mining Clients",
    "short_title": "Phase-out of Coal Mining Clients",
    "subject": "Phase-out of Coal Mining Clients",
    "article_published": null,
    "intro": "Barclays sets out this phase-out in the Thermal Coal Mining section of its Climate Change Statement of December 2025. It is one passage of three sentences: a 2030 date for the EU and OECD, a different and looser rule for the rest of the world from the same date, and a 2035 backstop everywhere. Watchtower records the three sentences as three commitments; they are read here as one, because no sentence can be understood without the other two.",
    "naive_reading": "it is getting out of financing coal mining altogether",
    "plain_language_note": "The rule is plain; the definition and the exception come from elsewhere in the statement.",
    "sources_intro": "One policy document states this commitment. Three passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=23",
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
          "passages": 2,
          "found": 2,
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
        "intro": "The whole passage, as the statement writes it: the 2030 date for the EU and OECD, the separate rule for everywhere else, and the 2035 backstop.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "By 1 January 2030: For EU and OECD, we will phase out financing to all clients engaged in thermal coal mining. For the rest of the world, we will no longer provide financing to clients that generate more than 10% of revenue from thermal coal mining. By 1 January 2035, we will phase out financing for all clients engaged in thermal coal mining.",
        "plain_rendering": "By 1 January 2030: For EU and OECD, Barclays will phase out financing to all clients engaged in thermal coal mining. For the rest of the world, Barclays will no longer provide financing to clients that generate more than 10% of revenue from thermal coal mining. By 1 January 2035, Barclays will phase out financing for all clients engaged in thermal coal mining.",
        "phrases": [
          {
            "id": "eu-oecd",
            "label": "For EU and OECD",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              19,
              34
            ],
            "plain_range": [
              19,
              34
            ],
            "means": "The words “For EU and OECD” limit the 2030 date to one group of countries. The statement does not say whether the client's location, its assets' location or its incorporation decides.",
            "lets_through": [
              "This wording lets through everyone else until 2035. The next sentence gives the rest of the world its own rule, and that rule is looser."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "phase-out",
            "label": "phase out",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              44,
              53
            ],
            "plain_range": [
              50,
              59
            ],
            "means": "The words “phase out” describe a reduction to zero by the date. No pace is set before it, and no figure for today's financing is published.",
            "lets_through": [
              "This wording lets through financing at any level right up to the date. A bank that does nothing until 2029 has broken nothing."
            ],
            "defined_in_clause": null,
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
              79,
              89
            ],
            "plain_range": [
              85,
              95
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "more-than-10pc",
            "label": "more than 10% of revenue",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              199,
              223
            ],
            "plain_range": [
              211,
              235
            ],
            "means": "This explains the rule outside the EU and OECD: the threshold is 10% of the client's revenue, twice the share the definition of “engaged in” sets inside them.",
            "lets_through": [
              "This wording lets through a client outside the EU and OECD earning up to 10% of its revenue from coal mining. The same client inside them would be caught at a lower share.",
              "It also lets through the gap between the two dates. Outside the EU and OECD, nothing reaches a client below 10% until 2035."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "by-2035",
            "label": "By 1 January 2035",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              250,
              267
            ],
            "plain_range": [
              262,
              279
            ],
            "means": "This explains when the phase-out is complete everywhere: the start of 2035.",
            "lets_through": [
              "This wording lets through ten more years of financing outside the EU and OECD. 2035 is two policy revisions away."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
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
              "This wording lets through clients at or below 5%, and low-coal entities of coal-heavy groups."
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
      "phase-out",
      "eu",
      "oecd",
      "transition-plan"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 23,
      "commitment_id": "bbdfebd6-ffc4-53ea-8394-671c83eaafea",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=23",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        10997,
        11116
      ],
      "summary_text": "By 1 January 2030, Barclays will phase out financing to all clients engaged in thermal coal mining (>5% revenue) in the EU and OECD.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": false
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": "existing",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "existing"
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
      "commitment_type": "phase_out",
      "effective_date": "2030-01-01",
      "exceptions": [
        {
          "condition": "Transition finance provided by Barclays to clients reducing their thermal coal portfolio, evaluated case-by-case",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": true,
          "standing": false,
          "where": null
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 1 fields corrected]\nCHANGES:\n- Barclays will not finance oil sands exploration and production companies (majority owners or operators deriving ≥10% revenue from oil sands).: Removed exception for <10% revenue as it is already captured in the threshold field.",
      "not_in_synthesis_note": null,
      "also_covers": [
        {
          "commitment_index": 24,
          "commitment_id": "1a884b42-f4cc-58aa-9e9e-626cb38dbfd7",
          "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=24"
        },
        {
          "commitment_index": 25,
          "commitment_id": "170cb128-52e0-5e6b-83f5-42cfb39c76b3",
          "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=25"
        }
      ]
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
        "record_score": "hollowed",
        "weakness": false,
        "commitment_specific_carve_outs": 1,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "A dated phase-out at 5%, covering all financing, is unusually strong — conceding it first makes the two gaps land.",
          "text": "Credit where it is due. By 2030 an EU or OECD client loses its Barclays financing if more than 5% of its revenue comes from thermal coal mining. Not just project loans. All of it.\n\nThat is a low bar and a firm date.\n\nThen the same passage writes a second rule for everywhere else. Outside the EU and OECD the threshold doubles to 10%, and nothing reaches a client below it until 2035. So a miner with 8% of its revenue in coal is excluded in Warsaw. The same miner is financed in Jakarta, under the same sentence.\n\nMost thermal coal mining is outside the OECD. The strong half of this promise covers the smaller half of the problem, and the passage never says which half a client belongs to."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "Read as one passage the shape is plain. A strict rule where little coal is mined, a loose one where most of it is.\n\nInside the EU and OECD the test is 5% of revenue. Outside, it is 10%, and it does not begin until 2030 either. A client at 9% is untouched anywhere in the world until 2035.\n\nNothing sets a pace. \"Phase out\" names an end point and no step before it, and the statement publishes no figure for what is financed today. A bank that changes nothing until 2029 has broken no part of this.\n\nAnd the 2035 backstop is ten years out, in a statement that says it may evolve in time. Two policy revisions stand between the promise and the date it falls due."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "This catches a coal miner that is mostly a coal miner, registered in the EU or the OECD. It catches it properly: every kind of financing, from 2030.\n\nIt does not catch the diversified group. The threshold is measured on the entity being financed. A mining subsidiary can sit below 5% while the group above it earns a great deal from coal.\n\nIt does not catch the trader, the shipper or the port. Those move and sell thermal coal without mining it, and this passage reaches only the miner.\n\nAnd it does not say what makes a client an EU or OECD one. Registration, operations and the location of the mines can each point somewhere different, and the statement chooses none of them."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Use one threshold everywhere",
          "content": "Apply 5% worldwide. The 10% rule outside the EU and OECD excludes most of the world's thermal coal mining from the strict half of this promise."
        },
        {
          "title": "Define the geography",
          "content": "Say whether a client's registration, its operations or the location of its mines decides which of the two rules applies to it."
        },
        {
          "title": "Publish the starting point",
          "content": "State what is financed today, so the phase-out can be measured before 2030 rather than only at it."
        }
      ],
      "what_needs_to_change_closing": "Until then, the firm half of this promise governs the smaller half of the problem.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "A real end date, reached slowly: nothing before 2030, a 10% floor outside the EU and OECD, and 2035 for the rest."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Barclays commits to phase out financing to thermal coal mining clients in the EU and OECD by 2030. We have not yet reviewed what it financed against this commitment.",
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
    "source": "Watchtower synthesis run 219, document 4122",
    "reading": "drafted"
  }
};
