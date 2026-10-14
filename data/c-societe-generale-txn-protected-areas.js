/* Commitment data — generated from commitments/commitment-societe-generale-txn-protected-areas.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-txn-protected-areas",
    "bank": "Société Générale",
    "commitment_number": 13,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Restriction on Drilling in Protected Areas",
    "short_title": "Restriction on Drilling in Protected Areas",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026. It names four kinds of protected place and refuses to finance oil and gas development inside them. A second passage, a page later in the same section, says what the bank does when the exclusion does not apply.",
    "naive_reading": "it will not finance oil and gas drilling inside protected natural areas",
    "plain_language_note": "This is one long sentence and one shorter one. The lists in the first are precise. What decides the exclusion's reach is which categories they leave out, and what the word about position means.",
    "sources_intro": "This exclusion comes from a single policy document. We quote two passages from it below: the exclusion itself, and the weaker test for the same places when the exclusion does not apply.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=13",
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
        "intro": "This is the exclusion itself. It names three activities, one part of the oil and gas chain, and four kinds of protected place.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not execute dedicated transactions or provide dedicated financial products and services when the underlying activities are… development, construction or expansion of upstream oil and gas operations located within a UNESCO World Heritage Site, a Ramsar site, a nationally protected area (IUCN categories I-IV) or a site of the Alliance for Zero Extinction.",
        "plain_rendering": "Société Générale will not execute dedicated transactions, or provide dedicated financial products and services, when the underlying activities are development, construction or expansion of upstream oil and gas operations located within a UNESCO World Heritage Site, a Ramsar site, a nationally protected area (IUCN categories I-IV) or a site of the Alliance for Zero Extinction.",
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
            "id": "upstream-within",
            "label": "upstream oil and gas operations located within",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              181,
              227
            ],
            "plain_range": [
              189,
              235
            ],
            "means": "This explains two conditions in four words. The activity has to be upstream, meaning finding and producing oil and gas rather than moving or processing it. And it has to sit inside the boundary of the protected place.",
            "lets_through": [
              "This wording lets through pipelines, roads, terminals, and processing plants, none of which is upstream. A protected area crossed by infrastructure serving fields outside it is not covered by this commitment.",
              "It also lets through wells drilled outside a boundary and directed underneath it. Extended-reach drilling routinely travels several kilometers horizontally, and the operation is located where the rig stands.",
              "It also lets through development just outside a boundary whose effects fall inside it, such as water withdrawal, spills, noise, access roads, and flaring."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          },
          {
            "id": "iucn",
            "label": "(IUCN categories I-IV)",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              301,
              323
            ],
            "plain_range": [
              309,
              331
            ],
            "means": "This explains which nationally protected areas count. The IUCN classifies protected areas in six categories by management objective, from strict nature reserves at I to sustainable-use areas at VI. This commitment takes the first four.",
            "lets_through": [
              "This wording lets through IUCN categories V and VI, which together account for a large share of the world's protected land. They include most protected areas where extractive activity is legally possible in the first place.",
              "It also lets through nationally protected areas with no IUCN category. That is common outside the countries that report fully to the World Database on Protected Areas."
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
        "role": "condition",
        "source_id": "ogp2026",
        "title": "The second test",
        "intro": "This passage covers the same places when the exclusion above does not apply.",
        "location": {
          "distance": "nearby",
          "signposting": "none",
          "signposting_note": "The exclusion gives no indication that a second and weaker test covers the same protected places a page further on."
        },
        "verbatim": "For activities located within, or with potential material impacts on a protected area, if the exclusion criteria are not triggered, evidence is provided that the development is legally permitted and consistent with any regulatory management plans for such area.",
        "plain_rendering": "For activities located within, or with potential material impacts on a protected area, if the exclusion criteria are not triggered, Société Générale looks for evidence that the development is legally permitted and consistent with any regulatory management plans for such area.",
        "phrases": [
          {
            "id": "legally-permitted",
            "label": "legally permitted and consistent with any regulatory management plans",
            "type": "undefined_term",
            "verbatim_range": [
              177,
              246
            ],
            "plain_range": [
              192,
              261
            ],
            "means": "This explains the standard applied to protected areas this commitment does not cover. It asks whether the host state allows the development, and whether it fits that state's own plan for the area.",
            "lets_through": [
              "This wording lets through any development a government has authorized. Where a state has opened a protected area to drilling, the permit is the evidence, so the authorization itself meets the test.",
              "It also lets through areas with no management plan, since the requirement is consistency with any plan that exists.",
              "It also covers everything the categories in the quote above leave out, because this test is what applies to them instead."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "upstream",
      "iucn-categories",
      "ramsar",
      "aze",
      "extended-reach-drilling"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 13,
      "commitment_id": "13911cda-15bc-5a4b-9634-b73276ac15b0",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=13",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": false,
      "quotation_matched_note": "Watchtower records this quotation as unmatched. Its stored quote splices the lead-in and the bullet with an ellipsis, and that spliced string does not occur verbatim in the parsed document. The wording quoted on this page was taken from the policy text itself and is unaffected.",
      "quotation_char_range": null,
      "summary_text": "The Group will not provide project-level financing or dedicated financial services for upstream oil and gas operations located within UNESCO World Heritage Sites, Ramsar sites, nationally protected areas (IUCN I-IV), or Alliance for Zero Extinction sites.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": false
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
        "bank_green": "The exclusion covers IUCN categories I-IV of six. Categories V and VI are outside it, and a weaker test applies there — legally permitted and consistent with any management plan — printed a page later under a different heading.",
        "action": "Add a weakness on the category cut, and record the evaluation-priority test as a carve-out."
      },
      {
        "field": "geographic_scope.global_scope",
        "severity": "contradiction",
        "watchtower": "`false`.",
        "bank_green": "The policy states it is applicable worldwide and this commitment names no territory. Every other commitment in the run is `true`.",
        "action": "Check whether this is a tagging error."
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
        "total": 1,
        "previous_editorial_rating": "hollowed",
        "changed": false
      },
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "strength_reason": "Drilling inside four kinds of protected place cannot get a loan for that project. But pipelines through them, wells reaching under them, and the less strict categories are left to a permit check.",
      "actual_reading": "it will not give financing labeled for oil and gas production built or expanded inside a World Heritage Site, a Ramsar wetland, a protected area in IUCN categories I to IV, or an Alliance for Zero Extinction site",
      "gaps": [
        {
          "title": "Pipelines, roads, and plants",
          "text": "This commitment covers upstream work: finding and producing oil and gas. Pipelines, roads, terminals, and processing plants are not upstream, so they can cross a protected area.",
          "phrase_refs": [
            "upstream-within"
          ]
        },
        {
          "title": "Wells drilled from outside the boundary",
          "text": "The operation must be located within the area, so a rig just outside the boundary can drill sideways for kilometers and produce from underneath it.",
          "phrase_refs": [
            "upstream-within"
          ]
        },
        {
          "title": "Categories V and VI, and a permit",
          "text": "Only IUCN categories I to IV count. In categories V and VI, and in areas with no category, the bank asks only for evidence the project is legally permitted.",
          "phrase_refs": [
            "iucn",
            "legally-permitted"
          ]
        }
      ],
      "in_practice": "This commitment names four kinds of protected place. World Heritage Sites and Ramsar wetlands are on international lists, and Alliance for Zero Extinction sites hold the last home of a threatened species. National protected areas count when they fall in categories I to IV of the IUCN, the international nature body that ranks them.\n\nA company that wants to drill a new field inside one of these places cannot get a loan for that field from Société Générale.\n\nA pipeline that carries oil from a field outside the area straight across it is a different matter. Pipelines are not upstream, so this commitment does not apply. Nor does it apply to a road or a processing plant inside the boundary.\n\nA rig can also be placed just outside the boundary. Wells can be drilled sideways for several kilometers, under the protected area, and the operation counts as being where the rig stands.\n\nProtected areas in IUCN categories V and VI are left out, and so are areas with no category. There, the bank asks for evidence that the project is legally permitted and fits any management plan. Where a government has opened an area to drilling, its permit meets that test.\n\nThis commitment also covers only financing raised for a named project. The company can still take a general loan to the company as a whole, which does not say what it pays for.",
      "gets_right": "It names four recognized lists of protected places instead of leaving the choice to the bank. Inside them, new or expanded oil and gas production cannot get a loan that names it."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance oil and gas development inside World Heritage Sites, Ramsar wetlands, strictly protected national areas, or Alliance for Zero Extinction sites. We have not reviewed its financing against this commitment yet.",
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
