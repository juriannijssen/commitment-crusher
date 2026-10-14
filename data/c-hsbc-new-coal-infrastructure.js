/* Commitment data — generated from commitments/commitment-hsbc-new-coal-infrastructure.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "hsbc-new-coal-infrastructure",
    "bank": "HSBC",
    "commitment_number": 10,
    "category": "coal",
    "effective_date": "2021-12-01",
    "title": "HSBC's Commitment on New Coal Infrastructure",
    "short_title": "Commitment on New Coal Infrastructure",
    "subject": null,
    "article_published": null,
    "intro": "HSBC set out this commitment in its Thermal Coal Phase-Out Policy of December 2021, in its controls on financing. HSBC says new coal terminals, coal railways and other infrastructure for coal are incompatible with its goal of net zero financed emissions by 2050. So it will not finance or advise on them.",
    "naive_reading": "it will not finance new coal ports, coal railways or other coal infrastructure",
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
        "synthesis_url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=10",
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
        "verbatim": "HSBC considers that certain activities are incompatible with HSBC’s NZ50 Target. Consequently, HSBC will not provide new finance to any client for the specific purposes of, or new advisory services in connection with, such activities. These include, but are not limited to: … new thermal coal infrastructure;",
        "plain_rendering": "HSBC considers some activities incompatible with its goal of net zero financed emissions by 2050. So HSBC will not provide new finance to any client for the specific purposes of, or new advisory services in connection with, those activities. They include, among others, new thermal coal infrastructure.",
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
              "This wording lets through general corporate financing to a port or rail company building coal facilities. The loan names no purpose, so it can pay for them."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "new-infrastructure",
            "label": "new thermal coal infrastructure",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              276,
              307
            ],
            "plain_range": [
              270,
              301
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
        "title": "The definition of “new thermal coal infrastructure”",
        "intro": "How HSBC's policy defines it in its glossary.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“New thermal coal infrastructure” is set in italics in the rule. The policy says once, near the start, that italic words are defined in its glossary."
        },
        "verbatim": "Thermal coal infrastructure / new thermal coal infrastructure — Infrastructure assets dedicated to support thermal coal assets, such as coal terminals or coal railways. new thermal coal infrastructure means: (i) the creation of thermal coal infrastructure; or (ii) expansions to existing thermal coal infrastructure (except for the purposes of retrofitting an asset to materially reduce greenhouse gas emissions).",
        "plain_rendering": "Thermal coal infrastructure means infrastructure assets dedicated to support thermal coal assets, such as coal terminals or coal railways. New thermal coal infrastructure means building it, or expanding existing infrastructure, except for retrofitting an asset to materially reduce greenhouse gas emissions.",
        "phrases": [
          {
            "id": "dedicated",
            "label": "dedicated to support thermal coal assets",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              86,
              126
            ],
            "plain_range": [
              56,
              96
            ],
            "means": "This explains what HSBC means by “new thermal coal infrastructure”: new or bigger assets built to serve coal, such as coal terminals and coal railways. The word “dedicated” leaves out assets shared with other goods. So this definition blocks fewer projects than the words suggest.",
            "lets_through": [
              "This wording lets through ports and rail lines that carry coal alongside other goods, however much of their traffic is coal."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "retrofitting",
            "label": "retrofitting an asset to materially reduce greenhouse gas emissions",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "Expansions to existing thermal coal infrastructure for retrofitting an asset to materially reduce greenhouse gas emissions are excluded from the definition of new thermal coal infrastructure.",
            "not_in_synthesis": false,
            "verbatim_range": [
              344,
              411
            ],
            "plain_range": [
              239,
              306
            ],
            "means": "This lets an existing coal terminal or rail line grow if the work also cuts its emissions by a material amount. The policy does not say how large a cut counts as material.",
            "lets_through": [
              "This wording lets through an expansion of coal infrastructure that comes with emissions-cutting work, such as electric equipment in place of diesel."
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
      "corporate-finance",
      "project-finance",
      "storage"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 366,
      "document_id": 16928,
      "institution": "hsbc",
      "commitment_index": 10,
      "commitment_id": "64ba443d-65c9-5ef0-9f6a-a338c5f6b207",
      "url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=10",
      "agent_name": "openai/gpt-5.6-luna",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-10-12",
      "synthesis_updated": "2026-10-12",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        7174,
        7497
      ],
      "summary_text": "HSBC will not provide project finance for new thermal coal infrastructure, except for specified emissions-reduction retrofits.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
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
          "condition": "Expansions to existing thermal coal infrastructure for retrofitting an asset to materially reduce greenhouse gas emissions are excluded from the definition of new thermal coal infrastructure.",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": null
        }
      ],
      "weaknesses": null,
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
        "commitment_specific_carve_outs": 1,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 2
      },
      "verdict_selected": null,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Financing named for a new coal terminal or coal railway is refused. Shared ports and lines are not covered, and a general loan can still pay for one.",
      "actual_reading": "it will not provide financing named for new or bigger infrastructure that serves only coal",
      "gaps": [
        {
          "title": "Shared ports and rail lines",
          "text": "Infrastructure counts only if it is dedicated to coal. A port or line that also carries other goods is not covered.",
          "phrase_refs": [
            "dedicated"
          ]
        },
        {
          "title": "General loans to the owner",
          "text": "The restriction covers financing for the specific purpose of coal infrastructure. A general loan to a port or rail company names no purpose.",
          "phrase_refs": [
            "specific-purposes"
          ]
        },
        {
          "title": "Expansions with emissions work",
          "text": "A coal terminal can grow if the work also cuts its emissions by a material amount, which is not defined.",
          "phrase_refs": [
            "retrofitting"
          ]
        }
      ],
      "in_practice": "Coal reaches power plants and export ships by rail and through ports. This commitment refuses financing and advice whose named purpose is new infrastructure built for coal, or an expansion of it.\n\nTake a port company that wants to add a coal berth to a port that also handles grain and containers. The port is not dedicated to coal, so the new berth may not count as coal infrastructure. And if the company borrows for general purposes, this commitment does not cover the loan in any case.\n\nNow take a terminal that handles only coal and wants to double its capacity. A loan named for that work is refused. But if the expansion also brings in electric equipment and cuts emissions, HSBC can treat it as a retrofit. The policy gives no number for how large the cut must be.\n\nSo the line falls at new infrastructure that serves only coal, named as the purpose of the financing.",
      "gets_right": "It covers expansions of existing coal infrastructure, not only new builds, and it refuses advice as well as financing."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "HSBC has committed not to finance or advise on new coal infrastructure. We have not reviewed its financing against this commitment yet.",
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
