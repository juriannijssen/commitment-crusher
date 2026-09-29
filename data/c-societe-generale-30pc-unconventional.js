/* Commitment data — generated from commitments/commitment-societe-generale-30pc-unconventional.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-30pc-unconventional",
    "bank": "Société Générale",
    "commitment_number": 1,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's 30% Threshold on Unconventional Oil & Gas",
    "short_title": "30% Threshold on Unconventional Oil & Gas",
    "subject": "Unconventional Oil & Gas",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026. The bank names four resources it treats as unconventional — Arctic oil and gas, Ecuadorian Amazonian oil, oil sands and shale — and refuses to finance companies for which those four together make up more than 30% of revenues. It is one of the few thresholds in European banking that carries a published number.",
    "naive_reading": "it will not finance companies that mainly drill for Arctic oil, oil sands or shale",
    "plain_language_note": "The sentence is unusually clean, and the plain rendering barely changes it. What the analysis turns on is a word that looks structural — revenues — and a pair of activities that look complete but are not.",
    "sources_intro": "One policy document states this exclusion. Two passages from it are quoted here: the threshold itself, and the glossary entry that decides which entity it is measured against.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=1",
        "watchtower_document_id": 23944,
        "watchtower_institution": "societe_generale",
        "synthesis_run": 197,
        "version_label": "April 2026",
        "published": "2026-04-01",
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "published_source": null,
        "published_confidence": null,
        "verbatim_check": {
          "document": "23944-societe-generale-oil-gas.md",
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
        "source_id": "ogp2026",
        "title": "The promise",
        "intro": "Société Générale will not finance companies earning more than 30% of revenues from Arctic, Ecuadorian Amazon, oil sands or extra heavy oil, or shale production.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide any financial products or services to… any Company for which exploration and production of the following resources represent more than 30% of its revenues: Arctic oil and gas, Ecuadorian Amazonian oil, Oil sands or other extra heavy oil, Shale oil or gas.",
        "plain_rendering": "Société Générale will not provide any financial products or services to any Company for which exploration and production of the following resources represent more than 30% of its revenues: Arctic oil and gas, Ecuadorian Amazonian oil, oil sands or other extra heavy oil, shale oil or gas.",
        "phrases": [
          {
            "id": "company",
            "label": "Company",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              70,
              77
            ],
            "plain_range": [
              76,
              83
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "eandp",
            "label": "exploration and production",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              88,
              114
            ],
            "plain_range": [
              94,
              120
            ],
            "means": "This explains which activities count towards the 30%. It is the upstream end of the chain only.",
            "lets_through": [
              "The words “exploration and production” let through revenue from moving, storing, refining or trading the same four resources. A company can build its business on Arctic oil without exploring for or producing any of it, and none of that revenue counts towards the threshold."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          },
          {
            "id": "threshold",
            "label": "more than 30% of its revenues",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              152,
              181
            ],
            "plain_range": [
              158,
              187
            ],
            "means": "This explains the published threshold, the part of this policy anyone outside the bank can check. It measures the four named resources against the company's total revenue.",
            "lets_through": [
              "This wording lets through every diversified producer. 30% of revenue is a ratio, and the denominator is everything else the company does. A group can be among the largest oil sands operators in the world and stay far below the line because it also refines, trades and generates power.",
              "It also lets through any producer sitting just under the line, permanently. A threshold with no trajectory attached does not fall over time, so a company at 29% is compliant in 2026 and compliant in 2036."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "definition",
        "source_id": "ogp2026",
        "title": "The definition of “Company”",
        "intro": "How Société Générale's policy defines it in the glossary. It decides what the 30% is measured against.",
        "location": {
          "distance": "end_of_document",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Company: refers to the legal entity and companies in its scope of consolidation. Consequently, for the calculation of the indicators in this policy for a Company, reference must be made to its consolidated financial statements.",
        "plain_rendering": "A Company means the legal entity together with every company it consolidates. The tests in this policy are calculated from its consolidated financial statements.",
        "phrases": [
          {
            "id": "consolidated",
            "label": "its consolidated financial statements",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              189,
              226
            ],
            "plain_range": [
              123,
              160
            ],
            "means": "This definition of “Company” is broader than what it usually means. By the company we normally mean the entity in front of you. Société Générale reads it as that entity plus everything in its consolidated accounts, so the ratio is worked out across the whole group rather than at the entity doing the extraction. That reaches further than the borrower, not less far.",
            "lets_through": [
              "This wording lets through any unconventional business owned by a diversified parent. A subsidiary that is entirely oil sands stops being 30% of anything once it is consolidated into a group that also does everything else."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          }
        ],
        "watchtower_origin": "Watchtower attaches this passage to this commitment's counterparty scope (`counterparty_scope.quotations`), so the quotation is sourced from the record. The phrase highlighted inside it is Bank.Green's reading.",
        "ordinary_direction": "broader"
      }
    ],
    "glossary_refs": [
      "unconventional",
      "upstream",
      "consolidated-accounts"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 1,
      "commitment_id": "c59a30f1-ea4d-584e-b198-a315f947f1eb",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=1",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        16607,
        16921
      ],
      "summary_text": "The Group will not provide financial products or services to any company deriving more than 30% of its revenues from the exploration and production of Arctic oil/gas, Ecuadorian Amazonian oil, oil sands, extra heavy oil, or shale oil/gas.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "arctic",
            "oil_sands",
            "shale"
          ],
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "group",
          "relationship_status": "new_and_existing",
          "certainty": null
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new_and_existing"
        }
      },
      "triggers": [
        {
          "metric": "revenue_share",
          "inequality": ">",
          "value": 30,
          "definition": "exploration and production of Arctic oil and gas, Ecuadorian Amazonian oil, Oil sands or other extra heavy oil, and Shale oil or gas"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Exceptions for pre-existing business commitments or opportunities at an advanced stage of negotiation.",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": true,
          "where": "Section 7, Application date and updates, page 11"
        },
        {
          "condition": "Account holding and cash management services provided to subsidiaries of integrated oil and gas companies (IOCs).",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": "Section 2.2, Scope of the Group's activities, page 4"
        },
        {
          "condition": "Any deviation from this policy may be granted, on an exceptional basis, by a Societe Generale group oversight committee chaired by senior management.",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": true,
          "standing": true,
          "where": "Section 5.2, Client engagement, page 7"
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 2 removed, 0 split, 1 fields corrected]\nCHANGES:\n- Removed commitment 1 (upstream O&G exposure reduction): Quantitative portfolio reduction targets without a defined endpoint are out of scope.\n- Removed commitment 2 (GHG financed emissions reduction): Quantitative portfolio reduction targets without a defined endpoint are out of scope.\n- Commitment 5 (phase out private companies generating almost all revenues from upstream O&G): Removed exception 'Existing exposure will be phased out until extinction...' as this describes the phase-out mechanism itself, not an exception to the rule.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "Exceptions for pre-existing business commitments or opportunities at an advanced stage of negotiation.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "watchtower",
        "governance_process": false,
        "standing": true,
        "where": "Section 7, Application date and updates, page 11"
      },
      {
        "condition": "Any deviation from this policy may be granted, on an exceptional basis, by a Societe Generale group oversight committee chaired by senior management.",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "watchtower",
        "governance_process": true,
        "standing": true,
        "where": "Section 5.2, Client engagement, page 7"
      }
    ],
    "general_clauses_page": null,
    "disagreements": [
      {
        "field": "weaknesses",
        "severity": "omission",
        "watchtower": "No weakness recorded.",
        "bank_green": "The 30% is a share of revenue measured on consolidated accounts — Watchtower captures the `Company` glossary definition as its counterparty quote, but does not record that the denominator is the whole group. A diversified producer is under the line by construction.",
        "action": "Add a weakness on the denominator."
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
        "project_finance_only": false,
        "new_business_only": false,
        "total": 1,
        "previous_editorial_rating": "hollowed",
        "changed": true
      },
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "strength_reason": "It catches producers that do little besides drill for these four resources. A large group with other businesses stays under 30%, however much it drills.",
      "actual_reading": "it will not finance companies whose whole group earns more than 30% of its revenue from exploring for and producing Arctic, Ecuadorian Amazon, oil sands or shale oil and gas",
      "gaps": [
        {
          "title": "Big groups stay under the line",
          "phrase_refs": [
            "threshold"
          ],
          "text": "The 30% is a share of everything the company earns. A group that also refines, trades and sells power can run a very large oil sands business and stay below it."
        },
        {
          "title": "Subsidiaries are measured with their parent",
          "phrase_refs": [
            "consolidated"
          ],
          "text": "Société Générale measures the whole group, from its consolidated accounts. A subsidiary that does nothing but oil sands is counted together with everything its parent does."
        },
        {
          "title": "Only drilling counts",
          "phrase_refs": [
            "eandp"
          ],
          "text": "Revenue from moving, storing, refining or trading these resources does not count towards the 30%. A company can build its business on Arctic oil without any of it counting."
        }
      ],
      "in_practice": "Take a company that earns most of its revenue from producing shale oil and gas. It is above 30%, so Société Générale will not provide it any financial product or service. That means no loans, no bonds and no advice.\n\nNow take a large oil group that runs a big oil sands operation. It also refines oil, trades it and sells power. Measured against all of that, its oil sands production can be a small share of its revenue. The group stays under 30%. Société Générale can keep financing it, however much oil sands crude it produces.\n\nThe same happens to a subsidiary. Take a company that does nothing but produce Arctic gas. It is measured together with its parent group. If the parent does many other things, the subsidiary is not caught either.\n\nThe count also leaves out much of the chain. A company that ships, stores or trades oil sands crude earns revenue that does not count at all.\n\nAnd a company just under the line can stay there. The threshold does not fall over time. A producer at 29% passes today and would still pass in ten years.\n\nSo what this commitment stops is financing to focused, independent producers of these four resources. The large groups, which can run some of the biggest operations, are measured in a way that keeps them outside it.",
      "gets_right": "It publishes a number that anyone with a company's accounts can check. And above that number, Société Générale withholds every financial product and service, not only loans for a named project."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance companies that make more than 30% of their revenues from Arctic oil and gas, Ecuadorian Amazonian oil, oil sands or shale. We have not yet reviewed what it financed against this commitment, so there is no figure on this page yet.",
    "headline_figure": {
      "display": "Not yet checked",
      "combines": "No financing has been linked to this commitment yet",
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-09-29",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 197, document 23944",
    "reading": "drafted"
  }
};
