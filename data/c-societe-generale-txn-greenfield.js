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
              "This wording blocks project financing, but it allows general corporate financing. A company opening new fields and borrowing at group level is not asking for a dedicated transaction, so this commitment does not apply."
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
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "strength_reason": "A loan for a new field is refused. But a company opening new fields can still borrow as a whole, and every field approved by 2021 stays open for its whole life.",
      "actual_reading": "it will not give financing labelled for exploring, developing or producing an oil or gas field whose latest final investment decision came after 2021",
      "gaps": [
        {
          "title": "Loans to the company as a whole",
          "text": "The commitment covers “dedicated transactions” only: financing raised for a named field. A company opening new fields can take a general loan or issue a bond, and spend it on those fields.",
          "phrase_refs": [
            "dedicated"
          ]
        },
        {
          "title": "Fields approved by the end of 2021",
          "text": "A field approved on or before 31 December 2021 is never “Greenfield”. Financing labelled for it stays open for as long as it produces, which can be past 2060.",
          "phrase_refs": [
            "latest-fid"
          ]
        },
        {
          "title": "Growth inside existing fields",
          "text": "New wells, new phases and redevelopment in an existing field do not always need a fresh investment decision. When they do not, they stay outside the commitment.",
          "phrase_refs": [
            "latest-fid"
          ]
        }
      ],
      "in_practice": "The commitment turns on a date. A field is “Greenfield”, meaning new, when its latest final investment decision came after 31 December 2021. That decision is the moment a company formally approves building the field.\n\nTake a company that approved a new offshore field in 2024. If it asks Société Générale for a loan for that field, the answer is no. That covers exploring, developing and producing it.\n\nBut the same company can ask for a general loan to the company as a whole, which does not say what it pays for. Or it can issue a bond. That financing does not name the field, so the commitment does not apply. The company can spend it on the new field.\n\nNow take a field approved in 2021. It is not new under this definition, and it never becomes new. A loan labelled for that field is allowed today, and for as long as the field produces.\n\nOld fields can also grow. A company can drill more wells or add a phase. If that does not need a fresh investment decision, the field keeps its old date.\n\nSo what is stopped is financing that names a field approved after 2021. The companies opening those fields can still borrow from the bank.",
      "gets_right": "The bank says exactly what a new field is: one whose latest final investment decision came after 31 December 2021. Anyone can check a field against that date. The word “latest” means an old field approved again counts as new."
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
    "built": "2026-09-29",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 197, document 23944",
    "reading": "drafted"
  }
};
