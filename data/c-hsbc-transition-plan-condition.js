/* Commitment data — generated from commitments/commitment-hsbc-transition-plan-condition.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "hsbc-transition-plan-condition",
    "bank": "HSBC",
    "commitment_number": 17,
    "category": "coal",
    "effective_date": "2021-12-01",
    "title": "HSBC's Condition on Coal Clients' Transition Plans",
    "short_title": "Condition on Coal Clients' Transition Plans",
    "subject": null,
    "article_published": null,
    "intro": "HSBC set out this commitment in its Thermal Coal Phase-Out Policy of December 2021, in its controls on financing. It covers every coal client. A client that will not engage on its plan to move away from coal gets no new financing or advice. Nor does one whose plan does not fit HSBC's net zero goal.",
    "naive_reading": "it will cut off coal clients that have no real plan to get out of coal",
    "plain_language_note": "The promise reads plainly. What HSBC looks at when it judges a plan is set out in a separate passage.",
    "sources_intro": "One policy document states this commitment. It takes two passages from it to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "tcpp2021",
        "document_title": "HSBC Thermal Coal Phase-Out Policy",
        "document_url": null,
        "watchtower_document_id": 16928,
        "watchtower_institution": "hsbc",
        "version_label": "December 2021",
        "published": "2021-12-01",
        "published_source": null,
        "published_confidence": null,
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "synthesis_url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=17",
        "synthesis_run": 366,
        "verbatim_check": {
          "document": "16928-hsbc-thermal-coal-phase-out.md",
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
        "source_id": "tcpp2021",
        "title": "The promise",
        "intro": "This is the sentence that makes a client's transition plan a condition for new financing.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "HSBC will not provide any new financing or new advisory services to any client where the client declines to engage sufficiently on its transition plan or HSBC determines that the plan is not compatible with HSBC’s NZ50 Target.",
        "plain_rendering": "HSBC will not provide any new financing or new advisory services to a client that declines to engage sufficiently on its transition plan, or whose plan HSBC determines is not compatible with HSBC's goal of net zero financed emissions by 2050.",
        "phrases": [
          {
            "id": "engage-sufficiently",
            "label": "declines to engage sufficiently",
            "type": "undefined_term",
            "source": "watchtower_weakness",
            "watchtower_ref": "Key terms such as 'engage sufficiently' and 'compatible' are not given objective decision thresholds, leaving substantial discretion to HSBC.",
            "not_in_synthesis": false,
            "verbatim_range": [
              96,
              127
            ],
            "plain_range": [
              82,
              113
            ],
            "means": "The words “declines to engage sufficiently” refuse a client only if it will not discuss its plan enough. The policy does not say what enough means, or who decides it.",
            "lets_through": [
              "This wording lets through a client that meets HSBC and talks about a plan, whether or not the plan ever moves it away from coal."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "hsbc-determines",
            "label": "HSBC determines",
            "type": "unverifiable_metric",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              154,
              169
            ],
            "plain_range": [
              152,
              167
            ],
            "means": "The words “HSBC determines” make HSBC the only judge of whether a plan fits its net zero goal. The policy does not publish the results or say what score a plan needs.",
            "lets_through": [
              "This wording lets through any client whose plan HSBC decides is good enough, with no way for anyone outside HSBC to check the call."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "scope",
        "source_id": "tcpp2021",
        "title": "What it judges",
        "intro": "The policy lists what HSBC looks at when it judges a plan, and makes room for state-owned companies.",
        "location": {
          "distance": "nearby",
          "signposting": "none",
          "signposting_note": "Nothing in the promise points to this passage, which sits in the policy's section on client transition plans."
        },
        "verbatim": "HSBC’s assessments of clients’ transition plans will be based on factors including: level of ambition to reduce greenhouse gas emissions; clarity of transition strategy, including metrics, governance and targets; adequacy of disclosure; credibility of any proposed abatement assumptions; proposed post 2030/40 coal-fired power generation; and consideration of principles of ‘just transition’. … HSBC recognises that state-owned enterprises in markets outside the EU and OECD may be subject to different national development planning cycles and in such cases, HSBC will take those planning cycles into account where necessary.",
        "plain_rendering": "HSBC will assess clients' transition plans on factors including how ambitious the emissions cuts are, how clear the strategy is, how much is disclosed, how believable any emissions-cutting technology is, any coal power planned after 2030 or 2040, and a ‘just transition’ for workers. For state-owned companies outside the EU and OECD, HSBC will take those planning cycles into account where necessary. These are national development planning cycles.",
        "phrases": [
          {
            "id": "factors-including",
            "label": "factors including",
            "type": "unverifiable_metric",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              65,
              82
            ],
            "plain_range": [
              46,
              63
            ],
            "means": "The words “factors including” name what HSBC weighs but not how much each counts, or what result passes. The list is also open, so other factors can count too.",
            "lets_through": [
              "This wording lets through a plan that is weak on several factors, if HSBC weighs the others more."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "planning-cycles",
            "label": "take those planning cycles into account where necessary",
            "type": "escape_hatch",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              569,
              624
            ],
            "plain_range": [
              345,
              400
            ],
            "means": "This lets HSBC judge a state-owned company outside the EU and OECD by its country's own planning timetable. HSBC decides when that is necessary.",
            "lets_through": [
              "This wording lets through a state-owned coal company whose plan follows a slower national timetable."
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
      "transition-plan"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 366,
      "document_id": 16928,
      "institution": "hsbc",
      "commitment_index": 17,
      "commitment_id": "f730bcf9-1b91-5c6f-b0c0-2a94874d3029",
      "url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=17",
      "agent_name": "openai/gpt-5.6-luna",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-10-12",
      "synthesis_updated": "2026-10-12",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        8515,
        8749
      ],
      "summary_text": "HSBC will not provide new financing or advisory services to existing clients that do not engage sufficiently on transition plans or whose plans HSBC finds incompatible with its net-zero target.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": null,
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": "existing",
          "certainty": "4"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new"
        }
      },
      "triggers": [],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [],
      "weaknesses": "Key terms such as 'engage sufficiently' and 'compatible' are not given objective decision thresholds, leaving substantial discretion to HSBC.",
      "reviewer_notes": "STATS: 8 added, 0 removed, 2 split, 20 fields corrected\nCHANGES:\n- Split the headline phase-out into separate coal-fired-power and thermal-coal-mining commitments for each geographic/timing rule because the activities have different value-chain positions.\n- Corrected the phase-out commitments' value-chain classifications and removed the mistaken 'existing' relationship/transaction classifications from the 2040 rule; remaining exposure does not expressly establish those schema statuses.\n- Split the captive thermal coal plant and captive thermal coal mine restriction because they are distinct downstream and upstream commitments. Corrected both to financing_type 'project' and omitted capital_markets, relationship_status, and transaction_status as required for project financing.\n- Corrected the broad new-thermal-coal-assets commitment to avoid incorrectly assigning it only to downstream activity.\n- Removed the phase-out geographic continuation from the exceptions array; it defines the separate 2040 scope rather than an exception to the commitment.\n- Set governance_process to false for emissions-reduction, retrofit, and transition-purpose exceptions because the cited text does not invoke a formal committee or approval process.\n- Retained the EDD commitments as screening commitments rather than restrictions because EDD and committee approval do not mandate rejection.\n- Corrected misconception indices to reflect the added and split commitments.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "SERVICES OUTSIDE “FINANCE” · Glossary — “finance” covers project finance, direct lending, and arranging or underwriting capital markets transactions; nothing else the bank provides is restricted.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "Glossary"
      },
      {
        "condition": "CLIENT GROUPS, TO THE EXTENT APPROPRIATE · Scope and Definitions — HSBC takes a client group's activities into account and applies the policy “to the extent appropriate” in light of the group's structure and governance.",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "Scope and Definitions"
      },
      {
        "condition": "EXEMPTED ACTIVITIES · Scope and Definitions, Glossary — the policy does not apply to clients engaged in captive coal plants and mines, coal services, metallurgical coal, underground coal gasification, and “all other activities of clients”; new captive plants and mines stay in.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "Scope and Definitions; Glossary"
      },
      {
        "condition": "OTHER PARTS OF HSBC · Scope and Definitions — other HSBC businesses, including asset management, “will seek to implement policies” supporting the 2030/40 timelines, unless that conflicts with fiduciary or other regulatory obligations.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "Scope and Definitions"
      },
      {
        "condition": "HSBC'S DISCRETION AND RIGHT TO AMEND · Important notice — HSBC uses information “in its sole discretion” for its assessments, and may amend the policy at any time without giving a reason.",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "Important notice"
      }
    ],
    "general_clauses_page": {
      "url": "general-clauses-hsbc.html",
      "title": "The clauses that apply to every HSBC commitment",
      "selected_for_publication": false
    },
    "disagreements": [
      {
        "field": "loopholes.exceptions",
        "severity": "omission",
        "watchtower": "The record carries none of the policy's document-wide provisions as an exception on any commitment.",
        "bank_green": "The definition of finance leaves out every service but project finance, direct lending and capital markets work; the policy does not apply to clients engaged in exempted activities, including captive coal and coal services; group activities count only to the extent HSBC finds appropriate; and HSBC may amend the policy at any time. Each reaches every commitment.",
        "action": "Record each as a standing exception on every commitment."
      }
    ],
    "assessment": {
      "strength": "crushed",
      "strength_derivation": {
        "rule": "spec v3.29 §4.1 — the gap between the naive reading and what it catches",
        "inputs_source": "Watchtower record",
        "record_score": "hollowed",
        "weakness": true,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": false,
        "new_business_only": true,
        "total": 2
      },
      "verdict_selected": null,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Whether a client keeps its financing turns on HSBC's own reading of its plan. The policy sets no pass mark and publishes no results.",
      "actual_reading": "it will refuse new financing to a coal client only if the client will not discuss its plan, or HSBC decides the plan falls short",
      "gaps": [
        {
          "title": "Talking about a plan is enough",
          "text": "A client is refused only if it declines to engage sufficiently. One that meets HSBC and discusses a plan passes that test.",
          "phrase_refs": [
            "engage-sufficiently"
          ]
        },
        {
          "title": "HSBC judges, with no pass mark",
          "text": "HSBC decides whether a plan fits its goal. The factors have no weights, and the results are not published.",
          "phrase_refs": [
            "hsbc-determines",
            "factors-including"
          ]
        },
        {
          "title": "Slower timetables for state companies",
          "text": "State-owned companies outside the EU and OECD can be judged against their country's own planning cycle.",
          "phrase_refs": [
            "planning-cycles"
          ]
        }
      ],
      "in_practice": "This commitment makes a coal client's transition plan a condition for new financing. A transition plan is a company's own plan for cutting its emissions and moving away from coal.\n\nTake a coal power company that refuses to discuss any plan with HSBC. It gets no new financing or advice. That is the clear case this commitment catches.\n\nNow take one that meets HSBC, shares a plan, and keeps its coal plants running until 2040. Whether that plan fits HSBC's net zero goal is HSBC's call alone. The policy lists what HSBC looks at, but gives no weights and no pass mark. The results are not published, so nobody outside HSBC can tell how the plan was judged.\n\nIf the company is state-owned and outside the EU and OECD, HSBC can also take its country's planning cycle into account. So a slower plan can still pass.\n\nSo the commitment refuses clients that will not talk about a plan. Every other case turns on HSBC's own judgment."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "HSBC has committed to stop new financing to coal clients without an acceptable transition plan. We have not reviewed its financing against this commitment yet.",
    "headline_figure": {
      "display": null,
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-10-13",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 366, document 16928",
    "reading": "drafted"
  }
};
