/* Commitment data — generated from commitments/commitment-societe-generale-txn-fpso-greenfield.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-txn-fpso-greenfield",
    "bank": "Société Générale",
    "commitment_number": 9,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Restriction on Floating Production Vessels at New Fields",
    "short_title": "Restriction on Floating Production Vessels at New Fields",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026. It covers the floating vessels that produce and store oil offshore, where those vessels serve a field the policy counts as new. The same sentence goes on to say something wider, which is analysed on its own page.",
    "naive_reading": "it will not finance oil production ships working at new oil and gas fields",
    "plain_language_note": "One sentence carrying two rules. Only the first is quoted as this commitment, and the word joining it to the second is doing more work than it appears to.",
    "sources_intro": "One policy document states this exclusion. Two passages are quoted here: the exclusion, and the definition that decides which fields count as new.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=9",
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
        "intro": "Société Générale will not provide dedicated financing for FPSOs serving new upstream oil and gas fields. These ships produce and store oil at sea.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not execute dedicated transactions or provide dedicated financial products and services when the underlying activities are… FPSOs associated with Greenfield upstream oil and gas fields and, after 2025, any FPSOs.",
        "plain_rendering": "Société Générale will not execute dedicated transactions, or provide dedicated financial products and services, when the underlying activities are FPSOs associated with Greenfield upstream oil and gas fields and, after 2025, any FPSOs.",
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
            "id": "assoc-gf",
            "label": "associated with Greenfield upstream oil and gas fields",
            "type": "undefined_term",
            "verbatim_range": [
              145,
              199
            ],
            "plain_range": [
              153,
              207
            ],
            "means": "This explains the link a vessel must have to a new field before this commitment applies. It does not define association here, and this line does not point at that definition.",
            "lets_through": [
              "This wording lets through vessels serving fields that are not greenfield under the definition below, which is most of the installed fleet and a large part of what is being redeployed.",
              "It also lets through vessels moved between fields during their life. An FPSO is a mobile asset with a thirty-year hull; the field it is associated with on the day of financing need not be the field it works on afterwards.",
              "It also lets through any vessel where the association can be argued down — chartered to an operator rather than a field, or contracted across a portfolio of fields with a mix of dates."
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
      "fpso",
      "greenfield",
      "fid",
      "upstream"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 9,
      "commitment_id": "5ebf2418-b4d6-5980-8bed-410c8aaddd81",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=9",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": false,
      "quotation_matched_note": "Watchtower records this quotation as unmatched. Its stored quote splices the lead-in and the bullet with an ellipsis, and that spliced string does not occur verbatim in the parsed document. The wording quoted on this page was taken from the policy text itself and is unaffected.",
      "quotation_char_range": null,
      "summary_text": "The Group will not provide project-level financing or dedicated financial services for Floating Production Storage and Offloading (FPSO) units associated with Greenfield upstream oil and gas fields.",
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
        "bank_green": "The commitment turns on vessels 'associated with Greenfield' fields, so the pre-2022 FID carve-out recorded on Commitment 7 applies here too. 'Associated with' is also undefined, where the same idea is given a majority test for midstream infrastructure.",
        "action": "Add the FID carve-out and a weakness on the undefined association test."
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
      "strength_reason": "The vessel has to be linked to a field approved after 2021, and the link is never defined. A ship built to move can serve an older field and fall outside.",
      "how_it_compares": {
        "text": "Société Générale's rule on pipelines and terminals serving new fields defines “associated” with a majority test in its glossary. Its client tests reach producers, not the companies that own and lease these vessels.",
        "links": [
          {
            "slug": "societe-generale-txn-midstream-greenfield",
            "title": "Société Générale's Restriction on Pipelines and Terminals Serving New Fields"
          },
          {
            "slug": "societe-generale-30pc-unconventional",
            "title": "Société Générale's 30% Threshold on Unconventional Oil & Gas"
          }
        ]
      },
      "actual_reading": "it will not give financing labelled for a floating production vessel it considers tied to a field whose latest investment approval came after 2021",
      "gaps": [
        {
          "title": "Fields approved by the end of 2021",
          "text": "A field counts as “Greenfield” only if its latest final investment decision came after 31 December 2021. A vessel serving an earlier field is outside the commitment for that field's whole life.",
          "phrase_refs": [
            "latest-fid-2"
          ]
        },
        {
          "title": "What “associated” means is left open",
          "text": "The vessel must be associated with a new field, and this line does not say what that takes. A vessel can be moved to another field after the financing, or hired across several fields.",
          "phrase_refs": [
            "assoc-gf"
          ]
        },
        {
          "title": "Loans to the company as a whole",
          "text": "The commitment covers financing raised for a named vessel. A general loan or bond to the vessel's owner, or to the oil company, is outside it.",
          "phrase_refs": [
            "scope-dedicated"
          ]
        }
      ],
      "in_practice": "A floating production vessel is a ship moored over an offshore field. It processes and stores what the wells produce, and loads it onto tankers. This commitment covers vessels linked to a new field.\n\nA new field has a date test. The policy calls a field “Greenfield” when its latest final investment decision came after 31 December 2021. That decision is the moment a company formally approves building the field.\n\nTake a vessel for a field approved in 2020. It is outside the commitment, and stays outside as long as the field produces. Adding wells or a new phase does not always need a fresh decision, so growth in that field stays outside too.\n\nNow take a vessel with a less clear link. These ships last for decades and can be moved. One may be hired to an oil company rather than to one field, or work several fields of different ages. The line does not say what “associated” requires, so the bank decides.\n\nThen there is the kind of financing. The commitment covers financing raised for a named vessel. The contractor that owns it can take a general loan to the company as a whole, which does not say what it pays for.\n\nWhat is left is a new vessel for one named new field, financed with a loan for that vessel."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance floating production vessels serving new oil and gas fields. We have not yet reviewed what it financed against this commitment.",
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
