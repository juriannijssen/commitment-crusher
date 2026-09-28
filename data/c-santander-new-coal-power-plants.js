/* Commitment data — generated from commitments/commitment-santander-new-coal-power-plants.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "santander-new-coal-power-plants",
    "bank": "Santander",
    "commitment_number": 11,
    "category": "coal",
    "effective_date": null,
    "title": "Santander's Commitment on New Coal Power Plants",
    "short_title": "Commitment on New Coal Power Plants",
    "article_published": null,
    "intro": "Santander sets out this restriction in the power generation section of its Environmental and Social Risk Management Policy; the version on file is the revision approved in June 2025. It commits the bank not to finance new coal-fired power plants anywhere in the world, or the upgrade or expansion of existing ones.",
    "naive_reading": "it will not help build or expand coal-fired power plants anywhere",
    "plain_language_note": "The item is already plain. The plain version only joins it to the lead-in.",
    "sources_intro": "One policy document states this commitment, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "esg",
        "document_title": "Santander Environmental and Social Risk Management Policy",
        "document_url": "https://www.santander.com/content/dam/santander-com/en/contenido-paginas/nuestro-compromiso/pol%C3%ADticas/do-environmental-social-and-climate-change-risk-policy-en.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=11",
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
        "intro": "This is an item in the power list of restrictions, under the lead-in that covers them all.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Santander Group will not directly invest in and/or provide financial products and/or services to the following activities in any client segment: … Project-related financing for new coal-fired power plants projects worldwide, or for the upgrade and/or expansion of existing coal-fired plants.",
        "plain_rendering": "Santander will not directly invest in or provide, in any client segment: Project-related financing for new coal-fired power plants anywhere, or for the upgrade or expansion of existing ones.",
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
            "means": "This explains what financing this commitment covers: financing tied to a coal power project. The policy does not define “project-related”, and Watchtower records it as project financing.",
            "lets_through": [
              "This wording lets through general corporate financing, bonds and other company-level financing to the companies that build, upgrade or expand coal-fired plants. That financing is not project-related."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "coal-fired-power-generation",
      "project-finance",
      "corporate-finance"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 149,
      "document_id": 25536,
      "institution": "santander",
      "commitment_index": 11,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=11",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-03",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        11360,
        11504
      ],
      "summary_text": "Santander restricts project-related financing for new coal-fired power plants or the upgrade and expansion of existing ones worldwide.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": "downstream",
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
        "commitment_specific_carve_outs": 0,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "The scope of what is restricted is genuinely wide — new plants, upgrades and expansions, worldwide — and conceding it first makes the instrument limit land.",
          "text": "Credit first: the rule covers more than new plants. It also names upgrading and expanding existing coal plants, anywhere in the world. There is no size threshold, and no exception for particular plants or countries.\n\nThat closes the ways a coal fleet grows without a new plant. An upgrade can extend a plant's life. A new unit can be added at an existing site.\n\nThe limit is the kind of financing. The rule applies to “project-related financing”, which the policy does not define. A company building, upgrading or expanding a coal plant can still get loans and bonds for the whole company. It is only caught if its coal power revenue passes 25% as a new client, or 10% from 2030.\n\nThe list of what is restricted is complete. The reach is one kind of loan."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "The commitment reaches coal plants through one door: financing tied to the project.\n\nA company building a new coal plant, or upgrading or expanding one, can borrow from Santander as a whole company. It can then spend that on the plant. The rule names project-related financing and nothing else, and the policy does not define the term.\n\nThe policy's client rules on coal power only catch a company if its coal revenue passes 25% as a new client, or 10% from 2030. A large utility adding coal plants passes both.\n\nWhat remains is a project loan for a coal plant. Few large utilities need one, because they can borrow as a company."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "Who has to change anything because of this commitment?\n\nA developer that needs project financing from Santander for a coal plant is caught. So is one that needs it to upgrade or expand a plant. That applies anywhere in the world.\n\nA utility that pays for the same work from its own balance sheet is not caught. That holds as long as its coal power revenue stays under the policy's client thresholds.\n\nSo the commitment binds project developers and independent power producers, which rely on project loans. It releases the large utilities that can pay for coal plants as a company. The same plant can be built either way."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this commitment, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Cover the developer",
          "content": "Extend the rule to loans and bonds for the whole company, for companies building, upgrading or expanding coal plants."
        },
        {
          "title": "Define an upgrade",
          "content": "Say whether work that extends a plant's life counts as an upgrade. Then extending an old plant is covered."
        }
      ],
      "what_needs_to_change_closing": "Until then, the rule stops the loan for the plant, not the loan to the company building it.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Dedicated financing of new and expanded plants is blocked; company-level borrowing by the same builder is not."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "Santander commits not to finance new coal-fired power plants, or the upgrade or expansion of existing ones. We have not yet reviewed what it financed against this commitment.",
    "headline_figure": {
      "display": null,
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-09-25",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 149, document 25536",
    "reading": "drafted"
  }
};
