/* Commitment data — generated from commitments/commitment-seb-coal-power-5pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "seb-coal-power-5pc",
    "bank": "SEB Group",
    "commitment_number": 5,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's 5% Threshold on Coal-Fired Power",
    "short_title": "5% Threshold on Coal-Fired Power",
    "subject": "Coal-Fired Power",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this restriction in its Sector Policy on Fossil Fuels, published in April 2026. It is the most explicit sentence in the document: existing relationships, new relationships, new projects and capacity expansions, all at a 5% revenue line — with one country carved out until 2030.",
    "naive_reading": "it does not do business with companies burning coal for power",
    "plain_language_note": "A rule that names everything it covers, and then names the exception.",
    "sources_intro": "One policy document states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=5",
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
          "passages": 3,
          "found": 3,
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
        "intro": "This rule spells out its own scope, which is rare. It also has the only country-specific exception in this document.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "SEB Group avoids Business Relationships, including existing and new Business Relationships, as well as New Projects and capacity expansions, with coal fired power generation Companies where more than 5% of revenues are derived from coal.",
        "plain_rendering": "SEB Group avoids Business Relationships, including existing and new Business Relationships, as well as New Projects and capacity expansions, with coal fired power generation Companies where more than 5% of revenues are derived from coal.",
        "phrases": [
          {
            "id": "including",
            "label": "including existing and new Business Relationships",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              41,
              90
            ],
            "plain_range": [
              41,
              90
            ],
            "means": "This explains the scope, stated rather than implied. This commitment reaches business already on the books as well as business not yet written.",
            "lets_through": [
              "This wording lets through very little, on its own terms.",
              "What it does not do is say when existing relationships end. Avoiding a relationship and exiting one are different acts, and the policy uses the first word."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "see-new-project",
            "label": "New Projects",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              103,
              115
            ],
            "plain_range": [
              103,
              115
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "see-company",
            "label": "Companies",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              174,
              183
            ],
            "plain_range": [
              174,
              183
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 3,
            "bank_definition": null
          },
          {
            "id": "5pc5",
            "label": "more than 5% of revenues",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              190,
              214
            ],
            "plain_range": [
              190,
              214
            ],
            "means": "This explains the threshold, measured on revenue from coal.",
            "lets_through": [
              "This wording lets through diversified utilities below the line. A large European utility with a shrinking coal fleet and a large renewables and networks business can sit under 5% while still burning coal.",
              "It also lets through German coal-fired generators, until 2030. Watchtower records a 15% threshold for Germany reducing to 5% from 2030, plus a further exception where authorities instruct a company to keep capacity running for energy security."
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
        "title": "The definition of “New Project”",
        "intro": "How SEB's policy defines it in its list of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“New Project” is capitalised in the wording above, and the list of definitions that explains it sits at the front of the policy."
        },
        "verbatim": "New Project — A New Project or capacity expansion at an identified location where any new commercial, industrial or infrastructure undertaking is taking place or any existing undertaking that is undergoing material change in output or function, which may result in changes to the operation’s sustainability impacts.",
        "plain_rendering": "A New Project is a new project or capacity expansion at an identified location where any new commercial, industrial or infrastructure undertaking is taking place, or any existing undertaking that is undergoing material change in output or function, which may result in changes to the operation’s sustainability impacts.",
        "phrases": [
          {
            "id": "new-project-material-change",
            "label": "any existing undertaking that is undergoing material change in output or function",
            "type": "undefined_term",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              162,
              243
            ],
            "plain_range": [
              166,
              247
            ],
            "means": "This definition of “New Project” is broader than what it usually means. By a new project we normally mean something built from scratch. SEB also counts capacity expansions, and any existing operation undergoing a material change in what it produces or does. So enlarging or converting an existing coal power plant counts too, and the rule blocks more.",
            "lets_through": [
              "This wording lets through changes to an existing coal power plant that SEB does not judge “material”. The policy gives no measure."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "broader"
      },
      {
        "index": 3,
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
            "means": "This definition of “Company” is narrower than what it usually means. By a company we normally mean the business as a whole, parent and subsidiaries together. SEB fixes it to one legal entity, so the revenue test is applied to the entity SEB deals with and not to its group. A subsidiary can pass while its group earns heavily from coal-fired power, so the rule blocks less.",
            "lets_through": [
              "This wording lets through financing to a subsidiary under the test, however much the rest of its group earns from coal-fired power. The financing can then move inside the group."
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
      "revenue-threshold",
      "client-level",
      "downstream",
      "capacity-expansion"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 181,
      "document_id": 25537,
      "institution": "seb_group",
      "commitment_index": 5,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=5",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-09",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        11453,
        11690
      ],
      "summary_text": "SEB Group restricts business relationships and project financing for coal-fired power generation companies deriving more than 5% of revenue from coal, with a temporary 15% threshold for Germany until 2030.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": "downstream",
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
          "condition": "For companies with coal-fired power generation in Germany, a 15% revenue threshold applies, reducing to 5% from 2030",
          "carve_out_kind": null,
          "carve_out_kind_source": null,
          "governance_process": null,
          "standing": false,
          "where": "recorded on this commitment only"
        },
        {
          "condition": "Germany energy security exception if instructed by authorities to maintain/operate capacity",
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
        "commitment_specific_carve_outs": 2,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "The scope statement and the dated carve-out are both better practice than anything else in the project, and the page should say so before it criticises.",
          "text": "This sentence states its own scope.\n\nIt names “Business Relationships, including existing and new Business Relationships, as well as New Projects and capacity expansions”. Four things in one line, leaving nothing to guesswork.\n\nThe German exception is also the right shape. It names the country, gives a reason and a number, and it ends. The threshold is 15% until 2030, then 5%.\n\nA bank that has to make an exception should make it like this."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "Two things sit beneath the good drafting.\n\nThe first is the verb. The sentence covers existing clients, and says the bank “avoids” them. Avoiding a relationship you are already in is not the same as leaving it. And the policy sets no date for leaving.\n\nThe second is the energy security exception. If German authorities tell a company to keep coal plants running, the rule gives way. Nothing limits how long that lasts. Nothing requires it to be disclosed or reported. Germany did tell operators to keep coal plants available during 2022 and 2023, so this is not hypothetical.\n\nNeither point undoes the sentence. Both are the difference between a rule and a result."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "SEB uses 5% of revenue. It covers existing and new clients, new projects and expansions, with a dated German exception.\n\nOn coal power, SEB's rule is strict and clear. That is worth saying plainly. A company with 10% of its revenue from coal power is out at SEB."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this document, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Publish who uses the German threshold",
          "content": "A named, dated exception for one country is far better than an open-ended one. Saying who relies on it would make it checkable."
        },
        {
          "title": "Say what avoiding a client means",
          "content": "The sentence covers existing clients but uses the word “avoids”. Leaving has a date; avoiding does not."
        },
        {
          "title": "Limit the energy security exception",
          "content": "An order from the authorities is a real situation. But nothing limits how long the exception lasts, or requires it to be disclosed."
        }
      ],
      "what_needs_to_change_closing": "Until then, a clear scope statement comes with a country exception.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Very little goes through on its own terms. It never says when an existing relationship ends, and German generators wait until 2030."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "SEB avoids business relationships with coal-fired power companies above 5% coal revenue, with a temporary 15% threshold for Germany. We have not yet reviewed what it financed against this commitment.",
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
