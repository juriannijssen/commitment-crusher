/* Commitment data — generated from commitments/commitment-societe-generale-thermal-client-50pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-thermal-client-50pc",
    "bank": "Société Générale",
    "commitment_number": 6,
    "category": "thermal_coal",
    "effective_date": "2026-04-01",
    "title": "Société Générale's 50% Threshold for Existing Clients",
    "short_title": "50% Threshold for Existing Clients",
    "subject": "Existing Clients in Thermal Coal",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this rule in its Thermal Coal Sector Policy, published in April 2026. A company already banked can earn up to half its revenue from thermal coal and keep receiving new financing. A company that is not yet a client is turned away at 25%.",
    "naive_reading": "it will stop serving existing clients whose business is mainly coal",
    "plain_language_note": "The same policy, the same list, two different numbers depending on whether the bank already earns from you.",
    "sources_intro": "One policy document states this rule, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "tcp2026",
        "document_title": "Société Générale Thermal Coal Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/thermal-coal-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=6",
        "watchtower_document_id": 28051,
        "watchtower_institution": "societe_generale",
        "synthesis_run": 306,
        "version_label": "April 2026",
        "published": "2026-04-01",
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "published_source": null,
        "published_confidence": null,
        "verbatim_check": {
          "document": "28051-societe-generale-thermal-coal.md",
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
        "source_id": "tcp2026",
        "title": "The promise",
        "intro": "Société Générale will not provide new financial services to existing clients with more than 50% of their revenue linked to thermal coal.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide new financial products and services to any… Existing client which has more than 50% of its revenue linked to the Thermal Coal Sector.",
        "plain_rendering": "Société Générale will not provide new financial products and services to any Existing client which has more than 50% of its revenue linked to the Thermal Coal Sector.",
        "phrases": [
          {
            "id": "new-fps6",
            "label": "new financial products and services",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              27,
              62
            ],
            "plain_range": [
              34,
              69
            ],
            "means": "This explains what is withheld once a client crosses the line: new business. Watchtower records the transaction status as new.",
            "lets_through": [
              "Adding the word “new” means every facility already agreed stays in place. A client above 50% keeps what it has, and the policy's only answer to existing exposure is the 2030 and 2040 phase-out dates.",
              "It also lets through renewals framed as amendments. Nothing in the wording says whether extending an existing facility is new business."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "50pc",
            "label": "more than 50% of its revenue",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              97,
              125
            ],
            "plain_range": [
              103,
              131
            ],
            "means": "This explains the threshold for a company already on the books. More than half its revenue must be linked to thermal coal before new business stops.",
            "lets_through": [
              "This wording lets through every existing client between 25% and 50%. A coal-heavy utility the bank would refuse to take on today keeps its access because it was taken on yesterday."
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
      "thermal-coal",
      "revenue-threshold",
      "client-level",
      "grandfathering",
      "capital-markets"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 306,
      "document_id": 28051,
      "institution": "societe_generale",
      "commitment_index": 6,
      "commitment_id": "31f363d3-b085-5693-97ef-95933e4bb935",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=6",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        11501,
        12067
      ],
      "summary_text": "Societe Generale will not provide new financial products and services to existing clients deriving more than 50% of their revenue from the thermal coal sector.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": null,
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": "existing",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new"
        }
      },
      "triggers": [
        {
          "metric": "revenue_share",
          "inequality": ">",
          "value": 50,
          "definition": "revenue linked to the Thermal Coal Sector"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Financing products and services dedicated to the energy transition remain permitted",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": "Section 6.1, Client criteria — Energy transition exception"
        },
        {
          "condition": "Deviations may be granted on an exceptional basis by the Societe Generale group oversight committee chaired by senior management",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": true,
          "standing": true,
          "where": "Section 5.2, Implementation process"
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 9 fields corrected]\nCHANGES:\n- All commitments: Added missing `certainty` object with `certainty_rating: \"5\"` to all exceptions to comply with schema requirements.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "Deviations may be granted on an exceptional basis by the Societe Generale group oversight committee chaired by senior management",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "watchtower",
        "governance_process": true,
        "standing": true,
        "where": "Section 5.2, Implementation process"
      }
    ],
    "general_clauses_page": null,
    "disagreements": [
      {
        "field": "weaknesses",
        "severity": "omission",
        "watchtower": "No weakness recorded — as on every commitment in this document.",
        "bank_green": "Watchtower states no weakness anywhere in the Thermal Coal synthesis, on any of the nine commitments. The phrases highlighted on this page are Bank.Green's reading and are labelled as such.",
        "action": "Populate the weaknesses field for this document. Our highlighted phrases are the proposal."
      },
      {
        "field": "loopholes.exceptions",
        "severity": "inconsistency",
        "watchtower": "The section 7 exception for pre-existing business commitments and opportunities at an advanced stage of negotiation is attached to two of the nine commitments in this run — commitments 1 and 2. It is absent from commitments 3 to 9.",
        "bank_green": "Section 7 applies that exception to the sector policy as a whole, so it should sit on all nine commitments. We read the seven omissions as an extraction inconsistency rather than a feature of the policy.",
        "action": "Attach the section 7 exception to commitments 3 to 9. Note the consequence for the derived rating: spec v3.2 defines a standing carve-out as one appearing on EVERY commitment in a document, so as the record stands the section 7 exception counts as commitment-specific on commitments 1 and 2 and adds a point to each. Correcting the record would make it standing and move both from `hollowed` to `holds`. No other rating in this document would change."
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
        "project_finance_only": false,
        "new_business_only": true,
        "total": 2
      },
      "verdict_options": [
        {
          "angle": "how_it_compares",
          "recommended": true,
          "recommended_because": "The double standard is printed in the policy, in one list, and needs no argument to make it.",
          "text": "Société Générale will not take on a new client above 25% of revenue from thermal coal. It will keep an existing client up to 50%.\n\nThe two rules sit next to each other in the same list. Only the words “Prospect” and “Existing client” separate them.\n\nSo the bar is twice as high for companies the bank already earns from. A coal-heavy utility at 40% would be refused as a newcomer and kept as a client. Nothing in the policy explains the difference or says when it ends.\n\nThe fair version is a transition allowance. You stay with a client to help it change, and take on no new coal meanwhile. If that is the aim, the higher bar needs a date to come down. As written, it is permanent."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "Even above 50%, only new products and services stop.\n\nA client that crosses the line keeps every loan already agreed, and keeps drawing on it. So a company above 50% can keep borrowing on loans already signed.\n\nThe rule also does not say whether extending a loan counts as new business. Renewals, changes and increases sit between “new” and “existing”. That is where most company lending actually happens."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "How many existing clients of a large European bank earn more than half their revenue from thermal coal? Few.\n\nA utility at 50% coal revenue is usually a coal-only power producer or a coal miner. Most European banks dropped those companies years ago. The threshold sits where the bank's current clients have least to lose.\n\nThe interesting group sits between the two numbers: clients from 25% to 50%. They are refused as new clients and kept as existing ones. Nothing else in the policy covers them, except the transition plan rule, which asks for a document, and the 2040 date.\n\nThat group is where the policy's real position on coal lies. No sentence in it deals with that group directly."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green from its own reading of the wording. Watchtower states no weakness on this document, so there is nothing sourced underneath these options — they sit entirely below the opinion boundary and a human must read them before publication.",
      "what_needs_to_change": [
        {
          "title": "Bring the client threshold down to 25%",
          "content": "The policy gives no reason why an existing relationship justifies twice as much coal."
        },
        {
          "title": "Put a date on the higher bar",
          "content": "If 50% is a temporary allowance, not a permanent position, say when it comes down."
        },
        {
          "title": "Say whether a renewal is new business",
          "content": "The rule stops new products and services. It does not say whether extending an existing loan counts."
        }
      ],
      "what_needs_to_change_closing": "Until then, the policy accepts twice as much coal from a company it already banks.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "New financing to clients above 50% stops, which is real. Everything already agreed stays, and 25 to 50% is untouched.",
      "how_it_compares": {
        "text": "Existing financing is left to Société Générale's coal phase-out dates, the later one in 2040. Its rule for coal miners is not limited to new business.",
        "links": [
          {
            "slug": "societe-generale-thermal-2040-phaseout",
            "title": "Société Générale's 2040 Thermal Coal Phase-Out"
          },
          {
            "slug": "societe-generale-thermal-mining-20pc",
            "title": "Société Générale's Group Test for Thermal Coal Miners"
          }
        ]
      }
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not provide new financing to existing clients earning more than 50% of revenue from thermal coal. We have not yet reviewed what it financed against this commitment.",
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
    "source": "Watchtower synthesis run 306, document 28051",
    "reading": "drafted"
  }
};
