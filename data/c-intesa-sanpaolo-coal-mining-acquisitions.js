/* Commitment data — generated from commitments/commitment-intesa-sanpaolo-coal-mining-acquisitions.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "intesa-sanpaolo-coal-mining-acquisitions",
    "bank": "Intesa Sanpaolo",
    "commitment_number": 3,
    "category": "coal",
    "effective_date": null,
    "title": "Intesa Sanpaolo's Restriction on Coal Mining Acquisitions",
    "short_title": "Restriction on Coal Mining Acquisitions",
    "subject": "Coal Mining Acquisitions",
    "article_published": null,
    "intro": "Intesa Sanpaolo states this commitment in its Rules for Lending Operations in the Coal Sector, effective from July 2021. It sits in the same sentence as the rule on new mines. This half is about buying the companies rather than building the mines.",
    "naive_reading": "it will not help anyone buy a coal mining company",
    "plain_language_note": "The plain version names the bank. The elision marks a footnote reference, and the footnote itself is quoted below.",
    "sources_intro": "One policy document states this commitment. Two passages from it are needed to see what it covers:",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "coal2021",
        "document_title": "Intesa Sanpaolo Rules for Lending Operations in the Coal Sector",
        "document_url": null,
        "synthesis_url": "https://watchtower.bank.green/institution/intesa_sanpaolo/document/8201/synthesis?run=262&commitment=3",
        "watchtower_document_id": 8201,
        "watchtower_institution": "intesa_sanpaolo",
        "synthesis_run": 262,
        "version_label": "July 2021",
        "published": "2021-07-31",
        "published_source": null,
        "published_confidence": null,
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "verbatim_check": {
          "document": "8201-intesa-sanpaolo-coal.md",
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
        "source_id": "coal2021",
        "title": "The promise",
        "intro": "Intesa Sanpaolo will not finance the purchase of companies that operate in coal mining.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will also not provide financial products and services … to projects aimed at the construction or expansion of new coal mines (namely, \"Greenfield Projects\") or the purchase of companies operating in the coal mining sector.",
        "plain_rendering": "Intesa Sanpaolo will also not provide financial products and services … to projects aimed at the construction or expansion of new coal mines (namely, \"Greenfield Projects\") or the purchase of companies operating in the coal mining sector.",
        "phrases": [
          {
            "id": "products-and-services",
            "label": "financial products and services",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              32,
              63
            ],
            "plain_range": [
              38,
              69
            ],
            "means": "This explains how wide the restriction is meant to be: the document applies the term to all forms of financing, and to the advisory work that goes with them.",
            "lets_through": [
              "This wording is the strongest part of the sentence. It leaves little room to argue that arranging or advising on a purchase sits outside the rule."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "purchase-of-companies",
            "label": "the purchase of companies operating in the coal mining sector",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              170,
              231
            ],
            "plain_range": [
              176,
              237
            ],
            "means": "This explains what the restriction covers: financing raised to buy a company that mines coal.",
            "lets_through": [
              "This wording lets through the purchase of a mine rather than a company. Buying assets out of a company is not buying the company."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "exception",
        "source_id": "coal2021",
        "title": "When it may not apply",
        "intro": "A footnote to the same sentence keeps one category of financing outside it.",
        "location": {
          "distance": "nearby",
          "signposting": "weak",
          "signposting_note": "The only pointer is a footnote marker on the sentence; the rule itself gives no sign that agreed financing is treated differently."
        },
        "verbatim": "The foregoing is without prejudice to the contractual commitments already underway until their natural expiry",
        "plain_rendering": "The foregoing is without prejudice to the contractual commitments already underway until their natural expiry.",
        "phrases": [
          {
            "id": "contracts-underway",
            "label": "contractual commitments already underway",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "Contractual commitments already underway",
            "not_in_synthesis": false,
            "verbatim_range": [
              42,
              82
            ],
            "plain_range": [
              42,
              82
            ],
            "means": "This explains what the restriction does not touch: financing the bank has already agreed, which runs to the end of its term.",
            "lets_through": [
              "This wording lets through drawdowns under a facility signed before the rules. A long contract signed in 2021 can still be funding coal years later."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "thermal-coal",
      "corporate-finance",
      "advisory",
      "grandfathering",
      "exposure"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 262,
      "document_id": 8201,
      "institution": "intesa_sanpaolo",
      "commitment_index": 3,
      "commitment_id": "5e82226b-bfc1-5328-8614-7aa5b2b3426e",
      "url": "https://watchtower.bank.green/institution/intesa_sanpaolo/document/8201/synthesis?run=262&commitment=3",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        4443,
        4673
      ],
      "summary_text": "Intesa Sanpaolo excludes financing (including acquisition finance) for the purchase of companies operating in the coal mining sector, grandfathering existing contractual commitments.",
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
          "relationship_status": "new_and_existing",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": false,
          "transaction_status": "new"
        }
      },
      "triggers": [],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Contractual commitments already underway are permitted until their natural expiry",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": null
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 4 fields corrected]\nCHANGES:\n- Added certainty objects to exceptions missing them to comply with schema requirements.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [],
    "general_clauses_page": null,
    "disagreements": [],
    "assessment": {
      "strength": "hollowed",
      "strength_derivation": {
        "rule": "spec v3.29 §4.1 — the gap between the naive reading and what it catches",
        "inputs_source": "Watchtower record",
        "record_score": "hollowed",
        "weakness": false,
        "commitment_specific_carve_outs": 1,
        "project_finance_only": false,
        "new_business_only": true,
        "total": 2
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "text": "Intesa Sanpaolo will not finance the purchase of a coal mining company. The restriction is written at the level of the company being bought.\n\nThat is where it stops. Buying a mine out of a company is a purchase of assets, not of a company, and the sentence does not name it. Coal changes hands that way often.\n\nThe footnote does the rest. Financing already agreed runs to its natural expiry, whatever it is funding.\n\nWhat the rule gets right is its reach across financing types. The document applies financial products and services to all forms of financing, and to the advisory work with them. Arranging a deal is caught as well as lending into it.",
          "recommended": true,
          "recommended_because": "The asset-versus-company distinction is the whole of the gap, and it is invisible unless the reader knows how coal assets change hands."
        },
        {
          "angle": "who_it_catches",
          "text": "Who does this commitment stop, and when?\n\nIt stops Intesa Sanpaolo financing or advising on the purchase of a company that mines coal, from July 2021, anywhere in the world.\n\nIt catches the buyer, whoever they are. There is no test of how much coal the target produces, and no minimum size.\n\nIt does not stop the purchase of a mine as an asset. The sentence names companies.\n\nAnd it does not reach financing the bank agreed before the rules came in, which runs to its natural expiry.\n\nSo it catches the deal that buys the company, and not the deal that buys its mines.",
          "recommended": false,
          "recommended_because": null
        },
        {
          "angle": "what_it_gets_right",
          "text": "Advisory work is plainly in scope here. The document applies financial products and services to all forms of financing and the related advisory services.\n\nThere is no threshold. Any company operating in coal mining is covered, and the sector definition includes exploration, processing and waste as well as extraction.\n\nIt starts immediately, applies globally, and covers every bank and company in the group, including international branches.\n\nThe gap is the object of the sentence. It names the purchase of companies, not of mines, and financing agreed before the rules keeps running.",
          "recommended": false,
          "recommended_because": null
        }
      ],
      "verdict_selected": 0,
      "verdict_final": "Intesa Sanpaolo will not finance the purchase of a coal mining company, and the document's own definitions pull advisory work in alongside lending.\n\nThe restriction is written at the level of the company being bought. Buying a mine out of a company is a purchase of assets, not of a company, and the sentence does not name it. Coal changes hands that way often.\n\nThe footnote does the rest. Financing the bank had already agreed runs to its natural expiry, whatever it is funding.\n\nSo the rule is strong on what it covers, and narrow on what it points at.",
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green, the final verdict included, at Jurian's instruction on 2026-09-17. It still needs a human to read it and sign off: reviewed_by and reviewed_at are unset.",
      "what_needs_to_change": [
        {
          "title": "Name asset purchases as well as companies",
          "content": "The rule covers buying a coal mining company. Buying its mines is not covered."
        },
        {
          "title": "Put an end date on existing contracts",
          "content": "Agreed financing runs to its natural expiry. Without a backstop date, long contracts outlive the rule."
        }
      ],
      "what_needs_to_change_closing": "Until then, a coal mine can change hands with Intesa Sanpaolo's financing behind it.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "It reaches advising on a purchase, not only lending for it. Buying the mine rather than the company is outside it."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Intesa Sanpaolo commits not to finance the purchase of companies operating in coal mining. We have not yet reviewed what it financed against this commitment.",
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
    "source": "Watchtower synthesis run 262, document 8201",
    "reading": "drafted"
  }
};
