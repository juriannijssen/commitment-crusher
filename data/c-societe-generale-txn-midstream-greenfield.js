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
      "verdict_options": [
        {
          "angle": "fails_to_block",
          "recommended": true,
          "recommended_because": "Three narrowing terms stack in one line, and each one on its own would be defensible — showing them working together is the only way to make the effect visible.",
          "text": "Count the conditions in this line. The infrastructure must be new. It must depend “in majority” on the fields it serves. And those fields must be new, approved after 31 December 2021.\n\nAll three must be true at once. If any one fails, the exclusion does not apply.\n\nThat is the problem. Export terminals and main pipelines are not built for one field. They serve a whole region for decades, and are expanded as new fields arrive. An existing pipeline expanded for a 2027 field is not new. A terminal where new fields supply 40% is not majority-dependent. A pipeline serving fields approved in 2021 is outside for its whole life.\n\nMost new production reaches market by expanding what already exists. And “new” is the first word of this exclusion."
        },
        {
          "angle": "what_it_gets_right",
          "recommended": false,
          "recommended_because": null,
          "text": "A rule on new oil and gas can stop at the well. This one extends to the pipelines and terminals that carry the output.\n\nThe majority test deserves credit too. Here the drafters wrote “depend in majority on”, a threshold that can actually bite.\n\nWhere it stops is expansion. The word “new” at the front leaves out expanding existing assets, which is how most extra production reaches market. A majority test that also covered expansions would reach the assets that matter."
        },
        {
          "angle": "how_it_compares",
          "recommended": false,
          "recommended_because": null,
          "text": "This rule tests pipelines and terminals by what feeds them, not by where they are.\n\nThe comparison with the same policy is telling. Its rule on infrastructure for unconventional oil excludes what is “exclusively dedicated” to it. This one excludes infrastructure that depends “in majority” on new fields. Same section, same kind of asset, two different tests. One catches almost nothing, and the other could catch a lot.\n\nReaders can fairly ask why. If the majority test works here, it works two lines up. If the all-or-nothing test is right there, it is hard to see why it is wrong here. That inconsistency is the clearest question to put to the bank."
        }
      ],
      "verdict_selected": 0,
      "verdict_final": null,
      "what_needs_to_change": [
        {
          "title": "Cover expansions as well as new build",
          "content": "Most extra production reaches market through existing pipelines and terminals being expanded. The word “new” leaves that route open."
        },
        {
          "title": "Say what the majority is measured by",
          "content": "Volume, booked capacity, revenue and project finances can give different answers for the same asset. The policy names none of them."
        }
      ],
      "what_needs_to_change_closing": "Until then, a pipeline that is expanded, not built, can carry new production without meeting this rule.",
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Verdict options were drafted before the analysis was re-based on Watchtower's record. They are Bank.Green interpretation and sit below the opinion boundary, but they have not been re-read against the derived rating. The rating moved from hollowed to crushed.",
      "strength_reason": "Viability must depend in majority on new fields, the asset must be new, and a mixed pipeline fails both tests.",
      "how_it_compares": {
        "text": "Société Générale's rule on infrastructure for unconventional oil uses “exclusively dedicated”, a test almost no shared asset fails.",
        "links": [
          {
            "slug": "societe-generale-txn-dedicated-infrastructure",
            "title": "Société Générale's Restriction on Infrastructure for Unconventional Oil"
          }
        ]
      }
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
    "built": "2026-09-28",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 197, document 23944",
    "reading": "drafted"
  }
};
