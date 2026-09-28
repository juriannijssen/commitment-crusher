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
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026, as its own item in the list of transactions the bank will not execute. Shale is separated from the other unconventional resources and given a shorter sentence.",
    "naive_reading": "it will not finance drilling for shale oil and shale gas",
    "plain_language_note": "The shortest exclusion in the policy. What it leaves out is visible only by comparing it with the item printed directly above it.",
    "sources_intro": "One policy document states this exclusion. Two passages are quoted here: the ban, and the glossary entry describing what shale extraction involves.",
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
        "intro": "This line comes right after the ban on Arctic, Amazon and heavy oil. It is shorter than that one.",
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
            "means": "This explains how far this commitment reaches. The item printed directly above it covers exploration, production or trading. This one stops at production.",
            "lets_through": [
              "This wording lets through trading of shale oil and gas. The bank excluded trading for Arctic, Amazonian and heavy oil in the sentence above and did not repeat it here, so shale trading is outside this commitment.",
              "It also lets through everything downstream of the wellhead — gathering, processing, transport and export of shale production, none of which is named."
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
            "means": "This definition of “shale oil and shale gas” matches what the term usually means, and nothing in the wording narrows it. The words “frequently entails” connect shale to fracturing as a description of what usually happens, not as a condition on what counts. Worth knowing that fracking is used outside shale formations too, so a rule about the rock is not a rule about the technique.",
            "lets_through": [
              "This wording lets through nothing on its own — this is a glossary note rather than an operative test. It matters because fracking appears here as a characteristic of shale rather than as an activity the bank refuses to finance."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
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
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "The gap here is visible only by comparison with the sentence directly above it, which is the clearest way to show that the omission was a choice.",
          "text": "This exclusion covers exploring and producing shale oil or gas. Trading is not covered.\n\nShale is widely traded. It moves through gathering pipes, processing plants, pipelines and export terminals. A bank can finance all of that without financing a single well.\n\nAnd it only covers dedicated deals. A shale producer that borrows as a whole company is outside it.\n\nSo the exclusion covers the drilling, through the narrowest route, for the resource with the longest chain behind it."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "This exclusion catches a shale well drilled with financing raised for that well.\n\nThat is real, and the bank should be held to it. But shale is almost always financed at company level. It is a business of many small wells, drilled all the time, and paid for from credit lines and bonds. A dedicated deal is rare in shale, because each well is small and one of many.\n\nSo the exclusion does not fit the industry it names. It is written as if shale were financed like a single offshore platform.\n\nAt company level, the test is the 30% threshold, which a diversified producer passes easily. A large shale company with other businesses can bank here, and pay for its drilling with financing this policy never touches."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "This shale exclusion is narrower than it first looks. The useful comparison is with banks that name the method, not the rock.\n\nSeveral European banks now restrict fracking itself, wherever it is used. Fracking means cracking rock with high-pressure fluid to release oil or gas. Société Générale restricts shale oil and gas instead. It mentions fracking only in a glossary note.\n\nThat difference matters. Fracking is also used outside shale, and a policy aimed at the rock does not follow the method. It also means the policy has no position on fracking itself.\n\nCompare it with a bank that excludes the method and covers trading. Against that, this sentence covers less on both counts."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "what_needs_to_change": [
        {
          "title": "Add trading",
          "content": "Trading of shale is left out, and shale is widely traded. The exclusion should cover trading too."
        },
        {
          "title": "Name fracking, not just shale",
          "content": "Fracking appears once in this policy, in a glossary note. A restriction on the method would follow it wherever it is used."
        },
        {
          "title": "Cover all financing, not just dedicated deals",
          "content": "Shale is paid for from company credit lines, well by well. A rule that only covers dedicated deals targets a way of financing shale that is rare."
        }
      ],
      "what_needs_to_change_closing": "Until then, shale is the resource whose financing looks least like the rule written for it.",
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Verdict options were drafted before the analysis was re-based on Watchtower's record. They are Bank.Green interpretation and sit below the opinion boundary, but they have not been re-read against the derived rating.",
      "strength_reason": "Dedicated shale financing is blocked; group borrowing, trading and everything downstream of the wellhead are not.",
      "how_it_compares": {
        "text": "Société Générale's rule on unconventional oil also covers trading Arctic oil, Amazon oil, oil sands and extra heavy oil. At company level, shale is only caught by the 30% threshold on group revenue.",
        "links": [
          {
            "slug": "societe-generale-txn-unconventional-oil",
            "title": "Société Générale's Transaction Restriction on Unconventional Oil"
          },
          {
            "slug": "societe-generale-30pc-unconventional",
            "title": "Société Générale's 30% Threshold on Unconventional Oil & Gas"
          }
        ]
      }
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance transactions for the exploration and production of shale oil or gas. We have not yet reviewed what it financed against this commitment.",
    "headline_figure": {
      "display": "Not yet checked",
      "combines": "No financing has been linked to this commitment yet",
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-09-28",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 197, document 23944",
    "reading": "drafted"
  }
};
