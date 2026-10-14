/* Commitment data — generated from commitments/commitment-hsbc-coal-life-extension.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "hsbc-coal-life-extension",
    "bank": "HSBC",
    "commitment_number": 7,
    "category": "coal",
    "effective_date": "2021-12-01",
    "title": "HSBC's Commitment on Extending the Life of Coal Assets",
    "short_title": "Commitment on Extending the Life of Coal Assets",
    "subject": null,
    "article_published": null,
    "intro": "HSBC set out this commitment in its Thermal Coal Phase-Out Policy of December 2021, in its controls on financing. HSBC says keeping coal plants and mines running longer is incompatible with its goal of net zero financed emissions by 2050. So it will not provide new finance or advice for extending their lives.",
    "naive_reading": "it will not help keep old coal plants and mines running for longer",
    "plain_language_note": "The plain version keeps HSBC's wording. The sentence leads into a list, and only the item this commitment covers is quoted from it.",
    "sources_intro": "One policy document states this commitment. It takes three passages from it to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "tcpp2021",
        "document_title": "HSBC Thermal Coal Phase-Out Policy",
        "document_url": null,
        "watchtower_document_id": 16928,
        "watchtower_institution": "hsbc",
        "version_label": "December 2021",
        "published": "2021-12-01",
        "published_source": null,
        "published_confidence": null,
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "synthesis_url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=7",
        "synthesis_run": 366,
        "verbatim_check": {
          "document": "16928-hsbc-thermal-coal-phase-out.md",
          "passages": 7,
          "found": 7,
          "missing": []
        }
      }
    ],
    "clauses": [
      {
        "index": 1,
        "role": "rule",
        "source_id": "tcpp2021",
        "title": "The promise",
        "intro": "This is the sentence that sets the restriction, with the item on its list that this commitment covers.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "HSBC considers that certain activities are incompatible with HSBC’s NZ50 Target. Consequently, HSBC will not provide new finance to any client for the specific purposes of, or new advisory services in connection with, such activities. These include, but are not limited to: … extensions to the unabated operating lifetime of existing thermal coal assets;",
        "plain_rendering": "HSBC considers some activities incompatible with its goal of net zero financed emissions by 2050. So HSBC will not provide new finance to any client for the specific purposes of, or new advisory services in connection with, those activities. They include, among others, extensions to the unabated operating lifetime of existing thermal coal assets.",
        "phrases": [
          {
            "id": "specific-purposes",
            "label": "for the specific purposes of",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              143,
              171
            ],
            "plain_range": [
              149,
              177
            ],
            "means": "The words “for the specific purposes of” limit this commitment to financing labeled for the activity, such as a loan for one named project. General corporate financing, a loan to the company as a whole that it can spend on anything, has no specific purpose. Advice is covered more widely: anything “in connection with” the activity.",
            "lets_through": [
              "This wording lets through general corporate financing to the owner of an old coal site. The loan names no purpose, so it can pay for the work that keeps the site running."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "unabated",
            "label": "unabated",
            "type": "undefined_term",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              294,
              302
            ],
            "plain_range": [
              288,
              296
            ],
            "means": "The word “unabated” limits this commitment to keeping a site running with no cut to its emissions. The policy does not define the word, or say how large a cut makes a site abated.",
            "lets_through": [
              "This wording lets through financing to keep a coal plant running longer if some emissions-cutting work is added, however small the cut."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "thermal-coal-assets",
            "label": "thermal coal assets",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              334,
              353
            ],
            "plain_range": [
              328,
              347
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "definition",
        "source_id": "tcpp2021",
        "title": "The definition of “thermal coal assets”",
        "intro": "How HSBC's policy defines it in its glossary.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Thermal coal assets” is set in italics in the rule. The policy says once, near the start, that italic words are defined in its glossary."
        },
        "verbatim": "Thermal coal assets / new thermal coal assets — thermal coal mines, thermal coal-fired power plants and coal to gas / liquids plants. … The terms thermal coal assets and new thermal coal assets do not include exempted activities.",
        "plain_rendering": "Thermal coal assets are thermal coal mines, thermal coal-fired power plants and coal to gas / liquids plants. The terms do not include exempted activities.",
        "phrases": [
          {
            "id": "exempted",
            "label": "exempted activities",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              209,
              228
            ],
            "plain_range": [
              135,
              154
            ],
            "means": "This explains what HSBC means by “thermal coal assets”: mines, power stations, and plants that turn coal into gas or liquid fuel. It then takes out “exempted activities”, a list HSBC keeps in its glossary. So this commitment blocks less than the words suggest.",
            "lets_through": [
              "This wording lets through companies that build, equip or service coal sites, or trade the coal. The policy does not apply to those businesses.",
              "It also lets through mines that produce mostly metallurgical coal, the kind used to make steel."
            ],
            "defined_in_clause": null,
            "bank_definition": {
              "quote": "Exempted activities — Means the following: captive thermal coal-fired power plants; captive thermal coal mines; thermal coal services; metallurgical coal activities and mines; underground coal gasification (coal bed methane); and all other activities of clients.",
              "source_id": "tcpp2021"
            }
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "narrower"
      },
      {
        "index": 3,
        "role": "exception",
        "source_id": "tcpp2021",
        "title": "When it may not apply",
        "intro": "The policy lists financing for coal assets that HSBC can still provide after extra checks.",
        "location": {
          "distance": "later_in_document",
          "signposting": "none",
          "signposting_note": "Nothing in the restriction points to this passage, which sits in the policy's rules on extra checks."
        },
        "verbatim": "EDD and pre-approval will also be required for: … new finance or new advisory services for the purpose of materially reducing greenhouse gas emissions (EDD will include consideration of any proposed abatement assumptions) from or enabling the early retirement, sale, purchase or refinancing of thermal coal assets;",
        "plain_rendering": "HSBC can provide new finance or new advisory services, after EDD and pre-approval, for the purpose of materially reducing greenhouse gas emissions from thermal coal assets, or enabling their early retirement, sale, purchase or refinancing.",
        "phrases": [
          {
            "id": "materially",
            "label": "materially reducing greenhouse gas emissions",
            "type": "escape_hatch",
            "source": "watchtower_exception",
            "watchtower_ref": "Financing for materially reducing emissions or enabling early retirement may be treated separately under the policy.",
            "not_in_synthesis": false,
            "verbatim_range": [
              106,
              150
            ],
            "plain_range": [
              102,
              146
            ],
            "means": "This lets HSBC finance work on a coal asset that cuts its emissions by a material amount. The policy does not say how large a cut counts as material.",
            "lets_through": [
              "This wording lets through financing for emissions-cutting work at a coal plant, even where the same work keeps the plant running for longer."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "sale-purchase",
            "label": "sale, purchase or refinancing",
            "type": "escape_hatch",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              261,
              290
            ],
            "plain_range": [
              209,
              238
            ],
            "means": "The words “sale, purchase or refinancing” let HSBC finance a coal asset changing hands, or its loans being replaced. The sentence can also be read as covering only a sale that leads to early retirement, and the policy does not settle which.",
            "lets_through": [
              "This wording lets through financing to buy a coal asset, or to refinance one, once an HSBC committee approves it."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "thermal-coal-assets-2",
            "label": "thermal coal assets",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              294,
              313
            ],
            "plain_range": [
              152,
              171
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "thermal-coal",
      "corporate-finance",
      "advisory"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 366,
      "document_id": 16928,
      "institution": "hsbc",
      "commitment_index": 7,
      "commitment_id": "c5338f30-ad74-55c1-8228-2a395ffc1119",
      "url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=7",
      "agent_name": "openai/gpt-5.6-luna",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-10-12",
      "synthesis_updated": "2026-10-12",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        7174,
        7371
      ],
      "summary_text": "HSBC will not provide new finance or advisory services for extending the unabated operating life of existing thermal coal assets.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": null,
          "activity_scope": "existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": "new_and_existing",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new"
        }
      },
      "triggers": [],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Financing for materially reducing emissions or enabling early retirement may be treated separately under the policy.",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": null
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: 8 added, 0 removed, 2 split, 20 fields corrected\nCHANGES:\n- Split the headline phase-out into separate coal-fired-power and thermal-coal-mining commitments for each geographic/timing rule because the activities have different value-chain positions.\n- Corrected the phase-out commitments' value-chain classifications and removed the mistaken 'existing' relationship/transaction classifications from the 2040 rule; remaining exposure does not expressly establish those schema statuses.\n- Split the captive thermal coal plant and captive thermal coal mine restriction because they are distinct downstream and upstream commitments. Corrected both to financing_type 'project' and omitted capital_markets, relationship_status, and transaction_status as required for project financing.\n- Corrected the broad new-thermal-coal-assets commitment to avoid incorrectly assigning it only to downstream activity.\n- Removed the phase-out geographic continuation from the exceptions array; it defines the separate 2040 scope rather than an exception to the commitment.\n- Set governance_process to false for emissions-reduction, retrofit, and transition-purpose exceptions because the cited text does not invoke a formal committee or approval process.\n- Retained the EDD commitments as screening commitments rather than restrictions because EDD and committee approval do not mandate rejection.\n- Corrected misconception indices to reflect the added and split commitments.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "SERVICES OUTSIDE “FINANCE” · Glossary — “finance” covers project finance, direct lending, and arranging or underwriting capital markets transactions; nothing else the bank provides is restricted.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "Glossary"
      },
      {
        "condition": "CLIENT GROUPS, TO THE EXTENT APPROPRIATE · Scope and Definitions — HSBC takes a client group's activities into account and applies the policy “to the extent appropriate” in light of the group's structure and governance.",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "Scope and Definitions"
      },
      {
        "condition": "EXEMPTED ACTIVITIES · Scope and Definitions, Glossary — the policy does not apply to clients engaged in captive coal plants and mines, coal services, metallurgical coal, underground coal gasification, and “all other activities of clients”; new captive plants and mines stay in.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "Scope and Definitions; Glossary"
      },
      {
        "condition": "OTHER PARTS OF HSBC · Scope and Definitions — other HSBC businesses, including asset management, “will seek to implement policies” supporting the 2030/40 timelines, unless that conflicts with fiduciary or other regulatory obligations.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "Scope and Definitions"
      },
      {
        "condition": "HSBC'S DISCRETION AND RIGHT TO AMEND · Important notice — HSBC uses information “in its sole discretion” for its assessments, and may amend the policy at any time without giving a reason.",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "Important notice"
      }
    ],
    "general_clauses_page": {
      "url": "general-clauses-hsbc.html",
      "title": "The clauses that apply to every HSBC commitment",
      "selected_for_publication": false
    },
    "disagreements": [
      {
        "field": "loopholes.exceptions",
        "severity": "omission",
        "watchtower": "The exception records financing for cutting emissions or enabling early retirement.",
        "bank_green": "The same passage also lists financing for the sale, purchase or refinancing of thermal coal assets, which the condition leaves out.",
        "action": "Add the sale, purchase and refinancing purposes to the exception's condition."
      },
      {
        "field": "loopholes.exceptions",
        "severity": "omission",
        "watchtower": "The record carries none of the policy's document-wide provisions as an exception on any commitment.",
        "bank_green": "The definition of finance leaves out every service but project finance, direct lending and capital markets work; the policy does not apply to clients engaged in exempted activities, including captive coal and coal services; group activities count only to the extent HSBC finds appropriate; and HSBC may amend the policy at any time. Each reaches every commitment.",
        "action": "Record each as a standing exception on every commitment."
      }
    ],
    "assessment": {
      "strength": "hollowed",
      "strength_derivation": {
        "rule": "spec v3.29 §4.1 — the gap between the naive reading and what it catches",
        "inputs_source": "Watchtower record",
        "record_score": "hollowed",
        "weakness": false,
        "commitment_specific_carve_outs": 1,
        "project_finance_only": false,
        "new_business_only": true,
        "total": 2
      },
      "verdict_selected": null,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "Financing named for keeping a coal site running unchanged is refused. But a general loan can pay for it, and financing to buy, refinance or partly clean up a coal site needs only approval.",
      "actual_reading": "it will not provide financing named for keeping a coal plant or mine running longer with no cut to its emissions",
      "gaps": [
        {
          "title": "General loans to the owner",
          "text": "The restriction covers financing for the specific purpose of an extension. A general loan to the owner names no purpose.",
          "phrase_refs": [
            "specific-purposes"
          ]
        },
        {
          "title": "Some emissions work makes it abated",
          "text": "“Unabated” is not defined. Adding some emissions-cutting work can take an extension outside this commitment, however small the cut.",
          "phrase_refs": [
            "unabated",
            "materially"
          ]
        },
        {
          "title": "Buying or refinancing a coal site",
          "text": "Financing for the sale, purchase or refinancing of a coal asset is allowed after extra checks and a committee's approval.",
          "phrase_refs": [
            "sale-purchase"
          ]
        }
      ],
      "in_practice": "This commitment refuses financing and advice whose named purpose is to keep an existing coal plant or mine running for longer, with its emissions unchanged.\n\nTake a utility with a coal plant due to close in 2030. It asks HSBC for a loan to refit the plant so it can run until 2040, and HSBC refuses. The utility then takes a general loan instead, which names no purpose, and spends it on the refit.\n\nOr the utility adds equipment that burns some biomass alongside the coal, and calls the refit an emissions cut. “Unabated” has no definition, and a material cut has no number. So HSBC can treat the refit as emissions work, which it may finance after extra checks.\n\nAnother case is a buyer for the plant. Financing to purchase a coal asset, or to refinance its loans, is allowed. It needs extra checks and a committee's approval.\n\nSo only a plain life extension, named as the purpose of the loan, is refused.",
      "gets_right": "It reaches existing coal sites, not just new ones, and refuses advice as well as financing."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "HSBC has committed not to finance or advise on extending the life of coal plants and mines. We have not reviewed its financing against this commitment yet.",
    "headline_figure": {
      "display": null,
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-10-13",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 366, document 16928",
    "reading": "drafted"
  }
};
