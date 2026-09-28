/* Commitment data — generated from commitments/commitment-seb-peat-extraction-5pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "seb-peat-extraction-5pc",
    "bank": "SEB Group",
    "commitment_number": 21,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's 5% Threshold on Peat Extraction",
    "short_title": "5% Threshold on Peat Extraction",
    "subject": "Peat Extraction for Fuel",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this restriction in its Sector Policy on Fossil Fuels, published in April 2026. Peat is the fuel nobody writes policies about — burned mainly in Finland, Estonia and Ireland, and more carbon-intensive per unit of energy than coal. SEB restricts it at the same 5% line as everything else.",
    "naive_reading": "it does not do business with companies that dig up peat to burn",
    "plain_language_note": "A fuel almost no bank names, at the same threshold as coal.",
    "sources_intro": "One policy document states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": null,
        "watchtower_document_id": 25537,
        "watchtower_institution": "seb_group",
        "synthesis_run": null,
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
        "intro": "It covers new and existing clients, with no exception.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "SEB Group avoids Business Relationships with thermal peat extraction Companies where more than 5% of revenue is derived from thermal peat extraction.",
        "plain_rendering": "SEB Group avoids Business Relationships with thermal peat extraction Companies where more than 5% of revenue is derived from thermal peat extraction.",
        "phrases": [
          {
            "id": "see-company",
            "label": "Companies",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              69,
              78
            ],
            "plain_range": [
              69,
              78
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "peat5",
            "label": "more than 5% of revenue",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              85,
              108
            ],
            "plain_range": [
              85,
              108
            ],
            "means": "This explains the threshold: peat extraction as a share of the company's revenue.",
            "lets_through": [
              "This wording lets through diversified energy groups below the line. In the Baltic and Nordic markets peat extraction often sits inside a utility with generation, heat and network businesses attached.",
              "Nothing else. There is no exception, no restriction to new business and no restriction to project financing in this commitment."
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
            "means": "This definition of “Company” is narrower than what it usually means. By a company we normally mean the business as a whole, parent and subsidiaries together. SEB fixes it to one legal entity, so the revenue test is applied to the entity SEB deals with and not to its group. A subsidiary can pass while its group earns heavily from peat extraction, so the rule blocks less.",
            "lets_through": [
              "This wording lets through financing to a subsidiary under the test, however much the rest of its group earns from peat extraction. The financing can then move inside the group."
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
      "peat",
      "upstream",
      "revenue-threshold",
      "client-level"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": false,
      "run": null,
      "document_id": 25537,
      "institution": "seb_group",
      "commitment_index": null,
      "commitment_id": null,
      "url": null,
      "agent_name": null,
      "schema": null,
      "synthesis_updated": null,
      "quotation_matched": false,
      "quotation_char_range": null,
      "summary_text": "Not recorded. Section 9 does not appear in synthesis run 181.",
      "scope": {
        "industry": {
          "themes": "peat",
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
          "relationship_status": "new_and_existing"
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
          "definition": "revenue derived from thermal peat extraction"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [],
      "weaknesses": null,
      "reviewer_notes": null,
      "not_in_synthesis_note": "Watchtower's record of this policy covers its coal and oil and gas sections only. Section 9, on peat, is not in it, so this page is built from the policy text alone."
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
        "inputs_source": "Bank.Green's reading of the policy text — no synthesis record exists for this commitment",
        "record_score": "holds",
        "weakness": false,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 0
      },
      "verdict_options": [
        {
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "The commitment is strong and the omission is the story; the page has to carry both.",
          "text": "On the wording, this sentence leaves nothing open.\n\nIt uses 5% of revenue from digging peat to burn. It covers the client as a whole, new and existing, including arranging bonds. There is no exception of any kind. Under our rating, that scores zero.\n\nPeat matters more than its obscurity suggests. Burning it releases more CO2 per unit of energy than coal. And peatlands are among the densest stores of carbon on land."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "This rule restricts peat extraction at the same threshold as coal mining.\n\nFor a Nordic and Baltic bank, peat is the right fuel to address. Finland and Estonia are the main users in the EU. The companies that burn it are exactly the kind of regional utility a bank like SEB might otherwise finance without a second thought.\n\nSo this is a rule aimed at the bank's own backyard."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "The only criticism available is the one that applies to every rule in this policy: the verb.\n\nSEB “avoids” these clients. The policy never says what avoiding means. And Appendix B sends exceptions to “established SEB Group internal processes”, with no committee named. That is as true here as anywhere else.\n\nBeyond that, there is nothing in the sentence to hold against it. The threshold is low. There is no exception. It is not limited to new business or to dedicated financing.\n\nSo this is a clean rule with a soft verb. Fix the verb, and there would be little left to criticise."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this document, so nothing sourced sits underneath these options. This commitment has no synthesis record at all — scope, thresholds and rating inputs are all Bank.Green's reading of the policy text.",
      "what_needs_to_change": [
        {
          "title": "Nothing, on the wording",
          "content": "This sentence has no exception and no limit to new business."
        },
        {
          "title": "Say whether existing clients are exited",
          "content": "The rule says SEB avoids these relationships, not that it ends them. Say which, for clients it already has."
        }
      ],
      "what_needs_to_change_closing": "Until then, clients SEB already has are not told whether they will be exited.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "No exception, no restriction to new business, no project-financing limit. A 5% line and nothing else.",
      "how_it_compares": {
        "text": "SEB restricts peat extraction on the same terms as coal mining: 5% of revenue, for new and existing clients.",
        "links": [
          {
            "slug": "seb-coal-mining-5pc",
            "title": "SEB's 5% Threshold on Coal Mining"
          }
        ]
      }
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "SEB avoids business relationships with companies earning more than 5% of revenue from thermal peat extraction. We have not yet reviewed what it financed against this commitment.",
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
    "source": "Policy text, document 25537 section 9 — NOT in synthesis run 181",
    "reading": "drafted"
  }
};
