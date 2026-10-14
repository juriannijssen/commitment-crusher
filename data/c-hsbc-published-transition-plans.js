/* Commitment data — generated from commitments/commitment-hsbc-published-transition-plans.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "hsbc-published-transition-plans",
    "bank": "HSBC",
    "commitment_number": 22,
    "category": "coal",
    "effective_date": "2021-12-01",
    "title": "HSBC's Expectation That Coal Clients Publish Plans",
    "short_title": "Expectation That Coal Clients Publish Plans",
    "subject": null,
    "article_published": null,
    "intro": "HSBC set out this commitment in its Thermal Coal Phase-Out Policy of December 2021, in its section on client transition plans. HSBC will work with its coal clients. It expects each of them to publish a plan that fits HSBC's net zero goal by the end of 2023.",
    "naive_reading": "it will make its coal clients publish plans for moving away from coal",
    "plain_language_note": "The promise is one sentence. The deadline, the exceptions, and what happens to a client with no plan are in the same section.",
    "sources_intro": "One policy document states this commitment. It takes three passages from it to see what it covers.",
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
        "synthesis_url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=22",
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
        "intro": "This is the sentence that opens the policy's section on client transition plans.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "HSBC will engage with clients and will expect them to formulate and publish transition plans that are compatible with HSBC’s NZ50 Target.",
        "plain_rendering": "HSBC will engage with clients and will expect them to formulate and publish transition plans that fit HSBC's goal of net zero financed emissions by 2050.",
        "phrases": [
          {
            "id": "expect",
            "label": "will expect",
            "type": "narrowing_qualifier",
            "source": "watchtower_weakness",
            "watchtower_ref": "The policy uses expectation-based language and permits case-by-case exceptions to publication and disclosure requirements.",
            "not_in_synthesis": false,
            "verbatim_range": [
              34,
              45
            ],
            "plain_range": [
              34,
              45
            ],
            "means": "The words “will expect” state what HSBC hopes for, not a condition a client must meet. Nothing in this sentence says what happens if a client does not publish a plan.",
            "lets_through": [
              "This wording lets through a client that never publishes a plan, unless HSBC acts on it some other way."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "condition",
        "source_id": "tcpp2021",
        "title": "The deadline",
        "intro": "The same section gives a date for publishing the plans, and says who can be excused.",
        "location": {
          "distance": "nearby",
          "signposting": "none",
          "signposting_note": "Nothing in the promise points to this passage, which comes later in the same section."
        },
        "verbatim": "Given the importance of coal transition to the achievement of global climate ambitions, HSBC would expect its clients to publish their transition plans by the end of 2023. HSBC also expects clients to provide regular (usually annual) detailed disclosures to HSBC regarding the implementation of their transition plans. Exceptions in relation to publication and disclosure requirements will be considered by HSBC on a case by case basis (for example, taking into consideration the national climate plans of the markets in which the client operates).",
        "plain_rendering": "HSBC would expect its clients to publish their transition plans by the end of 2023, and to report to HSBC, usually once a year, on how they are carrying them out. Exceptions to these publication and disclosure requirements will be considered by HSBC on a case by case basis, for example in light of a country's national climate plans.",
        "phrases": [
          {
            "id": "would-expect",
            "label": "would expect",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              93,
              105
            ],
            "plain_range": [
              5,
              17
            ],
            "means": "The words “would expect” soften the deadline further. The end of 2023 is when HSBC hoped to see plans published, not a date after which anything follows.",
            "lets_through": [
              "This wording lets through a client that has not published its plan years after the date."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "case-by-case",
            "label": "case by case basis",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "Exceptions to publication and disclosure requirements may be considered case by case.",
            "not_in_synthesis": false,
            "verbatim_range": [
              417,
              435
            ],
            "plain_range": [
              255,
              273
            ],
            "means": "This lets HSBC excuse a client from publishing or reporting, one client at a time. A country's national climate plan is one reason it gives, and the list is open.",
            "lets_through": [
              "This wording lets through a client whose plan stays private, if HSBC accepts its reason."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 3,
        "role": "condition",
        "source_id": "tcpp2021",
        "title": "The consequence",
        "intro": "The same section says what HSBC will do about a client that produces no plan at all.",
        "location": {
          "distance": "nearby",
          "signposting": "none",
          "signposting_note": "Nothing in the promise points to this passage, which sits earlier in the same section."
        },
        "verbatim": "Clearly, if no transition plans are produced, HSBC will need to formally assess whether we continue to provide financing for that client, as there will be no basis on which to assess progress towards the bank’s commitment to phase out thermal coal financing by 2030 in EU/OECD markets and by 2040 in non-EU/OECD markets.",
        "plain_rendering": "If a client produces no transition plan, HSBC will need to formally assess whether we continue to provide financing for it, because HSBC would have no basis for judging its progress toward the 2030 and 2040 phase-out dates.",
        "phrases": [
          {
            "id": "formally-assess",
            "label": "formally assess whether we continue",
            "type": "escape_hatch",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              64,
              99
            ],
            "plain_range": [
              59,
              94
            ],
            "means": "The words “formally assess whether we continue” promise a review of a client with no plan, not an end to its financing. The review can decide to keep financing it.",
            "lets_through": [
              "This wording lets through continued financing to a client with no plan at all, if HSBC's review decides to keep it."
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
      "transition-plan",
      "phase-out"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 366,
      "document_id": 16928,
      "institution": "hsbc",
      "commitment_index": 22,
      "commitment_id": "6ce979c9-5b81-54ea-92ce-a4f3d3b38e7e",
      "url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=22",
      "agent_name": "openai/gpt-5.6-luna",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-10-12",
      "synthesis_updated": "2026-10-12",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        4235,
        4374
      ],
      "summary_text": "HSBC expects clients to formulate and publish transition plans compatible with its net-zero target and uses those plans in financing assessments.",
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
          "relationship_status": "new_and_existing",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new_and_existing"
        }
      },
      "triggers": [],
      "commitment_type": "screening",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Exceptions to publication and disclosure requirements may be considered case by case.",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": true,
          "standing": false,
          "where": null
        }
      ],
      "weaknesses": "The policy uses expectation-based language and permits case-by-case exceptions to publication and disclosure requirements.",
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
        "commitment_specific_carve_outs": 1,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 2
      },
      "verdict_selected": null,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "HSBC expects plans to be published but does not require it. Any client can be excused, and one with no plan at all faces only a review.",
      "actual_reading": "it will ask its coal clients to publish plans, excuse any it chooses, and review those that produce none",
      "gaps": [
        {
          "title": "An expectation, not a requirement",
          "text": "“Will expect” and “would expect” describe a hope. The 2023 date has no consequence attached.",
          "phrase_refs": [
            "expect",
            "would-expect"
          ]
        },
        {
          "title": "Excused one by one",
          "text": "HSBC can excuse any client from publishing or reporting, case by case, for reasons it accepts.",
          "phrase_refs": [
            "case-by-case"
          ]
        },
        {
          "title": "No plan means a review",
          "text": "A client with no plan at all is assessed, not dropped. The assessment can decide to keep it.",
          "phrase_refs": [
            "formally-assess"
          ]
        }
      ],
      "in_practice": "A published transition plan lets anyone check what a coal company says it will do, and when. This commitment says HSBC will work with its coal clients and expects them to publish such plans.\n\nThe wording stops at expecting. The policy gave the end of 2023 as the date, but no consequence comes with it. A client that has still not published a plan has not broken anything HSBC requires.\n\nHSBC can also excuse a client from publishing, case by case. One example it gives is a country whose national climate plan runs on a different timetable. The list of reasons is open, so others can count.\n\nTake a coal power company that produces no plan at all. HSBC says it will then formally assess whether to keep financing it. That is a review, and a review can end with the financing continuing.\n\nSo the commitment asks for published plans, and leaves every outcome to HSBC."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "HSBC has said it expects its coal clients to publish transition plans. We have not reviewed its financing against this commitment yet.",
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
