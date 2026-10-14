/* Commitment data — generated from commitments/commitment-ing-lng-export-terminals.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "ing-lng-export-terminals",
    "bank": "ING",
    "commitment_number": 3,
    "category": "oil_gas_expansion",
    "effective_date": "2026-01-01",
    "title": "ING's 2025 Commitment on LNG Export Terminals",
    "short_title": "2025 Commitment on LNG Export Terminals",
    "subject": "LNG Export Terminals",
    "article_published": null,
    "intro": "ING announced this commitment in its September 2024 Climate Progress Update. CEO Steven van Rijswijk set it out in the foreword, alongside the bank's other oil and gas steps, and the update repeats it later. ING says it will stop providing financing for LNG export terminals, citing the International Energy Agency's 2023 World Energy Outlook.",
    "naive_reading": "it has stopped financing the terminals that ship gas around the world",
    "plain_language_note": "The plain version drops the connective opener and keeps every word of the operative phrase. There was little else to simplify.",
    "sources_intro": "This commitment comes from a single document, and we quote one passage from it below.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "cpu2024",
        "document_title": "ING Climate Progress Update 2024",
        "document_url": "https://ing.com/binaries/content/assets/documents/files/climate_progress_update_2024.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/ing_group/document/4517/synthesis?run=105&commitment=3",
        "watchtower_document_id": 4517,
        "watchtower_institution": "ing_group",
        "synthesis_run": 105,
        "version_label": "September 2024",
        "published": "2024-09-18",
        "published_source": null,
        "published_confidence": null,
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "verbatim_check": {
          "document": "4517-ing-pureplay-upstream-2024.md",
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
        "source_id": "cpu2024",
        "title": "The promise",
        "intro": "This is where ING makes the commitment.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "… we've decided to stop providing new financing for new LNG export terminals after 2025, in line with observations from the IEA's 2023 World Energy Outlook.",
        "plain_rendering": "ING has decided to stop providing new financing for new LNG export terminals after 2025, in line with the IEA's 2023 World Energy Outlook.",
        "phrases": [
          {
            "id": "new-lng-export-after-2025",
            "label": "new financing for new LNG export terminals after 2025",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              34,
              87
            ],
            "plain_range": [
              34,
              87
            ],
            "means": "This explains what this commitment covers, and almost every word narrows it: new financing, for a new terminal, built for export, agreed from 2026. The qualifiers sit too close together to take apart, so they are read here as one.",
            "lets_through": [
              "This wording lets through financing for LNG export terminals that already exist and for import and regasification terminals, which are not export terminals. The wording never says whether a new train at an existing terminal counts as a new terminal.",
              "It also lets through financing agreed before the end of 2025. A terminal financed during 2025 is outside this commitment, however long it then operates.",
              "It also lets through general corporate financing to the companies that build and run these terminals. The wording restricts financing for a terminal, not financing for its owner."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "lng",
      "liquefaction",
      "new-financing",
      "project-finance",
      "corporate-finance"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 105,
      "document_id": 4517,
      "institution": "ing_group",
      "commitment_index": 3,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/ing_group/document/4517/synthesis?run=105&commitment=3",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-03",
      "synthesis_updated": "2026-06-18",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        3917,
        4086
      ],
      "summary_text": "ING will stop providing new financing for new LNG export terminals after 2025.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "midstream",
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
      "effective_date": "2025",
      "exceptions": [],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 1 fields corrected]\nCHANGES:\n- [ING will stop providing new financing to pure-play upstream oil and gas companies that continue to develop new fields, effective immediately.]: Removed the exception regarding non-pure-play companies because this condition is already captured under the triggers/counterparty scope, and the schema dictates that conditions captured in other dimensions should not be duplicated in exceptions.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [],
    "general_clauses_page": null,
    "disagreements": [
      {
        "field": "scope.product.transaction_status",
        "severity": "omission",
        "watchtower": "transaction_status is null on this commitment.",
        "bank_green": "The sentence restricts “new financing”, so the commitment reaches new transactions only. Recording `new` would add the new-business input to the rating: 2 points instead of 1, still `hollowed`.",
        "action": "Set transaction_status to new."
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
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "It stops new financing for new export terminals from 2026. Existing terminals, import terminals, deals agreed in 2025, and general loans to the companies that own terminals all go through.",
      "actual_reading": "it has decided that, from 2026, it will not provide new financing for new terminals that export liquefied gas",
      "gaps": [
        {
          "title": "Existing terminals and import terminals",
          "phrase_refs": [
            "new-lng-export-after-2025"
          ],
          "text": "Terminals already exporting are not new. Import terminals, which turn the liquid back into gas, are not export terminals. The wording does not say whether adding a unit to an existing terminal counts."
        },
        {
          "title": "Anything agreed before 2026",
          "phrase_refs": [
            "new-lng-export-after-2025"
          ],
          "text": "Financing agreed up to the end of 2025 is outside this commitment, however long the terminal then runs."
        },
        {
          "title": "General loans to the owner",
          "phrase_refs": [
            "new-lng-export-after-2025"
          ],
          "text": "The commitment covers financing for a terminal, not for its owner. A company can take a general loan and spend it on a new terminal."
        }
      ],
      "in_practice": "LNG is liquefied natural gas: gas cooled until it turns liquid, so it can be shipped. An export terminal cools the gas and loads it onto ships. An import terminal, at the other end, turns it back into gas.\n\nTake a company planning a new export terminal. If it asks ING for a loan for that terminal in 2026, ING will say no, and that is what the commitment does.\n\nNow suppose the same company signed its loan with ING in 2025. The commitment does not apply, so the terminal can run for as long as it lasts on financing agreed before the date.\n\nThen take a company that wants to add a new unit, which the industry calls a train, to an export terminal already running. The wording does not say whether a new train counts as a new terminal.\n\nNow take a large energy company that owns terminals. It asks ING for a general loan to the company as a whole, which does not say what it pays for. The commitment covers financing for a terminal, not financing for its owner, so the company can spend the loan on a new terminal.\n\nImport terminals are outside the commitment, because they are not export terminals.\n\nSo what the commitment does stop is new financing, from 2026, tied to a new export terminal.",
      "gets_right": "ING names a clear target and a date, and gives its reason. It points to the International Energy Agency's 2023 World Energy Outlook, a public report anyone can check."
    }
  },
  "evidence": {
    "status": "financing_found",
    "teaser": "That is how much ING put into LNG export terminals and the companies that run them, despite a commitment that seems to rule out exactly this. And that is only what we have found so far.",
    "headline_figure": {
      "display": "$1.9B",
      "combines": "10 2025 financings to US LNG export terminals and their owners",
      "complete": false
    },
    "deals": [
      {
        "id": "ing-cp2-lng-holdings-2025",
        "company": "CP2 LNG Holdings LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 699843250.3926389,
        "amount_display": "$699.8M",
        "instruments": [],
        "contradiction": "An LNG export terminal under construction in Cameron Parish, Louisiana. This commitment starts after 2025, and this financing was agreed during that year, so the terminal will ship gas for decades outside the restriction.",
        "phrase_refs": [
          "new-lng-export-after-2025"
        ],
        "source_url": null
      },
      {
        "id": "ing-venture-global-plaquemines-lng-2025",
        "company": "Venture Global Plaquemines LNG LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 488436350.142789,
        "amount_display": "$488.4M",
        "instruments": [],
        "contradiction": "An export terminal on the Mississippi River in Louisiana, chilling gas for shipment abroad. Financing agreed in 2025 falls before the date this commitment begins.",
        "phrase_refs": [
          "new-lng-export-after-2025"
        ],
        "source_url": null
      },
      {
        "id": "ing-venture-global-lng-2025",
        "company": "Venture Global LNG Inc",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 167916042.0,
        "amount_display": "$167.9M",
        "instruments": [],
        "contradiction": "The parent company behind those Louisiana export terminals. This commitment restricts financing for a terminal, not financing for its owner, so company-level lending is outside it either way.",
        "phrase_refs": [
          "new-lng-export-after-2025"
        ],
        "source_url": null
      },
      {
        "id": "ing-venture-global-cp2-lng-2025",
        "company": "Venture Global CP2 LNG LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 160200000.0,
        "amount_display": "$160.2M",
        "instruments": [],
        "contradiction": "The project company for the second Calcasieu Pass terminal. Its financing was agreed in 2025, before the restriction starts.",
        "phrase_refs": [
          "new-lng-export-after-2025"
        ],
        "source_url": null
      },
      {
        "id": "ing-freeport-lng-investments-2025",
        "company": "Freeport LNG Investments LLLP",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 128925000.00000001,
        "amount_display": "$128.9M",
        "instruments": [],
        "contradiction": "An owner of the Freeport export terminal on the Texas coast, which has been shipping since 2019. The commitment covers new terminals, and one already running is not new.",
        "phrase_refs": [
          "new-lng-export-after-2025"
        ],
        "source_url": null
      },
      {
        "id": "ing-flng-liquefaction-2-2025",
        "company": "FLNG Liquefaction 2 LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 96129000.0,
        "amount_display": "$96.1M",
        "instruments": [],
        "contradiction": "One of the liquefaction units at that Texas terminal. It is part of a plant built years ago, so nothing about it is a new terminal.",
        "phrase_refs": [
          "new-lng-export-after-2025"
        ],
        "source_url": null
      },
      {
        "id": "ing-venture-global-2025",
        "company": "Venture Global Inc",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 83333333.3333333,
        "amount_display": "$83.3M",
        "instruments": [],
        "contradiction": "The listed holding company of the same LNG group. Financing to an owner is not financing for a terminal, which is what the wording restricts.",
        "phrase_refs": [
          "new-lng-export-after-2025"
        ],
        "source_url": null
      },
      {
        "id": "ing-cheniere-energy-2025",
        "company": "Cheniere Energy Inc",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 50885416.6666667,
        "amount_display": "$50.9M",
        "instruments": [],
        "contradiction": "The largest LNG exporter in the United States, running terminals in Louisiana and Texas. Both were built long before this commitment, and lending to the company is not financing for a terminal.",
        "phrase_refs": [
          "new-lng-export-after-2025"
        ],
        "source_url": null
      },
      {
        "id": "ing-cheniere-energy-partners-2025",
        "company": "Cheniere Energy Partners LP",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 39680000.0,
        "amount_display": "$39.7M",
        "instruments": [],
        "contradiction": "The partnership that owns the Sabine Pass terminal in Louisiana. Sabine Pass has been exporting since 2016, so the restriction on new terminals does not reach it.",
        "phrase_refs": [
          "new-lng-export-after-2025"
        ],
        "source_url": null
      },
      {
        "id": "ing-port-arthur-lng-phase-ii-2025",
        "company": "Port Arthur LNG Phase II LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 30000000.0,
        "amount_display": "$30M",
        "instruments": [],
        "contradiction": "The second phase of an export terminal being built on the Texas coast. The wording never says whether a further phase at an existing site counts as a new terminal.",
        "phrase_refs": [
          "new-lng-export-after-2025"
        ],
        "source_url": null
      }
    ],
    "what_it_funded": "LNG export terminals and the companies that run them"
  },
  "provenance": {
    "built": "2026-10-02",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 105, document 4517",
    "reading": "drafted"
  }
};
