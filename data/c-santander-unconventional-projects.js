/* Commitment data — generated from commitments/commitment-santander-unconventional-projects.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "santander-unconventional-projects",
    "bank": "Santander",
    "commitment_number": 8,
    "category": "fracking",
    "effective_date": null,
    "title": "Santander's Commitment on Unconventional Oil & Gas Projects",
    "short_title": "Commitment on Unconventional Oil & Gas Projects",
    "article_published": null,
    "intro": "Santander sets out this restriction in the oil and gas section of its Environmental and Social Risk Management Policy. We quote the revision approved in June 2025. It commits the bank not to finance the development of oil and gas from tar sands, fracking, or coalbed methane.",
    "naive_reading": "it will not finance fracking, tar sands, or coalbed methane projects",
    "plain_language_note": "The rule is short, but the exception attached to it is a long footnote. The plain version of the footnote keeps every condition.",
    "sources_intro": "This commitment comes from a single policy document, but it takes two of its passages to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "esg",
        "document_title": "Santander Environmental and Social Risk Management Policy",
        "document_url": "https://www.santander.com/content/dam/santander-com/en/contenido-paginas/nuestro-compromiso/pol%C3%ADticas/do-environmental-social-and-climate-change-risk-policy-en.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=8",
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
        "verbatim": "Santander Group will not directly invest in and/or provide financial products and/or services to the following activities in any client segment: … Projects involved in the exploration, development, construction or expansion of oil & gas extraction from tar sands, fracking or coal bed methane.",
        "plain_rendering": "Santander will not directly invest in or provide financial products or services to Projects involved in the exploration, development, construction or expansion of oil & gas extraction from tar sands, fracking or coal bed methane.",
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
            "id": "projects-involved",
            "label": "Projects involved in",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              147,
              167
            ],
            "plain_range": [
              83,
              103
            ],
            "means": "The words “Projects involved in” limit this commitment to projects.",
            "lets_through": [
              "This wording lets through general corporate financing to producers whose unconventional share is below the client-level threshold. They can borrow at company level and spend the financing on the projects this commitment names."
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
        "source_id": "esg",
        "title": "The exception",
        "intro": "In a footnote, attached to the word “fracking” above, Santander says when the rule need not apply to fracking.",
        "location": {
          "distance": "nearby",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Due to the necessity to support the energy transition, energy security and affordability, and in situations where there can be exceptional social and economic implications, that could ultimately enable the transition and may play a crucial role in the economic and social local development (developing countries/emerging economies), exceptions in relation to fracking may be considered in jurisdictions where these activities are permissible under local regulation, subject to enhanced due diligence and appropriate approval.",
        "plain_rendering": "To support the energy transition, energy security and affordability, and where there can be exceptional social and economic implications that could enable the transition and local development (developing countries/emerging economies), exceptions for fracking may be considered where these activities are permissible under local regulation — subject to enhanced due diligence and appropriate approval.",
        "phrases": [
          {
            "id": "exceptional",
            "label": "exceptional social and economic implications",
            "type": "undefined_term",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              127,
              171
            ],
            "plain_range": [
              92,
              136
            ],
            "means": "The words “exceptional social and economic implications” set the occasion for the exception. Nothing in the policy says what counts as exceptional, or who judges it.",
            "lets_through": [
              "This wording lets through any fracking project the bank can describe as important to energy security, affordability, or local development. The brackets name developing countries and emerging economies as the setting, but the sentence does not say the exception is limited to them."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "may-be-considered",
            "label": "may be considered",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "Exceptions for fracking may be considered",
            "not_in_synthesis": false,
            "verbatim_range": [
              368,
              385
            ],
            "plain_range": [
              259,
              276
            ],
            "means": "This explains that the carve-out is a discretion, not a rule, and that it applies to fracking only. Tar sands and coalbed methane have no exception.",
            "lets_through": [
              "The words “may be considered” let through any fracking project the bank decides to finance. Nothing is published about how often the discretion is used, on what grounds, or by whom."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "permissible",
            "label": "permissible under local regulation",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "where permissible under local regulation",
            "not_in_synthesis": false,
            "verbatim_range": [
              430,
              464
            ],
            "plain_range": [
              304,
              338
            ],
            "means": "This explains the one hard condition attached to the carve-out: fracking has to be legal where the project is. The reasons listed before it are reasons, not tests.",
            "lets_through": [
              "This wording lets through fracking projects in the places where fracking happens at scale. Fracking only takes place where it is permitted, so this condition is met wherever the exception would be needed."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "shale",
      "oil-sands",
      "unconventional",
      "project-finance",
      "discretionary-carve-out"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 149,
      "document_id": 25536,
      "institution": "santander",
      "commitment_index": 8,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=8",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-03",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        7701,
        7851
      ],
      "summary_text": "Santander restricts project-related financing for the exploration, development, construction, or expansion of oil & gas extraction from tar sands, fracking, or coal bed methane, with exceptions for fracking.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "oil_sands",
            "shale",
            "coalbed methane"
          ],
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
          "condition": "Exceptions for fracking may be considered in jurisdictions where permissible under local regulation, subject to enhanced due diligence and appropriate approval.",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": true,
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
        "commitment_specific_carve_outs": 1,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 2
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "For fracking, Santander may make an exception wherever fracking is legal, which is wherever it happens. For all three, a producer can borrow at company level and spend the financing on the project.",
      "actual_reading": "it will not give financing tied to a project for tar sands or coalbed methane, or for fracking unless it decides an exception applies",
      "gaps": [
        {
          "title": "A fracking exception wherever fracking is legal",
          "phrase_refs": [
            "permissible",
            "may-be-considered",
            "exceptional"
          ],
          "text": "For fracking, Santander “may” consider exceptions where fracking is legal locally. Since fracking only happens where it is legal, the exception is available wherever it would be needed."
        },
        {
          "title": "Loans to the company, not the project",
          "phrase_refs": [
            "projects-involved",
            "directly"
          ],
          "text": "The commitment names projects, so a producer can get general corporate financing from Santander and spend it on the same wells or mines."
        }
      ],
      "in_practice": "Fracking, tar sands, and coalbed methane get oil and gas out of rock, sand, and coal seams that ordinary wells cannot reach. This commitment covers projects to explore, develop, build, or expand any of the three.\n\nTake a company planning a new tar sands mine. If it asks Santander for project financing, meaning a loan for that mine repaid from what the mine earns, Santander says no. There is no exception for tar sands or coalbed methane.\n\nNow take a company planning new fracking wells in a country where fracking is legal. Santander “may” consider an exception for reasons of energy security, affordability, or local development. The sentence mentions developing countries and emerging economies but does not limit the exception to them. The one firm condition is that fracking is legal there, which is true wherever fracking takes place. Nothing is published about how often the exception is used, or on what grounds.\n\nThen take a producer that fracks alongside ordinary wells. It can ask Santander for general corporate financing, a loan to the whole company that does not say what it pays for. Because the loan is not tied to a project, this commitment does not apply, and the producer can spend it on fracking.\n\nWhat it does stop is a project loan for tar sands or coalbed methane, or a fracking project loan where Santander decides against an exception."
    }
  },
  "evidence": {
    "status": "financing_found",
    "teaser": "That is how much Santander put into the contractors that frack American wells, despite a commitment that seems to rule out exactly this. And that is only what we have found so far.",
    "headline_figure": {
      "display": "$458.5M",
      "combines": "3 2025 financings to the contractors behind US fracking",
      "complete": false
    },
    "deals": [
      {
        "id": "santander-solaris-energy-infrastructure-2025",
        "company": "Solaris Energy Infrastructure Inc",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 316833333.33333296,
        "amount_display": "$316.8M",
        "instruments": [],
        "contradiction": "A supplier of sand handling and mobile power to fracking sites across the Permian basin. This commitment covers financing for the projects themselves, and financing a contractor at company level is not financing a project.",
        "phrase_refs": [
          "projects-involved"
        ],
        "source_url": null,
        "instrument_required": true
      },
      {
        "id": "santander-halliburton-2025",
        "company": "Halliburton Co",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 123529411.764706,
        "amount_display": "$123.5M",
        "instruments": [],
        "contradiction": "One of the largest oilfield services contractors, and a major provider of pressure pumping for fracking. A corporate facility is not project-related financing, which is what the wording restricts.",
        "phrase_refs": [
          "projects-involved"
        ],
        "source_url": null,
        "instrument_required": true
      },
      {
        "id": "santander-aris-water-solutions-2025",
        "company": "Aris Water Solutions Inc",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 18150000.0,
        "amount_display": "$18.1M",
        "instruments": [],
        "contradiction": "A handler of the water pumped into and out of Permian shale wells. Its whole business serves fracking, and none of this financing is tied to a named project.",
        "phrase_refs": [
          "projects-involved"
        ],
        "source_url": null,
        "instrument_required": true
      }
    ],
    "what_it_funded": "the contractors that frack American wells"
  },
  "provenance": {
    "built": "2026-10-02",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 149, document 25536",
    "reading": "drafted"
  }
};
