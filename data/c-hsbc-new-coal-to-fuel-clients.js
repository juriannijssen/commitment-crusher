/* Commitment data — generated from commitments/commitment-hsbc-new-coal-to-fuel-clients.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "hsbc-new-coal-to-fuel-clients",
    "bank": "HSBC",
    "commitment_number": 16,
    "category": "coal",
    "effective_date": "2021-12-01",
    "title": "HSBC's Commitment on New Coal-to-Fuel Clients",
    "short_title": "Commitment on New Coal-to-Fuel Clients",
    "subject": null,
    "article_published": null,
    "intro": "HSBC set out this commitment in its Thermal Coal Phase-Out Policy of December 2021, in its controls on financing. Some companies turn coal into gas or liquid fuel. HSBC will not take one on as a new client if coal makes up a large part of its revenue.",
    "naive_reading": "it will not finance companies that turn coal into gas or liquid fuel",
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
        "synthesis_url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=16",
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
        "intro": "This is the sentence that sets the restriction on new clients, with the coal-to-fuel item from its list and the exception that closes the list.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "HSBC will not start a new relationship with a prospective client with one or more of the following characteristics: … coal to gas / liquids, where coal-related revenues are ≥10% of total revenues, … except for the purposes of materially reducing greenhouse gas emissions, including by enabling the early retirement of existing thermal coal assets.",
        "plain_rendering": "HSBC will not start a new relationship with a prospective client in coal to gas / liquids, where coal-related revenues are ≥10% of total revenues. The exception is for the purposes of materially reducing greenhouse gas emissions, including by enabling the early retirement of existing thermal coal assets.",
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
            "means": "The words “new relationship” limit this commitment to companies that are not yet HSBC clients. A coal-to-fuel company that already banks with HSBC is not covered by this commitment.",
            "lets_through": [
              "This wording lets through every coal-to-fuel company that was already an HSBC client, however much coal it handles."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "ge-10pc",
            "label": "≥10% of total revenues",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              173,
              195
            ],
            "plain_range": [
              123,
              145
            ],
            "means": "This explains the threshold: a company is refused if 10% or more of its revenue is coal-related. There is no second test on how much coal it uses.",
            "lets_through": [
              "This wording lets through a large chemicals group that turns coal into fuel but earns less than 10% of its revenue from it."
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
              226,
              270
            ],
            "plain_range": [
              184,
              228
            ],
            "means": "This lets HSBC take on a coal-to-fuel company as a new client for financing that cuts emissions, such as closing a coal site early. Once the relationship has started, the company is an existing client, and this commitment no longer applies to it.",
            "lets_through": [
              "This wording lets through a new coal-to-fuel company client, if HSBC's first financing for it is presented as work that cuts emissions."
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
      "liquefaction",
      "revenue-threshold",
      "existing-client"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 366,
      "document_id": 16928,
      "institution": "hsbc",
      "commitment_index": 16,
      "commitment_id": "2bac6333-ca16-5f5c-b545-3610b4829276",
      "url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=16",
      "agent_name": "openai/gpt-5.6-luna",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-10-12",
      "synthesis_updated": "2026-10-12",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        9805,
        9883
      ],
      "summary_text": "HSBC will not start relationships with prospective coal-to-gas/liquids clients whose coal-related revenue is at least 10%, except for emissions-reduction or early-retirement purposes.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": "downstream",
          "activity_scope": "new_and_existing"
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
          "metric": "revenue_share",
          "inequality": ">=",
          "value": 10,
          "definition": "coal-related revenues as a share of total revenues",
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
      "strength_reason": "This commitment only stops HSBC from taking on new coal-to-fuel clients, and only those earning 10% or more of their revenue from coal. Existing clients are outside it.",
      "actual_reading": "it will not take on as a new client a company earning 10% or more of its revenue from turning coal into gas or liquid fuel",
      "gaps": [
        {
          "title": "Coal-to-fuel companies HSBC already banks",
          "text": "This commitment covers only companies that are not yet HSBC clients. Those that already bank with HSBC are outside it.",
          "phrase_refs": [
            "new-relationship"
          ]
        },
        {
          "title": "Large groups below 10%",
          "text": "The only test is a share of revenue. A large group with a big coal-to-fuel plant can stay under it.",
          "phrase_refs": [
            "ge-10pc"
          ]
        },
        {
          "title": "A way in through emissions work",
          "text": "Such a company can become a client for financing that cuts emissions. After that, this commitment no longer applies.",
          "phrase_refs": [
            "materially"
          ]
        }
      ],
      "in_practice": "Some plants turn coal into gas, liquid fuel or chemicals. This commitment stops HSBC from taking on a new client that earns 10% or more of its revenue from that business.\n\nThe only test is a share of revenue. Take a large chemicals group in China that runs a coal-to-chemicals plant among many other businesses. If coal brings in less than 10% of its revenue, it can become an HSBC client, however much coal the plant uses.\n\nAnd the commitment says nothing about companies that are already clients. One that banked with HSBC before the policy was written is not covered by this commitment.\n\nThere is also a way in. If a company's first financing from HSBC pays for work that cuts emissions, HSBC can start the relationship. After that, the company is an existing client.\n\nSo the commitment keeps out new clients that depend on turning coal into fuel, and nobody else."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "HSBC has committed not to take on coal-to-fuel companies as new clients. We have not reviewed its financing against this commitment yet.",
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
