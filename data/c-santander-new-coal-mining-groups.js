/* Commitment data — generated from commitments/commitment-santander-new-coal-mining-groups.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "santander-new-coal-mining-groups",
    "bank": "Santander",
    "commitment_number": 14,
    "category": "coal",
    "effective_date": null,
    "title": "Santander's Commitment on New Coal Mining Groups",
    "short_title": "Commitment on New Coal Mining Groups",
    "article_published": null,
    "intro": "Santander sets out this restriction in the mining section of its Environmental and Social Risk Management Policy, beside its 2030 phase-out for coal mine owners. It commits the bank not to finance groups that own thermal coal mining operations anywhere in the world.",
    "naive_reading": "it will not take on new clients that own coal mines anywhere",
    "plain_language_note": "The exception is written into the rule and has its own condition, and a footnote qualifies it again. The plain version keeps all three layers.",
    "sources_intro": "One policy document states this commitment. Three passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "esg",
        "document_title": "Santander Environmental and Social Risk Management Policy",
        "document_url": "https://www.santander.com/content/dam/santander-com/en/contenido-paginas/nuestro-compromiso/pol%C3%ADticas/do-environmental-social-and-climate-change-risk-policy-en.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=14",
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
          "passages": 4,
          "found": 4,
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
        "intro": "This is an item in the mining list of restrictions, under the lead-in that covers them all. It has its own exception, with a condition on it.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Santander Group will not directly invest in and/or provide financial products and/or services to the following activities in any client segment: … New legal entities of Groups with which Santander has no relationship that own thermal coal mining operations and projects worldwide, except for non-recourse and/or ECA transactions if sustainable finance and/or products to finance the transition. In these exceptions, the group must not be organically developing additional thermal coal capacity.",
        "plain_rendering": "Santander will not directly invest in or provide financial products or services to New legal entities of Groups with which Santander has no relationship that own thermal coal mining operations and projects anywhere, except for non-recourse and/or ECA transactions if sustainable finance and/or products to finance the transition — and then only if the group is not organically developing additional thermal coal capacity.",
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
            "id": "no-relationship",
            "label": "with which Santander has no relationship",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              176,
              216
            ],
            "plain_range": [
              112,
              152
            ],
            "means": "This explains who the restriction applies to: groups Santander does not already serve. Groups Santander already serves are not covered by this commitment.",
            "lets_through": [
              "This wording lets through every group Santander already has a relationship with, however much thermal coal it mines, until 2030."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "non-recourse-eca",
            "label": "except for non-recourse and/or ECA transactions",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "Export Credit Agency (ECA) transactions are permitted",
            "not_in_synthesis": false,
            "verbatim_range": [
              281,
              328
            ],
            "plain_range": [
              216,
              263
            ],
            "means": "This explains the carve-out: a new coal-mining group can still be financed through a non-recourse or export-credit transaction that is sustainable finance or finances the transition, provided the group is not organically adding coal capacity.",
            "lets_through": [
              "This wording lets through non-recourse and export-credit transactions to new coal-mining groups whenever Santander judges them sustainable or transition finance. Neither term is defined."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "organically",
            "label": "organically",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              438,
              449
            ],
            "plain_range": [
              365,
              376
            ],
            "means": "The word “organically” limits the safeguard on the exception to capacity the group develops itself.",
            "lets_through": [
              "This wording lets through a group that adds thermal coal capacity by buying mines rather than developing them. Acquired capacity is not organic, so the exception stays open."
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
        "title": "The guarantee",
        "intro": "A footnote, attached to the word “non-recourse” in the rule, adds a further allowance.",
        "location": {
          "distance": "nearby",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Guarantee operations linked to non-recourse financing may be carried out where strictly necessary.",
        "plain_rendering": "Guarantees linked to non-recourse financing may be given where strictly necessary.",
        "phrases": [
          {
            "id": "strictly-necessary",
            "label": "where strictly necessary",
            "type": "undefined_term",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              73,
              97
            ],
            "plain_range": [
              57,
              81
            ],
            "means": "The words “where strictly necessary” set the condition for guarantees, and the policy does not say necessary for what, or who decides.",
            "lets_through": [
              "This wording lets through guarantees that support a non-recourse transaction to a new coal-mining group, whenever the bank considers them strictly necessary."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 3,
        "role": "scope",
        "source_id": "esg",
        "title": "Who it applies to",
        "intro": "In a footnote on scope, early in the policy, Santander says who counts as the client when a group works across several industries.",
        "location": {
          "distance": "later_in_document",
          "signposting": "none",
          "signposting_note": "The rule reads as complete. The footnote that changes who counts as the client is attached to the policy's scope section at the start of the document, and nothing in the rule points back to it."
        },
        "verbatim": "In the case of multi-industry conglomerates with independent business entities across different industries, the Policy will apply at subsidiary level. Should a subsidiary be prohibited, Santander might still provide products and services to the parent company (if they are unrelated to the restricted entity) and/or to other subsidiaries within the conglomerate.",
        "plain_rendering": "For multi-industry conglomerates with independent businesses in different industries, the Policy will apply at subsidiary level. If a subsidiary is prohibited, Santander might still provide products and services to the parent company (if unrelated to the restricted entity) or to other subsidiaries.",
        "phrases": [
          {
            "id": "subsidiary-level",
            "label": "will apply at subsidiary level",
            "type": "narrowing_qualifier",
            "source": "watchtower_exception",
            "watchtower_ref": "the policy applies at the subsidiary level",
            "not_in_synthesis": false,
            "verbatim_range": [
              119,
              149
            ],
            "plain_range": [
              97,
              127
            ],
            "means": "This explains that for a conglomerate the restriction applies to the coal-mining subsidiary, not the group.",
            "lets_through": [
              "This wording lets through the parent and other subsidiaries of a conglomerate with coal-mining operations, if the financing is “unrelated to the restricted entity”."
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
      "group-level",
      "export-finance",
      "subsidiary"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 149,
      "document_id": 25536,
      "institution": "santander",
      "commitment_index": 14,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=14",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-03",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        12320,
        12674
      ],
      "summary_text": "Santander restricts corporate financial services for new legal entities of groups owning thermal coal mining operations worldwide, except for transition-aligned non-recourse or ECA transactions where the group is not developing additional capacity.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "group",
          "relationship_status": "new",
          "certainty": "4"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new_and_existing"
        }
      },
      "triggers": [],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Non-recourse and/or Export Credit Agency (ECA) transactions are permitted if they are sustainable finance and/or products to finance the transition, provided the group is not organically developing additional thermal coal capacity.",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": false,
          "standing": false,
          "where": null
        },
        {
          "condition": "For multi-industry conglomerates, the policy applies at the subsidiary level, allowing financing to the parent or other unrelated subsidiaries.",
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
      }
    ],
    "general_clauses_page": {
      "url": "general-clauses-santander.html",
      "title": "The clauses that apply to every Santander commitment"
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
        "commitment_specific_carve_outs": 2,
        "project_finance_only": false,
        "new_business_only": true,
        "total": 2
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "It applies only to coal-mining groups Santander does not already bank. Even for those, non-recourse and export-credit deals it calls transition finance stay open.",
      "actual_reading": "it will not take on a coal-mining group it has never banked, except through non-recourse or export-credit deals it calls sustainable or transition finance, and only the mining company, not its parent",
      "gaps": [
        {
          "title": "Groups it already banks",
          "phrase_refs": [
            "no-relationship"
          ],
          "text": "The commitment covers groups with which Santander has no relationship. Every coal-mining group it already serves is outside it, however much thermal coal it mines."
        },
        {
          "title": "Two kinds of deal stay open",
          "phrase_refs": [
            "non-recourse-eca",
            "strictly-necessary"
          ],
          "text": "A new group can still get non-recourse or export-credit financing, if Santander calls it sustainable or transition finance. Neither term is defined. Guarantees linked to these deals are allowed “where strictly necessary”."
        },
        {
          "title": "Buying mines is not “organic” growth",
          "phrase_refs": [
            "organically"
          ],
          "text": "The exception is closed to a group developing more coal capacity “organically”. A group that buys mines instead of building them keeps it open."
        }
      ],
      "in_practice": "This commitment is about taking on new clients. It applies only to coal-mining groups that Santander has no relationship with today.\n\nTake a mining group that Santander already banks, with thermal coal mines on several continents. This commitment does not apply to it at all. Santander can keep financing it.\n\nNow take a coal-mining group that is new to Santander. Most financing is closed to it. But two kinds of deal stay open. One is non-recourse financing: a loan repaid only from what one project earns, with no claim on the rest of the group. The other is export credit: financing backed by a government agency that supports its country's exports.\n\nEither is allowed if Santander counts it as sustainable finance or transition finance. The policy does not define either term. Guarantees linked to the non-recourse deals are also allowed “where strictly necessary”. The policy does not say necessary for what, or who decides.\n\nThe exception has one condition. The group must not be developing more thermal coal capacity “organically”. A group that grows by buying other companies' mines is not growing organically, so the exception stays open to it.\n\nFor a group with businesses in several industries, the test is applied to the coal-mining subsidiary. The parent and the other subsidiaries can still be financed, if the financing is “unrelated to the restricted entity”.\n\nWhat is left is ordinary financing to a coal-mining company from a group Santander has never banked."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Santander commits not to take on groups that own thermal coal mining operations. We have not yet reviewed what it financed against this commitment.",
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
