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
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026. In the second half of a single line about floating production vessels, the bank drops every condition: from 2026 it will not finance any of them through a dedicated transaction. It is the only exclusion in this policy with no threshold, no defined term and no carve-out inside it.",
    "naive_reading": "it will not finance any ships that produce oil and gas at sea",
    "plain_language_note": "Six words at the end of a longer sentence. Nothing in them is conditional, so the only thing left to examine is what financing this commitment applies to.",
    "sources_intro": "One policy document states this exclusion, and one passage from it is quoted here.",
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
            "means": "This explains what financing this commitment covers: dedicated financing only, meaning financing raised for a named asset or activity, where it is clear what the financing is used for. Every commitment in this section has this limit, and it is the only limit on this one.",
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
            "means": "This explains the restriction itself. A date and the word any, with nothing else attached: no size threshold, no reference to the age of the field, no exception for conversions or redeployments, and no defined term that has to be met first.",
            "lets_through": [
              "This wording lets through nothing, on its own terms. Within the financing this section covers, we have not been able to construct a floating production vessel that falls outside these six words."
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
      "verdict_options": [
        {
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "This is the only exclusion in the document with no loophole inside the sentence, and a page that says so plainly is what makes every other page in the set credible.",
          "text": "There is no threshold. There is no defined term to meet first. There is no exception for converted, reused or small vessels, or for deals already under way. The rule is a date and the word “any”.\n\nOne limit is real and belongs here. It covers dedicated deals only. These vessels are usually financed that way, so the rule fits how the activity is paid for. But the companies that own the vessels provide services, and no client test here reaches them. The vessel can be refused and its owner financed."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "Everything this line misses sits outside the sentence, not inside it.\n\nThe first is the kind of financing. The rule covers dedicated deals for a named vessel. It does not cover a credit line or bond for a company that owns and leases these vessels.\n\nThe second is the exception clause. The policy says a senior group committee may allow exceptions to this policy in special cases. That applies to this line as to every other.\n\nThe third is the start. Another clause exempts “pre-existing business commitments or opportunities at an advanced stage of negotiation”. Neither term is defined.\n\nNone of these is a weakness in this sentence. All three are reasons it is not the whole answer."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "This rule excludes a whole type of production asset outright. Restrictions that depend on place, type of resource or the age of the field each need a judgement about the field first.\n\nThis one needs no judgement. If it is an oil production ship and the year is 2026 or later, the answer is no.\n\nThe gap between this line and the ten before it matters. The policy can write an unconditional rule. On every other activity, it chose not to."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "what_needs_to_change": [
        {
          "title": "Say what happens to vessel owners",
          "content": "Owners of these vessels are service companies, and no client test here reaches them. The vessel can be refused while its owner is financed as a whole company."
        },
        {
          "title": "Explain how the Shipping policy fits",
          "content": "The policy says these vessel deals also fall under the bank's Shipping policy. Neither document says how the two work together."
        },
        {
          "title": "Limit the start-up exception",
          "content": "The policy exempts earlier commitments and deals at an advanced stage of negotiation. It defines neither."
        }
      ],
      "what_needs_to_change_closing": "Until then, this rule still depends on the two general exceptions above it.",
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Verdict options were drafted before the analysis was re-based on Watchtower's record. They are Bank.Green interpretation and sit below the opinion boundary, but they have not been re-read against the derived rating. The rating moved from holds to hollowed.",
      "strength_reason": "Within dedicated financing we could not construct a way through it. Corporate financing to the same owners is untouched.",
      "how_it_compares": {
        "text": "Société Générale's rule on vessels at new fields rests on an undefined word. This wider rule makes that condition irrelevant from 2026. Its client tests do not reach the companies that own and lease these vessels, because they do not produce oil.",
        "links": [
          {
            "slug": "societe-generale-txn-fpso-greenfield",
            "title": "Société Générale's Restriction on Floating Production Vessels at New Fields"
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
    "teaser": "Société Générale will not finance any floating production vessel from 2026. We have not yet reviewed what it financed against this commitment.",
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
