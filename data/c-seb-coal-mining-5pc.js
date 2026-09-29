/* Commitment data — generated from commitments/commitment-seb-coal-mining-5pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "seb-coal-mining-5pc",
    "bank": "SEB Group",
    "commitment_number": 1,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's 5% Threshold on Coal Mining",
    "short_title": "5% Threshold on Coal Mining",
    "subject": "Coal Mining",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this restriction in its Sector Policy on Fossil Fuels, published in April 2026. A company earning more than 5% of its revenue from digging coal is one SEB avoids doing business with at all — not just new business, and not just project finance.",
    "naive_reading": "it does not do business with coal mining companies",
    "plain_language_note": "The lowest client threshold in anything we have reviewed, and it reaches the whole relationship.",
    "sources_intro": "One policy document states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=1",
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
        "intro": "It covers new and existing clients, and every kind of financing.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "SEB Group avoids Business Relationships with Companies where more than 5% of revenue is derived from coal mining.",
        "plain_rendering": "SEB Group avoids Business Relationships with Companies where more than 5% of revenue is derived from coal mining.",
        "phrases": [
          {
            "id": "avoids",
            "label": "avoids",
            "type": "escape_hatch",
            "verbatim_range": [
              10,
              16
            ],
            "plain_range": [
              10,
              16
            ],
            "means": "The word “avoids” is the verb the whole policy is built on. Not “will not provide”, not “excludes” — avoids.",
            "lets_through": [
              "This wording lets through whatever avoiding turns out to mean in practice. On its face it is weaker than a prohibition.",
              "The appendix confirms the softness: deviations from restrictions “shall be handled according to established SEB Group internal processes”, and no process, committee or threshold is named."
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
            "id": "5pc",
            "label": "more than 5% of revenue",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              61,
              84
            ],
            "plain_range": [
              61,
              84
            ],
            "means": "This explains the threshold. More than 5% of the company's revenue must come from coal mining before this commitment applies.",
            "lets_through": [
              "This wording lets through diversified miners below the line. 5% is low, but a large diversified group can still mine a great deal of coal and stay under it.",
              "It also lets through everything under the policy-wide floor. The policy applies only to companies above 5% of revenue from the fossil fuel sector as a whole, so the same number governs whether the policy applies at all."
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
            "means": "This definition of “Company” is narrower than what it usually means. By a company we normally mean the business as a whole, parent and subsidiaries together. SEB fixes it to one legal entity, so the revenue test is applied to the entity SEB deals with and not to its group. A subsidiary can pass while its group earns heavily from coal mining, so the rule blocks less.",
            "lets_through": [
              "This wording lets through financing to a subsidiary under the test, however much the rest of its group earns from coal mining. The financing can then move inside the group."
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
      "thermal-coal",
      "metallurgical-coal",
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
      "commitment_index": 1,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=1",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-09",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        10970,
        11083
      ],
      "summary_text": "SEB Group restricts corporate business relationships with companies deriving more than 5% of revenue from coal mining, excluding supply chain finance for metallurgical coal to steel manufacturing.",
      "scope": {
        "industry": {
          "themes": "coal",
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
          "condition": "Excludes supply chain finance for metallurgical coal to steel manufacturing",
          "carve_out_kind": null,
          "carve_out_kind_source": null,
          "governance_process": null,
          "standing": false,
          "where": "recorded on this commitment only"
        },
        {
          "condition": "Does not apply to Retail counterparties with credit exposure below EUR 1 million",
          "carve_out_kind": null,
          "carve_out_kind_source": null,
          "governance_process": null,
          "standing": false,
          "where": "recorded on this commitment only"
        },
        {
          "condition": "Excludes SEB Asset Management Holding AB and its subsidiaries and Gamla Livförsäkrings AB SEB Trygg Liv",
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
      "strength": "holds",
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
      "strength_reason": "It mostly does what it sounds like: companies with a real coal mining business are kept out, new clients and existing ones. What gets through is large groups where coal is a small share, and groups that borrow through a company with little coal.",
      "actual_reading": "it does not do business with companies earning more than 5% of their revenue from coal mining, measured on the one legal entity it deals with rather than the group",
      "gaps": [
        {
          "title": "Avoiding, not refusing",
          "phrase_refs": [
            "avoids"
          ],
          "text": "SEB says it “avoids” these companies. It does not say it will refuse them, or by when it will end a relationship it already has."
        },
        {
          "title": "A company in the group below the line",
          "phrase_refs": [
            "company-legal-entity"
          ],
          "text": "SEB applies the 5% test to the one legal entity it deals with, not to its group. A subsidiary with little coal revenue can borrow, and the financing can move within the group."
        },
        {
          "title": "Large groups where coal is a small share",
          "phrase_refs": [
            "5pc"
          ],
          "text": "The test is a share of revenue, not an amount of coal. A large mining group can dig a great deal of coal and still stay under 5%."
        }
      ],
      "in_practice": "Take a company that mines coal and earns 20% of its revenue from it. SEB avoids doing business with it. The sentence is not limited to new clients or to financing for a named project. It covers the whole relationship, and the line is low: more than 5% of revenue is enough.\n\nNow take a large mining group that digs copper, iron ore and coal. If coal is 4% of its revenue, the group is below the line. It may still mine millions of tonnes of coal a year. Only the share counts, not the size.\n\nThe test is also applied to one legal entity. The policy defines a “Company” as a single legal entity, not a group. So a coal-heavy group can borrow through a subsidiary that does little mining. The subsidiary passes the test, and the financing can move inside the group.\n\nAnd the verb is “avoids”. SEB does not say it will turn these companies away, or end the relationships it already has by a set date. A coal miner that is already a client is given no timetable.\n\nSo what is left is a company that mines coal as a real part of its business, and deals with SEB in its own name. That company is kept out. Everything else depends on how SEB reads “avoids”."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "SEB avoids business relationships with companies earning more than 5% of revenue from coal mining. We have not yet reviewed what it financed against this commitment.",
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
