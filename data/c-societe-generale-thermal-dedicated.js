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
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "The activity list is the most complete in the document and it is attached to the least-used kind of financing.",
          "text": "The list of activities is wide. It covers coal mining, transport, trading and processing, coal power plants and the grid links attached to them. There is no threshold and no qualifier.\n\nWhat limits it is the kind of financing it refuses. It applies to “dedicated financial transactions, products and services”: financing raised for one named activity.\n\nCoal power is mostly financed at company level. A utility that uses a credit line, borrows as a group or issues a bond is not asking for a dedicated deal. So this rule never applies, however much coal it burns.\n\nThe activities are excluded, but the companies doing them are not."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Within its scope, this is well written.\n\nThere is no revenue test, no majority test and no vague word. The bank does not ask how much of a project is coal, or whether coal is its main purpose. Nor does it ask how big a share of the client's business it is. If that is what the financing is for, the answer is no.\n\nThe list is also complete. It names mining and power, and adds transport, trading and processing, and the grid links attached to coal plants.\n\nThe criticism is about which financing it reaches, not how it is written."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "This is the third time the same pattern appears in three Société Générale policies from the same month.\n\nOil and gas: eleven of fourteen commitments cover dedicated deals only. Mining: a clear ban on mining coal for steel-making, limited to dedicated deals. Thermal coal: the fullest list of activities, limited to dedicated deals.\n\nOnce is a drafting choice. Three times in one month is a pattern. The bank writes its activity bans without conditions. Then it ties them to the kind of financing these activities use least.\n\nIt is the most important finding we have on this bank. It is why these pages should be read together, not one at a time."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green from its own reading of the wording. Watchtower states no weakness on this document, so there is nothing sourced underneath these options — they sit entirely below the opinion boundary and a human must read them before publication.",
      "what_needs_to_change": [
        {
          "title": "Cover all financing, not just dedicated deals",
          "content": "Coal power is mostly financed at company level. A rule that only reaches financing for a named purpose leaves the main route open."
        },
        {
          "title": "Cover general corporate financing",
          "content": "Apply this rule to loans and bonds for the whole company, not only to dedicated transactions."
        }
      ],
      "what_needs_to_change_closing": "Until then, a full list of coal activities is tied to the least-used kind of financing.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Dedicated coal financing is blocked; a utility drawing on a group revolver is not.",
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
      }
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
    "built": "2026-09-28",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 306, document 28051",
    "reading": "drafted"
  }
};
