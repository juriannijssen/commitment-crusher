/* Commitment data — generated from commitments/commitment-societe-generale-mining-asset-sales.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-mining-asset-sales",
    "bank": "Société Générale",
    "commitment_number": 3,
    "category": "mining",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Restriction on Coal and Asbestos Asset Deals",
    "short_title": "Restriction on Coal and Asbestos Asset Deals",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Mining Sector Policy, published in April 2026. It has a section of its own, separate from the client rules and from project financing. The bank will not help anyone buy or sell a metallurgical coal mine or an asbestos mine.",
    "naive_reading": "it will not help buy or sell coal and asbestos mining assets",
    "plain_language_note": "One sentence, and the thing it stops is a change of ownership rather than a mine.",
    "sources_intro": "This exclusion comes from a single policy document, and we quote one passage from it below.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "mining2026",
        "document_title": "Société Générale Mining Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/mining-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28052/synthesis?run=196&commitment=3",
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
          "passages": 1,
          "found": 1,
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
        "intro": "Société Générale will not provide services aimed at buying or selling metallurgical coal or asbestos mining assets.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide financial transactions, products and services aiming at the sale or acquisition of metallurgical coal mining or asbestos mining assets.",
        "plain_rendering": "Société Générale will not provide financial transactions, products and services aiming at the sale or acquisition of metallurgical coal mining or asbestos mining assets.",
        "phrases": [
          {
            "id": "sale-acquisition",
            "label": "aiming at the sale or acquisition",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              73,
              106
            ],
            "plain_range": [
              80,
              113
            ],
            "means": "This explains what this commitment covers: transferring a mine from one owner to another. It is about ownership changing hands, not about the mine operating.",
            "lets_through": [
              "This wording lets through every mine that stays where it is. Nothing here stops a company mining metallurgical coal indefinitely, as long as it does not try to sell.",
              "It also cuts both ways. Blocking the sale of a coal mine keeps it with its current owner, which is not necessarily the better outcome. A buyer committed to closing it early cannot be financed either."
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
      "advisory",
      "dedicated-transaction",
      "asbestos"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 196,
      "document_id": 28052,
      "institution": "societe_generale",
      "commitment_index": 3,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28052/synthesis?run=196&commitment=3",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        17027,
        17189
      ],
      "summary_text": "Societe Generale will not provide financial transactions, products, or services for the sale or acquisition of metallurgical coal mining assets.",
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
      "strength": "holds",
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
      "strength_reason": "It does what it says. It is a rule about who owns a mine, not about whether the mine keeps working.",
      "actual_reading": "it will not provide any financing, product or service aimed at buying or selling a mine for steel-making coal or asbestos",
      "gaps": [],
      "in_practice": "Metallurgical coal is the coal used to make steel, rather than burned for power. This commitment covers mines for that coal and for asbestos. It covers every kind of service aimed at buying or selling one: loans, advice, and anything else.\n\nTake a company that wants to buy a metallurgical coal mine. Société Générale will not finance the purchase or advise on it, and the same goes for the owner that wants to sell. That is what this commitment promises, and it has no exception.\n\nThis commitment does not cover the mine itself. A company that keeps and works its mine is unaffected, and nothing here stops it from expanding. Nor does anything stop Société Générale from lending to it for other purposes.\n\nThis commitment also cuts both ways. Blocking a sale keeps the mine with its current owner. A buyer who plans to close and restore the mine is refused on the same terms as one who plans to expand it. The wording does not tell the two apart."
    },
    "featured": {
      "rank": 10,
      "kind": "holds, and cuts both ways",
      "because": "Does exactly what it promises — and shows why that can still leave the mine running."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not help buy or sell metallurgical coal or asbestos mining assets. We have not reviewed its financing against this commitment yet.",
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
