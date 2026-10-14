/* Commitment data — generated from commitments/commitment-societe-generale-thermal-transition-plan.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-thermal-transition-plan",
    "bank": "Société Générale",
    "commitment_number": 4,
    "category": "thermal_coal",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Transition Plan Requirement",
    "short_title": "Transition Plan Requirement",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this rule in its Thermal Coal Sector Policy, published in April 2026. Any company with thermal coal mines or power plants must have a transition plan that matches the bank's own 2030 and 2040 deadlines. If it has not, it gets no new financing.",
    "naive_reading": "it will drop coal clients with no plan to stop mining or burning coal",
    "plain_language_note": "The test is whether a plan exists, not how good it is.",
    "sources_intro": "This rule comes from a single policy document, and we quote one passage from it below.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "tcp2026",
        "document_title": "Société Générale Thermal Coal Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/thermal-coal-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=4",
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
        "intro": "Société Générale will not offer new financial services to a coal company unless it has communicated a transition plan that fits the bank's phase-out goals.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide new financial products and services to any… Company with thermal coal mining or power assets which has not communicated a transition plan aligned with the 2030/2040 thermal coal phase-out objectives of Societe Generale and any of its parent and holding companies.",
        "plain_rendering": "Société Générale will not provide new financial products and services to any company with thermal coal mining or power assets which has not communicated a transition plan aligned with the 2030/2040 thermal coal phase-out objectives of Société Générale, or to any of its parent and holding companies.",
        "phrases": [
          {
            "id": "communicated",
            "label": "has not communicated a transition plan",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              126,
              164
            ],
            "plain_range": [
              132,
              170
            ],
            "means": "The word “communicated” sets the bar. The client only has to communicate a plan. It does not have to carry it out, have it checked, or report on its progress.",
            "lets_through": [
              "This wording lets through every plan that is announced and never carried out. Nothing here ties the financing to the plan being met, or takes it back when the plan slips.",
              "It also lets through plans shared in private. Because the wording does not require the plan to be published, a plan shown only to the bank is enough. Nobody outside the bank can check whether it was right to accept it."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "aligned",
            "label": "aligned with the 2030/2040 thermal coal phase-out objectives",
            "type": "undefined_term",
            "verbatim_range": [
              165,
              225
            ],
            "plain_range": [
              171,
              231
            ],
            "means": "This explains the standard a plan is measured against: the bank's own deadlines. The policy does not say what counts as “aligned,” or who decides.",
            "lets_through": [
              "This wording lets through any plan the bank is willing to accept. There is no method, no outside standard, and no list of which clients passed.",
              "It also lets through plans that keep coal running until 2040. The deadlines are Société Générale's own, and for most of the world the later one applies. So a plan can count as aligned and still keep coal running for another fourteen years."
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
      "transition-plan",
      "group-level",
      "parent-company",
      "phase-out"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 306,
      "document_id": 28051,
      "institution": "societe_generale",
      "commitment_index": 4,
      "commitment_id": "ed80a928-fcde-5d0a-9502-1c29effe5657",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=4",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        11501,
        11884
      ],
      "summary_text": "Societe Generale will not provide new financial products and services to companies with thermal coal mining or power assets lacking an aligned 2030/2040 transition plan, nor to their parent/holding companies.",
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
          "level": "group",
          "relationship_status": "new_and_existing",
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
          "metric": "other",
          "inequality": null,
          "value": null,
          "definition": "Holding thermal coal mining or power assets without having communicated a transition plan aligned with Societe Generale's 2030/2040 thermal coal phase-out targets"
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
      "strength": "crushed",
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
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "The test is passed as soon as a plan reaches the bank. Nothing says what makes a plan good enough, and nothing happens if it is never carried out.",
      "actual_reading": "it will refuse new business only to coal mining and coal power companies that have not shown it a plan it is willing to accept",
      "gaps": [
        {
          "title": "Sharing a plan is enough",
          "text": "The company only has to communicate a plan. It does not have to publish it, carry it out, or report on it, so a plan shown only to the bank still passes.",
          "phrase_refs": [
            "communicated"
          ]
        },
        {
          "title": "“Aligned” is the bank's own call",
          "text": "The policy has no test for what makes a plan aligned. The deadlines are the bank's own, and the later one is 2040, so a plan can pass and keep coal running until then.",
          "phrase_refs": [
            "aligned"
          ]
        }
      ],
      "in_practice": "This commitment covers every company with thermal coal mines or coal power plants, along with their parent and holding companies. Each one must have communicated a transition plan, meaning a statement of how it will get out of coal. That plan has to be aligned with Société Générale's goal of leaving thermal coal by 2030 or 2040, depending on the region.\n\nA utility with coal plants that has published a net-zero plan passes. So does one that has only described its plan to the bank in a meeting. The wording never asks for the plan to be made public. So nobody outside the bank can see it, or check whether the bank was right to accept it.\n\nAnd if a company's plan slips, and its coal plants stay open past the dates it promised, nothing happens. The test was passed the day the plan arrived, and the policy never looks at it again.\n\nThe word “aligned” does the rest of the work. The policy gives no method for judging it, names no outside standard, and does not list which clients passed. So the plans that pass are the ones the bank accepts.\n\nThe rule does refuse a company with coal assets that has shown the bank no plan. A company that hands over a plan the bank accepts can still get new products and services."
    },
    "selected_for_publication": true
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not provide new financing to coal companies that have not communicated an aligned transition plan. We have not reviewed its financing against this commitment yet.",
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
