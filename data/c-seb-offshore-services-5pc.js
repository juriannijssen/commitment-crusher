/* Commitment data — generated from commitments/commitment-seb-offshore-services-5pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "seb-offshore-services-5pc",
    "bank": "SEB Group",
    "commitment_number": 9,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's 5% Threshold on Offshore Services",
    "short_title": "5% Threshold on Offshore Services",
    "subject": "Offshore Oil and Gas Services",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this restriction in its Sector Policy on Fossil Fuels, published in April 2026. Offshore services are the vessels, rigs, supply boats and subsea contractors that make offshore production possible. Above 5% of revenue, SEB will not provide new financial services — unless the company is an oil and gas producer, in which case a different rule applies.",
    "naive_reading": "it does not do business with the companies that service offshore oil rigs",
    "plain_language_note": "A rule about the contractors, with a carve-out that sends the biggest of them elsewhere.",
    "sources_intro": "One policy document states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=9",
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
        "intro": "This is where SEB Group makes the commitment.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "SEB Group avoids providing new Financial Services to Offshore Services Companies where revenue from Offshore Services represents more than 5% of the Company’s revenue.",
        "plain_rendering": "SEB Group avoids providing new Financial Services to Offshore Services Companies where revenue from Offshore Services represents more than 5% of the Company’s revenue.",
        "phrases": [
          {
            "id": "new-fs",
            "label": "new Financial Services",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              27,
              49
            ],
            "plain_range": [
              27,
              49
            ],
            "means": "This explains what is withheld: services not yet provided.",
            "lets_through": [
              "Adding the word “new” means everything already in place stays. An offshore contractor with existing facilities keeps them.",
              "It also leaves the relationship itself in place. SEB can stay the company's bank and keep the services it already provides, while declining new ones."
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
              71,
              80
            ],
            "plain_range": [
              71,
              80
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "unless",
            "label": "more than 5% of the Company’s revenue",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              129,
              166
            ],
            "plain_range": [
              129,
              166
            ],
            "means": "This explains the threshold, on revenue from offshore services specifically.",
            "lets_through": [
              "This wording lets through diversified marine and engineering groups below the line. A large offshore contractor with a big renewables installation business can fall under 5%."
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
            "means": "This definition of “Company” is narrower than what it usually means. By a company we normally mean the business as a whole, parent and subsidiaries together. SEB fixes it to one legal entity, so the revenue test is applied to the entity SEB deals with and not to its group. A subsidiary can pass while its group earns heavily from offshore services, so the rule blocks less.",
            "lets_through": [
              "This wording lets through financing to a subsidiary under the test, however much the rest of its group earns from offshore services. The financing can then move inside the group."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "narrower"
      },
      {
        "index": 3,
        "role": "exception",
        "source_id": "seb2026",
        "title": "When it may not apply",
        "intro": "A footnote takes one kind of company out of this rule.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Unless the Company is an oil & gas exploration and production Company and therefore subject to the other oil & gas production restrictions in this chapter.",
        "plain_rendering": "Unless the Company is an oil & gas exploration and production Company and therefore subject to the other oil & gas production restrictions in this chapter.",
        "phrases": [
          {
            "id": "producer-exception",
            "label": "Unless the Company is an oil & gas exploration and production Company",
            "type": "escape_hatch",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              0,
              69
            ],
            "plain_range": [
              0,
              69
            ],
            "means": "This explains who is left out: companies that produce oil and gas. The footnote sends them to the bank's restrictions on production instead.",
            "lets_through": [
              "This wording lets through an oil and gas producer that runs its own rigs and supply ships. Its offshore work is not tested against this 5% line."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "upstream",
      "offshore",
      "revenue-threshold",
      "client-level"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 181,
      "document_id": 25537,
      "institution": "seb_group",
      "commitment_index": 9,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=9",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-09",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        13245,
        13412
      ],
      "summary_text": "SEB Group restricts new financial services to offshore services companies deriving more than 5% of revenue from offshore services, unless they are an oil & gas exploration and production company.",
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
          "relationship_status": "new_and_existing",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": false,
          "transaction_status": "new"
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
          "condition": "Unless the company is an oil & gas exploration and production company subject to other restrictions",
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
        "new_business_only": true,
        "total": 2
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "It stops new services only, so everything already in place stays. And a company that also produces oil and gas is left out, however large its offshore fleet.",
      "how_it_compares": {
        "text": "Excepted producers fall under SEB's 5% threshold for oil and gas producers, which covers new clients only. So a large producer running its own offshore fleet moves from a rule about all new services to a rule about new clients. The bigger the company, the softer the test it lands on.",
        "links": [
          {
            "slug": "seb-og-upstream-5pc",
            "title": "SEB's 5% Threshold on Oil and Gas Producers"
          }
        ]
      },
      "actual_reading": "it does not provide new financial services to companies earning more than 5% of their revenue from offshore oil and gas services, unless they produce oil and gas themselves",
      "gaps": [
        {
          "title": "What is already in place stays",
          "phrase_refs": [
            "new-fs"
          ],
          "text": "The commitment covers new financial services only. A contractor keeps the loans and facilities it already has, and SEB can stay its bank."
        },
        {
          "title": "Producers with their own fleets",
          "phrase_refs": [
            "producer-exception"
          ],
          "text": "A company that produces oil and gas is left out of this commitment. That holds however much of its revenue comes from running rigs and supply ships."
        },
        {
          "title": "A company in the group below the line",
          "phrase_refs": [
            "company-legal-entity"
          ],
          "text": "SEB applies the 5% test to the one legal entity it deals with, not to its group. A subsidiary with little offshore revenue can borrow, and the financing can move within the group."
        }
      ],
      "in_practice": "Offshore services are the rigs, supply ships, seismic vessels and underwater contractors that offshore oil and gas production depends on.\n\nTake a drilling contractor that earns most of its revenue from offshore oil fields. SEB will not provide it new financial services. But the loans and facilities it already has from SEB stay in place. The commitment is about what comes next, not what is already on the books. SEB can stay the contractor's bank while declining anything new.\n\nNow take an oil and gas producer that runs its own fleet of rigs and supply ships. Its offshore work may be far above 5% of its revenue. But because it produces oil and gas, this commitment does not apply to it.\n\nA large marine group with a big offshore wind business is also outside it. If its oil and gas services are under 5% of its revenue, SEB can bank it.\n\nThe policy defines a “Company” as one legal entity, not a group. A group can borrow through a subsidiary with little offshore oil and gas work. The financing can then move inside the group.\n\nSo what is left is a specialist offshore contractor, dealing with SEB in its own name, asking for something new. That company is turned down.",
      "gets_right": "The line is low. A contractor only needs more than 5% of its revenue from offshore oil and gas services to be caught. And it covers new services to the company as a whole, not only financing for a named project."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "SEB avoids new financial services to offshore services companies above 5% of revenue, unless they are oil and gas producers. We have not yet reviewed what it financed against this commitment.",
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
