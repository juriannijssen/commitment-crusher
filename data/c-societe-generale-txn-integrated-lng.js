/* Commitment data — generated from commitments/commitment-societe-generale-txn-integrated-lng.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-txn-integrated-lng",
    "bank": "Société Générale",
    "commitment_number": 11,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Restriction on LNG Projects Fed by New Gas Fields",
    "short_title": "Restriction on LNG Projects Fed by New Gas Fields",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026. It covers liquefied natural gas (LNG) projects that take their gas from fields the policy counts as new. But it applies only where the project and the field are financed as one.",
    "naive_reading": "it will not finance projects that turn gas from new fields into liquid for export",
    "plain_language_note": "This is a single line. The word at the front of it describes one way of structuring a project, and most large LNG projects are structured the other way.",
    "sources_intro": "This exclusion comes from a single policy document. We quote two passages from it below: the exclusion itself, and the definition that decides which gas fields count as new.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=11",
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
        "intro": "Société Générale will not provide dedicated financing for integrated LNG projects fed by new gas fields.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not execute dedicated transactions or provide dedicated financial products and services when the underlying activities are… integrated LNG projects fed with Greenfield gas fields.",
        "plain_rendering": "Société Générale will not execute dedicated transactions, or provide dedicated financial products and services, when the underlying activities are integrated LNG projects fed with Greenfield gas fields.",
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
            "id": "integrated-lng",
            "label": "integrated LNG projects fed with Greenfield gas fields",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              139,
              193
            ],
            "plain_range": [
              147,
              201
            ],
            "means": "The word “integrated” decides which projects are covered. It means the upstream field and the liquefaction plant are developed and financed as a single project. The policy does not define the word, and it does not define what feeding a plant requires either.",
            "lets_through": [
              "This wording lets through unbundled projects, which is how most large LNG capacity is built. Take a liquefaction plant financed as a tolling facility, which takes gas from producers under separate supply agreements. It is not an integrated project, however new the fields behind it are.",
              "It also lets through plants supplied from a pipeline network. There, gas from many fields of different ages is mixed, and no single field feeds the plant.",
              "It also lets through the upstream field and the plant financed separately, one after the other, by the same lenders. That makes two separate project financings, and neither is an integrated project."
            ],
            "defined_in_clause": 2,
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
        "title": "The definition of “Greenfield”",
        "intro": "How Société Générale's policy defines it in a note below its rules.",
        "location": {
          "distance": "nearby",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "“Greenfield” means oil and gas fields and associated reservoirs for which the latest Final Investment Decision (FID) was made after 31 December 2021.",
        "plain_rendering": "“Greenfield” means oil and gas fields and associated reservoirs for which the latest Final Investment Decision (FID) was made after 31 December 2021.",
        "phrases": [
          {
            "id": "latest-fid-2",
            "label": "the latest Final Investment Decision (FID) was made after 31 December 2021",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              74,
              148
            ],
            "plain_range": [
              74,
              148
            ],
            "means": "This definition of “Greenfield” is narrower than the usual meaning of the word. The International Monetary Fund (IMF) uses greenfield for investment that is entirely new, built where nothing stood before. Société Générale makes it a date test: the latest final investment decision came after December 31, 2021. The test turns on a dated corporate approval, not on when oil or gas starts flowing. So a field being drilled today falls outside it if the decision came early enough.",
            "lets_through": [
              "This wording lets through every field approved on or before December 31, 2021, for its whole producing life. For a field approved in 2021, that can run past 2060.",
              "It also lets through additional wells, new phases, and redevelopment inside an existing field, none of which necessarily requires a fresh final investment decision."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "ordinary_source": [
              {
                "body": "International Monetary Fund",
                "title": "IMF, Greenfield investment and extension of capacity (BPM6 guidance note D.1)"
              }
            ],
            "bank_definition": null
          }
        ],
        "ordinary_direction": "narrower",
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "greenfield",
      "fid",
      "lng",
      "liquefaction",
      "tolling"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 11,
      "commitment_id": "f103d271-2402-5ef1-a8c7-f95827fb6177",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=11",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": false,
      "quotation_matched_note": "Watchtower records this quotation as unmatched. Its stored quote splices the lead-in and the bullet with an ellipsis, and that spliced string does not occur verbatim in the parsed document. The wording quoted on this page was taken from the policy text itself and is unaffected.",
      "quotation_char_range": null,
      "summary_text": "The Group will not provide project-level financing or dedicated financial services for integrated LNG projects fed with Greenfield gas fields.",
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
        "field": "exceptions",
        "severity": "omission",
        "watchtower": "No commitment-specific carve-out, so this rates `holds`.",
        "bank_green": "Same missing FID carve-out. 'Integrated' is also undefined and describes a project structure most large LNG does not use.",
        "action": "Add the FID carve-out and a weakness on 'integrated'."
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
      "strength_reason": "It covers only projects where the gas field and the export plant are built as one. But most large gas export plants are built and financed apart from the fields that feed them.",
      "actual_reading": "it will not give financing labeled for a gas export project where a field approved after 2021 and the plant that liquefies its gas are developed and financed as one project",
      "gaps": [
        {
          "title": "Plants built apart from the fields",
          "text": "The project must be “integrated,” and the policy does not define the word. A plant owned by one company and paid a fee to liquefy other producers' gas is not integrated, however new the fields are.",
          "phrase_refs": [
            "integrated-lng"
          ]
        },
        {
          "title": "Plants fed from a pipeline network",
          "text": "Where gas reaches the plant through a network, gas from many fields of many ages is mixed. So no single field feeds the plant, and this commitment does not apply.",
          "phrase_refs": [
            "integrated-lng"
          ]
        },
        {
          "title": "Fields approved by the end of 2021",
          "text": "A gas field counts as new only if its latest final investment decision came after December 31, 2021. So a plant fed by older fields is outside this commitment.",
          "phrase_refs": [
            "latest-fid-2"
          ]
        }
      ],
      "in_practice": "LNG is natural gas cooled into a liquid so it can be shipped. A plant does the cooling, and gas fields feed it. This commitment covers the plant and the fields only when they are one project.\n\nMany projects are not built that way. Producers develop the fields, while a separate company owns the plant and is paid a fee to liquefy gas it never owns. Buyers book space in the plant, and each part has its own lenders.\n\nTake a plant like that, fed by a field approved in 2025. Because the plant and the field are separate projects, neither is “integrated,” so Société Générale can finance the plant. The same lenders can finance the field in a separate deal.\n\nA plant that draws gas from a pipeline network is another case. Gas from new and old fields is mixed long before it arrives, so no one field feeds the plant, and this commitment does not apply.\n\nThen there is the date. A field approved on or before December 31, 2021, is not new, and a plant it feeds is not covered by this commitment.\n\nThis commitment also covers only financing raised for a named project. A company can take a general loan to the company as a whole, which does not say what it pays for.\n\nSo what is left is a field and plant built by one sponsor as one project, and financed that way."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance integrated LNG projects supplied by new gas fields. We have not reviewed its financing against this commitment yet.",
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
