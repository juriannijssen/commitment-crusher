/* General-clauses article — generated from commitments/general-clauses-barclays.md
   by prototype/build/render_commitments.py. Do not edit by hand. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "barclays-general-clauses",
    "page_kind": "general_clauses",
    "bank": "Barclays",
    "commitment_number": null,
    "category": "general",
    "effective_date": null,
    "title": "The clauses that apply to every Barclays commitment",
    "short_title": "The clauses that apply to every commitment",
    "selected_for_publication": true,
    "article_published": null,
    "intro": "Barclays sets its restrictions sector by sector: oil and gas, coal, and mountaintop removal. Six provisions sit elsewhere in the same statement and apply across all of them. None appears in the wording of any single commitment, but each can decide whether a restriction applies.",
    "naive_reading": null,
    "plain_language_note": null,
    "sources_intro": "All six come from a single policy document, in four different places.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219",
        "watchtower_document_id": 4122,
        "watchtower_institution": "barclays",
        "synthesis_run": 219,
        "version_label": "December 2025",
        "published": "2025-12-01",
        "published_source": null,
        "published_confidence": null,
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file"
      }
    ],
    "clauses": [
      {
        "index": 1,
        "role": "definition",
        "source_id": "ccs2025",
        "title": "What counts as financing",
        "intro": "Every restriction in the statement is a restriction on financing, and this entry in the definitions table says what the word covers.",
        "location": {
          "distance": "elsewhere_in_document",
          "signposting": "none",
          "signposting_note": "KEY DEFINITIONS"
        },
        "verbatim": "Finance or financing — Refers to all primary financing activity through lending (including reserve-based lending agreements), underwriting, arranging and/or distribution of debt or equity, as well as trade and working capital finance and excludes, without limitation, any debt or securities traded or placed through secondary market activity. Barclays may occasionally continue to be involved in primary financing activity for distressed entities such as (without limitation) debt for equity swaps and other recapitalisation activities. When undertaking such activity, Barclays has a responsibility to minimise losses and will look to deploy possible financing options to manage distressed positions and/or maximise recoveries where it is a liability holder. Such financing arrangements are not typically for the purposes of funding the ongoing operational activity of the distressed entity. Accordingly, any such activity is excluded from the definition of financing.",
        "plain_rendering": "Financing means Barclays lending, underwriting, arranging or distributing debt or equity, and providing trade and working capital finance. It excludes debt or securities traded or placed through secondary market activity. It also excludes primary financing for distressed entities, meaning companies in financial difficulty, such as debt-for-equity swaps and other recapitalisations.",
        "phrases": [
          {
            "id": "secondary-market-activity",
            "label": "secondary market activity",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              316,
              341
            ],
            "plain_range": [
              195,
              220
            ],
            "means": "A company raising debt for the first time is being financed, but the same debt bought or sold afterward is not.",
            "lets_through": [
              "Buying, selling, or placing the existing bonds and shares of a company that a restriction in this statement names.",
              "A trading desk holding that company's debt while the lending desk is barred from adding to it."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "distressed-entities",
            "label": "distressed entities",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              427,
              446
            ],
            "plain_range": [
              261,
              280
            ],
            "means": "A company in financial trouble can be refinanced, and the statement does not count that as financing.",
            "lets_through": [
              "New primary financing for a restricted coal or oil company once it is in difficulty.",
              "Debt-for-equity swaps and recapitalizations, which can leave the bank owning part of the company instead."
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
        "source_id": "ccs2025",
        "title": "Who the revenue tests are run on",
        "intro": "Several coal commitments turn on what share of a company's revenue comes from coal. This entry in the definitions table says which company is measured.",
        "location": {
          "distance": "elsewhere_in_document",
          "signposting": "none",
          "signposting_note": "KEY DEFINITIONS"
        },
        "verbatim": "Client(s) — Means in relation to any proposed transaction the client entity (or entities) entering into the transaction. Any restrictions relating to the % revenue generated by such clients from thermal coal activities applies to the consolidated revenues of the entity being financed, whether transacting with a Group parent, subsidiary or joint venture.",
        "plain_rendering": "The client is the entity that enters into the transaction. Every restriction based on the share of revenue a client earns from thermal coal is measured on the consolidated revenues of the entity being financed, whether it is a group parent, a subsidiary or a joint venture.",
        "phrases": [
          {
            "id": "entity-being-financed",
            "label": "the entity being financed",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              259,
              284
            ],
            "plain_range": [
              184,
              209
            ],
            "means": "The test is run on whichever company signs, not on the group it belongs to.",
            "lets_through": [
              "A subsidiary under the coal revenue threshold, inside a group well over it.",
              "A group restructuring so that the company borrowing is not the one holding the coal."
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
        "source_id": "ccs2025",
        "title": "Financing agreed before the restriction",
        "intro": "The statement's page on applicability opens by saying what happens to financing the bank had already agreed.",
        "location": {
          "distance": "elsewhere_in_document",
          "signposting": "none",
          "signposting_note": "APPLICABILITY OF FINANCING RESTRICTIONS"
        },
        "verbatim": "Any existing commitments or financing entered into prior to any of the restrictions coming into effect under the Upstream Oil & Gas and Unconventional Oil & Gas sections of this statement may remain in place (but refinancings of any such commitments or financing shall be subject to the restrictions described above).",
        "plain_rendering": "Financing Barclays agreed before a restriction in its Upstream Oil & Gas and Unconventional Oil & Gas sections took effect may remain in place. Only refinancing of that agreement has to meet the restriction.",
        "phrases": [
          {
            "id": "may-remain-in-place",
            "label": "may remain in place",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              188,
              207
            ],
            "plain_range": [
              123,
              142
            ],
            "means": "A restriction applies from the day it starts, so it does not reach back to what the bank had already agreed.",
            "lets_through": [
              "Financing signed before the restriction, for as long as the agreement runs.",
              "Further drawdowns on a facility agreed earlier, since only a refinancing is caught."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "upstream-and-unconventional-sections",
            "label": "Upstream Oil & Gas and Unconventional Oil & Gas sections",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              113,
              169
            ],
            "plain_range": [
              54,
              110
            ],
            "means": "This limits the provision to oil and gas. Existing financing under the Upstream Oil & Gas and Unconventional Oil & Gas restrictions may continue. The thermal coal restrictions get no such allowance here.",
            "lets_through": [
              "Every oil and gas loan or bond agreed before these two sections took effect, for as long as the agreement runs."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 4,
        "role": "exception",
        "source_id": "ccs2025",
        "title": "Transition finance for a restricted group",
        "intro": "The next paragraph on the same page allows one kind of financing into a group the statement has just restricted.",
        "location": {
          "distance": "elsewhere_in_document",
          "signposting": "none",
          "signposting_note": "APPLICABILITY OF FINANCING RESTRICTIONS"
        },
        "verbatim": "In certain cases, we may enter into Sustainable Finance or Transition Finance transactions with an entity in a Group that would otherwise be restricted as a result of the application of the Upstream Oil & Gas section of this statement where Barclays is satisfied that any Sustainable Finance or Transition Finance transactions provided to it will not be used directly to support oil & gas activity.",
        "plain_rendering": "Barclays may provide sustainable finance or transition finance to a company in a group its upstream oil and gas restriction would otherwise block, where Barclays is satisfied the financing will not be used directly to support oil & gas activity.",
        "phrases": [
          {
            "id": "where-barclays-is-satisfied",
            "label": "where Barclays is satisfied",
            "type": "escape_hatch",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              235,
              262
            ],
            "plain_range": [
              147,
              174
            ],
            "means": "Barclays decides this itself. The statement names no test, no evidence, and nobody who has to agree.",
            "lets_through": [
              "Financing into a restricted group, on the bank's own judgment about where the proceeds go.",
              "Financing that frees the company's own funds for oil and gas, since only the use of these proceeds is asked about."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "used-directly-to-support",
            "label": "will not be used directly to support oil & gas activity",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              342,
              397
            ],
            "plain_range": [
              189,
              244
            ],
            "means": "The question is whether this financing pays for oil and gas work, not whether it helps the company that does it.",
            "lets_through": [
              "Financing for anything else the company owns, while its oil and gas business continues unchanged."
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
        "source_id": "ccs2025",
        "title": "What the restrictions are checked against",
        "intro": "Almost every restriction in the statement asks a question about a company, such as its revenue, its production, or its plans. This passage says where the answer comes from.",
        "location": {
          "distance": "elsewhere_in_document",
          "signposting": "none",
          "signposting_note": "THIRD PARTY DATA"
        },
        "verbatim": "We note, however, that such data/information can be challenging to obtain, verify and assess. Where data is not available or is not of a reliably high quality, this may impact our ability to apply restrictions and other provisions set out in this statement.",
        "plain_rendering": "Barclays notes that this information can be hard to obtain, verify and assess. Where data is missing or not reliably good, Barclays says this “may impact our ability to apply restrictions” in the statement.",
        "phrases": [
          {
            "id": "may-impact-our-ability",
            "label": "may impact our ability to apply restrictions",
            "type": "escape_hatch",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              165,
              209
            ],
            "plain_range": [
              143,
              187
            ],
            "means": "A restriction can go unapplied because the data was not there, and the statement says so in advance.",
            "lets_through": [
              "A client whose coal revenue share nobody published, so it was never tested against a threshold.",
              "A private company, which discloses far less than a listed one."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 6,
        "role": "condition",
        "source_id": "ccs2025",
        "title": "Subject to the law",
        "intro": "The statement's opening page, two lines under the title, sets a condition on everything that follows.",
        "location": {
          "distance": "elsewhere_in_document",
          "signposting": "none",
          "signposting_note": "ABOUT THIS DOCUMENT"
        },
        "verbatim": "The application of the provisions in this statement is subject to compliance with applicable laws and regulations, which may change from time to time.",
        "plain_rendering": "Everything in the statement is subject to compliance with applicable laws and regulations, and the law can change.",
        "phrases": [
          {
            "id": "subject-to-applicable-laws",
            "label": "subject to compliance with applicable laws and regulations",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              55,
              113
            ],
            "plain_range": [
              31,
              89
            ],
            "means": "Where a law requires the bank to do business it has promised not to do, the law wins.",
            "lets_through": [
              "Financing in a place whose law bars a bank from refusing a customer on these grounds."
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
      "strength_reason": "Each provision reads as ordinary fine print. Together they take whole kinds of financing out of every Barclays commitment, and they leave the bank to decide more of it case by case.",
      "naive_reading": "its commitments apply as they are written",
      "actual_reading": "its commitments apply to new primary financing, tested on the company that signs, agreed after each rule began, where the data exists and the law allows, and not to financing Barclays calls transition finance",
      "gaps": [
        {
          "title": "Trading, and companies in difficulty",
          "phrase_refs": [
            "secondary-market-activity",
            "distressed-entities"
          ],
          "text": "“Financing” leaves out buying and selling a company's existing bonds and shares, and new financing for a company in difficulty. So neither is restricted anywhere in the statement."
        },
        {
          "title": "The company that signs, not its group",
          "phrase_refs": [
            "entity-being-financed"
          ],
          "text": "Every coal revenue test is run on the company entering the deal. So a subsidiary under the line can borrow, even inside a group well over it."
        },
        {
          "title": "Financing agreed before a rule began",
          "phrase_refs": [
            "may-remain-in-place"
          ],
          "text": "Oil and gas financing signed before a restriction took effect stays in place until it ends or is refinanced."
        },
        {
          "title": "Transition finance, on Barclays' judgment",
          "phrase_refs": [
            "where-barclays-is-satisfied"
          ],
          "text": "Barclays can still finance a restricted oil and gas group where it is satisfied the financing will not directly support oil and gas."
        }
      ],
      "in_practice": "Every Barclays commitment page ends by pointing here, because these six provisions apply to all of them. None of them sits in the wording of a commitment. Instead they sit in a definitions table, a page on who the statement applies to, a note on data, and a line about the law.\n\nSay a Barclays restriction names a coal company. Its existing bonds can still be bought, sold, and placed with investors, because that is secondary market activity, not financing. And if the company falls into difficulty, Barclays can lend to it again.\n\nA large group with one coal-heavy company and several clean ones is a different case. The coal revenue test is run on whichever company signs, so a clean subsidiary can borrow, and the financing can move inside the group.\n\nThen there is timing. An oil and gas loan agreed before a restriction began runs to its end. And a restricted oil and gas group can still get what Barclays calls sustainable or transition finance. That applies where Barclays is satisfied it will not directly support oil and gas.\n\nThe last two provisions qualify everything. Barclays says missing or poor data may affect its ability to apply its restrictions. And the whole statement is subject to the law, which can change.\n\nRead alone, each is ordinary policy drafting. Read together, they explain how a commitment can be worded tightly and still let financing through."
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
    "built": "2026-10-02",
    "spec": "3.13",
    "source": "editorial/general-clauses-4122.json"
  }
};
