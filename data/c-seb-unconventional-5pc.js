/* Commitment data — generated from commitments/commitment-seb-unconventional-5pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "seb-unconventional-5pc",
    "bank": "SEB Group",
    "commitment_number": 12,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's 5% Threshold on Unconventional Oil",
    "short_title": "5% Threshold on Unconventional Oil",
    "subject": "Unconventional Oil",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this restriction in its Sector Policy on Fossil Fuels, published in April 2026. Unconventional oil — oil sands, shale, coalbed methane — above 5% of revenue is a relationship SEB avoids, with one region carved out and that carve-out closing in 2030.",
    "naive_reading": "it does not do business with companies producing oil from oil sands or shale",
    "plain_language_note": "An exception that names its reason, its region, and the year it ends.",
    "sources_intro": "One policy document states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=12",
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
        "intro": "This is where SEB Group makes the commitment.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "SEB Group avoids Business Relationships with Companies with more than 5% of revenues derived from Unconventional Oil, with exception of the Baltic states where, due to energy security, SEB Group works with Companies to transition to low carbon and renewable alternatives.",
        "plain_rendering": "SEB Group avoids Business Relationships with Companies with more than 5% of revenues derived from Unconventional Oil, with exception of the Baltic states where, due to energy security, SEB Group works with Companies to transition to low carbon and renewable alternatives.",
        "phrases": [
          {
            "id": "see-company",
            "label": "Companies",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              45,
              54
            ],
            "plain_range": [
              45,
              54
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "five-per-cent",
            "label": "more than 5% of revenues",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              60,
              84
            ],
            "plain_range": [
              60,
              84
            ],
            "means": "This explains the threshold: unconventional oil as a share of the company's revenue. 5% is a low bar.",
            "lets_through": [
              "A company whose unconventional oil is under 5% of its revenue, however large that business is in absolute terms."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "baltic",
            "label": "with exception of the Baltic states",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              118,
              153
            ],
            "plain_range": [
              118,
              153
            ],
            "means": "This explains the carve-out, named in the sentence that creates the restriction: Estonia, Latvia and Lithuania — where oil shale is a domestic energy source.",
            "lets_through": [
              "This wording lets through companies above 5% unconventional oil revenue operating in the Baltic states, until 2030.",
              "What it does not do is hide. The reason is stated (energy security), the region is named, the intention is stated (transition to low carbon and renewable alternatives), and the policy ends it in 2030."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "definition",
        "source_id": "seb2026",
        "title": "The definition of “Company”",
        "intro": "How SEB's policy defines it in its list of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Company” is capitalised in the wording above, and the list of definitions that explains it sits at the front of the policy."
        },
        "verbatim": "Company — Legal corporate entity conducting business.",
        "plain_rendering": "A Company is a legal corporate entity conducting business.",
        "phrases": [
          {
            "id": "company-legal-entity",
            "label": "corporate entity",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              16,
              32
            ],
            "plain_range": [
              21,
              37
            ],
            "means": "This definition of “Company” is narrower than what it usually means. By a company we normally mean the business as a whole, parent and subsidiaries together. SEB fixes it to one legal entity, so the revenue test is applied to the entity SEB deals with and not to its group. A subsidiary can pass while its group earns heavily from unconventional oil, so the rule blocks less.",
            "lets_through": [
              "This wording lets through financing to a subsidiary under the test, however much the rest of its group earns from unconventional oil. The financing can then move inside the group."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "narrower"
      }
    ],
    "glossary_refs": [
      "unconventional",
      "oil-sands",
      "shale",
      "revenue-threshold",
      "client-level"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 181,
      "document_id": 25537,
      "institution": "seb_group",
      "commitment_index": 12,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=12",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-09",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        13937,
        14208
      ],
      "summary_text": "SEB Group restricts business relationships with companies deriving more than 5% of revenue from unconventional oil, with a temporary exception for Baltic states until 2030.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "oil_sands",
            "shale",
            "coalbed methane"
          ],
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
      "exceptions": [
        {
          "condition": "Temporary exception for Baltic states due to energy security, working with companies to transition to alternatives until 2030",
          "carve_out_kind": null,
          "carve_out_kind_source": null,
          "governance_process": null,
          "standing": false,
          "where": "recorded on this commitment only"
        }
      ],
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
        "commitment_specific_carve_outs": 1,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 1
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "It stops at the Baltic border. Companies there above 5% keep their business with SEB until 2030, and a group can borrow through a company below the line.",
      "how_it_compares": {
        "text": "SEB's 2030 phase-out, in the next sentence, ends the Baltic exception and phases out all client relationships above 5%.",
        "links": [
          {
            "slug": "seb-unconventional-2030-phaseout",
            "title": "SEB's 2030 Unconventional Oil and Gas Phase-Out"
          }
        ]
      },
      "actual_reading": "it does not do business with companies earning more than 5% of their revenue from unconventional oil, except in the Baltic states, where it keeps working with them until 2030",
      "gaps": [
        {
          "title": "The Baltic states, until 2030",
          "phrase_refs": [
            "baltic"
          ],
          "text": "Companies above 5% in Estonia, Latvia and Lithuania are exempt until 2030. SEB says it works with them to move to low-carbon alternatives, and sets no steps along the way."
        },
        {
          "title": "A company in the group below the line",
          "phrase_refs": [
            "company-legal-entity"
          ],
          "text": "SEB applies the 5% test to the one legal entity it deals with, not to its group. A subsidiary with little unconventional revenue can borrow, and the financing can move within the group."
        }
      ],
      "in_practice": "Unconventional oil includes oil from oil sands and oil shale, and oil produced by fracking. Take a Canadian oil sands producer. If more than 5% of its revenue comes from unconventional oil, SEB avoids doing business with it. That covers the whole relationship, not only new business.\n\nNow take an oil shale company in Estonia. Oil shale is a rock that is burned for power or processed into oil, and Estonia relies on it for energy. The Baltic states are exempt until 2030. There, SEB says it works with these companies to move them to low-carbon and renewable alternatives. The sentence sets no steps along the way and asks for no report on progress. SEB has a large banking business in the Baltic states, so the exception covers a market where it is active.\n\nA group can also borrow through a company with little unconventional oil revenue. The policy defines a “Company” as one legal entity, not a group. That company passes the test, and the financing can move inside the group.\n\nSo what the commitment stops is business with unconventional oil companies outside the Baltic states. Inside them, it waits until 2030.",
      "gets_right": "The Baltic exception is named, gives its reason and ends in 2030. And outside it, the sentence covers the whole relationship at 5% of revenue."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "SEB avoids business relationships with companies above 5% unconventional oil revenue, with a temporary exception for the Baltic states. We have not yet reviewed what it financed against this commitment.",
    "headline_figure": {
      "display": "Not yet checked",
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-09-29",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 181, document 25537",
    "reading": "drafted"
  }
};
