/* Commitment data — generated from commitments/commitment-societe-generale-txn-midstream-greenfield.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-txn-midstream-greenfield",
    "bank": "Société Générale",
    "commitment_number": 8,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Restriction on Pipelines and Terminals Serving New Fields",
    "short_title": "Restriction on Pipelines and Terminals Serving New Fields",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026. Having refused to finance new oil and gas fields, the bank extends the refusal to the pipelines, storage and terminals that would carry what those fields produce. Both of the terms that decide how far it reaches are defined elsewhere in the document.",
    "naive_reading": "it will not finance pipelines and terminals for new oil and gas fields",
    "plain_language_note": "One line of a list. Almost every word that decides its scope is a defined term, and the two definitions sit in different places.",
    "sources_intro": "One policy document states this exclusion. Three passages are quoted here: the exclusion, the definition of the infrastructure it covers, and the definition of the fields that infrastructure has to serve.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=8",
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
          "passages": 4,
          "found": 4,
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
        "intro": "Société Générale will not provide dedicated financing for new midstream infrastructure linked to new oil and gas fields.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not execute dedicated transactions or provide dedicated financial products and services when the underlying activities are… new Midstream Infrastructures Associated to Greenfield oil and gas fields",
        "plain_rendering": "Société Générale will not execute dedicated transactions, or provide dedicated financial products and services, when the underlying activities are new Midstream Infrastructures Associated to Greenfield oil and gas fields.",
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
            "id": "mid-object",
            "label": "new Midstream Infrastructures Associated to Greenfield oil and gas fields",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              139,
              212
            ],
            "plain_range": [
              147,
              220
            ],
            "means": "This explains the whole of what this commitment covers, and every part of it narrows. The asset has to be new, it has to meet the policy's own test of association, and the fields it serves have to be new by the policy's own dating rule.",
            "lets_through": [
              "This wording lets through expansion of infrastructure that already exists. A pipeline built in 2019 and enlarged or extended to carry production from a field approved in 2027 is not new infrastructure, whatever it ends up carrying.",
              "It also lets through any asset whose economics rest mostly on fields approved before 2022, even where the incremental volume it is built to carry comes from newer ones.",
              "It also lets through infrastructure serving a mix of fields, where no single group of new fields accounts for the majority of its viability."
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
        "title": "The definition of “Midstream Infrastructures”",
        "intro": "How Société Générale's policy defines it in the glossary. It explains what infrastructure serving a field means.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "The term is capitalised inside the exclusion and nothing else marks it; there is no footnote and no cross-reference to the glossary."
        },
        "verbatim": "Midstream Infrastructures Associated to: For the sake of this policy, infrastructures (pipelines, storage, liquefaction and export terminals of oil, natural gas or LNG) whose viability and existence depend in majority on the development of Greenfield oil and gas fields upstream activities",
        "plain_rendering": "“Midstream Infrastructures Associated to” means, for the sake of this policy, infrastructures — pipelines, storage, liquefaction and export terminals of oil, natural gas or LNG — whose viability and existence depend in majority on the development of Greenfield oil and gas fields upstream activities.",
        "phrases": [
          {
            "id": "depend-majority",
            "label": "whose viability and existence depend in majority on",
            "type": "undefined_term",
            "verbatim_range": [
              169,
              220
            ],
            "plain_range": [
              179,
              230
            ],
            "means": "This definition of “Midstream Infrastructures” is narrower than what it usually means. By infrastructure serving a new field we normally mean anything built to carry what that field produces. Société Générale asks more: more than half of the reason the asset exists must be the new fields upstream of it. The policy does not say what is measured — throughput, contracted capacity, revenue or project economics — or who measures it, so a pipeline serving several fields at once falls outside the restriction.",
            "lets_through": [
              "This wording lets through any shared pipeline or terminal where new fields are a large but minority share. 49% of an asset's viability can rest on fields the bank has refused to finance and the asset stays outside this commitment.",
              "It also lets through assets whose sponsor can present the majority calculation on a basis that keeps them under the line, because no basis is specified.",
              "It also lets through infrastructure sized deliberately for a mix, which is how export terminals and trunk pipelines are usually built and financed."
            ],
            "defined_in_clause": null,
            "source": "watchtower_weakness",
            "watchtower_ref": [
              "The term 'depend in majority' is subjective and open to interpretation regarding the exact percentage of dependency required.",
              "Infrastructures whose viability and existence do not depend in majority on the development of Greenfield oil and gas fields upstream activities."
            ],
            "not_in_synthesis": false,
            "bank_definition": null
          }
        ],
        "ordinary_direction": "narrower",
        "watchtower_origin": null
      },
      {
        "index": 3,
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
            "id": "latest-fid-3",
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
            "means": "This definition of “Greenfield” is narrower than what it usually means. By greenfield we normally mean a site not built on before. Société Générale makes it a date test: the latest final investment decision after 31 December 2021. It turns on a dated corporate approval rather than on when oil or gas starts flowing, so a field being drilled today falls outside it if the decision came early enough.",
            "lets_through": [
              "This wording lets through every field approved on or before 31 December 2021, for the whole of its producing life — which for a field approved in 2021 can run past 2060.",
              "It also lets through additional wells, new phases and redevelopment inside an existing field, none of which necessarily requires a fresh final investment decision."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "bank_definition": null
          }
        ],
        "ordinary_direction": "narrower",
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "midstream",
      "greenfield",
      "fid",
      "trunk-pipeline"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 8,
      "commitment_id": "fce3f504-3898-52a4-b9a3-34a8307ba9d2",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=8",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        20882,
        21549
      ],
      "summary_text": "The Group will not provide project-level financing or dedicated financial services for new midstream infrastructures whose viability depends in majority on Greenfield oil and gas fields.",
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
          "condition": "Infrastructures whose viability and existence do not depend in majority on the development of Greenfield oil and gas fields upstream activities.",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": "Section 8, Glossary, page 12"
        },
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
      "weaknesses": "The term 'depend in majority' is subjective and open to interpretation regarding the exact percentage of dependency required.",
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
    "disagreements": [],
    "assessment": {
      "strength": "crushed",
      "strength_derivation": {
        "rule": "spec v3.29 §4.1 — the gap between the naive reading and what it catches",
        "inputs_source": "Watchtower record",
        "record_score": "crushed",
        "weakness": true,
        "commitment_specific_carve_outs": 1,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 3,
        "previous_editorial_rating": "hollowed",
        "changed": true
      },
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "strength_reason": "The pipeline or terminal must be new and exist mainly for fields approved after 2021. A shared asset, or an old one made bigger, fails one test or the other.",
      "how_it_compares": {
        "text": "Société Générale's rule on infrastructure for unconventional oil uses “exclusively dedicated”, a test almost no shared asset fails.",
        "links": [
          {
            "slug": "societe-generale-txn-dedicated-infrastructure",
            "title": "Société Générale's Restriction on Infrastructure for Unconventional Oil"
          }
        ]
      },
      "actual_reading": "it will not give financing labelled for a newly built pipeline, storage site or terminal that exists mainly because of oil and gas fields approved after 2021",
      "gaps": [
        {
          "title": "Shared pipelines and terminals",
          "text": "More than half of the reason the asset exists must be the new fields. The policy does not say how that is measured. A terminal where new fields are 49% of the business is not covered by this commitment.",
          "phrase_refs": [
            "depend-majority"
          ]
        },
        {
          "title": "Expanding what already exists",
          "text": "Only new infrastructure is covered. An existing pipeline enlarged or extended to carry oil from a new field is not new, whatever it ends up carrying.",
          "phrase_refs": [
            "mid-object"
          ]
        },
        {
          "title": "Fields approved by the end of 2021",
          "text": "A field is “Greenfield” only if its latest final investment decision came after 31 December 2021. A pipeline built mostly for older fields is outside the commitment.",
          "phrase_refs": [
            "latest-fid-3"
          ]
        }
      ],
      "in_practice": "Midstream means the pipelines, storage tanks and export terminals that carry oil and gas from the fields to buyers. This commitment covers new ones built for new fields.\n\nA new field has a date test. It is “Greenfield” when its latest final investment decision came after 31 December 2021. That decision is the moment a company formally approves building the field.\n\nTake a new export terminal fed by several fields. Some were approved in 2024, some in 2015. The policy asks whether the terminal's viability and existence depend “in majority” on the new ones. It does not say whether that means volume, booked capacity or revenue. The sponsor can pick the measure that keeps the new fields under half.\n\nNow take a pipeline built in 2019. A new field is approved in 2027, and the pipeline is extended to reach it. The pipeline is not new, so it is outside the commitment.\n\nThe commitment also covers financing raised for a named asset only. The company that owns the pipeline can take a general loan to the company as a whole, which does not say what it pays for.\n\nWhat is left is a newly built asset that serves mostly new fields, with no dispute about the measure. It must also be financed with a loan that names it."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance new pipelines, storage or terminals whose existence depends mostly on new oil and gas fields. We have not yet reviewed what it financed against this commitment.",
    "headline_figure": {
      "display": "Not yet checked",
      "combines": "No financing has been linked to this commitment yet",
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-09-29",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 197, document 23944",
    "reading": "drafted"
  }
};
