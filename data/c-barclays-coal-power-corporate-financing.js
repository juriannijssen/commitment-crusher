/* Commitment data — generated from commitments/commitment-barclays-coal-power-corporate-financing.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "barclays-coal-power-corporate-financing",
    "bank": "Barclays",
    "commitment_number": 27,
    "category": "coal",
    "effective_date": null,
    "title": "Barclays' Commitment on Corporate Financing for Coal Plants",
    "short_title": "Commitment on Corporate Financing for Coal Plants",
    "article_published": null,
    "intro": "Barclays sets out this restriction at entity level in the Thermal Coal Power section of its Climate Change Statement of December 2025. It commits the bank not to provide general corporate financing for new or expanding coal-fired power plants.",
    "naive_reading": "it will not provide financing that helps utilities build or expand coal plants",
    "plain_language_note": "The rule is plain; the definition of material expansion comes from the table at the end of the statement.",
    "sources_intro": "One policy document states this commitment, and two passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=27",
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
          "passages": 3,
          "found": 3,
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
        "verbatim": "We will not provide general corporate purpose financing that is specified as being for new or material expansion of thermal coal-fired power plants.",
        "plain_rendering": "Barclays will not provide general corporate purpose financing that is specified as being for new or material expansion of thermal coal-fired power plants.",
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
            "means": "The words “specified as being for” limit this commitment to general corporate financing whose stated use is a new or expanding coal plant.",
            "lets_through": [
              "This wording lets through general corporate financing with no stated use, whatever the utility then builds."
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
        "verbatim": "Material expansion — … In relation to Thermal Coal Power, production refers to an investment to (i) extend the unabated operating lifetime of existing thermal coal power plants including captives or (ii) increase net operational thermal power capacity, including captives, by more than 10% measure from a baseline of maximum capacity for preceding 3 years reported.",
        "plain_rendering": "For thermal coal power, material expansion means an investment that extends the unabated life of an existing coal plant, or increases its net capacity by more than 10% over its maximum in the preceding 3 years.",
        "phrases": [
          {
            "id": "more-than-10pc",
            "label": "by more than 10%",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              273,
              289
            ],
            "plain_range": [
              151,
              167
            ],
            "means": "This definition of “material expansion” is narrower in one way and wider in another. By expansion we normally mean producing more than before. A capacity increase has to pass 10% before it counts here, so 9% is not expansion. But extending a coal plant's unabated life counts as expansion whatever the capacity, which ordinary use would not.",
            "lets_through": [
              "This wording lets through capacity additions of 10% or less."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "mixed"
      }
    ],
    "glossary_refs": [
      "coal-fired-power-generation",
      "corporate-finance",
      "use-of-proceeds-loan"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 27,
      "commitment_id": "d94a22a1-c091-540e-86f2-6927193a84fc",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=27",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        11853,
        12010
      ],
      "summary_text": "Barclays will not provide general corporate purpose financing specified for new or material expansion of thermal coal-fired power plants.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": "downstream",
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
        "condition": "A CASE-BY-CASE EXCEPTION FOR TRANSITION FINANCE · THERMAL COAL POWER — “We will consider exceptions to our thermal coal power policy on a case-by-case basis for any transition finance to clients reducing their thermal coal portfolio including retrofitting of existing facilities or where we are providing financing for decommissioning plants for those unable to transition.”",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "THERMAL COAL POWER · EXCEPTION"
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
          "recommended_because": "General corporate financing limited by a stated use covers little.",
          "text": "The commitment reaches general company loans, but only when they are stated to be for a new or expanding coal plant.\n\nGeneral company financing rarely states a use. So a utility can borrow for general purposes, and build.\n\nThe definition of expansion is broad. It counts life extensions and capacity added above 10%. But that only matters for loans that name a coal plant.\n\nThe narrowing is in the words “specified as being for”. So the rule looks like it reaches company loans. In practice, it only reaches the few that say they are for coal."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Who has to change anything because of this commitment?\n\nA utility that asks for a general company loan, and states that it is for a new or expanding coal plant. That utility is caught.\n\nThe same utility, asking for the same loan without stating a use, is not caught. It can spend the loan on the same plant.\n\nSo the commitment binds the borrower that is open about its plans. It releases the one that says nothing. Avoiding the rule does not require changing the plant, the loan or the amount. Only the words on the request. Nothing else changes."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: the commitment reaches into general company loans. That is where most coal power is financed. A rule that stopped at project loans would leave it open.\n\nAnd the definition of expansion includes extending a plant's life. That is how most coal fleets grow now.\n\nWhere it stops is the condition that the use must be stated. Most company loans do not say what they will pay for.\n\nSo the reach and the definition are right. The condition on stated use means the rule rarely applies. Few loans will ever meet it."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Drop “specified as being for”",
          "content": "Restrict company loans to utilities building, expanding or extending coal plants, whatever the stated use."
        },
        {
          "title": "Count capacity from a fixed starting point",
          "content": "Measure capacity additions against a fixed baseline."
        }
      ],
      "what_needs_to_change_closing": "Until then, the rule applies to company loans that say they are for coal.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Bites only where the financing is specified as being for coal power. General corporate financing never is."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Barclays commits not to provide general corporate financing specified for new or expanding coal-fired power plants. We have not yet reviewed what it financed against this commitment.",
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
