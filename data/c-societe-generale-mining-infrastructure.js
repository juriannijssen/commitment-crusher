/* Commitment data — generated from commitments/commitment-societe-generale-mining-infrastructure.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-mining-infrastructure",
    "bank": "Société Générale",
    "commitment_number": 5,
    "category": "mining",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Restriction on Coal and Asbestos Mining Infrastructure",
    "short_title": "Restriction on Coal and Asbestos Mining Infrastructure",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Mining Sector Policy, published in April 2026. It extends the restriction from the mine to the rail lines, conveyors, and terminals that carry what comes out of it. It applies where those are primarily linked to metallurgical coal or asbestos.",
    "naive_reading": "it will not finance the rail lines and terminals that coal and asbestos mines depend on",
    "plain_language_note": "One line, and everything turns on an adverb the policy never defines.",
    "sources_intro": "This exclusion comes from a single policy document, and we quote one passage from it below.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "mining2026",
        "document_title": "Société Générale Mining Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/mining-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28052/synthesis?run=196&commitment=5",
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
        "intro": "This commitment extends the restriction from the mine to the assets that carry what it produces, such as rail lines and terminals.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide dedicated financial transactions, products and services when the underlying activities are… infrastructures primarily linked to metallurgical coal extraction or asbestos mining.",
        "plain_rendering": "Société Générale will not provide dedicated financial transactions, products and services when the underlying activities are infrastructures primarily linked to metallurgical coal extraction or asbestos mining.",
        "phrases": [
          {
            "id": "primarily",
            "label": "primarily linked to",
            "type": "undefined_term",
            "verbatim_range": [
              135,
              154
            ],
            "plain_range": [
              141,
              160
            ],
            "means": "The word “primarily” means the bank only has to decide that most of an asset serves metallurgical coal or asbestos. The policy never says how much counts as most, measured against what, or by whom.",
            "lets_through": [
              "This wording lets through every shared rail line, conveyor, and port terminal. Mining infrastructure is built to be shared, because that is what makes it pay. So an asset carrying coal alongside iron ore is open to argument in a way a dedicated one is not.",
              "It also lets through any asset whose sponsor can present the calculation in a way that keeps it under the line. No basis for the calculation is specified."
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
      "midstream",
      "dedicated-transaction",
      "asbestos"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 196,
      "document_id": 28052,
      "institution": "societe_generale",
      "commitment_index": 5,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28052/synthesis?run=196&commitment=5",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        17474,
        17559
      ],
      "summary_text": "Societe Generale will not provide dedicated financial transactions, products, and services for infrastructures primarily linked to metallurgical coal extraction.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "metallurgical",
          "oil_gas_types": null,
          "value_chain": "midstream",
          "activity_scope": "new_and_existing"
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
      "triggers": [
        {
          "metric": "other",
          "inequality": null,
          "value": null,
          "definition": "Infrastructures primarily linked to metallurgical coal extraction"
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
        "project_finance_only": true,
        "new_business_only": false,
        "total": 1
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "It covers only rail lines and terminals that mostly serve steel-making coal or asbestos. These assets are built to be shared, and the policy does not say how “primarily” is measured.",
      "actual_reading": "it will not give financing set aside for a rail line, conveyor or terminal that it judges mainly serves a steel-making coal or asbestos mine",
      "gaps": [
        {
          "title": "Shared lines and terminals",
          "phrase_refs": [
            "primarily"
          ],
          "text": "Mining rail lines, conveyors, and ports are built to carry several products, because that is what makes them pay. A line carrying coal alongside iron ore can be argued outside this commitment."
        },
        {
          "title": "No measure for “primarily”",
          "phrase_refs": [
            "primarily"
          ],
          "text": "The policy does not say how much counts as most, measured against what, or by whom. The owner of an asset can present the figures in the way that keeps it under the line."
        }
      ],
      "in_practice": "Metallurgical coal is the coal used to make steel, rather than burned for power. Mines for it, and for asbestos, need rail lines, conveyors, and ports to move what they dig up.\n\nTake a rail line that carries only coal from one steel-making coal mine. Financing set aside for that line is refused, and that is the case this commitment clearly covers.\n\nNow take a rail line that carries coal and iron ore from several mines. Is it “primarily linked to” coal extraction? The policy does not say whether that is judged by weight, by revenue, or by contracts. So the owner can pick the measure that keeps coal under half, and the line can then be financed.\n\nPort terminals work the same way. A terminal that loads coal alongside other cargo is open to argument in a way a coal-only terminal is not. And shared assets are the normal case, because one mine rarely pays for a line on its own.\n\nThis commitment also covers only financing set aside for the asset. A general loan to the company that owns the rail line does not say what it pays for. So it is outside this wording, whatever the line carries.\n\nSo what is left is a narrow case: financing named for an asset that serves this coal or asbestos and little else."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance infrastructure primarily linked to metallurgical coal or asbestos mining. We have not reviewed its financing against this commitment yet.",
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
