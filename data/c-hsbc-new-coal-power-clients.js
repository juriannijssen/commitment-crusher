/* Commitment data — generated from commitments/commitment-hsbc-new-coal-power-clients.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "hsbc-new-coal-power-clients",
    "bank": "HSBC",
    "commitment_number": 15,
    "category": "coal",
    "effective_date": "2021-12-01",
    "title": "HSBC's Commitment on New Coal Power Clients",
    "short_title": "Commitment on New Coal Power Clients",
    "subject": null,
    "article_published": null,
    "intro": "HSBC set out this commitment in its Thermal Coal Phase-Out Policy of December 2021, in its controls on financing. HSBC will not take on a power company as a new client if coal plants are a large share of its capacity. The same goes if it runs a large amount of coal power.",
    "naive_reading": "it will not finance power companies that burn coal",
    "plain_language_note": "The plain version keeps HSBC's wording. The sentence leads into a list of three kinds of company, and only the kind this commitment covers is quoted.",
    "sources_intro": "One policy document states this commitment, and one passage from it is quoted here.",
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
        "synthesis_url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=15",
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
        "intro": "This is the sentence that sets the restriction on new clients, with the power item from its list and the exception that closes the list.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "HSBC will not start a new relationship with a prospective client with one or more of the following characteristics: … power, where operational thermal coal power generating capacity is either i) ≥10% of total generating capacity; or ii) ≥3GW; or … except for the purposes of materially reducing greenhouse gas emissions, including by enabling the early retirement of existing thermal coal assets.",
        "plain_rendering": "HSBC will not start a new relationship with a prospective client in power where operational thermal coal power generating capacity is either i) ≥10% of total generating capacity; or ii) ≥3GW. The exception is for the purposes of materially reducing greenhouse gas emissions, including by enabling the early retirement of existing thermal coal assets.",
        "phrases": [
          {
            "id": "new-relationship",
            "label": "new relationship",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              22,
              38
            ],
            "plain_range": [
              22,
              38
            ],
            "means": "The words “new relationship” limit this commitment to companies that are not yet HSBC clients. A power company that already banks with HSBC is not covered by this commitment.",
            "lets_through": [
              "This wording lets through every power company that was already an HSBC client, however much coal it handles."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "operational",
            "label": "operational",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              131,
              142
            ],
            "plain_range": [
              80,
              91
            ],
            "means": "The word “operational” counts only coal plants that are already running. Coal plants being built or planned do not count toward either threshold.",
            "lets_through": [
              "This wording lets through a power company whose coal plants are still being built, because none of them is running yet."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "ge-10pc",
            "label": "≥10% of total generating capacity",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              195,
              228
            ],
            "plain_range": [
              144,
              177
            ],
            "means": "This explains the first threshold: a power company is refused if coal plants make up 10% or more of its capacity. A company below it is refused only if its coal plants add up to 3 gigawatts or more.",
            "lets_through": [
              "This wording lets through a large utility whose coal plants are under 10% of its capacity and add up to less than 3 gigawatts."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "materially",
            "label": "materially reducing greenhouse gas emissions",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "A new relationship is permitted for materially reducing greenhouse gas emissions, including enabling early retirement of existing thermal coal assets.",
            "not_in_synthesis": false,
            "verbatim_range": [
              275,
              319
            ],
            "plain_range": [
              229,
              273
            ],
            "means": "This lets HSBC take on a power company as a new client for financing that cuts emissions, such as closing a coal site early. Once the relationship has started, the company is an existing client, and this commitment no longer applies to it.",
            "lets_through": [
              "This wording lets through a new power company client, if HSBC's first financing for it is presented as work that cuts emissions."
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
      "coal-fired-power-generation",
      "existing-client"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 366,
      "document_id": 16928,
      "institution": "hsbc",
      "commitment_index": 15,
      "commitment_id": "be161bb9-b1d6-5ce8-b917-1b7549318336",
      "url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=15",
      "agent_name": "openai/gpt-5.6-luna",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-10-12",
      "synthesis_updated": "2026-10-12",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        9673,
        9797
      ],
      "summary_text": "HSBC will not start relationships with prospective power clients whose operational thermal coal capacity is at least 10% of total capacity or at least 3 GW, except for emissions-reduction or early-retirement purposes.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": "downstream",
          "activity_scope": "existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": "new",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new"
        }
      },
      "triggers": [
        {
          "metric": "capacity_share",
          "inequality": ">=",
          "value": 10,
          "definition": "operational thermal coal power-generating capacity as a share of total generating capacity",
          "measurement_timeframe": "current"
        },
        {
          "metric": "capacity_absolute",
          "inequality": ">=",
          "value": 3,
          "definition": "operational thermal coal power-generating capacity in GW",
          "measurement_timeframe": "current"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "A new relationship is permitted for materially reducing greenhouse gas emissions, including enabling early retirement of existing thermal coal assets.",
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
        "weakness": false,
        "commitment_specific_carve_outs": 1,
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
      "strength_reason": "This commitment only stops HSBC from taking on new coal power clients, and it counts only plants already running. Every power company HSBC already banks is outside it.",
      "actual_reading": "it will not take on as a new client a power company whose running coal plants are 10% or more of its capacity, or 3 gigawatts or more",
      "gaps": [
        {
          "title": "Power companies HSBC already banks",
          "text": "This commitment covers only companies that are not yet HSBC clients. Every power company that already banks with HSBC is outside it.",
          "phrase_refs": [
            "new-relationship"
          ]
        },
        {
          "title": "Coal plants not yet running",
          "text": "Only operational capacity counts. A company whose coal plants are still being built does not meet either threshold.",
          "phrase_refs": [
            "operational"
          ]
        },
        {
          "title": "A way in through emissions work",
          "text": "A coal power company can become a client for financing that cuts emissions. After that, this commitment no longer applies.",
          "phrase_refs": [
            "materially"
          ]
        }
      ],
      "in_practice": "This commitment sets two thresholds for a power company that wants to become an HSBC client. If coal plants make up 10% or more of its capacity, it is refused. It is also refused if its coal plants add up to 3 gigawatts or more, which is about three large coal plants.\n\nThe thresholds count only operational capacity. A company whose coal plants are still being built has none, so it can become a client.\n\nAnd the commitment says nothing about power companies that are already clients. A utility that banked with HSBC before the policy was written is not covered by this commitment, however much coal it burns.\n\nThere is also a way in for a coal power company that is not yet a client. If its first financing from HSBC pays to close a coal plant early, HSBC can start the relationship. After that, the company is an existing client.\n\nSo the commitment keeps new coal power companies out at the door, but only those already running coal plants."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "HSBC has committed not to take on coal-heavy power companies as new clients. We have not reviewed its financing against this commitment yet.",
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
