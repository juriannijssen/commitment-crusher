/* Commitment data — generated from commitments/commitment-hsbc-coal-to-fuel-client-checks.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "hsbc-coal-to-fuel-client-checks",
    "bank": "HSBC",
    "commitment_number": 21,
    "category": "coal",
    "effective_date": "2021-12-01",
    "title": "HSBC's Extra Checks on Large Coal-to-Fuel Clients",
    "short_title": "Extra Checks on Large Coal-to-Fuel Clients",
    "subject": null,
    "article_published": null,
    "intro": "HSBC set out this commitment in its Thermal Coal Phase-Out Policy of December 2021, in its controls on financing. It covers companies that turn coal into gas or liquid fuel, are already HSBC clients, and depend heavily on coal. Any new financing or advice for them needs extra checks and a committee's approval first.",
    "naive_reading": "it will keep new financing away from its most coal-heavy coal-to-fuel clients",
    "plain_language_note": "The plain version keeps HSBC's wording. The sentence leads into a list of kinds of client, and only the kind this commitment covers is quoted.",
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
        "synthesis_url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=21",
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
        "intro": "This is the sentence that sets extra checks on new financing for existing clients, with the coal-to-fuel item from its list.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Any new finance or new advisory services for existing clients with one or more of the following characteristics will require EDD and pre-approval by a relevant governance committee (except where the finance or advisory service is specifically provided for activities unrelated to thermal coal): … coal to gas / liquids, where coal-related revenues are ≥20% of total revenues;",
        "plain_rendering": "Any new finance or new advisory services for existing clients will require EDD and pre-approval by a relevant governance committee (except where the finance or advisory service is specifically provided for activities unrelated to thermal coal), where the client is in coal to gas / liquids, where coal-related revenues are ≥20% of total revenues.",
        "phrases": [
          {
            "id": "edd",
            "label": "will require EDD and pre-approval",
            "type": "escape_hatch",
            "source": "watchtower_weakness",
            "watchtower_ref": "The EDD requirement does not establish a committed financing exclusion.",
            "not_in_synthesis": false,
            "verbatim_range": [
              112,
              145
            ],
            "plain_range": [
              62,
              95
            ],
            "means": "This explains what HSBC does with new financing for these clients. It runs enhanced due diligence (EDD), a closer check, and asks an HSBC risk committee to approve the deal first. Nothing says what the committee must decide.",
            "lets_through": [
              "This wording lets through any new financing the committee approves. The policy gives no grounds on which it must say no."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "unrelated",
            "label": "specifically provided for activities unrelated to thermal coal",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "EDD and pre-approval are not required where the finance or advisory service is specifically provided for activities unrelated to thermal coal.",
            "not_in_synthesis": false,
            "verbatim_range": [
              230,
              292
            ],
            "plain_range": [
              180,
              242
            ],
            "means": "This explains which financing skips the extra checks: any labeled for something other than coal. A coal company's loan for its other businesses goes through with no committee.",
            "lets_through": [
              "This wording lets through financing to a coal-heavy client for its other businesses with no extra check. Financing labeled for one part of a company can free its own funds for coal."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "ge-20pc",
            "label": "≥20% of total revenues",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              352,
              374
            ],
            "plain_range": [
              323,
              345
            ],
            "means": "This explains which coal-to-fuel clients get the extra checks: those earning 20% or more of their revenue from coal.",
            "lets_through": [
              "This wording lets through new financing to a coal-to-fuel client below 20% with no extra check, however much coal its plants use."
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
      "commitment_index": 21,
      "commitment_id": "fc9325c9-ed1f-5147-98ee-bc5ef70113ae",
      "url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=21",
      "agent_name": "openai/gpt-5.6-luna",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-10-12",
      "synthesis_updated": "2026-10-12",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        10648,
        10726
      ],
      "summary_text": "New finance or advisory services for existing coal-to-gas/liquids clients with at least 20% coal-related revenue require enhanced due diligence and governance committee approval.",
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
          "relationship_status": "existing",
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
          "value": 20,
          "definition": "coal-related revenues as a share of total revenues",
          "measurement_timeframe": "current"
        }
      ],
      "commitment_type": "screening",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "EDD and pre-approval are not required where the finance or advisory service is specifically provided for activities unrelated to thermal coal.",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": true,
          "standing": false,
          "where": null
        }
      ],
      "weaknesses": "The EDD requirement does not establish a committed financing exclusion.",
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
      "strength_reason": "This commitment sets up a check, not a refusal. A committee can approve new financing for any of these clients, and a loan labeled for their other businesses skips the check.",
      "actual_reading": "it will send new financing for coal-to-fuel clients earning 20% or more of their revenue from coal to a committee, which can approve it",
      "gaps": [
        {
          "title": "A committee that can say yes",
          "text": "The extra checks end in a committee decision. The policy gives no grounds on which the committee must refuse.",
          "phrase_refs": [
            "edd"
          ]
        },
        {
          "title": "Loans for the client's other businesses",
          "text": "Financing labeled for something other than coal skips the check entirely.",
          "phrase_refs": [
            "unrelated"
          ]
        }
      ],
      "in_practice": "This commitment covers companies that turn coal into gas, liquid fuel or chemicals. They are already HSBC clients and earn 20% or more of their revenue from coal. New financing or advice for them goes through enhanced due diligence, a closer check, and then to an HSBC risk committee.\n\nTake a client whose coal-to-chemicals plants bring in 35% of its revenue, and that wants a new general loan. The deal goes to the committee, which decides. The policy does not say on what grounds it must refuse, so the loan can go ahead.\n\nSay the same client asks for a loan labeled for its plastics business. That financing is unrelated to thermal coal, so it skips the extra checks altogether.\n\nSo the commitment makes sure a committee sees new coal-related financing for these clients. It does not say the committee will turn any of it down."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "HSBC has committed to extra checks on new financing for coal-heavy coal-to-fuel clients. We have not reviewed its financing against this commitment yet.",
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
