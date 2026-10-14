/* Commitment data — generated from commitments/commitment-seb-arctic-oil-gas.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "seb-arctic-oil-gas",
    "bank": "SEB Group",
    "commitment_number": 10,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's Commitment on Arctic Oil & Gas",
    "short_title": "Commitment on Arctic Oil & Gas",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this restriction in its Sector Policy on Fossil Fuels, published in April 2026. It covers companies extracting oil and gas in the Arctic, in two sentences. One covers the Arctic outside Norway's economic zone, and the other covers the Arctic inside it.",
    "naive_reading": "it does not do business with companies drilling for oil and gas in the Arctic",
    "plain_language_note": "The strict half of a rule that is split by jurisdiction.",
    "sources_intro": "This commitment comes from a single policy document, and we quote two sentences from it below.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=10",
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
          "passages": 4,
          "found": 4,
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
        "verbatim": "Outside of the Norwegian Economic Zone, SEB Group avoids Business Relationships with Companies with more than 5% of revenue derived from extraction of Oil and Gas in the Arctic Area.",
        "plain_rendering": "Outside of the Norwegian Economic Zone, SEB Group avoids Business Relationships with Companies with more than 5% of revenue derived from extraction of Oil and Gas in the Arctic Area.",
        "phrases": [
          {
            "id": "outside",
            "label": "Outside of the Norwegian Economic Zone",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              0,
              38
            ],
            "plain_range": [
              0,
              38
            ],
            "means": "This explains where this version of the restriction applies: everywhere in the Arctic Area except Norway's own waters.",
            "lets_through": [
              "This wording lets through nothing within its own area, which makes it the strict half of the rule."
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
              85,
              94
            ],
            "plain_range": [
              85,
              94
            ],
            "means": "SEB defines a company as one legal entity, which is the usual meaning. International accounting standards call the parent and its subsidiaries together a group. So the revenue test is applied to the entity SEB deals with and not to its group. A subsidiary can pass while its group earns heavily from Arctic oil and gas, so the rule blocks less.",
            "lets_through": [
              "This wording lets through financing to a subsidiary below the line, however much the rest of its group earns from Arctic oil and gas. The financing can then move inside the group."
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
              100,
              123
            ],
            "plain_range": [
              100,
              123
            ],
            "means": "This explains the threshold: Arctic oil and gas extraction as a share of the company's revenue. At 5%, it is a low bar.",
            "lets_through": [
              "This wording lets through a company whose Arctic oil and gas extraction is under 5% of its revenue, however large that business is."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "see-arctic-area",
            "label": "Arctic Area",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              170,
              181
            ],
            "plain_range": [
              170,
              181
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "definition",
        "source_id": "seb2026",
        "title": "The definition of “Arctic Area”",
        "intro": "SEB's policy defines this term in its list of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Arctic Area” is capitalised in the wording above, and the list of definitions that explains it sits at the front of the policy."
        },
        "verbatim": "Arctic Area — The geographic area north of the Arctic Circle (N 66°33′), defined as a Sensitive Environmental Area.",
        "plain_rendering": "The Arctic Area is the geographic area north of the Arctic Circle (N 66°33′), defined as a Sensitive Environmental Area.",
        "phrases": [
          {
            "id": "arctic-circle-line",
            "label": "north of the Arctic Circle (N 66°33′)",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              34,
              71
            ],
            "plain_range": [
              39,
              76
            ],
            "means": "This definition of “Arctic Area” is narrower than what it usually means. Where the Arctic starts is a choice. In the strictest sense, it is everything north of the Arctic Circle. The Arctic Council's monitoring program uses an area that reaches much farther south. SEB takes the strictest line: the Arctic Circle itself. Drilling just south of that line is not in the Arctic Area, however cold and remote it is, so the rule blocks less.",
            "lets_through": [
              "This wording lets through oil and gas extraction just south of the Arctic Circle. Definitions built on the tree line or permafrost would count that area as Arctic."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "ordinary_source": [
              {
                "body": "National Oceanic and Atmospheric Administration",
                "title": "NOAA Arctic Zone FAQ",
                "term": "Where is the Arctic?",
                "url": "https://www.pmel.noaa.gov/arctic-zone/faq.html#1"
              },
              {
                "body": "Arctic Monitoring and Assessment Programme",
                "title": "AMAP, Geographical coverage",
                "url": "https://www.amap.no/about/geographical-coverage"
              }
            ]
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "narrower"
      },
      {
        "index": 3,
        "role": "rule",
        "source_id": "seb2026",
        "title": "The Norwegian exception",
        "intro": "The next sentence covers the same ocean and the same activity, and sets a different number for the waters Norway drills in.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "In the Arctic Area of the Norwegian Economic Zone, SEB Group avoids Business Relationships with Companies with a material share of global revenue (>15%) derived from exploration and production of Arctic Area Oil & Gas including on the Norwegian Continental Shelf (NCS).",
        "plain_rendering": "In the Arctic Area of the Norwegian Economic Zone, SEB Group avoids Business Relationships with Companies with a material share of global revenue (>15%) derived from exploration and production of Arctic Area Oil & Gas including on the Norwegian Continental Shelf (NCS).",
        "phrases": [
          {
            "id": "see-arctic-area-3",
            "label": "Arctic Area",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              7,
              18
            ],
            "plain_range": [
              7,
              18
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "15pc",
            "label": "a material share of global revenue (>15%)",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              111,
              152
            ],
            "plain_range": [
              111,
              152
            ],
            "means": "This explains the threshold inside Norwegian waters: a “material share” means more than 15% of global revenue.",
            "lets_through": [
              "This wording lets through every large Norwegian and international producer on the Norwegian Continental Shelf below 15% of global revenue. For a company with worldwide operations, that is a high bar to cross.",
              "Everywhere else in the Arctic, the rule above uses 5%."
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
      "arctic",
      "upstream",
      "revenue-threshold",
      "client-level"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 181,
      "document_id": 25537,
      "institution": "seb_group",
      "commitment_index": 10,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=10",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-09",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        13444,
        13626
      ],
      "summary_text": "Outside the Norwegian Economic Zone, SEB Group restricts business relationships with companies deriving more than 5% of revenue from oil and gas extraction in the Arctic Area.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "arctic"
          ],
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": false
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
      "exceptions": [],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 20 fields corrected]\nCHANGES:\n- Corrected certainty ratings across all commitments from null to certainty objects with rating '5' to ensure schema compliance and reflect high confidence in extraction.",
      "not_in_synthesis_note": null,
      "also_covers": [
        {
          "commitment_index": 11,
          "commitment_id": null,
          "url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=11"
        }
      ]
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
        "record_score": "holds",
        "weakness": false,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 0
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "It changes at a sea border: in Norwegian waters, the line is 15% of a producer's worldwide revenue. A producer with fields across the world can drill there and stay below it.",
      "actual_reading": "it does not do business with companies earning more than 5% of their revenue from Arctic oil and gas, except in Norwegian waters, where the line is 15% of worldwide revenue",
      "gaps": [
        {
          "title": "Norwegian waters have a higher line",
          "phrase_refs": [
            "15pc"
          ],
          "text": "In the Norwegian part of the Arctic, SEB measures Arctic oil and gas against the company's worldwide revenue, and the line is 15%. A producer with operations across the world can stay below it."
        },
        {
          "title": "A company in the group below the line",
          "phrase_refs": [
            "see-company"
          ],
          "text": "SEB applies the test to the one legal entity it deals with, not to its group. A subsidiary with little Arctic revenue can borrow, and the financing can move within the group."
        },
        {
          "title": "Just south of the Arctic Circle",
          "phrase_refs": [
            "arctic-circle-line"
          ],
          "text": "The “Arctic Area” starts at the Arctic Circle, so a field just south of that line is outside it, however cold and remote it is."
        }
      ],
      "in_practice": "Take a company that drills for oil and gas in the Russian or Alaskan Arctic. If more than 5% of its revenue comes from that drilling, SEB avoids doing business with it. The sentence is not limited to new clients or to financing for a named project.\n\nMove the same company to the Norwegian part of the Arctic, and the test changes. SEB now looks at the share of the company's worldwide revenue that comes from Arctic oil and gas, and the line is 15%, not 5%. A producer with fields across the world can run large Arctic operations off Norway and stay under that line.\n\nThen there is the question of who SEB measures. The policy defines a “Company” as one legal entity, not the whole group. A group can borrow through a subsidiary whose own Arctic revenue is small, and that subsidiary passes the test. The financing can then move inside the group.\n\nFinally, in this policy the Arctic starts at the Arctic Circle, so a field just south of that line is not in the “Arctic Area.” Other common ways of drawing the Arctic extend further south.\n\nSo what this commitment stops is business with companies that earn a real share of their revenue from Arctic drilling outside Norway. In Norwegian waters, the line is much easier to stay under.",
      "gets_right": "Outside Norwegian waters, the line is low, at 5% of revenue. It also covers the whole relationship with the company, not only new clients or financing for a named project."
    },
    "featured": {
      "rank": 7,
      "kind": "a definition and a national exception",
      "because": "Four passages: where the Arctic starts is a choice, and Norwegian waters get their own 15% line."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "SEB avoids business relationships with companies above 5% Arctic oil and gas revenue outside Norwegian waters. We have not reviewed its financing against this commitment yet.",
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
