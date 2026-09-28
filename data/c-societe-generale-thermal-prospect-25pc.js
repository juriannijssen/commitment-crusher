/* Commitment data — generated from commitments/commitment-societe-generale-thermal-prospect-25pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-thermal-prospect-25pc",
    "bank": "Société Générale",
    "commitment_number": 5,
    "category": "thermal_coal",
    "effective_date": "2026-04-01",
    "title": "Société Générale's 25% Threshold for New Clients",
    "short_title": "25% Threshold for New Clients",
    "subject": "New Clients in Thermal Coal",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this rule in its Thermal Coal Sector Policy, published in April 2026. A company that is not yet a client and earns more than 25% of its revenue from thermal coal will not be taken on. The policy sets a different number for companies it already banks.",
    "naive_reading": "it will not take on new clients whose business depends on coal",
    "plain_language_note": "A number that only applies to strangers — and a definition that decides what the number counts.",
    "sources_intro": "One policy document states this rule. Two passages from it are quoted here: the rule, and the glossary entry that decides how the revenue is measured.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "tcp2026",
        "document_title": "Société Générale Thermal Coal Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/thermal-coal-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=5",
        "watchtower_document_id": 28051,
        "watchtower_institution": "societe_generale",
        "synthesis_run": 306,
        "version_label": "April 2026",
        "published": "2026-04-01",
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "published_source": null,
        "published_confidence": null,
        "verbatim_check": {
          "document": "28051-societe-generale-thermal-coal.md",
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
        "source_id": "tcp2026",
        "title": "The promise",
        "intro": "This is where Société Générale makes the commitment.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide new financial products and services to any… Prospect which has more than 25% of its revenue linked to the Thermal Coal Sector.",
        "plain_rendering": "Société Générale will not provide new financial products and services to any Prospect which has more than 25% of its revenue linked to the Thermal Coal Sector.",
        "phrases": [
          {
            "id": "prospect",
            "label": "Prospect",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              71,
              79
            ],
            "plain_range": [
              77,
              85
            ],
            "means": "This explains who this commitment applies to: a company that is not a client yet.",
            "lets_through": [
              "This wording lets through every company already banked at between 25% and 50%. The same business, at the same coal intensity, is excluded as a newcomer and retained as a client.",
              "It also lets through the bank's existing book in general. Nothing in this commitment asks a current client to do anything."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "25pc",
            "label": "more than 25% of its revenue",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              90,
              118
            ],
            "plain_range": [
              96,
              124
            ],
            "means": "This explains the threshold. More than 25% of the company's revenue has to be linked to thermal coal before the bank declines to take it on.",
            "lets_through": [
              "This wording lets through every diversified utility and trader below the line. A company can run a large coal fleet and stay under 25% if it also sells gas, renewables and network services.",
              "It also lets through groups where the coal sits in a subsidiary. Watchtower records this test at counterparty level rather than group level."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "definition",
        "source_id": "tcp2026",
        "title": "The definition of “Revenue linked to the Thermal Coal Sector”",
        "intro": "How Société Générale's policy defines it in the glossary. It decides what counts towards the percentage for power companies.",
        "location": {
          "distance": "end_of_document",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Revenue linked to the Thermal Coal Sector: For Companies of the power value chain, thermal coal revenue is primarily evaluated based on the revenue derived from coal-fueled power production.",
        "plain_rendering": "Revenue linked to the Thermal Coal Sector: For Companies of the power value chain, thermal coal revenue is primarily evaluated based on the revenue derived from coal-fueled power production.",
        "phrases": [
          {
            "id": "primarily-evaluated",
            "label": "primarily evaluated",
            "type": "undefined_term",
            "verbatim_range": [
              107,
              126
            ],
            "plain_range": [
              107,
              126
            ],
            "means": "This definition of “Revenue linked to the Thermal Coal Sector” is narrower than what it usually means. By a power company's coal revenue we normally mean everything it earns from coal. Société Générale evaluates it primarily on revenue from coal-fuelled generation. Primarily is not a rule, so what else may be counted, and in what proportion, is left to the bank — and on the narrow reading the threshold blocks fewer clients.",
            "lets_through": [
              "This wording lets through any measurement the assessor prefers at the margin. “Primarily” leaves the rest of the calculation open, and this is the sentence that decides whether a company is above or below the line.",
              "It also lets through the rest of the coal value chain, for power companies. A utility's coal transport, trading and storage revenue is not what this definition points at."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "narrower"
      }
    ],
    "glossary_refs": [
      "thermal-coal",
      "revenue-threshold",
      "client-level",
      "prospect",
      "capital-markets"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 306,
      "document_id": 28051,
      "institution": "societe_generale",
      "commitment_index": 5,
      "commitment_id": "14a30d45-ebcc-5e3e-a7d7-e58d87e8fa69",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=5",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        11501,
        11975
      ],
      "summary_text": "Societe Generale will not provide new financial products and services to prospective clients deriving more than 25% of their revenue from the thermal coal sector.",
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
          "inequality": ">",
          "value": 25,
          "definition": "revenue linked to the Thermal Coal Sector"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Financing products and services dedicated to the energy transition remain permitted",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": "Section 6.1, Client criteria — Energy transition exception"
        },
        {
          "condition": "Deviations may be granted on an exceptional basis by the Societe Generale group oversight committee chaired by senior management",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": true,
          "standing": true,
          "where": "Section 5.2, Implementation process"
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 9 fields corrected]\nCHANGES:\n- All commitments: Added missing `certainty` object with `certainty_rating: \"5\"` to all exceptions to comply with schema requirements.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "Deviations may be granted on an exceptional basis by the Societe Generale group oversight committee chaired by senior management",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "watchtower",
        "governance_process": true,
        "standing": true,
        "where": "Section 5.2, Implementation process"
      }
    ],
    "general_clauses_page": null,
    "disagreements": [
      {
        "field": "weaknesses",
        "severity": "omission",
        "watchtower": "No weakness recorded — as on every commitment in this document.",
        "bank_green": "Watchtower states no weakness anywhere in the Thermal Coal synthesis, on any of the nine commitments. The phrases highlighted on this page are Bank.Green's reading and are labelled as such.",
        "action": "Populate the weaknesses field for this document. Our highlighted phrases are the proposal."
      },
      {
        "field": "loopholes.exceptions",
        "severity": "inconsistency",
        "watchtower": "The section 7 exception for pre-existing business commitments and opportunities at an advanced stage of negotiation is attached to two of the nine commitments in this run — commitments 1 and 2. It is absent from commitments 3 to 9.",
        "bank_green": "Section 7 applies that exception to the sector policy as a whole, so it should sit on all nine commitments. We read the seven omissions as an extraction inconsistency rather than a feature of the policy.",
        "action": "Attach the section 7 exception to commitments 3 to 9. Note the consequence for the derived rating: spec v3.2 defines a standing carve-out as one appearing on EVERY commitment in a document, so as the record stands the section 7 exception counts as commitment-specific on commitments 1 and 2 and adds a point to each. Correcting the record would make it standing and move both from `hollowed` to `holds`. No other rating in this document would change."
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
        "new_business_only": true,
        "total": 2
      },
      "verdict_options": [
        {
          "angle": "how_it_compares",
          "recommended": true,
          "recommended_because": "The comparison is four lines down the same list, and it needs no interpretation at all.",
          "text": "Two numbers, in one list, four lines apart.\n\nA company that is not yet a client is refused above 25% of revenue from thermal coal. A company that is already a client is refused only above 50%.\n\nSo a utility earning 40% of its revenue from coal is refused if it walks in today. It is kept if it walked in last year. Same company, same coal. The only difference is whether the bank already earns from it.\n\nThere is a fair version of this. Staying with a client can give a bank influence over its transition. If that is the reason, the policy should say so, and set a date for the higher bar to come down. Neither is there."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "25% is easy to stay under.\n\nThe threshold is measured on revenue linked to thermal coal. For power companies, the glossary says this is “primarily” revenue from coal power. A large utility also sells gas, renewable power, grid services and energy to homes. So coal's share of its revenue falls well below 25%, long before its coal plants close.\n\nThe word “primarily” leaves the rest of the calculation open. What else counts, and how much, decides whether a company is above or below the line. The policy does not say.\n\nThe test also applies to the single company, not the group. Coal held in a subsidiary is measured against that subsidiary alone, not the group that owns it."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Which companies that are not yet clients earn more than 25% of revenue from thermal coal? Not many.\n\nMostly companies that only mine coal, power producers that burn only coal, and coal traders. Their business is coal and little else. Excluding them is real, and a bank that takes them on is making a choice.\n\nBut most of the world's coal power belongs to large utilities with many businesses. Those utilities are already banked. So they fall under the rule for existing clients, at twice the threshold, and the transition plan rule, which asks them for a document.\n\nThis rule catches the companies Société Générale was least likely to be asked to finance."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green from its own reading of the wording. Watchtower states no weakness on this document, so there is nothing sourced underneath these options — they sit entirely below the opinion boundary and a human must read them before publication.",
      "what_needs_to_change": [
        {
          "title": "Use one number for new and existing clients",
          "content": "25% to be refused, fifty to be dropped. The gap shows how much more coal the bank accepts from clients it already earns from."
        },
        {
          "title": "Finish the revenue definition",
          "content": "For power companies, the measure is “primarily” coal power revenue. Saying what else counts would settle cases near the line."
        },
        {
          "title": "Apply the test to the whole group",
          "content": "The policy's other client tests reach parent and holding companies. This one does not, so coal in a subsidiary is measured on its own."
        }
      ],
      "what_needs_to_change_closing": "Until then, the lower bar applies only to companies the bank does not yet serve.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "A genuine bar on new coal-dependent clients at 25%, and nothing at all asked of the existing book.",
      "how_it_compares": {
        "text": "Some of Société Générale's other coal client rules measure the whole group, not the single company.",
        "links": [
          {
            "slug": "societe-generale-thermal-mining-20pc",
            "title": "Société Générale's Group Test for Thermal Coal Miners"
          },
          {
            "slug": "societe-generale-thermal-developers",
            "title": "Société Générale's Exclusion of Thermal Coal Developers"
          }
        ]
      }
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not take on new clients earning more than 25% of revenue from thermal coal. We have not yet reviewed what it financed against this commitment.",
    "headline_figure": {
      "display": "Not yet checked",
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-09-28",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 306, document 28051",
    "reading": "drafted"
  }
};
