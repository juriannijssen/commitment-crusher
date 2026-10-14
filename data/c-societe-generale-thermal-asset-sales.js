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
    "intro": "Société Générale sets out this exclusion in its Thermal Coal Sector Policy, published in April 2026. It has a section of its own. The bank will not help anyone buy or sell thermal coal assets, coal developers, or companies earning more than 25% of their revenue from coal.",
    "naive_reading": "it will not help anyone buy or sell coal mines or coal power plants",
    "plain_language_note": "The broadest sentence in the document, and the one with the fewest qualifications attached.",
    "sources_intro": "This exclusion comes from a single policy document, and we quote one passage from it below.",
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
              "It also cuts both ways. Blocking a sale keeps the asset with its current owner. A buyer planning an early closure is refused on the same terms as one planning to run it for its full life."
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
            "means": "This explains the third of the three things this commitment covers. A company is covered only where more than 25% of its revenue is linked to thermal coal.",
            "lets_through": [
              "This wording lets through advising on the sale or purchase of a company under 25%, however much coal it owns in absolute terms.",
              "It also lets through a large utility with a coal fleet and many other businesses, which sits well under the line on revenue."
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
        "intro": "Société Générale's policy defines the term in its glossary. The definition explains what building new coal means.",
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
            "means": "This definition of “Thermal Coal Developing Companies” is narrower than the usual meaning. No official body defines a coal “developer.” The word generally means any company building new coal capacity, but Société Générale counts new power capacity only above 300 MW. Below that line, the company is not a developer and this commitment does not apply. So a string of smaller plants falls outside the restriction, however much they add up to.",
            "lets_through": [
              "The words “strictly above” let through every new coal unit of 300 MW or less. A plant of exactly 300 MW is outside the definition.",
              "It also lets through building in stages. The wording does not add together several units below the threshold on one site, or the same developer's projects on different sites."
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
            "means": "This explains whose development counts. A company is treated as developing an asset only if it owns a majority of it.",
            "lets_through": [
              "This wording lets through minority stakes, joint ventures, and consortium structures. Large coal projects are routinely built by consortia in which no single sponsor holds a majority.",
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
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Buying a coal mine or plant on its own is refused. Buying a company that owns coal often gets through, unless coal is over 25% of its revenue or it is a large developer.",
      "actual_reading": "it will not finance or advise on buying or selling coal mines, coal plants, companies building new coal as majority owners, or companies earning more than 25% of revenue from coal",
      "gaps": [
        {
          "title": "Buying the whole company instead",
          "phrase_refs": [
            "twenty-five-per-cent"
          ],
          "text": "A company is covered only if more than 25% of its revenue is linked to coal. A large utility with a coal fleet and many other businesses sits under that line."
        },
        {
          "title": "Small new plants and minority stakes",
          "phrase_refs": [
            "300mw",
            "majority"
          ],
          "text": "A company building new coal power counts as a developer only above 300 MW, and only as majority owner. A company with a 40% share in a new coal plant is not one."
        }
      ],
      "in_practice": "Thermal coal is the coal burned in power stations. This commitment is about deals that change who owns coal. It covers three things: coal assets themselves, companies developing new coal, and companies earning more than 25% of their revenue from coal.\n\nTake a company that wants to buy a coal power plant. Société Générale will not finance the purchase or advise on it, and the same goes for the owner that wants to sell.\n\nNow take a large utility that owns a coal fleet alongside gas, wind, and networks, with coal at 15% of its revenue. A buyer that wants the whole utility, coal plants included, can get Société Générale's help. Because the company is under 25%, the deal is not covered.\n\nThen take a company building a new 250 MW coal plant. It is not a “Thermal Coal Developing Company,” because its new power capacity is not above 300 MW. Nor is a company with a minority stake in a large new plant. Buying either company is not covered, unless coal is over 25% of its revenue.\n\nThis commitment also has no effect on coal that stays with its owner, so a plant that is never sold keeps running. And a buyer planning to close a plant early is refused on the same terms as one planning to run it for decades.",
      "gets_right": "It covers every financial product and service aimed at these deals, from loans to advice. It is not limited to new clients, or to financing set aside for a named project."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not help buy or sell thermal coal assets, coal developers, or companies above 25% coal revenue. We have not reviewed its financing against this commitment yet.",
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
