/* Commitment data — generated from commitments/commitment-barclays-coal-power-projects.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "barclays-coal-power-projects",
    "bank": "Barclays",
    "commitment_number": 26,
    "category": "coal",
    "effective_date": null,
    "title": "Barclays' Commitment on Coal Power Plant Projects",
    "short_title": "Commitment on Coal Power Plant Projects",
    "article_published": null,
    "intro": "Barclays sets out this restriction in the Thermal Coal Power section of its Climate Change Statement of December 2025. It commits the bank not to finance new coal-fired power plants, or the expansion of existing ones, anywhere in the world.",
    "naive_reading": "it will not finance new or bigger coal power plants anywhere",
    "plain_language_note": "The rule is plain; the definition and the exception come from elsewhere in the statement. The definition's wording is Barclays' own, including the word “production”.",
    "sources_intro": "One policy document states this commitment. Three passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=26",
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
        "source_id": "ccs2025",
        "title": "The promise",
        "intro": "This is where Barclays makes the commitment.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not provide project finance to enable the construction or material expansion of thermal coal-fired power plants anywhere in the world, including captives.",
        "plain_rendering": "Barclays will not provide project finance to enable the construction or material expansion of thermal coal-fired power plants anywhere in the world, including captives.",
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
              153,
              161
            ],
            "plain_range": [
              159,
              167
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": null,
            "bank_definition": null,
            "plain_gloss": "A captive power plant is one built to supply a single industrial or commercial user rather than to sell its electricity to the grid.\n\nBarclays' definition of “captives” matches the industry's meaning. Naming captives widens this commitment rather than narrowing it: without the word, a reader might take the rule to reach only plants selling into the grid."
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
              "A loan to the company building the plant, repaid out of its other earnings.",
              "Any financing arranged at the parent rather than against the project itself.",
              "This wording lets through general corporate financing and bonds to the utilities and developers building or expanding coal plants."
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
        "verbatim": "Material expansion — … In relation to Thermal Coal Power, production refers to an investment to (i) extend the unabated operating lifetime of existing thermal coal power plants including captives or (ii) increase net operational thermal power capacity, including captives, by more than 10% measure from a baseline of maximum capacity for preceding 3 years reported.",
        "plain_rendering": "For thermal coal power, material expansion means an investment that extends the unabated life of an existing coal plant, or increases its net capacity by more than 10% over its maximum in the preceding 3 years.",
        "phrases": [
          {
            "id": "more-than-10pc",
            "label": "by more than 10%",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              273,
              289
            ],
            "plain_range": [
              151,
              167
            ],
            "means": "This definition of “material expansion” is narrower in one way and wider in another. By expansion we normally mean producing more than before. A capacity increase has to pass 10% before it counts here, so 9% is not expansion. But extending a coal plant's unabated life counts as expansion whatever the capacity, which ordinary use would not.",
            "lets_through": [
              "This wording lets through capacity additions of 10% or less, repeated against a rolling three-year baseline.",
              "This wording lets through capacity increases of 10% or less that do not extend a plant's life."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "mixed"
      }
    ],
    "glossary_refs": [
      "coal-fired-power-generation",
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
      "commitment_index": 26,
      "commitment_id": "45f1c03a-a4b3-5415-8098-f861cb669a6d",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=26",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        11664,
        11832
      ],
      "summary_text": "Barclays will not provide project finance to construct or materially expand thermal coal-fired power plants anywhere globally, including captive plants.",
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
          "condition": "Transition finance to clients reducing their thermal coal portfolio (including retrofitting) or financing for plant decommissioning, evaluated case-by-case",
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
      "verdict_options": [
        {
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "Counting life extension as expansion is genuinely unusual; conceding it first makes the instrument limit land.",
          "text": "Credit first: the definition of material expansion counts extending a plant's life. An investment that keeps an existing coal plant running, without capturing its emissions, is caught. Not only one that adds capacity.\n\nThat matters, because extending old plants is how most coal fleets grow now.\n\nWhere it stops is the kind of financing. Project finance, as defined, leaves out company-level asset financing. So a utility can pay for the same work from its own balance sheet. And transition finance can be excepted case by case.\n\nSo the definition is broad. The loan it applies to is narrow."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "The definition is broad. The kind of financing it covers is narrow.\n\nOnly project finance is restricted. A utility building, expanding or extending a coal plant can still raise company loans and bonds from Barclays. It is only limited by the separate client thresholds and phase-out dates.\n\nCapacity additions of 10% or less are not expansion. And each step is measured against the last three years' peak, so the baseline moves up with the plant.\n\nWhat remains is a project loan for a new plant, a large expansion or a life extension. Utilities with a balance sheet rarely need one."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Who has to change anything because of this commitment?\n\nA developer that needs project finance for a new coal plant, a large capacity addition or a life extension. That developer is caught, anywhere in the world.\n\nA utility paying for the same work at company level is not caught. Neither is one adding capacity in steps of 10% or less.\n\nSo the commitment binds developers that depend on project loans, such as independent power producers. It releases utilities that can borrow as a company. Those can build, expand and extend with Barclays' company loans, within the client thresholds. The plant still gets built."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Cover the utility",
          "content": "Extend the rule to company loans for companies building, expanding or extending coal plants."
        },
        {
          "title": "Count capacity from a fixed starting point",
          "content": "Measure capacity additions against a fixed baseline, not the last three years' peak."
        }
      ],
      "what_needs_to_change_closing": "Until then, the plant cannot get a project loan, and the utility that owns it can still borrow.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Stops project finance for new and expanding plants; corporate financing to the same utility is free."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Barclays commits not to finance new coal-fired power plants or their material expansion. We have not yet reviewed what it financed against this commitment.",
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
