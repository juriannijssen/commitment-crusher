/* Commitment data — generated from commitments/commitment-seb-og-upstream-5pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "seb-og-upstream-5pc",
    "bank": "SEB Group",
    "commitment_number": 6,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's 5% Threshold on Oil and Gas Producers",
    "short_title": "5% Threshold on Oil and Gas Producers",
    "subject": "Oil and Gas Exploration and Production",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this restriction in its Sector Policy on Fossil Fuels, published in April 2026. SEB will not take on a new client that earns more than 5% of its revenue from finding and producing oil and gas.",
    "naive_reading": "it does not take on oil and gas producers as clients",
    "plain_language_note": "The same low number as coal, and one word that halves what it covers.",
    "sources_intro": "This restriction comes from a single policy document, and we quote one passage from it below.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=6",
        "watchtower_document_id": 25537,
        "watchtower_institution": "seb_group",
        "synthesis_run": 181,
        "version_label": "April 2026",
        "published": "2026-04-23",
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "published_source": null,
        "published_confidence": null,
        "verbatim_check": {
          "document": "25537-seb-fossil-fuels.md",
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
        "source_id": "seb2026",
        "title": "The promise",
        "intro": "This is where SEB Group sets out this commitment.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "SEB avoids New Business Relationships with Companies where more than 5% of revenues are derived from exploration and production of oil and gas.",
        "plain_rendering": "SEB avoids New Business Relationships with Companies where more than 5% of revenues are derived from exploration and production of oil and gas.",
        "phrases": [
          {
            "id": "new-br",
            "label": "New Business Relationships",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              11,
              37
            ],
            "plain_range": [
              11,
              37
            ],
            "means": "This explains who this commitment applies to: companies that are not clients yet.",
            "lets_through": [
              "Adding the word “New” means every oil and gas producer SEB already banks keeps its financing."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "see-company",
            "label": "Companies",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              43,
              52
            ],
            "plain_range": [
              43,
              52
            ],
            "means": "SEB defines a company as one legal entity, which is the usual meaning. International accounting standards call the parent and its subsidiaries together a group. So the revenue test is applied to the entity SEB deals with and not to its group. A subsidiary can pass while its group earns heavily from oil and gas production, so the rule blocks less.",
            "lets_through": [
              "This wording lets through financing to a subsidiary below the line, however much the rest of its group earns from oil and gas production. The financing can then move inside the group."
            ],
            "defined_in_clause": null,
            "bank_definition": {
              "quote": "Company — Legal corporate entity conducting business.",
              "source_id": "seb2026"
            },
            "ordinary_source": [
              {
                "body": "IFRS Foundation",
                "title": "IFRS 10, Appendix A",
                "term": "Group",
                "url": "https://www.ifrs.org/content/dam/ifrs/publications/html-standards/english/2025/issued/ifrs10.html#IFRS10_APPA"
              }
            ]
          },
          {
            "id": "5pc6",
            "label": "more than 5% of revenues",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              59,
              83
            ],
            "plain_range": [
              59,
              83
            ],
            "means": "This explains the threshold, on revenue from exploration and production.",
            "lets_through": [
              "This wording lets through integrated majors below the line, though at 5% very few are. For oil and gas production, it is a low bar.",
              "It also lets through service companies and contractors, which do not produce oil and gas themselves. Offshore services are covered separately, at the same 5%."
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
      "upstream",
      "revenue-threshold",
      "client-level",
      "capital-markets"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 181,
      "document_id": 25537,
      "institution": "seb_group",
      "commitment_index": 6,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=6",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-09",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        12887,
        13030
      ],
      "summary_text": "SEB Group restricts new business relationships with companies deriving more than 5% of revenue from oil and gas exploration and production.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": "new",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new_and_existing"
        }
      },
      "triggers": [
        {
          "metric": "revenue_share",
          "inequality": ">",
          "value": 5,
          "definition": null
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 20 fields corrected]\nCHANGES:\n- Corrected certainty ratings across all commitments from null to certainty objects with rating '5' to ensure schema compliance and reflect high confidence in extraction.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "DEVIATIONS GO TO AN INTERNAL PROCESS · APPENDIX B — Deviations from restrictions and requirements in this policy shall be handled according to established SEB Group internal processes. No committee is named, no threshold is set, and nothing is said about how often this happens.",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "APPENDIX B"
      },
      {
        "condition": "A 5% FLOOR ON THE WHOLE POLICY · SECTION 4.2 — The policy covers companies with more than 5% of company revenues from activities in the fossil fuel sector, calculated at SEB Group global limit holder level. Below that line the document does not engage at all.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "SECTION 4.2"
      },
      {
        "condition": "SOME ACTIVITIES SIT OUTSIDE THE POLICY · SECTION 4.1 — Seized assets held in the ordinary course of business, client order facilitation, market making, anything SEB is obliged to provide by law or regulation, and products where another financial institution is the provider are all exempt. SEB Asset Management Holding AB and Gamla Livförsäkrings AB SEB Trygg Liv are outside the policy entirely.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": "commitment 1 only",
        "where": "SECTION 4.1"
      },
      {
        "condition": "IT BINDS LARGE COMPANIES HARDEST · SECTION 4.2 — Restrictions, requirements and expectations all apply to large companies. SMEs get restrictions and requirements only. Retail counterparties are outside the policy — it acts as a guide.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": "commitment 1 only",
        "where": "SECTION 4.2"
      }
    ],
    "general_clauses_page": null,
    "disagreements": [
      {
        "field": "weaknesses",
        "severity": "omission",
        "watchtower": "No weakness recorded on any of the twenty commitments in this run.",
        "bank_green": "Watchtower states no weakness anywhere in this synthesis. Every phrase highlighted on this page is Bank.Green's reading and is labelled as such.",
        "action": "Populate the weaknesses field. Our highlighted phrases are the proposal — the strongest candidate on this document is the three-party transition-plan condition on commitment 16."
      },
      {
        "field": "loopholes.exceptions",
        "severity": "omission",
        "watchtower": "No exception is recorded on more than one commitment. Twelve of the twenty carry none at all, and the record contains no policy-wide carve-out.",
        "bank_green": "The policy does have provisions that sit above every commitment. Appendix B routes deviations from any restriction to unnamed SEB Group internal processes. Section 4.2 applies the whole document only above 5% of company revenue from the fossil fuel sector, and excludes Retail entirely. Section 4.1 exempts seized assets, client order facilitation, market making, legally required activity, and two named asset-management entities. Watchtower attaches the section 4 items to commitment 1 only, and the Appendix B deviation clause to nothing.",
        "action": "Attach the Appendix B deviation clause and the section 4 scope provisions to every commitment, as standing exceptions."
      },
      {
        "field": "commitments",
        "severity": "omission",
        "watchtower": "Run 181 extracted twenty commitments, every one of them coal or oil and gas.",
        "bank_green": "Run 181 extracted 20 commitments, all of them coal or oil and gas. Section 9 of the policy sets out four further restrictions on thermal peat, including a 2030 phase-out. None appears in the record. The reviewer notes for this run read '0 added, 0 removed, 0 split, 20 fields corrected', so the omission was not caught in review either.",
        "action": "Re-run document 25537. Section 9 contains four restrictions on thermal peat, including a 2030 commitment."
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
      "strength_reason": "It turns away only new oil and gas producers, and every producer SEB already banks keeps its financing, with no date to leave.",
      "actual_reading": "it does not take on new clients earning more than 5% of their revenue from finding and producing oil and gas, but keeps the producers it already banks",
      "gaps": [
        {
          "title": "Producers SEB already banks",
          "phrase_refs": [
            "new-br"
          ],
          "text": "This commitment covers new clients only, so every oil and gas producer SEB already banks keeps its financing, and nothing asks it to change."
        },
        {
          "title": "A company in the group below the line",
          "phrase_refs": [
            "see-company"
          ],
          "text": "SEB applies the 5% test to the one legal entity it deals with, not to its group. A subsidiary with little production revenue can borrow, and the financing can move within the group."
        }
      ],
      "in_practice": "Take an oil and gas producer that is not yet an SEB client. If more than 5% of its revenue comes from finding and producing oil and gas, SEB will not take it on. Even a group with a modest production arm crosses that line.\n\nA producer SEB already banks is a different case, because this commitment asks nothing of it. Its loans stay, and nothing in the sentence stops SEB renewing them or adding new ones. There is no date by which the relationship has to end. Whatever share of its revenue comes from oil and gas, it stays a client.\n\nSo the effect of this commitment depends on who SEB already banks, and for the producers already on its books, nothing changes.\n\nThere is also a way in for a new producer, because the policy defines a “Company” as one legal entity, not a group. A producer can borrow through a subsidiary with little production revenue of its own. That subsidiary passes the test, and the financing can move inside the group.\n\nWhat this commitment stops, then, is a producer SEB has never banked coming to it in its own name. The rest of SEB's oil and gas business carries on.",
      "gets_right": "The line is low: at 5% of revenue, even a group with a modest production arm is turned away as a new client."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "SEB avoids new business relationships with companies above 5% oil and gas production revenue. We have not reviewed its financing against this commitment yet.",
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
    "source": "Watchtower synthesis run 181, document 25537",
    "reading": "drafted"
  }
};
