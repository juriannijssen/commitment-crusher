/* Commitment data — generated from commitments/commitment-hsbc-coal-phase-out-eu-oecd.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "hsbc-coal-phase-out-eu-oecd",
    "bank": "HSBC",
    "commitment_number": 1,
    "category": "coal",
    "effective_date": "2030-12-31",
    "title": "HSBC's 2030 Coal Phase-out in the EU and OECD",
    "short_title": "2030 Coal Phase-out in the EU and OECD",
    "subject": null,
    "article_published": null,
    "intro": "HSBC's shareholders approved this commitment at the bank's 2021 Annual General Meeting. HSBC set it out in its Thermal Coal Phase-Out Policy, published in December 2021. It promises to phase out the financing of coal-fired power and thermal coal mining in the EU and OECD by 2030.",
    "naive_reading": "it is getting out of financing coal power and coal mining in the EU and OECD",
    "plain_language_note": "The promise is one sentence and reads plainly. What counts as a coal mine, and the targets on the way to 2030, come from other parts of the policy.",
    "sources_intro": "One policy document states this commitment, and it takes three passages from it to see what it covers.",
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
        "synthesis_url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=1",
        "synthesis_run": 366,
        "verbatim_check": {
          "document": "16928-hsbc-thermal-coal-phase-out.md",
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
        "source_id": "tcpp2021",
        "title": "The promise",
        "intro": "This is the sentence that opens the policy. It names the commitment HSBC's shareholders approved and the two dates it set.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "This Thermal Coal Phase-Out Policy (“Policy”) fulfils the commitment approved at HSBC’s 2021 Annual General Meeting to publish and implement a policy to phase out the financing of coal-fired power and thermal coal mining by 2030 in markets in the European Union (“EU”) / Organisation for Economic Cooperation and Development (“OECD”), and by 2040 in other markets (“Phase-Out Commitment”).",
        "plain_rendering": "HSBC’s shareholders approved a commitment in 2021 to phase out the financing of coal-fired power and thermal coal mining by 2030 in markets in the European Union (EU) and the Organisation for Economic Cooperation and Development (OECD), and by 2040 in other markets. This policy carries it out.",
        "phrases": [
          {
            "id": "phase-out",
            "label": "phase out the financing",
            "type": "narrowing_qualifier",
            "source": "watchtower_weakness",
            "watchtower_ref": "The policy establishes a portfolio phase-out endpoint but does not specify a transaction-level prohibition or detailed enforcement mechanism for all existing client financing.",
            "not_in_synthesis": false,
            "verbatim_range": [
              153,
              176
            ],
            "plain_range": [
              53,
              76
            ],
            "means": "This explains what HSBC promises by the date: no financing left. “Phase out” names an end point, and this sentence sets no steps or pace on the way to it.",
            "lets_through": [
              "This wording lets through financing at any level until the end of 2030. HSBC can keep lending to a coal client in the EU or OECD right up to the deadline without breaking this commitment."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "thermal-coal-mining",
            "label": "thermal coal mining",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              201,
              220
            ],
            "plain_range": [
              101,
              120
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "in-markets",
            "label": "in markets in the European Union",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              229,
              261
            ],
            "plain_range": [
              129,
              161
            ],
            "means": "The words “in markets” set where the 2030 date applies: the EU and the countries of the OECD, a club of mostly wealthy economies. The policy does not say whether a client's home country, the place its coal plants and mines stand, or where it sells decides its market.",
            "lets_through": [
              "This wording lets through coal power and coal mining in every other country until 2040, ten years later. That is where most of the world's coal is mined and burned.",
              "It also lets through a company whose market is open to argument, such as one listed in an OECD country that mines coal outside it."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "definition",
        "source_id": "tcpp2021",
        "title": "The definition of “thermal coal mining”",
        "intro": "How HSBC's policy defines it in its footnotes and glossary.",
        "location": {
          "distance": "end_of_document",
          "signposting": "none",
          "signposting_note": "Nothing in the promise marks these words. Only a footnote in the glossary, at the end of the policy, links them to a definition."
        },
        "verbatim": "In this Policy, “coal-fired power” means thermal coal-fired power plants and “thermal coal mining” means thermal coal mines, as defined in this Glossary. … thermal coal mines / new thermal coal mines — All mines where more than 30% of either production or the coal reserve is thermal coal.",
        "plain_rendering": "In this policy, “thermal coal mining” means thermal coal mines: all mines where more than 30% of either production or the coal reserve is thermal coal.",
        "phrases": [
          {
            "id": "more-than-30pc",
            "label": "more than 30% of either production or the coal reserve",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              218,
              272
            ],
            "plain_range": [
              80,
              134
            ],
            "means": "This explains what HSBC means by “thermal coal mining”. It is work at a mine where more than 30% of the coal, by output or by reserves, is thermal coal. Thermal coal is the kind burned in power plants. No standards body defines a thermal coal mine, and in everyday use it is any mine that produces thermal coal. So this definition blocks fewer mines than the words suggest.",
            "lets_through": [
              "This wording lets through mines that produce mostly metallurgical coal, the kind used to make steel. That holds even when up to 30% of what they dig is thermal coal for power plants."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "narrower"
      },
      {
        "index": 3,
        "role": "condition",
        "source_id": "tcpp2021",
        "title": "The interim targets",
        "intro": "The policy sets two targets on the way to the end date, and says what they are measured against.",
        "location": {
          "distance": "later_in_document",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Using its 2020 Task Force on Climate-Related Financial Disclosures (TCFD) as its baseline, HSBC intends to reduce thermal coal financing exposure by at least 25% by 2025, and aims to reduce thermal coal financing exposure by 50% by 2030. These targets will be reviewed in conjunction with assessments of client transition plans.",
        "plain_rendering": "Measured against its 2020 climate disclosures, HSBC intends to reduce thermal coal financing exposure by at least 25% by 2025, and aims to reduce it by 50% by 2030. These targets will be reviewed alongside HSBC's assessments of its clients' transition plans.",
        "phrases": [
          {
            "id": "exposure",
            "label": "thermal coal financing exposure",
            "type": "unverifiable_metric",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              114,
              145
            ],
            "plain_range": [
              70,
              101
            ],
            "means": "This explains how the targets are measured: in “exposure”, the amount HSBC has lent or committed to coal clients. The policy does not give the 2020 figure, or say which loans, bonds and services it counts.",
            "lets_through": [
              "This wording lets through a reduction that nobody outside HSBC can check, because the starting figure and the method are not in the policy."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "aims-to",
            "label": "aims to",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              175,
              182
            ],
            "plain_range": [
              131,
              138
            ],
            "means": "The words “aims to” make the 2030 target a goal rather than a promise, and the 2025 target is only something HSBC “intends”. Neither says what happens if it is missed.",
            "lets_through": [
              "This wording lets through a slower reduction than the targets describe, with no stated consequence for HSBC."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "reviewed",
            "label": "These targets will be reviewed",
            "type": "escape_hatch",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              238,
              268
            ],
            "plain_range": [
              165,
              195
            ],
            "means": "This lets HSBC change the targets after it has assessed its clients' transition plans, which are their own plans for moving away from coal. The policy does not say a review can only raise them.",
            "lets_through": [
              "This wording lets through lower targets, if HSBC decides its clients' plans call for them."
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
      "phase-out",
      "eu",
      "oecd",
      "exposure",
      "transition-plan"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 366,
      "document_id": 16928,
      "institution": "hsbc",
      "commitment_index": 1,
      "commitment_id": "ea4e5b89-5c40-553e-be49-ff252fc7230b",
      "url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=1",
      "agent_name": "openai/gpt-5.6-luna",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-10-12",
      "synthesis_updated": "2026-10-12",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        945,
        1128
      ],
      "summary_text": "HSBC will phase out financing for thermal coal-fired power in EU/OECD markets by 2030.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": "downstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": false
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": "new_and_existing",
          "certainty": "4"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new_and_existing"
        }
      },
      "triggers": [],
      "commitment_type": "phase_out",
      "effective_date": "2030",
      "exceptions": [],
      "weaknesses": "The policy establishes a portfolio phase-out endpoint but does not specify a transaction-level prohibition or detailed enforcement mechanism for all existing client financing.",
      "reviewer_notes": "STATS: 8 added, 0 removed, 2 split, 20 fields corrected\nCHANGES:\n- Split the headline phase-out into separate coal-fired-power and thermal-coal-mining commitments for each geographic/timing rule because the activities have different value-chain positions.\n- Corrected the phase-out commitments' value-chain classifications and removed the mistaken 'existing' relationship/transaction classifications from the 2040 rule; remaining exposure does not expressly establish those schema statuses.\n- Split the captive thermal coal plant and captive thermal coal mine restriction because they are distinct downstream and upstream commitments. Corrected both to financing_type 'project' and omitted capital_markets, relationship_status, and transaction_status as required for project financing.\n- Corrected the broad new-thermal-coal-assets commitment to avoid incorrectly assigning it only to downstream activity.\n- Removed the phase-out geographic continuation from the exceptions array; it defines the separate 2040 scope rather than an exception to the commitment.\n- Set governance_process to false for emissions-reduction, retrofit, and transition-purpose exceptions because the cited text does not invoke a formal committee or approval process.\n- Retained the EDD commitments as screening commitments rather than restrictions because EDD and committee approval do not mandate rejection.\n- Corrected misconception indices to reflect the added and split commitments.",
      "not_in_synthesis_note": null,
      "also_covers": [
        {
          "commitment_index": 2,
          "commitment_id": "00d34613-325d-59f1-8eef-20ba5f1cf8a9",
          "url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=2"
        }
      ]
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
        "new_business_only": false,
        "total": 1
      },
      "verdict_selected": null,
      "verdict_final": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "The end date is firm, but nothing binds HSBC before it. The targets on the way are goals, and mines that produce mostly steelmaking coal are not covered.",
      "actual_reading": "it is ending its financing to coal power plants, and to mines where more than 30% of the coal is thermal coal, in the EU and OECD by the end of 2030",
      "gaps": [
        {
          "title": "Nothing binding before the end of 2030",
          "text": "“Phase out” sets an end date and no pace. The targets on the way are an intention and an aim, and HSBC can review them itself.",
          "phrase_refs": [
            "phase-out",
            "aims-to",
            "reviewed"
          ]
        },
        {
          "title": "Mines that mostly produce steelmaking coal",
          "text": "A mine counts only if more than 30% of its coal is thermal coal. A mine that produces mostly steelmaking coal keeps its financing after 2030.",
          "phrase_refs": [
            "more-than-30pc"
          ]
        },
        {
          "title": "No rule for a client's market",
          "text": "The policy does not say what puts a client in an EU or OECD market. A company listed in one country and mining in another could fall on either side.",
          "phrase_refs": [
            "in-markets"
          ]
        }
      ],
      "in_practice": "This commitment works on an end date. By the end of 2030, HSBC should have no financing left for coal power plants and thermal coal mines in the EU and OECD. The commitment covers loans, bonds HSBC helps to sell, and project loans.\n\nTake a power company in Poland, an EU and OECD country, that runs coal plants. HSBC can keep lending to it at today's level for years, because “phase out” sets no pace. The two targets on the way, a 25% cut by 2025 and a 50% cut by 2030, are an intention and an aim. They are measured in “exposure” against a 2020 figure the policy does not publish, so a reader cannot check them.\n\nNow take a mine in Australia, also an OECD country, where most of the coal goes to steelmakers and 25% goes to power plants. It is not a thermal coal mine here, because thermal coal is not more than 30% of its output. Its financing can continue after 2030.\n\nA company headquartered in an OECD country but mining in Indonesia is a harder case. The policy does not say whether its listing, its mines or its sales decide its market, so HSBC decides.\n\nBy the end of 2030, the coal power plants and thermal coal mines of EU and OECD clients should be gone from HSBC's books. Until then, the commitment sets a direction, not a limit.",
      "gets_right": "It sets a fixed end date and covers lending, bond sales and project loans alike. HSBC also set targets on the way to it."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "HSBC has committed to phase out its financing of coal power and coal mining in the EU and OECD by 2030. We have not reviewed its financing against this commitment yet.",
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
