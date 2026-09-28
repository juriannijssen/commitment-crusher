/* Commitment data — generated from commitments/commitment-seb-ded-gas-midstream.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "seb-ded-gas-midstream",
    "bank": "SEB Group",
    "commitment_number": 16,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's Transition Plan Condition on New Gas Infrastructure",
    "short_title": "Transition Plan Condition on New Gas Infrastructure",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this restriction in its Sector Policy on Fossil Fuels, published in April 2026. New gas pipelines and storage are financeable if somebody connected to the project has a transition plan — the company, the project, or the owner.",
    "naive_reading": "it will not finance new gas pipelines and terminals",
    "plain_language_note": "A condition with three ways to satisfy it and no test of whether the plan is any good.",
    "sources_intro": "One policy document states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=16",
        "watchtower_document_id": 25537,
        "watchtower_institution": "seb_group",
        "synthesis_run": 181,
        "version_label": "April 2026",
        "published": "2026-04-23",
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "published_source": null,
        "published_confidence": null,
        "verbatim_check": {
          "document": "25537-seb-fossil-fuels.md",
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
        "source_id": "seb2026",
        "title": "The promise",
        "intro": "This is where SEB Group makes the commitment.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "SEB Group avoids providing Dedicated Finance to construction of New gas transportation Infrastructure and/ or storage Projects, unless the Company, project or owner has a Transition Plan.",
        "plain_rendering": "SEB Group avoids providing Dedicated Finance to construction of New gas transportation Infrastructure and/ or storage Projects, unless the Company, project or owner has a Transition Plan.",
        "phrases": [
          {
            "id": "see-dedicated-finance",
            "label": "Dedicated Finance",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              27,
              44
            ],
            "plain_range": [
              27,
              44
            ],
            "means": "“Dedicated Finance” is financing for a named purpose, where SEB knows what it pays for. This commitment covers only that kind of financing. A loan to the company as a whole names no purpose, so it is not covered.",
            "lets_through": [
              "This wording lets through general-purpose financing — a loan to the company as a whole, which does not say what it pays for.",
              "A pipeline company can borrow this way from SEB and spend the loan on a new gas pipeline or storage site, with or without a transition plan."
            ],
            "defined_in_clause": null,
            "bank_definition": {
              "quote": "Dedicated Finance — Where the financing is channelled to a specified use of proceeds.",
              "source_id": "seb2026"
            }
          },
          {
            "id": "see-new-project",
            "label": "New gas transportation Infrastructure and/ or storage Projects",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              64,
              126
            ],
            "plain_range": [
              64,
              126
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "unless16",
            "label": "unless the Company, project or owner has a Transition Plan",
            "type": "escape_hatch",
            "verbatim_range": [
              128,
              186
            ],
            "plain_range": [
              128,
              186
            ],
            "means": "This explains the condition that switches this commitment off. Any one of three parties having a transition plan is enough.",
            "lets_through": [
              "This wording lets through almost every sponsor. Three alternative holders of the plan means the test is satisfied if any of them has one, and large infrastructure projects have several parties attached.",
              "It also lets through any plan at all. The policy does not say the plan must be public, credible, verified, aligned to a temperature pathway, or related to the asset being financed."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "definition",
        "source_id": "seb2026",
        "title": "The definition of “New Project”",
        "intro": "How SEB's policy defines it in its list of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“New Project” is capitalised in the wording above, and the list of definitions that explains it sits at the front of the policy."
        },
        "verbatim": "New Project — A New Project or capacity expansion at an identified location where any new commercial, industrial or infrastructure undertaking is taking place or any existing undertaking that is undergoing material change in output or function, which may result in changes to the operation’s sustainability impacts.",
        "plain_rendering": "A New Project is a new project or capacity expansion at an identified location where any new commercial, industrial or infrastructure undertaking is taking place, or any existing undertaking that is undergoing material change in output or function, which may result in changes to the operation’s sustainability impacts.",
        "phrases": [
          {
            "id": "new-project-material-change",
            "label": "any existing undertaking that is undergoing material change in output or function",
            "type": "undefined_term",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              162,
              243
            ],
            "plain_range": [
              166,
              247
            ],
            "means": "This definition of “New Project” is broader than what it usually means. By a new project we normally mean something built from scratch. SEB also counts capacity expansions, and any existing operation undergoing a material change in what it produces or does. So enlarging or converting an existing gas pipeline or storage site counts too, and the rule blocks more.",
            "lets_through": [
              "This wording lets through changes to an existing gas pipeline or storage site that SEB does not judge “material”. The policy gives no measure."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "broader"
      }
    ],
    "glossary_refs": [
      "midstream",
      "pipelines",
      "transition-plan",
      "dedicated-transaction",
      "gas-lock-in"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 181,
      "document_id": 25537,
      "institution": "seb_group",
      "commitment_index": 16,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=16",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-09",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        15219,
        15406
      ],
      "summary_text": "SEB Group restricts dedicated project finance for new gas transportation infrastructure and storage projects unless the company, project, or owner has a transition plan.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "midstream",
          "activity_scope": "new"
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
          "condition": "Allowed if the company, project, or owner has a Transition Plan",
          "carve_out_kind": null,
          "carve_out_kind_source": null,
          "governance_process": null,
          "standing": false,
          "where": "recorded on this commitment only"
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 20 fields corrected]\nCHANGES:\n- Corrected certainty ratings across all commitments from null to certainty objects with rating '5' to ensure schema compliance and reflect high confidence in extraction.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "DEVIATIONS GO TO AN INTERNAL PROCESS · APPENDIX B — Deviations from restrictions and requirements in this policy shall be handled according to established SEB Group internal processes. No committee is named, no threshold is set, and nothing is said about how often this happens.",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "APPENDIX B"
      },
      {
        "condition": "A 5% FLOOR ON THE WHOLE POLICY · SECTION 4.2 — The policy covers companies with more than 5% of company revenues from activities in the fossil fuel sector, calculated at SEB Group global limit holder level. Below that line the document does not engage at all.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "SECTION 4.2"
      },
      {
        "condition": "SOME ACTIVITIES SIT OUTSIDE THE POLICY · SECTION 4.1 — Seized assets held in the ordinary course of business, client order facilitation, market making, anything SEB is obliged to provide by law or regulation, and products where another financial institution is the provider are all exempt. SEB Asset Management Holding AB and Gamla Livförsäkrings AB SEB Trygg Liv are outside the policy entirely.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": "commitment 1 only",
        "where": "SECTION 4.1"
      },
      {
        "condition": "IT BINDS LARGE COMPANIES HARDEST · SECTION 4.2 — Restrictions, requirements and expectations all apply to large companies. SMEs get restrictions and requirements only. Retail counterparties are outside the policy — it acts as a guide.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": "commitment 1 only",
        "where": "SECTION 4.2"
      }
    ],
    "general_clauses_page": null,
    "disagreements": [
      {
        "field": "weaknesses",
        "severity": "omission",
        "watchtower": "No weakness recorded on any of the twenty commitments in this run.",
        "bank_green": "Watchtower states no weakness anywhere in this synthesis. Every phrase highlighted on this page is Bank.Green's reading and is labelled as such.",
        "action": "Populate the weaknesses field. Our highlighted phrases are the proposal — the strongest candidate on this document is the three-party transition-plan condition on commitment 16."
      },
      {
        "field": "loopholes.exceptions",
        "severity": "omission",
        "watchtower": "No exception is recorded on more than one commitment. Twelve of the twenty carry none at all, and the record contains no policy-wide carve-out.",
        "bank_green": "The policy does have provisions that sit above every commitment. Appendix B routes deviations from any restriction to unnamed SEB Group internal processes. Section 4.2 applies the whole document only above 5% of company revenue from the fossil fuel sector, and excludes Retail entirely. Section 4.1 exempts seized assets, client order facilitation, market making, legally required activity, and two named asset-management entities. Watchtower attaches the section 4 items to commitment 1 only, and the Appendix B deviation clause to nothing.",
        "action": "Attach the Appendix B deviation clause and the section 4 scope provisions to every commitment, as standing exceptions."
      },
      {
        "field": "commitments",
        "severity": "omission",
        "watchtower": "Run 181 extracted twenty commitments, every one of them coal or oil and gas.",
        "bank_green": "Run 181 extracted 20 commitments, all of them coal or oil and gas. Section 9 of the policy sets out four further restrictions on thermal peat, including a 2030 phase-out. None appears in the record. The reviewer notes for this run read '0 added, 0 removed, 0 split, 20 fields corrected', so the omission was not caught in review either.",
        "action": "Re-run document 25537. Section 9 contains four restrictions on thermal peat, including a 2030 commitment."
      }
    ],
    "assessment": {
      "strength": "crushed",
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
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "Three alternative satisfiers and no quality standard is as close to an open door as this document gets.",
          "text": "This sentence restricts new gas infrastructure on a condition that is easy to meet.\n\nNew gas pipelines and storage can be financed “unless the Company, project or owner has a Transition Plan”. Any one of three parties can meet the condition. Large projects have a sponsor, a project company, an operator and often a state body. The chance that none has a transition plan is small.\n\nNo standard applies to the plan. It need not be public, checked, aligned with any climate path, time-bound, or about the asset being financed. The policy expects every fossil fuel company to have a transition plan anyway. So many will already have one.\n\nThe asset lasts forty years. The condition is met by a document."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "The oil sentence one line above has no condition at all.\n\nThat is the comparison that matters, and it sits in the same part of the policy. Same kind of asset, same kind of financing, same lock-in problem. Oil gets a ban. Gas gets a permission with a condition.\n\nAnd the gas condition is met by a document existing, not by anything in it."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "For this rule to bite, a new gas pipeline or storage project needs three parties with no transition plan. The sponsor, the project company and the owner would all have to lack one.\n\nIn European gas infrastructure, that is close to hypothetical. The companies that run gas networks publish transition plans as a matter of course. So do the utilities and funds that own them.\n\nWhat the sentence realistically excludes is a project with an owner from outside that world. That may be the intent. But it is a much smaller restriction than the wording first suggests.\n\nFor most new gas infrastructure, the answer is yes."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this document, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Say whose plan counts",
          "content": "Company, project or owner: any of the three will do. Naming one would make the condition mean something."
        },
        {
          "title": "Set a standard for the plan",
          "content": "Public, checked by an outside party, and aligned with a stated climate path. None of these is required."
        },
        {
          "title": "Deal with the asset's life",
          "content": "Gas infrastructure financed now will run past 2050. A transition plan held by its owner does not change that."
        }
      ],
      "what_needs_to_change_closing": "Until then, the condition is met by a document held by any one of three parties.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "The gate is a transition plan held by any one of three parties, with no requirement that it be public, verified or aligned to anything."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "SEB avoids dedicated finance for new gas transportation infrastructure unless there is a transition plan. We have not yet reviewed what it financed against this commitment.",
    "headline_figure": {
      "display": "Not yet checked",
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-09-28",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 181, document 25537",
    "reading": "drafted"
  }
};
