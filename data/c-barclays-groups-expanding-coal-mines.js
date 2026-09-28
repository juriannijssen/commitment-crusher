/* Commitment data — generated from commitments/commitment-barclays-groups-expanding-coal-mines.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "barclays-groups-expanding-coal-mines",
    "bank": "Barclays",
    "commitment_number": 22,
    "category": "coal",
    "effective_date": null,
    "title": "Barclays' Commitment on Groups Expanding Coal Mines",
    "short_title": "Commitment on Groups Expanding Coal Mines",
    "article_published": null,
    "intro": "Barclays sets out this restriction at entity level in the Thermal Coal Mining section of its Climate Change Statement of December 2025. It commits the bank not to provide general corporate financing to groups that are opening or expanding thermal coal mines.",
    "naive_reading": "it will not finance groups that are opening or expanding coal mines",
    "plain_language_note": "The rule is one long sentence with its exception built in; the plain version keeps both.",
    "sources_intro": "One policy document states this commitment, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=22",
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
        "intro": "Barclays will not provide general company financing to clients whose group is opening or expanding thermal coal mines. Its exception is in the same sentence.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not provide general corporate purposes financing to clients with entities engaged in opening new thermal coal mines or material expansion of existing thermal coal mines, unless an undertaking is received from the borrower or we are otherwise satisfied that the proceeds of such financing will not be made available to entities engaged in opening new thermal coal mines or material expansion of existing thermal coal mines.",
        "plain_rendering": "Barclays will not provide general corporate purposes financing to clients with entities engaged in opening new thermal coal mines, or in the material expansion of existing ones, unless an undertaking is received from the borrower or we are otherwise satisfied that the proceeds will not reach those entities.",
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
              127,
              145
            ],
            "plain_range": [
              141,
              159
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 3,
            "bank_definition": null
          },
          {
            "id": "undertaking",
            "label": "unless an undertaking is received from the borrower or we are otherwise satisfied",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "Borrower provides an undertaking or Barclays is satisfied",
            "not_in_synthesis": false,
            "verbatim_range": [
              178,
              259
            ],
            "plain_range": [
              178,
              259
            ],
            "means": "This explains the exception. An undertaking is a promise the borrower gives the bank about what the financing will not be used for. The financing goes ahead if the borrower promises the proceeds will not reach its coal-expanding entities, or if Barclays is satisfied of that anyway. The statement does not say how either is checked.",
            "lets_through": [
              "This wording lets through general corporate financing to any group expanding coal mines that promises where the funds will go. Funds move within a group, and a promise about one facility does not stop the rest of the group's cash going to the mines."
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
            "means": "This definition of “engaged in” is narrower than what it usually means. In ordinary English, a company engaged in coal mining is one that mines coal. Barclays makes it a revenue test: more than 5% of what the company earns, measured on the entity being financed. A company that mines coal and takes 4% of its revenues from it is still not engaged in coal mining here, whatever it digs up in absolute terms. It blocks fewer companies than the words suggest, and the ones it lets through are the diversified giants whose coal output is largest.",
            "lets_through": [
              "A large diversified company whose coal business is under 5% of its revenue.",
              "A company that grows its other businesses until coal falls below the line."
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
        "title": "The definition of “material expansion”",
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“material expansion” is set in italics in the wording above, and nothing else points to the definitions table."
        },
        "verbatim": "Material expansion — In relation to Thermal Coal Mining, refers to an increase in annual tonnage of thermal coal extracted from existing thermal coal mines, including captives, by more than 20%, measured from a baseline of maximum p.a. tonnage for preceding 3 years reported.",
        "plain_rendering": "For thermal coal mining, material expansion means an increase in a mine’s annual tonnage by more than 20%, measured against the highest annual tonnage of the preceding 3 years.",
        "phrases": [
          {
            "id": "by-more-than-20pc",
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
              89,
              105
            ],
            "means": "This definition of “material expansion” is narrower than what it usually means. By expansion we normally mean producing more than before, and by material, enough to matter. Barclays draws the line at a rise in annual tonnage of more than 20% over the mine's recent peak. A mine digging 19% more every year is not materially expanding here, so the restriction blocks less growth than a reader would expect — and nothing at all below the line, however many years in a row it is repeated.",
            "lets_through": [
              "A 19% rise in annual tonnage, every year.",
              "Repeated rises under the threshold, each one measured against a baseline that has already risen."
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
      "group-level"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 22,
      "commitment_id": "e130820f-e763-52b2-a739-28a3a2e3813e",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=22",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        10549,
        11008
      ],
      "summary_text": "Barclays restricts general corporate financing to clients with entities expanding thermal coal mining unless ringfencing undertakings are provided.",
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
          "condition": "Borrower provides an undertaking or Barclays is satisfied that financing proceeds will not be made available to entities opening new thermal coal mines or expanding existing ones",
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
      "strength": "hollowed",
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
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "An undertaking the borrower writes itself is the whole exception; stated flatly that is the gap.",
          "text": "The rule reaches the right target: groups with companies opening or expanding coal mines. Then it lets them through on a promise.\n\nIf the borrower promises the financing will not reach its coal-expanding companies, the financing goes ahead. It also goes ahead if Barclays is “otherwise satisfied”. The statement does not say how either is checked.\n\nFunds move freely inside a group. Financing that pays for the rest of the business frees the group's own funds for the mines. So a promise about where one loan goes changes little about what the group can afford.\n\nWhat remains is financing for a group that will not make the promise."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Who is turned away under this commitment?\n\nA group expanding coal mines that will not, or cannot, promise where the financing goes. That group is caught.\n\nAny group willing to sign such a promise is not caught. Nor is a group that satisfies Barclays in some other way, which the statement does not describe.\n\nSo the commitment binds only groups that refuse to make a promise. Most groups that want the financing will make it. The promise is written by the borrower, and the statement names no check on whether it is kept. The rule then rests entirely on trust."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Credit first: the rule looks at the whole group, not only the borrower. A group opening or expanding coal mines anywhere in its structure is in scope. It does not matter what share of revenue coal brings in.\n\nThat is the right way to look at it. A rule that only tested the borrower could be avoided by borrowing through another company in the group.\n\nWhere it stops is the promise. The borrower writes it, and the statement does not say how it is checked.\n\nSo the rule starts in the right place, and ends with the borrower's word. That is a weak end."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Replace the promise",
          "content": "Require checked, ringfenced use of the financing. Or refuse financing to groups expanding coal mines outright."
        },
        {
          "title": "Report the exceptions",
          "content": "Disclose how many loans go ahead on a promise, and how it is checked."
        }
      ],
      "what_needs_to_change_closing": "Until then, a group expanding coal mines can borrow from Barclays by promising the financing is for something else.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "A promise about where the funds go is a real condition, but 5% of revenue and a 20% tonnage line leave most of it standing."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Barclays commits not to provide general corporate financing to groups opening or expanding thermal coal mines. We have not yet reviewed what it financed against this commitment.",
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
