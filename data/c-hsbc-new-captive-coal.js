/* Commitment data — generated from commitments/commitment-hsbc-new-captive-coal.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "hsbc-new-captive-coal",
    "bank": "HSBC",
    "commitment_number": 8,
    "category": "coal",
    "effective_date": "2021-12-01",
    "title": "HSBC's Commitment on New Captive Coal Plants and Mines",
    "short_title": "Commitment on New Captive Coal Plants and Mines",
    "subject": null,
    "article_published": null,
    "intro": "HSBC set out this commitment in its Thermal Coal Phase-Out Policy of December 2021, in its controls on financing. It covers coal plants built to power a single factory, and the mines that feed them. HSBC says new ones are incompatible with its goal of net zero financed emissions by 2050, so it will not finance or advise on them.",
    "naive_reading": "it will not finance coal plants that power factories, or the mines that feed them",
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
        "synthesis_url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=8",
        "synthesis_run": 366,
        "verbatim_check": {
          "document": "16928-hsbc-thermal-coal-phase-out.md",
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
        "source_id": "tcpp2021",
        "title": "The promise",
        "intro": "This is the sentence that sets the restriction, with the item on its list that this commitment covers.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "HSBC considers that certain activities are incompatible with HSBC’s NZ50 Target. Consequently, HSBC will not provide new finance to any client for the specific purposes of, or new advisory services in connection with, such activities. These include, but are not limited to: … new captive thermal coal-fired power plants or new captive thermal coal mines;",
        "plain_rendering": "HSBC considers some activities incompatible with its goal of net zero financed emissions by 2050. So HSBC will not provide new finance to any client for the specific purposes of, or new advisory services in connection with, those activities. They include, among others, new captive thermal coal-fired power plants or new captive thermal coal mines.",
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
              "This wording lets through general corporate financing to a company building a coal plant for its own factory. The loan names no purpose, so it can pay for the plant."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "new-captive",
            "label": "new captive",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              276,
              287
            ],
            "plain_range": [
              270,
              281
            ],
            "means": "A captive coal plant is a power plant built to supply one factory rather than the grid. Aluminum smelters, steel mills and cement works often have one. A captive mine feeds such a plant. The word “new” limits this commitment to plants and mines not yet built.",
            "lets_through": [
              "This wording lets through captive coal plants and captive mines that already exist."
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
        "title": "What it covers",
        "intro": "The glossary lists activities the policy does not apply to, and then says where new captive plants and mines stand.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Captive” is set in italics in the rule, and the policy says only once, near the start, that italic words are defined in its glossary."
        },
        "verbatim": "Exempted activities — Means the following: captive thermal coal-fired power plants; captive thermal coal mines; … For the avoidance of doubt, the Policy does apply to clients engaged in new captive coal-fired power plants and new captive thermal coal mines.",
        "plain_rendering": "The policy does not apply to captive thermal coal-fired power plants or captive thermal coal mines. It does apply to clients engaged in new captive coal-fired power plants and new captive thermal coal mines.",
        "phrases": [
          {
            "id": "existing-captive",
            "label": "captive thermal coal-fired power plants",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              43,
              82
            ],
            "plain_range": [
              29,
              68
            ],
            "means": "This explains how far existing captive plants and mines are left out. They are “exempted activities”, so the policy does not apply to them at all.",
            "lets_through": [
              "This wording lets through financing for existing captive coal plants and mines for as long as they run. No end date applies to them."
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
      "corporate-finance",
      "project-finance"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 366,
      "document_id": 16928,
      "institution": "hsbc",
      "commitment_index": 8,
      "commitment_id": "dada4945-9fa5-5fee-a154-64c0bfccdd01",
      "url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=8",
      "agent_name": "openai/gpt-5.6-luna",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-10-12",
      "synthesis_updated": "2026-10-12",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        7174,
        7420
      ],
      "summary_text": "HSBC will not provide project finance for new captive thermal coal-fired power plants.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
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
      "exceptions": [],
      "weaknesses": null,
      "reviewer_notes": "STATS: 8 added, 0 removed, 2 split, 20 fields corrected\nCHANGES:\n- Split the headline phase-out into separate coal-fired-power and thermal-coal-mining commitments for each geographic/timing rule because the activities have different value-chain positions.\n- Corrected the phase-out commitments' value-chain classifications and removed the mistaken 'existing' relationship/transaction classifications from the 2040 rule; remaining exposure does not expressly establish those schema statuses.\n- Split the captive thermal coal plant and captive thermal coal mine restriction because they are distinct downstream and upstream commitments. Corrected both to financing_type 'project' and omitted capital_markets, relationship_status, and transaction_status as required for project financing.\n- Corrected the broad new-thermal-coal-assets commitment to avoid incorrectly assigning it only to downstream activity.\n- Removed the phase-out geographic continuation from the exceptions array; it defines the separate 2040 scope rather than an exception to the commitment.\n- Set governance_process to false for emissions-reduction, retrofit, and transition-purpose exceptions because the cited text does not invoke a formal committee or approval process.\n- Retained the EDD commitments as screening commitments rather than restrictions because EDD and committee approval do not mandate rejection.\n- Corrected misconception indices to reflect the added and split commitments.",
      "not_in_synthesis_note": null,
      "also_covers": [
        {
          "commitment_index": 9,
          "commitment_id": "a5946153-cbc9-5eb2-a3a5-65c48c989a59",
          "url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=9"
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
        "field": "product_scope.financing_type",
        "severity": "classification",
        "watchtower": "The record classifies this commitment as project financing only.",
        "bank_green": "The policy refuses any new finance “for the specific purposes of” the activity, and its definition of finance covers project finance, direct lending and capital markets work. Any of them, labeled for the activity, is covered.",
        "action": "Record financing_type as corporate with capital_markets true, as on the other items of the same list."
      },
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
        "weakness": false,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 1
      },
      "verdict_selected": null,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Financing named for a new captive coal plant or mine is refused. Existing captive plants are outside the policy altogether, and a general loan can still pay for a new one.",
      "actual_reading": "it will not provide financing named for building a new coal plant to power a factory, or a new mine to feed one",
      "gaps": [
        {
          "title": "Existing captive plants are exempt",
          "text": "Captive coal plants and mines that already run are exempted activities. The policy does not apply to them, with no end date.",
          "phrase_refs": [
            "existing-captive",
            "new-captive"
          ]
        },
        {
          "title": "General loans to the factory owner",
          "text": "The restriction covers financing for the specific purpose of a new captive plant. A general loan to the company names no purpose.",
          "phrase_refs": [
            "specific-purposes"
          ]
        }
      ],
      "in_practice": "Captive coal plants power one factory each, often a metal smelter or a cement works. Many have been built in recent years, especially in parts of Asia. This commitment refuses financing and advice whose named purpose is a new one, or a new mine to feed it.\n\nTake a nickel smelter planning its own coal power plant. A loan named for the plant is refused. But a general loan to the smelter company names no purpose, so this commitment does not cover it. The company can spend it on the plant.\n\nNow take a smelter whose captive coal plant is already running. Existing captive plants are exempted activities, so the policy does not apply to them at all. HSBC can keep financing the plant and its owner with no end date.\n\nSo the line falls at new captive plants, and only where they are the named purpose of the financing.",
      "gets_right": "It names captive plants and mines outright, so a new one cannot escape by not supplying the grid. And it refuses advice as well as financing."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "HSBC has committed not to finance or advise on new captive coal plants and mines. We have not reviewed its financing against this commitment yet.",
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
