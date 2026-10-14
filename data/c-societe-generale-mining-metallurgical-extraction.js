/* Commitment data — generated from commitments/commitment-societe-generale-mining-metallurgical-extraction.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-mining-metallurgical-extraction",
    "bank": "Société Générale",
    "commitment_number": 4,
    "category": "mining",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Restriction on Financing Metallurgical Coal Extraction",
    "short_title": "Restriction on Financing Metallurgical Coal Extraction",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Mining Sector Policy, published in April 2026. Rather than deciding which companies the bank takes on, this commitment decides which projects it will finance. It will finance none whose underlying activity is mining metallurgical coal.",
    "naive_reading": "it will not finance the mining of coal for steel-making",
    "plain_language_note": "Four words of activity, and one phrase at the front that decides what financing is covered.",
    "sources_intro": "This exclusion comes from a single policy document, and we quote one passage from it below.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "mining2026",
        "document_title": "Société Générale Mining Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/mining-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28052/synthesis?run=196&commitment=4",
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
        "intro": "Société Générale will not provide dedicated financing for metallurgical coal extraction.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide dedicated financial transactions, products and services when the underlying activities are… metallurgical coal extraction activities.",
        "plain_rendering": "Société Générale will not provide dedicated financial transactions, products and services when the underlying activities are metallurgical coal extraction activities.",
        "phrases": [
          {
            "id": "dedicated",
            "label": "dedicated financial transactions, products and services",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              27,
              82
            ],
            "plain_range": [
              34,
              89
            ],
            "means": "This explains what financing this commitment covers: dedicated financing only. Société Générale says no to a request raised for a named activity, where it is clear what the financing is used for. It does not say no to the company. The same borrower can come back for a general loan or a bond issue, and this commitment does not apply.",
            "lets_through": [
              "The word “dedicated” lets through general corporate financing. A miner borrowing at group level is not asking for a dedicated transaction, so this commitment never applies.",
              "It also lets through the company itself. A mining company can take general financing from the bank, and this commitment does not apply."
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
      "dedicated-transaction",
      "corporate-finance",
      "project-finance"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 196,
      "document_id": 28052,
      "institution": "societe_generale",
      "commitment_index": 4,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28052/synthesis?run=196&commitment=4",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        17400,
        17441
      ],
      "summary_text": "Societe Generale will not provide dedicated financial transactions, products, and services for metallurgical coal extraction activities.",
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
      "strength": "hollowed",
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
      "strength_reason": "It stops only financing set aside for mining this coal. A miner that borrows for the company as a whole can spend that loan on the same mines.",
      "actual_reading": "it will not give financing set aside for mining coal for steel-making, such as a loan or service named for one mine",
      "gaps": [
        {
          "title": "Loans to the company, not the mine",
          "phrase_refs": [
            "dedicated"
          ],
          "text": "The commitment covers dedicated financing only: financing raised for a named activity. A miner that borrows for the company as a whole, or issues a bond, is not asking for dedicated financing."
        }
      ],
      "in_practice": "Metallurgical coal is the coal used to make steel, rather than burned for power. This commitment says Société Générale will not provide dedicated financing for mining it.\n\nDedicated financing is financing raised for a named activity, where it is clear what it pays for. A loan to open one particular mine is an example, and if a miner asks for one, Société Générale says no.\n\nNow take the same miner asking for a general loan. General corporate financing is a loan to the company as a whole, which does not say what it pays for. So this commitment does not apply, and the miner can spend the loan on anything, including the mine it was refused financing for.\n\nThe same goes for a credit line the company draws on when it needs to, or a bond it sells to investors. Neither is dedicated to the mine, so neither is covered.\n\nLarge mining companies often pay for their mines out of general borrowing rather than a loan named for one mine. So this commitment stops the most visible kind of deal. But it leaves open every other way Société Générale can lend to the company doing the mining.",
      "gets_right": "The activity is named with no threshold and no qualifier. For financing set aside for mining coal for steel-making, the answer is no, whoever the client is."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance projects whose underlying activity is metallurgical coal extraction. We have not reviewed its financing against this commitment yet.",
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
