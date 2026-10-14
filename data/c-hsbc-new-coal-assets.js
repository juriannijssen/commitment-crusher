/* Commitment data — generated from commitments/commitment-hsbc-new-coal-assets.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "hsbc-new-coal-assets",
    "bank": "HSBC",
    "commitment_number": 5,
    "category": "coal",
    "effective_date": "2021-12-01",
    "title": "HSBC's Commitment on New Coal Mines and Power Plants",
    "short_title": "Commitment on New Coal Mines and Power Plants",
    "subject": null,
    "article_published": null,
    "intro": "HSBC set out this commitment in its Thermal Coal Phase-Out Policy of December 2021, in its controls on financing. HSBC says new coal mines and coal power plants are incompatible with its goal of net zero financed emissions by 2050. So it will not provide new finance or advice for creating them.",
    "naive_reading": "it will not put its financing into new coal mines or coal power plants",
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
        "synthesis_url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=5",
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
        "verbatim": "HSBC considers that certain activities are incompatible with HSBC’s NZ50 Target. Consequently, HSBC will not provide new finance to any client for the specific purposes of, or new advisory services in connection with, such activities. These include, but are not limited to: … creation of new thermal coal assets;",
        "plain_rendering": "HSBC considers some activities incompatible with its goal of net zero financed emissions by 2050. So HSBC will not provide new finance to any client for the specific purposes of, or new advisory services in connection with, those activities. They include, among others, the creation of new thermal coal assets.",
        "phrases": [
          {
            "id": "specific-purposes",
            "label": "for the specific purposes of",
            "type": "narrowing_qualifier",
            "source": "watchtower_weakness",
            "watchtower_ref": "The term 'specific purposes' may leave mixed-use or indirect financing open unless HSBC establishes that proceeds support the prohibited asset.",
            "not_in_synthesis": false,
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
              "This wording lets through general corporate financing to a company that is building a new coal plant or mine. The loan names no purpose, so it can pay for the new plant."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "new-thermal-coal-assets",
            "label": "new thermal coal assets",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              288,
              311
            ],
            "plain_range": [
              286,
              309
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
        "title": "The definition of “new thermal coal assets”",
        "intro": "How HSBC's policy defines it in its glossary.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“New thermal coal assets” is set in italics in the rule. The policy says once, near the start, that italic words are defined in its glossary."
        },
        "verbatim": "Thermal coal assets / new thermal coal assets — … new thermal coal assets means new thermal coal mines, new thermal coal-fired power plants and new coal to gas / liquids plants. The terms thermal coal assets and new thermal coal assets do not include exempted activities.",
        "plain_rendering": "New thermal coal assets are new thermal coal mines, new thermal coal-fired power plants and new coal to gas / liquids plants. The terms do not include exempted activities.",
        "phrases": [
          {
            "id": "exempted",
            "label": "exempted activities",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              251,
              270
            ],
            "plain_range": [
              151,
              170
            ],
            "means": "This explains what HSBC means by “new thermal coal assets”: new mines, new power stations, and new plants that make fuel from coal. It then takes out “exempted activities”, a list HSBC keeps in its glossary. So this commitment blocks less than the words suggest.",
            "lets_through": [
              "This wording lets through companies that build, equip or service new coal sites, or trade the coal. The policy does not apply to those businesses.",
              "It also lets through new mines that produce mostly metallurgical coal, the kind used to make steel."
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
        "role": "condition",
        "source_id": "tcpp2021",
        "title": "The assets already under way",
        "intro": "The policy also says what happens to an existing client that was already building a new coal asset before 2021.",
        "location": {
          "distance": "later_in_document",
          "signposting": "none",
          "signposting_note": "Nothing in the restriction points to this passage, which sits in the policy's rules on extra checks."
        },
        "verbatim": "Any new finance or new advisory services for existing clients with one or more of the following characteristics will require EDD and pre-approval by a relevant governance committee … the client is involved in the construction of a new thermal coal asset, where such construction started or was contractually committed (via power purchase agreement for thermal coal-fired power plants) before 01 January 2021 (as detailed above, HSBC will not finance the creation of a new thermal coal asset).",
        "plain_rendering": "New finance or new advisory services for an existing client will require EDD and pre-approval by a relevant governance committee where the client is building a new thermal coal asset that started, or was contractually committed, before 1 January 2021. HSBC will not finance the creation of the asset itself.",
        "phrases": [
          {
            "id": "edd",
            "label": "will require EDD and pre-approval",
            "type": "escape_hatch",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              112,
              145
            ],
            "plain_range": [
              60,
              93
            ],
            "means": "This explains what happens to a client still building a coal asset it started before 2021. Its new financing is not refused. It needs enhanced due diligence (EDD), a closer check, and approval by an HSBC risk committee.",
            "lets_through": [
              "This wording lets through new general financing to a client that is building a new coal plant or mine, once an HSBC committee approves it."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "thermal-coal",
      "metallurgical-coal",
      "corporate-finance",
      "project-finance",
      "advisory"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 366,
      "document_id": 16928,
      "institution": "hsbc",
      "commitment_index": 5,
      "commitment_id": "3b5f0370-ab19-5865-8f79-2fba2a6242e3",
      "url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=5",
      "agent_name": "openai/gpt-5.6-luna",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-10-12",
      "synthesis_updated": "2026-10-12",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        7028,
        7254
      ],
      "summary_text": "HSBC will not provide new finance or advisory services for creation of new thermal coal assets, including new mines, power plants, and coal-to-gas/liquids plants.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": null,
          "activity_scope": "new"
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
      "exceptions": [],
      "weaknesses": "The term 'specific purposes' may leave mixed-use or indirect financing open unless HSBC establishes that proceeds support the prohibited asset.",
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
        "weakness": true,
        "commitment_specific_carve_outs": 0,
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
      "strength_reason": "HSBC refuses financing named for a new coal plant or mine, and advice on one. A general loan to the company building it is not refused.",
      "actual_reading": "it will not provide financing named for a new coal plant or mine, or advice on one, but it can still lend to the company building it",
      "gaps": [
        {
          "title": "General loans to the builder",
          "text": "The restriction covers financing for the specific purpose of a new coal asset. A loan to the company as a whole has no named purpose, so it is not covered.",
          "phrase_refs": [
            "specific-purposes"
          ]
        },
        {
          "title": "Clients already building before 2021",
          "text": "A client that started a new plant or mine before 2021 can still get new financing. It needs extra checks and a committee's approval, not a refusal.",
          "phrase_refs": [
            "edd"
          ]
        },
        {
          "title": "Builders, suppliers and steelmaking coal",
          "text": "Companies that build or equip coal sites, or trade the coal, are outside the policy. So are new mines producing mostly steelmaking coal.",
          "phrase_refs": [
            "exempted"
          ]
        }
      ],
      "in_practice": "This commitment stops HSBC from financing a new coal plant or mine directly. A loan for one named project, a bond sold to pay for it, or advice on it, is refused.\n\nTake a power company planning a new coal plant. It asks HSBC for a loan to build the plant, and HSBC says no. The company then asks for a general loan to the company as a whole. That loan names no purpose, so this commitment does not cover it, and the company can spend it on the plant.\n\nNow take a client that signed its contract for a new coal plant in 2020. The policy says HSBC will not finance the plant itself. But the client's other new financing goes to a committee for approval, and the committee can say yes.\n\nThe company that builds the plant, or makes its boilers, is outside the policy altogether. Its work is a coal service, an exempted activity. So is a new mine whose coal goes mostly to steelmakers.\n\nSo the new coal asset itself cannot be the named purpose of HSBC's financing. The companies around it can still borrow.",
      "gets_right": "It refuses advice as well as financing. The advice it refuses is anything “in connection with” a new coal asset, which reaches further than a loan's stated purpose."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "HSBC has committed not to finance or advise on new coal mines and coal power plants. We have not reviewed its financing against this commitment yet.",
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
