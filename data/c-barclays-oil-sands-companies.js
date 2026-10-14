/* Commitment data — generated from commitments/commitment-barclays-oil-sands-companies.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "barclays-oil-sands-companies",
    "bank": "Barclays",
    "commitment_number": 13,
    "category": "oil_gas_expansion",
    "effective_date": null,
    "title": "Barclays' Commitment on Oil Sands Companies",
    "short_title": "Commitment on Oil Sands Companies",
    "article_published": null,
    "intro": "Barclays sets out this restriction at entity level in the Unconventional Oil & Gas section of its Climate Change Statement of December 2025. It commits the bank not to finance oil sands exploration and production companies.",
    "naive_reading": "it will not finance companies that produce oil from oil sands",
    "plain_language_note": "The rule is six words long, and the definition that decides who it covers comes from the table at the end of the statement.",
    "sources_intro": "This commitment comes from a single policy document, and it takes two passages from it to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=13",
        "watchtower_document_id": 4122,
        "watchtower_institution": "barclays",
        "synthesis_run": 219,
        "version_label": "December 2025",
        "published": "2025-12-01",
        "published_source": null,
        "published_confidence": null,
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "verbatim_check": {
          "document": "4122-barclays-arctic-oil-gas.md",
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
        "source_id": "ccs2025",
        "title": "The promise",
        "intro": "This is where Barclays makes the commitment.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not provide financing to Oil Sands exploration and production companies.",
        "plain_rendering": "Barclays will not provide financing to Oil Sands exploration and production companies.",
        "phrases": [
          {
            "id": "oil-sands-companies",
            "label": "Oil Sands exploration and production companies",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              33,
              79
            ],
            "plain_range": [
              39,
              85
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
        "source_id": "ccs2025",
        "title": "The definition of “Oil Sands companies”",
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "The term is set in italics in the rule, and nothing else points to its definition."
        },
        "verbatim": "Oil Sands exploration and production companies — Refers to Groups that majority own (>50%) or operate oil sands exploration, production & Oil Sands processing assets, excluding those that generate less than 10% of revenue from these activities.",
        "plain_rendering": "Oil Sands exploration and production companies are groups that majority own (>50%) or operate oil sands exploration, production or processing assets, excluding those that generate less than 10% of revenue from these activities.",
        "phrases": [
          {
            "id": "majority-own",
            "label": "majority own (>50%) or operate",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              71,
              101
            ],
            "plain_range": [
              63,
              93
            ],
            "means": "This definition of “Oil Sands companies” is narrower than what it usually means. No official body defines an “oil sands company.” In general use, it means a company that produces oil sands. Barclays counts only groups that own more than half of an oil sands asset, or operate it. A minority partner in a large oil sands project is not one. So the restriction blocks fewer of the companies behind a given project than the words suggest.",
            "lets_through": [
              "This wording lets through minority partners in oil sands projects that do not operate them, however large their stake.",
              "It also lets through whatever the definition leaves out, such as minority owners and groups with a small share of revenue from oil sands."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "less-than-10pc",
            "label": "less than 10% of revenue",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              197,
              221
            ],
            "plain_range": [
              180,
              204
            ],
            "means": "This explains the revenue floor, which excludes groups earning less than 10% of their revenue from oil sands.",
            "lets_through": [
              "This wording lets through large integrated companies that own and operate oil sands assets but earn less than 10% of their revenue from them."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "narrower"
      }
    ],
    "glossary_refs": [
      "oil-sands",
      "revenue-threshold",
      "group-level"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 13,
      "commitment_id": "f3ea1eb5-f1ab-5f01-83fe-369f78ecba0c",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=13",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        9056,
        9140
      ],
      "summary_text": "Barclays will not finance oil sands exploration and production companies (majority owners or operators deriving ≥10% revenue from oil sands).",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "oil_sands"
          ],
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "group",
          "relationship_status": "new_and_existing",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new_and_existing"
        }
      },
      "triggers": [
        {
          "metric": "revenue_share",
          "inequality": ">=",
          "value": 10,
          "definition": "revenue from oil sands exploration, production & processing assets (for groups that majority own >50% or operate them)"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 1 fields corrected]\nCHANGES:\n- Barclays will not finance oil sands exploration and production companies (majority owners or operators deriving ≥10% revenue from oil sands).: Removed exception for <10% revenue as it is already captured in the threshold field.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "EXISTING OIL AND GAS FINANCING STAYS IN PLACE · APPLICABILITY OF FINANCING RESTRICTIONS — “Any existing commitments or financing entered into prior to any of the restrictions coming into effect under the Upstream Oil & Gas and Unconventional Oil & Gas sections of this statement may remain in place”; only refinancings are subject to the restrictions.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": "commitment 6 only",
        "where": "APPLICABILITY OF FINANCING RESTRICTIONS"
      },
      {
        "condition": "SECONDARY MARKETS AND DISTRESSED COMPANIES ARE NOT “FINANCING” · KEY DEFINITIONS — Financing “excludes, without limitation, any debt or securities traded or placed through secondary market activity”. Buying or selling a company’s existing bonds and shares is not financing here, so no restriction reaches it. Barclays also excludes primary financing for companies in financial difficulty, such as debt-for-equity swaps and other recapitalisations. A coal or oil company in trouble can be refinanced with none of these restrictions applying.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "KEY DEFINITIONS"
      },
      {
        "condition": "RESTRICTIONS DEPEND ON THIRD-PARTY DATA · THIRD PARTY DATA — “Where data is not available or is not of a reliably high quality, this may impact our ability to apply restrictions and other provisions set out in this statement.”",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "THIRD PARTY DATA"
      },
      {
        "condition": "SUBJECT TO APPLICABLE LAW · ABOUT THIS DOCUMENT — “The application of the provisions in this statement is subject to compliance with applicable laws and regulations, which may change from time to time.”",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "ABOUT THIS DOCUMENT"
      }
    ],
    "general_clauses_page": {
      "url": "general-clauses-barclays.html",
      "title": "The clauses that apply to every Barclays commitment",
      "selected_for_publication": true
    },
    "disagreements": [
      {
        "field": "loopholes.exceptions",
        "severity": "omission",
        "watchtower": "The record carries the statement's document-wide provisions on at most two commitments: the grandfathering rule on commitment 6, and the transition-finance allowance on commitments 4 and 5.",
        "bank_green": "The definition of financing excludes secondary-market activity and distressed-company financing; the statement applies only as far as third-party data allows, and subject to applicable law; existing oil and gas financing may remain in place until refinanced; and transition finance may reach restricted upstream groups. Each reaches more commitments than the record attaches it to.",
        "action": "Record each as a standing exception on every commitment it reaches."
      }
    ],
    "assessment": {
      "strength": "hollowed",
      "strength_derivation": {
        "rule": "spec v3.29 §4.1 — the gap between the naive reading and what it catches",
        "inputs_source": "Watchtower record",
        "record_score": "holds",
        "weakness": false,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 0
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "This commitment covers all financing to the producers that mainly work in oil sands. But minority partners, and large oil companies whose oil sands work is under 10% of revenue, keep borrowing.",
      "actual_reading": "it will not finance groups that own most of, or run, oil sands assets and earn at least 10% of their revenue from them",
      "gaps": [
        {
          "title": "Minority partners",
          "phrase_refs": [
            "majority-own"
          ],
          "text": "A group counts only if it owns more than half of an oil sands asset, or runs it. So a partner with a large minority stake that does not run the site is outside this commitment."
        },
        {
          "title": "Large companies under 10%",
          "phrase_refs": [
            "less-than-10pc"
          ],
          "text": "Groups earning less than 10% of their revenue from oil sands are left out. So a large integrated oil company can own and run big oil sands sites and stay under that line."
        }
      ],
      "in_practice": "Oil sands are sand and clay soaked in bitumen, a thick, tar-like oil. Getting it out takes a lot of energy, by mining or by pumping steam underground. Most oil sands production is in Canada.\n\nSay a Canadian producer owns and runs its oil sands sites, and most of its revenue comes from them. It is an oil sands company as Barclays defines it, so Barclays will not finance it, whatever the financing is for.\n\nA large integrated oil company may own and run oil sands sites too, some of them large. But it also refines, trades, and drills around the world, so its oil sands work brings in only 8% of its revenue. Because it falls under the 10% line, Barclays can lend to it.\n\nA partner with a 40% stake in a large oil sands project, which another company runs, neither owns most of the project nor runs it. So it is outside this commitment, however much oil its share produces.\n\nSo this commitment binds the companies that mainly work in oil sands. The companies with the largest balance sheets, and the partners beside them, can keep borrowing from Barclays.",
      "gets_right": "This commitment covers all financing to the companies it applies to, not only financing for named projects. And running an oil sands site is enough to count, whatever share of it the group owns."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Barclays has committed not to finance oil sands exploration and production companies. We have not reviewed its financing against this commitment yet.",
    "headline_figure": {
      "display": null,
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-10-02",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 219, document 4122",
    "reading": "drafted"
  }
};
