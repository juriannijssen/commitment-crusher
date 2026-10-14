/* Commitment data — generated from commitments/commitment-barclays-fracking-projects.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "barclays-fracking-projects",
    "bank": "Barclays",
    "commitment_number": 8,
    "category": "fracking",
    "effective_date": null,
    "title": "Barclays' Commitment on UK and European Fracking Projects",
    "short_title": "Commitment on UK and European Fracking Projects",
    "article_published": null,
    "intro": "Barclays sets out this restriction in the Unconventional Oil & Gas section of its Climate Change Statement of December 2025. It commits the bank not to finance fracking projects in the UK and Europe.",
    "naive_reading": "it will not finance fracking for oil and gas",
    "plain_language_note": "The rule is plain, and the definition of direct financing comes from the table at the end of the statement.",
    "sources_intro": "This commitment comes from a single policy document, and it takes two passages from it to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=8",
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
        "verbatim": "We will not directly finance projects involving Hydraulic Fracturing (Fracking) in the UK and Europe.",
        "plain_rendering": "Barclays will not directly finance projects involving Hydraulic Fracturing (Fracking) in the UK and Europe.",
        "phrases": [
          {
            "id": "directly-finance",
            "label": "directly finance",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              12,
              28
            ],
            "plain_range": [
              18,
              34
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "see-hydraulic-fracturing-fracking",
            "label": "Hydraulic Fracturing (Fracking)",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              48,
              79
            ],
            "plain_range": [
              54,
              85
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": null,
            "bank_definition": null,
            "plain_gloss": "Fracking is pumping liquid into rock at high pressure to crack it open, so the oil or gas held inside can flow out."
          },
          {
            "id": "uk-europe",
            "label": "in the UK and Europe",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              80,
              100
            ],
            "plain_range": [
              86,
              106
            ],
            "means": "The words “in the UK and Europe” limit this commitment to the one region where fracking is least developed.",
            "lets_through": [
              "This wording lets through fracking projects everywhere else, including North America, Argentina, and Australia, where almost all fracking happens."
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
        "title": "The definition of “direct financing”",
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Directly finance” is set in italics in the rule, and nothing else points to the definitions table."
        },
        "verbatim": "Directly finance or direct financing — Refers to financing where the use of proceeds is known to be for a particular project.",
        "plain_rendering": "To directly finance means financing where the use of proceeds is known to be for a particular project.",
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
              46,
              70
            ],
            "means": "This definition of “direct financing” rests on a standard idea. The Equator Principles, a risk framework many banks follow, define “Known Use of Proceeds” as what the client says a loan is for. Barclays uses that test: the use of proceeds has to be known to be for a particular project. Financing that pays for the same project through a loan with no stated purpose is not direct financing here. So the restriction blocks less than the sentence above appears to promise.",
            "lets_through": [
              "This wording lets through any financing whose use is not stated.",
              "It also lets through general-purpose financing to fracking companies, whatever they spend it on."
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
      }
    ],
    "glossary_refs": [
      "shale",
      "use-of-proceeds-loan",
      "project-finance"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 8,
      "commitment_id": "d6fefd79-48e2-5b06-aa97-6f08f537d2a7",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=8",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        8052,
        8157
      ],
      "summary_text": "Barclays will not directly finance hydraulic fracturing (fracking) projects in the UK and Europe.",
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
          "level": "counterparty",
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
      "strength": "crushed",
      "strength_derivation": {
        "rule": "spec v3.29 §4.1 — the gap between the naive reading and what it catches",
        "inputs_source": "Watchtower record",
        "record_score": "hollowed",
        "weakness": false,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 1
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "This commitment covers fracking projects in a region that has nearly stopped fracking on its own. Almost all fracking elsewhere gets through.",
      "actual_reading": "it will not finance fracking projects in the UK or Europe, where the financing says it is for that project",
      "gaps": [
        {
          "title": "Everywhere else",
          "phrase_refs": [
            "uk-europe"
          ],
          "text": "The rule covers the UK and Europe only, where England has paused fracking and several European countries ban it. Most fracking happens in North America and Argentina, and the rule does not cover it."
        },
        {
          "title": "Loans that do not name their purpose",
          "phrase_refs": [
            "use-of-proceeds"
          ],
          "text": "Barclays only counts financing as “direct financing” when it knows the financing is for a particular project. So a fracking company can borrow for general purposes and spend the loan on fracking."
        }
      ],
      "in_practice": "A company that fracks shale wells in Texas is outside this rule, whatever it borrows for and however much it fracks.\n\nA company that wants to frack in the UK is covered, but only partly. If it asks Barclays for a loan for that project, the rule applies. If it asks for a general loan to the company, the rule does not apply, even if fracking is its whole business. The loan does not have to say what it is for, and Barclays does not have to ask.\n\nSo the rule binds very few borrowers. They have to be developing a fracking project in the UK or Europe, and they have to ask for financing tied to that project. Since England has paused fracking and several European countries ban it, there are few such developers to begin with.\n\nThe companies that do most of the world's fracking work in North America and Argentina, and this commitment does not affect any of them. Nor does it affect the contractors and suppliers that fracking depends on, wherever they work. A loan to them is not financing for a project."
    }
  },
  "evidence": {
    "status": "financing_found",
    "teaser": "That is how much Barclays put into the contractors that frack American wells, despite a commitment that seems to rule out exactly this. And that is only what we have found so far.",
    "headline_figure": {
      "display": "$114.8M",
      "combines": "2 2025 financings to the contractors that perform fracking in the Permian basin",
      "complete": false
    },
    "deals": [
      {
        "id": "barclays-propetro-services-2025",
        "company": "ProPetro Services Inc",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 75000000.0,
        "amount_display": "$75M",
        "instruments": [],
        "contradiction": "A pressure pumping contractor, which is the company that performs the fracking, working across the Permian basin. This commitment stops at fracking projects in the UK and Europe, and none of this work is there.",
        "phrase_refs": [
          "uk-europe"
        ],
        "source_url": null
      },
      {
        "id": "barclays-atlas-energy-solutions-2025",
        "company": "Atlas Energy Solutions Inc",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 39750000.0,
        "amount_display": "$39.8M",
        "instruments": [],
        "contradiction": "A supplier of the sand pumped into Permian wells to hold the fractures open. Its business exists for fracking, but in a region this commitment does not cover.",
        "phrase_refs": [
          "uk-europe"
        ],
        "source_url": null
      }
    ],
    "what_it_funded": "the contractors that frack American wells"
  },
  "provenance": {
    "built": "2026-10-02",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 219, document 4122",
    "reading": "drafted"
  }
};
