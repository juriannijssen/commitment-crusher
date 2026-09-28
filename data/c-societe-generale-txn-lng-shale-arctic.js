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
    "plain_language_note": "One line. Two of its terms decide the reach of the exclusion, and one of them is drawn on a map in the glossary.",
    "sources_intro": "One policy document states this exclusion. Two passages are quoted here: the exclusion, and the glossary entry that draws the Arctic boundary.",
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
        "intro": "It sets a size test on the project and a source test on the gas.",
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
            "means": "This explains what financing this commitment covers: dedicated financing only. Société Générale says no to a request for financing raised for a named activity, where it is clear what the financing is used for. It does not say no to the company. The same borrower can come back for a general loan, a credit line or a bond issue, and this commitment has nothing to say about it.",
            "lets_through": [
              "The word “dedicated” lets through general corporate financing. A revolving credit facility, a term loan or a bond issued at group level is not raised for a named activity, so this commitment never applies, however much of the borrower's business is the thing it names."
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
            "means": "This explains the size test an addition to an existing plant has to meet. The policy gives no number, no percentage of capacity and no reference point, and it does not say who decides.",
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
            "means": "This explains the source test. The gas entering the plant has to be shale gas or Arctic gas. The policy sets out no method for attributing feedstock and no threshold for how much of a plant's supply must come from either source.",
            "lets_through": [
              "This wording lets through plants supplied from a pipeline network. Gas from shale and conventional fields is commingled long before it reaches a terminal, and no molecule can be traced to a formation.",
              "It also lets through plants with mixed supply, because the policy names no percentage. A terminal drawing most of its gas from shale can point to its conventional contracts.",
              "It also lets through gas bought on the market rather than contracted from a named field, where the seller is a trader and the origin is not part of the transaction."
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
        "intro": "How Société Générale's policy defines it in the glossary. It says where the Arctic starts. It uses one test at sea and another on land.",
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
            "means": "This definition of “the Arctic region” is narrower in one way and wider in another. Where the Arctic starts is a choice. Onshore Société Générale takes the strictest common line, the Arctic Circle itself, where definitions built on the tree line reach further south. It is a line of latitude, so a field one kilometre south of it is not Arctic gas under this policy. Offshore it borrows the shipping conventions' ice boundary, which in places runs south of the Circle.",
            "lets_through": [
              "This wording lets through gas fields in the sub-Arctic producing regions that sit just below the circle, including much of the West Siberian gas province that supplies Russian liquefaction capacity.",
              "It also lets through onshore gas produced south of the line and piped north into Arctic infrastructure, which the definition does not follow.",
              "It also lets through any field where the licence area straddles the circle, since the definition speaks to location and not to apportionment."
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
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "The exclusion turns on tracing gas to its formation, and the reason that cannot be done is a fact about pipelines rather than an opinion about the bank.",
          "text": "Gas mixes. Once it enters a pipeline network, it blends with gas from every other field. Nothing further down the line can say which gas came from shale.\n\nThis exclusion asks whether an LNG plant is fed by shale gas. For a plant with its own pipeline from a named field, that has an answer. For a plant connected to a national network, it does not. And outside a few integrated projects, that is how most export plants get their gas.\n\nThe policy sets no tracing rule and no threshold. It does not say how much shale gas puts a plant inside the rule, or how anyone would show it.\n\nThe size test has a smaller version of the same problem. Expansion is excluded only if it is “significant”, and no number is given.\n\nArctic gas is different. Arctic projects are few, named and easy to identify."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "Two things here are done well.\n\nThe first is that the Arctic line is drawn, not just named. On land, the glossary gives an exact latitude. At sea, it points to the Polar Code, an international shipping standard. A policy that just says “Arctic” leaves the bank to decide where it starts when a deal arrives. This line can be checked on a map.\n\nThe second is that the exclusion covers export as well as production. A rule that stops at the plant misses the export terminals that make the plant worth building. This one names both.\n\nWhat undoes this is the missing tracing rule. A precise line is only useful with a way to tell whether a plant's gas came from inside it. There is none. The bank did the hard part and left out the easy one."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "This rule excludes LNG made from certain gas, but publishes no rule for proving that a plant uses it.\n\nThe Arctic definition is precise: an exact latitude on land, plus the Polar Code at sea.\n\nThe other approach is to restrict new LNG plants outright, whatever gas they use. The reasoning is that plants built today lock in gas supply for decades. That test needs no tracing and no threshold. It only asks whether a plant is being built.\n\nSociété Générale uses the gas-source test here and in the line before, and the plant test nowhere. Two gas-source tests without tracing reach less than one plant test would."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "what_needs_to_change": [
        {
          "title": "Publish a tracing rule",
          "content": "Say how much of a plant's gas must be shale or Arctic gas for the rule to apply, and how that is shown. Without that, no plant on a network can be tested."
        },
        {
          "title": "Put a number on “significant”",
          "content": "Expansion is excluded only if it is “significant”, and the policy never says what that means. A share of existing capacity would settle it."
        },
        {
          "title": "Follow the gas south of the line",
          "content": "The Arctic is defined by a line on the map. Gas produced just south of it and piped into Arctic export plants is outside the rule."
        }
      ],
      "what_needs_to_change_closing": "Until then, no plant on a pipeline network can be tested against this rule.",
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Verdict options were drafted before the analysis was re-based on Watchtower's record. They are Bank.Green interpretation and sit below the opinion boundary, but they have not been re-read against the derived rating.",
      "strength_reason": "Significant is undefined, and gas from shale is commingled in the pipeline network long before it reaches a plant."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance new or significantly expanded LNG capacity fed by shale or Arctic gas. We have not yet reviewed what it financed against this commitment.",
    "headline_figure": {
      "display": "Not yet checked",
      "combines": "No financing has been linked to this commitment yet",
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-09-28",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 197, document 23944",
    "reading": "drafted"
  }
};
