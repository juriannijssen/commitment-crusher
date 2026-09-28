/* Commitment data — generated from commitments/commitment-seb-ded-coal-infrastructure.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "seb-ded-coal-infrastructure",
    "bank": "SEB Group",
    "commitment_number": 4,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's Restriction on Financing Coal Mining Infrastructure",
    "short_title": "Restriction on Financing Coal Mining Infrastructure",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this restriction in its Sector Policy on Fossil Fuels, published in April 2026. It extends the coal line to the rail, roads, conveyors and terminals built to serve a mine.",
    "naive_reading": "it will not finance the railways, ports and infrastructure coal mines depend on",
    "plain_language_note": "One word decides how much infrastructure this reaches: dedicated.",
    "sources_intro": "One policy document states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=4",
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
        "verbatim": "In addition, SEB Group avoids providing Dedicated Finance for … infrastructure projects that are dedicated to metallurgical or thermal coal mining.",
        "plain_rendering": "In addition, SEB Group avoids providing Dedicated Finance for infrastructure projects that are dedicated to metallurgical or thermal coal mining.",
        "phrases": [
          {
            "id": "see-dedicated-finance",
            "label": "Dedicated Finance",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              40,
              57
            ],
            "plain_range": [
              40,
              57
            ],
            "means": "“Dedicated Finance” is financing for a named purpose, where SEB knows what it pays for. This commitment covers only that kind of financing. A loan to the company as a whole names no purpose, so it is not covered.",
            "lets_through": [
              "This wording lets through general-purpose financing — a loan to the company as a whole, which does not say what it pays for.",
              "A coal mining company can borrow this way from SEB and spend the loan on a rail line or port for its coal."
            ],
            "defined_in_clause": null,
            "bank_definition": {
              "quote": "Dedicated Finance — Where the financing is channelled to a specified use of proceeds.",
              "source_id": "seb2026"
            }
          },
          {
            "id": "dedicated-to",
            "label": "dedicated to",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              97,
              109
            ],
            "plain_range": [
              95,
              107
            ],
            "means": "Adding the words “dedicated to” means an asset has to exist for coal mining before this commitment applies. Not linked to coal mining, not primarily serving it — dedicated to it.",
            "lets_through": [
              "This wording lets through every shared rail line, road and port terminal. Mining infrastructure is built to be shared because that is what makes it economic, so an asset carrying coal alongside iron ore is arguable."
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
      "metallurgical-coal",
      "thermal-coal",
      "midstream",
      "dedicated-transaction"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 181,
      "document_id": 25537,
      "institution": "seb_group",
      "commitment_index": 4,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=4",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-09",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        11176,
        11411
      ],
      "summary_text": "SEB Group restricts dedicated project finance for infrastructure projects dedicated to metallurgical or thermal coal mining.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "midstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": null,
          "certainty": "5"
        },
        "product": {
          "financing_type": "project",
          "capital_markets": null,
          "transaction_status": null
        }
      },
      "triggers": [],
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
      "strength": "crushed",
      "strength_derivation": {
        "rule": "spec v3.29 §4.1 — the gap between the naive reading and what it catches",
        "inputs_source": "Watchtower record",
        "record_score": "hollowed",
        "weakness": false,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "A strict test on a class of asset that is almost never strictly dedicated is the standard failure mode, and it is what this sentence does.",
          "text": "Everything turns on “dedicated to”, and mining infrastructure is built to be shared.\n\nA rail line, road or port serving one mine and nothing else is rare. Dedicated infrastructure is expensive. Shared infrastructure is what makes a mining region pay. And an asset that carries coal alongside iron ore is not dedicated to coal mining, on any ordinary reading.\n\nSo the test catches the assets that barely exist. It releases the ones that actually move the coal.\n\nThe rule also covers new projects only. So an existing shared rail line, upgraded to carry more coal, sits outside it.\n\nThe rule is in the right place in the chain. But one word decides how much of the chain it reaches."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "SEB uses one test for shared infrastructure: “dedicated to”.\n\nIt says it once. That is good drafting. But it is a narrow test. Only assets used for coal mining alone are caught.\n\nConsistency deserves credit. It does not make the test wide."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "What asset does this sentence stop? A conveyor from a single mine, or a rail spur with one customer.\n\nThose exist. But a bank asked to finance one is usually being asked to finance the mine behind it. The policy's coal client rules already deal with that.\n\nAdd a second product, a second shipper or a second customer, and the question becomes arguable. Most real rail lines and ports have all three.\n\nSo the rule mostly catches assets that the other coal rules already cover. It adds little on its own. The shared infrastructure that moves most coal to market is outside it."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this document, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Use a majority test",
          "content": "“Dedicated to” catches assets that serve coal and nothing else. A majority test would reach the shared infrastructure that actually moves coal."
        },
        {
          "title": "Cover expansions of existing assets",
          "content": "An existing shared rail line upgraded to carry more coal is not a new dedicated project."
        }
      ],
      "what_needs_to_change_closing": "Until then, the assets that actually move coal to market are the hardest to test against this rule.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Only infrastructure dedicated to coal. Mining rail, roads and port terminals are built shared, which is why they get built."
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "SEB avoids dedicated finance for infrastructure projects dedicated to coal mining. We have not yet reviewed what it financed against this commitment.",
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
