/* Commitment data — generated from commitments/commitment-barclays-fracking-companies.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "barclays-fracking-companies",
    "bank": "Barclays",
    "commitment_number": 12,
    "category": "fracking",
    "effective_date": null,
    "title": "Barclays' Commitment on UK and European Fracking Companies",
    "short_title": "Commitment on UK and European Fracking Companies",
    "article_published": null,
    "intro": "Barclays sets out this restriction at entity level in the Unconventional Oil & Gas section of its Climate Change Statement of December 2025. It commits the bank not to finance companies engaged in fracking in the UK and Europe.",
    "naive_reading": "it will not finance companies whose business is fracking for oil and gas",
    "plain_language_note": "Barclays defines its key term, and the plain version keeps it. The definition comes from the table at the end of the statement.",
    "sources_intro": "This commitment comes from a single policy document, and it takes two passages from it to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=12",
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
        "verbatim": "We will not provide financing to Clients materially engaged in Fracking activities in the UK and Europe.",
        "plain_rendering": "Barclays will not provide financing to Clients materially engaged in Fracking activities in the UK and Europe.",
        "phrases": [
          {
            "id": "materially-engaged",
            "label": "materially engaged in",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              41,
              62
            ],
            "plain_range": [
              47,
              68
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "uk-europe",
            "label": "in the UK and Europe",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              83,
              103
            ],
            "plain_range": [
              89,
              109
            ],
            "means": "The words “in the UK and Europe” limit both the activity and the test to one region.",
            "lets_through": [
              "This wording lets through fracking companies elsewhere, such as in North America or Argentina, however concentrated their business, because fracking there does not count."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "definition",
        "source_id": "ccs2025",
        "title": "The definition of “materially engaged in”",
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "The defined term is set in italics in the rule. Nothing else marks it, and the definition sits in a table at the end of the statement."
        },
        "verbatim": "Materially engaged in - Fracking — For Hydraulic Fracturing, Groups are defined as “materially engaged in” if they have over 20% revenue from Fracking activities in the UK and Europe.",
        "plain_rendering": "A group is materially engaged in fracking if it has over 20% revenue from fracking activities in the UK and Europe.",
        "phrases": [
          {
            "id": "over-20pc",
            "label": "over 20% revenue",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              120,
              136
            ],
            "plain_range": [
              52,
              68
            ],
            "means": "This definition of “materially engaged in” is narrower than what it usually means. The body that sets international accounting standards treats materiality as a judgment, and warns against relying on a single numerical threshold. Barclays sets it at more than 20% of group revenue, and it counts fracking only in the UK and Europe. A group fracking heavily in North America is not materially engaged in it here, so the restriction blocks far fewer frackers than the words suggest.",
            "lets_through": [
              "This wording lets through groups at or below 20%, however much fracking they do elsewhere.",
              "It also lets through any group whose UK and European fracking is a small share of its revenue."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "ordinary_source": [
              {
                "body": "IFRS Foundation",
                "title": "IFRS Practice Statement 2, Making Materiality Judgements",
                "url": "https://www.ifrs.org/content/dam/ifrs/publications/amendments/english/2017/ifrs-practice-statement-2-making-materiality-judgements.pdf#page=18"
              }
            ]
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "narrower"
      }
    ],
    "glossary_refs": [
      "shale",
      "revenue-threshold",
      "group-level"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 12,
      "commitment_id": "004d1619-7050-5a6b-9f9b-b015809874ea",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=12",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        8921,
        9033
      ],
      "summary_text": "Barclays will not finance clients materially engaged in fracking in the UK and Europe (>20% revenue).",
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
          "global_scope": false
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
          "inequality": ">",
          "value": 20,
          "definition": "revenue from fracking activities in the UK and Europe"
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
        "field": "quotation",
        "severity": "contradiction",
        "watchtower": "Watchtower's quotation reads “Clients materially engaged in - Fracking activities in the UK and Europe.”",
        "bank_green": "The statement reads “Clients materially engaged in Fracking activities in the UK and Europe.” The words “- Fracking” are the label of the definitions-table row, carried from Watchtower's parsed copy into the sentence. Checked against the PDF Watchtower stores.",
        "action": "Correct the quotation."
      },
      {
        "field": "loopholes.exceptions",
        "severity": "omission",
        "watchtower": "The record carries the statement's document-wide provisions on at most two commitments: the grandfathering rule on commitment 6, and the transition-finance allowance on commitments 4 and 5.",
        "bank_green": "The definition of financing excludes secondary-market activity and distressed-company financing; the statement applies only as far as third-party data allows, and subject to applicable law; existing oil and gas financing may remain in place until refinanced; and transition finance may reach restricted upstream groups. Each reaches more commitments than the record attaches it to.",
        "action": "Record each as a standing exception on every commitment it reaches."
      }
    ],
    "assessment": {
      "strength": "crushed",
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
      "strength_reason": "This commitment counts fracking only in the UK and Europe, where there is little fracking left. So companies that frack at scale elsewhere are outside it, however much they frack.",
      "actual_reading": "it will not finance companies earning more than 20% of their revenue from fracking in the UK and Europe, a region with very little fracking",
      "gaps": [
        {
          "title": "Fracking everywhere else",
          "phrase_refs": [
            "uk-europe"
          ],
          "text": "Only fracking in the UK and Europe counts. A company fracking in North America or Argentina is outside this commitment, however much of its business fracking is."
        },
        {
          "title": "A high revenue line",
          "phrase_refs": [
            "over-20pc"
          ],
          "text": "A group is only “materially engaged in” fracking above 20% of its revenue from UK and European fracking. So a group with a smaller share passes, however much it fracks there."
        }
      ],
      "in_practice": "Fracking pumps water, sand, and chemicals into rock at high pressure to release oil and gas. Most of it happens in the United States, Canada, and Argentina, while England has paused it and several European countries ban it.\n\nSay a shale company in Texas earns nearly all its revenue from fracking. Its fracking is not in the UK or Europe, so none of it counts. It is not “materially engaged in” fracking as Barclays defines it. Barclays can finance it in any way it likes.\n\nA European energy group with a small fracking business in the UK passes too. If that fracking brings in 5% of its revenue, the group is under 20%.\n\nTo be caught, a group has to earn more than 20% of its revenue from fracking in the UK and Europe. Where fracking is paused or banned, few companies of any size can do that.\n\nSo this commitment covers all financing, but only for a group of companies that may barely exist. The companies that frack at scale are outside it by definition."
    }
  },
  "evidence": {
    "status": "financing_found",
    "teaser": "That is how much Barclays put into companies whose whole business is fracking, despite a commitment that seems to rule out exactly this. And that is only what we have found so far.",
    "headline_figure": {
      "display": "$990.9M",
      "combines": "6 2025 financings to North American shale producers and their gathering systems",
      "complete": false
    },
    "deals": [
      {
        "id": "barclays-diamondback-e-p-2025",
        "company": "Diamondback E&P LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 445506425.00896096,
        "amount_display": "$445.5M",
        "instruments": [],
        "contradiction": "A pure shale producer in the Permian basin of west Texas and New Mexico, whose whole business is fracking. This commitment counts only fracking in the UK and Europe, so none of it registers.",
        "phrase_refs": [
          "uk-europe"
        ],
        "source_url": null
      },
      {
        "id": "barclays-viper-energy-partners-2025",
        "company": "Viper Energy Partners LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 293300000.0,
        "amount_display": "$293.3M",
        "instruments": [],
        "contradiction": "A minerals company earning royalties on Permian shale wells. Its income depends entirely on fracking, but in a region this commitment does not count.",
        "phrase_refs": [
          "uk-europe"
        ],
        "source_url": null
      },
      {
        "id": "barclays-antero-midstream-partners-2025",
        "company": "Antero Midstream Partners LP",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 100583333.3333333,
        "amount_display": "$100.6M",
        "instruments": [],
        "contradiction": "A gathering and processing business serving shale gas wells in the Appalachian basin. Its whole system exists to move fracked gas, and none of it is in the region this commitment counts.",
        "phrase_refs": [
          "uk-europe"
        ],
        "source_url": null
      },
      {
        "id": "barclays-bkv-upstream-midstream-2025",
        "company": "BKV Upstream Midstream LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 100002000.04000099,
        "amount_display": "$100M",
        "instruments": [],
        "contradiction": "A gas producer in the Barnett shale of Texas, the field where modern fracking began. The wording covers UK and European fracking only, so a company built on Texas shale is not affected.",
        "phrase_refs": [
          "uk-europe"
        ],
        "source_url": null
      },
      {
        "id": "barclays-viper-energy-2025",
        "company": "Viper Energy Inc",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 26270833.3333333,
        "amount_display": "$26.3M",
        "instruments": [],
        "contradiction": "The parent of that minerals business, with the same Permian royalties behind it. American fracking does not count toward the test, however much of the business it is.",
        "phrase_refs": [
          "uk-europe"
        ],
        "source_url": null
      },
      {
        "id": "barclays-antero-midstream-2025",
        "company": "Antero Midstream Corp",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 25200000.0,
        "amount_display": "$25.2M",
        "instruments": [],
        "contradiction": "The parent of that Appalachian gathering business. The same regional limit applies: fracking in West Virginia and Ohio is not fracking in the UK or Europe.",
        "phrase_refs": [
          "uk-europe"
        ],
        "source_url": null
      }
    ],
    "what_it_funded": "companies whose whole business is fracking"
  },
  "provenance": {
    "built": "2026-10-02",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 219, document 4122",
    "reading": "drafted"
  }
};
