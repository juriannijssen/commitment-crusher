/* Commitment data — generated from commitments/commitment-hsbc-eu-oecd-coal-revenue.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "hsbc-eu-oecd-coal-revenue",
    "bank": "HSBC",
    "commitment_number": 12,
    "category": "coal",
    "effective_date": "2021-12-01",
    "title": "HSBC's Revenue Limit for Coal Clients in the EU and OECD",
    "short_title": "Revenue Limit for Coal Clients in the EU and OECD",
    "subject": null,
    "article_published": null,
    "intro": "HSBC set out this commitment in its Thermal Coal Phase-Out Policy of December 2021, in its controls on financing. It covers companies in the EU and OECD that earn a large share of their revenue from thermal coal. HSBC will not provide them new finance or advice, unless it is for clean technology.",
    "naive_reading": "it will not finance coal-heavy companies in the EU and OECD",
    "plain_language_note": "The plain version keeps HSBC's wording. The sentence leads into a list, and this commitment is its last item.",
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
        "synthesis_url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=12",
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
        "intro": "This is the sentence that sets the restriction, with the item on its list that covers whole companies rather than activities.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "HSBC considers that certain activities are incompatible with HSBC’s NZ50 Target. Consequently, HSBC will not provide new finance to any client for the specific purposes of, or new advisory services in connection with, such activities. These include, but are not limited to: … for EU and OECD markets only, where the client’s thermal coal related revenues are greater than 40% of total revenues (or 30% of total revenues by 2025), unless the new finance or new advisory services are to be used for the specific and demonstrable purpose of financing clean technology or infrastructure as part of the client’s transition. This is particularly so, given our intent to have exited thermal coal assets in EU/OECD markets by 2030.",
        "plain_rendering": "HSBC considers some activities incompatible with its goal of net zero financed emissions by 2050. So HSBC will not provide new finance to any client for the specific purposes of, or new advisory services in connection with, those activities. They include, among others, for EU and OECD markets only, clients whose thermal coal related revenues are greater than 40% of total revenues (or 30% of total revenues by 2025). The exception is new finance or new advisory services used for the specific and demonstrable purpose of financing clean technology or infrastructure as part of the client’s transition.",
        "phrases": [
          {
            "id": "eu-oecd-only",
            "label": "for EU and OECD markets only",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              276,
              304
            ],
            "plain_range": [
              270,
              298
            ],
            "means": "The words “for EU and OECD markets only” limit this commitment to clients in the EU and the OECD. The OECD is a club of mostly wealthy economies. The policy does not say what puts a client in one of those markets.",
            "lets_through": [
              "This wording lets through coal-heavy companies in every other country, where most of the world's coal is mined and burned."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "revenue-threshold",
            "label": "greater than 40% of total revenues (or 30% of total revenues by 2025)",
            "type": "narrowing_qualifier",
            "source": "watchtower_weakness",
            "watchtower_ref": "The policy does not define how thermal coal-related revenues are calculated or how the clean-technology use-of-proceeds condition is independently verified.",
            "not_in_synthesis": false,
            "verbatim_range": [
              359,
              428
            ],
            "plain_range": [
              348,
              417
            ],
            "means": "This explains which clients are refused: those whose thermal coal revenue is more than 30% of all their revenue, the line since 2025. The policy does not say how coal revenue is counted, or whether it is measured on the client or its whole group.",
            "lets_through": [
              "This wording lets through a company earning up to 30% of its revenue from thermal coal, however large that coal business is.",
              "It also lets through a large group whose coal unit is small next to its other businesses."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "clean-tech",
            "label": "clean technology or infrastructure",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "New finance or advisory services may be provided for the specific and demonstrable purpose of financing clean technology or infrastructure as part of the client’s transition.",
            "not_in_synthesis": false,
            "verbatim_range": [
              548,
              582
            ],
            "plain_range": [
              533,
              567
            ],
            "means": "This lets HSBC still finance a coal-heavy client, if the financing is for clean technology or infrastructure. The policy does not define either term.",
            "lets_through": [
              "This wording lets through financing to a coal-heavy company for any project HSBC accepts as clean technology or infrastructure, since the policy gives no list."
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
      "eu",
      "oecd",
      "revenue-threshold",
      "client-level"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 366,
      "document_id": 16928,
      "institution": "hsbc",
      "commitment_index": 12,
      "commitment_id": "96a2bcaf-3b63-5947-8e8c-a78d1879da8f",
      "url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=12",
      "agent_name": "openai/gpt-5.6-luna",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-10-12",
      "synthesis_updated": "2026-10-12",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        7671,
        8021
      ],
      "summary_text": "In EU/OECD markets, HSBC will not provide new finance or advisory services to clients whose thermal coal revenue exceeds 40%, falling to 30% by 2025, unless funds demonstrably support clean-transition technology or infrastructure.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": null,
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": false
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
      "triggers": [
        {
          "metric": "revenue_share",
          "inequality": ">",
          "value": 40,
          "definition": "thermal coal-related revenues as a share of total revenues",
          "measurement_timeframe": "current"
        },
        {
          "metric": "revenue_share",
          "inequality": ">",
          "value": 30,
          "definition": "thermal coal-related revenues as a share of total revenues",
          "measurement_timeframe": "by 2025"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "New finance or advisory services may be provided for the specific and demonstrable purpose of financing clean technology or infrastructure as part of the client’s transition.",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": null
        }
      ],
      "weaknesses": "The policy does not define how thermal coal-related revenues are calculated or how the clean-technology use-of-proceeds condition is independently verified.",
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
      "strength_reason": "In the EU and OECD, a company earning more than 30% of its revenue from thermal coal gets no new financing except for clean projects. Below that line, and outside those markets, it does.",
      "actual_reading": "it will not provide new financing to EU and OECD companies earning more than 30% of their revenue from thermal coal, except for clean projects",
      "gaps": [
        {
          "title": "Companies at 30% or less",
          "text": "The line is 30% of revenue. A company below it keeps full access to new financing, however much coal it burns or mines.",
          "phrase_refs": [
            "revenue-threshold"
          ]
        },
        {
          "title": "Everywhere outside the EU and OECD",
          "text": "This commitment applies only in the EU and OECD markets. Coal-heavy companies elsewhere are not covered.",
          "phrase_refs": [
            "eu-oecd-only"
          ]
        },
        {
          "title": "Clean projects for coal companies",
          "text": "A coal-heavy company can still get financing for clean technology or infrastructure, which is not defined.",
          "phrase_refs": [
            "clean-tech"
          ]
        }
      ],
      "in_practice": "This commitment covers whole companies, not activities. In the EU and OECD, a client earning more than 30% of its revenue from thermal coal gets no new financing or advice. That covers general loans too, not only loans named for coal.\n\nTake a coal-fired power company in Poland that earns half its revenue from coal. It cannot get a new loan from HSBC for general purposes. It can still get financing for a wind farm, if HSBC accepts the wind farm as clean technology for its transition.\n\nNow take a large European utility that earns 15% of its revenue from coal plants. That is below the 30% line, so this commitment does not cover it, however many coal plants it runs.\n\nA coal company of the same size in Indonesia is not covered either, because this commitment applies only in the EU and OECD markets.\n\nSo the restriction holds for companies that depend heavily on coal and sit in the EU and OECD.",
      "gets_right": "It refuses all new financing to the companies it covers, not only financing named for coal. And the line dropped from 40% to 30% of revenue in 2025."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "HSBC has committed not to provide new financing to coal-heavy companies in the EU and OECD. We have not reviewed its financing against this commitment yet.",
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
