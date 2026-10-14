/* General-clauses article — generated from commitments/general-clauses-hsbc.md
   by prototype/build/render_commitments.py. Do not edit by hand. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "hsbc-general-clauses",
    "page_kind": "general_clauses",
    "bank": "HSBC",
    "commitment_number": null,
    "category": "general",
    "effective_date": null,
    "title": "The clauses that apply to every HSBC commitment",
    "short_title": "The clauses that apply to every commitment",
    "selected_for_publication": false,
    "article_published": null,
    "intro": "HSBC's Thermal Coal Phase-Out Policy sets its coal commitments in three sections: targets, client transition plans, and controls on financing. Five provisions sit elsewhere in the same policy and apply across all of them. None appears in the wording of any single commitment, but each can decide whether a commitment applies.",
    "naive_reading": null,
    "plain_language_note": null,
    "sources_intro": "All five come from a single policy document, in three different places.",
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
        "synthesis_url": "https://watchtower.bank.green/institution/hsbc/document/16928/synthesis?run=366",
        "synthesis_run": 366
      }
    ],
    "clauses": [
      {
        "index": 1,
        "role": "definition",
        "source_id": "tcpp2021",
        "title": "What counts as financing",
        "intro": "Every commitment in the policy is about financing or advice, and this entry in the glossary says what financing covers.",
        "location": {
          "distance": "elsewhere_in_document",
          "signposting": "none",
          "signposting_note": "Glossary"
        },
        "verbatim": "Finance or financing / new finance or financing — The provision of (or when considering the provision of) project finance, direct lending, or arranging or underwriting of capital markets transactions to clients. New finance or financing means the provision of new finance to a client, including the refinancing of existing finance facilities.",
        "plain_rendering": "Financing means providing clients with project finance, direct lending, or arranging or underwriting of capital markets transactions. New financing includes the refinancing of existing finance facilities.",
        "phrases": [
          {
            "id": "finance-list",
            "label": "project finance, direct lending, or arranging or underwriting of capital markets transactions",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              106,
              199
            ],
            "plain_range": [
              39,
              132
            ],
            "means": "This explains what HSBC means by “financing”: three things. Project finance is a loan for one named project. Direct lending is a loan from HSBC to the company, and capital markets work is helping a company sell bonds or shares.",
            "lets_through": [
              "This wording lets through trade finance, guarantees and letters of credit, which help a company buy and ship goods.",
              "It also lets through bank accounts, payments, currency and interest-rate hedging, and HSBC's own investments in a company's shares and bonds."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "condition",
        "source_id": "tcpp2021",
        "title": "Who the rules are tested on",
        "intro": "The policy's scope section says how HSBC treats a client that belongs to a larger group of companies.",
        "location": {
          "distance": "elsewhere_in_document",
          "signposting": "none",
          "signposting_note": "Scope and Definitions"
        },
        "verbatim": "If an existing or prospective client is part of a wider group, HSBC will take into consideration the activities of the client group and apply this Policy to the extent appropriate in light of the organisational structure and governance of the client group.",
        "plain_rendering": "If a client belongs to a wider group, HSBC will consider what the group does and apply the policy to the extent appropriate, given how the group is organized and run.",
        "phrases": [
          {
            "id": "extent-appropriate",
            "label": "to the extent appropriate",
            "type": "escape_hatch",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              154,
              179
            ],
            "plain_range": [
              98,
              123
            ],
            "means": "This lets HSBC decide case by case whether a group's coal business counts against one of its companies. The policy gives no test for when it does.",
            "lets_through": [
              "This wording lets through a low-coal company inside a coal-heavy group, if HSBC judges the group's structure keeps the two apart."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 3,
        "role": "exception",
        "source_id": "tcpp2021",
        "title": "What the policy leaves out",
        "intro": "The policy's scope section and its glossary together list activities the policy does not cover.",
        "location": {
          "distance": "elsewhere_in_document",
          "signposting": "none",
          "signposting_note": "Scope and Definitions; Glossary"
        },
        "verbatim": "The Policy does not apply to clients engaged in exempted activities. … Exempted activities — Means the following: captive thermal coal-fired power plants; captive thermal coal mines; thermal coal services; metallurgical coal activities and mines; underground coal gasification (coal bed methane); and all other activities of clients. For the avoidance of doubt, the Policy does apply to clients engaged in new captive coal-fired power plants and new captive thermal coal mines.",
        "plain_rendering": "The policy does not apply to clients engaged in exempted activities. These are captive thermal coal-fired power plants, captive thermal coal mines, thermal coal services, metallurgical coal activities and mines, underground coal gasification, and all other activities of clients. The policy does apply to clients engaged in new captive plants and mines.",
        "phrases": [
          {
            "id": "captive",
            "label": "captive thermal coal-fired power plants",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              114,
              153
            ],
            "plain_range": [
              79,
              118
            ],
            "means": "A captive coal plant is a power plant built to supply one factory, such as a metal smelter, rather than the grid. Existing captive plants and the mines that feed them are outside the policy; only new ones are covered.",
            "lets_through": [
              "This wording lets through every captive coal plant and captive mine already running, for as long as it runs."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "services",
            "label": "thermal coal services",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              183,
              204
            ],
            "plain_range": [
              148,
              169
            ],
            "means": "The glossary defines “thermal coal services” as the businesses around coal: trading, shipping and processing it, building and servicing coal sites, and making their equipment.",
            "lets_through": [
              "This wording lets through coal traders, coal shipping companies, and the contractors that build coal plants and mines."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "other-activities",
            "label": "all other activities of clients",
            "type": "undefined_term",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              301,
              332
            ],
            "plain_range": [
              247,
              278
            ],
            "means": "The sentence exempts clients, and the list ends with “all other activities of clients”. Read word for word, that takes any client with a second business out of the policy. The policy does not say how it is meant to be read.",
            "lets_through": [
              "This wording lets through, on its plain words, a coal company that also does anything else. HSBC decides how far it reads it."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 4,
        "role": "condition",
        "source_id": "tcpp2021",
        "title": "Other parts of HSBC",
        "intro": "The scope section also says what HSBC's other businesses, including asset management, will do.",
        "location": {
          "distance": "elsewhere_in_document",
          "signposting": "none",
          "signposting_note": "Scope and Definitions"
        },
        "verbatim": "Unless in conflict with fiduciary or other regulatory obligations, all relevant HSBC entities, products and businesses, including asset management, will seek to implement policies that support the transition from coal-fired power and thermal coal mining within HSBC’s 2030/40 timelines.",
        "plain_rendering": "Unless it conflicts with their legal duties to clients or regulators, every relevant HSBC business, including asset management, will seek to implement policies that support moving away from coal power and coal mining by 2030 and 2040.",
        "phrases": [
          {
            "id": "seek-to-implement",
            "label": "will seek to implement policies",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              148,
              179
            ],
            "plain_range": [
              128,
              159
            ],
            "means": "This explains how far the commitments reach outside lending and advice: not at all. Other HSBC businesses only promise to try to write policies of their own.",
            "lets_through": [
              "This wording lets through the coal holdings of the funds HSBC manages. These commitments do not cover them."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 5,
        "role": "condition",
        "source_id": "tcpp2021",
        "title": "HSBC's own judgment",
        "intro": "The important notice at the end of the policy says how HSBC makes its judgments under it, and that the policy can change.",
        "location": {
          "distance": "elsewhere_in_document",
          "signposting": "none",
          "signposting_note": "Important notice"
        },
        "verbatim": "In making the assessments and determinations further described in the Policy, HSBC will use such information, as it determines necessary and relevant, in its sole discretion. … HSBC reserves the right, without giving reason, to amend the Policy at any time.",
        "plain_rendering": "HSBC makes the assessments the policy describes using whatever information it finds necessary, in its sole discretion. HSBC can amend the Policy at any time, without giving a reason.",
        "phrases": [
          {
            "id": "sole-discretion",
            "label": "in its sole discretion",
            "type": "escape_hatch",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              151,
              173
            ],
            "plain_range": [
              95,
              117
            ],
            "means": "This explains whose judgment counts when the policy asks for one: HSBC's alone, on information it chooses.",
            "lets_through": [
              "This wording lets through any assessment HSBC makes, since nobody outside the bank can challenge the information it was based on."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "amend-at-any-time",
            "label": "amend the Policy at any time",
            "type": "escape_hatch",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              228,
              256
            ],
            "plain_range": [
              128,
              156
            ],
            "means": "This lets HSBC change any commitment in the policy whenever it chooses, without saying why.",
            "lets_through": [
              "This wording lets through a weaker policy in the future, with no notice and no reason given."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": null,
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [],
    "disagreements": [],
    "assessment": {
      "strength": null,
      "strength_reason": "Each provision reads as ordinary fine print. Together they keep large parts of the coal business, and several kinds of banking, out of every HSBC coal commitment.",
      "naive_reading": "its commitments apply as they are written",
      "actual_reading": "its commitments apply to loans, project loans and bond and share sales, for coal businesses outside the exempted list, as HSBC judges groups, and until HSBC amends them",
      "gaps": [
        {
          "title": "Banking that is not “financing”",
          "phrase_refs": [
            "finance-list"
          ],
          "text": "Trade finance, guarantees, accounts and hedging are not financing here. None of the commitments covers them."
        },
        {
          "title": "Captive plants and the coal trade",
          "phrase_refs": [
            "captive",
            "services"
          ],
          "text": "Existing captive coal plants, coal traders and the contractors around coal are exempted, so no commitment reaches them."
        },
        {
          "title": "Groups, as HSBC sees fit",
          "phrase_refs": [
            "extent-appropriate"
          ],
          "text": "A group's coal business counts against its companies only to the extent HSBC finds appropriate."
        },
        {
          "title": "A policy HSBC can change",
          "phrase_refs": [
            "amend-at-any-time",
            "sole-discretion"
          ],
          "text": "HSBC can amend the policy at any time without a reason, and makes its assessments in its sole discretion."
        }
      ],
      "in_practice": "Every HSBC commitment page from this policy ends by pointing here, because these five provisions apply to all of them. None sits in the wording of a commitment. They sit in the policy's scope section, its glossary, and its important notice.\n\nStart with what the commitments restrict: financing and advice. Financing means project finance, direct lending, and helping a company sell bonds or shares. A coal company can still use HSBC for trade finance, guarantees, bank accounts and hedging, whatever a commitment says.\n\nThen look at who the policy leaves out. A nickel smelter's own coal plant is captive, and existing captive plants are exempted. So are coal traders, coal shipping companies, and the firms that build coal plants. No commitment in the policy reaches them.\n\nA company inside a coal-heavy group is a judgment call. HSBC counts the group's coal business against it only to the extent it finds appropriate.\n\nAnd the funds HSBC manages are outside these commitments altogether. Its asset management arm only promises to seek policies of its own.\n\nLast, HSBC can amend the policy at any time without giving a reason. So each commitment holds as written only until HSBC decides otherwise."
    }
  },
  "evidence": {
    "status": "not_applicable",
    "teaser": null,
    "headline_figure": {
      "display": null,
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-10-13",
    "spec": "3.13",
    "source": "editorial/general-clauses-16928.json"
  }
};
