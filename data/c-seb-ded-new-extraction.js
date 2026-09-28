/* Commitment data — generated from commitments/commitment-seb-ded-new-extraction.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "seb-ded-new-extraction",
    "bank": "SEB Group",
    "commitment_number": 8,
    "category": "fossil_fuels",
    "effective_date": "2026-04-23",
    "title": "SEB's Restriction on Financing New Oil and Gas Projects",
    "short_title": "Restriction on Financing New Oil and Gas Projects",
    "article_published": "2026-09-09",
    "intro": "SEB sets out this restriction in its Sector Policy on Fossil Fuels, published in April 2026. No dedicated financing for new oil and gas extraction projects — the commitment the International Energy Agency's net zero pathway asks banks to make.",
    "naive_reading": "it will not finance new oil and gas extraction",
    "plain_language_note": "Two words carry it: New and Dedicated.",
    "sources_intro": "One policy document states this restriction, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "seb2026",
        "document_title": "SEB Group Sector Policy on Fossil Fuels",
        "document_url": "https://webapp.sebgroup.com/mb/mblib.nsf/dld/80AF6A2E5F88CDC2C12586B1002E33C2?opendocument",
        "synthesis_url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=8",
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
        "intro": "SEB avoids dedicated financing for new oil and gas extraction projects.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "SEB Group avoids providing Dedicated Finance to New Projects relating to Oil and Gas extraction.",
        "plain_rendering": "SEB Group avoids providing Dedicated Finance to New Projects relating to Oil and Gas extraction.",
        "phrases": [
          {
            "id": "ded8",
            "label": "Dedicated Finance",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              27,
              44
            ],
            "plain_range": [
              27,
              44
            ],
            "means": "“Dedicated Finance” is financing for a named purpose, where SEB knows what it pays for. This commitment covers only that kind of financing. A loan to the company as a whole names no purpose, so it is not covered.",
            "lets_through": [
              "This wording lets through general-purpose financing — a loan to the company as a whole, which does not say what it pays for.",
              "An oil and gas producer can borrow this way from SEB and spend the loan on a new field."
            ],
            "defined_in_clause": null,
            "bank_definition": {
              "quote": "Dedicated Finance — Where the financing is channelled to a specified use of proceeds.",
              "source_id": "seb2026"
            },
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "new-proj",
            "label": "New Projects",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              48,
              60
            ],
            "plain_range": [
              48,
              60
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
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
            "means": "This definition of “New Project” is broader than what it usually means. By a new project we normally mean something built from scratch. SEB also counts capacity expansions, and any existing operation undergoing a material change in what it produces or does. So enlarging or converting an existing oil or gas field counts too, and the rule blocks more.",
            "lets_through": [
              "This wording lets through changes to an existing oil or gas field that SEB does not judge “material”. The policy gives no measure."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "broader"
      }
    ],
    "glossary_refs": [
      "upstream",
      "project-finance",
      "dedicated-transaction",
      "greenfield"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 181,
      "document_id": 25537,
      "institution": "seb_group",
      "commitment_index": 8,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/seb_group/document/25537/synthesis?run=181&commitment=8",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-09",
      "synthesis_updated": "2026-07-08",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        13118,
        13214
      ],
      "summary_text": "SEB Group restricts dedicated project finance for new projects relating to oil and gas extraction.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "upstream",
          "activity_scope": "new"
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
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "The capacity-expansion gap is provable from the same section of the same policy, which is the strongest form this finding can take.",
          "text": "Two words limit this commitment: “New” and “Dedicated”.\n\n“New Projects” leaves out expanding fields that already produce. That is where a large share of new supply comes from.\n\n“Dedicated Finance” leaves out company loans. A producer can pay for a new field from its own balance sheet, and this rule never applies."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "This is the commitment the International Energy Agency's net-zero path asks banks to make, and SEB has made it.\n\nNo dedicated financing for new oil and gas extraction projects. There is no threshold, no condition and no recorded exception. Among banks that have written this line at all, most have added conditions about transition plans or exceptions for certain countries. This one is a flat sentence.\n\nThat matters. A flat sentence is easy to check and hard to argue around.\n\nThe criticism on this page is about the two words that limit it. It is not about whether the commitment exists."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Put two sentences from the same policy side by side, and the drafting choice is clear.\n\nThe rule covers “Dedicated Finance to New Projects relating to Oil and Gas extraction”. The ultra-deep rule covers “Dedicated Finance to any Projects or Capacity Expansion related to Ultra Deep Oil & Gas exploration and production”.\n\nSame policy, same section, four hundred words apart. One covers expansions, and one does not.\n\nIf that is deliberate, the reason is not published. If it is not deliberate, it is a one-word fix. Either way, the ultra-deep sentence shows the bank knows how to write the wider rule."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green. Watchtower states no weakness on this document, so nothing sourced sits underneath these options.",
      "what_needs_to_change": [
        {
          "title": "Cover expansions",
          "content": "This line says new projects only. Covering “Projects or Capacity Expansion” would reach fields that already produce."
        },
        {
          "title": "Say when a project stops being new",
          "content": "It could be the approval date, first production or the permit. The policy does not say."
        }
      ],
      "what_needs_to_change_closing": "Until then, the rule covers new fields and leaves expansions alone.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Dedicated financing of new extraction is blocked. Company loans are not covered, and new excludes existing fields.",
      "how_it_compares": {
        "text": "SEB's ultra-deep rule covers “Projects or Capacity Expansion”, so the wider phrase was to hand. SEB's 5% rule for oil and gas producers partly closes the company-loan gap, but for new clients only. Existing clients above 5% are where both gaps meet.",
        "links": [
          {
            "slug": "seb-ded-ultra-deep",
            "title": "SEB's Restriction on Financing Ultra-Deep Oil and Gas"
          },
          {
            "slug": "seb-og-upstream-5pc",
            "title": "SEB's 5% Threshold on Oil and Gas Producers"
          }
        ]
      }
    }
  },
  "evidence": {
    "status": "none_found",
    "teaser": "SEB avoids dedicated finance for new oil and gas extraction projects. We have not yet reviewed what it financed against this commitment.",
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
