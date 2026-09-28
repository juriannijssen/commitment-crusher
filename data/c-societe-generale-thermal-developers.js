/* Commitment data — generated from commitments/commitment-societe-generale-thermal-developers.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-thermal-developers",
    "bank": "Société Générale",
    "commitment_number": 3,
    "category": "thermal_coal",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Exclusion of Thermal Coal Developers",
    "short_title": "Exclusion of Thermal Coal Developers",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Thermal Coal Sector Policy, published in April 2026. Companies still building new coal — new mines, new power stations, new coal railways — are cut off from new financing, and so are the companies that own them. The definition of who counts is in the glossary, and it carries a number.",
    "naive_reading": "it will not finance companies building new coal power plants or coal mines",
    "plain_language_note": "A strong rule with a threshold hidden twelve pages away from it.",
    "sources_intro": "One policy document states this exclusion. Two passages from it are quoted here: the rule, and the definition it depends on.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "tcp2026",
        "document_title": "Société Générale Thermal Coal Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/thermal-coal-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=3",
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
        "source_id": "tcp2026",
        "title": "The promise",
        "intro": "Société Générale will not provide new financial services to thermal coal developers, or to their parent and holding companies.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide new financial products and services to any… Thermal Coal Developing Company and any of its parent and holding companies.",
        "plain_rendering": "Société Générale will not provide new financial products and services to any Thermal Coal Developing Company, or to any of its parent and holding companies.",
        "phrases": [
          {
            "id": "new-fps",
            "label": "new financial products and services",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              27,
              62
            ],
            "plain_range": [
              34,
              69
            ],
            "means": "This explains what this commitment reaches: business the bank has not written yet. Watchtower records the transaction status on this commitment as new.",
            "lets_through": [
              "This wording lets through everything already on the books. A coal developer with existing facilities keeps them, and keeps drawing on them, for as long as their terms run."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "developing-company",
            "label": "Thermal Coal Developing Company",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              71,
              102
            ],
            "plain_range": [
              77,
              108
            ],
            "means": "This explains who is caught. The term is capitalised, which in this policy means the glossary decides what it means — and the glossary is where the qualifications live.",
            "lets_through": [
              "This wording lets through whatever the definition leaves out. The definition sets a size threshold for power plants and limits the reach to majority owners.",
              "It also lets through companies that have stopped developing but still operate. The test is expansion, not existence, so a company running a fleet of coal plants with no new build planned is not a developer under this policy."
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
        "source_id": "tcp2026",
        "title": "The definition of “Thermal Coal Developing Companies”",
        "intro": "How Société Générale's policy defines it in the glossary. It explains what building new coal means.",
        "location": {
          "distance": "end_of_document",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Thermal Coal Developing Companies: Companies of the Thermal Coal Sector developing, or planning to develop, additional thermal coal extraction capacities, new coal-fueled power capacities strictly above 300 MW or new transportation projects dedicated to thermal coal. Majority owners of the asset are considered.",
        "plain_rendering": "A Thermal Coal Developing Company is a company of the Thermal Coal Sector developing, or planning to develop, additional thermal coal extraction capacities, new coal-fueled power capacities strictly above 300 MW or new transportation projects dedicated to thermal coal. Majority owners of the asset are considered.",
        "phrases": [
          {
            "id": "300mw",
            "label": "strictly above 300 MW",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              188,
              209
            ],
            "plain_range": [
              190,
              211
            ],
            "means": "This definition of “Thermal Coal Developing Companies” is narrower than what it usually means. By a company developing coal we normally mean one building new coal. Société Générale counts new power capacity only above 300 MW. Below that line the company is not a developer and this commitment does not apply, so a string of smaller plants falls outside the restriction however much they add together.",
            "lets_through": [
              "The words “strictly above” let through every new coal unit of 300 MW or less. “Strictly above” puts a plant built at exactly 300 MW outside the definition.",
              "It also lets through sequential build-out. Nothing in the wording aggregates several sub-threshold units on one site, or the same developer's projects across sites."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "majority",
            "label": "Majority owners of the asset are considered",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              268,
              311
            ],
            "plain_range": [
              270,
              313
            ],
            "means": "This explains whose development counts. Ownership of the asset has to be majority ownership before the company behind it is treated as developing it.",
            "lets_through": [
              "This wording lets through minority stakes, joint ventures and consortium structures. Large coal projects are routinely built by consortia in which no single sponsor holds a majority.",
              "It also lets through the financing that follows the minority holder. A company with a 40% interest in a new coal plant is not a Thermal Coal Developing Company on this wording."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "narrower"
      }
    ],
    "glossary_refs": [
      "thermal-coal",
      "developer-exclusion",
      "group-level",
      "parent-company",
      "capital-markets"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 306,
      "document_id": 28051,
      "institution": "societe_generale",
      "commitment_index": 3,
      "commitment_id": "ac719bff-9344-531b-8de5-29e42a45772b",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=3",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        11501,
        11656
      ],
      "summary_text": "Societe Generale will not provide new financial products and services to Thermal Coal Developing Companies (or their parent/holding companies), except for dedicated energy transition financing.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": null,
          "activity_scope": "new"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "group",
          "relationship_status": "new_and_existing",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new"
        }
      },
      "triggers": [
        {
          "metric": "other",
          "inequality": null,
          "value": null,
          "definition": "Developing or planning to develop additional thermal coal extraction capacities, new coal-fueled power capacities strictly above 300 MW, or new transportation projects dedicated to thermal coal; includes majority owners and buyers not committing to cease operating assets within a reasonable period"
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
        "new_business_only": true,
        "total": 2
      },
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "A rule about not building new coal that stops applying below 300 MW is the finding, and it is a published number.",
          "text": "Société Générale will not do new business with companies building new coal. Then the glossary says how much new coal is allowed.\n\nA “Thermal Coal Developing Company” is one adding coal mining, coal transport, or new coal power “strictly above 300 MW”. So a new coal unit of 300 MW or less does not count. Nor does the wording add up several smaller units, on one site or across a company.\n\nThe definition also counts only majority owners. Big coal projects are often built by groups of companies, where no one holds a majority. A company with a 40% share in a new coal plant is not a developer here.\n\nBoth things that limit it sit twelve pages away, in the glossary."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Two features make this a well-built rule.\n\nIt reaches the parent. The exclusion names “any of its parent and holding companies”, so it applies at group level. A rule that stops at a subsidiary can be avoided through the group structure. This one cannot.\n\nIt also catches plans. The definition covers companies “developing, or planning to develop” new coal. A company does not have to have started building to be excluded.\n\nThat is the right shape for this kind of rule. The argument on this page is about the conditions attached to it, not how it is built."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Rules against coal developers are the most standard part of bank coal policies. That makes the 300 MW floor easy to judge.\n\nThe usual reference is the Global Coal Exit List. It counts any new coal capacity, of any size. Banks that follow it exclude a company for building one new unit. Société Générale uses the same structure, but adds a floor.\n\nIt is also worth noting where the number is kept. This policy prints its revenue thresholds in the rules themselves: 25%, 50% and 20%. The 300 MW figure is the only number kept in the glossary. And it decides whether new coal counts as new coal."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green from its own reading of the wording. Watchtower states no weakness on this document, so there is nothing sourced underneath these options — they sit entirely below the opinion boundary and a human must read them before publication.",
      "what_needs_to_change": [
        {
          "title": "Drop the 300 MW floor",
          "content": "A new coal unit of 300 MW or less does not make its builder a developer. The policy gives no reason for a size below which new coal stops counting."
        },
        {
          "title": "Cover minority owners",
          "content": "Only majority owners count. Big coal projects are often built by groups where no one holds a majority."
        },
        {
          "title": "Say what happens to existing financing",
          "content": "The exclusion covers new products and services only. It should say what happens to financing already given."
        }
      ],
      "what_needs_to_change_closing": "Until then, this client rule depends on two conditions in the glossary.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Reaches new financing to developers; everything on the books stays, and a new unit at exactly 300 MW is not a development.",
      "how_it_compares": {
        "text": "Existing financing to coal developers is left to Société Générale's 2030 and 2040 coal phase-out dates. None of Société Générale's oil and gas or mining commitments extends to parent and holding companies.",
        "links": [
          {
            "slug": "societe-generale-thermal-2030-phaseout",
            "title": "Société Générale's 2030 Thermal Coal Phase-Out"
          },
          {
            "slug": "societe-generale-thermal-2040-phaseout",
            "title": "Société Générale's 2040 Thermal Coal Phase-Out"
          },
          {
            "slug": "societe-generale-30pc-unconventional",
            "title": "Société Générale's 30% Threshold on Unconventional Oil & Gas"
          },
          {
            "slug": "societe-generale-mining-metallurgical-50pc",
            "title": "Société Générale's 50% Threshold on Metallurgical Coal"
          }
        ]
      }
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not provide new financing to companies developing new thermal coal capacity, or to their parents. We have not yet reviewed what it financed against this commitment.",
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
