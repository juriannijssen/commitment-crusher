/* Commitment data — generated from commitments/commitment-hsbc-exit-coal-expanders.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "hsbc-exit-coal-expanders",
    "bank": "HSBC",
    "commitment_number": 18,
    "category": "coal",
    "effective_date": "2021-12-01",
    "title": "HSBC's Commitment to Exit Clients That Expand Coal",
    "short_title": "Commitment to Exit Clients That Expand Coal",
    "subject": null,
    "article_published": null,
    "intro": "HSBC set out this commitment in its Thermal Coal Phase-Out Policy of December 2021, in its controls on financing. It covers clients that decide to grow their coal business. HSBC promises to withdraw all its financing and advice from them as soon as possible.",
    "naive_reading": "it will drop any client that expands its coal business",
    "plain_language_note": "The plain version keeps HSBC's wording. What counts as expansion is set out in the policy's glossary.",
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
        "synthesis_url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=18",
        "synthesis_run": 366,
        "verbatim_check": {
          "document": "16928-hsbc-thermal-coal-phase-out.md",
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
        "source_id": "tcpp2021",
        "title": "The promise",
        "intro": "This is the passage that says what happens to an existing client that grows its coal business, and to the rest of its group.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "HSBC will seek to withdraw, as soon as possible, any financing and advisory services with a client that has made or makes a new commitment to thermal coal expansion; or has proceeded or proceeds with thermal coal expansion. In such cases, if the client is part of a client group, HSBC will seek representations from the client group that new finance or new advisory services provided by HSBC to other members of the client group will not be used for such activities (see Enhanced Due Diligence section).",
        "plain_rendering": "HSBC will seek to withdraw, as soon as possible, any financing and advisory services from a client that commits to or goes ahead with thermal coal expansion. If the client is part of a group, HSBC will seek representations from the group that HSBC's new finance or advice to its other members will not be used for such activities.",
        "phrases": [
          {
            "id": "seek-to-withdraw",
            "label": "seek to withdraw, as soon as possible",
            "type": "narrowing_qualifier",
            "source": "watchtower_weakness",
            "watchtower_ref": "The commitment uses 'seek to withdraw' rather than an unconditional withdrawal obligation and does not specify a fixed withdrawal deadline.",
            "not_in_synthesis": false,
            "verbatim_range": [
              10,
              47
            ],
            "plain_range": [
              10,
              47
            ],
            "means": "The words “seek to withdraw, as soon as possible” promise an effort, not an exit by a date. The policy sets no deadline, and existing loans run on their own terms.",
            "lets_through": [
              "This wording lets through financing that stays in place until it can be ended, which for a long-term loan can be years."
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
              142,
              164
            ],
            "plain_range": [
              134,
              156
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "representations",
            "label": "seek representations",
            "type": "escape_hatch",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              290,
              310
            ],
            "plain_range": [
              202,
              222
            ],
            "means": "This explains what happens to the rest of the client's group. HSBC keeps serving it, and asks for a written assurance that its financing will not pay for the expansion.",
            "lets_through": [
              "This wording lets through new financing to the parent and sister companies of a client that is expanding coal, on the group's word.",
              "It also lets through the expansion itself, if the group moves the financing between its companies."
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
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              359,
              442
            ],
            "plain_range": [
              169,
              252
            ],
            "means": "This explains what HSBC means by “thermal coal expansion”: more coal mined, used or burned in the world, not more owned by one company. A client that buys another company's mines or plants is not expanding here. So this definition blocks fewer clients than the word suggests.",
            "lets_through": [
              "This wording lets through a client that grows its coal business by buying it, which does not trigger a withdrawal."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "before-2021",
            "label": "contractually committed",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              476,
              499
            ],
            "plain_range": [
              270,
              293
            ],
            "means": "This explains which growth does not count: any that was signed or under construction before 1 January 2021.",
            "lets_through": [
              "This wording lets through a client finishing coal projects it signed before 2021. It is not expanding under this definition, so HSBC keeps it as a client."
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
      "group-level",
      "grandfathering"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 366,
      "document_id": 16928,
      "institution": "hsbc",
      "commitment_index": 18,
      "commitment_id": "db736962-9f8d-5a38-85f8-c4727a8fd054",
      "url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=18",
      "agent_name": "openai/gpt-5.6-luna",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-10-12",
      "synthesis_updated": "2026-10-12",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        8751,
        8984
      ],
      "summary_text": "HSBC will seek to withdraw existing financing and advisory services as soon as possible when a client commits to or proceeds with thermal coal expansion.",
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
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "existing"
        }
      },
      "triggers": [],
      "commitment_type": "phase_out",
      "effective_date": "immediate",
      "exceptions": [],
      "weaknesses": "The commitment uses 'seek to withdraw' rather than an unconditional withdrawal obligation and does not specify a fixed withdrawal deadline.",
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
      "strength_reason": "A client that starts new coal growth should lose HSBC's financing. But the exit has no deadline, its group keeps being served, and growth signed before 2021 or bought from others does not count.",
      "actual_reading": "it will try to end its financing to a client that starts new coal growth, with no deadline, and keep serving the rest of the client's group",
      "gaps": [
        {
          "title": "An effort with no deadline",
          "text": "“Seek to withdraw, as soon as possible” sets no date. Existing loans can run on until they end.",
          "phrase_refs": [
            "seek-to-withdraw"
          ]
        },
        {
          "title": "The rest of the group",
          "text": "Sister and parent companies keep their financing, on the group's written word that it will not fund the expansion.",
          "phrase_refs": [
            "representations"
          ]
        },
        {
          "title": "Old projects and bought coal",
          "text": "Growth signed before 2021 and coal assets bought from others are not expansion, so they trigger no exit.",
          "phrase_refs": [
            "before-2021",
            "mergers"
          ]
        }
      ],
      "in_practice": "This commitment says what happens when an existing client decides to grow its coal business. HSBC should try to end all its financing and advice to that client as soon as it can.\n\nTake a coal mining company that announces a new mine in 2026. Under this commitment, HSBC starts to withdraw. But the policy sets no deadline, and a long-term loan can run until it ends. So the client can keep HSBC's financing for years after the announcement.\n\nIf the client belongs to a group, the parent and its other companies keep their HSBC financing. They only have to promise in writing that it will not pay for the new mine. Since a group can move financing between its companies, that promise is hard to check.\n\nNow take a power company finishing a coal plant it signed in 2020. That is not expansion under HSBC's definition, so nothing happens. The same is true of a company that grows by buying another company's coal plants.\n\nSo the client that starts new coal growth is the one HSBC moves away from, slowly, while its group stays.",
      "gets_right": "It reaches existing clients and all their financing, not only new deals. And it names the moment that triggers it: a new commitment to expand, or going ahead with one."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "HSBC has committed to withdraw from clients that expand coal. We have not reviewed its financing against this commitment yet.",
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
