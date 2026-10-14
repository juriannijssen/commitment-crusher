/* Commitment data — generated from commitments/commitment-ing-pureplay-upstream-2024.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "ing-pureplay-upstream-2024",
    "bank": "ING",
    "commitment_number": 2,
    "category": "oil_gas_expansion",
    "effective_date": "2024-09-19",
    "title": "ING's 2024 Commitment on Upstream Oil & Gas",
    "short_title": "2024 Commitment on Upstream Oil & Gas",
    "subject": "Upstream Oil & Gas",
    "article_published": "2026-08-28",
    "intro": "ING announced this commitment on September 19, 2024, in its Climate Progress Update. In the foreword, CEO Steven van Rijswijk set it out as an expansion of the bank's oil and gas policy. From that day, ING says, it will stop all new financing to upstream oil and gas companies that keep developing new fields.",
    "naive_reading": "it has stopped financing companies that open new oil and gas fields",
    "plain_language_note": "ING wrote this commitment without vague or padded wording. It is clear on its own, so the plain version changes little beyond “we” to ING.",
    "sources_intro": "This commitment comes from a single document, and we quote one passage from it below.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "cpu2024",
        "document_title": "ING Climate Progress Update 2024",
        "document_url": "https://ing.com/binaries/content/assets/documents/files/climate_progress_update_2024.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/ing_group/document/4517/synthesis?run=105&commitment=2",
        "watchtower_document_id": 4517,
        "watchtower_institution": "ing_group",
        "synthesis_run": 105,
        "version_label": "September 2024",
        "published": "2024-09-18",
        "published_source": null,
        "published_confidence": null,
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "verbatim_check": {
          "document": "4517-ing-pureplay-upstream-2024.md",
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
        "source_id": "cpu2024",
        "title": "The promise",
        "intro": "This sentence comes from the CEO's foreword to the 2024 Climate Progress Update. It sets two conditions, and both must be true before ING stops financing.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We're now expanding our policy – as of today we'll also stop all new financing to pure-play upstream oil & gas companies that continue to develop new fields.",
        "plain_rendering": "ING is expanding its policy – as of today it will also stop all new financing to pure-play upstream oil & gas companies that continue to develop new fields.",
        "phrases": [
          {
            "id": "as-of-today",
            "label": "as of today",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              33,
              44
            ],
            "plain_range": [
              30,
              41
            ],
            "means": "This explains when this commitment starts: on the date of the CEO's foreword, September 19, 2024, and only for financing agreed from then on.",
            "lets_through": [
              "This wording lets through every loan, credit facility, and bond agreed with these companies before that day."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "new-financing",
            "label": "all new financing",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              61,
              78
            ],
            "plain_range": [
              60,
              77
            ],
            "means": "The word “new” limits this commitment to financing agreed from now on. Financing these companies already have is not covered.",
            "lets_through": [
              "This wording lets through existing loans, credit facilities, and bonds until they end. The sentence does not say whether they can be renewed."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "pure-play",
            "label": "pure-play",
            "type": "narrowing_qualifier",
            "source": "watchtower_weakness",
            "watchtower_ref": "The restriction only applies to 'pure-play' upstream companies, meaning diversified oil and gas companies (such as integrated majors) that continue to develop new fields are not covered by this specific exclusion.",
            "not_in_synthesis": false,
            "verbatim_range": [
              82,
              91
            ],
            "plain_range": [
              81,
              90
            ],
            "means": "The word “pure-play” sets a test of whether a company works in only one part of the oil and gas value chain. It asks what kind of company the borrower is, not how much oil it produces, where it drills, or how fast it is growing.",
            "lets_through": [
              "This wording lets through any producer that also holds midstream or downstream assets. A terminal, a pipeline interest, or a refinery is enough to fall outside this commitment, however much the company drills.",
              "It also lets through the integrated majors, which by definition work across the whole chain."
            ],
            "defined_in_clause": null,
            "bank_definition": {
              "quote": "… a 'pure-play' company is one whose activities take place exclusively in one part of the sector value chain",
              "source_id": "cpu2024"
            }
          },
          {
            "id": "new-fields",
            "label": "that continue to develop new fields",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              121,
              156
            ],
            "plain_range": [
              120,
              155
            ],
            "means": "This explains the second half of a two-part test. Financing is withheld only when both things are true at once: the company is pure-play, and it continues to develop new fields. If either is false, this commitment does not apply. Adding wells to a field that is already producing does not count as a new field, however much oil comes out of it.",
            "lets_through": [
              "The words “new fields” let through growth inside existing fields: new wells, new phases, and redeveloping a mature field or extending its life by decades. All of it is new supply, but none of it is a new field.",
              "It also lets through production bought rather than developed. Acquiring fields, licenses, or an entire company adds output without opening anything new.",
              "It also lets through stakes in someone else's field. The wording never says whether holding an interest in a field another company operates counts as developing one. The bank decides, and it does not have to publish how it decided."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      }
    ],
    "glossary_refs": [
      "upstream",
      "new-financing",
      "existing-client",
      "greenfield"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 105,
      "document_id": 4517,
      "institution": "ing_group",
      "commitment_index": 2,
      "commitment_id": null,
      "url": "https://watchtower.bank.green/institution/ing_group/document/4517/synthesis?run=105&commitment=2",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-03",
      "synthesis_updated": "2026-06-18",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        3757,
        3916
      ],
      "summary_text": "ING will stop providing new financing to pure-play upstream oil and gas companies that continue to develop new fields, effective immediately.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "upstream",
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
      "triggers": [
        {
          "metric": "other",
          "inequality": null,
          "value": null,
          "definition": "Pure-play upstream oil & gas companies that continue to develop new fields"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [],
      "weaknesses": "The restriction only applies to 'pure-play' upstream companies, meaning diversified oil and gas companies (such as integrated majors) that continue to develop new fields are not covered by this specific exclusion.",
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 1 fields corrected]\nCHANGES:\n- [ING will stop providing new financing to pure-play upstream oil and gas companies that continue to develop new fields, effective immediately.]: Removed the exception regarding non-pure-play companies because this condition is already captured under the triggers/counterparty scope, and the schema dictates that conditions captured in other dimensions should not be duplicated in exceptions.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [],
    "general_clauses_page": null,
    "disagreements": [],
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
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "It applies to very few companies. Owning a single pipeline, or drilling more wells in a field that already produces, is enough to fall outside it.",
      "actual_reading": "it has stopped new financing to companies that do nothing but produce oil and gas and keep opening new fields",
      "gaps": [
        {
          "title": "Any producer that owns more than wells",
          "phrase_refs": [
            "pure-play"
          ],
          "text": "“Pure-play” means the company works in one part of the oil and gas chain only. A producer that also owns a pipeline, a terminal, or a refinery is not pure-play, however much it drills. Nor is any major oil company."
        },
        {
          "title": "Growth inside existing fields",
          "phrase_refs": [
            "new-fields"
          ],
          "text": "The rule applies only to companies that keep developing new fields. New wells in a field that already produces, a second phase, or buying someone else's field add oil without opening a new one."
        }
      ],
      "in_practice": "ING only stops financing when two things are both true. The company must be pure-play, meaning it does nothing but find and produce oil and gas, and it must keep opening new fields. If either is not true, ING can keep financing it.\n\nThe first test is about how a company is organized, not about how much oil it produces. Take a producer that owns a share in a pipeline. It is no longer pure-play, and the commitment no longer applies to it. The largest oil companies all own pipelines, terminals, or refineries, so none of them is caught.\n\nThe second test turns on a formal step: a new field needs its own license. Drilling more wells in a field that already produces does not, however much oil it adds, and neither does buying another company's fields.\n\nSo the commitment catches a small, focused producer that opens new fields. It lets through the large producers, and the small ones that grow inside the fields they already have. A company can also step outside it by buying a share in a pipeline, which changes nothing about the oil it produces.\n\nIt also covers only new financing, so loans and bonds agreed before September 19, 2024, continue.",
      "gets_right": "It covers every kind of financing: loans for one named project, loans to the company as a whole, and bonds. For the companies it does reach, nothing is left open."
    },
    "featured": {
      "rank": 6,
      "kind": "a two-part test",
      "because": "A promise to stop financing new fields, narrowed by 'pure-play' and 'new fields'; $251.3M found."
    },
    "selected_for_publication": true
  },
  "evidence": {
    "status": "financing_found",
    "teaser": "That is how much ING put into producers that are still adding oil and gas supply, despite a commitment that seems to rule out exactly this. And that is only what we have found so far.",
    "what_it_funded": "producers that are still adding oil and gas supply",
    "headline_figure": {
      "display": "$251.3M",
      "combines": "2 2025 financings to oil and gas producers",
      "complete": false
    },
    "deals": [
      {
        "id": "ing-bp-international-2025",
        "company": "BP International Ltd",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 131538461.538462,
        "amount_display": "$131.5M",
        "instruments": [],
        "contradiction": "The financing arm of an integrated oil major, which refines, trades, and sells fuel as well as drilling. This commitment only covers producers that do nothing else. A company that works across the whole chain falls outside it by definition.",
        "phrase_refs": [
          "pure-play"
        ],
        "source_url": null
      },
      {
        "id": "ing-enquest-2025",
        "company": "EnQuest",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 119760000,
        "amount_display": "$119.8M",
        "instruments": [
          "revolving credit facility",
          "second facility — instrument to confirm"
        ],
        "contradiction": "A UK North Sea producer that also operates an oil terminal and holds interests in two pipelines. This commitment only covers producers that do nothing else. A company with midstream assets falls outside the test.",
        "phrase_refs": [
          "pure-play"
        ],
        "source_url": null
      }
    ]
  },
  "provenance": {
    "built": "2026-10-02",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 105, document 4517",
    "reading": "drafted"
  }
};
