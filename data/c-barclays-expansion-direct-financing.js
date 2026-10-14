/* Commitment data — generated from commitments/commitment-barclays-expansion-direct-financing.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "barclays-expansion-direct-financing",
    "bank": "Barclays",
    "commitment_number": 3,
    "category": "oil_gas_expansion",
    "effective_date": null,
    "title": "Barclays' Commitment on Direct Financing for Expansion",
    "short_title": "Commitment on Direct Financing for Expansion",
    "article_published": null,
    "intro": "Barclays sets out this restriction beside its restriction on project finance, in the Upstream Oil & Gas section of its December 2025 Climate Change Statement. It commits the bank not to finance energy groups' new oil and gas projects, or their infrastructure, in any other form either.",
    "naive_reading": "it will not finance oil and gas companies' new fields in any form",
    "plain_language_note": "The rule is plain, but its key terms are defined in the table at the end of the statement, which we quote beside it.",
    "sources_intro": "This commitment comes from a single policy document, and it takes three passages from it to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=3",
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
          "passages": 4,
          "found": 4,
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
        "verbatim": "We will not provide other direct financing to Energy Groups for expansion projects or infrastructure projects primarily to be used for such expansion projects.",
        "plain_rendering": "Barclays will not provide other direct financing to Energy Groups for expansion projects, or for infrastructure projects primarily to be used for them.",
        "phrases": [
          {
            "id": "direct-financing",
            "label": "direct financing",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              26,
              42
            ],
            "plain_range": [
              32,
              48
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "energy-groups",
            "label": "Energy Groups",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              46,
              59
            ],
            "plain_range": [
              52,
              65
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 3,
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
              64,
              73
            ],
            "plain_range": [
              70,
              79
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 4,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "definition",
        "source_id": "ccs2025",
        "title": "The definition of “direct financing”",
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "none",
          "signposting_note": "In this sentence “direct financing” is not set in italics, and nothing points to the definition."
        },
        "verbatim": "Directly finance or direct financing — Refers to financing where the use of proceeds is known to be for a particular project.",
        "plain_rendering": "Direct financing means financing where the use of proceeds is known to be for a particular project.",
        "phrases": [
          {
            "id": "use-of-proceeds",
            "label": "use of proceeds is known",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              69,
              93
            ],
            "plain_range": [
              43,
              67
            ],
            "means": "This definition of “direct financing” rests on a standard idea. The Equator Principles, a risk framework many banks follow, define “Known Use of Proceeds” as what the client says a loan is for. Barclays uses that test: the use of proceeds has to be known to be for a particular project. Financing that pays for the same project through a loan with no stated purpose is not direct financing here. So the restriction blocks less than the sentence above appears to promise.",
            "lets_through": [
              "This wording lets through any financing whose use is not stated. The test turns on what the bank is told, not on what the financing pays for.",
              "It also lets through general-purpose financing to the same energy group. A revolving facility or a bond with no stated use is not direct financing, whatever the group spends it on."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "ordinary_source": [
              {
                "body": "Equator Principles Association",
                "title": "The Equator Principles (EP4), Glossary",
                "term": "Known Use of Proceeds",
                "url": "https://equator-principles.com/app/uploads/The-Equator-Principles_EP4_July2020.pdf#page=30"
              }
            ]
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "narrower"
      },
      {
        "index": 3,
        "role": "definition",
        "source_id": "ccs2025",
        "title": "The definition of “Energy Groups”",
        "intro": "How Barclays' policy defines it in the same table.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Energy Groups” is set in italics in the rule, and nothing else points to its definition."
        },
        "verbatim": "Energy Group(s) — Groups that have over 20% revenue from upstream oil & gas activities (i.e. exploration, development and production) and/or Groups that are considered to be supermajor or major integrated oil & gas companies.",
        "plain_rendering": "Energy Groups are groups with over 20% revenue from upstream oil & gas activities, and supermajor or major integrated oil & gas companies.",
        "phrases": [
          {
            "id": "over-20pc",
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
              30,
              46
            ],
            "means": "This definition of “Energy Groups” is narrower than what it usually means. No standard-setting body defines “energy group.” In the industry, it generally means any company whose main business is energy. Barclays counts only groups that earn over 20% of their revenue from upstream oil and gas, plus the named category of majors. A large utility, a trading house, or a diversified miner with an oil arm is not an Energy Group here. So the restriction blocks fewer of the companies behind these projects than the words suggest.",
            "lets_through": [
              "This wording lets through groups that are not majors and earn 20% or less of their revenue upstream, however much they produce.",
              "It also lets through direct financing for expansion projects to groups below 20%, such as a diversified company or a utility with an upstream arm."
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
        "role": "definition",
        "source_id": "ccs2025",
        "title": "The definition of “expansion”",
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“expansion” is set in italics in the wording above, and nothing else points to the definitions table."
        },
        "verbatim": "Expansion — Refers to any upstream oil & gas projects with a final investment decision (or equivalent) after 31 December 2021. This includes, but is not limited to, exploration, development, and production.",
        "plain_rendering": "Expansion means any upstream oil and gas project with a final investment decision after 31 December 2021, including exploration, development and production.",
        "phrases": [
          {
            "id": "after-31-december-2021",
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
              82,
              104
            ],
            "means": "This definition of “expansion” is narrower than what it usually means. The International Monetary Fund (IMF) describes expansion as adding physical capacity to an established business. For an oil and gas company, that means producing more than before. Barclays makes it a date test instead: only projects signed off after December 31, 2021, count as expansion, and the date does not move. A field approved in 2021 and drilled out through the 2030s is never expansion here, however much it adds. So the restriction blocks less than the word suggests, for as long as those fields produce.",
            "lets_through": [
              "A project approved before 2022 and being built now, which this wording does not count as expansion.",
              "Drilling and production at a field sanctioned years ago, however much it adds."
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
      }
    ],
    "glossary_refs": [
      "upstream",
      "use-of-proceeds-loan",
      "fid",
      "revenue-threshold"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 3,
      "commitment_id": "3578b322-d4b9-5fa9-8612-d8413a2426a1",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=3",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        6296,
        6463
      ],
      "summary_text": "Barclays will not provide other direct financing to Energy Groups for upstream expansion projects or dedicated infrastructure.",
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
          "relationship_status": null,
          "certainty": "5"
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
          "condition": "Projects with FID on or before 31 December 2021 are excluded from the definition of expansion",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": null,
          "standing": false,
          "where": null
        }
      ],
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
        "weakness": false,
        "commitment_specific_carve_outs": 1,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 2
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Three definitions shrink this commitment to financing labeled for one project, given to large producers, for fields approved after 2021. General loans to the same groups get through.",
      "actual_reading": "it will not give financing it knows is for a particular oil and gas project approved after 2021 to groups earning over 20% from oil and gas production, or to the majors",
      "gaps": [
        {
          "title": "Loans that do not name their purpose",
          "text": "Barclays only counts financing as “direct financing” when it knows the financing is for a particular project. So a group can borrow for general purposes and spend the loan on a new field.",
          "phrase_refs": [
            "use-of-proceeds"
          ]
        },
        {
          "title": "Only the groups Barclays counts as “Energy Groups”",
          "text": "The rule applies to groups earning over 20% of their revenue from producing oil and gas, and to the majors. It does not cover a utility or a diversified company with a drilling arm.",
          "phrase_refs": [
            "over-20pc"
          ]
        },
        {
          "title": "Fields approved before 2022",
          "text": "“Expansion” means a project approved after December 31, 2021. A field approved earlier and drilled out through the 2030s is never expansion here.",
          "phrase_refs": [
            "after-31-december-2021"
          ]
        }
      ],
      "in_practice": "Say an oil producer earns most of its revenue from oil and gas, which makes it one of the “Energy Groups.” If it asks Barclays for a loan for a new field, Barclays knows what the loan is for. That is “direct financing,” and the answer is no.\n\nBut the same producer can ask for a general loan, a revolving credit facility, or a bond. General-purpose financing like this goes to the company as a whole and does not say what it pays for. It is not “direct financing,” so the rule does not apply, and the producer can spend it on the new field.\n\nA diversified company with a drilling arm may earn under 20% of its revenue from oil and gas production. Unless Barclays counts it as a major, it is not an “Energy Group,” so it can get financing labeled for the same new field.\n\nThen there is timing. “Expansion” means a project approved after December 31, 2021, so a field approved in 2021 never counts, however many years it is drilled.\n\nSo this commitment blocks financing labeled for a project approved after 2021 and given to a large producer. A producer with a choice does not need to ask for that kind of financing."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Barclays has committed not to provide direct financing to energy groups for new oil and gas projects. We have not reviewed its financing against this commitment yet.",
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
