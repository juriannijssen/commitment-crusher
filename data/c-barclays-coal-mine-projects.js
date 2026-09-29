/* Commitment data — generated from commitments/commitment-barclays-coal-mine-projects.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "barclays-coal-mine-projects",
    "bank": "Barclays",
    "commitment_number": 17,
    "category": "coal",
    "effective_date": null,
    "title": "Barclays' Commitment on Thermal Coal Mine Projects",
    "short_title": "Commitment on Thermal Coal Mine Projects",
    "article_published": null,
    "intro": "Barclays sets out this restriction in the Thermal Coal Mining section of its Climate Change Statement of December 2025. It commits the bank not to finance new thermal coal mines, or the expansion of existing ones, anywhere in the world.",
    "naive_reading": "it will not finance new or expanding coal mines anywhere",
    "plain_language_note": "The rule is plain; the definition and the exception that qualify it come from elsewhere in the statement.",
    "sources_intro": "One policy document states this commitment. Three passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=17",
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
          "passages": 5,
          "found": 5,
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
        "verbatim": "We will not provide project finance for greenfield development or material expansion of thermal coal mines anywhere in the world, including captives.",
        "plain_rendering": "Barclays will not provide project finance for greenfield development or material expansion of thermal coal mines anywhere in the world, including captives.",
        "phrases": [
          {
            "id": "project-finance",
            "label": "project finance",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              20,
              35
            ],
            "plain_range": [
              26,
              41
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "material-expansion",
            "label": "material expansion",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              66,
              84
            ],
            "plain_range": [
              72,
              90
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 3,
            "bank_definition": null
          },
          {
            "id": "see-captives",
            "label": "captives",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              140,
              148
            ],
            "plain_range": [
              146,
              154
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
        "title": "The definition of “project finance”",
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“project finance” is set in italics in the wording above, and nothing else points to the definitions table."
        },
        "verbatim": "Project Finance — Refers to transactions that are a form of loan financing originated by Barclays (either as an agent or as part of a syndicate) where the repayment depends primarily on the project’s cash flow and on the collateral value of the project’s assets. Project Finance excludes corporate level asset financing.",
        "plain_rendering": "Project finance means loan financing arranged by Barclays where the repayment depends primarily on the project’s cash flow and on the value of the project’s assets. Project finance excludes corporate level asset financing.",
        "phrases": [
          {
            "id": "repayment-depends-on-project",
            "label": "the repayment depends primarily on the project’s cash flow",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              151,
              209
            ],
            "plain_range": [
              64,
              122
            ],
            "means": "Only a loan repaid out of the project itself counts as project finance.",
            "lets_through": [
              "A loan the parent company guarantees, which is repaid whether the project earns anything or not."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "excludes-corporate-level",
            "label": "excludes corporate level asset financing",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              279,
              319
            ],
            "plain_range": [
              181,
              221
            ],
            "means": "This definition of “project finance” is narrower than what it usually means. In the market, project finance is financing raised for a named project and repaid from what that project earns. Barclays limits it to loans it arranged itself, and writes company-level asset financing out by name. Lending to the company that owns the project is not project finance, so this commitment does not reach it — and it blocks far less than it appears to, because company-level lending is the ordinary way these projects are paid for.",
            "lets_through": [
              "A loan to the company developing the mine, repaid out of its other earnings.",
              "Any financing arranged at the parent rather than against the project itself.",
              "This wording lets through general corporate financing, bonds and every other company-level financing to the miners opening or expanding mines."
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
        "title": "The definition of “material expansion”",
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Expansion” is set in italics in the rule, and nothing else points to the definitions table."
        },
        "verbatim": "Material expansion — In relation to Thermal Coal Mining, refers to an increase in annual tonnage of thermal coal extracted from existing thermal coal mines, including captives, by more than 20%, measured from a baseline of maximum p.a. tonnage for preceding 3 years reported.",
        "plain_rendering": "For thermal coal mining, material expansion means increasing a mine's annual tonnage by more than 20%, measured against its highest annual tonnage in the preceding 3 years.",
        "phrases": [
          {
            "id": "more-than-20pc",
            "label": "by more than 20%",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              177,
              193
            ],
            "plain_range": [
              85,
              101
            ],
            "means": "This definition of “material expansion” is narrower than what it usually means. By expansion we normally mean producing more than before, and by material, enough to matter. Barclays draws the line at a rise in annual tonnage of more than 20% over the mine's recent peak. A mine digging 19% more every year is not materially expanding here, so the restriction blocks less growth than a reader would expect — and nothing at all below the line, however many years in a row it is repeated.",
            "lets_through": [
              "This wording lets through a mine growing by 20% or less at a time. Because the baseline is the last three years' maximum, a mine can grow in steps below the line indefinitely.",
              "This wording lets through expansions of up to 20%, repeated as often as a miner likes, each measured against the previous three years."
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
        "title": "The definition of “captives”",
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“captives” is set in italics in the wording above, and nothing else points to the definitions table."
        },
        "verbatim": "Captives — … In relation to Thermal Coal Mining, captives refers to thermal coal mines dedicated to providing thermal coal for captive thermal coal-fired power plants.",
        "plain_rendering": "Captives are thermal coal mines dedicated to providing thermal coal for captive thermal coal-fired power plants.",
        "phrases": [
          {
            "id": "captive-mines",
            "label": "dedicated to providing thermal coal for captive thermal coal-fired power plants",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              87,
              166
            ],
            "plain_range": [
              32,
              111
            ],
            "means": "This definition of “captives” is narrower than what it usually means. By a captive mine we normally mean one dedicated to a single buyer — a steelworks, a cement plant, a power station. Barclays counts only mines feeding captive coal-fired power plants, so a mine dedicated to any other kind of buyer is not a captive here. Naming them blocks no more than the sentence above already blocked: a coal mine large enough to need project finance is a thermal coal mine whether or not it has just one customer.",
            "lets_through": [
              "This wording lets through a mine dedicated to supplying a single industrial buyer that is not a coal-fired power plant."
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
      "project-finance",
      "capacity-expansion",
      "transition-plan"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 17,
      "commitment_id": "a0e5eb58-17ce-5ecd-a137-be11a79c66e8",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=17",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        9865,
        10020
      ],
      "summary_text": "Barclays will not provide project finance for greenfield development or material expansion (>20% tonnage increase) of thermal coal mines globally, including captive mines.",
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
          "relationship_status": null,
          "certainty": "5"
        },
        "product": {
          "financing_type": "project",
          "capital_markets": null,
          "transaction_status": null
        }
      },
      "triggers": [],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Transition finance to clients reducing their thermal coal portfolio, including retrofitting existing facilities, evaluated case-by-case",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": true,
          "standing": false,
          "where": null
        }
      ],
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
        "project_finance_only": true,
        "new_business_only": false,
        "total": 2
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "It stops project finance for a new or much bigger coal mine. Loans to the mining company, and growth of up to 20% at a time, get through.",
      "actual_reading": "it will not arrange project finance, repaid from the mine's own income, for a new thermal coal mine or one growing by more than 20%",
      "gaps": [
        {
          "title": "Loans to the miner, not the mine",
          "text": "“Project finance” here is a loan repaid only from the mine's own income. A loan or a bond to the mining company, repaid from its other earnings, is not covered.",
          "phrase_refs": [
            "excludes-corporate-level",
            "repayment-depends-on-project"
          ]
        },
        {
          "title": "Growth in steps of 20% or less",
          "text": "Growth counts as “material expansion” only above 20% of the mine's recent peak. The peak is reset every three years, so a mine can keep growing below the line.",
          "phrase_refs": [
            "more-than-20pc"
          ]
        }
      ],
      "in_practice": "Thermal coal is the coal burned in power stations. This commitment covers the mines that produce it, anywhere in the world.\n\nTake a mining company that wants to open a new thermal coal mine. If it asks Barclays for project finance, the rule applies. Project finance is a loan for one project, repaid only from what that project earns. If the company asks instead for a loan to the company as a whole, the rule does not apply. A bond is outside it too. The company can spend either on the new mine. A loan the parent guarantees also falls outside, because repayment no longer depends on the mine.\n\nNow take an existing mine that wants to dig more. Growth counts as “material expansion” only above 20% of the mine's highest yearly output in the last three years. A mine can grow by 15%, and a few years later by 15% again. Each step is measured against a new, higher starting point. None of them counts.\n\nSo what this commitment stops is a project loan for a new mine, or for a large jump in output. Mining groups that borrow as a company are not affected.",
      "gets_right": "It applies anywhere in the world. And it puts a number and a starting point on expansion, so anyone can check whether a mine's growth counts."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Barclays commits not to finance new thermal coal mines or their material expansion. We have not yet reviewed what it financed against this commitment.",
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
