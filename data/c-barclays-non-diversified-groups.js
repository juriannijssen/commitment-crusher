/* Commitment data — generated from commitments/commitment-barclays-non-diversified-groups.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "barclays-non-diversified-groups",
    "bank": "Barclays",
    "commitment_number": 5,
    "category": "oil_gas_expansion",
    "effective_date": null,
    "title": "Barclays' Commitment on Non-diversified Oil & Gas Groups",
    "short_title": "Commitment on Non-diversified Oil & Gas Groups",
    "article_published": null,
    "intro": "Barclays sets out this restriction at entity level in the Upstream Oil & Gas section of its Climate Change Statement of December 2025. It commits the bank to stop new financing and renewals for oil and gas producers that do little else and invest heavily in long-lead expansion.",
    "naive_reading": "it has stopped financing pure oil and gas producers that are still investing in new fields",
    "plain_language_note": "The rule is written as a permission, since Barclays will only provide financing “by exception,” and the plain version keeps that. The definitions come from the table at the end of the statement.",
    "sources_intro": "This commitment comes from a single policy document, and it takes four passages from it to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=5",
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
        "intro": "This is where Barclays makes the commitment.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will only provide new financing or renewal of existing financing for Non-diversified Groups where more than 10% of their total planned oil & gas capital expenditure is in long-lead expansion, by exception.",
        "plain_rendering": "Barclays will provide new financing, or renew existing financing, for Non-diversified Groups with more than 10% of their total planned oil & gas capital expenditure in long-lead expansion only by exception.",
        "phrases": [
          {
            "id": "non-diversified-groups",
            "label": "Non-diversified Groups",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              72,
              94
            ],
            "plain_range": [
              70,
              92
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "see-long-lead",
            "label": "long-lead",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              174,
              183
            ],
            "plain_range": [
              168,
              177
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 3,
            "bank_definition": null
          },
          {
            "id": "by-exception",
            "label": "by exception",
            "type": "escape_hatch",
            "source": "watchtower_weakness",
            "watchtower_ref": "Exceptions may be granted at bank discretion for non-diversified groups, and state-owned entities are exempted.",
            "not_in_synthesis": false,
            "verbatim_range": [
              195,
              207
            ],
            "plain_range": [
              193,
              205
            ],
            "means": "The words “by exception” turn the restriction into a choice for the bank: new financing and renewals remain possible, one exception at a time. The statement does not say who grants them or on what grounds.",
            "lets_through": [
              "This wording lets through any new financing or renewal Barclays chooses to grant as an exception. The statement commits to disclosing how many there are and how much they total, but not why they were granted."
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
        "title": "The definition of “non-diversified Groups”",
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Non-diversified Groups” is set in italics in the rule, and nothing else points to its definition."
        },
        "verbatim": "Non-diversified Groups — Refers to non-state-owned Energy Groups that generate almost all of their revenues from upstream oil & gas activities (i.e., exploration, development and production).",
        "plain_rendering": "Non-diversified Groups are non-state-owned Energy Groups that generate almost all of their revenues from upstream oil & gas activities.",
        "phrases": [
          {
            "id": "non-state-owned",
            "label": "non-state-owned",
            "type": "narrowing_qualifier",
            "source": "watchtower_exception",
            "watchtower_ref": "State-owned energy groups are excluded from the definition of Non-diversified Groups",
            "not_in_synthesis": false,
            "verbatim_range": [
              35,
              50
            ],
            "plain_range": [
              27,
              42
            ],
            "means": "The word “non-state-owned” takes national oil companies out of the definition entirely.",
            "lets_through": [
              "This wording lets through state-owned producers, however concentrated in upstream oil and gas and however much they invest in long-lead expansion."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "almost-all",
            "label": "almost all",
            "type": "undefined_term",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              79,
              89
            ],
            "plain_range": [
              71,
              81
            ],
            "means": "This definition of “non-diversified Groups” is narrower than what it usually means. No official body defines a “non-diversified” company. In general use, it means one with a single line of business. Barclays adds two limits on top: the group has to be non-state-owned, and almost all its revenue has to be upstream. Because almost all is not a number, the bank decides where it falls. And both limits push companies outside the restriction rather than into it.",
            "lets_through": [
              "This wording lets through any producer with enough midstream, downstream, or other revenue for Barclays to judge it diversified."
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
        "title": "The definition of “long-lead expansion”",
        "intro": "How Barclays' policy defines it in the same table.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Long-lead expansion” is set in italics in the rule, and nothing else points to its definition."
        },
        "verbatim": "Long-lead expansion — Refers to long-lead time upstream oil & gas projects with a final investment decision (or equivalent) after 31 December 2021.",
        "plain_rendering": "Long-lead expansion means long-lead time upstream oil & gas projects with a final investment decision after 31 December 2021.",
        "phrases": [
          {
            "id": "long-lead-time",
            "label": "long-lead time",
            "type": "undefined_term",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              32,
              46
            ],
            "plain_range": [
              26,
              40
            ],
            "means": "This definition of “long-lead expansion” is narrower than what it usually means. The International Monetary Fund (IMF) describes expansion as adding physical capacity to an established business, so it normally means producing more than before. This definition adds a second limit on top of the date: the project also has to be long-lead. The words define long-lead expansion by repeating themselves, and the statement never says how long a lead time must be. So a project can fall outside the restriction because nobody has said what counts.",
            "lets_through": [
              "This wording lets through short-cycle projects, such as shale wells, in-fill drilling, and tie-backs, which count toward neither the definition nor the 10%."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "ordinary_source": [
              {
                "body": "International Monetary Fund",
                "title": "IMF, Greenfield investment and extension of capacity (BPM6 guidance note D.1)"
              }
            ]
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "narrower"
      },
      {
        "index": 4,
        "role": "condition",
        "source_id": "ccs2025",
        "title": "The disclosure",
        "intro": "Barclays commits to report, each financial year, the number and total value of the exceptions it grants under this rule.",
        "location": {
          "distance": "later_in_document",
          "signposting": "none",
          "signposting_note": "The rule does not mention that its exceptions will be disclosed; the commitment sits in a separate section."
        },
        "verbatim": "The combined number and aggregate value of exceptions granted for the relevant financial year to: … Non-diversified Groups under the “Non-diversified Groups restrictions” above (for financial years starting on or after 1 January 2025).",
        "plain_rendering": "Barclays intends to disclose each year the combined number and aggregate value of exceptions granted to Non-diversified Groups, for financial years starting on or after 1 January 2025.",
        "phrases": [
          {
            "id": "number-and-value",
            "label": "combined number and aggregate value",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              4,
              39
            ],
            "plain_range": [
              43,
              78
            ],
            "means": "This explains what will be disclosed: how many exceptions there are, and how much financing they add up to.",
            "lets_through": [
              "This wording lets through the detail of which groups received exceptions, for what, and why, because a total can be reported without any of it."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "non-diversified-groups-2",
            "label": "Non-diversified Groups",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              100,
              122
            ],
            "plain_range": [
              104,
              126
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "upstream",
      "national-oil-company",
      "fid",
      "capital-investment"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 5,
      "commitment_id": "db563a15-e4bc-5470-b1ac-54ecd88f44ac",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=5",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        6652,
        6868
      ],
      "summary_text": "Barclays restricts new financing and renewals to non-diversified upstream oil & gas groups with over 10% capex in long-lead expansion, allowing financing only by exception.",
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
          "definition": "share of total planned oil & gas capital expenditure in long-lead expansion (FID post-31 Dec 2021) for non-diversified groups"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Financing permitted by exception",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": true,
          "standing": false,
          "where": null
        },
        {
          "condition": "State-owned energy groups are excluded from the definition of Non-diversified Groups",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": null,
          "standing": false,
          "where": null
        },
        {
          "condition": "Sustainable Finance or Transition Finance transactions are permitted where proceeds are ringfenced from direct oil & gas activity",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": null,
          "standing": false,
          "where": null
        }
      ],
      "weaknesses": "Exceptions may be granted at bank discretion for non-diversified groups, and state-owned entities are exempted.",
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
      "strength": "crushed",
      "strength_derivation": {
        "rule": "spec v3.29 §4.1 — the gap between the naive reading and what it catches",
        "inputs_source": "Watchtower record",
        "record_score": "hollowed",
        "weakness": true,
        "commitment_specific_carve_outs": 3,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 2
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "This commitment does not stop the financing but makes it an exception that Barclays can grant. And it only covers a small group of private producers that do almost nothing else.",
      "actual_reading": "it has made new financing and renewals an exception, granted by Barclays, for private producers that earn almost all their revenue upstream and spend over 10% on long-lead projects",
      "gaps": [
        {
          "title": "Financing “by exception”",
          "phrase_refs": [
            "by-exception",
            "number-and-value"
          ],
          "text": "New financing and renewals stay possible, one exception at a time, and the statement does not say who grants them or why. Only the total number and value are disclosed."
        },
        {
          "title": "National oil companies",
          "phrase_refs": [
            "non-state-owned"
          ],
          "text": "“Non-diversified Groups” must be non-state-owned, so a state oil company is outside this commitment however much it expands."
        },
        {
          "title": "“Almost all” has no number",
          "phrase_refs": [
            "almost-all"
          ],
          "text": "A group counts only if almost all its revenue comes from finding and producing oil and gas. So a producer with some pipeline or refining business can be judged diversified."
        },
        {
          "title": "Short-cycle drilling",
          "phrase_refs": [
            "long-lead-time"
          ],
          "text": "Only “long-lead” projects count, and the statement does not say how long that is. Shale wells and quick tie-backs to existing fields do not count toward the 10%."
        }
      ],
      "in_practice": "A long-lead project is one that takes years from approval to first oil, such as a large offshore field. This commitment covers producers that put more than 10% of their planned investment into such projects.\n\nSay a private company only finds and produces oil and gas, and plans to put 25% of its investment into a new deepwater field. It is a “Non-diversified Group,” so it is caught. But Barclays can still lend to it, or renew its loans, by exception. The statement says how exceptions are counted, not how they are decided.\n\nA national oil company with the same field is state-owned, so it is not a Non-diversified Group. The same goes for a producer with a pipeline or refining arm big enough for Barclays to call it diversified.\n\nThen there is a shale producer drilling hundreds of new wells. Each well is drilled and producing within months, not years. That is not long-lead, so none of it counts toward the 10%.\n\nSo this commitment covers a small group of private producers that do almost nothing else. For them, financing becomes an exception rather than the rule. Each year Barclays reports how many exceptions it granted and their total value, but not who got them."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Barclays has committed to stop new financing and renewals for undiversified oil and gas producers that are investing heavily in long-lead expansion. We have not reviewed its financing against this commitment yet.",
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
