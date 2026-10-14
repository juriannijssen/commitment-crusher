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
    "intro": "Société Générale sets out this rule in its Thermal Coal Sector Policy, published in April 2026. It is written in the present tense, so it applies to existing clients as well as new business. It sets two limits: 20% of group revenue, or 10 million metric tons of coal a year.",
    "naive_reading": "it will not finance companies that mine coal for power stations",
    "plain_language_note": "Two tests, either of which is enough, and one of them is an actual number of metric tons.",
    "sources_intro": "This rule comes from a single policy document, and we quote one passage from it below.",
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
        "intro": "This rule applies only to mining companies, and it covers existing business as well as new.",
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
            "means": "This explains who is covered. The glossary defines it as an entity directly operating or owning thermal coal mining assets. So the test is about operating a mine, not profiting from one.",
            "lets_through": [
              "This wording lets through traders, shippers, and buyers. A company that moves and sells large quantities of thermal coal does not operate or own a mine, so it is outside this commitment.",
              "It also lets through the financing arm, the marketing arm, and the holding vehicle, unless they own the assets themselves."
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
            "means": "This explains the first of two thresholds, applied to the group the entity belongs to rather than to the entity itself.",
            "lets_through": [
              "This wording lets through diversified miners below the line on revenue, but only if they are also below 10 million metric tons. The second threshold applies on its own.",
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
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "It catches large and coal-heavy mining groups. Mining inside a smaller, diversified group gets through, and so does every company that trades, ships or finances coal without owning a mine.",
      "actual_reading": "it will not finance a coal mining company whose group earns more than 20% of its revenue from coal mining or produces more than 10 million metric tons of coal a year",
      "gaps": [
        {
          "title": "Small mines in diversified groups",
          "phrase_refs": [
            "20pc"
          ],
          "text": "A group under 20% of revenue from coal mining and under 10 million metric tons a year is not caught. Its mining company can still be financed."
        },
        {
          "title": "Companies around the mine",
          "phrase_refs": [
            "corporate-entity"
          ],
          "text": "The commitment covers companies that operate or own coal mines. Traders, shippers and buyers are outside it, and so are financing arms and holding vehicles that do not own the mines themselves."
        }
      ],
      "in_practice": "Thermal coal is the coal burned in power stations. This commitment covers companies that operate or own thermal coal mines. It then tests the group they belong to in two ways, and either one is enough.\n\nTake a mining company whose group earns 30% of its revenue from coal mining. It is above 20%, so Société Générale does not provide it with any financial product or service. The same goes for a mining company in a group that produces 15 million metric tons a year. That is true even if coal is a small part of the group's revenue.\n\nNow take a mining company in a diversified group. Coal mining is 10% of the group's revenue, and the group produces 5 million metric tons a year. It is under both lines, so it can be financed.\n\nThen take a trading house that buys and sells large amounts of thermal coal. It does not operate or own a mine, so it is not a company of the coal mining sector. This commitment does not apply to it. Nor does it apply to a shipper, a buyer, or a financing arm that lends to the mines without owning them.\n\nSo this commitment stops financing to mine owners in large or coal-heavy groups. But smaller mines in diversified groups, and the companies that move, sell, and finance the coal, all get through.",
      "gets_right": "It is not limited to new business or new clients. And either test is enough: a very large miner is caught on metric tons, even where coal is a small share of its group's revenue."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale does not finance thermal coal miners whose group is above 20% coal revenue or 10 million metric tons a year. We have not reviewed its financing against this commitment yet.",
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
    "source": "Watchtower synthesis run 306, document 28051",
    "reading": "drafted"
  }
};
