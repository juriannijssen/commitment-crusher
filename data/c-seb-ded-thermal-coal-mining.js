/* Commitment data — generated from commitments/commitment-seb-ded-thermal-coal-mining.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "seb-ded-thermal-coal-mining",
    "bank": "SEB Group",
    "commitment_number": 2,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's Restriction on Dedicated Finance for Thermal Coal Mining",
    "short_title": "Restriction on Dedicated Finance for Thermal Coal Mining",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this restriction in its Sector Policy on Fossil Fuels, published in April 2026. Alongside the client threshold, the bank declines to arrange financing raised specifically for thermal coal mining companies.",
    "naive_reading": "it will not finance mining of coal for power stations",
    "plain_language_note": "One line, no threshold, no exception — and one type of financing.",
    "sources_intro": "One policy document states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=2",
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
        "intro": "SEB avoids dedicated financing for thermal coal mining companies.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "In addition, SEB Group avoids providing Dedicated Finance for thermal coal mining Companies.",
        "plain_rendering": "In addition, SEB Group avoids providing Dedicated Finance for thermal coal mining Companies.",
        "phrases": [
          {
            "id": "ded2",
            "label": "Dedicated Finance",
            "type": "narrowing_qualifier",
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
              "A thermal coal mining company can borrow this way from SEB and spend the loan on its mines."
            ],
            "defined_in_clause": null,
            "bank_definition": {
              "quote": "Dedicated Finance — Where the financing is channelled to a specified use of proceeds.",
              "source_id": "seb2026"
            },
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "thermal-coal",
      "dedicated-transaction",
      "project-finance",
      "upstream"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 181,
      "document_id": 25537,
      "institution": "seb_group",
      "commitment_index": 2,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=2",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-09",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        11176,
        11271
      ],
      "summary_text": "SEB Group restricts dedicated project finance for thermal coal mining companies.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": "upstream",
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
      "strength": "hollowed",
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
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "The scope gap is real but largely closed by commitment 1, and saying so is more useful than repeating a criticism that does not bite.",
          "text": "This rule has no threshold, no exception and no qualifier.\n\nThe usual criticism of a rule on dedicated financing is that it covers the least-used route. A company simply borrows as a whole instead. That holds here. Company loans are untouched by this sentence."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "Taken alone, this sentence reaches one route to financing.\n\nDedicated financing is raised for one named purpose. A coal mining company that funds itself from a credit line, a loan or a bond is not asking for it. So this rule never applies, however much coal it mines.\n\nThat matters less at SEB than elsewhere, because the 5% client rule covers most of the gap. But it is not nothing. That rule has three exceptions of its own. They include supply chain finance for coal used in steel-making, and small retail loans under EUR 1 million. Where those apply, this sentence is the only line left.\n\nSo the rule is only as strong as the client test beside it."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "A rule on dedicated financing is worth what the client rules beside it are worth.\n\nThis one covers thermal coal mining companies only. But SEB's client rule on coal mining is strong. It covers new and existing clients above 5% of revenue.\n\nSo a coal miner that pays from general loans is still caught. At SEB, the client rule is worth a lot."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this document, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Say it covers company loans too",
          "content": "The rule reaches financing for a named purpose. Most mining is funded at company level."
        },
        {
          "title": "Extend it to companies mining coal for steel",
          "content": "The rule covers thermal coal mining companies only. Companies mining coal for steel-making are left out."
        }
      ],
      "what_needs_to_change_closing": "Until then, this is a clean line drawn around one route to financing.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Dedicated financing for thermal coal miners is blocked; company loans are untouched by this sentence.",
      "how_it_compares": {
        "text": "SEB's coal mining rule refuses clients above 5% of revenue from coal mining, new and existing. So a thermal coal miner that gets past this rule still has to get past that one. SEB's rules on coal mining equipment and infrastructure cover both kinds of coal.",
        "links": [
          {
            "slug": "seb-coal-mining-5pc",
            "title": "SEB's 5% Threshold on Coal Mining"
          },
          {
            "slug": "seb-ded-coal-equipment",
            "title": "SEB's Restriction on Financing Coal Mining Equipment"
          },
          {
            "slug": "seb-ded-coal-infrastructure",
            "title": "SEB's Restriction on Financing Coal Mining Infrastructure"
          }
        ]
      }
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "SEB avoids dedicated finance for thermal coal mining companies. We have not yet reviewed what it financed against this commitment.",
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
