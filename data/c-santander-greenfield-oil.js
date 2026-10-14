/* Commitment data — generated from commitments/commitment-santander-greenfield-oil.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "santander-greenfield-oil",
    "bank": "Santander",
    "commitment_number": 6,
    "category": "oil_gas_expansion",
    "effective_date": "2023-02-23",
    "title": "Santander's Commitment on Greenfield Oil Projects",
    "short_title": "Commitment on Greenfield Oil Projects",
    "article_published": null,
    "intro": "Santander added this restriction in February 2023, in revision 2SA678-4 of its Environmental and Social Risk Management Policy. It commits the bank not to finance the development of new oil fields.",
    "naive_reading": "it will not put financing into opening up new oil fields",
    "plain_language_note": "The rule is a short list item, and the date that gives it meaning is in a footnote beneath it. The plain versions keep both word for word where it matters.",
    "sources_intro": "This commitment comes from a single policy document, but it takes two of its passages to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "esg",
        "document_title": "Santander Environmental and Social Risk Management Policy",
        "document_url": "https://www.santander.com/content/dam/santander-com/en/contenido-paginas/nuestro-compromiso/pol%C3%ADticas/do-environmental-social-and-climate-change-risk-policy-en.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=6",
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
        "intro": "This is an item in the oil and gas list of restrictions, under the lead-in that covers them all.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Santander Group will not directly invest in and/or provide financial products and/or services to the following activities in any client segment: … Project-related financing to Oil upstream greenfield projects.",
        "plain_rendering": "Santander will not directly invest in or provide, in any client segment: Project-related financing to Oil upstream greenfield projects.",
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
            "means": "The word “directly” limits this commitment to financing Santander gives the activity itself. The policy does not define the word or say what counts as indirect.",
            "lets_through": [
              "This wording lets through financing that reaches the activity through someone else. A general loan to the parent company, for example, can then pay for it."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "project-related",
            "label": "Project-related",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              147,
              162
            ],
            "plain_range": [
              73,
              88
            ],
            "means": "This explains what financing this commitment covers: financing for a project.",
            "lets_through": [
              "This wording lets through general corporate financing, bonds, and other company-level financing to the producers that develop new oil fields. That financing is not project-related."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "oil-upstream-greenfield",
            "label": "Oil upstream greenfield",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              176,
              199
            ],
            "plain_range": [
              102,
              125
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
        "source_id": "esg",
        "title": "The definition of “Greenfield”",
        "intro": "Santander's policy defines the term in a footnote.",
        "location": {
          "distance": "nearby",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Defining Greenfield as those fields whose approval for development is after May 2021.",
        "plain_rendering": "Greenfield means fields whose approval for development is after May 2021.",
        "phrases": [
          {
            "id": "after-may-2021",
            "label": "after May 2021",
            "type": "narrowing_qualifier",
            "source": "watchtower_exception",
            "watchtower_ref": "approval for development is after May 2021",
            "not_in_synthesis": false,
            "verbatim_range": [
              70,
              84
            ],
            "plain_range": [
              58,
              72
            ],
            "means": "This definition of “Greenfield” is narrower than the usual meaning, a site that has not been built on before. Santander turns it into a date test, so only fields approved for development after May 2021 count. A field approved in early 2021 and being developed now falls outside the restriction, however new the drilling is.",
            "lets_through": [
              "The date lets through every field approved for development in or before May 2021. That holds for the field's whole life, including the drilling and expansion still ahead of it.",
              "This wording lets through new gas fields, which the sentence does not name.",
              "It also lets through expansion of fields already approved — new wells, new phases — which are not greenfield."
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
      "greenfield",
      "upstream",
      "project-finance",
      "corporate-finance"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 149,
      "document_id": 25536,
      "institution": "santander",
      "commitment_index": 6,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=6",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-03",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        7548,
        7617
      ],
      "summary_text": "Santander restricts project-related financing for upstream oil greenfield projects approved for development after May 2021.",
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
          "condition": "Greenfield is defined as fields whose approval for development is after May 2021.",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": false,
          "standing": false,
          "where": null
        },
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
      "title": "The clauses that apply to every Santander commitment",
      "selected_for_publication": true
    },
    "disagreements": [
      {
        "field": "loopholes.exceptions",
        "severity": "classification",
        "watchtower": "The greenfield definition is recorded as an exception.",
        "bank_green": "It is a definition: it says which fields the restriction covers. As an exception it adds a commitment-specific carve-out point; as scope it would not — 1 point instead of 2, still hollowed.",
        "action": "Move the definition to the trigger or scope fields."
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
      "strength": "hollowed",
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
      "strength_reason": "It covers one kind of financing for oil fields approved after May 2021. Company-level borrowing, new gas fields, and every older field are all outside it.",
      "actual_reading": "it will not give financing tied to a project for developing oil fields whose approval for development came after May 2021",
      "gaps": [
        {
          "title": "Loans to the company, not the field",
          "phrase_refs": [
            "project-related",
            "directly"
          ],
          "text": "The commitment covers “project-related” financing only. A producer can get general corporate financing or bonds and spend them on a new field."
        },
        {
          "title": "Fields approved by May 2021",
          "phrase_refs": [
            "after-may-2021"
          ],
          "text": "Santander defines “Greenfield” by a date. A field approved for development in or before May 2021 is outside the commitment for its whole life, including the drilling still ahead of it."
        },
        {
          "title": "Gas is not named",
          "phrase_refs": [
            "after-may-2021"
          ],
          "text": "The sentence names only oil, so a company opening a new gas field is not covered."
        }
      ],
      "in_practice": "Upstream means finding oil and getting it out of the ground. Greenfield usually means a site where nothing has been built before. Santander defines “Greenfield” differently: a field whose approval for development came after May 2021.\n\nTake an oil field approved in 2020 and still being drilled today. It is not “Greenfield” in Santander's sense, so every new well and every new phase is outside this commitment for the life of the field.\n\nNow take a field approved in 2023. If its developer asks Santander for project financing, meaning a loan for that field repaid from what the field earns, Santander says no. But the developer can also ask for general corporate financing, a loan to the whole company that does not say what it pays for. This commitment does not apply to it, so the producer can spend it on the new field.\n\nThe same goes for a parent company. A general loan to the parent, which then pays for the field through a subsidiary, is not financing Santander gives “directly.”\n\nThe sentence also names only oil, so a company opening a new gas field is not covered.\n\nSo this commitment stops a loan with a new oil field's name on it, for a field approved after May 2021. The rest of what Santander does for oil producers can carry on."
    }
  },
  "evidence": {
    "status": "financing_found",
    "teaser": "That is how much Santander put into companies opening new oil fields off Brazil, despite a commitment that seems to rule out exactly this. And that is only what we have found so far.",
    "headline_figure": {
      "display": "$693.8M",
      "combines": "4 2025 financings to Brazilian offshore oil producers",
      "complete": false
    },
    "deals": [
      {
        "id": "santander-petrobras-global-finance-2025",
        "company": "Petrobras Global Finance BV",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 326000000.0,
        "amount_display": "$326M",
        "instruments": [],
        "contradiction": "The financing arm of Brazil's state oil company, which is opening new deepwater fields in the pre-salt. This commitment only covers financing raised for a named project, and a bond issued by a treasury company is not that.",
        "phrase_refs": [
          "project-related"
        ],
        "source_url": null,
        "instrument_required": true
      },
      {
        "id": "santander-prio-2025",
        "company": "Prio SA",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 160450777.10000002,
        "amount_display": "$160.5M",
        "instruments": [],
        "contradiction": "A Brazilian producer that buys mature offshore fields and drills new wells into them. Company-level financing sits outside a restriction written for project financing.",
        "phrase_refs": [
          "project-related"
        ],
        "source_url": null,
        "instrument_required": true
      },
      {
        "id": "santander-petroleo-brasileiro-2025",
        "company": "Petroleo Brasileiro SA – Petrobras",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 105828884.74080001,
        "amount_display": "$105.8M",
        "instruments": [],
        "instrument_required": true,
        "contradiction": "Brazil's state oil company, developing new deepwater fields in the pre-salt basins off the coast. This commitment only covers financing raised for a named project, and financing raised by the company as a whole is not that.",
        "phrase_refs": [
          "project-related"
        ],
        "source_url": null
      },
      {
        "id": "santander-prio-luxembourg-2025",
        "company": "PRIO Luxembourg Sarl",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 101500000.0,
        "amount_display": "$101.5M",
        "instruments": [],
        "contradiction": "The European financing vehicle of that Brazilian producer. It borrows for the group rather than for a named field, and this commitment covers only financing for a project.",
        "phrase_refs": [
          "project-related"
        ],
        "source_url": null,
        "instrument_required": true
      }
    ],
    "what_it_funded": "companies opening new oil fields off Brazil"
  },
  "provenance": {
    "built": "2026-10-02",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 149, document 25536",
    "reading": "drafted"
  }
};
