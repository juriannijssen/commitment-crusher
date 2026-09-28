/* Commitment data — generated from commitments/commitment-barclays-coal-power-clients-30pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "barclays-coal-power-clients-30pc",
    "bank": "Barclays",
    "commitment_number": 28,
    "category": "coal",
    "effective_date": null,
    "title": "Barclays' 30% Threshold for Coal Power Clients",
    "short_title": "30% Threshold for Coal Power Clients",
    "subject": "Coal Power Clients",
    "article_published": null,
    "intro": "Barclays sets out this restriction at entity level in the Thermal Coal Power section of its Climate Change Statement of December 2025. It commits the bank to stop financing companies that depend heavily on coal-fired power generation.",
    "naive_reading": "it will not finance companies that depend on coal power",
    "plain_language_note": "The rule is plain; the definition of the revenue it counts comes from the table at the end of the statement.",
    "sources_intro": "One policy document states this commitment, and two passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=28",
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
        "intro": "This is where Barclays makes the commitment.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not provide financing to clients that generate more than 30% of their revenue from thermal coal-fired power generation.",
        "plain_rendering": "Barclays will not provide financing to clients that generate more than 30% of their revenue from thermal coal-fired power generation.",
        "phrases": [
          {
            "id": "more-than-30pc",
            "label": "more than 30% of their revenue",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              55,
              85
            ],
            "plain_range": [
              61,
              91
            ],
            "means": "This explains the threshold: revenue from coal-fired generation above 30% of the entity's revenue. The revenue counted is defined below.",
            "lets_through": [
              "This wording lets through clients between 5% and 30% until the 2030 and 2035 phase-out dates, and any entity with little coal revenue of its own, whatever its group earns."
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
        "title": "The definition of “revenue from coal-fired power generation”",
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Revenue” is set in italics in the rule, and nothing else points to the definitions table."
        },
        "verbatim": "Revenue from thermal coal-fired power generation — Refers to revenues attributable directly to the generation of electricity from thermal coal and excludes any other revenues including revenues attributable to the transmission and distribution of electricity.",
        "plain_rendering": "Revenue from thermal coal-fired power generation means revenue directly from generating electricity from coal, and excludes any other revenues, including transmission and distribution.",
        "phrases": [
          {
            "id": "excludes-other",
            "label": "excludes any other revenues",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              147,
              174
            ],
            "plain_range": [
              115,
              142
            ],
            "means": "This definition of “revenue from coal-fired power generation” is narrower than what it usually means. By a power company's coal revenue we normally mean what it earns from its coal business. Barclays counts only the revenue from generating the electricity. What it earns carrying and selling the same electricity is left out, which lowers the share a client is measured on — so the 30% test blocks fewer clients than the same number would on the ordinary meaning.",
            "lets_through": [
              "This wording lets through vertically integrated utilities, whose transmission, distribution and retail revenue dilutes the coal share without reducing the coal burned."
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
      "coal-fired-power-generation",
      "revenue-threshold"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 28,
      "commitment_id": "c4075a8b-52bb-5d32-8272-f7e918c170c3",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=28",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        12008,
        12141
      ],
      "summary_text": "Barclays will not provide financing to clients that generate more than 30% of their revenue from thermal coal-fired power generation.",
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
          "value": 30,
          "definition": "consolidated revenues directly attributable to generation of electricity from thermal coal"
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
          "recommended_because": "A 30% share of revenue lets integrated utilities through.",
          "text": "The threshold is 30% of revenue, and the revenue counted is narrow.\n\nOnly revenue directly from making electricity with coal counts. Revenue from power lines, grids and selling to homes does not. And it is measured against the company's total revenue.\n\nSo a utility with large grid and retail businesses can burn a great deal of coal, and stay under 30%. The more it does besides burning coal, the easier the test is to pass.\n\nThe narrowing is in the number and its definition. The largest coal-burning utilities can keep their financing."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Who loses financing today?\n\nPower companies earning more than 30% of their revenue from coal power. Those are caught, for all financing.\n\nLarge utilities with the same coal plants, and bigger other businesses, are not caught. Their coal revenue is a smaller share, because their grid and retail revenue is large.\n\nSo the rule binds power companies that mostly burn coal. It releases utilities that burn as much coal but do more besides. The size of the coal fleet does not decide who is caught. The shape of the business does. The size of the fleet plays no part."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: the rule applies to all clients now, new and existing. It has a published threshold, and a defined measure of revenue.\n\nWhere it stops is the height of the line. 30% is high, and the narrow measure of revenue makes it easier to pass. A large utility can burn a lot of coal and stay under it.\n\nSo the rule acts now, but only against the most coal-dependent power companies."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Add a size test",
          "content": "Count coal power capacity or output, not only revenue share."
        },
        {
          "title": "Lower the threshold before 2030",
          "content": "Publish a path from 30% down to the 5% phase-out threshold."
        }
      ],
      "what_needs_to_change_closing": "Until then, the largest coal-burning utilities pass on share.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "30% of revenue catches the coal-heavy, and a vertically integrated utility dilutes its way under with transmission and retail.",
      "how_it_compares": {
        "text": "Barclays' coal power phase-out ends this financing in 2030 in the EU and OECD, and 2035 elsewhere.",
        "links": [
          {
            "slug": "barclays-coal-power-phase-out",
            "title": "Barclays' Phase-out of Coal Power Clients"
          }
        ]
      }
    },
    "featured": {
      "rank": 2,
      "kind": "a threshold nobody exceeds",
      "because": "Thirty-two utilities, every one of them still burning coal, and not one above 30% of its revenue."
    }
  },
  "evidence": {
    "status": "financing_found",
    "teaser": "That is what Barclays put into utilities that still generate from coal, against a commitment written to stop it.",
    "headline_figure": {
      "display": "$4B",
      "combines": "32 2025 financings to utilities in the US, Europe and Japan that still generate from coal",
      "complete": false
    },
    "deals": [
      {
        "id": "barclays-the-southern-company-2025",
        "company": "The Southern Company",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 505501134.38349795,
        "amount_display": "$505.5M",
        "instruments": [],
        "contradiction": "A US utility holding company whose subsidiaries still burn coal in Alabama, Georgia and Mississippi. This commitment only covers a client drawing more than 30% of its revenue from coal power. A group that also sells gas, nuclear and network services is far below that line.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-cms-energy-2025",
        "company": "CMS Energy Corp",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 345819428.5714286,
        "amount_display": "$345.8M",
        "instruments": [],
        "contradiction": "A Michigan utility holding company whose subsidiary still burns coal at the Campbell plant. Coal is a small part of a business that is mostly gas distribution and regulated electricity.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-duke-energy-corporation-2025",
        "company": "Duke Energy Corporation",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 263101411.12474,
        "amount_display": "$263.1M",
        "instruments": [],
        "contradiction": "One of the largest US utilities, still operating coal units across the Carolinas and Indiana. Coal is a shrinking share of a very large revenue base, so this commitment does not reach it.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-georgia-power-2025",
        "company": "Georgia Power Co",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 262196462.954624,
        "amount_display": "$262.2M",
        "instruments": [],
        "contradiction": "The Georgia subsidiary of that group, running Plant Bowen and Plant Scherer, two of the largest coal stations in the United States. Coal is a minority of what it sells, so the 30% test never catches it.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-vistra-operations-co-2025",
        "company": "Vistra Operations Co LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 261071216.726066,
        "amount_display": "$261.1M",
        "instruments": [],
        "contradiction": "A US independent power producer with a large coal fleet in Texas, Illinois and Ohio. It also runs gas and nuclear plants and a retail electricity business, which dilutes coal below the test.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-alliant-energy-corporation-2025",
        "company": "Alliant Energy Corporation",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 227325153.79522502,
        "amount_display": "$227.3M",
        "instruments": [],
        "contradiction": "A utility in Iowa and Wisconsin that still burns coal at Ottumwa and Columbia. Its coal share of revenue is nowhere near the 30% the wording requires.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-public-service-company-of-colorado-2025",
        "company": "Public Service Company of Colorado",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 212742000.0,
        "amount_display": "$212.7M",
        "instruments": [],
        "contradiction": "That group's Colorado utility, operating the Comanche and Pawnee coal stations. Coal is one part of a mixed book, and this commitment only covers a client above 30%.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-wec-energy-group-2025",
        "company": "WEC Energy Group Inc",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 198392658.544309,
        "amount_display": "$198.4M",
        "instruments": [],
        "contradiction": "A Wisconsin utility group with coal plants at Oak Creek and Columbia. It is also one of the largest gas distributors in the Midwest, so coal never approaches 30% of revenue.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-dte-energy-company-2025",
        "company": "DTE Energy Company",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 179025000.0,
        "amount_display": "$179M",
        "instruments": [],
        "contradiction": "A Michigan utility running the Monroe coal plant, one of the largest in the country. Monroe is a minority of group revenue, and this commitment only covers a client above 30%.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-entergy-corporation-2025",
        "company": "Entergy Corporation",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 176269346.46598852,
        "amount_display": "$176.3M",
        "instruments": [],
        "contradiction": "A utility across Arkansas, Louisiana, Mississippi and Texas with coal units still on its system. Most of its power is nuclear and gas, which keeps it under the line this commitment draws.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-consumers-energy-2025",
        "company": "Consumers Energy Co",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 166000000.0,
        "amount_display": "$166M",
        "instruments": [],
        "contradiction": "That group's operating utility, generating from coal alongside gas and renewables in Michigan. The revenue test counts the whole company, so the coal units never bring it above 30%.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-tennessee-valley-authority-2025",
        "company": "Tennessee Valley Authority",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 150450000.0,
        "amount_display": "$150.4M",
        "instruments": [],
        "contradiction": "A federal power producer still running coal units at Cumberland, Kingston and Gallatin. Its revenue spans nuclear, gas, hydro and coal, which keeps coal far below 30%.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-dte-electric-2025",
        "company": "DTE Electric Co",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 144201000.0,
        "amount_display": "$144.2M",
        "instruments": [],
        "contradiction": "The electricity arm that operates those coal units directly. Even here coal sits beside gas and nuclear, and the threshold counts revenue rather than generation.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-berkshire-hathaway-energy-company-2025",
        "company": "Berkshire Hathaway Energy Company",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 113400000.0,
        "amount_display": "$113.4M",
        "instruments": [],
        "contradiction": "A utility group with large coal fleets in Iowa, Utah and Wyoming. It also owns gas pipelines and a British network business, so coal is a small slice of the whole.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-xcel-energy-2025",
        "company": "Xcel Energy Inc",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 105750000.0,
        "amount_display": "$105.8M",
        "instruments": [],
        "contradiction": "A utility across eight states with coal plants in Minnesota, Colorado and Texas. It sells gas and a large amount of wind power too, so coal stays under the threshold.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-portland-general-electric-2025",
        "company": "Portland General Electric Co",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 95900000.0,
        "amount_display": "$95.9M",
        "instruments": [],
        "contradiction": "An Oregon utility taking coal power from the Colstrip station in Montana. Coal is a small share of its revenue, which puts it outside this commitment.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-duke-energy-carolinas-2025",
        "company": "Duke Energy Carolinas LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 85250000.0,
        "amount_display": "$85.2M",
        "instruments": [],
        "contradiction": "The Carolinas arm of that utility, which runs the Marshall and Belews Creek coal stations. Its coal revenue sits well under the 30% the wording requires.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-puget-energy-2025",
        "company": "Puget Energy Inc",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 64000000.0,
        "amount_display": "$64M",
        "instruments": [],
        "contradiction": "A Washington utility with a stake in the same Montana coal station. Its revenue is mostly gas and hydro, so the 30% test never engages.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-entergy-mississippi-2025",
        "company": "Entergy Mississippi LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 60876000.0,
        "amount_display": "$60.9M",
        "instruments": [],
        "contradiction": "The Mississippi arm of that utility, drawing on coal generation in its supply. The wording asks what share of revenue comes from coal power, and the answer is a small one.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-jera-co-2025",
        "company": "JERA Co Inc",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 59100000.0,
        "amount_display": "$59.1M",
        "instruments": [],
        "contradiction": "Japan's largest power generator, burning coal at Hekinan, one of the biggest coal stations in the world. It is also the country's largest LNG buyer, and that gas revenue keeps coal under 30%.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-american-electric-power-company-inc-aep-2025",
        "company": "American Electric Power Company Inc (AEP)",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 48491666.6666667,
        "amount_display": "$48.5M",
        "instruments": [],
        "contradiction": "One of the largest coal-burning utilities in the United States, with units across the Midwest and South. Even here coal is a minority of revenue once transmission and gas are counted, so the test is not met.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-arizona-public-service-2025",
        "company": "Arizona Public Service Co",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 37790811.0377924,
        "amount_display": "$37.8M",
        "instruments": [],
        "contradiction": "An Arizona utility with a share of the Four Corners coal station. Nuclear and gas make up most of its revenue, so the wording never reaches it.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-southwestern-public-service-company-2025",
        "company": "Southwestern Public Service Company",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 36600000.0,
        "amount_display": "$36.6M",
        "instruments": [],
        "contradiction": "Its Texas and New Mexico utility, which takes coal power from the Tolk and Harrington plants. Revenue from coal falls well short of the share this wording asks for.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-rwe-2025",
        "company": "RWE AG",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 36068501.1067928,
        "amount_display": "$36.1M",
        "instruments": [],
        "contradiction": "Germany's largest power producer, still mining and burning lignite in the Rhineland. Its revenue is dominated by energy trading and renewables, which keeps coal under the 30% this commitment asks for.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-alabama-power-2025",
        "company": "Alabama Power Co",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 35700000.0,
        "amount_display": "$35.7M",
        "instruments": [],
        "contradiction": "An Alabama utility still generating from coal at Plant Miller and Plant Gorgas. Its revenue is mostly regulated electricity of every kind, which keeps coal under the threshold.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-wisconsin-electric-power-company-2025",
        "company": "Wisconsin Electric Power Company",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 35520000.0,
        "amount_display": "$35.5M",
        "instruments": [],
        "contradiction": "The subsidiary that runs those Wisconsin coal units. Its revenue mixes coal, gas and network charges, and the test only bites above 30%.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-nevada-power-2025",
        "company": "Nevada Power Co",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 29700000.0,
        "amount_display": "$29.7M",
        "instruments": [],
        "contradiction": "A Nevada utility that draws on coal generation in its supply. This commitment counts the share of revenue, and coal is not close to 30% of it.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-midamerican-energy-2025",
        "company": "MidAmerican Energy Co",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 29250000.0,
        "amount_display": "$29.2M",
        "instruments": [],
        "contradiction": "The Iowa utility in that group, still generating from coal at Walter Scott and Ottumwa. Wind is most of what it sells, which leaves coal under the threshold.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-wisconsin-public-service-corporation-2025",
        "company": "Wisconsin Public Service Corporation",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 23970000.0,
        "amount_display": "$24M",
        "instruments": [],
        "contradiction": "Another utility in the same group, taking power from the Columbia and Weston coal plants. Coal is a minority of what it sells, which puts it outside this commitment.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-oklahoma-gas-and-electric-company-2025",
        "company": "Oklahoma Gas and Electric Company",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 21192500.0,
        "amount_display": "$21.2M",
        "instruments": [],
        "contradiction": "An Oklahoma utility still burning coal at the Sooner plant. Coal sits beside gas and wind in its supply, and the revenue test is not met.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-the-aes-corporation-2025",
        "company": "The AES Corporation",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 18412800.0,
        "amount_display": "$18.4M",
        "instruments": [],
        "contradiction": "A global power company still operating coal plants in Asia and the Americas. Its revenue spans renewables, gas and utilities in many countries, so coal stays below the line.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      },
      {
        "id": "barclays-mississippi-power-2025",
        "company": "Mississippi Power Co",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 11999999.999696,
        "amount_display": "$12M",
        "instruments": [],
        "contradiction": "A Mississippi utility with coal generation on its system. The same arithmetic applies: coal is one fuel among several, and the test counts revenue, not emissions.",
        "phrase_refs": [
          "more-than-30pc"
        ],
        "source_url": null
      }
    ],
    "what_it_funded": "utilities that still generate from coal"
  },
  "provenance": {
    "built": "2026-09-28",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 219, document 4122",
    "reading": "drafted"
  }
};
