/* Commitment data — generated from commitments/commitment-hsbc-coal-phase-out-rest-of-world.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "hsbc-coal-phase-out-rest-of-world",
    "bank": "HSBC",
    "commitment_number": 3,
    "category": "coal",
    "effective_date": "2040-12-31",
    "title": "HSBC's 2040 Coal Phase-out Outside the EU and OECD",
    "short_title": "2040 Coal Phase-out Outside the EU and OECD",
    "subject": null,
    "article_published": null,
    "intro": "HSBC's shareholders approved this commitment at the bank's 2021 Annual General Meeting. HSBC set it out in its Thermal Coal Phase-Out Policy of December 2021. It covers coal clients in every market outside the EU and OECD. HSBC promises that any thermal coal financing left there will be phased out by 2040.",
    "naive_reading": "it is getting out of financing coal power and coal mining in the rest of the world",
    "plain_language_note": "The promise is plain. What counts as a coal asset is in the glossary, and how fast the financing runs down is set in a later passage.",
    "sources_intro": "One policy document states this commitment, and it takes three passages from it to see what it covers.",
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
        "synthesis_url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=3",
        "synthesis_run": 366,
        "verbatim_check": {
          "document": "16928-hsbc-thermal-coal-phase-out.md",
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
        "source_id": "tcpp2021",
        "title": "The promise",
        "intro": "This is the sentence that says what happens to coal financing after 2030, and where it can still be found.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Any remaining thermal coal financing exposure after 2030 will only relate to clients with thermal coal assets outside EU and OECD markets and will be phased out by 2040.",
        "plain_rendering": "After 2030, any remaining thermal coal financing exposure will only relate to clients with thermal coal assets outside EU and OECD markets, and will be phased out by 2040.",
        "phrases": [
          {
            "id": "exposure",
            "label": "thermal coal financing exposure",
            "type": "unverifiable_metric",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              14,
              45
            ],
            "plain_range": [
              26,
              57
            ],
            "means": "This explains what is phased out: “exposure”, the amount HSBC has lent or committed to coal clients. The policy does not give a figure for it, or say which loans and services count.",
            "lets_through": [
              "This wording lets through a run-down that nobody outside HSBC can follow, because neither the starting amount nor the method is in the policy."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "thermal-coal-assets",
            "label": "thermal coal assets",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              90,
              109
            ],
            "plain_range": [
              91,
              110
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "by-2040",
            "label": "will be phased out by 2040",
            "type": "narrowing_qualifier",
            "source": "watchtower_weakness",
            "watchtower_ref": "The policy does not specify the precise transaction-level steps or consequences for remaining exposure during the run-down period.",
            "not_in_synthesis": false,
            "verbatim_range": [
              142,
              168
            ],
            "plain_range": [
              144,
              170
            ],
            "means": "This explains when financing outside the EU and OECD has to end: by 2040, ten years after the date for the EU and OECD. The sentence sets no steps on the way.",
            "lets_through": [
              "This wording lets through financing at any level until the end of 2040. A coal client in these markets can keep borrowing from HSBC for years before anything has to change."
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
        "source_id": "tcpp2021",
        "title": "The definition of “thermal coal assets”",
        "intro": "How HSBC's policy defines it in its glossary.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Thermal coal assets” is set in italics in the rule. The policy says once, near the start, that italic words are defined in its glossary."
        },
        "verbatim": "Thermal coal assets / new thermal coal assets — thermal coal mines, thermal coal-fired power plants and coal to gas / liquids plants. … The terms thermal coal assets and new thermal coal assets do not include exempted activities.",
        "plain_rendering": "Thermal coal assets are thermal coal mines, thermal coal-fired power plants and coal to gas / liquids plants. The terms do not include exempted activities.",
        "phrases": [
          {
            "id": "exempted",
            "label": "exempted activities",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              209,
              228
            ],
            "plain_range": [
              135,
              154
            ],
            "means": "This explains what HSBC means by “thermal coal assets”: mines, power stations, and plants that turn coal into gas or liquid fuel. It then takes out “exempted activities”, a list HSBC keeps in its glossary. So the phase-out blocks less than the words suggest.",
            "lets_through": [
              "This wording lets through captive coal plants, which are power plants built to supply one factory such as an aluminum smelter. The mines that feed them get through too.",
              "It also lets through companies that trade, ship or process coal, or build and service the sites where coal is dug and burned."
            ],
            "defined_in_clause": null,
            "bank_definition": {
              "quote": "Exempted activities — Means the following: captive thermal coal-fired power plants; captive thermal coal mines; thermal coal services; metallurgical coal activities and mines; underground coal gasification (coal bed methane); and all other activities of clients.",
              "source_id": "tcpp2021"
            }
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "narrower"
      },
      {
        "index": 3,
        "role": "condition",
        "source_id": "tcpp2021",
        "title": "The pace",
        "intro": "The policy also says how coal financing outside the EU and OECD will shrink before the end date, and what decides it.",
        "location": {
          "distance": "later_in_document",
          "signposting": "none",
          "signposting_note": "Nothing in the promise points to this passage, which sits among the policy's controls on financing."
        },
        "verbatim": "For non-EU/OECD markets, HSBC is not setting materiality thresholds, as we will evaluate the detail of the transition plans our clients produce and their alignment to HSBC’s commitment to have a net zero aligned portfolio of financed emissions by 2050. HSBC’s run down trajectory in non-EU/OECD markets will be guided by these plans and will be consistent with an end date of 2040.",
        "plain_rendering": "Outside the EU and OECD, HSBC is not setting materiality thresholds. It will evaluate the transition plans its clients produce, and how they fit HSBC's goal of net zero financed emissions by 2050. HSBC's run-down in these markets will be guided by these plans and will be consistent with an end date of 2040.",
        "phrases": [
          {
            "id": "no-thresholds",
            "label": "not setting materiality thresholds",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              33,
              67
            ],
            "plain_range": [
              33,
              67
            ],
            "means": "The words “not setting materiality thresholds” mean that no share of coal revenue cuts a client off. That holds outside the EU and OECD, however much of a client's business is coal.",
            "lets_through": [
              "This wording lets through new financing to an existing client that earns most of its revenue from coal, if its transition plan satisfies HSBC."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "guided",
            "label": "guided by these plans",
            "type": "escape_hatch",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              311,
              332
            ],
            "plain_range": [
              238,
              259
            ],
            "means": "The words “guided by these plans” tie the pace of the run-down to what each client says it will do. HSBC names no yearly steps of its own.",
            "lets_through": [
              "This wording lets through a run-down that stays flat for years, if a client's plan only cuts coal near the end."
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
      "phase-out",
      "eu",
      "oecd",
      "exposure",
      "transition-plan",
      "rest-of-world"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 366,
      "document_id": 16928,
      "institution": "hsbc",
      "commitment_index": 3,
      "commitment_id": "b40f9eca-73e2-517c-82d1-1a2f15fce505",
      "url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=3",
      "agent_name": "openai/gpt-5.6-luna",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-10-12",
      "synthesis_updated": "2026-10-12",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        3767,
        3942
      ],
      "summary_text": "HSBC will phase out remaining financing for thermal coal-fired power outside EU/OECD markets by 2040.",
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
          "relationship_status": "new_and_existing",
          "certainty": "4"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new_and_existing"
        }
      },
      "triggers": [],
      "commitment_type": "phase_out",
      "effective_date": "2040",
      "exceptions": [],
      "weaknesses": "The policy does not specify the precise transaction-level steps or consequences for remaining exposure during the run-down period.",
      "reviewer_notes": "STATS: 8 added, 0 removed, 2 split, 20 fields corrected\nCHANGES:\n- Split the headline phase-out into separate coal-fired-power and thermal-coal-mining commitments for each geographic/timing rule because the activities have different value-chain positions.\n- Corrected the phase-out commitments' value-chain classifications and removed the mistaken 'existing' relationship/transaction classifications from the 2040 rule; remaining exposure does not expressly establish those schema statuses.\n- Split the captive thermal coal plant and captive thermal coal mine restriction because they are distinct downstream and upstream commitments. Corrected both to financing_type 'project' and omitted capital_markets, relationship_status, and transaction_status as required for project financing.\n- Corrected the broad new-thermal-coal-assets commitment to avoid incorrectly assigning it only to downstream activity.\n- Removed the phase-out geographic continuation from the exceptions array; it defines the separate 2040 scope rather than an exception to the commitment.\n- Set governance_process to false for emissions-reduction, retrofit, and transition-purpose exceptions because the cited text does not invoke a formal committee or approval process.\n- Retained the EDD commitments as screening commitments rather than restrictions because EDD and committee approval do not mandate rejection.\n- Corrected misconception indices to reflect the added and split commitments.",
      "not_in_synthesis_note": null,
      "also_covers": [
        {
          "commitment_index": 4,
          "commitment_id": "ba195e7a-9566-58db-9183-593010b688e4",
          "url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=4"
        }
      ]
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
      "strength": "hollowed",
      "strength_derivation": {
        "rule": "spec v3.29 §4.1 — the gap between the naive reading and what it catches",
        "inputs_source": "Watchtower record",
        "record_score": "hollowed",
        "weakness": true,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 1
      },
      "verdict_selected": null,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "It does set an end date, but 2040 is far off and the pace until then follows each client's own plan. Captive coal plants and the companies that trade coal are not covered.",
      "actual_reading": "it is ending its financing to coal plants and mines outside the EU and OECD by 2040, at a pace set by its clients' own plans",
      "gaps": [
        {
          "title": "A pace set by the clients",
          "text": "There is no share of coal revenue that cuts a client off before 2040. How fast financing falls depends on the client's transition plan, as HSBC reads it.",
          "phrase_refs": [
            "no-thresholds",
            "guided",
            "by-2040"
          ]
        },
        {
          "title": "Captive plants and the coal trade",
          "text": "Power plants built for one factory, and companies that trade, ship or process coal, are not “thermal coal assets”. Their financing is not phased out.",
          "phrase_refs": [
            "exempted"
          ]
        }
      ],
      "in_practice": "This commitment covers most of the world's coal, because most of it is mined and burned outside the EU and OECD. It promises that HSBC's coal financing in those markets ends by 2040.\n\nTake a power company in Indonesia that runs coal plants and earns most of its revenue from them. HSBC sets no share of coal revenue that would end its new financing. Instead, HSBC reads the company's transition plan and lets that plan guide the pace. If the plan keeps the plants running until the late 2030s, HSBC's financing can follow it.\n\nNow take a nickel smelter in the same country with its own coal power plant. That plant is captive: built to supply one factory. Captive plants are an exempted activity, so they are not “thermal coal assets”, and the phase-out does not cover their financing. The same is true of a company that ships or trades coal.\n\nThe amount being phased out is “exposure”, and the policy gives no figure for it. So a reader cannot follow the run-down year by year.\n\nBy the end of 2040, financing for coal power plants and coal mines should be gone everywhere. Until then, the pace is the clients' own.",
      "gets_right": "There is a date, and it applies to every market outside the EU and OECD. The commitment covers lending, bond sales and project loans, and HSBC says what it weighs when it reads a client's plan."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "HSBC has committed to phase out its coal financing outside the EU and OECD by 2040. We have not reviewed its financing against this commitment yet.",
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
