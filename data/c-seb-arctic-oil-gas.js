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
    "intro": "SEB sets out this restriction in its Sector Policy on Fossil Fuels, published in April 2026. It covers companies extracting oil and gas in the Arctic, and it is written in two sentences: one for the Arctic outside Norway's economic zone, one for the Arctic inside it.",
    "naive_reading": "it does not do business with companies drilling for oil and gas in the Arctic",
    "plain_language_note": "The strict half of a rule that is split by jurisdiction.",
    "sources_intro": "One policy document states this commitment, in two sentences quoted here.",
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
        "intro": "This is where SEB Group makes the commitment.",
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
              "This wording lets through nothing within its own area. This is the strict half of the rule."
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
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
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
            "means": "This explains the threshold: Arctic oil and gas extraction as a share of the company's revenue. 5% is a low bar.",
            "lets_through": [
              "A company whose Arctic oil and gas extraction is under 5% of its revenue, however large that business is in absolute terms."
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
            "defined_in_clause": 3,
            "bank_definition": null
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
            "means": "This definition of “Company” is narrower than what it usually means. By a company we normally mean the business as a whole, parent and subsidiaries together. SEB fixes it to one legal entity, so the revenue test is applied to the entity SEB deals with and not to its group. A subsidiary can pass while its group earns heavily from Arctic oil and gas, so the rule blocks less.",
            "lets_through": [
              "This wording lets through financing to a subsidiary under the test, however much the rest of its group earns from Arctic oil and gas. The financing can then move inside the group."
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
        "role": "definition",
        "source_id": "seb2026",
        "title": "The definition of “Arctic Area”",
        "intro": "How SEB's policy defines it in its list of definitions.",
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
            "means": "This definition of “Arctic Area” is narrower than what it usually means. Where the Arctic starts is a choice, and definitions built on the tree line or the limit of permafrost reach a long way further south. SEB takes the strictest common line: the Arctic Circle itself. Drilling just south of that line is not in the Arctic Area, however cold and remote it is, so the rule blocks less.",
            "lets_through": [
              "This wording lets through oil and gas extraction just south of the Arctic Circle, which definitions built on the tree line or permafrost would count as Arctic."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "narrower"
      },
      {
        "index": 4,
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
            "defined_in_clause": 3,
            "bank_definition": null
          },
          {
            "id": "see-company-2",
            "label": "Companies",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              96,
              105
            ],
            "plain_range": [
              96,
              105
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
              "This wording lets through every large Norwegian and international producer on the Norwegian Continental Shelf below 15% of global revenue. For a company with worldwide operations that is a high bar to cross.",
              "Everywhere else in the Arctic the rule above uses 5%."
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
      "verdict_options": [
        {
          "angle": "how_it_compares",
          "recommended": true,
          "recommended_because": "The sentence itself is clean; its meaning comes entirely from the one beside it, and the page should point there.",
          "text": "This is the strict half of a rule that changes at a sea border.\n\nOutside Norway's economic zone, the test is 5% of revenue from Arctic oil and gas. Inside it, the policy uses 15% of global revenue. Same ocean, same activity, three times the threshold, and measured against a different total.\n\nSEB is a Nordic bank, and the softer number covers the waters its home region drills in. That may be defensible. Norway's rules are strict, the infrastructure exists, and one Nordic bank leaving changes little. But none of that is in the document.\n\nWithin its own area we could not find a way through it. The argument is about the softer rule that covers Norwegian waters."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "On its own terms, this is a strong commitment.\n\nIt uses 5%. It covers the client as a whole, not single deals. It covers new and existing clients, and arranging bonds too. And there is no exception of any kind. Under our rating, that scores zero and reads “holds”.\n\nIn the Arctic, refusing financing might change whether production happens at all. Arctic projects are costly and marginal, and financing is scarce.\n\nSo a strict rule here is well placed, and it matters."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "What the sentence does not reach is the area that matters most to this bank.\n\nThe Norwegian Continental Shelf is the largest Arctic oil and gas region with active development. And it is exactly the area this commitment leaves out. A Norwegian producer is measured against 15% of global revenue, not 5% of Arctic revenue.\n\nSo the strict rule covers Arctic activity in Russia, Alaska, Canada and Greenland. A Swedish bank was unlikely to be lending there anyway. In practice, little changes on the ground.\n\nThe rule is strong where it costs SEB little. Where SEB actually does business, the softer rule applies."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": "One rule, two numbers, and the border between them is a sea boundary.\n\nOutside Norway's economic zone, a company earning more than 5% of its revenue from Arctic oil and gas loses every business relationship with SEB. That is a low bar and it covers all business, not only new business and not only dedicated financing. Most of the world's Arctic oil and gas — the Russian Arctic, Alaska, the Canadian Beaufort — sits on that side of the line.\n\nInside the zone, the test becomes 15% of a producer's global revenue from Arctic activity. That is three times the threshold, measured against a much larger total. A company can be one of the largest operators on the Norwegian shelf and sit far below it.\n\nSEB is a Nordic bank, and the softer number covers the waters its home region drills in. That may be defensible — Norway's rules are strict and one bank leaving changes little. None of that reasoning is in the document.",
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this document, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Use one Arctic threshold",
          "content": "5% outside Norwegian waters, 15% inside them. The Arctic does not change at the border."
        },
        {
          "title": "Publish the reason for the split",
          "content": "There may be a fair argument about Norway's rules and infrastructure. It is not in the document."
        }
      ],
      "what_needs_to_change_closing": "Until then, this is the strict half of a rule that is softer where the bank does most of its business.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Outside Norwegian waters a 5% line on all business, which is strict. Inside them the test is 15% of a producer's global revenue, which every large operator on the Norwegian shelf sits far below."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "SEB avoids business relationships with companies above 5% Arctic oil and gas revenue outside Norwegian waters. We have not yet reviewed what it financed against this commitment.",
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
