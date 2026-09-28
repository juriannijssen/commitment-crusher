/* Commitment data — generated from commitments/commitment-barclays-coal-mining-corporate-financing.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "barclays-coal-mining-corporate-financing",
    "bank": "Barclays",
    "commitment_number": 20,
    "category": "coal",
    "effective_date": null,
    "title": "Barclays' Commitment on Corporate Financing for Coal Mining",
    "short_title": "Commitment on Corporate Financing for Coal Mining",
    "article_published": null,
    "intro": "Barclays sets out this restriction at entity level in the Thermal Coal Mining section of its Climate Change Statement of December 2025. It commits the bank not to provide general corporate financing for new or expanding thermal coal mining.",
    "naive_reading": "it will not provide financing that helps coal miners open or expand mines",
    "plain_language_note": "The rule is plain; the definition of material expansion comes from the table at the end of the statement.",
    "sources_intro": "One policy document states this commitment, and two passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=20",
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
        "verbatim": "We will not provide general corporate purpose financing that is specified as being for new or material expansion of thermal coal mining.",
        "plain_rendering": "Barclays will not provide general corporate purpose financing that is specified as being for new or material expansion of thermal coal mining.",
        "phrases": [
          {
            "id": "specified-as-being-for",
            "label": "specified as being for",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              64,
              86
            ],
            "plain_range": [
              70,
              92
            ],
            "means": "The words “specified as being for” limit this commitment to general corporate financing whose stated use is new or expanding coal mining.",
            "lets_through": [
              "This wording lets through general corporate financing with no stated use — which is what general corporate financing usually is — whatever the miner then does with it."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "see-material-expansion",
            "label": "material expansion",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              94,
              112
            ],
            "plain_range": [
              100,
              118
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
        "title": "The definition of “material expansion”",
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Expansion” is set in italics in the rule, and nothing else points to the definitions table."
        },
        "verbatim": "Material expansion — In relation to Thermal Coal Mining, refers to an increase in annual tonnage of thermal coal extracted from existing thermal coal mines, including captives, by more than 20%, measured from a baseline of maximum p.a. tonnage for preceding 3 years reported.",
        "plain_rendering": "For thermal coal mining, material expansion means increasing a mine's annual tonnage by more than 20%, measured against its highest annual tonnage in the preceding 3 years.",
        "phrases": [
          {
            "id": "more-than-20pc",
            "label": "by more than 20%",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              177,
              193
            ],
            "plain_range": [
              85,
              101
            ],
            "means": "This definition of “material expansion” is narrower than what it usually means. By expansion we normally mean producing more than before, and by material, enough to matter. Barclays draws the line at a rise in annual tonnage of more than 20% over the mine's recent peak. A mine digging 19% more every year is not materially expanding here, so the restriction blocks less growth than a reader would expect — and nothing at all below the line, however many years in a row it is repeated.",
            "lets_through": [
              "This wording lets through expansions of 20% or less, repeated against a rolling three-year baseline."
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
      "thermal-coal",
      "corporate-finance",
      "use-of-proceeds-loan",
      "capacity-expansion"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 20,
      "commitment_id": "e8455630-514d-5588-b3b2-bd4408a90283",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=20",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        10276,
        10421
      ],
      "summary_text": "Barclays will not provide general corporate purpose financing specified for new or material expansion of thermal coal mining.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": "new_and_existing",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new_and_existing"
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
        "condition": "A CASE-BY-CASE EXCEPTION FOR TRANSITION FINANCE · THERMAL COAL MINING — “We will consider exceptions to our thermal coal mining policy on a case-by-case basis for any transition finance provided by Barclays to clients reducing their thermal coal portfolio including retrofitting of existing facilities.”",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "THERMAL COAL MINING · EXCEPTION"
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
        "record_score": "holds",
        "weakness": false,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 0
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "General corporate financing limited by a stated use covers little; stated flatly that is the gap.",
          "text": "The commitment reaches general company loans, but only when they are stated to be for new or expanding coal mines.\n\nGeneral company financing is, by its nature, financing without a stated use. A miner can borrow for general purposes and open a mine, and the commitment does not apply.\n\nExpansion also only counts above 20% of recent peak output. Smaller steps are not covered, even if they are labelled.\n\nThe narrowing is in the words “specified as being for”. So the rule looks complete, and catches only borrowers that choose to name their coal plans."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Who has to change anything because of this commitment?\n\nA miner that asks for a general company loan, and states that it is for a new mine or a large expansion. That miner is caught.\n\nThe same miner asking without stating a use is not caught. A miner expanding a mine by less than 20% is not caught either, even if it says so.\n\nSo the commitment binds the borrower that is open about its plans. It releases the one that says nothing. For a miner that knows the rule, avoiding it is simply a matter of what goes on the loan request."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: the commitment tries to reach past project finance, into general company loans. That is where most mining is financed, and a rule that stopped at project loans would leave it open.\n\nIt also uses a defined measure of expansion, with a number and a baseline.\n\nBut it only does so where the use is stated, which is the smallest part of general company financing. Most company loans do not say what they will pay for.\n\nSo the aim is right. The reach is limited to borrowers who label their loans for coal, and few need to. The label decides, not the mine."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Drop “specified as being for”",
          "content": "Restrict company loans to miners opening or expanding mines, whatever the stated use."
        },
        {
          "title": "Count expansion from a fixed starting point",
          "content": "Measure expansion against a fixed baseline, not the last three years' peak."
        }
      ],
      "what_needs_to_change_closing": "Until then, the rule applies to company loans that say they are for coal, which they rarely do.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Bites only where the financing is specified as being for coal mining. General corporate financing, by definition, never is."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Barclays commits not to provide general corporate financing specified for new or expanding thermal coal mining. We have not yet reviewed what it financed against this commitment.",
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
