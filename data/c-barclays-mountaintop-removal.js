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
    "plain_language_note": "The rule is plain; the definition of direct financing comes from the table at the end of the statement.",
    "sources_intro": "One policy document states this commitment, and two passages from it are needed to see what it covers.",
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
            "means": "This definition of “direct financing” is narrower than what it usually means. By financing something directly we normally mean the financing is for a specified use — a project. Barclays adds one word: the use of proceeds has to be known to be for a particular project. Financing that pays for the same project through a loan with no stated purpose is not direct financing here, so the restriction blocks less than the sentence above appears to promise.",
            "lets_through": [
              "This wording lets through any financing where the client has not said what it is for. A company does not have to mention mountaintop removal. If it is not named, this commitment never applies."
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
        "weakness": false,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "A precise legal definition of the activity is genuine credit; conceding it first makes the instrument limit land.",
          "text": "Credit first: the activity is defined by law. Mountaintop removal is defined by reference to a US law on surface mining. So there is no argument about what counts.\n\nA rule tied to a legal definition cannot be stretched or shrunk by the bank.\n\nWhere it stops is the kind of financing. Only direct financing is restricted: financing whose use is known to be for the project. A company that mines this way can still borrow for general purposes.\n\nSo the activity is clearly defined. The rule only reaches financing that names it."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "The rule reaches mountaintop removal through direct financing only. That means financing whose use is known to be for the project.\n\nGeneral-purpose financing for a company that mines this way is untouched. So is a credit line, or a bond with no stated use. The company can spend that financing on the same mine.\n\nThere is also no client rule. Barclays does not restrict companies that mine this way, whatever share of their business it is.\n\nSo the mining is clearly defined, and the rule is clear. But the company doing the mining can still borrow from Barclays, as long as it does not say what for."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Who has to change anything because of this commitment?\n\nA mining company asking Barclays for financing that it says is for a mountaintop removal project. That company is caught.\n\nThe same company borrowing for general purposes is not caught. It can spend a general loan on the same project.\n\nSo the commitment binds the borrower that names its project. It releases the one that does not. There is no test on the company itself, so a company that mines this way can stay a Barclays client, and keep borrowing. The rule never looks at the company itself, only at the label."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Cover the company",
          "content": "Restrict all financing to companies that mine by mountaintop removal."
        },
        {
          "title": "Set a threshold",
          "content": "Set a share of output from mountaintop removal above which a company is restricted."
        }
      ],
      "what_needs_to_change_closing": "Until then, mountaintop removal can be financed, just not by name.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Direct financing only, and a company never has to say the proceeds are for mountaintop removal. Nothing has to be refused."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Barclays commits not to directly finance mountaintop removal coal mining. We have not yet reviewed what it financed against this commitment.",
    "headline_figure": {
      "display": null,
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-09-28",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 219, document 4122",
    "reading": "drafted"
  }
};
