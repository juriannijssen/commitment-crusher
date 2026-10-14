/* Commitment data — generated from commitments/commitment-societe-generale-mining-metallurgical-50pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-mining-metallurgical-50pc",
    "bank": "Société Générale",
    "commitment_number": 2,
    "category": "mining",
    "effective_date": "2026-04-01",
    "title": "Société Générale's 50% Threshold on Metallurgical Coal",
    "short_title": "50% Threshold on Metallurgical Coal",
    "subject": "Metallurgical Coal Mining",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this rule in its Mining Sector Policy, published in April 2026. Metallurgical coal is the coal used to make steel rather than electricity. The bank will not enter into a new relationship with a company that earns more than half its revenue from mining it.",
    "naive_reading": "it will not take on companies that mine coal for steel-making as clients",
    "plain_language_note": "A published number, which is worth something. What surrounds it decides how much.",
    "sources_intro": "This rule comes from a single policy document, and we quote one passage from it below.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "mining2026",
        "document_title": "Société Générale Mining Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/mining-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28052/synthesis?run=196&commitment=2",
        "watchtower_document_id": 28052,
        "watchtower_institution": "societe_generale",
        "synthesis_run": 196,
        "version_label": "April 2026",
        "published": "2026-04-01",
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "published_source": null,
        "published_confidence": null,
        "verbatim_check": {
          "document": "28052-societe-generale-mining.md",
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
        "source_id": "mining2026",
        "title": "The promise",
        "intro": "This is one line in the short list of companies the bank will not take on as clients. It carries the only percentage in the document.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not enter into a new relationship with… any company with more than 50% of their revenue linked to metallurgical coal extraction.",
        "plain_rendering": "Société Générale will not enter into a new relationship with any company with more than 50% of their revenue linked to metallurgical coal extraction.",
        "phrases": [
          {
            "id": "new-relationship",
            "label": "enter into a new relationship",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              19,
              48
            ],
            "plain_range": [
              26,
              55
            ],
            "means": "This explains who this commitment applies to: companies that are not already clients.",
            "lets_through": [
              "Adding the word “new” means every company already banked keeps its financing. A producer that earns 90% of its revenue from metallurgical coal and is already a client is outside this commitment. It can keep drawing on its existing arrangements.",
              "This commitment is about the bank's client list rather than about coal. Nothing in it asks an existing client to change anything."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "fifty",
            "label": "more than 50% of their revenue",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              72,
              102
            ],
            "plain_range": [
              78,
              108
            ],
            "means": "This explains the threshold. More than half the company's income has to come from mining metallurgical coal before this commitment applies.",
            "lets_through": [
              "This wording lets through any diversified miner. A company can be one of the world's largest metallurgical coal producers and still sit far below half its revenue. That is because it also mines iron ore, copper, and much else."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "metallurgical-coal",
      "revenue-threshold",
      "client-level",
      "capital-markets",
      "consolidated-accounts"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 196,
      "document_id": 28052,
      "institution": "societe_generale",
      "commitment_index": 2,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28052/synthesis?run=196&commitment=2",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        14492,
        14580
      ],
      "summary_text": "Societe Generale will not enter into new relationships with companies deriving more than 50% of their revenue from metallurgical coal extraction, subject to standard policy exceptions.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "metallurgical",
          "oil_gas_types": null,
          "value_chain": "upstream",
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
          "transaction_status": "new_and_existing"
        }
      },
      "triggers": [
        {
          "metric": "revenue_share",
          "inequality": ">",
          "value": 50,
          "definition": "revenue linked to metallurgical coal extraction"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Pre-existing business commitments or opportunities at an advanced stage of negotiation",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": false,
          "standing": true,
          "where": "Section 7, Application date and updates"
        },
        {
          "condition": "Contradictory to provisions of any applicable local law, rule, regulation or regulatory guidance or directive",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": false,
          "standing": true,
          "where": "Section 7, Application date and updates"
        },
        {
          "condition": "Exceptional deviations approved by a senior management-chaired group oversight committee",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": true,
          "standing": true,
          "where": "Section 5, Implementation process"
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 0 fields corrected]\nCHANGES:\n- No changes required. The extractions accurately reflect the policy text and adhere to the schema rules.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "Pre-existing business commitments or opportunities at an advanced stage of negotiation",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "where": "Section 7, Application date and updates"
      },
      {
        "condition": "Contradictory to provisions of any applicable local law, rule, regulation or regulatory guidance or directive",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "where": "Section 7, Application date and updates"
      },
      {
        "condition": "Exceptional deviations approved by a senior management-chaired group oversight committee",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "where": "Section 5, Implementation process"
      }
    ],
    "general_clauses_page": null,
    "disagreements": [
      {
        "field": "weaknesses",
        "severity": "omission",
        "watchtower": "No weakness recorded — as on every commitment in this document.",
        "bank_green": "Watchtower states no weakness anywhere in the Mining synthesis, on any of the five commitments. The phrases highlighted on this page are Bank.Green's reading and are labelled as such.",
        "action": "Populate the weaknesses field for this document. Our highlighted phrases are the proposal."
      }
    ],
    "assessment": {
      "strength": "crushed",
      "strength_derivation": {
        "rule": "spec v3.29 §4.1 — the gap between the naive reading and what it catches",
        "inputs_source": "Watchtower record",
        "record_score": "hollowed",
        "weakness": false,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": false,
        "new_business_only": true,
        "total": 1
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "It only turns away new clients, and only those earning more than half their revenue from this coal. Existing clients, and large mining groups with other products, are not affected.",
      "actual_reading": "it will not open a new client relationship with a company that earns more than half of its revenue from mining coal for steel-making",
      "gaps": [
        {
          "title": "Existing clients stay",
          "phrase_refs": [
            "new-relationship"
          ],
          "text": "The commitment only decides who Société Générale takes on. A producer that is already a client keeps its financing, even if steel-making coal is 90% of its business."
        },
        {
          "title": "Large mining groups stay under half",
          "phrase_refs": [
            "fifty"
          ],
          "text": "A mining group can be a top producer of this coal and still earn most of its revenue from iron ore, copper, and other products. That puts it below the line."
        }
      ],
      "in_practice": "Metallurgical coal is the coal used to make steel, rather than burned for power. This commitment is about which companies Société Générale accepts as new clients. It asks nothing of the clients it already has.\n\nTake a company that mines only this coal and has never banked with Société Générale. If it asks to become a client, the answer is no, because more than half its revenue comes from this coal.\n\nNow suppose the same company was already a client before the policy. This commitment does not apply to it, so it keeps its existing arrangements and can keep drawing on them. Nothing in the wording asks it to change anything.\n\nThen take a large mining group that produces a great deal of this coal, but also mines iron ore and copper. Coal for steel-making may be 20% of its revenue. That is far below half, so even as a new client it can be taken on.\n\nSo a company has to meet two tests before this commitment applies. It has to be new to the bank, and steel-making coal has to be more than half of its business. What is left is a new client that does little else but mine this coal."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not take on new clients earning more than 50% of revenue from metallurgical coal extraction. We have not reviewed its financing against this commitment yet.",
    "headline_figure": {
      "display": "Not yet checked",
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-10-02",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 196, document 28052",
    "reading": "drafted"
  }
};
