/* Commitment data — generated from commitments/commitment-societe-generale-txn-fpso-all.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-txn-fpso-all",
    "bank": "Société Générale",
    "commitment_number": 10,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Restriction on All Floating Production Vessels",
    "short_title": "Restriction on All Floating Production Vessels",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026. In the second half of a single line about floating production vessels, the bank drops every condition. From 2026, it will not finance any of them through a dedicated transaction. It is the only exclusion in this policy with no threshold, no defined term, and no carve-out inside it.",
    "naive_reading": "it will not finance any ships that produce oil and gas at sea",
    "plain_language_note": "These are six words at the end of a longer sentence. Nothing in them is conditional, so the only thing left to examine is what financing this commitment applies to.",
    "sources_intro": "This exclusion comes from a single policy document, and we quote one passage from it below.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=10",
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
        "source_id": "ogp2026",
        "title": "The promise",
        "intro": "Société Générale will not provide dedicated financing for any FPSO after 2025. These ships produce and store oil at sea.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not execute dedicated transactions or provide dedicated financial products and services when the underlying activities are… FPSOs associated with Greenfield upstream oil and gas fields and, after 2025, any FPSOs.",
        "plain_rendering": "Société Générale will not execute dedicated transactions, or provide dedicated financial products and services, when the underlying activities are FPSOs associated with Greenfield upstream oil and gas fields and, after 2025, any FPSOs.",
        "phrases": [
          {
            "id": "dedicated-fpso",
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
            "means": "This explains what financing this commitment covers: dedicated financing only. That means financing raised for a named asset or activity, where it is clear what the financing is used for. It is the only limit on this commitment.",
            "lets_through": [
              "The word “dedicated” lets through general corporate financing to the companies that own and lease floating production vessels. Those companies are contractors rather than producers.",
              "It also lets through general corporate facilities and bond issues raised by an operator that happens to be commissioning a vessel."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          },
          {
            "id": "any-fpsos",
            "label": "after 2025, any FPSOs",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              205,
              226
            ],
            "plain_range": [
              213,
              234
            ],
            "means": "This explains the restriction itself: a date and the word “any,” with nothing else attached. There is no size threshold, no reference to the field's age, no exception for conversions or redeployments, and no defined term to meet first.",
            "lets_through": [
              "This wording lets through nothing, on its own terms. Within the financing this section covers, we have not found a floating production vessel that falls outside these six words."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "fpso",
      "dedicated-transaction",
      "asset-finance"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 10,
      "commitment_id": "f2e2816c-6681-569a-8080-bc0b438b1680",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=10",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": false,
      "quotation_matched_note": "Watchtower records this quotation as unmatched. Its stored quote splices the lead-in and the bullet with an ellipsis, and that spliced string does not occur verbatim in the parsed document. The wording quoted on this page was taken from the policy text itself and is unaffected.",
      "quotation_char_range": null,
      "summary_text": "The Group will not provide project-level financing or dedicated financial services for any Floating Production Storage and Offloading (FPSO) units after 2025.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
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
      "effective_date": "2026-01-01",
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
        "previous_editorial_rating": "holds",
        "changed": true
      },
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "strength_reason": "For any production ship after 2025, a loan for that ship is refused, with no conditions. But the companies that own the ships can still borrow as companies.",
      "actual_reading": "it will not, from 2026, give financing labeled for any floating production vessel, whatever field it serves and however old the vessel is",
      "gaps": [
        {
          "title": "Loans to the companies that own vessels",
          "text": "This commitment covers financing raised for a named vessel. Many vessels are owned by contractors that lease them to oil companies. A general loan or bond to that contractor is outside this commitment.",
          "phrase_refs": [
            "dedicated-fpso"
          ]
        }
      ],
      "in_practice": "A floating production vessel is a ship moored over an offshore oil or gas field. It takes in what the wells produce, processes and stores it, and loads it onto tankers. The policy calls these FPSOs.\n\nFrom 2026, this commitment covers every one of them. That includes a new vessel ordered for a new field and an old tanker converted for an old field. Société Générale will not give financing raised for either. The size of the vessel, the age of the field, and where it works make no difference.\n\nWhat this commitment does not cover is the company behind the vessel. Vessels are often built and owned by contractors, which lease them to the oil companies that run the fields. A contractor can take a general loan to the company as a whole, which does not say what it pays for. It can then spend that loan on a new vessel. The oil company that hires the vessel can borrow the same way.\n\nSo this commitment stops financing that names a vessel. But it does not stop the bank from lending to the companies that build, own, and hire them.",
      "gets_right": "Within financing for a named vessel, the sentence sets no conditions. There is no size limit, no test of the field's age, and no exception for converted or moved vessels. From 2026, a date and the word “any” decide it."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance any floating production vessel from 2026. We have not reviewed its financing against this commitment yet.",
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
