/* Commitment data — generated from commitments/commitment-intesa-sanpaolo-critical-areas.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "intesa-sanpaolo-critical-areas",
    "bank": "Intesa Sanpaolo",
    "commitment_number": 2,
    "category": "arctic",
    "effective_date": null,
    "title": "Intesa Sanpaolo's Oil & Gas Projects in Critical Areas",
    "short_title": "Oil & Gas Projects in Critical Areas",
    "subject": "Oil & Gas Projects in Critical Areas",
    "article_published": null,
    "intro": "Intesa Sanpaolo states this commitment in its Rules on the Oil & Gas Sector, published in June 2024. It carries the group's general ESG exclusions into the oil and gas sector. The passage names five kinds of place, from World Heritage sites to the Arctic.",
    "naive_reading": "it will not finance oil and gas projects in the world's protected places",
    "plain_language_note": "The plain version names the bank, drops the footnote markers and sets the five areas out as a list, so the sentence reads straight through.",
    "sources_intro": "One policy document states this commitment. Three passages from it are needed to see what it covers:",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "rules2024",
        "document_title": "Intesa Sanpaolo Rules on the Oil & Gas Sector",
        "document_url": null,
        "synthesis_url": "https://watchtower.bank.green/institution/intesa_sanpaolo/document/8195/synthesis?run=261&commitment=2",
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
          "passages": 6,
          "found": 6,
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
        "intro": "This passage follows the sentence on new oil sites. It names the places where the bank will not lend, and the kind of harm that triggers it.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Furthermore, the general exclusion criteria already specified in the \"Group Guidelines for the Governance of Social, Environmental and Governance (ESG) Risks\", contextualized and detailed with respect to the operations of the sector, oblige the Group not to finance projects in the Oil & Gas sector characterized by activities with negative environmental impacts in the \"critical areas\" of the planet such as: natural World Heritage sites (UNESCO) … wetlands according to the Ramsar Convention … the Arctic Region … Amazon Sacred Headwaters",
        "plain_rendering": "The general exclusion criteria in the Group Guidelines for the Governance of Environmental, Social and Governance (ESG) Risks, applied to this sector, oblige Intesa Sanpaolo not to finance projects in the oil and gas sector characterized by activities with negative environmental impacts in the \"critical areas\" of the planet, such as natural World Heritage sites (UNESCO), wetlands under the Ramsar Convention, the Arctic Region and the Amazon Sacred Headwaters.",
        "phrases": [
          {
            "id": "not-finance-projects",
            "label": "not to finance projects",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              251,
              274
            ],
            "plain_range": [
              174,
              197
            ],
            "means": "This explains what financing this commitment covers: project financing, a loan raised for one named project.",
            "lets_through": [
              "This wording blocks project financing, but it allows general corporate financing (a loan to the company as a whole, which it can spend on anything). A company drilling in the Arctic can still borrow at group level."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "negative-impacts",
            "label": "characterized by activities with negative environmental impacts",
            "type": "undefined_term",
            "source": "watchtower_weakness",
            "watchtower_ref": "characterized by activities with negative environmental impacts",
            "not_in_synthesis": false,
            "verbatim_range": [
              299,
              362
            ],
            "plain_range": [
              224,
              287
            ],
            "means": "This explains when the restriction bites: only where the bank judges a project's activities to have negative environmental impacts. The document never says what counts as one.",
            "lets_through": [
              "This wording lets through a project inside a protected area that the bank does not judge to have negative environmental impacts. The bank decides what counts as a negative impact."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "critical-areas",
            "label": "critical areas",
            "type": "undefined_term",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              371,
              385
            ],
            "plain_range": [
              296,
              310
            ],
            "means": "This explains where the restriction applies: five kinds of area the document lists, from World Heritage sites to the Amazon headwaters.",
            "lets_through": [
              "This wording lets through a project just outside a listed boundary. A field next to a protected area, or piping oil out of one, is not in a critical area."
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
        "title": "When it may not apply",
        "intro": "A footnote sets out what the bank does when a World Heritage Site has no set buffer zone.",
        "location": {
          "distance": "nearby",
          "signposting": "weak",
          "signposting_note": "The only pointer is a footnote marker on the World Heritage bullet; the rule itself says nothing about boundaries or discretion."
        },
        "verbatim": "Where a buffer zone is not determined and the project is located in proximity to a World Heritage Site (i.e. less than 1 km from its boundary), the Group will decide on a case-by-case basis whether to apply the exclusion criterion.",
        "plain_rendering": "Where a buffer zone is not determined and the project is less than 1 km from a World Heritage Site boundary, Intesa Sanpaolo will decide on a case-by-case basis whether to apply the exclusion criterion.",
        "phrases": [
          {
            "id": "case-by-case",
            "label": "case-by-case basis",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "case-by-case basis",
            "not_in_synthesis": false,
            "verbatim_range": [
              171,
              189
            ],
            "plain_range": [
              142,
              160
            ],
            "means": "The words \"case-by-case basis\" hand the decision back to the bank. Where no buffer zone has been set, the restriction applies only if Intesa Sanpaolo decides it should.",
            "lets_through": [
              "This wording lets through a project a few hundred metres from a World Heritage site. The bank decides each one, and the document sets no test for that decision."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 3,
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
              "This wording lets through project financing inside one of the listed areas, where the financing itself is classified as environmentally sustainable."
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
      "arctic",
      "ramsar",
      "world-heritage",
      "iucn-categories"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 261,
      "document_id": 8195,
      "institution": "intesa_sanpaolo",
      "commitment_index": 2,
      "commitment_id": "588def8a-7c7d-5ba9-b22d-65feda83bec7",
      "url": "https://watchtower.bank.green/institution/intesa_sanpaolo/document/8195/synthesis?run=261&commitment=2",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        8832,
        9565
      ],
      "summary_text": "Intesa Sanpaolo excludes project financing for oil and gas projects with negative environmental impacts in critical areas (UNESCO World Heritage sites, Ramsar wetlands, IUCN I-VI protected areas, Arctic Region, and Amazon Sacred Headwaters).",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "arctic"
          ],
          "value_chain": null,
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": false
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
          "condition": "Where a buffer zone is not determined and the project is located within 1 km of a UNESCO World Heritage Site boundary, the Group decides on a case-by-case basis whether to apply the exclusion",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": true,
          "standing": false,
          "where": null
        },
        {
          "condition": "Financing aligned with the European taxonomy and classified as environmentally sustainable under internal classification rules is always permitted",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": null
        }
      ],
      "weaknesses": "The exclusion only applies to projects 'characterized by activities with negative environmental impacts', which creates discretion in defining what constitutes a qualifying negative impact.",
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 3 fields corrected]\nCHANGES:\n- Intesa Sanpaolo commits to phase out all outstanding exposures subject to unconventional resources exclusions (section 3.2.2) by 2025.: Changed activity_scope, relationship_status, and transaction_status to 'new_and_existing' — schema dictates using 'new_and_existing' for phase-out commitments when the policy does not explicitly distinguish between new and existing stages.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [],
    "general_clauses_page": null,
    "disagreements": [
      {
        "field": "scope.industry.oil_gas_types",
        "severity": "classification",
        "watchtower": "The record types this commitment as arctic only.",
        "bank_green": "The passage names five kinds of area: UNESCO natural World Heritage sites, Ramsar wetlands, IUCN category I to VI protected areas, the Arctic Region and the Amazon Sacred Headwaters.",
        "action": "Widen the record's area types, or record that the type list cannot carry them."
      },
      {
        "field": "commitments",
        "severity": "omission",
        "watchtower": "The record carries no commitment for the paragraph that closes this section.",
        "bank_green": "The same section commits the Group not to finance companies and projects located in active armed conflict areas, or where there is evidence of sanctions, judicial proceedings or sentences over human rights violations or forced or child labour.",
        "action": "Raise it with Watchtower as a missing commitment. It is not read on this page."
      }
    ],
    "assessment": {
      "strength": "crushed",
      "strength_derivation": {
        "rule": "spec v3.29 §4.1 — the gap between the naive reading and what it catches",
        "inputs_source": "Watchtower record",
        "record_score": "crushed",
        "weakness": true,
        "commitment_specific_carve_outs": 2,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 3
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "It covers only loans for a named project, and only where the bank itself judges the harm. The company drilling there can still borrow for general purposes.",
      "actual_reading": "it will not give project loans for oil and gas projects inside the protected areas it lists, where it judges the activities harm the environment",
      "gaps": [
        {
          "title": "Loans to the company go through",
          "phrase_refs": [
            "not-finance-projects"
          ],
          "text": "The commitment covers project financing, a loan for one named project. A company drilling in the Arctic can still take a general loan and spend it there."
        },
        {
          "title": "The bank judges the harm",
          "phrase_refs": [
            "negative-impacts"
          ],
          "text": "The restriction applies only where the bank judges the project has negative environmental impacts. The document does not say what counts."
        },
        {
          "title": "Just outside the line",
          "phrase_refs": [
            "critical-areas",
            "case-by-case"
          ],
          "text": "A field next to a protected area, or a pipeline carrying oil out of one, is not in a critical area. Near some World Heritage sites, the bank decides case by case."
        }
      ],
      "in_practice": "The document lists five kinds of place. Among them are natural World Heritage sites, wetlands protected under the Ramsar Convention, the Arctic and the Amazon Sacred Headwaters.\n\nProject financing is a loan raised for one named project, such as one oil field. General corporate financing is a loan to the company as a whole, which it can spend on anything. Take a company drilling for oil in the Arctic. If it asks Intesa Sanpaolo for a loan for that field, the commitment applies. If it asks for a general loan, it does not. The company can then spend that loan on the Arctic field.\n\nNow take a project loan inside a listed wetland. Even then, the bank must first judge that the project has negative environmental impacts. The document does not say how it judges this. A project it finds harmless can go ahead.\n\nThe boundaries leave room too. A field just outside a listed area is not in it. Nor is the pipeline that carries oil out. Some World Heritage sites have no buffer zone, the protected strip around a site. There, a project less than 1 km away is decided case by case.\n\nFinancing the bank classifies as environmentally sustainable is also always permitted, even inside a listed area.\n\nSo what is left is a project loan, inside a listed area, for a project the bank itself finds harmful."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Intesa Sanpaolo commits not to finance oil and gas projects with negative environmental impacts in five kinds of protected area. We have not yet reviewed what it financed against this commitment.",
    "headline_figure": {
      "display": null,
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-09-29",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 261, document 8195",
    "reading": "drafted"
  }
};
