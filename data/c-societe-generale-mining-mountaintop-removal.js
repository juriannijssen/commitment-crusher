/* Commitment data — generated from commitments/commitment-societe-generale-mining-mountaintop-removal.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-mining-mountaintop-removal",
    "bank": "Société Générale",
    "commitment_number": 1,
    "category": "mining",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Restriction on Mountaintop Removal Mining",
    "short_title": "Restriction on Mountaintop Removal Mining",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Mining Sector Policy, published in April 2026. Mountaintop removal blows the summit off a mountain to reach the coal seams underneath and pushes the rubble into the valleys below. The bank will not provide new financial products or services to any company involved in it.",
    "naive_reading": "it will not finance companies that blast the tops off mountains to reach coal",
    "plain_language_note": "One sentence with no threshold in it, and two words at the front that decide how much of the bank's business it touches.",
    "sources_intro": "This exclusion comes from a single policy document, and we quote one passage from it below.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "mining2026",
        "document_title": "Société Générale Mining Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/mining-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28052/synthesis?run=196&commitment=1",
        "watchtower_document_id": 28052,
        "watchtower_institution": "societe_generale",
        "synthesis_run": 196,
        "version_label": "April 2026",
        "published": "2026-04-01",
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "published_source": null,
        "published_confidence": null,
        "verbatim_check": {
          "document": "28052-societe-generale-mining.md",
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
        "source_id": "mining2026",
        "title": "The promise",
        "intro": "This is where Société Générale sets out the rule.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide new financial products or services to… any corporate entity involved in Mountaintop removal coal mining in the Appalachians.",
        "plain_rendering": "Société Générale will not provide new financial products or services to any corporate entity involved in Mountaintop removal coal mining in the Appalachians.",
        "phrases": [
          {
            "id": "new",
            "label": "new financial products or services",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              27,
              61
            ],
            "plain_range": [
              34,
              68
            ],
            "means": "This explains what this commitment covers: business the bank has not written yet.",
            "lets_through": [
              "Adding the word “new” means everything already on the books stays. A company mining this way that is already a client stays a client, and existing facilities run to their terms.",
              "It also lets through existing exposure indefinitely. The policy sets no wind-down, no review date, and no end date."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "involved",
            "label": "involved in",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              87,
              98
            ],
            "plain_range": [
              93,
              104
            ],
            "means": "The words “involved in” set the test for how closely a company has to be connected. The test is unusually wide, with no percentage of revenue, no share of production, and no minimum level of involvement. Being involved is enough.",
            "lets_through": [
              "This wording lets through very little on its own terms, because there is no threshold to stay under.",
              "It also lets through the parent. This commitment names the corporate entity involved, and does not extend to parent or holding companies."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "mountaintop-removal",
      "thermal-coal",
      "metallurgical-coal",
      "client-level",
      "capital-markets"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 196,
      "document_id": 28052,
      "institution": "societe_generale",
      "commitment_index": 1,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28052/synthesis?run=196&commitment=1",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        14196,
        14287
      ],
      "summary_text": "Societe Generale will not provide new financial products or services to any corporate entity involved in mountaintop removal coal mining in the Appalachians, subject to exceptions for pre-existing commitments, local law conflicts, or senior management approval.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": false
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": "new_and_existing",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new"
        }
      },
      "triggers": [],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Pre-existing business commitments or opportunities at an advanced stage of negotiation",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": false,
          "standing": true,
          "where": "Section 7, Application date and updates"
        },
        {
          "condition": "Contradictory to provisions of any applicable local law, rule, regulation or regulatory guidance or directive",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": false,
          "standing": true,
          "where": "Section 7, Application date and updates"
        },
        {
          "condition": "Exceptional deviations approved by a senior management-chaired group oversight committee",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "bank_green",
          "governance_process": true,
          "standing": true,
          "where": "Section 5, Implementation process"
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 0 fields corrected]\nCHANGES:\n- No changes required. The extractions accurately reflect the policy text and adhere to the schema rules.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "Pre-existing business commitments or opportunities at an advanced stage of negotiation",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "where": "Section 7, Application date and updates"
      },
      {
        "condition": "Contradictory to provisions of any applicable local law, rule, regulation or regulatory guidance or directive",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "where": "Section 7, Application date and updates"
      },
      {
        "condition": "Exceptional deviations approved by a senior management-chaired group oversight committee",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "where": "Section 5, Implementation process"
      }
    ],
    "general_clauses_page": null,
    "disagreements": [
      {
        "field": "weaknesses",
        "severity": "omission",
        "watchtower": "No weakness recorded — as on every commitment in this document.",
        "bank_green": "Watchtower states no weakness anywhere in the Mining synthesis, on any of the five commitments. The phrases highlighted on this page are Bank.Green's reading and are labelled as such.",
        "action": "Populate the weaknesses field for this document. Our highlighted phrases are the proposal."
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
        "project_finance_only": false,
        "new_business_only": true,
        "total": 1
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Any company involved is caught, however small its part, but only for new business. Existing financing stays, and the parent group above the mining company is not covered.",
      "actual_reading": "it will not provide new financial products or services to a company involved in mountaintop removal coal mining in the Appalachians, however small a part of its business that is",
      "gaps": [
        {
          "title": "Existing clients and financing stay",
          "phrase_refs": [
            "new"
          ],
          "text": "Only new products and services are covered. A company already mining this way keeps its loans and facilities until their terms run out, and the policy gives no end date."
        },
        {
          "title": "The parent group is not covered",
          "phrase_refs": [
            "involved"
          ],
          "text": "The commitment names the company involved in the mining. It does not extend to parent or holding companies, so the group that owns the mine can still borrow."
        }
      ],
      "in_practice": "Mountaintop removal is a way of mining coal by blasting away the top of a mountain to reach the seams below. This commitment covers companies that do it in the Appalachians, in the eastern United States.\n\nTake a mining company that uses this method and is not yet a client. If it asks Société Générale for a loan, the answer is no, whether this mining is all of its business or a small part.\n\nNow take a company that already mines this way and already banks with Société Générale. Its existing loans and facilities are not new, so they stay and run to their terms. The policy says nothing about reducing them, reviewing them, or ending them.\n\nThen take the group that owns such a company. This commitment names the company involved in the mining, not its parent. So the parent or holding company can still get new financing from Société Générale. It can then pass that financing down to the company that does the mining.\n\nSo this commitment stops new financing to the company that does the mining itself. But the financing it already has, and new financing to the group above it, both get through.",
      "gets_right": "There is no share of revenue or production to stay under. Any involvement in this kind of mining is enough to catch a company."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not provide new financial products or services to companies involved in mountaintop removal coal mining in the Appalachians. We have not reviewed its financing against this commitment yet.",
    "headline_figure": {
      "display": "Not yet checked",
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-10-02",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 196, document 28052",
    "reading": "drafted"
  }
};
