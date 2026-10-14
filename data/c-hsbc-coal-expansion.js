/* Commitment data — generated from commitments/commitment-hsbc-coal-expansion.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "hsbc-coal-expansion",
    "bank": "HSBC",
    "commitment_number": 6,
    "category": "coal",
    "effective_date": "2021-12-01",
    "title": "HSBC's Commitment on Coal Expansion",
    "short_title": "Commitment on Coal Expansion",
    "subject": null,
    "article_published": null,
    "intro": "HSBC set out this commitment in its Thermal Coal Phase-Out Policy of December 2021, in its controls on financing. HSBC says the growth of coal mining and coal power is incompatible with its goal of net zero financed emissions by 2050. So it will not provide new finance or advice for that growth.",
    "naive_reading": "it will not help any coal company grow its coal business",
    "plain_language_note": "The plain version keeps HSBC's wording. The sentence leads into a list, and only the item this commitment covers is quoted from it.",
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
        "synthesis_url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=6",
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
        "intro": "This is the sentence that sets the restriction, with the item on its list that this commitment covers.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "HSBC considers that certain activities are incompatible with HSBC’s NZ50 Target. Consequently, HSBC will not provide new finance to any client for the specific purposes of, or new advisory services in connection with, such activities. These include, but are not limited to: … thermal coal expansion;",
        "plain_rendering": "HSBC considers some activities incompatible with its goal of net zero financed emissions by 2050. So HSBC will not provide new finance to any client for the specific purposes of, or new advisory services in connection with, those activities. They include, among others, thermal coal expansion.",
        "phrases": [
          {
            "id": "specific-purposes",
            "label": "for the specific purposes of",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              143,
              171
            ],
            "plain_range": [
              149,
              177
            ],
            "means": "The words “for the specific purposes of” limit this commitment to financing labeled for the activity, such as a loan for one named project. General corporate financing, a loan to the company as a whole that it can spend on anything, has no specific purpose. Advice is covered more widely: anything “in connection with” the activity.",
            "lets_through": [
              "This wording lets through general corporate financing to a coal company that is adding mines or power capacity. The loan names no purpose, so it can pay for the growth."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "thermal-coal-expansion",
            "label": "thermal coal expansion",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              276,
              298
            ],
            "plain_range": [
              270,
              292
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "definition",
        "source_id": "tcpp2021",
        "title": "The definition of “thermal coal expansion”",
        "intro": "How HSBC's policy defines it in its glossary.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Thermal coal expansion” is set in italics in the rule. The policy says once, near the start, that italic words are defined in its glossary."
        },
        "verbatim": "Thermal coal expansion — Means: (i) for thermal coal mining, increases in total tonnage of thermal coal extracted; (ii) for coal to gas / liquid production, increases in total tonnage of thermal coal utilised; or (iii) for power, increases in net operational thermal coal power capacity, in each case where such expansion: refers to absolute global increases rather than increases for clients as a result of corporate mergers and acquisitions; and was not already either: (a) contractually committed (via power purchase agreement for coal-fired power generation); or (b) under construction, in each case before 01 January 2021; and does not include exempted activities.",
        "plain_rendering": "Thermal coal expansion means more thermal coal mined, more thermal coal turned into gas or liquid fuel, or more coal power capacity. It counts absolute global increases rather than increases for clients as a result of corporate mergers and acquisitions. Growth that was contractually committed or under construction before 1 January 2021 does not count, and nor do exempted activities.",
        "phrases": [
          {
            "id": "mergers",
            "label": "rather than increases for clients as a result of corporate mergers and acquisitions",
            "type": "narrowing_qualifier",
            "source": "watchtower_weakness",
            "watchtower_ref": "The definition permits certain pre-2021 committed or under-construction expansions and excludes merger-related increases.",
            "not_in_synthesis": false,
            "verbatim_range": [
              359,
              442
            ],
            "plain_range": [
              169,
              252
            ],
            "means": "This explains what HSBC means by “thermal coal expansion”: more coal mined, used or burned in the world, not more owned by one company. Buying another company's mines or plants is not expansion here. So this definition blocks fewer deals than the word suggests.",
            "lets_through": [
              "This wording lets through financing for a coal company to buy another company's mines or power plants. Its coal business grows, but the world's coal output does not."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "before-2021",
            "label": "contractually committed",
            "type": "narrowing_qualifier",
            "source": "watchtower_exception",
            "watchtower_ref": "Expansion excludes merger-and-acquisition-related increases, activity contractually committed or under construction before 1 January 2021, and exempted activities.",
            "not_in_synthesis": false,
            "verbatim_range": [
              476,
              499
            ],
            "plain_range": [
              270,
              293
            ],
            "means": "This explains which growth is spared: any that was signed or under construction before 1 January 2021. It stays allowed for as long as it takes to finish.",
            "lets_through": [
              "This wording lets through new mines and power capacity that were signed or being built before 2021. Large coal projects can take years to complete."
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
      "capacity-expansion",
      "corporate-finance",
      "grandfathering"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 366,
      "document_id": 16928,
      "institution": "hsbc",
      "commitment_index": 6,
      "commitment_id": "ff7d3c60-817f-5edc-9813-d950132e6693",
      "url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=6",
      "agent_name": "openai/gpt-5.6-luna",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-10-12",
      "synthesis_updated": "2026-10-12",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        7174,
        7286
      ],
      "summary_text": "HSBC will not provide new finance or advisory services for thermal coal expansion, excluding certain pre-2021 commitments, construction, and merger-related increases.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": null,
          "activity_scope": "new"
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
          "transaction_status": "new"
        }
      },
      "triggers": [],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Expansion excludes merger-and-acquisition-related increases, activity contractually committed or under construction before 1 January 2021, and exempted activities.",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": null
        }
      ],
      "weaknesses": "The definition permits certain pre-2021 committed or under-construction expansions and excludes merger-related increases.",
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
      "strength": "hollowed",
      "strength_derivation": {
        "rule": "spec v3.29 §4.1 — the gap between the naive reading and what it catches",
        "inputs_source": "Watchtower record",
        "record_score": "crushed",
        "weakness": true,
        "commitment_specific_carve_outs": 1,
        "project_finance_only": false,
        "new_business_only": true,
        "total": 3
      },
      "verdict_selected": null,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "HSBC refuses financing named for more coal mining or coal power. But a general loan can pay for the same growth, and so can growth that was signed before 2021.",
      "actual_reading": "it will not provide financing named for adding coal mining or coal power capacity, unless the growth was signed before 2021 or comes from buying another company",
      "gaps": [
        {
          "title": "General loans for the same growth",
          "text": "The restriction covers financing for the specific purpose of expansion. A general loan names no purpose, so a growing coal company can still borrow.",
          "phrase_refs": [
            "specific-purposes"
          ]
        },
        {
          "title": "Projects signed before 2021",
          "text": "Growth contracted or under construction before 2021 is not expansion. It can still be financed for as long as it takes to finish.",
          "phrase_refs": [
            "before-2021"
          ]
        },
        {
          "title": "Buying another company's coal",
          "text": "Expansion counts only new coal for the world. Buying mines or plants from another company is not covered.",
          "phrase_refs": [
            "mergers"
          ]
        }
      ],
      "in_practice": "This commitment refuses financing and advice for coal growth that is named as the purpose. It covers three kinds of growth: more coal dug, more coal turned into fuel, and more coal power capacity.\n\nTake a mining company that wants to double the output of a coal mine. A loan named for that work is refused. But a general loan to the company names no purpose, so this commitment does not cover it. The company can spend it on the same work.\n\nNow take a power company that signed a contract in 2020 to sell power from a new coal unit. That unit was contractually committed before 2021, so building it is not expansion here. HSBC can finance it for as long as construction takes.\n\nAnother case is a coal company buying another company's power plants. Its own coal business grows, but the world's coal power capacity does not, so the purchase is not expansion. HSBC can finance it.\n\nSo the restriction covers coal growth that is new to the world, contracted after 2020, and named as the purpose of the financing.",
      "gets_right": "It measures growth in physical terms, tonnes of coal and power capacity. So a change in how a company reports cannot hide expansion. It refuses advice as well as financing."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "HSBC has committed not to finance or advise on coal expansion. We have not reviewed its financing against this commitment yet.",
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
