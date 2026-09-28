/* Commitment data — generated from commitments/commitment-societe-generale-txn-unconventional-oil.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-txn-unconventional-oil",
    "bank": "Société Générale",
    "commitment_number": 4,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Transaction Restriction on Unconventional Oil",
    "short_title": "Transaction Restriction on Unconventional Oil",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026. Where the policy's client rule decides which companies the bank will take on, this one decides which transactions it will execute: none whose underlying activity is the exploration, production or trading of Arctic oil, Ecuadorian Amazonian oil, oil sands or other extra heavy oil. There is no threshold and no percentage attached to it.",
    "naive_reading": "it will not finance oil from the Arctic, the Amazon or oil sands",
    "plain_language_note": "Nothing is hidden in this sentence. Its reach is set by two things it does not say — which part of the financing it covers, and where the Arctic starts.",
    "sources_intro": "One policy document states this exclusion. Two passages are quoted here: the ban itself, and the glossary entry that draws the boundary of the Arctic.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=4",
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
        "intro": "Société Générale will not provide dedicated financing to explore for, produce or trade Arctic, Ecuadorian Amazon, oil sands or other extra heavy oil.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not execute dedicated transactions or provide dedicated financial products and services when the underlying activities are… exploration, production or trading of: Arctic oil, Ecuadorian Amazonian oil, Oil from oil sands, or other extra heavy oil.",
        "plain_rendering": "Société Générale will not execute dedicated transactions, or provide dedicated financial products and services, when the underlying activities are exploration, production or trading of Arctic oil, Ecuadorian Amazonian oil, oil from oil sands, or other extra heavy oil.",
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
            "means": "This explains what financing this commitment covers: dedicated financing only. A dedicated transaction is financing raised for a named activity, where it is clear what the financing is used for.",
            "lets_through": [
              "The word “dedicated” lets through general corporate financing. A revolving credit facility, a term loan or a bond issued at group level is not dedicated to anything, so this commitment never applies, however much of the borrower's business is Arctic oil.",
              "It also lets through every company-level relationship that passes the policy's 30% revenue threshold. The two restrictions are the only checks, and a producer under 30% can bank here freely provided it does not ask for financing attached to a named barrel."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          },
          {
            "id": "trading",
            "label": "trading",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              166,
              173
            ],
            "plain_range": [
              174,
              181
            ],
            "means": "This explains the furthest downstream activity named. Together with exploration and production it sets how far this commitment reaches.",
            "lets_through": [
              "This wording lets through transport, storage, refining and processing of the same oil. Those are named separately in the passage below this one, and only where the infrastructure is exclusively dedicated to it."
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
        "title": "The definition of “the Arctic region”",
        "intro": "How Société Générale's policy defines it in the glossary. It says where the Arctic starts, for this policy.",
        "location": {
          "distance": "end_of_document",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Arctic region: For the sake of this policy, the Arctic region is defined as the following: Offshore areas: \"Arctic waters\" as defined in the Convention on the Safety of Life at Sea (regulation XIV/1.3) and the International Maritime Organization (IMO) Polar Code (see map p 9 of Annex 10). Onshore areas: North of the Arctic Circle (north of 66°33′47.2″ N)",
        "plain_rendering": "The Arctic region means, offshore, \"Arctic waters\" as defined in the Convention on the Safety of Life at Sea and the IMO Polar Code; and onshore, North of the Arctic Circle (north of 66°33′47.2″ N)",
        "phrases": [
          {
            "id": "north-of",
            "label": "North of the Arctic Circle (north of 66°33′47.2″ N)",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              305,
              356
            ],
            "plain_range": [
              146,
              197
            ],
            "means": "This definition of “the Arctic region” is narrower in one way and wider in another. Where the Arctic starts is a choice. Onshore Société Générale takes the strictest common line, the Arctic Circle itself, where definitions built on the tree line reach further south. It is a line of latitude, so a field one kilometre south of it is not Arctic gas under this policy. Offshore it borrows the shipping conventions' ice boundary, which in places runs south of the Circle.",
            "lets_through": [
              "This wording lets through everything south of the line. Large producing regions that are Arctic in climate, ecology and infrastructure — and are described as Arctic by the companies operating in them — sit below 66°33′ and are outside this policy entirely."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          }
        ],
        "ordinary_direction": "mixed",
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "dedicated-transaction",
      "extra-heavy-oil"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 4,
      "commitment_id": "e4d31428-23ac-577c-b0a9-87697a07035b",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=4",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        20882,
        21162
      ],
      "summary_text": "The Group will not provide project-level financing or dedicated financial services for the exploration, production, or trading of Arctic oil, Ecuadorian Amazonian oil, oil sands, or other extra heavy oil.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "arctic",
            "oil_sands"
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
          "recommended_because": "The exclusion is absolute within its scope, so everything depends on the scope, and the word 'dedicated' is the whole of it.",
          "text": "Read on its own, this sentence is absolute. No threshold, no percentage, no exception. The bank will not finance exploring, producing or trading Arctic oil, Amazon oil, oil sands or extra heavy oil.\n\nThen read the first words of the section. It applies to dedicated deals: financing raised for one named activity.\n\nMost oil and gas financing is not like that. It is a credit line, a loan or a bond for the whole company. None of it is tied to a barrel. So none of it triggers this exclusion, however much of the borrower's business is oil sands."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "This exclusion catches a project, not a company.\n\nIf someone asks Société Générale to finance a named Arctic field, Amazon block or oil sands project, the answer is no. There is no argument about percentages. That is worth having.\n\nBut project financing is a shrinking part of how oil is funded, and the largest producers use it least. A major oil company does not need financing tied to one field. A small company developing one Arctic field does, and that is exactly who this stops.\n\nSo the deal ban binds the smallest operators."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "This policy draws the Arctic line tightly.\n\nOn land, the Arctic starts at the Arctic Circle, at an exact latitude. At sea, the policy uses the Polar Code, an international shipping standard.\n\nThe cost of that precision is that a line on a map is not where the oil is. Some oil regions with an Arctic climate, Arctic wildlife and Arctic infrastructure lie south of the line. They fall outside a policy named after them. Definitions based on nature or infrastructure reach further.\n\nA precise definition is not always a strong one. This is a good example of the difference."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "what_needs_to_change": [
        {
          "title": "Cover all financing, not just dedicated deals",
          "content": "Most oil and gas financing goes to whole companies. A rule that only reaches dedicated deals leaves the main route open."
        },
        {
          "title": "Define the Arctic by more than a line",
          "content": "The Arctic Circle is exact on a map but says little about nature. Oil regions with Arctic conditions sit south of it."
        },
        {
          "title": "Cover the whole chain",
          "content": "Exploring, producing and trading are covered. Transport, storage and processing of the same oil should be covered too."
        }
      ],
      "what_needs_to_change_closing": "Until then, this exclusion is absolute within its scope, so the scope is the whole argument.",
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Verdict options were drafted before the analysis was re-based on Watchtower's record. They are Bank.Green interpretation and sit below the opinion boundary, but they have not been re-read against the derived rating.",
      "strength_reason": "Dedicated financing of that production is blocked; transport, storage and refining of the same oil are left out.",
      "how_it_compares": {
        "text": "At company level, Société Générale has a 30% threshold on group revenue. A producer under 30% that borrows as a whole company falls outside both rules. A separate rule covers transport, storage and processing only where the asset serves these oils alone.",
        "links": [
          {
            "slug": "societe-generale-30pc-unconventional",
            "title": "Société Générale's 30% Threshold on Unconventional Oil & Gas"
          },
          {
            "slug": "societe-generale-txn-dedicated-infrastructure",
            "title": "Société Générale's Restriction on Infrastructure for Unconventional Oil"
          }
        ]
      }
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance transactions for the exploration, production or trading of Arctic oil, Ecuadorian Amazonian oil, oil sands or extra heavy oil. We have not yet reviewed what it financed against this commitment.",
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
