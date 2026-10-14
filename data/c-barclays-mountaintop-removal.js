/* Commitment data — generated from commitments/commitment-barclays-mountaintop-removal.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "barclays-mountaintop-removal",
    "bank": "Barclays",
    "commitment_number": 33,
    "category": "coal",
    "effective_date": null,
    "title": "Barclays' Commitment on Mountaintop Removal Mining",
    "short_title": "Commitment on Mountaintop Removal Mining",
    "article_published": null,
    "intro": "Barclays sets out this restriction in the Mountain Top Removal section of its Climate Change Statement of December 2025. It commits the bank not to finance coal mining that removes mountaintops.",
    "naive_reading": "it will not finance coal mining that blasts the tops off mountains",
    "plain_language_note": "The rule is plain, and the definition of direct financing comes from the table at the end of the statement.",
    "sources_intro": "This commitment comes from a single policy document, and it takes two passages from it to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=33",
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
        "verbatim": "We will not directly finance projects or developments using MTR coal mining.",
        "plain_rendering": "Barclays will not directly finance projects or developments using mountaintop removal (MTR) coal mining.",
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
              "This wording lets through any financing where the client has not said what it is for. A company does not have to mention mountaintop removal, and if it is not named, this commitment never applies."
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
      "mountaintop-removal",
      "use-of-proceeds-loan"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 33,
      "commitment_id": "417734b4-c658-57f6-aa22-db95dce6ebde",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=33",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        13835,
        13915
      ],
      "summary_text": "Barclays will not directly finance projects or developments using mountaintop removal (MTR) coal mining.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
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
      "strength_reason": "This commitment covers only financing Barclays knows is for a mountaintop removal project. So a company that mines this way can borrow for general purposes and spend it on the same mine.",
      "actual_reading": "it will not give financing that it knows is for a particular project using mountaintop removal mining",
      "gaps": [
        {
          "title": "Loans that do not name their purpose",
          "phrase_refs": [
            "use-of-proceeds"
          ],
          "text": "Barclays only counts financing as “direct financing” when it knows the financing is for a particular project. So a company can borrow without saying what for, and this commitment never applies."
        }
      ],
      "in_practice": "Mountaintop removal is a way of mining coal. Miners blast away the top of a mountain to reach the seams below, and dump the rock into nearby valleys. It is used mainly in the Appalachian mountains of the United States.\n\nSay a coal company that mines this way asks Barclays for a loan to open a new mountaintop removal site, and says so. This commitment applies, and Barclays will not give that loan.\n\nBut the same company can ask for a general loan that does not say what it pays for. Barclays does not know it is for a particular project, so it is not “direct financing.” The company can spend it on the same site.\n\nThe same goes for a revolving credit line, which a company can draw on for anything, or a bond with no stated use. None of them names the project, so none is covered.\n\nThis commitment also sets no test on the company. However much of the company's coal comes from mountaintop removal, it can stay a Barclays client and keep borrowing.\n\nSo this commitment stops one kind of loan request: the one that names the mountaintop removal project. A company that leaves that sentence out gets through."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Barclays has committed not to directly finance mountaintop removal coal mining. We have not reviewed its financing against this commitment yet.",
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
