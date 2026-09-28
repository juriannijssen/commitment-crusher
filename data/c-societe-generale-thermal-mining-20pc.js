/* Commitment data — generated from commitments/commitment-societe-generale-thermal-mining-20pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-thermal-mining-20pc",
    "bank": "Société Générale",
    "commitment_number": 7,
    "category": "thermal_coal",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Group Test for Thermal Coal Miners",
    "short_title": "Group Test for Thermal Coal Miners",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this rule in its Thermal Coal Sector Policy, published in April 2026. It is the only client rule in the document written in the present tense rather than as a restriction on new business, and the only one with an absolute production figure in it: 20% of group revenue, or 10 million tonnes a year.",
    "naive_reading": "it will not finance companies that mine coal for power stations",
    "plain_language_note": "Two tests, either of which is enough — and one of them is a real number of tonnes.",
    "sources_intro": "One policy document states this rule, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "tcp2026",
        "document_title": "Société Générale Thermal Coal Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/thermal-coal-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=7",
        "watchtower_document_id": 28051,
        "watchtower_institution": "societe_generale",
        "synthesis_run": 306,
        "version_label": "April 2026",
        "published": "2026-04-01",
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "published_source": null,
        "published_confidence": null,
        "verbatim_check": {
          "document": "28051-societe-generale-thermal-coal.md",
          "passages": 1,
          "found": 1,
          "missing": []
        }
      }
    ],
    "clauses": [
      {
        "index": 1,
        "role": "rule",
        "source_id": "tcp2026",
        "title": "The promise",
        "intro": "This rule sits right after the list of client rules, and applies only to mining. It is the only client rule here that covers existing business too.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group does not provide financial products and services to any Corporate entity of the Thermal Coal Mining sector where such entity belongs to a group which i) has more than 20% of its revenue linked to the Thermal Coal Mining sector or ii) produces more than 10 million tonnes of thermal coal per year.",
        "plain_rendering": "Société Générale does not provide financial products and services to any Corporate entity of the Thermal Coal Mining sector where such entity belongs to a group which either has more than 20% of its revenue linked to the Thermal Coal Mining sector, or produces more than 10 million tonnes of thermal coal per year.",
        "phrases": [
          {
            "id": "corporate-entity",
            "label": "Corporate entity of the Thermal Coal Mining sector",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              66,
              116
            ],
            "plain_range": [
              73,
              123
            ],
            "means": "This explains who is caught. The glossary defines it as an entity directly operating or owning thermal coal mining assets, so the test is about operating a mine rather than profiting from one.",
            "lets_through": [
              "This wording lets through traders, shippers and buyers. A company that moves and sells enormous quantities of thermal coal does not operate or own a mine, so it is outside this commitment.",
              "It also lets through the financing arm, the marketing arm and the holding vehicle, unless they own the assets themselves."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "20pc",
            "label": "more than 20% of its revenue",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              167,
              195
            ],
            "plain_range": [
              178,
              206
            ],
            "means": "This explains the first of two thresholds, applied to the group the entity belongs to rather than to the entity itself. 20% is the lowest revenue threshold in any Société Générale sector policy we have read.",
            "lets_through": [
              "This wording lets through diversified miners below the line on revenue — but only if they are also below 10 million tonnes, because the second threshold stands on its own.",
              "It also lets through the rest of the coal chain. This threshold measures revenue linked to thermal coal mining specifically, not to the thermal coal sector as a whole."
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
      "thermal-coal",
      "revenue-threshold",
      "production-threshold",
      "group-level",
      "upstream"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 306,
      "document_id": 28051,
      "institution": "societe_generale",
      "commitment_index": 7,
      "commitment_id": "3c883d66-6833-5c63-ada6-763643283e2b",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=7",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        12069,
        12375
      ],
      "summary_text": "Societe Generale excludes financial products and services to any thermal coal mining corporate entity whose parent group has >20% revenue from thermal coal mining or produces >10 Mt of thermal coal annually.",
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
          "value": 20,
          "definition": "group-level revenue linked to the Thermal Coal Mining sector"
        },
        {
          "metric": "production_absolute",
          "inequality": ">",
          "value": 10000000,
          "definition": "group-level thermal coal production in tonnes per year"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Financing products and services dedicated to the energy transition remain permitted",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": "Section 6.1, Client criteria — Energy transition exception"
        },
        {
          "condition": "Deviations may be granted on an exceptional basis by the Societe Generale group oversight committee chaired by senior management",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": true,
          "standing": true,
          "where": "Section 5.2, Implementation process"
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 9 fields corrected]\nCHANGES:\n- All commitments: Added missing `certainty` object with `certainty_rating: \"5\"` to all exceptions to comply with schema requirements.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "Deviations may be granted on an exceptional basis by the Societe Generale group oversight committee chaired by senior management",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "watchtower",
        "governance_process": true,
        "standing": true,
        "where": "Section 5.2, Implementation process"
      }
    ],
    "general_clauses_page": null,
    "disagreements": [
      {
        "field": "weaknesses",
        "severity": "omission",
        "watchtower": "No weakness recorded — as on every commitment in this document.",
        "bank_green": "Watchtower states no weakness anywhere in the Thermal Coal synthesis, on any of the nine commitments. The phrases highlighted on this page are Bank.Green's reading and are labelled as such.",
        "action": "Populate the weaknesses field for this document. Our highlighted phrases are the proposal."
      },
      {
        "field": "loopholes.exceptions",
        "severity": "inconsistency",
        "watchtower": "The section 7 exception for pre-existing business commitments and opportunities at an advanced stage of negotiation is attached to two of the nine commitments in this run — commitments 1 and 2. It is absent from commitments 3 to 9.",
        "bank_green": "Section 7 applies that exception to the sector policy as a whole, so it should sit on all nine commitments. We read the seven omissions as an extraction inconsistency rather than a feature of the policy.",
        "action": "Attach the section 7 exception to commitments 3 to 9. Note the consequence for the derived rating: spec v3.2 defines a standing carve-out as one appearing on EVERY commitment in a document, so as the record stands the section 7 exception counts as commitment-specific on commitments 1 and 2 and adds a point to each. Correcting the record would make it standing and move both from `hollowed` to `holds`. No other rating in this document would change."
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
        "new_business_only": false,
        "total": 1
      },
      "verdict_options": [
        {
          "angle": "what_it_gets_right",
          "recommended": true,
          "recommended_because": "This is the strongest client rule in the document and the page should say so before it says anything else.",
          "text": "The rule is in the present tense: the bank “does not provide financial products and services”. It has no limit to new business.\n\nIt has two tests, and either is enough. More than 20% of group revenue from coal mining, or more than 10 million tonnes a year.\n\nAnd it measures the whole group, not just the company. A mine held in a small subsidiary is tested against its parent's revenue."
        },
        {
          "angle": "fails_to_block",
          "recommended": false,
          "recommended_because": null,
          "text": "What limits this rule is which companies it covers, not how hard it hits them.\n\nIt applies to a company “of the Thermal Coal Mining sector”. The glossary defines that as a company that runs or owns coal mines. So the test is about running a mine.\n\nTraders are outside it. A trading house moving tens of millions of tonnes of coal a year owns no mines, and this sentence says nothing about it.\n\nShippers, port operators and buyers are outside it for the same reason. So is a holding company that finances mines without owning them. The rule points at one link in the chain."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Put this commitment beside the others in the same policy, and the difference is hard to miss.\n\nCoal mining is excluded at 20% of group revenue or 10 million tonnes, straight away, for new and existing business. Coal power falls under the client rules. Those use 25% for new clients and 50% for existing ones, cover new business only, and have no size test.\n\nBurning coal produces the emissions. Mining it supplies the coal. The policy is much harder on the supplier.\n\nThe bank's mining policy goes the other way. It sets coal for steel-making at more than 50% of revenue, two and a half times this threshold, in a policy published the same month."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green from its own reading of the wording. Watchtower states no weakness on this document, so there is nothing sourced underneath these options — they sit entirely below the opinion boundary and a human must read them before publication.",
      "what_needs_to_change": [
        {
          "title": "Cover more than mine owners",
          "content": "The rule covers companies that run or own mines. Traders and shippers of the same coal are outside it."
        },
        {
          "title": "Lower the tonnes figure over time",
          "content": "Ten million tonnes a year is a large mine or a small mining company. A figure that steps down each year would close the gap over time."
        }
      ],
      "what_needs_to_change_closing": "Until then, this client rule covers one part of the coal chain.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Catches the coal-heavy miners on two tests at once, and leaves traders, shippers and financing arms outside.",
      "how_it_compares": {
        "text": "Société Générale's other coal client rules only stop new business. Existing financing is left to the 2030 and 2040 phase-out dates. Its rule on dedicated coal financing does name trading.",
        "links": [
          {
            "slug": "societe-generale-thermal-prospect-25pc",
            "title": "Société Générale's 25% Threshold for New Clients"
          },
          {
            "slug": "societe-generale-thermal-client-50pc",
            "title": "Société Générale's 50% Threshold for Existing Clients"
          },
          {
            "slug": "societe-generale-thermal-developers",
            "title": "Société Générale's Exclusion of Thermal Coal Developers"
          },
          {
            "slug": "societe-generale-thermal-2030-phaseout",
            "title": "Société Générale's 2030 Thermal Coal Phase-Out"
          },
          {
            "slug": "societe-generale-thermal-2040-phaseout",
            "title": "Société Générale's 2040 Thermal Coal Phase-Out"
          },
          {
            "slug": "societe-generale-thermal-dedicated",
            "title": "Société Générale's Restriction on Financing Thermal Coal Activities"
          }
        ]
      }
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale does not finance thermal coal miners whose group is above 20% coal revenue or 10 million tonnes a year. We have not yet reviewed what it financed against this commitment.",
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
    "source": "Watchtower synthesis run 306, document 28051",
    "reading": "drafted"
  }
};
