/* Commitment data — generated from commitments/commitment-societe-generale-txn-unesco-ouv.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-txn-unesco-ouv",
    "bank": "Société Générale",
    "commitment_number": 14,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Restriction on Harming World Heritage Sites",
    "short_title": "Restriction on Harming World Heritage Sites",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026. It is the last line of the exclusion list and the widest: any oil and gas operation, anywhere in the chain, wherever it stands. What narrows it is the kind of harm it requires and the term UNESCO uses to describe it.",
    "naive_reading": "it will not finance oil and gas that would damage World Heritage sites",
    "plain_language_note": "This is a single sentence. It opens wider than anything else in the policy and closes on a technical term from a different institution.",
    "sources_intro": "This exclusion comes from a single policy document, and we quote one passage from it below.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=14",
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
          "passages": 2,
          "found": 2,
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
        "intro": "This passage names no activity, place, or resource, and looks only at the effect.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not execute dedicated transactions or provide dedicated financial products and services when the underlying activities are… any oil and gas operation with material adverse impacts on the Outstanding Universal Value of a UNESCO World Heritage Site.",
        "plain_rendering": "Société Générale will not execute dedicated transactions, or provide dedicated financial products and services, when the underlying activities are any oil and gas operation with material adverse impacts on the Outstanding Universal Value of a UNESCO World Heritage Site.",
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
            "id": "ouv",
            "label": "material adverse impacts on the Outstanding Universal Value",
            "type": "undefined_term",
            "verbatim_range": [
              170,
              229
            ],
            "plain_range": [
              178,
              237
            ],
            "means": "This explains the harm this commitment requires. “Outstanding Universal Value” is a UNESCO term for the specific qualities a site was inscribed for, and it is narrower than the site itself. Whether impacts on it are material and adverse is a finding, but the policy does not say who makes it, on what evidence, or when.",
            "lets_through": [
              "This wording lets through harm to a World Heritage Site that does not touch the qualities it was listed for. A site inscribed for its geology is not obviously damaged, in this sense, by loss of habitat.",
              "It also lets through any operation where the finding has not been made. Impacts on Outstanding Universal Value are normally established by UNESCO and its advisory bodies through reactive monitoring, which happens after development rather than before financing.",
              "It also lets through anything a sponsor's own impact assessment concludes is not material, since the policy names no independent authority for the judgment."
            ],
            "defined_in_clause": null,
            "source": "watchtower_weakness",
            "watchtower_ref": "The term 'material adverse impacts' is subjective and not quantitatively defined, leaving room for interpretation.",
            "not_in_synthesis": false,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "ouv",
      "reactive-monitoring",
      "world-heritage"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 14,
      "commitment_id": "d53ed951-209a-57fb-ac8e-520ae9d3581d",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=14",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": false,
      "quotation_matched_note": "Watchtower records this quotation as unmatched. Its stored quote splices the lead-in and the bullet with an ellipsis, and that spliced string does not occur verbatim in the parsed document. The wording quoted on this page was taken from the policy text itself and is unaffected.",
      "quotation_char_range": null,
      "summary_text": "The Group will not provide project-level financing or dedicated financial services for any oil and gas operation that has material adverse impacts on the Outstanding Universal Value of a UNESCO World Heritage Site.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": null,
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
      "weaknesses": "The term 'material adverse impacts' is subjective and not quantitatively defined, leaving room for interpretation.",
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
        "field": "industry_scope.value_chain",
        "severity": "omission",
        "watchtower": "Not set.",
        "bank_green": "The wording is 'any oil and gas operation' — the widest scope in the document, covering midstream, downstream and trading. Unset reads as missing data rather than as deliberate breadth.",
        "action": "Set the value chain explicitly, or record that it is intentionally unbounded."
      },
      {
        "field": "geographic_scope.global_scope",
        "severity": "contradiction",
        "watchtower": "`false`.",
        "bank_green": "Same as Commitment 13 — the policy is worldwide and this commitment names no territory.",
        "action": "Check whether this is a tagging error."
      }
    ],
    "assessment": {
      "strength": "crushed",
      "strength_derivation": {
        "rule": "spec v3.29 §4.1 — the gap between the naive reading and what it catches",
        "inputs_source": "Watchtower record",
        "record_score": "hollowed",
        "weakness": true,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 2,
        "previous_editorial_rating": "hollowed",
        "changed": false
      },
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "strength_reason": "It only applies once someone finds serious harm to what a World Heritage Site was listed for. Nobody has to make that finding before the financing is given.",
      "actual_reading": "it will not give financing labeled for an oil or gas operation when it is shown that the operation seriously harms the qualities a World Heritage Site was listed for",
      "gaps": [
        {
          "title": "Other harm to the same site",
          "text": "The harm has to fall on the site's “Outstanding Universal Value”: the qualities UNESCO listed it for. Other damage to the same site does not count.",
          "phrase_refs": [
            "ouv"
          ]
        },
        {
          "title": "Nobody has to find the harm first",
          "text": "The policy does not say who decides the harm is material, on what evidence, or when. UNESCO usually judges it after development, and a sponsor's own study can call it minor.",
          "phrase_refs": [
            "ouv"
          ]
        },
        {
          "title": "Loans to the company as a whole",
          "text": "This commitment covers only financing raised for a named operation, so the operator can take a general loan or issue a bond instead.",
          "phrase_refs": [
            "scope-dedicated"
          ]
        }
      ],
      "in_practice": "This commitment covers any oil and gas operation, anywhere, that harms a World Heritage Site. What narrows it is the kind of harm, and who has to find it.\n\nUNESCO lists a World Heritage Site for particular qualities, which it calls the site's “Outstanding Universal Value.” A site might be listed for its rock formations, its wildlife, or its ancient buildings. This commitment covers material harm to those qualities, not to the site in general.\n\nTake a site listed for its geology. If a pipeline cuts through its forest and destroys habitat, this commitment may not apply. The habitat is not what the site was listed for.\n\nNow take a site listed for its wildlife, with a new field planned beside it. Harm to that wildlife would count, but someone has to find that the harm is material. The policy does not say who, on what evidence, or when. UNESCO and its advisers usually look after development has started, not before a loan is signed. And the sponsor's own impact study can conclude that the harm is minor.\n\nThis commitment also covers only financing raised for a named operation. The operator can still take a general loan to the company as a whole, which does not say what it pays for.\n\nSo what is left is a project where serious harm to a site's listed qualities is already clear before the financing."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance any oil and gas operation that materially harms what a World Heritage Site was listed for. We have not reviewed its financing against this commitment yet.",
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
