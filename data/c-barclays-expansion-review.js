/* Commitment data — generated from commitments/commitment-barclays-expansion-review.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "barclays-expansion-review",
    "bank": "Barclays",
    "commitment_number": 1,
    "category": "oil_gas_expansion",
    "effective_date": null,
    "title": "Barclays' Review of Expanding Oil & Gas Groups",
    "short_title": "Review of Expanding Oil & Gas Groups",
    "article_published": null,
    "intro": "Barclays sets out this process in the Upstream Oil & Gas section of its Climate Change Statement of December 2025. Energy groups that put more than 10% of their planned upstream spending into expansion are reviewed every year by its Client Transition Review Forum.",
    "naive_reading": "it will stop financing oil and gas companies that keep expanding production",
    "plain_language_note": "The plain versions keep the review's wording and drop the statement's italics. The definition comes from the table at the end of the statement.",
    "sources_intro": "One policy document states this commitment. Three passages from it are needed to see what it does.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=1",
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
          "passages": 5,
          "found": 5,
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
        "intro": "This passage sets up a yearly review, and names the first group of companies it applies to.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Energy Groups meeting any of the following will be subject to mandatory annual review by the CTRF to determine whether continued financing support is appropriate in the context of their investment plans and overall decarbonisation or transition plans: … Energy Groups where more than 10% of their total planned upstream oil & gas capital expenditure is in expansion.",
        "plain_rendering": "Energy Groups with more than 10% of their total planned upstream oil & gas capital expenditure in expansion will be subject to mandatory annual review by the CTRF, which decides whether continued financing support is appropriate given their investment and transition plans.",
        "phrases": [
          {
            "id": "see-energy-group",
            "label": "Energy Group",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              0,
              12
            ],
            "plain_range": [
              0,
              12
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "annual-review",
            "label": "mandatory annual review",
            "type": "narrowing_qualifier",
            "source": "watchtower_weakness",
            "watchtower_ref": "The Client Transition Review Forum review is an internal screening process with no mandatory exclusion outcome.",
            "not_in_synthesis": false,
            "verbatim_range": [
              62,
              85
            ],
            "plain_range": [
              127,
              150
            ],
            "means": "The words “mandatory annual review” describe a process, not a restriction. The review is mandatory; its outcome is not. It decides whether continued financing is appropriate, and the statement sets no result it must reach.",
            "lets_through": [
              "This wording lets through every expanding energy group the review finds appropriate to keep financing. Nothing is published about how many are reviewed or what the reviews decide."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "more-than-10pc",
            "label": "more than 10%",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              274,
              287
            ],
            "plain_range": [
              19,
              32
            ],
            "means": "This explains which groups are reviewed: those with more than 10% of their planned upstream capital expenditure in expansion.",
            "lets_through": [
              "This wording lets through groups at or below 10%, however large their expansion spending in absolute terms."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "see-expansion",
            "label": "expansion",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              356,
              365
            ],
            "plain_range": [
              98,
              107
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 3,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "definition",
        "source_id": "ccs2025",
        "title": "The definition of “Energy Groups”",
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Energy Group” is set in italics in the wording above, and nothing else points to the definitions table."
        },
        "verbatim": "Energy Group(s) — Groups that have over 20% revenue from upstream oil & gas activities (i.e. exploration, development and production) and/or Groups that are considered to be supermajor or major integrated oil & gas companies.",
        "plain_rendering": "Energy Groups are groups that have over 20% revenue from upstream oil and gas activities, and groups considered to be supermajor or major integrated oil and gas companies.",
        "phrases": [
          {
            "id": "over-20pc-revenue",
            "label": "over 20% revenue",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              35,
              51
            ],
            "plain_range": [
              35,
              51
            ],
            "means": "This definition of “Energy Groups” is narrower than what it usually means. By an energy group we normally mean any company whose business is energy. Barclays counts only groups earning over 20% of their revenue from upstream oil and gas, plus the named category of majors. A large utility, a trading house or a diversified miner with an oil arm is not an Energy Group here, so the restriction blocks fewer of the companies behind these projects than the words suggest.",
            "lets_through": [
              "A group at 19%, which can still be a large producer if the group itself is large.",
              "A diversified company whose oil and gas arm is small beside its other businesses."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "supermajor-or-major-integrated",
            "label": "considered to be supermajor or major integrated",
            "type": "unverifiable_metric",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              157,
              204
            ],
            "plain_range": [
              101,
              148
            ],
            "means": "The second test names no number and no list. Barclays decides which companies are considered major.",
            "lets_through": [
              "A large oil and gas producer the bank does not consider a supermajor or a major integrated company."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "narrower"
      },
      {
        "index": 3,
        "role": "definition",
        "source_id": "ccs2025",
        "title": "The definition of “expansion”",
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Expansion” is set in italics in the rule, marking it as a defined term. Nothing else points to the definitions table."
        },
        "verbatim": "Expansion — Refers to any upstream oil & gas projects with a final investment decision (or equivalent) after 31 December 2021. This includes, but is not limited to, exploration, development, and production.",
        "plain_rendering": "Expansion means any upstream oil & gas project with a final investment decision after 31 December 2021, including exploration, development and production.",
        "phrases": [
          {
            "id": "fid-2021",
            "label": "after 31 December 2021",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              103,
              125
            ],
            "plain_range": [
              80,
              102
            ],
            "means": "This definition of “expansion” is narrower than what it usually means. By expansion we normally mean a company producing more oil and gas than before. Barclays makes it a date test instead: only projects signed off after 31 December 2021 are expansion, and the date does not move. A field approved in 2021 and drilled out through the 2030s is never expansion here, however much it adds — so the restriction blocks less than the word suggests, for as long as those fields produce.",
            "lets_through": [
              "The date lets through every project sanctioned in or before 2021, for its whole life. Spending on those projects does not count towards the 10%."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "narrower"
      },
      {
        "index": 4,
        "role": "condition",
        "source_id": "ccs2025",
        "title": "The condition",
        "intro": "Two paragraphs later, the statement says what the review does not decide.",
        "location": {
          "distance": "nearby",
          "signposting": "none",
          "signposting_note": "The review reads as the deciding step. Nothing in it points to the paragraph that leaves each financing decision to other committees."
        },
        "verbatim": "Notwithstanding the outcomes of the CTRF reviews, financing decisions are transaction specific and will continue to be subject to consideration by relevant committees, if appropriate, to consider issues such as credit risk, reputational risk and capital impact.",
        "plain_rendering": "Whatever the CTRF reviews conclude, financing decisions are transaction specific and may go to other committees, which consider credit risk, reputational risk and capital impact.",
        "phrases": [
          {
            "id": "transaction-specific",
            "label": "financing decisions are transaction specific",
            "type": "escape_hatch",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              50,
              94
            ],
            "plain_range": [
              36,
              80
            ],
            "means": "This explains that the review does not decide any financing. Each transaction is decided on its own, by committees weighing credit, reputational and capital questions.",
            "lets_through": [
              "This wording lets through a transaction for a group the review has questioned, if the committee that considers it finds the transaction acceptable."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "upstream",
      "capital-investment",
      "fid",
      "exploration"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 1,
      "commitment_id": "23d2285c-14fe-541d-bc87-a457e246ac91",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=1",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        5108,
        5482
      ],
      "summary_text": "Energy Groups with over 10% of total planned upstream capex allocated to expansion are subject to mandatory annual review by the Client Transition Review Forum.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "upstream",
          "activity_scope": "new"
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
          "metric": "other",
          "inequality": ">",
          "value": 10,
          "definition": "share of total planned upstream oil & gas capital expenditure in expansion (upstream projects with FID after 31 Dec 2021)"
        }
      ],
      "commitment_type": "screening",
      "effective_date": "immediate",
      "exceptions": [],
      "weaknesses": "The Client Transition Review Forum review is an internal screening process with no mandatory exclusion outcome.",
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
        "condition": "TRANSITION FINANCE FOR RESTRICTED UPSTREAM GROUPS · APPLICABILITY OF FINANCING RESTRICTIONS — Barclays “may enter into Sustainable Finance or Transition Finance transactions with an entity in a Group that would otherwise be restricted” by the Upstream Oil & Gas section, where it is satisfied they “will not be used directly to support oil & gas activity.”",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "recorded_by_watchtower": "commitments 4 and 5 only",
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
      "title": "The clauses that apply to every Barclays commitment"
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
      "strength": "crushed",
      "strength_derivation": {
        "rule": "spec v3.29 §4.1 — the gap between the naive reading and what it catches",
        "inputs_source": "Watchtower record",
        "record_score": "hollowed",
        "weakness": true,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 1
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "This is a review, not a restriction. The review must happen, but nothing says what it must decide, and each deal is then decided on its own.",
      "actual_reading": "it will review each year the energy groups spending over 10% of planned upstream investment on expansion, then decide each deal on its own",
      "gaps": [
        {
          "title": "A review with no required outcome",
          "phrase_refs": [
            "annual-review"
          ],
          "text": "The review decides whether continued financing is appropriate. The statement sets no result it has to reach. Nothing is published about how many groups are reviewed or what the reviews decide."
        },
        {
          "title": "Each deal is decided separately",
          "phrase_refs": [
            "transaction-specific"
          ],
          "text": "Whatever the review concludes, each financing goes to a committee that weighs credit, reputation and capital. A group the review questions can still be financed, one deal at a time."
        },
        {
          "title": "A share, not an amount",
          "phrase_refs": [
            "more-than-10pc",
            "fid-2021"
          ],
          "text": "Only groups spending more than 10% of planned upstream investment on expansion are reviewed. A large budget can hide a large expansion under 10%. Projects approved before 2022 do not count towards the share."
        }
      ],
      "in_practice": "Take an oil and gas group that plans to spend 15% of its upstream budget on new fields. Upstream means finding and producing oil and gas. The group crosses the line, so Barclays' internal forum reviews it once a year.\n\nThe review asks whether continued financing is appropriate, given the group's investment and transition plans. The statement does not say what answer ends financing. If the review finds the plans acceptable, nothing changes.\n\nEven if the review raises doubts, the group can still ask for a loan. Each deal goes to the committees that decide financing. They weigh credit, reputation and capital, and the statement says their decision stands whatever the review concluded.\n\nNow take a very large producer with the same new fields. Its budget is big enough that expansion is only 8% of it. It is never reviewed at all. Nor does a field approved in 2021 count towards anyone's share, however much drilling it still needs.\n\nSo what this commitment delivers is a yearly conversation about some expanding groups. It does not say any of them must lose financing. And nothing published shows whether any has."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Barclays reviews every year the energy groups that put more than a tenth of their planned upstream spending into expansion. We have not yet reviewed what it financed against this commitment.",
    "headline_figure": {
      "display": null,
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-09-29",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 219, document 4122",
    "reading": "drafted"
  }
};
