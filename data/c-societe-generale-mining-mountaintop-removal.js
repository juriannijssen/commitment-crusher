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
    "plain_language_note": "One sentence with no threshold in it at all — and two words at the front that decide how much of the bank's business it touches.",
    "sources_intro": "One policy document states this exclusion, and one passage from it is quoted here.",
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
        "intro": "This is where Société Générale makes the commitment.",
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
            "means": "This explains what this commitment reaches: business the bank has not written yet. Watchtower records the transaction status on this commitment as new only.",
            "lets_through": [
              "Adding the word “new” means everything already on the books stays. A company mining this way that is already a client stays a client, and existing facilities run to their terms.",
              "This policy says nothing about existing exposure at all: no run-off, no review date, no end."
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
            "means": "The words “involved in” set the test of connection. It is unusually wide — no percentage of revenue, no share of production, no materiality. Being involved is enough.",
            "lets_through": [
              "This wording lets through very little, on its own terms: there is no threshold to stay under.",
              "What it does not reach is the parent. This commitment names the corporate entity involved, and does not extend to parent or holding companies."
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
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "The pairing is the story: the widest client test in the policy, applied only to business the bank has not written yet.",
          "text": "Société Générale wrote a wide client test here, then applied it only to new business.\n\nThe test is “involved in”. There is no share of revenue or production, and no minimum. A company that blasts the tops off mountains in the Appalachians is caught, however small that part of its business. The bank deserves credit for this.\n\nBut the rule only covers “new financial products or services”. Existing loans and the client relationship are left alone.\n\nSo a company Société Générale already finances, mining this way today, is untouched. This policy says nothing about what the bank already holds."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "What is missing from this sentence makes it unusual.\n\nThere is no revenue threshold and no production threshold. There is no exception for companies where this kind of mining is a small part of the business. Being involved is enough.\n\nAlmost every other exclusion in Société Générale's policies has a number in it. Unconventional oil and gas has 30% of revenue. Coal for steel-making has 50%. Here the bank wrote no number. So no mining company can argue its way under a line, because there is no line.\n\nThat is the kind of drafting we ask for elsewhere on this site. It is worth saying so before we say what is wrong with the rest."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Two comparisons, both with Société Générale's own published policies.\n\nThe first is company structure. The bank's thermal coal policy also covers parent and holding companies. This one covers only the company doing the mining. So a subsidiary can be excluded while the group above it, which owns the mine and takes the profit, is not.\n\nThe second is place. The exclusion covers this kind of mining only in the Appalachians. A ban tied to a place stops working when the practice moves. A ban tied to the method goes with it. If the bank thinks the practice only happens in the Appalachians, the policy should say so. As written, the limit has no stated reason."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green from its own reading of the wording. Watchtower states no weakness on this document, so unlike the oil and gas pages there is nothing sourced underneath these options — they sit entirely below the opinion boundary and a human must read them before publication.",
      "what_needs_to_change": [
        {
          "title": "Say what happens to existing business",
          "content": "The exclusion covers new financial products or services only. This policy says nothing about existing financing."
        },
        {
          "title": "Cover the parent company too",
          "content": "The rule names only the company doing the mining. Parent and holding companies should be covered too."
        },
        {
          "title": "Name the method, not only the region",
          "content": "The exclusion is limited to the Appalachians. Tying it to the method would keep it working if the practice moves."
        }
      ],
      "what_needs_to_change_closing": "Until then, a client test with no minimum only applies to business the bank has not done yet.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "A client test with no minimum, and within dedicated financing it lets very little through. Existing clients and parents stay.",
      "how_it_compares": {
        "text": "Société Générale's oil and gas policy says financing for excluded companies will be phased out completely. Its rule on thermal coal developers also covers parent and holding companies.",
        "links": [
          {
            "slug": "societe-generale-30pc-unconventional",
            "title": "Société Générale's 30% Threshold on Unconventional Oil & Gas"
          },
          {
            "slug": "societe-generale-thermal-developers",
            "title": "Société Générale's Exclusion of Thermal Coal Developers"
          }
        ]
      }
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not provide new financial products or services to companies involved in mountaintop removal coal mining in the Appalachians. We have not yet reviewed what it financed against this commitment.",
    "headline_figure": {
      "display": "Not yet checked",
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-09-28",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 196, document 28052",
    "reading": "drafted"
  }
};
