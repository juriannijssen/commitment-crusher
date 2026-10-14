/* Commitment data — generated from commitments/commitment-hsbc-mountaintop-removal.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "hsbc-mountaintop-removal",
    "bank": "HSBC",
    "commitment_number": 11,
    "category": "coal",
    "effective_date": "2021-12-01",
    "title": "HSBC's Commitment on Mountaintop Removal Mining",
    "short_title": "Commitment on Mountaintop Removal Mining",
    "subject": null,
    "article_published": null,
    "intro": "HSBC set out this commitment in its Thermal Coal Phase-Out Policy of December 2021, in its controls on financing. HSBC says coal mining by mountaintop removal is incompatible with its goal of net zero financed emissions by 2050. So it will not finance or advise on it, and it names the companies that depend on it.",
    "naive_reading": "it will not finance mountaintop removal coal mining or the companies that do it",
    "plain_language_note": "The plain version keeps HSBC's wording. The sentence leads into a list, and only the item this commitment covers is quoted from it.",
    "sources_intro": "One policy document states this commitment. It takes two passages from it to see what it covers.",
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
        "synthesis_url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=11",
        "synthesis_run": 366,
        "verbatim_check": {
          "document": "16928-hsbc-thermal-coal-phase-out.md",
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
        "source_id": "tcpp2021",
        "title": "The promise",
        "intro": "This is the sentence that sets the restriction, with the item on its list that this commitment covers.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "HSBC considers that certain activities are incompatible with HSBC’s NZ50 Target. Consequently, HSBC will not provide new finance to any client for the specific purposes of, or new advisory services in connection with, such activities. These include, but are not limited to: … thermal coal mines using Mountaintop Removal (including clients who derive more than 30% of their annual revenues from Mountaintop Removal coal mining);",
        "plain_rendering": "HSBC considers some activities incompatible with its goal of net zero financed emissions by 2050. So HSBC will not provide new finance to any client for the specific purposes of, or new advisory services in connection with, those activities. They include, among others, thermal coal mines using Mountaintop Removal, including clients who derive more than 30% of their annual revenues from Mountaintop Removal coal mining.",
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
              "This wording lets through general corporate financing to a company that mines this way but earns 30% or less of its revenue from it. The loan names no purpose."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "thermal-coal-mines",
            "label": "thermal coal mines",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              276,
              294
            ],
            "plain_range": [
              270,
              288
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "mtr",
            "label": "Mountaintop Removal",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              301,
              320
            ],
            "plain_range": [
              295,
              314
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": null,
            "bank_definition": null,
            "plain_gloss": "Mountaintop removal is a way of mining coal in the Central Appalachian Mountains of the United States. Miners blast away the top of a mountain to reach the coal seams underneath, and dump the rock into the valleys below."
          },
          {
            "id": "more-than-30pc",
            "label": "more than 30% of their annual revenues",
            "type": "narrowing_qualifier",
            "source": "watchtower_weakness",
            "watchtower_ref": "The operative bullet combines a mine-level prohibition with a client revenue threshold, making application to diversified clients somewhat unclear.",
            "not_in_synthesis": false,
            "verbatim_range": [
              351,
              389
            ],
            "plain_range": [
              345,
              383
            ],
            "means": "This seems to extend this commitment from the mines to the companies that run them. But only companies earning more than 30% of their revenue from this mining are named. And the sentence still sits under “for the specific purposes of”.",
            "lets_through": [
              "This wording lets through a company earning 30% or less of its revenue from Mountaintop Removal, however many such mines it runs.",
              "It also leaves open whether a company above 30% is refused all new financing, or only financing named for the mines."
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
        "title": "The definition of “thermal coal mines”",
        "intro": "How HSBC's policy defines it in its glossary.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Thermal coal mines” is set in italics in the rule. The policy says once, near the start, that italic words are defined in its glossary."
        },
        "verbatim": "Thermal coal mines / new thermal coal mines — All mines where more than 30% of either production or the coal reserve is thermal coal.",
        "plain_rendering": "Thermal coal mines are all mines where more than 30% of either production or the coal reserve is thermal coal.",
        "phrases": [
          {
            "id": "more-than-30pc-thermal",
            "label": "more than 30% of either production or the coal reserve",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              62,
              116
            ],
            "plain_range": [
              39,
              93
            ],
            "means": "This explains what HSBC means by “thermal coal mines”. They are mines where more than 30% of the coal, by output or by reserves, is thermal coal, the kind burned in power plants. No standards body defines a thermal coal mine, and in everyday use it is any mine that produces thermal coal. So this definition blocks fewer mines than the words suggest.",
            "lets_through": [
              "This wording lets through mountaintop removal mines that produce mostly metallurgical coal, the kind used to make steel. Central Appalachia is a major source of it."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "narrower"
      }
    ],
    "glossary_refs": [
      "thermal-coal",
      "metallurgical-coal",
      "mountaintop-removal",
      "corporate-finance",
      "revenue-threshold"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 366,
      "document_id": 16928,
      "institution": "hsbc",
      "commitment_index": 11,
      "commitment_id": "9a5cd3a3-d6f8-5cc4-ae66-b69f57c25e25",
      "url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366&commitment=11",
      "agent_name": "openai/gpt-5.6-luna",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-10-12",
      "synthesis_updated": "2026-10-12",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        7503,
        7662
      ],
      "summary_text": "HSBC will not provide new finance or advisory services for thermal coal mines using Mountaintop Removal, including clients deriving more than 30% of annual revenue from that mining.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": false
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
      "triggers": [
        {
          "metric": "revenue_share",
          "inequality": ">",
          "value": 30,
          "definition": "annual revenues derived from Mountaintop Removal coal mining",
          "measurement_timeframe": "annual"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [],
      "weaknesses": "The operative bullet combines a mine-level prohibition with a client revenue threshold, making application to diversified clients somewhat unclear.",
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
      "strength_reason": "Financing named for a mountaintop removal mine is refused. But mines producing mostly steelmaking coal are not covered, and companies below 30% of revenue can still borrow.",
      "actual_reading": "it will not provide financing named for a mountaintop removal mine whose coal is mostly burned in power plants",
      "gaps": [
        {
          "title": "Mines producing steelmaking coal",
          "text": "A mine counts only if more than 30% of its coal is thermal coal. Mountaintop removal mines producing mostly steelmaking coal are not covered.",
          "phrase_refs": [
            "more-than-30pc-thermal"
          ]
        },
        {
          "title": "Companies at 30% or less",
          "text": "Only companies earning more than 30% of their revenue from this mining are named. A larger, more varied company can still borrow.",
          "phrase_refs": [
            "more-than-30pc",
            "specific-purposes"
          ]
        }
      ],
      "in_practice": "Mountaintop removal is practiced in one place: the Central Appalachian Mountains of the United States. This commitment refuses financing and advice for thermal coal mines that use it.\n\nMuch of the coal mined there is metallurgical coal, sold to steelmakers. A mine where 30% or less of the coal is thermal coal is not a thermal coal mine under this policy. So a mountaintop removal mine producing mostly steelmaking coal is not covered at all.\n\nTake a mining company that earns 20% of its revenue from mountaintop removal and the rest from other mines. It is below the 30% line, so it is not named. A loan named for one of its mountaintop sites is refused, but a general loan to the company is not.\n\nA company above 30% is named. But the sentence still sits under “for the specific purposes of”, so it is not clear whether HSBC refuses it all new financing.\n\nSo the restriction holds for thermal coal mines of this kind, where the financing names them.",
      "gets_right": "It names the companies as well as the mines, and it refuses advice as well as financing."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "HSBC has committed not to finance or advise on coal mining by mountaintop removal. We have not reviewed its financing against this commitment yet.",
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
