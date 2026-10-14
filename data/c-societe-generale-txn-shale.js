/* Commitment data — generated from commitments/commitment-societe-generale-txn-shale.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-txn-shale",
    "bank": "Société Générale",
    "commitment_number": 5,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Restriction on Shale Transactions",
    "short_title": "Restriction on Shale Transactions",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026. It is a separate item in the list of transactions the bank will not carry out. Shale is set apart from the other unconventional resources and given a shorter sentence.",
    "naive_reading": "it will not finance drilling for shale oil and shale gas",
    "plain_language_note": "A short exclusion, and what it leaves out matters as much as what it covers.",
    "sources_intro": "This exclusion comes from a single policy document. We quote two passages from it below: the exclusion itself, and the glossary entry describing what shale extraction involves.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=5",
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
        "intro": "This line comes right after the exclusion of Arctic, Amazon, and heavy oil, and it is shorter than that one.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not execute dedicated transactions or provide dedicated financial products and services when the underlying activities are… exploration and production of shale oil or gas.",
        "plain_rendering": "Société Générale will not execute dedicated transactions, or provide dedicated financial products and services, when the underlying activities are exploration and production of shale oil or gas.",
        "phrases": [
          {
            "id": "dedicated",
            "label": "dedicated transactions",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              27,
              49
            ],
            "plain_range": [
              34,
              56
            ],
            "means": "This explains what financing this commitment covers: dedicated financing only. That is financing raised for a named activity, where it is clear what the financing is used for.",
            "lets_through": [
              "The word “dedicated” blocks project financing, but it allows general corporate financing. A shale producer borrowing at group level is not asking for a dedicated transaction, so this commitment does not apply."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          },
          {
            "id": "eandp",
            "label": "exploration and production",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              139,
              165
            ],
            "plain_range": [
              147,
              173
            ],
            "means": "This explains how far this commitment reaches. The item printed directly above it covers exploration, production, or trading, but this one stops at production.",
            "lets_through": [
              "This wording lets through trading of shale oil and gas. The sentence names exploration and production only.",
              "It also lets through everything downstream of the wellhead: gathering, processing, transport, and export of shale production. None of these is named."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          },
          {
            "id": "see-shale",
            "label": "shale oil or gas",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              169,
              185
            ],
            "plain_range": [
              177,
              193
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "definition",
        "source_id": "ogp2026",
        "title": "The definition of “shale oil and shale gas”",
        "intro": "How Société Générale's policy defines it in the glossary.",
        "location": {
          "distance": "end_of_document",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Shale oil and shale gas are oil and gas resources trapped within shale formations. Their extraction frequently entails intensive large-scale developments including specific hydraulic fracturing techniques.",
        "plain_rendering": "Shale oil and shale gas are oil and gas resources trapped within shale formations. Their extraction frequently entails intensive large-scale developments including specific hydraulic fracturing techniques.",
        "phrases": [
          {
            "id": "frequently",
            "label": "frequently entails",
            "type": "undefined_term",
            "verbatim_range": [
              100,
              118
            ],
            "plain_range": [
              100,
              118
            ],
            "means": "This definition of “shale oil and shale gas” matches what the term usually means, and nothing in the wording narrows it. The International Energy Agency (IEA) describes shale gas as gas held in shale rock that is generally produced by hydraulic fracturing. The words “frequently entails” link shale to fracturing as a description of what usually happens, not as a condition on what counts. Fracking is also used outside shale formations, so a rule about the rock is not a rule about the technique.",
            "lets_through": [
              "This wording lets through nothing on its own, because it is a glossary note rather than an operative test. It matters because fracking appears here as a feature of shale, not as an activity the bank refuses to finance."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "ordinary_source": [
              {
                "body": "International Energy Agency",
                "title": "IEA Glossary",
                "term": "Shale gas",
                "url": "https://www.iea.org/glossary#shale-gas"
              }
            ],
            "bank_definition": null
          }
        ],
        "ordinary_direction": "same",
        "plain_gloss": "Shale oil and shale gas are oil and gas held inside shale rock, rather than pooled in a reservoir a well can tap directly.",
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "shale"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 5,
      "commitment_id": "fc83f3b7-78fd-5aa6-b6fc-38d75026e2df",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=5",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        20882,
        21213
      ],
      "summary_text": "The Group will not provide project-level financing or dedicated financial services for the exploration and production of shale oil or gas.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "shale"
          ],
          "value_chain": "upstream",
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
    "disagreements": [],
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
        "total": 1,
        "previous_editorial_rating": "hollowed",
        "changed": false
      },
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "strength_reason": "A loan for a shale well is refused. But shale producers can borrow as companies, and trading, processing, and moving shale oil and gas are not named.",
      "actual_reading": "it will not give financing labeled for exploring for or producing shale oil or gas, while shale producers can still borrow as companies and their output can be traded and moved",
      "gaps": [
        {
          "title": "Loans to shale producers as companies",
          "text": "The commitment covers “dedicated transactions” only: financing raised for a named activity. A shale producer can take a general loan or issue a bond and spend it on drilling.",
          "phrase_refs": [
            "dedicated"
          ]
        },
        {
          "title": "Trading, processing, and transport",
          "text": "The sentence names only exploration and production. Trading shale oil and gas is not named, and neither is anything after the well: gathering, processing, pipelines, and export.",
          "phrase_refs": [
            "eandp"
          ]
        }
      ],
      "in_practice": "Shale oil and gas are trapped in dense rock called shale. Getting them out usually means fracking: pumping water, sand, and chemicals into the rock at high pressure to crack it open. Much of it happens in North America.\n\nIf a shale producer asks Société Générale for a loan to drill a named group of wells, the answer is no. That covers exploring for shale and producing it.\n\nBut the same producer can ask for a general loan to the company as a whole, which does not say what it pays for. Or it can issue a bond. Neither names the wells, so this commitment does not apply, and the producer can spend the financing on drilling.\n\nThen follow the oil and gas out of the ground. A trader that buys shale oil can get financing for that trade. So can the company that gathers the gas, processes it, pipes it, or exports it. None of that is exploration or production.\n\nThis commitment is also about the rock, not the technique. The policy's own definition says shale extraction frequently involves fracking, but it does not refuse fracking as such. So fracking outside shale rock is not covered.\n\nThis commitment stops financing that names a shale well or field. But the companies that drill them, and the chain that sells what they produce, can still be financed.",
      "gets_right": "The sentence sets no threshold and no size test. Financing labeled for finding or producing shale oil or gas is refused, wherever the shale is."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance transactions for the exploration and production of shale oil or gas. We have not reviewed its financing against this commitment yet.",
    "headline_figure": {
      "display": "Not yet checked",
      "combines": "No financing has been linked to this commitment yet",
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-10-02",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 197, document 23944",
    "reading": "drafted"
  }
};
