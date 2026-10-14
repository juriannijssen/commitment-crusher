/* Commitment data — generated from commitments/commitment-barclays-groups-building-coal-plants.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "barclays-groups-building-coal-plants",
    "bank": "Barclays",
    "commitment_number": 29,
    "category": "coal",
    "effective_date": null,
    "title": "Barclays' Commitment on Groups Building Coal Plants",
    "short_title": "Commitment on Groups Building Coal Plants",
    "article_published": null,
    "intro": "Barclays sets out this restriction at entity level in the Thermal Coal Power section of its Climate Change Statement of December 2025. It commits the bank not to provide general corporate financing to groups that are building or expanding coal-fired power plants.",
    "naive_reading": "it will not finance groups that are building or expanding coal plants",
    "plain_language_note": "The rule is one long sentence with its exception built in, and the plain version keeps both.",
    "sources_intro": "This commitment comes from a single policy document, and we quote one passage from it below.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=29",
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
        "intro": "Barclays will not provide general company financing to clients whose group is building or expanding thermal coal-fired power plants. The exception is in the same sentence.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not provide general corporate purposes financing to clients with entities engaged in developing new thermal coal-fired power plants or material expansion of existing thermal coal-fired power plants, unless an undertaking is received from the borrower, or we are otherwise satisfied that the proceeds of such financing will not be made available to entities engaged in developing new thermal coal-fired power plants or material expansion of existing thermal coal-fired power plants.",
        "plain_rendering": "Barclays will not provide general corporate purposes financing to clients with entities engaged in developing new thermal coal-fired power plants, or in the material expansion of existing ones, unless an undertaking is received from the borrower, or we are otherwise satisfied that the proceeds will not reach those entities.",
        "phrases": [
          {
            "id": "see-engaged-in",
            "label": "engaged in",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              82,
              92
            ],
            "plain_range": [
              88,
              98
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
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
              143,
              161
            ],
            "plain_range": [
              157,
              175
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 3,
            "bank_definition": null
          },
          {
            "id": "undertaking",
            "label": "unless an undertaking is received from the borrower, or we are otherwise satisfied",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "Borrower provides an undertaking or Barclays is satisfied",
            "not_in_synthesis": false,
            "verbatim_range": [
              207,
              289
            ],
            "plain_range": [
              194,
              276
            ],
            "means": "This explains the exception. An undertaking is a promise the borrower gives the bank about what the financing will not be used for. The financing goes ahead if the borrower promises the proceeds will not reach its coal-plant entities, or if Barclays is satisfied of that anyway. The statement does not say how either is checked.",
            "lets_through": [
              "This wording lets through general corporate financing to any group building coal plants that promises where the financing will go. Because financing for one company in a group frees the group's own funds for another, the promise changes little."
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
        "title": "The definition of “engaged in”",
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“engaged in” is set in italics in the wording above, and nothing else points to the definitions table."
        },
        "verbatim": "Engaged in — In relation to Thermal Coal Mining and Thermal Coal Power, a client is defined as “engaged in” if it generates more than 5% of its revenues from thermal coal-fired power generation and/or thermal-coal mining.",
        "plain_rendering": "For thermal coal mining and thermal coal power, a client is engaged in it if it generates more than 5% of its revenues from coal-fired power generation or coal mining.",
        "phrases": [
          {
            "id": "more-than-5pc-revenues",
            "label": "more than 5% of its revenues",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              124,
              152
            ],
            "plain_range": [
              90,
              118
            ],
            "means": "This definition of “engaged in” turns a plain verb into a threshold. In ordinary English, a company engaged in coal power is one that burns coal to make electricity. Rules such as the EU's climate-aligned investment indexes measure involvement as a share of revenue instead. Barclays does too: more than 5% of what the company earns, measured on the entity being financed. A company taking 4% of its revenues from coal plants is still not engaged in coal power here, however much coal it burns. So it blocks fewer companies than the words suggest, and the ones it lets through are the diversified giants whose coal fleets are largest.",
            "lets_through": [
              "A large diversified company whose coal business is under 5% of its revenue.",
              "A company that grows its other businesses until coal falls below the line."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "ordinary_source": [
              {
                "body": "European Union",
                "title": "EU Delegated Regulation 2020/1818, Article 12",
                "url": "https://eur-lex.europa.eu/eli/reg_del/2020/1818/oj"
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
        "title": "The definition of “material expansion”",
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“material expansion” is set in italics in the wording above, and nothing else points to the definitions table."
        },
        "verbatim": "Material expansion — … In relation to Thermal Coal Power, production refers to an investment to (i) extend the unabated operating lifetime of existing thermal coal power plants including captives or (ii) increase net operational thermal power capacity, including captives, by more than 10% measure from a baseline of maximum capacity for preceding 3 years reported.",
        "plain_rendering": "For thermal coal power, material expansion means an investment that extends the unabated operating life of an existing plant, or increases net capacity by more than 10% against the highest capacity of the preceding 3 years.",
        "phrases": [
          {
            "id": "by-more-than-10pc",
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
              152,
              168
            ],
            "means": "This definition of “material expansion” is narrower in one way and wider in another. The International Monetary Fund (IMF) describes expansion as adding physical capacity to an established business, so it normally means producing more than before. Here a capacity increase has to pass 10% before it counts, so 9% is not expansion. On the other hand, extending a coal plant's unabated life counts as expansion whatever the capacity, which ordinary use would not.",
            "lets_through": [
              "A 9% rise in capacity.",
              "Repeated rises under the threshold, each one measured against a baseline that has already risen."
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
        "ordinary_direction": "mixed"
      }
    ],
    "glossary_refs": [
      "coal-fired-power-generation",
      "corporate-finance",
      "use-of-proceeds-loan",
      "group-level"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 29,
      "commitment_id": "734315e8-c14a-5969-bb51-f5cc97b42b1e",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=29",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        12144,
        12647
      ],
      "summary_text": "Barclays restricts general corporate financing to clients with entities developing or expanding thermal coal power plants unless ringfencing undertakings are provided.",
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
      "triggers": [],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Borrower provides an undertaking or Barclays is satisfied that proceeds will not be made available to entities developing new or expanded thermal coal power plants",
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
        "project_finance_only": false,
        "new_business_only": false,
        "total": 1
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "A group building coal plants can still borrow for general purposes on a promise that the loan goes elsewhere. But inside a group, that promise changes little.",
      "actual_reading": "it will not give general-purpose loans to groups building or expanding coal plants, unless the borrower promises the loan will not reach its coal-plant companies",
      "gaps": [
        {
          "title": "A promise from the borrower",
          "phrase_refs": [
            "undertaking"
          ],
          "text": "The loan goes ahead if the borrower promises it will not reach the coal-plant companies, or if Barclays is satisfied of that some other way. But the statement does not say how either is checked."
        },
        {
          "title": "Below 5% of revenue",
          "phrase_refs": [
            "more-than-5pc-revenues"
          ],
          "text": "A company counts as “engaged in” coal power only above 5% of its revenue. So a large diversified company can run big coal plants and stay under that line."
        },
        {
          "title": "Expansion under 10%",
          "phrase_refs": [
            "by-more-than-10pc"
          ],
          "text": "Adding capacity only counts as “material expansion” above 10%. So rises just under the line, repeated, add capacity without ever crossing it."
        }
      ],
      "in_practice": "General-purpose financing is a loan to a company as a whole, which does not say what it pays for. This commitment covers that kind of loan, to groups with a company building or expanding a coal plant.\n\nSay a power group has one subsidiary building a new coal plant, and the group asks Barclays for a general loan. The loan can still go ahead, as long as the borrower promises that the proceeds will not reach the subsidiary building the plant.\n\nThat promise changes little, because cash moves between companies inside a group. A loan that pays for the group's other business frees the group's own cash for the plant, so the plant gets built either way.\n\nBarclays can also go ahead without a promise, if it is “otherwise satisfied.” The statement does not say what would satisfy it.\n\nThen there are the definitions. The coal plant has to belong to a company earning more than 5% of its revenue from coal. And adding 9% capacity to an existing plant is not “material expansion.”\n\nSo this commitment catches a group building coal plants that will not make the promise. Any group that wants the loan can make it."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Barclays has committed not to provide general corporate financing to groups building or expanding coal-fired power plants. We have not reviewed its financing against this commitment yet.",
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
