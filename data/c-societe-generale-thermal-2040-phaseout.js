/* Commitment data — generated from commitments/commitment-societe-generale-thermal-2040-phaseout.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-thermal-2040-phaseout",
    "bank": "Société Générale",
    "commitment_number": 2,
    "category": "thermal_coal",
    "effective_date": "2026-04-01",
    "title": "Société Générale's 2040 Thermal Coal Phase-Out",
    "short_title": "2040 Thermal Coal Phase-Out",
    "subject": "Thermal Coal Phase-out Outside the EU and OECD",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this commitment in the same sentence as its 2030 date. Outside the EU and the OECD, the deadline for bringing thermal coal exposure down to zero is 2040. That is ten years later, for the part of the world that holds most of the coal.",
    "naive_reading": "it will stop financing coal for power everywhere in the world by 2040",
    "plain_language_note": "The same promise as the 2030 date, with a different date and a bigger map.",
    "sources_intro": "This commitment comes from a single policy document, and we quote one passage from it below.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "tcp2026",
        "document_title": "Société Générale Thermal Coal Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/thermal-coal-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=2",
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
          "passages": 1,
          "found": 1,
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
        "intro": "This is where Société Générale commits to the 2040 date.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "For its financing, asset management and investment portfolios, the Group is committed to progressively reducing to zero its exposure to the Thermal Coal Sector at the latest in 2030 for Companies with mining or power production thermal coal assets located in the EU or OECD countries and 2040 for Companies holding such assets in the rest of the world.",
        "plain_rendering": "Société Générale is committed to progressively reducing to zero its exposure to the Thermal Coal Sector by 2040 at the latest, for companies holding thermal coal mining or power production assets in the rest of the world.",
        "phrases": [
          {
            "id": "exposure",
            "label": "its exposure",
            "type": "undefined_term",
            "verbatim_range": [
              120,
              132
            ],
            "plain_range": [
              64,
              76
            ],
            "means": "This explains what is being reduced. The policy applies this commitment to financing, asset management, and investment portfolios, but it does not say how exposure across those three is counted.",
            "lets_through": [
              "This wording lets through whichever measure the bank prefers at the time. Drawn balances, committed limits, underwriting share, and assets under management are different numbers. So a promise to reduce “exposure” to zero can be met on one of them while another stays untouched.",
              "It also lets through capital markets work. Arranging a bond leaves no balance behind, so a bank can reach zero exposure while still bringing coal companies' bonds to market."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "row",
            "label": "in the rest of the world",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              327,
              351
            ],
            "plain_range": [
              196,
              220
            ],
            "means": "This explains who gets until 2040: every company whose thermal coal assets sit outside the EU and the OECD.",
            "lets_through": [
              "This wording lets through ten more years for most of the world's coal. Most operating thermal coal capacity, and almost all of the capacity still being built, is outside the EU and OECD.",
              "It also sets a date beyond most planning horizons, since 2040 is two policy revisions and several management teams away."
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
      "phase-out",
      "exposure",
      "capital-markets",
      "bond-underwriting"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 306,
      "document_id": 28051,
      "institution": "societe_generale",
      "commitment_index": 2,
      "commitment_id": "eb5d02d6-f783-5d0f-826c-f0f8cfa2341e",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=2",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        7750,
        8101
      ],
      "summary_text": "Societe Generale commits to progressively reduce to zero its financing exposure to companies with thermal coal mining or power production assets in non-EU/OECD countries by 2040 at the latest.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": null,
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
          "transaction_status": "new_and_existing"
        }
      },
      "triggers": [],
      "commitment_type": "phase_out",
      "effective_date": "2040",
      "exceptions": [
        {
          "condition": "Deviations may be granted on an exceptional basis by the Societe Generale group oversight committee chaired by senior management",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": true,
          "standing": true,
          "where": "Section 5.2, Implementation process"
        },
        {
          "condition": "Exceptions apply for pre-existing business commitments or opportunities at an advanced stage of negotiation",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": "Section 7, Application date and updates"
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
        "new_business_only": false,
        "total": 1
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "The date is real, but it is far away and covers most of the world's coal. What counts as reaching zero is left open, so the bank could get there while still arranging bonds.",
      "actual_reading": "it will bring its exposure to companies with coal mines or coal plants outside the EU and OECD to zero by 2040, counted in a way the policy does not set out",
      "gaps": [
        {
          "title": "Ten more years for most of the coal",
          "phrase_refs": [
            "row"
          ],
          "text": "Most thermal coal capacity in use, and almost all that is still being built, is outside the EU and OECD. That coal has until 2040."
        },
        {
          "title": "Zero, but counted how?",
          "phrase_refs": [
            "exposure"
          ],
          "text": "The policy does not say how exposure is counted. Loans drawn, credit limits, bonds arranged, and funds managed are different numbers, and arranging a bond leaves nothing on the bank's books."
        }
      ],
      "in_practice": "Thermal coal is the coal burned in power stations. This commitment covers companies with thermal coal mines or plants outside the EU and OECD. Société Générale says it will bring its exposure to them down to zero by 2040.\n\nA power company running coal plants in Indonesia falls under the 2040 date. It does not matter how old its plants are or how much coal they burn. What matters is which side of the EU and OECD line they are on.\n\nThen there is the word “exposure.” This commitment covers the bank's financing, the funds it manages, and its own investments, but does not say how exposure across them is counted. A loan the company has drawn is one number, and a credit limit it has not used is another. So the bank could reach zero on one measure while another stays untouched.\n\nArranging a bond is the clearest case. The bank helps the company sell bonds to investors, and the bonds leave nothing on the bank's books. So Société Générale could report zero exposure in 2040 and still be helping coal companies raise financing.\n\nAnd 2040 is a long way off. There are no steps before it, so the years in between can pass without anything to check.",
      "gets_right": "It sets an end point of zero, with a date, for coal anywhere in the world. It also covers the funds Société Générale manages and its own investments, not only its lending."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale has committed to reduce its thermal coal exposure to zero by 2040 outside the EU and OECD. We have not reviewed its financing against this commitment yet.",
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
    "source": "Watchtower synthesis run 306, document 28051",
    "reading": "drafted"
  }
};
