/* Commitment data — generated from commitments/commitment-seb-peat-power.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "seb-peat-power",
    "bank": "SEB Group",
    "commitment_number": 22,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's Commitment on Peat-Fired Power",
    "short_title": "Commitment on Peat-Fired Power",
    "subject": "New Clients in Peat-Fired Power",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this restriction in its Sector Policy on Fossil Fuels, published in April 2026. It covers companies earning more than 5% of their revenue from peat-fired power. It does so in two sentences: one that applies now, and one that applies from 2030.",
    "naive_reading": "it does not do business with companies burning peat for power",
    "plain_language_note": "New clients only, and a companion commitment that closes the gap in 2030.",
    "sources_intro": "This commitment comes from a single policy document, and we quote two sentences from it below.",
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
        "intro": "This is where SEB Group sets out this commitment.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "SEB Group avoids New Business Relationships with Companies where more than 5% of revenue is derived from peat fired power generation.",
        "plain_rendering": "SEB Group avoids New Business Relationships with Companies where more than 5% of revenue is derived from peat fired power generation.",
        "phrases": [
          {
            "id": "newbr22",
            "label": "New Business Relationships",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              17,
              43
            ],
            "plain_range": [
              17,
              43
            ],
            "means": "This explains who this commitment applies to: companies that are not clients yet.",
            "lets_through": [
              "Adding the word “New” means every peat-fired generator SEB already banks keeps its financing."
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
              49,
              58
            ],
            "plain_range": [
              49,
              58
            ],
            "means": "SEB defines a company as one legal entity, which is the usual meaning. International accounting standards call the parent and its subsidiaries together a group. So the revenue test is applied to the entity SEB deals with and not to its group. A subsidiary can pass while its group earns heavily from peat-fired power, so the rule blocks less.",
            "lets_through": [
              "This wording lets through financing to a subsidiary below the line, however much the rest of its group earns from peat-fired power. The financing can then move inside the group."
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
            "id": "five-per-cent",
            "label": "more than 5% of revenue",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              65,
              88
            ],
            "plain_range": [
              65,
              88
            ],
            "means": "This explains the threshold: peat-fired power generation as a share of the company's revenue. At 5%, it is a low bar.",
            "lets_through": [
              "This wording lets through a company whose peat-fired power generation is under 5% of its revenue, however large that business is."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "rule",
        "source_id": "seb2026",
        "title": "The date it widens",
        "intro": "The next sentence extends the same test from new business to every business relationship.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "From 2030 SEB Group will avoid Business Relationships with Companies where more than 5% of revenue is derived from peat fired power generation.",
        "plain_rendering": "From 2030 SEB Group will avoid Business Relationships with Companies where more than 5% of revenue is derived from peat fired power generation.",
        "phrases": [
          {
            "id": "from2030",
            "label": "From 2030",
            "type": "undefined_term",
            "verbatim_range": [
              0,
              9
            ],
            "plain_range": [
              0,
              9
            ],
            "means": "The words “From 2030” set the date the restriction widens. Until then, existing peat-fired generators are outside the client rule.",
            "lets_through": [
              "This wording lets through existing relationships until 2030, with no baseline, no interim milestone, and no reporting commitment attached.",
              "The date does not promise an exit. It says the rule starts applying to every business relationship."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "five-per-cent-2",
            "label": "more than 5% of revenue",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              75,
              98
            ],
            "plain_range": [
              75,
              98
            ],
            "means": "This explains the threshold: peat-fired power generation as a share of the company's revenue. At 5%, it is a low bar.",
            "lets_through": [
              "This wording lets through a company whose peat-fired power generation is under 5% of its revenue, however large that business is."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "peat",
      "downstream",
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
          "value_chain": "downstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": "new"
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
          "definition": "revenue derived from peat fired power generation"
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
      "strength_reason": "It mostly does what it sounds like. What gets through is at the edges, and the biggest part of it, the years until 2030, is written into the policy.",
      "actual_reading": "it does not take on new business of any kind with companies earning more than 5% of their revenue from peat-fired power, and from 2030 not with its existing clients either",
      "gaps": [
        {
          "title": "Existing clients, until 2030",
          "phrase_refs": [
            "from2030"
          ],
          "text": "Until 2030, the rule covers new clients only, so a peat-fired generator SEB already banks keeps its financing until then, with no steps in between."
        },
        {
          "title": "A company in the group below the line",
          "phrase_refs": [
            "see-company"
          ],
          "text": "SEB applies the 5% test to the one company it deals with, not to its group. A company in the group with little peat revenue can borrow, and the financing can move within the group."
        }
      ],
      "in_practice": "For a company that earns most of its revenue from burning peat, the door to new business with SEB is closed now. That means every kind of business, not only financing for a named project, and there is no exception. If SEB already banks the company, the door closes in 2030. That is roughly what a reader would expect this commitment to mean.\n\nThe line is low. A company only has to earn more than 5% of its revenue from peat-fired power to be caught.\n\nUntil 2030, existing clients carry on as before, and the policy sets no steps along the way. Nor does it say whether existing clients lose their financing in 2030, or only stop getting new financing.\n\nA group can also borrow through one of its companies that earns little from peat. Whether that works depends on how the group is organized, and the policy does not deal with it.\n\nNone of this is hidden, since the 2030 date is in the next sentence of the policy."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "SEB avoids new business relationships with companies above 5% peat-fired power revenue. We have not reviewed its financing against this commitment yet.",
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
    "source": "Policy text, document 25537 section 9 — NOT in synthesis run 181",
    "reading": "drafted"
  }
};
