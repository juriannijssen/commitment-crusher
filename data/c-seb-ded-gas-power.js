/* Commitment data — generated from commitments/commitment-seb-ded-gas-power.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "seb-ded-gas-power",
    "bank": "SEB Group",
    "commitment_number": 20,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's Conditions on New Gas-Fired Power",
    "short_title": "Conditions on New Gas-Fired Power",
    "article_published": "2026-09-09",
    "intro": "SEB sets out these conditions in its Sector Policy on Fossil Fuels, published in April 2026. New gas-fired power is financeable if the project has a plan to move to low-carbon gases and meets EU best-available-technique emission levels — with separate rules for combined heat and power and for peaking plant.",
    "naive_reading": "it will not finance new gas-fired power stations",
    "plain_language_note": "The most conditional sentence in the document, and the only one with a number in grams.",
    "sources_intro": "One policy document states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=20",
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
        "intro": "SEB sets requirements for dedicated financing of new gas-fired power projects. It is written as a set of conditions, not a ban.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "For Dedicated Finance of New gas fired power generation Projects, SEB Group Requires projects to: have a plan to transition to low carbon or renewable gases, be aligned with the emission levels set out in the latest best available techniques (BAT) conclusion.",
        "plain_rendering": "For Dedicated Finance of New gas fired power generation Projects, SEB Group Requires projects to: have a plan to transition to low carbon or renewable gases, and be aligned with the emission levels set out in the latest best available techniques (BAT) conclusion.",
        "phrases": [
          {
            "id": "see-dedicated-finance",
            "label": "Dedicated Finance",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              4,
              21
            ],
            "plain_range": [
              4,
              21
            ],
            "means": "“Dedicated Finance” is financing for a named purpose, where SEB knows what it pays for. The conditions in this commitment apply only to that kind of financing. A loan to the company as a whole names no purpose, so it is not covered.",
            "lets_through": [
              "This wording lets through general-purpose financing — a loan to the company as a whole, which does not say what it pays for.",
              "A power company can borrow this way from SEB for a new gas power plant that meets none of the conditions."
            ],
            "defined_in_clause": null,
            "bank_definition": {
              "quote": "Dedicated Finance — Where the financing is channelled to a specified use of proceeds.",
              "source_id": "seb2026"
            }
          },
          {
            "id": "see-new-project",
            "label": "New gas fired power generation Projects",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              25,
              64
            ],
            "plain_range": [
              25,
              64
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "plan20",
            "label": "have a plan to transition to low carbon or renewable gases",
            "type": "escape_hatch",
            "verbatim_range": [
              98,
              156
            ],
            "plain_range": [
              98,
              156
            ],
            "means": "This explains the first condition: a plan to switch the plant to hydrogen, biomethane or another low-carbon gas at some future point.",
            "lets_through": [
              "This wording lets through plants that never switch. The condition is satisfied by having a plan, and nothing in the policy requires the plan to have a date, a cost, a committed supply of low-carbon gas, or any consequence for not delivering.",
              "It also ignores the economics as they actually stand. Low-carbon gas at power-station scale is scarce and expensive, so a plan is cheap to write and hard to execute — which is precisely why the condition needs teeth."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "bat20",
            "label": "aligned with the emission levels set out in the latest best available techniques (BAT) conclusion",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              161,
              258
            ],
            "plain_range": [
              165,
              262
            ],
            "means": "This explains the second condition, and a real one: BAT conclusions are published EU reference documents with numeric emission levels attached.",
            "lets_through": [
              "This wording lets through little on its own terms: this is a genuine external standard rather than a self-assessment.",
              "But BAT levels govern air pollutants and efficiency, not carbon budgets. A gas plant can be fully BAT-compliant and still be incompatible with a 1.5°C pathway."
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
            "means": "This definition of “New Project” is broader than what it usually means. By a new project we normally mean something built from scratch. SEB also counts capacity expansions, and any existing operation undergoing a material change in what it produces or does. So enlarging or converting an existing gas power plant counts too, and the rule blocks more.",
            "lets_through": [
              "This wording lets through changes to an existing gas power plant that SEB does not judge “material”. The policy gives no measure."
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
      "downstream",
      "power-generation",
      "transition-plan",
      "bat",
      "gas-lock-in"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 181,
      "document_id": 25537,
      "institution": "seb_group",
      "commitment_index": 20,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=20",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-09",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        16767,
        17031
      ],
      "summary_text": "SEB Group restricts dedicated project finance for new gas-fired power generation projects unless they have a transition plan to renewable gases and align with BAT emission levels, with specific rules for CHP and peak load balancing.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "downstream",
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
          "condition": "For combined heat and power: lifecycle emissions below 100 gCO2e/kWh, or, until 2030, below 270 gCO2e/kWh supported by enhanced due diligence",
          "carve_out_kind": null,
          "carve_out_kind_source": null,
          "governance_process": null,
          "standing": false,
          "where": "recorded on this commitment only"
        },
        {
          "condition": "For gas fired electricity generation for peak load or balancing: intended to operate only during peak demand",
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
      "strength": "hollowed",
      "strength_derivation": {
        "rule": "spec v3.29 §4.1 — the gap between the naive reading and what it catches",
        "inputs_source": "Watchtower record",
        "record_score": "hollowed",
        "weakness": false,
        "commitment_specific_carve_outs": 2,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 2
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "The section pairs a genuine external standard with a condition that has nothing behind it, and the weak half is the one that decides whether the plant gets built.",
          "text": "The emissions standard is real. The transition plan condition is not.\n\nNew gas power can be financed if the project has “a plan to transition to low carbon or renewable gases”. There is no date, no cost, no secured supply and no consequence for failing. Low-carbon gas at power-station scale is scarce and costly. That is exactly why a plan is cheap to write and hard to carry out.\n\nThe second condition is better. It asks for the emission levels in the EU's latest best available techniques, a published document with numbers in it. But it covers air pollution and efficiency, not carbon limits. A plant can fully meet it and still not fit a 1.5°C path.\n\nAn exception also allows plants “intended to operate only during peak demand”. That intention is stated once, and nothing checks it afterwards."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "This section cites an outside standard, and puts a number in grams.\n\nThe EU's best available techniques are published, updated and set independently. They are not a bank's own judgement. The exception for plants that make both heat and power is limited to lifetime emissions below 100 grams of CO2 per kilowatt-hour. Until 2030, it is 270 grams, with extra checks. Those are real limits a project either meets or does not.\n\nWhatever the criticism of the transition plan condition, the drafting here is strong."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Read it against the peat power rule, and the same bank bans one fuel outright and allows another on conditions.\n\nNew peat-fired power: no dedicated financing, full stop. New gas power: can be financed with a plan, a pollution standard and, for plants that run at peak times, an intention.\n\nPeat puts out more carbon per unit of energy than coal, so ranking it worse is defensible. But new gas plants financed now lock in far more emissions overall. And gas is the one that got the gentler treatment.\n\nThe order is right fuel by fuel. It is wrong on the scale of what gets built."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this document, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Give the transition plan a deadline",
          "content": "A plan with no date is a document. A plan with a date is a commitment."
        },
        {
          "title": "Add a carbon test alongside the EU standard",
          "content": "The EU standard covers pollution and efficiency. The heat and power exception already uses grams of CO2 per kilowatt-hour; the main rule could too."
        },
        {
          "title": "Limit the peak-demand exception",
          "content": "“Intended to operate only during peak demand” is an intention stated once, with nothing checking it afterwards."
        }
      ],
      "what_needs_to_change_closing": "Until then, a new gas plant can be financed with a plan, a pollution standard and a stated intention.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "BAT is a genuine external standard and bites. The switching condition is satisfied by holding a plan, and nothing requires the switch."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "SEB requires new gas-fired power projects to have a transition plan and meet BAT emission levels. We have not yet reviewed what it financed against this commitment.",
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
