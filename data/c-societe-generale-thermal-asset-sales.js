/* Commitment data — generated from commitments/commitment-societe-generale-thermal-asset-sales.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-thermal-asset-sales",
    "bank": "Société Générale",
    "commitment_number": 8,
    "category": "thermal_coal",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Restriction on Thermal Coal Asset Deals",
    "short_title": "Restriction on Thermal Coal Asset Deals",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Thermal Coal Sector Policy, published in April 2026. It has a section of its own: the bank will not help anyone buy or sell thermal coal assets, coal developers, or companies earning more than 25% of their revenue from coal.",
    "naive_reading": "it will not help anyone buy or sell coal mines or coal power plants",
    "plain_language_note": "The broadest sentence in the document, and the one with the fewest qualifications attached.",
    "sources_intro": "One policy document states this exclusion, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "tcp2026",
        "document_title": "Société Générale Thermal Coal Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/thermal-coal-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=8",
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
        "intro": "Société Générale will not provide services aimed at buying or selling thermal coal assets, or companies tied to thermal coal.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide financial products or services aiming at the sale or acquisition of… Assets in the Thermal Coal Sector; or Thermal Coal Developing Companies; or Companies with more than 25% of their revenue linked to the Thermal Coal Sector.",
        "plain_rendering": "Société Générale will not provide financial products or services aiming at the sale or acquisition of assets in the Thermal Coal Sector, of Thermal Coal Developing Companies, or of Companies with more than 25% of their revenue linked to the Thermal Coal Sector.",
        "phrases": [
          {
            "id": "sale-acq",
            "label": "aiming at the sale or acquisition",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              58,
              91
            ],
            "plain_range": [
              65,
              98
            ],
            "means": "This explains what this commitment covers: transferring coal from one owner to another. It is about ownership changing hands rather than about the asset operating.",
            "lets_through": [
              "This wording lets through every plant and mine that stays where it is. Nothing here stops a company running thermal coal assets.",
              "It also cuts both ways, and this is worth saying plainly. Blocking a sale keeps the asset with its current owner. A buyer whose plan is early closure is refused on the same terms as one who intends to run it to the end of its life."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "see-thermal-coal-developing-companies",
            "label": "Thermal Coal Developing Companies",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              134,
              167
            ],
            "plain_range": [
              140,
              173
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "twenty-five-per-cent",
            "label": "more than 25% of their revenue linked to the Thermal Coal Sector",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              187,
              251
            ],
            "plain_range": [
              196,
              260
            ],
            "means": "This explains the third of the three things the rule covers. A company is covered only where more than 25% of its revenue is linked to thermal coal.",
            "lets_through": [
              "Advising on the sale or purchase of a company under 25%, however much coal it owns in absolute terms.",
              "A large utility with a coal fleet and many other businesses, which sits well under the line on revenue."
            ],
            "defined_in_clause": null,
            "bank_definition": null
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
      "advisory",
      "dedicated-transaction",
      "revenue-threshold"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 306,
      "document_id": 28051,
      "institution": "societe_generale",
      "commitment_index": 8,
      "commitment_id": "bfb41175-ad11-5f3e-900e-e936b9f602e7",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=8",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        12724,
        12982
      ],
      "summary_text": "Societe Generale excludes financial products or services facilitating the sale or acquisition of thermal coal assets, Thermal Coal Developing Companies, or companies with >25% thermal coal revenue.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": null,
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
          "value": 25,
          "definition": "revenue linked to the Thermal Coal Sector for target companies in acquisition transactions"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
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
          "recommended_because": "The record carries fewer qualifications here than on any other commitment in the bank's set, and the page should say so plainly.",
          "text": "This commitment is wide in the ways most are narrow. It is not limited to new business, to dedicated deals or to new clients. It covers any financing or service for buying or selling coal assets, coal developers, or companies above 25% coal revenue. Advice fees, loans to buy and bond deals are all inside it.\n\nWhere it narrows is in who counts. A developer is a company building new coal power above 300 MW, and only as majority owner. A company adding smaller plants, or holding a minority stake in a large one, is not a developer.\n\nAnd a diversified utility stays under 25% however much coal it owns. The deals it covers are the right ones. Fewer companies qualify than the words suggest."
        },
        {
          "angle": "who_it_catches",
          "recommended": false,
          "recommended_because": null,
          "text": "This exclusion stops a coal asset changing hands. It does not stop a coal asset.\n\nNothing here stops a company running coal mines or power plants. This rule applies at one moment in an asset's life: when it is put up for sale. An owner who never sells never meets it.\n\nIts effect also cuts both ways, and that is worth saying plainly. Blocking a sale keeps the asset with its current owner. A buyer who plans to close and restore it is refused like one who plans to run it to the end. The policy looks at the deal, not at the buyer's plans.\n\nWe are not saying the bank got this wrong. But a policy built around leaving coal by 2030 and 2040 has reason to care who buys what it leaves."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "Société Générale wrote the same rule twice in one month.\n\nThe mining policy blocks financing for buying or selling mines for steel-making coal and asbestos. This one does the same for thermal coal assets, coal developers and companies above 25% coal revenue. Both have a section of their own. The bank's oil and gas policy has no such section at all.\n\nThe thermal coal version is the wider one. It names companies as well as assets. Its revenue threshold means a company with many businesses is caught, not only one that does coal alone.\n\nIt is fair to ask why this rule is in two policies and not the third. Oil and gas deals are the largest of the three markets, and the bank has not covered them this way."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green from its own reading of the wording. Watchtower states no weakness on this document, so there is nothing sourced underneath these options — they sit entirely below the opinion boundary and a human must read them before publication.",
      "what_needs_to_change": [
        {
          "title": "Deal with responsible closure",
          "content": "A buyer who plans to close and restore a coal asset is refused like any other. If that is intended, say so; if not, make an exception."
        },
        {
          "title": "Count every company building new coal",
          "content": "Remove the 300 MW line and count minority owners, so every company adding coal capacity is caught."
        }
      ],
      "what_needs_to_change_closing": "Until then, the rule reaches the right deals but not every company building coal.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "It covers every kind of deal, but a developer must build above 300 MW as majority owner, and diversified utilities stay under 25%.",
      "how_it_compares": {
        "text": "Société Générale's client rules and coal phase-out dates deal with companies that run coal mines and power plants.",
        "links": [
          {
            "slug": "societe-generale-thermal-client-50pc",
            "title": "Société Générale's 50% Threshold for Existing Clients"
          },
          {
            "slug": "societe-generale-thermal-2030-phaseout",
            "title": "Société Générale's 2030 Thermal Coal Phase-Out"
          },
          {
            "slug": "societe-generale-thermal-2040-phaseout",
            "title": "Société Générale's 2040 Thermal Coal Phase-Out"
          }
        ]
      }
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not help buy or sell thermal coal assets, coal developers, or companies above 25% coal revenue. We have not yet reviewed what it financed against this commitment.",
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
