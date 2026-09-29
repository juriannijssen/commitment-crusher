/* Commitment data — generated from commitments/commitment-intesa-sanpaolo-new-oil-extraction-sites.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "intesa-sanpaolo-new-oil-extraction-sites",
    "bank": "Intesa Sanpaolo",
    "commitment_number": 1,
    "category": "oil_gas_expansion",
    "effective_date": null,
    "title": "Intesa Sanpaolo's Restriction on New Oil Extraction Sites",
    "short_title": "Restriction on New Oil Extraction Sites",
    "subject": "New Oil Extraction Sites",
    "article_published": null,
    "intro": "Intesa Sanpaolo states this commitment in its Rules on the Oil & Gas Sector, the public abstract of rules that apply across the group. The bank put it on its website in June 2024. It closes the section on the limits the bank sets for its own oil and gas business.",
    "naive_reading": "it will not finance any new oil extraction anywhere in the world",
    "plain_language_note": "The plain version names the bank instead of \"the Group\" and writes the sector out in full. Nothing else changes.",
    "sources_intro": "One policy document states this commitment. Two passages from it are quoted here:",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "rules2024",
        "document_title": "Intesa Sanpaolo Rules on the Oil & Gas Sector",
        "document_url": null,
        "synthesis_url": "https://watchtower.bank.green/institution/intesa_sanpaolo/document/8195/synthesis?run=261&commitment=1",
        "watchtower_document_id": 8195,
        "watchtower_institution": "intesa_sanpaolo",
        "synthesis_run": 261,
        "version_label": "June 2024",
        "published": "2024-06-30",
        "published_source": null,
        "published_confidence": null,
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "verbatim_check": {
          "document": "8195-intesa-sanpaolo-oil-gas.md",
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
        "source_id": "rules2024",
        "title": "The promise",
        "intro": "This is where Intesa Sanpaolo makes the commitment.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "In addition to the sectoral limitations described above, the Group commits not to finance projects in the Oil & Gas sector involving new oil extraction sites.",
        "plain_rendering": "In addition to the sector limits described above, Intesa Sanpaolo commits not to finance projects in the oil and gas sector involving new oil extraction sites.",
        "phrases": [
          {
            "id": "finance-projects",
            "label": "finance projects",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              82,
              98
            ],
            "plain_range": [
              81,
              97
            ],
            "means": "This explains what financing this commitment covers: project financing, a loan raised for one named project. It does not reach financing raised by the company as a whole.",
            "lets_through": [
              "This wording blocks project financing, but it allows general corporate financing (a loan to the company as a whole, which it can spend on anything). A producer opening a new field can still borrow from Intesa Sanpaolo at group level."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "new-oil-sites",
            "label": "new oil extraction sites",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              133,
              157
            ],
            "plain_range": [
              134,
              158
            ],
            "means": "This explains what the restriction covers: sites where oil is newly extracted. Gas sites are not named, and sites already producing are not covered.",
            "lets_through": [
              "This wording lets through project financing for a new gas field, however large.",
              "It also lets through project financing to expand a site that already produces oil."
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
        "source_id": "rules2024",
        "title": "What it allows",
        "intro": "Two sections later, under sustainable finance, the abstract names one kind of financing the rules never stop.",
        "location": {
          "distance": "later_in_document",
          "signposting": "none",
          "signposting_note": "The restriction gives no sign that a later section reaches back into it, and the sustainable finance section does not name the restrictions it overrides."
        },
        "verbatim": "Consequently, financing aligned with the European taxonomy and classified as sustainable from an environmental point of view is always permitted, in line with internal classification rules.",
        "plain_rendering": "So financing aligned with the European taxonomy and classified as sustainable from an environmental point of view is always permitted, in line with internal classification rules.",
        "phrases": [
          {
            "id": "always-permitted",
            "label": "always permitted",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "is always permitted",
            "not_in_synthesis": false,
            "verbatim_range": [
              128,
              144
            ],
            "plain_range": [
              117,
              133
            ],
            "means": "The words \"always permitted\" put this financing outside every restriction in the document, including this commitment.",
            "lets_through": [
              "This wording lets through project financing at a new oil site, where the financing itself is classified as environmentally sustainable. The test is the financing, not what the site produces."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "internal-classification",
            "label": "internal classification rules",
            "type": "undefined_term",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              159,
              188
            ],
            "plain_range": [
              148,
              177
            ],
            "means": "This explains who decides: Intesa Sanpaolo classifies the financing against its own rules, which this abstract does not publish.",
            "lets_through": [
              "This wording lets through any financing the bank's own classification calls sustainable. A reader cannot check that decision, because the rules behind it are not in this document."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "project-finance",
      "corporate-finance",
      "upstream",
      "greenfield",
      "eu"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 261,
      "document_id": 8195,
      "institution": "intesa_sanpaolo",
      "commitment_index": 1,
      "commitment_id": "5a4ddd8f-ef08-5760-9895-3cdd72ff2a58",
      "url": "https://watchtower.bank.green/institution/intesa_sanpaolo/document/8195/synthesis?run=261&commitment=1",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        8672,
        8830
      ],
      "summary_text": "Intesa Sanpaolo commits not to provide project financing for new oil extraction sites globally, except for financing aligned with the EU Taxonomy and classified as environmentally sustainable.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": "thermal",
          "oil_gas_types": [],
          "value_chain": "upstream",
          "activity_scope": "new"
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
          "condition": "Financing aligned with the European taxonomy and classified as environmentally sustainable under internal classification rules is always permitted",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": null
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 3 fields corrected]\nCHANGES:\n- Intesa Sanpaolo commits to phase out all outstanding exposures subject to unconventional resources exclusions (section 3.2.2) by 2025.: Changed activity_scope, relationship_status, and transaction_status to 'new_and_existing' — schema dictates using 'new_and_existing' for phase-out commitments when the policy does not explicitly distinguish between new and existing stages.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [],
    "general_clauses_page": null,
    "disagreements": [
      {
        "field": "document",
        "severity": "unreliable",
        "watchtower": "Watchtower titles this document Rules On Oil And Gas Sector 2025 (Group).",
        "bank_green": "The abstract says it has been on the website since June 2024, and Watchtower's own document record dates it 2024-06-30.",
        "action": "Date the document June 2024."
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
        "project_finance_only": true,
        "new_business_only": false,
        "total": 2
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "It covers only loans for a named project at a new oil site. New gas fields, growing existing oil fields and loans to the company as a whole all go through.",
      "actual_reading": "it will not give project loans for sites where oil is extracted for the first time, unless it classifies the financing as environmentally sustainable",
      "gaps": [
        {
          "title": "Loans to the company go through",
          "phrase_refs": [
            "finance-projects"
          ],
          "text": "The commitment covers project financing, a loan for one named project. A producer opening a new field can still take a general loan and spend it there."
        },
        {
          "title": "Gas, and growing existing fields",
          "phrase_refs": [
            "new-oil-sites"
          ],
          "text": "The wording names oil sites only, and new ones only. A new gas field is not covered, nor is expanding an oil site that already produces."
        },
        {
          "title": "Financing the bank calls sustainable",
          "phrase_refs": [
            "always-permitted",
            "internal-classification"
          ],
          "text": "Financing the bank classifies as environmentally sustainable is always permitted, even at a new oil site. It decides that under internal rules it does not publish."
        }
      ],
      "in_practice": "Project financing is a loan raised for one named project, such as one oil field. General corporate financing is a loan to the company as a whole, which it can spend on anything.\n\nTake an oil producer that wants to open a new field. If it asks Intesa Sanpaolo for a project loan for that field, the commitment applies. If it asks for a general loan to the company, it does not. The producer can then spend that loan on the new field.\n\nNow take a company opening a new gas field. The sentence names oil. A gas field is not covered, whatever its size. The same goes for an oil site that already produces. Drilling more wells there, or expanding it, is not a new site.\n\nThe last route runs through the bank's own labels. Financing aligned with the European taxonomy, the EU's system for labelling activities as green, and classified as sustainable is always permitted. The bank makes that call under internal rules this document does not publish. A reader cannot check it.\n\nSo the commitment stops one kind of loan: a project loan for a brand-new oil site that the bank has not labelled sustainable."
    }
  },
  "evidence": {
    "status": "financing_found",
    "teaser": "That is what Intesa Sanpaolo put into companies developing new oil fields, against a commitment written to stop new oil extraction.",
    "what_it_funded": "companies developing new oil fields",
    "headline_figure": {
      "display": "$268.3M",
      "combines": "Three 2025 financings: $121.1M Vaar Energi, $101.6M Chevron USA, $45.6M Ithaca Energy",
      "complete": false
    },
    "deals": [
      {
        "id": "intesa-vaar-energi-2025",
        "company": "Vaar Energi ASA",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 121122755.25,
        "amount_display": "$121.1M",
        "instruments": [],
        "contradiction": "A Norwegian producer bringing new oil fields into production on the Norwegian continental shelf. This commitment only covers financing raised for one named project. Financing raised by the company as a whole falls outside it.",
        "phrase_refs": [
          "finance-projects"
        ],
        "source_url": null,
        "instrument_required": true
      },
      {
        "id": "intesa-chevron-usa-2025",
        "company": "Chevron USA Inc",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 101639538.01,
        "amount_display": "$101.6M",
        "instruments": [],
        "contradiction": "The United States arm of an oil major, opening new oil developments across its portfolio. This commitment stops at financing raised for a single named site. Lending to a company that holds hundreds of them is not covered.",
        "phrase_refs": [
          "finance-projects"
        ],
        "source_url": null,
        "instrument_required": true
      },
      {
        "id": "intesa-ithaca-energy-2025",
        "company": "Ithaca Energy (North Sea) plc",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 45554507.76,
        "amount_display": "$45.6M",
        "instruments": [],
        "contradiction": "A UK North Sea producer holding fields that are not yet developed. This commitment reaches only financing raised for one named project. A company loan can pay to develop those fields without ever meeting that test.",
        "phrase_refs": [
          "finance-projects"
        ],
        "source_url": null,
        "instrument_required": true
      }
    ]
  },
  "provenance": {
    "built": "2026-09-29",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 261, document 8195",
    "reading": "drafted"
  }
};
