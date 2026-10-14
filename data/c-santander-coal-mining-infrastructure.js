/* Commitment data — generated from commitments/commitment-santander-coal-mining-infrastructure.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "santander-coal-mining-infrastructure",
    "bank": "Santander",
    "commitment_number": 16,
    "category": "coal",
    "effective_date": null,
    "title": "Santander's Commitment on Coal Mining Infrastructure",
    "short_title": "Commitment on Coal Mining Infrastructure",
    "article_published": null,
    "intro": "Santander sets out this restriction in the mining section of its Environmental and Social Risk Management Policy. We quote the revision approved in June 2025. It commits the bank not to finance infrastructure built to serve thermal coal mining.",
    "naive_reading": "it will not finance rail lines and ports built to serve coal mines",
    "plain_language_note": "The item is already plain, so the plain version only joins it to the lead-in.",
    "sources_intro": "This commitment comes from a single policy document, and we quote one passage from it below.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "esg",
        "document_title": "Santander Environmental and Social Risk Management Policy",
        "document_url": "https://www.santander.com/content/dam/santander-com/en/contenido-paginas/nuestro-compromiso/pol%C3%ADticas/do-environmental-social-and-climate-change-risk-policy-en.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=16",
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
        "source_id": "esg",
        "title": "The promise",
        "intro": "This is an item in the mining list of restrictions, under the lead-in that covers them all.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Santander Group will not directly invest in and/or provide financial products and/or services to the following activities in any client segment: … Project-related financing for the construction or development of infrastructure projects whose expected revenues from thermal coal mining-related activities will be more than 30% of the project’s revenues in the first five years.",
        "plain_rendering": "Santander will not directly invest in or provide, in any client segment: Project-related financing for building infrastructure projects whose expected revenues from thermal coal mining-related activities will be more than 30% of the project’s revenues in the first five years.",
        "phrases": [
          {
            "id": "project-related",
            "label": "Project-related financing",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              147,
              172
            ],
            "plain_range": [
              73,
              98
            ],
            "means": "This explains what financing this commitment covers: financing tied to an infrastructure project.",
            "lets_through": [
              "This wording lets through general corporate financing to the owners and builders of the infrastructure."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "expected-revenues",
            "label": "expected revenues",
            "type": "unverifiable_metric",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              242,
              259
            ],
            "plain_range": [
              142,
              159
            ],
            "means": "The words “expected revenues” make the test a forecast. The policy does not say whose forecast, on what assumptions, or whether it is checked once the project runs.",
            "lets_through": [
              "This wording lets through any project whose forecast puts coal mining below the line, whatever it earns once built."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "threshold",
            "label": "more than 30%",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              312,
              325
            ],
            "plain_range": [
              212,
              225
            ],
            "means": "This explains the threshold: coal mining-related revenue as a share of the project's revenue.",
            "lets_through": [
              "This wording lets through infrastructure that earns up to 30% of its revenue from coal mining. That includes a rail line or port that carries coal alongside other cargo."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "first-five-years",
            "label": "in the first five years",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              352,
              375
            ],
            "plain_range": [
              252,
              275
            ],
            "means": "This explains the period the forecast covers: the project's first five years.",
            "lets_through": [
              "This wording lets through infrastructure whose coal share rises after year five. A line or terminal built for mixed cargo and later dominated by coal passes the test at the start."
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
      "project-finance",
      "revenue-threshold"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 149,
      "document_id": 25536,
      "institution": "santander",
      "commitment_index": 16,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=16",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-03",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        13548,
        13777
      ],
      "summary_text": "Santander restricts project-related financing for the construction or development of infrastructure projects where expected revenues from thermal coal mining exceed 30% in the first five years.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": "midstream",
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
      "triggers": [
        {
          "metric": "revenue_share",
          "inequality": ">",
          "value": 30,
          "definition": "expected revenues from thermal coal mining-related activities of the project's revenues in the first five years",
          "measurement_timeframe": "first five years"
        }
      ],
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
        "commitment_specific_carve_outs": 0,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 1
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "A project passes if its own forecast keeps coal mining below 30% for five years. Nothing checks the forecast later, and the owner can borrow at company level anyway.",
      "actual_reading": "it will not give financing tied to a project for new infrastructure, such as a rail line or port, forecast to earn more than 30% of its revenue from coal mining in its first five years",
      "gaps": [
        {
          "title": "A forecast, made once",
          "phrase_refs": [
            "expected-revenues",
            "first-five-years"
          ],
          "text": "The test is a forecast made before the project is built, and the policy does not say whose forecast it is. If coal's share rises after year five, the project has already passed."
        },
        {
          "title": "Lines and ports that carry other cargo too",
          "phrase_refs": [
            "threshold"
          ],
          "text": "A project that earns up to 30% of its revenue from coal mining passes. A rail line or port that carries coal alongside other cargo is outside the commitment."
        },
        {
          "title": "Loans to the owner, not the project",
          "phrase_refs": [
            "project-related"
          ],
          "text": "Only financing tied to the project counts, so the owners and builders of the infrastructure can still get general corporate financing."
        }
      ],
      "in_practice": "Coal mines need infrastructure to move their coal: rail lines, ports, and conveyors. This commitment covers projects to build them, if coal mining is expected to bring in more than 30% of their revenue.\n\nTake a new rail line from a coal region to the coast. Its developer forecasts that coal will be 25% of its revenue for the first five years. Grain and containers make up the rest. The project passes the test, so Santander can give it project financing: a loan for the line, repaid from what the line earns.\n\nNow suppose that in year six, coal grows to 70% of the line's revenue. The test was taken at the start, and nothing in the policy takes it again, so the line stays outside this commitment.\n\nThe forecast itself is open too. The policy does not say who makes it, on what assumptions, or whether anyone checks it once the line runs.\n\nFinally, take the company that owns the port or the rail line. It can ask Santander for general corporate financing, a loan to the whole company that does not say what it pays for. This commitment does not cover that loan.\n\nWhat it does stop is a project loan for infrastructure whose own forecast says coal mining will bring in more than 30% of its revenue."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Santander commits not to finance infrastructure projects that would depend on coal mining for more than 30% of their revenue. We have not reviewed its financing against this commitment yet.",
    "headline_figure": {
      "display": null,
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-10-02",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 149, document 25536",
    "reading": "drafted"
  }
};
