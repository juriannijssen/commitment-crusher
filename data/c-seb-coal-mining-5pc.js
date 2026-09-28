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
              "This wording lets through whatever avoiding turns out to mean in practice. The policy never defines it, and on its face it is weaker than a prohibition.",
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
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "The gap between how strong the threshold is and how soft the framing is, is the whole of this document in one sentence.",
          "text": "SEB wrote a 5% client threshold, and paired it with a soft verb.\n\nThe threshold is 5% of revenue from coal mining. It covers existing clients, not just new ones.\n\nThen the sentence says the bank “avoids” such clients. It does not say it will not serve them, or will end the relationship. Every restriction in this policy uses that verb, and the policy never defines it. Appendix B adds that exceptions “shall be handled according to established SEB Group internal processes”. No committee is named, and nothing is reported.\n\nA number that strong deserves a verb that binds."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "This is a serious rule.\n\n5% is low enough to catch mining groups with many businesses, not just companies that only mine coal. It applies to the client as a whole, not to single deals. It covers existing clients. And arranging bonds counts too.\n\nThe exceptions are narrow and specific. There is supply chain finance for coal used in steel-making, small retail loans under EUR 1 million, and two named asset management firms. None of them is an open door.\n\nThis is what a client restriction looks like when a bank means it."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "SEB excludes coal mining clients above 5% of revenue.\n\nThe reach is wide too. The rule covers existing clients in the sentence itself.\n\nWhere it is weaker is the wording. “Will not provide” would be a harder promise than “avoids”. That is the trade-off, and readers should see both sides of it."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this document, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Say what “avoids” means",
          "content": "Every restriction in this policy uses the word “avoids”. A policy that says what it will not do can be checked; one that says what it avoids cannot."
        },
        {
          "title": "Close the supply chain exception",
          "content": "Supply chain finance for coal going to steel makers is exempt, with no cap and no end date."
        },
        {
          "title": "Name the internal process",
          "content": "Appendix B sends exceptions to “established SEB Group internal processes”. Naming the body, and publishing how often it says yes, would cost nothing."
        }
      ],
      "what_needs_to_change_closing": "Until then, a 5% client threshold is paired with a verb that does not bind.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "A 5% line is low and reaches the coal-heavy; avoiding is never defined and deviations go to internal procedure."
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
    "built": "2026-09-28",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 181, document 25537",
    "reading": "drafted"
  }
};
