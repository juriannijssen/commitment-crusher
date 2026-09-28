/* Commitment data — generated from commitments/commitment-barclays-coal-power-phase-out.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "barclays-coal-power-phase-out",
    "bank": "Barclays",
    "commitment_number": 30,
    "category": "coal",
    "effective_date": "2030-01-01",
    "title": "Barclays' Phase-out of Coal Power Clients",
    "short_title": "Phase-out of Coal Power Clients",
    "subject": "Phase-out of Coal Power Clients",
    "article_published": null,
    "intro": "Barclays sets out this phase-out in the Thermal Coal Power section of its Climate Change Statement of December 2025. It is one passage of three sentences: a 2030 date for the EU and OECD, a different and looser rule for the rest of the world from the same date, and a 2035 backstop everywhere. Watchtower records the three sentences as three commitments; they are read here as one, because no sentence can be understood without the other two.",
    "naive_reading": "it is getting out of financing coal power altogether",
    "plain_language_note": "The rule is plain; the conditions that suspend the date, the exception and the definition come from elsewhere in the section and the statement.",
    "sources_intro": "One policy document states this commitment. Four passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=30",
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
        "intro": "The whole passage, as the statement writes it: the 2030 date for the EU and OECD, the separate rule for everywhere else, and the 2035 backstop.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "By 1 January 2030: For EU and OECD, we will phase out financing to clients engaged in thermal coal-fired power generation. For rest of the world, we will no longer provide financing to clients that generate more than 10% of revenue from thermal coal-fired power generation. By 1 January 2035, we will phase out financing for all clients engaged in thermal coal-fired power generation.",
        "plain_rendering": "By 1 January 2030: For EU and OECD, Barclays will phase out financing to clients engaged in thermal coal-fired power generation. For rest of the world, Barclays will no longer provide financing to clients that generate more than 10% of revenue from thermal coal-fired power generation. By 1 January 2035, Barclays will phase out financing for all clients engaged in thermal coal-fired power generation.",
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
            "defined_in_clause": 3,
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
              75,
              85
            ],
            "plain_range": [
              81,
              91
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
              207,
              231
            ],
            "plain_range": [
              219,
              243
            ],
            "means": "This explains the rule outside the EU and OECD: the threshold is 10% of the client's revenue, twice the share the definition of “engaged in” sets inside them.",
            "lets_through": [
              "This wording lets through a client outside the EU and OECD earning up to 10% of its revenue from coal power. The same client inside them would be caught at a lower share.",
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
              274,
              291
            ],
            "plain_range": [
              286,
              303
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
          "signposting_note": "“engaged in” is set in italics in the wording above, and nothing else points to the definitions table."
        },
        "verbatim": "Engaged in — In relation to Thermal Coal Mining and Thermal Coal Power, a client is defined as “engaged in” if it generates more than 5% of its revenues from thermal coal-fired power generation and/or thermal-coal mining.",
        "plain_rendering": "For thermal coal mining and thermal coal power, a client is engaged in it if it generates more than 5% of its revenues from coal-fired power generation or coal mining.",
        "phrases": [
          {
            "id": "more-than-5pc-revenues",
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
              90,
              118
            ],
            "means": "This definition of “engaged in” is narrower than what it usually means. In ordinary English, a company engaged in coal power is one that burns coal to make electricity. Barclays makes it a revenue test: more than 5% of what the company earns, measured on the entity being financed. A company that runs coal plants and takes 4% of its revenues from them is still not engaged in coal power here, however much coal it burns. It blocks fewer companies than the words suggest, and the ones it lets through are the diversified giants whose coal fleets are largest.",
            "lets_through": [
              "A large diversified company whose coal business is under 5% of its revenue.",
              "A company that grows its other businesses until coal falls below the line."
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
        "role": "exception",
        "source_id": "ccs2025",
        "title": "The date exceptions",
        "intro": "The statement lists three conditions under which the phase-out dates for coal-fired power do not apply.",
        "location": {
          "distance": "nearby",
          "signposting": "none",
          "signposting_note": "The dated rule reads as complete; the conditions that suspend it follow after the 2035 date, and nothing in the rule points to them."
        },
        "verbatim": "Exceptions to the phase out date(s) for thermal coal-fired power generation apply if: … Remaining thermal coal-fired power plants are abated to reduce GHG emissions to near zero; OR … Remaining thermal coal-fired power plants solely utilised as backup to low carbon power supply; OR … Remaining thermal coal-fired power plants are required to remain open by operation of law, regulation or contract.",
        "plain_rendering": "The phase-out dates do not apply to remaining coal-fired plants that are abated to reduce GHG emissions to near zero, solely utilised as backup to low carbon power supply, or required to remain open by operation of law, regulation or contract.",
        "phrases": [
          {
            "id": "abated",
            "label": "abated to reduce GHG emissions to near zero",
            "type": "unverifiable_metric",
            "source": "watchtower_exception",
            "watchtower_ref": "abated to reduce GHG emissions to near zero",
            "not_in_synthesis": false,
            "verbatim_range": [
              134,
              177
            ],
            "plain_range": [
              73,
              116
            ],
            "means": "This explains the first condition: a plant fitted to cut its emissions to near zero. The statement does not say what counts as near zero, or how it is measured.",
            "lets_through": [
              "This wording lets through financing to clients whose plants claim near-zero abatement, on a definition the statement leaves open."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "backup",
            "label": "solely utilised as backup to low carbon power supply",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "backup to low carbon power supply",
            "not_in_synthesis": false,
            "verbatim_range": [
              226,
              278
            ],
            "plain_range": [
              118,
              170
            ],
            "means": "This explains the second condition: plants kept only as backup for low-carbon supply.",
            "lets_through": [
              "This wording lets through clients with coal plants held in reserve, however often the reserve is called on."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "required-open",
            "label": "required to remain open by operation of law, regulation or contract",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "required to remain open by operation of law, regulation or contract",
            "not_in_synthesis": false,
            "verbatim_range": [
              331,
              398
            ],
            "plain_range": [
              175,
              242
            ],
            "means": "This explains the third condition: plants that law, regulation or a contract keeps open.",
            "lets_through": [
              "This wording lets through clients whose coal plants are held open by a contract — including a power-purchase agreement the client itself signed."
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
      "commitment_index": 30,
      "commitment_id": "5fe029c7-0cb0-54b6-9715-5e6449f6abbc",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=30",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        12651,
        12782
      ],
      "summary_text": "By 1 January 2030, Barclays will phase out financing for clients engaged in thermal coal-fired power generation (>5% revenue) in the EU and OECD.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": "downstream",
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
          "definition": "revenue generated from thermal coal-fired power generation"
        }
      ],
      "commitment_type": "phase_out",
      "effective_date": "2030-01-01",
      "exceptions": [
        {
          "condition": "Remaining thermal coal-fired power plants are abated to reduce GHG emissions to near zero",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": null,
          "standing": false,
          "where": null
        },
        {
          "condition": "Remaining thermal coal-fired power plants are solely utilised as backup to low carbon power supply",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": null,
          "standing": false,
          "where": null
        },
        {
          "condition": "Remaining thermal coal-fired power plants are required to remain open by operation of law, regulation or contract",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": null,
          "standing": false,
          "where": null
        },
        {
          "condition": "Transition finance to clients reducing their coal portfolio (including retrofitting) or decommissioning plants, evaluated case-by-case",
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
          "commitment_index": 31,
          "commitment_id": "20702af8-88be-582d-b13b-3febcd3c9758",
          "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=31"
        },
        {
          "commitment_index": 32,
          "commitment_id": "65d08b03-dbe5-503d-81d6-3689dc648407",
          "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=32"
        }
      ]
    },
    "general_carve_outs": [
      {
        "condition": "A CASE-BY-CASE EXCEPTION FOR TRANSITION FINANCE · THERMAL COAL POWER — “We will consider exceptions to our thermal coal power policy on a case-by-case basis for any transition finance to clients reducing their thermal coal portfolio including retrofitting of existing facilities or where we are providing financing for decommissioning plants for those unable to transition.”",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "THERMAL COAL POWER · EXCEPTION"
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
        "commitment_specific_carve_outs": 4,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "The 2030 date and the 5% threshold are real; the geography split is what hollows them, and it reads harder after the credit.",
          "text": "Credit where it is due. By 2030 an EU or OECD client loses its Barclays financing if more than 5% of its revenue comes from coal-fired power. All financing, not only project loans.\n\nThat is a low bar and a firm date.\n\nThen the same passage writes a second rule for everywhere else. Outside the EU and OECD the threshold doubles to 10%, and until 2035 nothing reaches a utility below it. The generator with 8% of its revenue in coal is excluded in Madrid and financed in Manila, on the same day, under the same sentence.\n\nAlmost all the coal capacity still being built is outside the OECD. The firm half of this promise governs the shrinking half of the problem."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "Read as one passage, this is a strict rule where coal power is closing and a loose one where it is being built.\n\nInside the EU and OECD the test is 5% of revenue. Outside, it is 10%, from the same date. A utility at 9% is untouched anywhere until 2035.\n\nThe threshold is a share, so it scales with the company. A generator can run one of the largest coal fleets in the world and still stay under 10%. It need only also sell gas, renewables and network services. The bigger the utility, the further it sits from the line.\n\nAnd \"phase out\" sets an end point with no step before it. Nothing here distinguishes a bank reducing steadily from one that does nothing until 2029."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "This catches a utility that is mostly a coal utility, in the EU or the OECD. It catches it from 2030, across every kind of financing.\n\nIt does not catch the diversified generator. The test is measured on the entity financed, and a large utility's coal revenue is a small share of what it sells.\n\nIt does not catch the plant itself. A project company that owns one coal station is not a client above a revenue threshold; it is a borrower this passage never measures.\n\nAnd it does not say what places a client inside the EU or the OECD. Where it is registered, where it generates and where it sells can each answer differently."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Use one threshold everywhere",
          "content": "Apply 5% worldwide. Almost all the coal capacity still being built sits outside the OECD, where the looser rule applies."
        },
        {
          "title": "Test the group, not the entity",
          "content": "Measure coal revenue across the group being financed. A share test on one subsidiary lets a coal-heavy parent through."
        },
        {
          "title": "Publish the starting point",
          "content": "State what is financed today, so the phase-out can be measured before 2030 rather than only at it."
        }
      ],
      "what_needs_to_change_closing": "Until then, the firm half of this promise governs the shrinking half of the problem.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "A real end date, reached slowly, with an abatement exception the statement leaves open."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Barclays commits to phase out financing to coal-fired power clients in the EU and OECD by 2030. We have not yet reviewed what it financed against this commitment.",
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
