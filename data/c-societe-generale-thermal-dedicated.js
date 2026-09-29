/* Commitment data — generated from commitments/commitment-societe-generale-thermal-dedicated.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-thermal-dedicated",
    "bank": "Société Générale",
    "commitment_number": 9,
    "category": "thermal_coal",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Restriction on Financing Thermal Coal Activities",
    "short_title": "Restriction on Financing Thermal Coal Activities",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Thermal Coal Sector Policy, published in April 2026. It covers the whole coal chain — mining it, moving it, trading it, transforming it, burning it, and the grid infrastructure attached to the power stations. What it covers is one type of financing.",
    "naive_reading": "it will not finance coal mining, coal trading or coal power",
    "plain_language_note": "The widest list of activities in the document, behind the narrowest description of what is being refused.",
    "sources_intro": "One policy document states this exclusion, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "tcp2026",
        "document_title": "Société Générale Thermal Coal Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/thermal-coal-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=9",
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
        "source_id": "tcp2026",
        "title": "The promise",
        "intro": "Société Générale will not provide dedicated financing for thermal coal mining, transport, trading or transformation, or for coal power plants. Dedicated financing is financing for a named activity.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide dedicated financial transactions, products and services when the underlying activities are… Thermal coal mining, transport, trading or transformation; or Coal-fueled power production units and associated infrastructures.",
        "plain_rendering": "Société Générale will not provide dedicated financial transactions, products and services when the underlying activities are thermal coal mining, transport, trading or transformation, or Coal-fueled power production units and associated infrastructures.",
        "phrases": [
          {
            "id": "dedicated9",
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
            "means": "This explains what financing this commitment covers: dedicated financing only. That is financing raised for a named activity, where it is clear what the financing is used for.",
            "lets_through": [
              "The word “dedicated” lets through general corporate financing. A utility borrowing at group level, drawing on a revolving credit facility or issuing a bond is not asking for a dedicated transaction, so this commitment never applies, however much coal it burns."
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
      "thermal-coal",
      "dedicated-transaction",
      "project-finance",
      "corporate-finance",
      "midstream"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 306,
      "document_id": 28051,
      "institution": "societe_generale",
      "commitment_index": 9,
      "commitment_id": "8c52bec4-00ee-51ea-ab9e-ff39a8a91f47",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=9",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        13071,
        13322
      ],
      "summary_text": "Societe Generale excludes all dedicated financing and financial products for thermal coal mining, transport, trading, transformation, and coal-fueled power production units and associated infrastructure.",
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
          "relationship_status": null,
          "certainty": null
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
        "commitment_specific_carve_outs": 0,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 1
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "It stops only financing set aside for a named coal activity. A coal company that borrows for the company as a whole can spend the loan on the same coal.",
      "how_it_compares": {
        "text": "Only Société Générale's client rules reach coal companies. All of them except the rule for coal miners stop at new business. Société Générale's mining policy covers infrastructure only when it is “primarily linked to” mining.",
        "links": [
          {
            "slug": "societe-generale-thermal-mining-20pc",
            "title": "Société Générale's Group Test for Thermal Coal Miners"
          },
          {
            "slug": "societe-generale-thermal-prospect-25pc",
            "title": "Société Générale's 25% Threshold for New Clients"
          },
          {
            "slug": "societe-generale-thermal-client-50pc",
            "title": "Société Générale's 50% Threshold for Existing Clients"
          },
          {
            "slug": "societe-generale-thermal-developers",
            "title": "Société Générale's Exclusion of Thermal Coal Developers"
          },
          {
            "slug": "societe-generale-mining-infrastructure",
            "title": "Société Générale's Restriction on Coal and Asbestos Mining Infrastructure"
          }
        ]
      },
      "actual_reading": "it will not give financing set aside for coal mining, transport, trading or processing, or for coal power plants and the infrastructure attached to them",
      "gaps": [
        {
          "title": "Loans to the company, not the activity",
          "phrase_refs": [
            "dedicated9"
          ],
          "text": "The commitment covers dedicated financing only: financing raised for a named activity. A utility that borrows for the company as a whole, draws on a credit line or issues a bond is not covered."
        }
      ],
      "in_practice": "Thermal coal is the coal burned in power stations. This commitment lists almost every step of the coal chain: mining, transport, trading, processing and power plants. But it only covers dedicated financing.\n\nDedicated financing is financing raised for a named activity, where it is clear what it pays for. A loan to build one coal plant is an example. If a power company asks Société Générale for that, the answer is no.\n\nNow take the same power company asking for a general loan to the company. General corporate financing is a loan to the company as a whole, which does not say what it pays for. The commitment does not apply. The company can spend the loan on anything, including coal.\n\nThe same goes for a revolving credit facility. That is a credit line the company can draw on and repay as it needs. And it goes for a bond the company sells to investors. Neither names a coal activity, so neither is covered.\n\nLarge utilities and mining companies often pay for their plants and mines out of general borrowing. So this commitment stops the loan with a coal plant's name on it. It does not stop Société Générale lending to the company that runs the plant, however much coal it burns.",
      "gets_right": "The list of activities is wide: mining, transport, trading, processing, power plants and the infrastructure attached to them. There is no threshold and no qualifier on it."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not provide dedicated financing for thermal coal mining, transport, trading, transformation or coal-fired power. We have not yet reviewed what it financed against this commitment.",
    "headline_figure": {
      "display": "Not yet checked",
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-09-29",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 306, document 28051",
    "reading": "drafted"
  }
};
