/* Commitment data — generated from commitments/commitment-societe-generale-txn-greenfield.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-txn-greenfield",
    "bank": "Société Générale",
    "commitment_number": 7,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Restriction on New Oil & Gas Fields",
    "short_title": "Restriction on New Oil & Gas Fields",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026. The bank will not finance the exploration, development or production of Greenfield oil and gas fields — new fields — and it publishes a definition saying exactly which fields those are. It is the commitment the rest of this policy's Greenfield exclusions hang from.",
    "naive_reading": "it will not finance new oil and gas fields",
    "plain_language_note": "Two short sentences with no hedging in either. The definition does the work, and it does it with a date rather than a judgement.",
    "sources_intro": "One policy document states this exclusion. Two passages are quoted here: the ban, and the definition that decides which fields are new.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=7",
        "watchtower_document_id": 23944,
        "watchtower_institution": "societe_generale",
        "synthesis_run": 197,
        "version_label": "April 2026",
        "published": "2026-04-01",
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "published_source": null,
        "published_confidence": null,
        "verbatim_check": {
          "document": "23944-societe-generale-oil-gas.md",
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
        "source_id": "ogp2026",
        "title": "The promise",
        "intro": "This is the exclusion itself. It names three activities and one kind of field.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not execute dedicated transactions or provide dedicated financial products and services when the underlying activities are… exploration, development and production of Greenfield oil and gas fields",
        "plain_rendering": "Société Générale will not execute dedicated transactions, or provide dedicated financial products and services, when the underlying activities are exploration, development and production of Greenfield oil and gas fields.",
        "phrases": [
          {
            "id": "dedicated",
            "label": "dedicated transactions",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              27,
              49
            ],
            "plain_range": [
              34,
              56
            ],
            "means": "This explains what financing this commitment covers: dedicated financing only. That is financing raised for a named activity, where it is clear what the financing is used for.",
            "lets_through": [
              "This wording blocks project financing, but it allows general corporate financing. A company opening new fields and borrowing at group level is not asking for a dedicated transaction, so this commitment does not apply. At company level the only tests are the policy's three client rules, and none of them asks whether a producer is opening new fields."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          },
          {
            "id": "greenfield",
            "label": "Greenfield",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              182,
              192
            ],
            "plain_range": [
              190,
              200
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
        "source_id": "ogp2026",
        "title": "The definition of “Greenfield”",
        "intro": "How Société Générale's policy defines it in a note below its rules.",
        "location": {
          "distance": "nearby",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "\"Greenfield\" means oil and gas fields and associated reservoirs for which the latest Final Investment Decision (FID) was made after 31 December 2021.",
        "plain_rendering": "\"Greenfield\" means oil and gas fields and associated reservoirs for which the latest Final Investment Decision (FID) was made after 31 December 2021.",
        "phrases": [
          {
            "id": "latest-fid",
            "label": "the latest Final Investment Decision (FID) was made after 31 December 2021",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              74,
              148
            ],
            "plain_range": [
              74,
              148
            ],
            "means": "This definition of “Greenfield” is narrower than what it usually means. By greenfield we normally mean a site not built on before. Société Générale makes it a date test: the latest final investment decision after 31 December 2021. It turns on a dated corporate approval rather than on when oil or gas starts flowing, so a field being drilled today falls outside it if the decision came early enough.",
            "lets_through": [
              "This wording lets through every field approved on or before 31 December 2021, for the whole of its producing life. A field approved in 2021 and producing until 2060 is never Greenfield, and the decades of oil that follow are outside this commitment.",
              "It also lets through expansion inside an existing field that does not require a new final investment decision. Additional wells, new phases and redevelopment can add supply for years without triggering a fresh FID."
            ],
            "defined_in_clause": null,
            "source": "watchtower_exception",
            "watchtower_ref": "Fields for which the latest Final Investment Decision (FID) was made on or before 31 December 2021.",
            "not_in_synthesis": false,
            "bank_definition": null
          }
        ],
        "ordinary_direction": "narrower",
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "fid",
      "greenfield"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 7,
      "commitment_id": "5472de60-3a02-5266-9e46-4a6a10633c55",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=7",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        20882,
        21473
      ],
      "summary_text": "The Group will not provide project-level financing or dedicated financial services for the exploration, development, and production of Greenfield oil and gas fields (defined as those with an FID after December 31, 2021).",
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
          "level": "counterparty",
          "relationship_status": null,
          "certainty": null
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
          "condition": "Fields for which the latest Final Investment Decision (FID) was made on or before 31 December 2021.",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": "Section 6.2, immediately below the exclusion list, page 9"
        },
        {
          "condition": "Exceptions for pre-existing business commitments or opportunities at an advanced stage of negotiation.",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": true,
          "where": "Section 7, Application date and updates, page 11"
        },
        {
          "condition": "Any deviation from this policy may be granted, on an exceptional basis, by a Societe Generale group oversight committee chaired by senior management.",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": true,
          "standing": true,
          "where": "Section 5.2, Client engagement, page 7"
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 2 removed, 0 split, 1 fields corrected]\nCHANGES:\n- Removed commitment 1 (upstream O&G exposure reduction): Quantitative portfolio reduction targets without a defined endpoint are out of scope.\n- Removed commitment 2 (GHG financed emissions reduction): Quantitative portfolio reduction targets without a defined endpoint are out of scope.\n- Commitment 5 (phase out private companies generating almost all revenues from upstream O&G): Removed exception 'Existing exposure will be phased out until extinction...' as this describes the phase-out mechanism itself, not an exception to the rule.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "Exceptions for pre-existing business commitments or opportunities at an advanced stage of negotiation.",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "watchtower",
        "governance_process": false,
        "standing": true,
        "where": "Section 7, Application date and updates, page 11"
      },
      {
        "condition": "Any deviation from this policy may be granted, on an exceptional basis, by a Societe Generale group oversight committee chaired by senior management.",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "watchtower",
        "governance_process": true,
        "standing": true,
        "where": "Section 5.2, Client engagement, page 7"
      }
    ],
    "general_clauses_page": null,
    "disagreements": [
      {
        "field": "exceptions",
        "severity": "omission",
        "watchtower": "Records the pre-2022 FID carve-out here, and marks the §7 transition exception `discretionary_carve_out` — the only commitment where that sentence is classified that way.",
        "bank_green": "The FID cut-off governs Commitments 8, 9 and 11 as well, and is recorded on none of them. The §7 classification looks like a slip.",
        "action": "Propagate the FID carve-out to 8, 9 and 11; set §7 to `bounded_carve_out` for consistency."
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
        "project_finance_only": true,
        "new_business_only": false,
        "total": 2,
        "previous_editorial_rating": "hollowed",
        "changed": false
      },
      "verdict_options": [
        {
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "This is the best-drafted exclusion in the document and the word 'latest' is a deliberate anti-avoidance choice most banks do not make; a page that opens by showing that is far harder to wave away.",
          "text": "Two things about this rule deserve credit first.\n\nThe first is that it is defined. A new field is one whose latest final investment decision came after 31 December 2021. That decision is the moment a company commits to building. Anyone can check a field against the date.\n\nThe second is the word “latest”. A field first approved in 2015 that is approved again in 2027 counts as new. That closes an obvious way around a cut-off date: reviving an old approval. The bank did not have to write it.\n\nWhat remains is scope. It only covers dedicated deals. No test in the policy asks whether a company borrowing as a whole is opening new fields."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "This exclusion stops financing tied to a new field. It does not stop financing for the company opening it.\n\nEverything in this section applies to dedicated deals: financing for one named activity. New fields are more and more often paid for with company-wide loans, credit lines and bonds. None of those is dedicated to anything.\n\nAt company level, the policy has three client tests. One is a 30% threshold on four kinds of oil and gas. One changes how that is measured. One excludes private companies that do almost nothing but produce. None asks whether a company is opening new fields.\n\nSo a conventional producer opening new fields anywhere, financed as a whole company, passes every test in this policy.\n\nThe cut-off adds to it. A field approved on 31 December 2021 is outside for its whole life."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "This is a good new-fields rule. The reason is the definition, not the ban.\n\nA promise not to finance new fields means little without saying what “new” means. Without a definition, the promise cannot be tested. A field stays new until the bank decides it is an extension, and no one outside can check.\n\nSociété Générale published a date, then wrote “latest” to stop it being gamed. Unlike a policy that just says “new fields”, this one can actually be tested.\n\nWhere it falls short is scope. The rule covers dedicated deals, not the company loans that pay for most new fields. A clear rule with narrow scope and a vague rule with wide scope fail in different ways. It is not obvious which lets more through."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "what_needs_to_change": [
        {
          "title": "Apply it to the client",
          "content": "The rule only covers dedicated deals. No test in this policy asks whether a company borrowing as a whole is opening new fields."
        },
        {
          "title": "Rethink the 2021 cut-off",
          "content": "A field approved on 31 December 2021 is outside this rule for its whole life. A test based on production, not approval date, would follow the oil."
        },
        {
          "title": "Say what happens to expansions of existing fields",
          "content": "New wells and new phases can add years of supply without a new investment decision. Nothing here deals with them."
        }
      ],
      "what_needs_to_change_closing": "Until then, a clear definition sits inside a narrow scope.",
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Verdict options were drafted before the analysis was re-based on Watchtower's record. They are Bank.Green interpretation and sit below the opinion boundary, but they have not been re-read against the derived rating.",
      "strength_reason": "Project financing for new fields is genuinely blocked; the 2021 date frees every earlier field for its whole producing life."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance the exploration, development or production of new oil and gas fields — those with a final investment decision after 31 December 2021. We have not yet reviewed what it financed against this commitment.",
    "headline_figure": {
      "display": "Not yet checked",
      "combines": "No financing has been linked to this commitment yet",
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-09-28",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 197, document 23944",
    "reading": "drafted"
  }
};
