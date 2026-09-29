/* Commitment data — generated from commitments/commitment-santander-protected-areas-oil-gas.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "santander-protected-areas-oil-gas",
    "bank": "Santander",
    "commitment_number": 1,
    "category": "other",
    "effective_date": null,
    "title": "Santander's Commitment on Oil & Gas in Protected Areas",
    "short_title": "Commitment on Oil & Gas in Protected Areas",
    "article_published": null,
    "intro": "Santander sets out this restriction in its Environmental and Social Risk Management Policy; the version on file is the revision approved in June 2025. It commits the bank not to invest in, or provide financial products and services to, oil and gas extraction that threatens wetlands of international importance, World Heritage Sites or protected nature areas.",
    "naive_reading": "it will not finance oil and gas projects in protected nature areas",
    "plain_language_note": "The rule's lead-in and its list item are printed apart, with footnotes between them. The plain version joins them into one sentence.",
    "sources_intro": "One policy document states this commitment, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "esg",
        "document_title": "Santander Environmental and Social Risk Management Policy",
        "document_url": "https://www.santander.com/content/dam/santander-com/en/contenido-paginas/nuestro-compromiso/pol%C3%ADticas/do-environmental-social-and-climate-change-risk-policy-en.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=1",
        "watchtower_document_id": 25536,
        "watchtower_institution": "santander",
        "synthesis_run": 149,
        "version_label": "June 2025",
        "published": "2025-07-28",
        "published_source": null,
        "published_confidence": null,
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "verbatim_check": {
          "document": "25536-santander-unconventional-oil-gas.md",
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
        "source_id": "esg",
        "title": "The promise",
        "intro": "This is the item on protected areas, under the lead-in that covers the whole list. It applies to oil and gas, power, mining and other large projects.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Santander Group will not directly invest in and/or provide financial products and/or services to the following activities in any client segment: … Any projects or activities for oil & gas extraction, power generation or transmission, mining, manufacturing, plantations or other major infrastructure projects which put areas classified as … Ramsar Sites, World Heritage Sites or by the International Union for Conservation of Nature (IUCN) as categories I, II, III or IV at risk.",
        "plain_rendering": "Santander will not directly invest in, or provide financial products or services to, any projects or activities for oil & gas extraction, power, mining, manufacturing, plantations or other major infrastructure which put Ramsar Sites, World Heritage Sites or IUCN categories I, II, III or IV at risk.",
        "phrases": [
          {
            "id": "directly",
            "label": "directly",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              25,
              33
            ],
            "plain_range": [
              19,
              27
            ],
            "means": "The word “directly” limits this commitment to financing Santander gives the activity itself. The policy does not define it, and does not say what counts as indirect.",
            "lets_through": [
              "This wording lets through financing that reaches the activity through someone else — for example a general loan to the parent company, which then pays for it."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "iucn-i-iv",
            "label": "categories I, II, III or IV",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              442,
              469
            ],
            "plain_range": [
              263,
              290
            ],
            "means": "This explains which areas count. Beside Ramsar and World Heritage Sites, only IUCN protected areas in categories I to IV are named.",
            "lets_through": [
              "This wording lets through projects in IUCN categories V and VI — protected landscapes and areas managed for sustainable use — and in protected areas that carry no IUCN category at all."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "at-risk",
            "label": "at risk",
            "type": "undefined_term",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              470,
              477
            ],
            "plain_range": [
              291,
              298
            ],
            "means": "The words “at risk” set when a project is caught. The policy does not define them, and does not say who decides.",
            "lets_through": [
              "This wording lets through any project Santander's own assessment finds does not put the area at risk, including one beside it or upstream of it. The policy gives no distance, buffer or method."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "iucn-categories",
      "ramsar",
      "world-heritage",
      "project-finance"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 149,
      "document_id": 25536,
      "institution": "santander",
      "commitment_index": 1,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=1",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-03",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        5342,
        6794
      ],
      "summary_text": "Santander restricts project-related financing for oil and gas extraction projects that put Ramsar, World Heritage, or IUCN Category I-IV sites at risk, subject to high-level governance exceptions.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
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
          "condition": "Exceptions may be approved by corporate governance bodies (Risk Proposal Forum, Executive Risk Committee, or Executive Committee) if they are aligned with environmental and social risk principles and undergo enhanced due diligence.",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": true,
          "standing": true,
          "where": null
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 0 fields corrected]\nCHANGES:\nNone. The junior analyst's extraction is highly accurate and fully compliant with the schema and splitting rules.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "Exceptions may be approved by corporate governance bodies (Risk Proposal Forum, Executive Risk Committee, or Executive Committee) if they are aligned with environmental and social risk principles and undergo enhanced due diligence.",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "recorded_by_watchtower": true,
        "where": null
      },
      {
        "condition": "APPLICABLE LAW CAN REPLACE A RESTRICTION WITH DUE DILIGENCE · FOOTNOTE 7 — “To the extent required by applicable law, customers and transactions involving activities enumerated in this section will be subject to an enhanced due diligence process to determine the unique risks presented prior to decisioning.” The change log ties this to Florida's HB3 Act. Where a law requires it, a client or transaction in a restricted activity is reviewed before a decision instead of being refused outright.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "FOOTNOTE 7"
      },
      {
        "condition": "SOME BUSINESSES MAY SKIP THE INDIVIDUAL REVIEW · FOOTNOTE 6 — Businesses of the Group managed mostly using investable universes or automatic methods “may have operational limitations to carry out an individualized review”; periodic reviews of internal or supplier data are used instead.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "FOOTNOTE 6"
      },
      {
        "condition": "CONGLOMERATES ARE TESTED SUBSIDIARY BY SUBSIDIARY · FOOTNOTE 1 — A client is the last parent company, not including funds; but for multi-industry conglomerates “the Policy will apply at subsidiary level”, and Santander “might still provide products and services to the parent company (if they are unrelated to the restricted entity) and/or to other subsidiaries within the conglomerate.”",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": "commitments 5, 9, 10, 13 and 14 only",
        "where": "FOOTNOTE 1"
      }
    ],
    "general_clauses_page": {
      "url": "general-clauses-santander.html",
      "title": "The clauses that apply to every Santander commitment"
    },
    "disagreements": [
      {
        "field": "scope.product.financing_type",
        "severity": "classification",
        "watchtower": "Recorded as project financing.",
        "bank_green": "The item covers “projects or activities”, under a lead-in that restricts investment and all financial products and services. Recorded as general corporate financing, the project-finance input would fall away: 0 points, holds.",
        "action": "Record financing_type as corporate, or as both."
      },
      {
        "field": "loopholes.exceptions",
        "severity": "omission",
        "watchtower": "The record does not carry footnote 7's applicable-law provision or footnote 6's operational limitation on any commitment.",
        "bank_green": "Footnote 7 subjects restricted clients and transactions to enhanced due diligence before a decision wherever applicable law requires it; the change log names Florida's HB3 Act. Footnote 6 lets businesses run on investable universes or automatic methods rely on periodic data reviews instead of individual review. Both reach every restriction in section 2.1.",
        "action": "Record both as standing exceptions on every commitment in section 2.1."
      },
      {
        "field": "loopholes.exceptions",
        "severity": "inconsistency",
        "watchtower": "The conglomerate rule is recorded as an exception on commitments 5, 9, 10, 13 and 14 only.",
        "bank_green": "It is footnote 1 to the policy's definition of a client, in section 1.2, so it applies to every commitment in the document.",
        "action": "Record it as a standing exception on every commitment."
      },
      {
        "field": "document",
        "severity": "unreliable",
        "watchtower": "Watchtower now titles this document Policy 2025 (Group). Until September 2026 it titled it Environmental and Social Risk Management Policy 2021.",
        "bank_green": "The year is now right. The PDF Watchtower stores is the June 2025 revision, approved 25 June 2025 (2LO678-7). But the new title drops the policy's name, which leaves the document unidentifiable.",
        "action": "Keep the policy's own name with the corrected year: Environmental and Social Risk Management Policy 2025."
      }
    ],
    "assessment": {
      "strength": "crushed",
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
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Two of the six kinds of protected area are left out, and Santander's own judgement decides the rest.",
      "actual_reading": "it will not directly finance oil and gas projects that it judges put a protected wetland, a World Heritage Site or a strictly protected nature area at risk",
      "gaps": [
        {
          "title": "Protected areas left off the list",
          "phrase_refs": [
            "iucn-i-iv"
          ],
          "text": "Only nature areas in IUCN categories I to IV count. Protected landscapes, areas managed for sustainable use, and protected areas with no IUCN category are not covered."
        },
        {
          "title": "Santander decides what is “at risk”",
          "phrase_refs": [
            "at-risk"
          ],
          "text": "A project is caught only if it puts the area “at risk”. The policy does not say how that is judged, at what distance, or by whom."
        },
        {
          "title": "Financing that reaches the project through someone else",
          "phrase_refs": [
            "directly"
          ],
          "text": "The rule covers direct financing only. A general loan to the parent company, which then pays for the project, is not covered."
        }
      ],
      "in_practice": "The IUCN is the international body that sorts protected areas into six categories. Categories I to IV give the most protection: wilderness, national parks and nature reserves. Categories V and VI are protected landscapes and areas where people use the land and its resources. Many large protected areas fall in those last two. A project there is outside this rule, and so is one in a national reserve that has no IUCN category at all.\n\nNow take a drilling site or pipeline beside a national park. Whether it puts the park at risk is Santander's call. The policy gives no distance, no buffer zone and no method. A site just outside the boundary can be judged as no risk, and financed.\n\nAnd a company drilling inside a protected area can still borrow for general purposes from Santander. The rule covers what Santander finances directly. A loan to the parent company that ends up paying for the drilling is not direct.\n\nSo what is left is the clear case. A project inside a strictly protected area, financed directly, that Santander itself finds puts the area at risk."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Santander commits not to finance oil and gas extraction that puts protected areas at risk. We have not yet reviewed what it financed against this commitment.",
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
    "source": "Watchtower synthesis run 149, document 25536",
    "reading": "drafted"
  }
};
