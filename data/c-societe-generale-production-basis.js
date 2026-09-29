/* Commitment data — generated from commitments/commitment-societe-generale-production-basis.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-production-basis",
    "bank": "Société Générale",
    "commitment_number": 2,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Production Test for Upstream Companies",
    "short_title": "Production Test for Upstream Companies",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this rule in its Oil & Gas Sector Policy, published in April 2026, immediately after the 30% threshold it modifies. For companies whose business is almost entirely upstream, the bank measures that threshold against production rather than revenue. It is a refinement the bank did not have to make.",
    "naive_reading": "it will not finance companies whose business is producing oil and gas",
    "plain_language_note": "One sentence, and the plain rendering only removes a parenthetical the reader does not need. Both of the words the analysis turns on are the bank's own.",
    "sources_intro": "One policy document states this rule, and one passage from it is quoted here. It modifies the policy's 30% revenue exclusion rather than standing alone.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=2",
        "watchtower_document_id": 23944,
        "watchtower_institution": "societe_generale",
        "synthesis_run": 197,
        "version_label": "April 2026",
        "published": "2026-04-01",
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "published_source": null,
        "published_confidence": null,
        "verbatim_check": {
          "document": "23944-societe-generale-oil-gas.md",
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
        "source_id": "ogp2026",
        "title": "The promise",
        "intro": "This line changes what the 30% threshold is measured against, for one kind of company.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "In the specific case of Companies generating almost all of their revenues from upstream Oil and Gas activities (i.e. exploration, development and production), the 30% threshold will be applied to their production.",
        "plain_rendering": "For Companies generating almost all of their revenues from upstream oil and gas activities, the 30% threshold will be applied to their production.",
        "phrases": [
          {
            "id": "see-company",
            "label": "Companies",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              24,
              33
            ],
            "plain_range": [
              4,
              13
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "almost-all",
            "label": "almost all of their revenues",
            "type": "undefined_term",
            "verbatim_range": [
              45,
              73
            ],
            "plain_range": [
              25,
              53
            ],
            "means": "This explains the test of which companies get the production basis instead of the revenue basis. No figure is attached, and almost all is not defined anywhere in the policy.",
            "lets_through": [
              "This wording lets through any producer the bank decides is not almost all upstream. The sentence directly above publishes a number; this one does not, so which companies fall under which basis is settled inside the bank and never has to be explained."
            ],
            "defined_in_clause": null,
            "source": "watchtower_weakness",
            "watchtower_ref": "The term 'almost all of their revenues' is not quantitatively defined, leaving room for subjective interpretation.",
            "not_in_synthesis": false,
            "bank_definition": null
          },
          {
            "id": "production",
            "label": "their production",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              196,
              212
            ],
            "plain_range": [
              129,
              145
            ],
            "means": "This explains the alternative basis. For companies that qualify, the 30% is measured against what they produce rather than what they earn.",
            "lets_through": [
              "This wording lets through reserves, drilling rights and approved development. Production is what came out of the ground this year, so a company can hold overwhelmingly unconventional reserves and a pipeline of unconventional projects while its current production sits under the line."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "definition",
        "source_id": "ogp2026",
        "title": "The definition of “Company”",
        "intro": "How Société Générale's policy defines it in the glossary. It decides which company the test is measured on.",
        "location": {
          "distance": "end_of_document",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Company: refers to the legal entity and companies in its scope of consolidation. Consequently, for the calculation of the indicators in this policy for a Company, reference must be made to its consolidated financial statements.",
        "plain_rendering": "A Company means the legal entity together with every company it consolidates. The tests in this policy are calculated from its consolidated financial statements.",
        "phrases": [
          {
            "id": "consolidated-2",
            "label": "its consolidated financial statements",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              189,
              226
            ],
            "plain_range": [
              123,
              160
            ],
            "means": "This definition of “Company” is broader than what it usually means. By the company we normally mean the entity in front of you. Société Générale reads it as that entity plus everything in its consolidated accounts, so the ratio is worked out across the whole group rather than at the entity doing the extraction. That reaches further than the borrower, not less far.",
            "lets_through": [
              "This wording lets through any upstream business owned by a diversified parent. A subsidiary that is entirely upstream production is not almost all upstream once it is consolidated into a group that also refines, trades or generates power — so it never qualifies for the production test at all, and falls back to the policy's revenue test, where the same consolidation dilutes it a second time.",
              "The compounding is the point: this commitment was written to stop revenue swings hiding production, and the entity it is measured against is chosen so that the companies most exposed to the swings are the least likely to reach it."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          }
        ],
        "watchtower_origin": "Watchtower attaches this passage to this commitment's counterparty scope (`counterparty_scope.quotations`), so the quotation is sourced from the record. The phrase highlighted inside it is Bank.Green's reading.",
        "ordinary_direction": "broader"
      }
    ],
    "glossary_refs": [
      "upstream",
      "production-threshold"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 2,
      "commitment_id": "0a1fb659-c9db-5977-ad3a-c8ccbf2c5df2",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=2",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        16929,
        17154
      ],
      "summary_text": "For companies generating almost all of their revenues from upstream oil and gas activities, the 30% exclusion threshold is applied to their production share of unconventional resources instead of revenues.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "arctic",
            "oil_sands",
            "shale"
          ],
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "group",
          "relationship_status": "new_and_existing",
          "certainty": null
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new_and_existing"
        }
      },
      "triggers": [
        {
          "metric": "production_share",
          "inequality": ">",
          "value": 30,
          "definition": "production of Arctic oil and gas, Ecuadorian Amazonian oil, Oil sands or other extra heavy oil, and Shale oil or gas for companies generating almost all of their revenues from upstream Oil and Gas activities"
        },
        {
          "metric": "other",
          "inequality": null,
          "value": null,
          "definition": "generating almost all of their revenues from upstream Oil and Gas activities (i.e. exploration, development and production)"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Exceptions for pre-existing business commitments or opportunities at an advanced stage of negotiation.",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": true,
          "where": "Section 7, Application date and updates, page 11"
        },
        {
          "condition": "Account holding and cash management services provided to subsidiaries of integrated oil and gas companies (IOCs).",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": "Section 2.2, Scope of the Group's activities, page 4"
        },
        {
          "condition": "Any deviation from this policy may be granted, on an exceptional basis, by a Societe Generale group oversight committee chaired by senior management.",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": true,
          "standing": true,
          "where": "Section 5.2, Client engagement, page 7"
        }
      ],
      "weaknesses": "The term 'almost all of their revenues' is not quantitatively defined, leaving room for subjective interpretation.",
      "reviewer_notes": "STATS: [0 added, 2 removed, 0 split, 1 fields corrected]\nCHANGES:\n- Removed commitment 1 (upstream O&G exposure reduction): Quantitative portfolio reduction targets without a defined endpoint are out of scope.\n- Removed commitment 2 (GHG financed emissions reduction): Quantitative portfolio reduction targets without a defined endpoint are out of scope.\n- Commitment 5 (phase out private companies generating almost all revenues from upstream O&G): Removed exception 'Existing exposure will be phased out until extinction...' as this describes the phase-out mechanism itself, not an exception to the rule.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "Exceptions for pre-existing business commitments or opportunities at an advanced stage of negotiation.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "watchtower",
        "governance_process": false,
        "standing": true,
        "where": "Section 7, Application date and updates, page 11"
      },
      {
        "condition": "Any deviation from this policy may be granted, on an exceptional basis, by a Societe Generale group oversight committee chaired by senior management.",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "watchtower",
        "governance_process": true,
        "standing": true,
        "where": "Section 5.2, Client engagement, page 7"
      }
    ],
    "general_clauses_page": null,
    "disagreements": [],
    "assessment": {
      "strength": "crushed",
      "strength_derivation": {
        "rule": "spec v3.29 §4.1 — the gap between the naive reading and what it catches",
        "inputs_source": "Watchtower record",
        "record_score": "hollowed",
        "weakness": true,
        "commitment_specific_carve_outs": 1,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 2,
        "previous_editorial_rating": "hollowed",
        "changed": false
      },
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "strength_reason": "It changes how one threshold is measured, not who is refused. The bank decides which producers it applies to, and reserves and new projects never count.",
      "actual_reading": "it will not finance a producer whose current output is more than 30% unconventional oil and gas, but only where it judges almost all the producer's revenue comes from oil and gas production",
      "gaps": [
        {
          "title": "No number for “almost all”",
          "phrase_refs": [
            "almost-all"
          ],
          "text": "Only producers earning almost all of their revenue from oil and gas are measured on production. The policy gives no figure, so the bank decides who that is."
        },
        {
          "title": "Only this year's output counts",
          "phrase_refs": [
            "production"
          ],
          "text": "Production is what came out of the ground this year. Reserves, drilling rights and approved projects do not count, however unconventional they are."
        },
        {
          "title": "Producers owned by larger groups",
          "phrase_refs": [
            "consolidated-2"
          ],
          "text": "The share is worked out across the whole group. A producer owned by a parent with other businesses is not almost all upstream, so it is measured on revenue instead."
        }
      ],
      "in_practice": "This sentence does not add a new restriction. It changes how an existing threshold is measured. Société Générale refuses companies where more than 30% of the business is unconventional oil and gas, such as oil sands or shale. For most companies that 30% is a share of revenue. For companies that earn almost all of their revenue from producing oil and gas, it is a share of production instead.\n\nTake a producer that does nothing but drill. Most of its current output is conventional oil, but most of its reserves are oil sands. It is building new oil sands projects. Measured on this year's production, it is under 30%. Société Générale can finance it until those projects start producing.\n\nNow take a producer with a small refinery. Is almost all of its revenue from production? The policy gives no figure. So the bank decides which measure applies, and does not have to explain the choice.\n\nThen take a producer owned by a larger group that also refines and trades. It is measured across the whole group. So it is not almost all upstream, and the production test never applies to it. It falls back to the revenue test, where the group's other businesses dilute it again.\n\nSo the sentence applies to a small set of producers the bank picks itself, and it looks only at what they produce today."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "For companies that are almost entirely upstream, Société Générale measures its 30% unconventional threshold against production rather than revenue. We have not yet reviewed what it financed against this commitment.",
    "headline_figure": {
      "display": "Not yet checked",
      "combines": "No financing has been linked to this commitment yet",
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-09-29",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 197, document 23944",
    "reading": "drafted"
  }
};
