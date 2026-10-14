/* Commitment data — generated from commitments/commitment-societe-generale-txn-lng-shale-arctic.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-txn-lng-shale-arctic",
    "bank": "Société Générale",
    "commitment_number": 12,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Restriction on LNG Fed by Shale or Arctic Gas",
    "short_title": "Restriction on LNG Fed by Shale or Arctic Gas",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026. It is a feedstock rule: the bank will not finance liquefaction and export capacity supplied by shale gas or by Arctic gas. Whether it applies to a given plant depends on where the gas came from, and the policy does not say how that is established.",
    "naive_reading": "it will not finance export plants for shale gas or Arctic gas",
    "plain_language_note": "This is a single line. Two of its terms decide how far the exclusion reaches, and the glossary draws one of them on a map.",
    "sources_intro": "This exclusion comes from a single policy document. We quote two passages from it below: the exclusion itself, and the glossary entry that draws the Arctic boundary.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=12",
        "watchtower_document_id": 23944,
        "watchtower_institution": "societe_generale",
        "synthesis_run": 197,
        "version_label": "April 2026",
        "published": "2026-04-01",
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "published_source": null,
        "published_confidence": null,
        "verbatim_check": {
          "document": "23944-societe-generale-oil-gas.md",
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
        "source_id": "ogp2026",
        "title": "The promise",
        "intro": "This passage sets a size test for the project and a source test for the gas.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not execute dedicated transactions or provide dedicated financial products and services when the underlying activities are… new projects or significant expansion of LNG production or exportation fed by shale gas or Arctic gas",
        "plain_rendering": "Société Générale will not execute dedicated transactions, or provide dedicated financial products and services, when the underlying activities are new projects or significant expansion of LNG production or exportation fed by shale gas or Arctic gas.",
        "phrases": [
          {
            "id": "scope-dedicated",
            "label": "dedicated transactions",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              27,
              49
            ],
            "plain_range": [
              34,
              56
            ],
            "means": "This explains what financing this commitment covers: dedicated financing only. Société Générale refuses financing raised for a named activity, where it is clear what the financing is used for. But it does not refuse the company. The same borrower can come back for a general loan, a credit line, or a bond issue, and this commitment does not apply.",
            "lets_through": [
              "The word “dedicated” lets through general corporate financing. A revolving credit facility, a term loan, or a bond issued at group level is not raised for a named activity. So this commitment never applies, however much of the borrower's business is the thing it names."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "significant-expansion",
            "label": "significant expansion",
            "type": "undefined_term",
            "verbatim_range": [
              155,
              176
            ],
            "plain_range": [
              163,
              184
            ],
            "means": "This explains the size test an addition to an existing plant has to meet. The policy gives no number, no percentage of capacity, and no reference point, and it does not say who decides.",
            "lets_through": [
              "The word “significant” lets through small capacity additions and debottlenecking, which means removing whatever caps a plant's throughput so it produces more without being rebuilt. That is how existing plants grow most cheaply. A series of small additions can add a train's worth of capacity without any single step being significant.",
              "It also lets through any expansion a sponsor and a credit committee agree is not significant, since nothing in the policy contradicts them."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          },
          {
            "id": "fed-by",
            "label": "fed by shale gas or Arctic gas",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              210,
              240
            ],
            "plain_range": [
              218,
              248
            ],
            "means": "This explains the source test: the gas entering the plant has to be shale gas or Arctic gas. But the policy sets out no method for attributing feedstock, and no threshold for how much of a plant's supply must come from either source.",
            "lets_through": [
              "This wording lets through plants supplied from a pipeline network. Gas from shale and conventional fields is mixed long before it reaches a terminal, and no molecule can be traced back to a formation.",
              "It also lets through plants with mixed supply, because the policy names no percentage. A terminal drawing most of its gas from shale can point to its conventional contracts.",
              "It also lets through gas bought on the market rather than contracted from a named field. In that case, the seller is a trader and the origin is not part of the transaction."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "definition",
        "source_id": "ogp2026",
        "title": "The definition of “the Arctic region”",
        "intro": "How Société Générale's policy defines it in the glossary. It says where the Arctic starts, using one test at sea and another on land.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "The exclusion capitalises Arctic and nothing else marks it as a defined term; the definition is three pages further on."
        },
        "verbatim": "Arctic region: For the sake of this policy, the Arctic region is defined as the following: Offshore areas: “Arctic waters” as defined in the Convention on the Safety of Life at Sea (regulation XIV/1.3) and the International Maritime Organization (IMO) Polar Code (see map p 9 of Annex 10). Onshore areas: North of the Arctic Circle (north of 66°33′47.2″ N)",
        "plain_rendering": "“Arctic region” means, for the sake of this policy: offshore, the “Arctic waters” defined in the Convention on the Safety of Life at Sea and the International Maritime Organization Polar Code; onshore, North of the Arctic Circle (north of 66°33′47.2″ N).",
        "phrases": [
          {
            "id": "arctic-circle",
            "label": "North of the Arctic Circle (north of 66°33′47.2″ N)",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              305,
              356
            ],
            "plain_range": [
              202,
              253
            ],
            "means": "This definition of “the Arctic region” is narrower in one way and wider in another. Where the Arctic starts is a choice. On land, Société Générale uses the strictest common line, the Arctic Circle itself, while definitions based on the tree line reach farther south. Because it is a line of latitude, a field one kilometer south of it is not Arctic gas under this policy. Offshore, it uses the ice boundary from shipping conventions, a line that in places runs south of the Circle.",
            "lets_through": [
              "This wording lets through gas fields in the sub-Arctic producing regions just below the Circle. That includes much of the West Siberian gas province, which supplies Russian liquefaction capacity.",
              "It also lets through onshore gas produced south of the line and piped north into Arctic infrastructure, which the definition does not follow.",
              "It also lets through any field where the license area straddles the Circle. The definition deals with location, not with how a field is split across the line."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          }
        ],
        "ordinary_direction": "mixed",
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "lng",
      "shale",
      "debottlenecking",
      "commingled-gas"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 12,
      "commitment_id": "a75246fe-99ff-5227-b6c4-a0e2f4cf2933",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=12",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": false,
      "quotation_matched_note": "Watchtower records this quotation as unmatched. Its stored quote splices the lead-in and the bullet with an ellipsis, and that spliced string does not occur verbatim in the parsed document. The wording quoted on this page was taken from the policy text itself and is unaffected.",
      "quotation_char_range": null,
      "summary_text": "The Group will not provide project-level financing or dedicated financial services for new projects or significant expansions of LNG production or export facilities fed by shale gas or Arctic gas.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "arctic",
            "shale"
          ],
          "value_chain": "midstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": null,
          "certainty": null
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
      "exceptions": [
        {
          "condition": "Exceptions for pre-existing business commitments or opportunities at an advanced stage of negotiation.",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": true,
          "where": "Section 7, Application date and updates, page 11"
        },
        {
          "condition": "Any deviation from this policy may be granted, on an exceptional basis, by a Societe Generale group oversight committee chaired by senior management.",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": true,
          "standing": true,
          "where": "Section 5.2, Client engagement, page 7"
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 2 removed, 0 split, 1 fields corrected]\nCHANGES:\n- Removed commitment 1 (upstream O&G exposure reduction): Quantitative portfolio reduction targets without a defined endpoint are out of scope.\n- Removed commitment 2 (GHG financed emissions reduction): Quantitative portfolio reduction targets without a defined endpoint are out of scope.\n- Commitment 5 (phase out private companies generating almost all revenues from upstream O&G): Removed exception 'Existing exposure will be phased out until extinction...' as this describes the phase-out mechanism itself, not an exception to the rule.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "Exceptions for pre-existing business commitments or opportunities at an advanced stage of negotiation.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "watchtower",
        "governance_process": false,
        "standing": true,
        "where": "Section 7, Application date and updates, page 11"
      },
      {
        "condition": "Any deviation from this policy may be granted, on an exceptional basis, by a Societe Generale group oversight committee chaired by senior management.",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "watchtower",
        "governance_process": true,
        "standing": true,
        "where": "Section 5.2, Client engagement, page 7"
      }
    ],
    "general_clauses_page": null,
    "disagreements": [
      {
        "field": "weaknesses",
        "severity": "omission",
        "watchtower": "No weakness recorded.",
        "bank_green": "The commitment turns on whether a plant is 'fed by shale gas or Arctic gas', and the policy sets out no method for attributing feedstock. 'Significant expansion' is also undefined — the same shape of gap Watchtower flags on Commitments 2, 3, 8 and 14.",
        "action": "Add a weakness on 'significant expansion' and on the absent feedstock attribution rule."
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
        "total": 1,
        "previous_editorial_rating": "hollowed",
        "changed": false
      },
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "strength_reason": "This commitment depends on knowing where a plant's gas comes from, but gas is mixed long before it arrives. And “significant” has no number, so most growth can be called small.",
      "actual_reading": "it will not give financing labeled for a new gas export plant, or an expansion it counts as significant, where the gas can be traced to shale or to the Arctic as the policy maps it",
      "gaps": [
        {
          "title": "Gas mixed in a pipeline network",
          "text": "The plant has to be “fed by” shale or Arctic gas, but the policy gives no way to trace the gas and sets no share. Gas in a network comes from many fields, so a plant can point to its conventional supply.",
          "phrase_refs": [
            "fed-by"
          ]
        },
        {
          "title": "Expansions called small",
          "text": "Growth at an existing plant counts only if it is “significant.” The policy gives no number and does not say who decides, so a series of small additions can add a great deal.",
          "phrase_refs": [
            "significant-expansion"
          ]
        },
        {
          "title": "Gas fields just south of the line",
          "text": "On land, the Arctic starts at the Arctic Circle. So gas fields just south of it, in regions that are Arctic in climate, are outside this commitment.",
          "phrase_refs": [
            "arctic-circle"
          ]
        }
      ],
      "in_practice": "LNG is natural gas cooled into a liquid so it can be shipped. This commitment covers the plants that do that, when shale gas or Arctic gas feeds them.\n\nThe question is where the gas comes from. Shale gas and ordinary gas usually enter the same pipeline network, and they mix long before they reach a plant. The policy sets no method for tracing gas and no share that counts.\n\nTake a plant on a network fed mostly by shale fields. It can point to contracts with conventional producers, or it can buy gas from a trader who does not say where the gas came from. Either way, nothing shows the plant is “fed by” shale gas.\n\nA plant that already exists can grow step by step. Each step is small, and the policy never says what makes one “significant,” so each step can be judged outside this commitment.\n\nArctic gas has a clear line: on land, it is the Arctic Circle. So a field one kilometer south of it is not Arctic gas under this policy.\n\nThis commitment also covers only financing raised for a named project. The plant's owner can take a general loan to the company as a whole, which does not say what it pays for.\n\nSo what is left is a new plant clearly supplied by shale or Arctic fields, financed with a loan that names it."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance new or significantly expanded LNG capacity fed by shale or Arctic gas. We have not reviewed its financing against this commitment yet.",
    "headline_figure": {
      "display": "Not yet checked",
      "combines": "No financing has been linked to this commitment yet",
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-10-02",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 197, document 23944",
    "reading": "drafted"
  }
};
