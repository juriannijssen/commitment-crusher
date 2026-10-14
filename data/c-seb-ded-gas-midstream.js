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
    "intro": "SEB sets out this restriction in its Sector Policy on Fossil Fuels, published in April 2026. SEB can finance new gas pipelines and storage if someone connected to the project has a transition plan: the company, the project, or the owner.",
    "naive_reading": "it will not finance new gas pipelines and terminals",
    "plain_language_note": "A condition with three ways to meet it, and no test of how good the plan is.",
    "sources_intro": "This restriction comes from a single policy document, and we quote one passage from it below.",
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
        "intro": "This is where SEB Group sets out this commitment.",
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
            "means": "“Dedicated Finance” is financing for a named purpose, where SEB knows what it pays for. This commitment covers only that kind of financing, so a loan to the company as a whole, which names no purpose, is not covered.",
            "lets_through": [
              "This wording lets through general-purpose financing — a loan to the company as a whole, which does not say what it pays for.",
              "A pipeline company can borrow this way from SEB and spend the loan on a new gas pipeline or storage site. No transition plan is needed."
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
            "means": "This explains the condition that switches this commitment off: it is enough for any one of three parties to have a transition plan.",
            "lets_through": [
              "This wording lets through almost every sponsor. Because the plan can sit with any of three parties, the test is met if one of them has one. Large infrastructure projects have several parties attached.",
              "It also lets through any kind of plan. The policy does not say the plan must be public, checked by anyone outside the company, or related to the asset being financed."
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
        "intro": "SEB's policy defines this term in its list of definitions.",
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
            "means": "This definition of “New Project” follows a standard framework. The Equator Principles, a risk framework many banks follow, count an expansion or upgrade of an existing operation as a project. SEB also counts capacity expansions, and any existing operation undergoing a material change in what it produces or does. So enlarging or converting an existing gas pipeline or storage site counts too, and the rule blocks more.",
            "lets_through": [
              "This wording lets through changes to an existing gas pipeline or storage site that SEB does not judge “material.” The policy gives no measure."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "ordinary_source": [
              {
                "body": "Equator Principles Association",
                "title": "The Equator Principles (EP4), Glossary",
                "term": "Project",
                "url": "https://equator-principles.com/app/uploads/The-Equator-Principles_EP4_July2020.pdf#page=31"
              }
            ]
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
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "SEB refuses a new gas pipeline or storage site only if none of three parties has a transition plan. Large projects have several parties, so one of them usually has one.",
      "actual_reading": "it will not give financing set aside for new gas pipelines and storage sites where none of the company, the project, or its owner has a transition plan",
      "gaps": [
        {
          "title": "Any one of three parties will do",
          "phrase_refs": [
            "unless16"
          ],
          "text": "The company, the project, or the owner can hold the transition plan. Large gas projects have several parties behind them, so the condition is easy to meet."
        },
        {
          "title": "No test of the plan itself",
          "phrase_refs": [
            "unless16"
          ],
          "text": "The policy does not say the plan must be public, checked by anyone outside the company, or about the asset being built. Having one is enough."
        },
        {
          "title": "Loans to the company, not the project",
          "phrase_refs": [
            "see-dedicated-finance"
          ],
          "text": "“Dedicated Finance” is financing for a named use. A pipeline company can take a general loan and build the pipeline with it, and the condition never comes up."
        }
      ],
      "in_practice": "A new gas pipeline has several parties behind it: a company that builds it, a project company that holds it, and one or more owners. If any one of them has a transition plan, SEB can give financing labeled for the pipeline.\n\nA transition plan is a company's written strategy for moving toward a low-carbon economy. The policy does not say the plan must be public or checked by anyone outside the company. It does not say the plan must cover the pipeline being built. So a pipeline can be financed on the strength of its owner's plan for its other businesses.\n\nThere is also a way around the label. “Dedicated Finance” is financing for a named use. A pipeline company can take a general loan from SEB and spend it on a new pipeline or storage site. That loan names no purpose, so the condition never comes up.\n\nGas pipelines and storage sites are built to run for decades. Nothing in this commitment looks at how long the asset will run, or how much gas it will carry.\n\nSo what is left is a new gas project where no party has a plan, financed with a loan that names it. That is a small group."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "SEB avoids dedicated finance for new gas transportation infrastructure unless there is a transition plan. We have not reviewed its financing against this commitment yet.",
    "headline_figure": {
      "display": "Not yet checked",
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-10-02",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 181, document 25537",
    "reading": "drafted"
  }
};
