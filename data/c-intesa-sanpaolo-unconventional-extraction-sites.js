/* Commitment data — generated from commitments/commitment-intesa-sanpaolo-unconventional-extraction-sites.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "intesa-sanpaolo-unconventional-extraction-sites",
    "bank": "Intesa Sanpaolo",
    "commitment_number": 3,
    "category": "fracking",
    "effective_date": null,
    "title": "Intesa Sanpaolo's Unconventional Extraction Sites",
    "short_title": "Unconventional Extraction Sites",
    "subject": "Unconventional Extraction Sites",
    "article_published": null,
    "intro": "Intesa Sanpaolo states this commitment in its Rules on the Oil & Gas Sector, published in June 2024. It is the first of three rules the bank sets for unconventional oil and gas. This one is about the sites themselves.",
    "naive_reading": "it will not finance fracking, tar sands or coalbed methane anywhere",
    "plain_language_note": "The plain version names the bank and turns the list item into a full sentence. The wording is otherwise the bank's own.",
    "sources_intro": "One policy document states this commitment. Two passages from it are quoted here:",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "rules2024",
        "document_title": "Intesa Sanpaolo Rules on the Oil & Gas Sector",
        "document_url": null,
        "synthesis_url": "https://watchtower.bank.green/institution/intesa_sanpaolo/document/8195/synthesis?run=261&commitment=3",
        "watchtower_document_id": 8195,
        "watchtower_institution": "intesa_sanpaolo",
        "synthesis_run": 261,
        "version_label": "June 2024",
        "published": "2024-06-30",
        "published_source": null,
        "published_confidence": null,
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "verbatim_check": {
          "document": "8195-intesa-sanpaolo-oil-gas.md",
          "passages": 5,
          "found": 5,
          "missing": []
        }
      }
    ],
    "clauses": [
      {
        "index": 1,
        "role": "rule",
        "source_id": "rules2024",
        "title": "The promise",
        "intro": "This is where Intesa Sanpaolo makes the commitment.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "With reference to this activity, the Group commits to: not finance projects involving unconventional resource extraction sites",
        "plain_rendering": "Intesa Sanpaolo commits to: not finance projects involving unconventional resource extraction sites.",
        "phrases": [
          {
            "id": "projects",
            "label": "projects",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              67,
              75
            ],
            "plain_range": [
              40,
              48
            ],
            "means": "This explains what financing this commitment covers: project financing, a loan raised for one named project.",
            "lets_through": [
              "This wording blocks project financing, but it allows general corporate financing (a loan to the company as a whole, which it can spend on anything). A fracking company borrowing for itself is not asking for project financing."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "unconventional-resource",
            "label": "unconventional resource",
            "type": "undefined_term",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              86,
              109
            ],
            "plain_range": [
              59,
              82
            ],
            "means": "This explains what the restriction covers: the four resources the document's glossary lists, which are shale oil, shale gas, tar sands and coalbed methane.",
            "lets_through": [
              "This wording lets through other extraction a reader might expect to see here. Deepwater and ultra-deepwater oil, extra-heavy oil and Arctic drilling are not unconventional resources under this glossary."
            ],
            "defined_in_clause": null,
            "bank_definition": {
              "quote": "Unconventional resources — Shale/tight oil: bituminous solids contained in the geological formation of shale, a fine-grained sedimentary rock with low permeability consisting mainly of clay flakes … Tar sands/oil sands: loose sands or partially consolidated sandstones containing a natural mixture of sand, clay and water, saturated with a dense and extremely viscous form of oil (bitumen) … Coal bed methane/coal seam gas: methane gas extracted from the layers of coal present in some geological basins",
              "source_id": "rules2024"
            }
          },
          {
            "id": "extraction-sites",
            "label": "extraction sites",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              110,
              126
            ],
            "plain_range": [
              83,
              99
            ],
            "means": "This explains where the restriction stops: at the site where the oil or gas comes out of the ground.",
            "lets_through": [
              "This wording lets through project financing for what carries and processes the same oil and gas. Pipelines, storage, processing plants and export terminals are not extraction sites."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "exception",
        "source_id": "rules2024",
        "title": "What it allows",
        "intro": "Two sections later, under sustainable finance, the abstract names one kind of financing the rules never stop.",
        "location": {
          "distance": "later_in_document",
          "signposting": "none",
          "signposting_note": "The restriction gives no sign that a later section reaches back into it, and the sustainable finance section does not name the restrictions it overrides."
        },
        "verbatim": "Consequently, financing aligned with the European taxonomy and classified as sustainable from an environmental point of view is always permitted, in line with internal classification rules.",
        "plain_rendering": "So financing aligned with the European taxonomy and classified as sustainable from an environmental point of view is always permitted, in line with internal classification rules.",
        "phrases": [
          {
            "id": "always-permitted",
            "label": "always permitted",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "is always permitted",
            "not_in_synthesis": false,
            "verbatim_range": [
              128,
              144
            ],
            "plain_range": [
              117,
              133
            ],
            "means": "The words \"always permitted\" put this financing outside every restriction in the document, including this commitment.",
            "lets_through": [
              "This wording lets through project financing at an unconventional site, where the financing itself is classified as environmentally sustainable."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "project-finance",
      "corporate-finance",
      "unconventional",
      "shale",
      "oil-sands",
      "upstream"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 261,
      "document_id": 8195,
      "institution": "intesa_sanpaolo",
      "commitment_index": 3,
      "commitment_id": "f50b4e7a-44d3-5e39-8232-38dbe25f1100",
      "url": "https://watchtower.bank.green/institution/intesa_sanpaolo/document/8195/synthesis?run=261&commitment=3",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        13830,
        13902
      ],
      "summary_text": "Intesa Sanpaolo excludes project financing for unconventional oil and gas extraction sites globally (including shale oil/gas, tar sands, and coalbed methane).",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "shale",
            "oil_sands",
            "coalbed methane"
          ],
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
      "exceptions": [
        {
          "condition": "Financing aligned with the European taxonomy and classified as environmentally sustainable under internal classification rules is always permitted",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": null
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 3 fields corrected]\nCHANGES:\n- Intesa Sanpaolo commits to phase out all outstanding exposures subject to unconventional resources exclusions (section 3.2.2) by 2025.: Changed activity_scope, relationship_status, and transaction_status to 'new_and_existing' — schema dictates using 'new_and_existing' for phase-out commitments when the policy does not explicitly distinguish between new and existing stages.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [],
    "general_clauses_page": null,
    "disagreements": [],
    "assessment": {
      "strength": "crushed",
      "strength_derivation": {
        "rule": "spec v3.29 §4.1 — the gap between the naive reading and what it catches",
        "inputs_source": "Watchtower record",
        "record_score": "hollowed",
        "weakness": false,
        "commitment_specific_carve_outs": 1,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 2
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Project loans for shale, tar sands and coalbed methane sites are blocked. General loans to the companies that run them, and the pipelines and plants around them, are not.",
      "actual_reading": "it will not give project loans for sites that extract shale oil, shale gas, tar sands or coalbed methane",
      "gaps": [
        {
          "title": "Loans to the company go through",
          "phrase_refs": [
            "projects"
          ],
          "text": "The commitment covers project financing, a loan for one named project. A fracking company can take a general loan to the company and spend it on fracking."
        },
        {
          "title": "Pipelines and plants around the site",
          "phrase_refs": [
            "extraction-sites"
          ],
          "text": "The restriction stops where the oil or gas leaves the ground. Pipelines, storage, processing plants and export terminals are not extraction sites."
        }
      ],
      "in_practice": "The document's glossary says what unconventional means here: shale oil, shale gas, tar sands and coalbed methane. Fracking is how most shale oil and gas is extracted.\n\nTake a company that wants to drill a new fracking site. If it asks Intesa Sanpaolo for a project loan, a loan raised for that one site, the bank will say no. The same goes for a tar sands mine.\n\nNow take the same company asking for a general loan. A general loan goes to the company as a whole, and it can spend it on anything. This commitment does not apply. The company can use that loan to frack.\n\nThe commitment also stops at the site. Oil and gas has to be moved, stored and processed once it leaves the ground. Take a pipeline from a fracking field, a plant that processes tar sands, or an export terminal. None of them is an extraction site. The bank can give project loans for all of them.\n\nFinancing the bank classifies as environmentally sustainable is also always permitted, even at one of these sites.\n\nSo what is blocked is one kind of loan, at one point in the chain. The companies, and the pipelines and plants their sites depend on, can still be financed."
    }
  },
  "evidence": {
    "status": "financing_found",
    "teaser": "That is what Intesa Sanpaolo put into export terminals and pipelines built for unconventional gas, against a commitment written to stop financing it.",
    "what_it_funded": "export terminals and pipelines built for unconventional gas",
    "headline_figure": {
      "display": "$1.6B",
      "combines": "Seven 2025 financings across five projects: three LNG export terminals (Rio Grande, CP2, Plaquemines) and three gas pipelines (Blackcomb, Traverse, Bay Runner)",
      "complete": false
    },
    "deals": [
      {
        "id": "intesa-rio-grande-lng-2025",
        "company": "Rio Grande LNG",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 719050561.52206,
        "amount_display": "$719.1M",
        "entities": [
          "Rio Grande LNG Train 5 LLC",
          "Rio Grande LNG Train 4 LLC",
          "Rio Grande LNG Phase 1 FinCo LLC"
        ],
        "instruments": [],
        "contradiction": "An export terminal being built at Brownsville, on the Texas Gulf Coast. It chills fracked gas until it turns liquid, so ships can carry it abroad. This commitment covers the sites where gas is drilled. A terminal that chills it is not one of them. Three financings sit behind this figure: two of the terminal's units, and the company funding its first phase.",
        "phrase_refs": [
          "extraction-sites"
        ],
        "source_url": null
      },
      {
        "id": "intesa-cp2-lng-2025",
        "company": "CP2 LNG",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 527808326.55,
        "amount_display": "$527.8M",
        "entities": [
          "CP2 LNG Holdings LLC"
        ],
        "instruments": [],
        "contradiction": "An export terminal under construction in Cameron Parish, Louisiana. It takes in gas by pipeline and chills it for shipping overseas. Much of that gas is fracked, which is what this commitment is about. But the commitment stops at the drilling site. This terminal is hundreds of miles from one.",
        "phrase_refs": [
          "extraction-sites"
        ],
        "source_url": null
      },
      {
        "id": "intesa-blackcomb-traverse-2025",
        "company": "Blackcomb and Traverse pipelines",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 206114355.866761,
        "amount_display": "$206.1M",
        "entities": [
          "Blackcomb & Traverse Pipeline LLC"
        ],
        "instruments": [],
        "contradiction": "Two pipelines being built across Texas. They carry fracked gas from the west of the state to the Gulf Coast. This commitment covers the sites the gas is drilled at. A pipeline moves that same gas without being one of those sites.",
        "phrase_refs": [
          "extraction-sites"
        ],
        "source_url": null
      },
      {
        "id": "intesa-bay-runner-pipeline-2025",
        "company": "Bay Runner Pipeline",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 95627210.0703858,
        "amount_display": "$95.6M",
        "entities": [
          "Bay Runner Pipeline LLC"
        ],
        "instruments": [],
        "contradiction": "A gas pipeline serving the export terminals on the Gulf Coast. It carries the same fracked gas this commitment is written about. But it carries it away from the drilling site, and the wording covers only the site itself.",
        "phrase_refs": [
          "extraction-sites"
        ],
        "source_url": null
      },
      {
        "id": "intesa-venture-global-plaquemines-2025",
        "company": "Venture Global Plaquemines LNG",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 44109117.8023455,
        "amount_display": "$44.1M",
        "entities": [
          "Venture Global Plaquemines LNG LLC"
        ],
        "instruments": [],
        "contradiction": "An export terminal on the Mississippi River in Louisiana. It chills gas from US shale fields so ships can carry it abroad. Shale gas is one of the resources this commitment names. The terminal is not a drilling site, so the restriction never reaches it.",
        "phrase_refs": [
          "extraction-sites"
        ],
        "source_url": null
      }
    ]
  },
  "provenance": {
    "built": "2026-09-29",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 261, document 8195",
    "reading": "drafted"
  }
};
