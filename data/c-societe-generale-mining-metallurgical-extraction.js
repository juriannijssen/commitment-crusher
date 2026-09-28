/* Commitment data — generated from commitments/commitment-societe-generale-mining-metallurgical-extraction.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-mining-metallurgical-extraction",
    "bank": "Société Générale",
    "commitment_number": 4,
    "category": "mining",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Restriction on Financing Metallurgical Coal Extraction",
    "short_title": "Restriction on Financing Metallurgical Coal Extraction",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Mining Sector Policy, published in April 2026. Where the 50% rule decides which companies the bank will take on, this one decides which projects it will fund: none whose underlying activity is digging up metallurgical coal.",
    "naive_reading": "it will not finance the mining of coal for steel-making",
    "plain_language_note": "Four words of activity, and one phrase at the front that decides what financing is covered.",
    "sources_intro": "One policy document states this exclusion, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "mining2026",
        "document_title": "Société Générale Mining Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/mining-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28052/synthesis?run=196&commitment=4",
        "watchtower_document_id": 28052,
        "watchtower_institution": "societe_generale",
        "synthesis_run": 196,
        "version_label": "April 2026",
        "published": "2026-04-01",
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "published_source": null,
        "published_confidence": null,
        "verbatim_check": {
          "document": "28052-societe-generale-mining.md",
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
        "source_id": "mining2026",
        "title": "The promise",
        "intro": "Société Générale will not provide dedicated financing for metallurgical coal extraction.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide dedicated financial transactions, products and services when the underlying activities are… metallurgical coal extraction activities.",
        "plain_rendering": "Société Générale will not provide dedicated financial transactions, products and services when the underlying activities are metallurgical coal extraction activities.",
        "phrases": [
          {
            "id": "dedicated",
            "label": "dedicated financial transactions, products and services",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              27,
              82
            ],
            "plain_range": [
              34,
              89
            ],
            "means": "This explains what financing this commitment covers: dedicated financing only. Société Générale says no to a request raised for a named activity, where it is clear what the financing is used for. It does not say no to the company. The same borrower can come back for a general loan or a bond issue, and this commitment has nothing to say about it.",
            "lets_through": [
              "The word “dedicated” lets through general corporate financing. A miner borrowing at group level is not asking for a dedicated transaction, so this commitment never applies.",
              "It also lets through everything the client-level rules let through. Only the 50% threshold decides whether the bank will deal with a company at all, and it applies to new clients only."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "metallurgical-coal",
      "dedicated-transaction",
      "corporate-finance",
      "project-finance"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 196,
      "document_id": 28052,
      "institution": "societe_generale",
      "commitment_index": 4,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28052/synthesis?run=196&commitment=4",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        17400,
        17441
      ],
      "summary_text": "Societe Generale will not provide dedicated financial transactions, products, and services for metallurgical coal extraction activities.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "metallurgical",
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
      "exceptions": [
        {
          "condition": "Pre-existing business commitments or opportunities at an advanced stage of negotiation",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": false,
          "standing": true,
          "where": "Section 7, Application date and updates"
        },
        {
          "condition": "Contradictory to provisions of any applicable local law, rule, regulation or regulatory guidance or directive",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": false,
          "standing": true,
          "where": "Section 7, Application date and updates"
        },
        {
          "condition": "Exceptional deviations approved by a senior management-chaired group oversight committee",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": true,
          "standing": true,
          "where": "Section 5, Implementation process"
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 0 fields corrected]\nCHANGES:\n- No changes required. The extractions accurately reflect the policy text and adhere to the schema rules.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "Pre-existing business commitments or opportunities at an advanced stage of negotiation",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "where": "Section 7, Application date and updates"
      },
      {
        "condition": "Contradictory to provisions of any applicable local law, rule, regulation or regulatory guidance or directive",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "where": "Section 7, Application date and updates"
      },
      {
        "condition": "Exceptional deviations approved by a senior management-chaired group oversight committee",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "where": "Section 5, Implementation process"
      }
    ],
    "general_clauses_page": null,
    "disagreements": [
      {
        "field": "weaknesses",
        "severity": "omission",
        "watchtower": "No weakness recorded — as on every commitment in this document.",
        "bank_green": "Watchtower states no weakness anywhere in the Mining synthesis, on any of the five commitments. The phrases highlighted on this page are Bank.Green's reading and are labelled as such.",
        "action": "Populate the weaknesses field for this document. Our highlighted phrases are the proposal."
      }
    ],
    "assessment": {
      "strength": "hollowed",
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
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "The sentence itself is unqualified; the money it covers is not. That gap is the whole finding.",
          "text": "The ban on the activity is clean. The financing it reaches is narrow.\n\n“Metallurgical coal extraction activities”, the mining of coal for steel-making, has no threshold and no qualifier. There is nothing in the sentence to argue about.\n\nThe limit is in the words at the front. It applies to “dedicated financial transactions, products and services”. That means financing raised for one named activity, where everyone knows what it pays for.\n\nMost mining is not financed that way. A mining company that borrows as a whole company, draws on a credit line or issues a bond is not asking for a dedicated deal. So this exclusion never applies, however much coal that company mines. The activity is excluded, but the companies doing it are not."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Within its scope, this is the cleanest sentence in the mining policy.\n\nThere is no revenue test, no majority test and no vague word. The bank does not ask how much of a project is coal mining for steel. It does not ask whether coal is the main purpose, or how big a share of the client's business it is. If that is what the financing is for, the answer is no.\n\nCompare the sentence three lines further down. It turns on whether infrastructure is “primarily linked to” this coal, words the policy never defines. The bank could write without a qualifier here, and chose to add one there.\n\nThe criticism is about which kind of financing it reaches, not how it is written."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "This commitment and the 50% client test are the bank's whole position on coal for steel-making. They should be read together.\n\nThis one covers any dedicated deal for mining this coal, for any client, new or existing. The client test covers any financing, but only for new clients earning more than half their revenue from it.\n\nNow take an existing client: a large mining group, earning 20% of its revenue from this coal and borrowing as a whole company. The client test misses it, because it is not new and is under the line. This exclusion misses it too, because the loan is not a dedicated deal.\n\nThat is not a rare case. It describes most of the world's production of this coal, and how it is financed."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green from its own reading of the wording. Watchtower states no weakness on this document, so unlike the oil and gas pages there is nothing sourced underneath these options — they sit entirely below the opinion boundary and a human must read them before publication.",
      "what_needs_to_change": [
        {
          "title": "Cover all financing, not just dedicated deals",
          "content": "Most mining is financed at company level. An exclusion that only reaches financing for a named purpose leaves the main route open."
        },
        {
          "title": "Add a client test for existing clients",
          "content": "This rule covers dedicated deals only. A client test would reach the companies already mining this coal."
        }
      ],
      "what_needs_to_change_closing": "Until then, the activity is excluded, but the companies doing it are not.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Dedicated financing of met coal extraction is genuinely blocked; group-level borrowing by the same miner is not.",
      "how_it_compares": {
        "text": "Société Générale's client rule on this coal covers new clients above 50% of revenue.",
        "links": [
          {
            "slug": "societe-generale-mining-metallurgical-50pc",
            "title": "Société Générale's 50% Threshold on Metallurgical Coal"
          }
        ]
      }
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance projects whose underlying activity is metallurgical coal extraction. We have not yet reviewed what it financed against this commitment.",
    "headline_figure": {
      "display": "Not yet checked",
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-09-28",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 196, document 28052",
    "reading": "drafted"
  }
};
