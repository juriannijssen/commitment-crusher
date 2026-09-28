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
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "The distance between what the sentence sounds like and what it reaches is the reader's first question, and project financing is the whole of it.",
          "text": "Intesa Sanpaolo will not finance projects at new oil extraction sites. That is a narrower promise than it sounds.\n\nIt covers project financing only: a loan raised for one named project. Most oil and gas financing is not that. It is general corporate financing, a loan to the company as a whole, which it can spend on anything. A company opening a new field can still borrow from Intesa Sanpaolo at group level.\n\nThe sentence also names oil. A new gas field is not covered by it.\n\nOne more route stays open, later in the document. Financing the bank classifies as environmentally sustainable is always permitted. Intesa Sanpaolo makes that classification under internal rules this abstract does not publish."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Who does this commitment stop, and when?\n\nIt stops a project loan for a new oil extraction site, anywhere in the world, from the day the rules were published.\n\nIt does not stop the company behind that site. If the producer borrows for itself rather than for the site, this commitment does not apply.\n\nIt does not stop new gas. A company opening a gas field faces nothing in this sentence.\n\nAnd it does not stop financing the bank has already classified as environmentally sustainable, whatever the site produces.\n\nSo it catches one kind of financing, at one kind of site, and leaves the company that owns the site free to borrow."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "The restriction is short, global and immediate. It needs no threshold and no scoring. A new oil extraction site is either being financed or it is not.\n\nIntesa Sanpaolo also states it as a commitment rather than an aim. There is no review step and no committee inside the sentence.\n\nThe limits sit around it. It reaches project financing only, so the loans most producers actually use are untouched. It names oil, not gas. And the sustainable finance section keeps one route open, on a classification the bank makes under rules it does not publish.\n\nA clear sentence, covering a small part of the business."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": "Intesa Sanpaolo will not finance projects at new oil extraction sites. Read quickly, that sounds like the end of new oil.\n\nIt is narrower. The commitment covers project financing: a loan raised for one named project. Most oil and gas financing is a loan to the company as a whole, and that is untouched. A producer opening a new field can still borrow from Intesa Sanpaolo at group level.\n\nThe sentence also names oil. A new gas field is not covered by it.\n\nAnd one route stays open at the back of the document. Financing the bank classifies as environmentally sustainable is always permitted, under internal rules the abstract does not publish.\n\nA clear promise, covering a small part of the business.",
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green, the final verdict included, at Jurian's instruction on 2026-09-17. It still needs a human to read it and sign off: reviewed_by and reviewed_at are unset.",
      "what_needs_to_change": [
        {
          "title": "Cover financing to the company, not just projects",
          "content": "Most oil producers borrow at group level. Until this commitment reaches that financing, a new oil site can still be paid for."
        },
        {
          "title": "Name gas sites alongside oil sites",
          "content": "The sentence stops new oil extraction sites only. A company opening a new gas field faces no restriction here."
        },
        {
          "title": "Publish the sustainable finance classification rules",
          "content": "The bank decides what counts as environmentally sustainable under rules it keeps internal. Publishing them would let a reader check the exception."
        }
      ],
      "what_needs_to_change_closing": "Until then, Intesa Sanpaolo can still finance the companies opening new oil sites.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Project financing only, oil only, new sites only, and financing the bank classifies as environmental is excepted on top."
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
    "built": "2026-09-28",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 261, document 8195",
    "reading": "drafted"
  }
};
