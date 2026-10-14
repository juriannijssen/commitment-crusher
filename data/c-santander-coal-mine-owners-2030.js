/* Commitment data — generated from commitments/commitment-santander-coal-mine-owners-2030.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "santander-coal-mine-owners-2030",
    "bank": "Santander",
    "commitment_number": 13,
    "category": "coal",
    "effective_date": null,
    "title": "Santander's 2030 Phase-out of Coal Mine Owners",
    "short_title": "2030 Phase-out of Coal Mine Owners",
    "subject": "Coal Mine Owners",
    "article_published": null,
    "intro": "Santander sets out this phase-out in the mining section of its Environmental and Social Risk Management Policy. It belongs to the 2030 coal strategy, which was added in revision 2SA678-2 in February 2021. It commits the bank to stop financing companies that own thermal coal mines.",
    "naive_reading": "it is ending its financing of companies that own coal mines",
    "plain_language_note": "The item is a sentence fragment completed by the lead-in, followed by a second sentence that opens an exception. The plain version joins them and keeps both carve-outs word for word.",
    "sources_intro": "This commitment comes from a single policy document, but it takes two of its passages to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "esg",
        "document_title": "Santander Environmental and Social Risk Management Policy",
        "document_url": "https://www.santander.com/content/dam/santander-com/en/contenido-paginas/nuestro-compromiso/pol%C3%ADticas/do-environmental-social-and-climate-change-risk-policy-en.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=13",
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
        "intro": "This is an item in the mining list of restrictions, under the lead-in that covers them all, with the sentence that follows it.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Santander Group will not directly invest in and/or provide financial products and/or services to the following activities in any client segment: … By 2030 legal entities that own thermal coal mines worldwide, except for sustainable finance and products to finance the transition. Financing at parent level is still possible if the funds are not used to finance thermal coal assets and/or to any subsidiary that directly engages with thermal coal activities.",
        "plain_rendering": "By 2030, Santander will not directly invest in or provide financial products or services to legal entities that own thermal coal mines anywhere, except for sustainable finance and products to finance the transition. Financing at parent level is still possible if the funds are not used for thermal coal assets or for any subsidiary that directly engages with thermal coal activities.",
        "phrases": [
          {
            "id": "by-2030",
            "label": "By 2030",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              147,
              154
            ],
            "plain_range": [
              0,
              7
            ],
            "means": "This explains when this commitment takes effect: in 2030. Until then, owning a thermal coal mine is no bar, except for groups that are new to Santander.",
            "lets_through": [
              "This wording lets through existing clients that own thermal coal mines until 2030."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "legal-entities",
            "label": "legal entities that own thermal coal mines",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              155,
              197
            ],
            "plain_range": [
              92,
              134
            ],
            "means": "The words “legal entities that own thermal coal mines” aim the phase-out at the entity that holds the mine, not the group it belongs to. There is no revenue threshold: owning a thermal coal mine is enough.",
            "lets_through": [
              "This wording lets through the rest of the group. A parent or sister company that does not own the mine itself is outside the test. The sentence that follows confirms that the parent can still be financed."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "transition-finance",
            "label": "except for sustainable finance and products to finance the transition",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "finance and products to finance the transition",
            "not_in_synthesis": false,
            "verbatim_range": [
              209,
              278
            ],
            "plain_range": [
              145,
              214
            ],
            "means": "This explains the first carve-out: sustainable finance and products that finance the transition stay available to mine owners. The policy does not define either term or say who decides what qualifies.",
            "lets_through": [
              "This wording lets through any financing Santander classifies as sustainable or transition finance, for any mine owner."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "parent-level",
            "label": "Financing at parent level is still possible",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "Financing at the parent company level is permitted",
            "not_in_synthesis": false,
            "verbatim_range": [
              280,
              323
            ],
            "plain_range": [
              216,
              259
            ],
            "means": "This explains the second carve-out. The parent of a mine-owning entity can be financed if the financing does not go to thermal coal assets or a thermal coal subsidiary.",
            "lets_through": [
              "This wording lets through financing to the parent of a coal miner, based on where the financing is said to go. Financing can move within a group, and the policy does not say how its use is checked."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
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
            "means": "This explains that for a conglomerate the phase-out applies to the mine-owning subsidiary, not the group.",
            "lets_through": [
              "This wording lets through the parent and other subsidiaries of a conglomerate that owns coal mines, if the financing is “unrelated to the restricted entity.”"
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
      "phase-out",
      "parent-company",
      "subsidiary"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 149,
      "document_id": 25536,
      "institution": "santander",
      "commitment_index": 13,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/santander/document/25536/synthesis?run=149&commitment=13",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-03",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        12007,
        12317
      ],
      "summary_text": "By 2030, Santander will phase out corporate financing for legal entities that own thermal coal mines worldwide, except for sustainable or transition finance, allowing parent-level financing if funds are ringfenced.",
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
          "level": "counterparty",
          "relationship_status": "new_and_existing",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new_and_existing"
        }
      },
      "triggers": [],
      "commitment_type": "phase_out",
      "effective_date": "2030",
      "exceptions": [
        {
          "condition": "Sustainable finance and products to finance the transition are permitted.",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": false,
          "standing": false,
          "where": null
        },
        {
          "condition": "Financing at the parent company level is permitted if funds are ringfenced from thermal coal assets and subsidiaries directly engaged in thermal coal activities.",
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
      "strength": "hollowed",
      "strength_derivation": {
        "rule": "spec v3.29 §4.1 — the gap between the naive reading and what it catches",
        "inputs_source": "Watchtower record",
        "record_score": "hollowed",
        "weakness": false,
        "commitment_specific_carve_outs": 3,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 1
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "From 2030 it closes the door to the one company that holds a coal mine. Its parent can still be financed, and transition finance stays open to the mine owner itself.",
      "actual_reading": "it is ending, from 2030, most financing to the company that holds a thermal coal mine, while the parent and sister companies in its group can still borrow",
      "gaps": [
        {
          "title": "The parent company can still borrow",
          "phrase_refs": [
            "parent-level",
            "legal-entities",
            "subsidiary-level"
          ],
          "text": "The phase-out applies to the company that holds the mine, not its group. The parent can be financed if the financing is said not to go to coal, and the policy does not say how that is checked."
        },
        {
          "title": "Sustainable and transition finance stay open",
          "phrase_refs": [
            "transition-finance"
          ],
          "text": "Financing that Santander calls sustainable finance or transition finance stays open to mine owners. The policy does not define either term or say who decides."
        },
        {
          "title": "Nothing changes until 2030",
          "phrase_refs": [
            "by-2030"
          ],
          "text": "Existing clients that own thermal coal mines keep their financing until 2030. The commitment sets no steps before then."
        }
      ],
      "in_practice": "Thermal coal is the coal burned in power stations. Take a mining group that Santander already banks, whose subsidiary holds a thermal coal mine. Until 2030, this commitment changes nothing for it.\n\nFrom 2030, the subsidiary that holds the mine is caught, however little of its revenue the mine brings in, because owning one is enough. Santander then stops giving that company financial products and services.\n\nBut the parent is not caught. The policy says the parent can still be financed if the financing is not used for thermal coal assets or a coal subsidiary. But inside a group, financing can move from one company to another, and the policy does not say how Santander checks where it goes.\n\nFor a group with businesses in several industries, each subsidiary is tested on its own. The sister companies can keep borrowing if the financing is “unrelated to the restricted entity.”\n\nThere is also an exception: the company that holds the mine can still get financing that Santander calls sustainable or transition finance. Neither term is defined.\n\nSo from 2030, the commitment stops ordinary financing to one company in the group: the one whose name is on the mine. In a large group, the borrowing is often done by the parent, and the parent stays open.",
      "gets_right": "There is no revenue threshold. From 2030, owning a thermal coal mine is enough to be caught, however small a part of the business the mine is."
    }
  },
  "evidence": {
    "status": "financing_found",
    "teaser": "That is how much Santander put into the finance arms of coal mining groups, despite a commitment that seems to rule out exactly this. And that is only what we have found so far.",
    "headline_figure": {
      "display": "$405.5M",
      "combines": "3 2025 financings to the treasury companies of mining groups that produce coal",
      "complete": false
    },
    "deals": [
      {
        "id": "santander-glencore-funding-2025",
        "company": "Glencore Funding LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 298917500.0,
        "amount_display": "$298.9M",
        "instruments": [],
        "contradiction": "The US financing arm of the world's largest exporter of thermal coal. This commitment covers the legal entities that own the mines. A treasury company owns none, and the policy's next sentence allows the parent to be financed anyway.",
        "phrase_refs": [
          "legal-entities"
        ],
        "source_url": null
      },
      {
        "id": "santander-bhp-billiton-finance-usa-2025",
        "company": "BHP Billiton Finance (USA) Ltd",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 72864000.0,
        "amount_display": "$72.9M",
        "instruments": [],
        "contradiction": "The US financing arm of a mining group that still produces coal. It owns no mine itself, so the entity test has nothing to catch.",
        "phrase_refs": [
          "legal-entities"
        ],
        "source_url": null
      },
      {
        "id": "santander-bhp-group-uk-2025",
        "company": "BHP Group (UK) Ltd",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 33717391.3043478,
        "amount_display": "$33.7M",
        "instruments": [],
        "contradiction": "Another financing entity of the same group. The restriction names the companies that own thermal coal mines, and this is not one of them.",
        "phrase_refs": [
          "legal-entities"
        ],
        "source_url": null
      }
    ],
    "what_it_funded": "the finance arms of coal mining groups"
  },
  "provenance": {
    "built": "2026-10-02",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 149, document 25536",
    "reading": "drafted"
  }
};
