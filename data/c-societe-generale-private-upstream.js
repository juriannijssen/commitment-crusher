/* Commitment data — generated from commitments/commitment-societe-generale-private-upstream.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-private-upstream",
    "bank": "Société Générale",
    "commitment_number": 3,
    "category": "oil_gas_expansion",
    "effective_date": "2026-04-01",
    "title": "Société Générale's Exclusion of Private Upstream Companies",
    "short_title": "Exclusion of Private Upstream Companies",
    "article_published": "2026-09-02",
    "intro": "Société Générale sets out this exclusion in its Oil & Gas Sector Policy, published in April 2026. The bank will not finance private companies whose business is upstream oil and gas (exploration, development, and production) and almost nothing else. Because it is a client-level exclusion, it applies to the company rather than to a single transaction. It also commits the bank to running down what it already has.",
    "naive_reading": "it will not finance privately held oil and gas producers",
    "plain_language_note": "The sentence is short, and everything the analysis turns on sits either in parentheses or in a footnote that points elsewhere. The plain rendering keeps all of it.",
    "sources_intro": "This exclusion comes from a single policy document. We quote two passages from it below: the exclusion itself, and the glossary entry that decides which entity the test is measured against.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "ogp2026",
        "document_title": "Société Générale Oil & Gas Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/oil-gas-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=3",
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
        "intro": "This passage sets two conditions and says what happens to existing business.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide any financial products or services to… any private Company (ie. not majority-owned by a state), which generates almost all of its revenues from upstream Oil and Gas activities (i.e. exploration, development and production). Existing exposure will be phased out until extinction, in compliance with existing contracts.",
        "plain_rendering": "Société Générale will not provide any financial products or services to any private Company, meaning one not majority-owned by a state, which generates almost all of its revenues from upstream oil and gas activities. Existing exposure will be phased out until extinction, in compliance with existing contracts.",
        "phrases": [
          {
            "id": "private-company",
            "label": "private Company",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              70,
              85
            ],
            "plain_range": [
              76,
              91
            ],
            "means": "This explains a test of who owns the borrower, not of what it does. The bank's own parenthesis defines it as not majority-owned by a state. A footnote sends the reader to the glossary for what “Company” means. There, the answer is that the test is measured across the whole consolidated group.",
            "lets_through": [
              "This wording lets through every producer that is majority-owned by a state. National oil companies are among the world's largest oil and gas producers, and this wording is drafted so that it cannot reach any of them.",
              "It also lets through a private producer that sells a majority stake to a state. Because ownership is the test, a company can move outside this commitment through a deal that changes nothing about its drilling."
            ],
            "defined_in_clause": 2,
            "source": "watchtower_exception",
            "watchtower_ref": "Company is majority-owned by a state (State-Owned Enterprise).",
            "not_in_synthesis": false,
            "bank_definition": null
          },
          {
            "id": "almost-all",
            "label": "almost all of its revenues",
            "type": "undefined_term",
            "verbatim_range": [
              139,
              165
            ],
            "plain_range": [
              152,
              178
            ],
            "means": "The words “almost all” set the test of how concentrated the company's business is. No figure is attached, and the phrase is not defined anywhere in the policy.",
            "lets_through": [
              "This wording lets through any producer with a second business of meaningful size. The bank decides internally where the line falls, and never has to explain it."
            ],
            "defined_in_clause": null,
            "source": "watchtower_weakness",
            "watchtower_ref": "The term 'almost all of their revenues' is not quantitatively defined, leaving room for subjective interpretation.",
            "not_in_synthesis": false,
            "bank_definition": null
          },
          {
            "id": "existing-contracts",
            "label": "in compliance with existing contracts",
            "type": "escape_hatch",
            "verbatim_range": [
              306,
              343
            ],
            "plain_range": [
              272,
              309
            ],
            "means": "This explains the condition on the phase-out. Financing already committed continues to flow for as long as the agreements behind it run.",
            "lets_through": [
              "This wording lets through every facility already signed, for its full term. No end date is given, so the phase-out finishes whenever the longest existing contract does."
            ],
            "defined_in_clause": null,
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
        "title": "The definition of “Company”",
        "intro": "How Société Générale's policy defines it in the glossary. It decides which company the test is measured on.",
        "location": {
          "distance": "end_of_document",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Company: refers to the legal entity and companies in its scope of consolidation. Consequently, for the calculation of the indicators in this policy for a Company, reference must be made to its consolidated financial statements.",
        "plain_rendering": "A Company means the legal entity together with every company it consolidates. The tests in this policy are calculated from its consolidated financial statements.",
        "phrases": [
          {
            "id": "consolidated",
            "label": "its consolidated financial statements",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              189,
              226
            ],
            "plain_range": [
              123,
              160
            ],
            "means": "This definition of “Company” is broader than the usual meaning of the word. Under international accounting standards, a company is a single entity, and the parent with all its subsidiaries is a group. Société Générale reads it as that entity plus everything in its consolidated accounts. So the ratio is worked out across the whole group rather than at the entity doing the extraction, which reaches further than the borrower.",
            "lets_through": [
              "This wording lets through any upstream business owned by a diversified parent. A subsidiary that only produces stops being “almost all” upstream once it is consolidated into a group that also refines, trades, or generates power."
            ],
            "defined_in_clause": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "ordinary_source": [
              {
                "body": "IFRS Foundation",
                "title": "IFRS 10, Appendix A",
                "term": "Group",
                "url": "https://www.ifrs.org/content/dam/ifrs/publications/html-standards/english/2025/issued/ifrs10.html#IFRS10_APPA"
              }
            ],
            "bank_definition": null
          }
        ],
        "watchtower_origin": "Watchtower attaches this passage to this commitment's counterparty scope (`counterparty_scope.quotations`), so the quotation is sourced from the record. The phrase highlighted inside it is Bank.Green's reading.",
        "ordinary_direction": "broader"
      }
    ],
    "glossary_refs": [
      "upstream",
      "national-oil-company",
      "client-level",
      "consolidated-accounts"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 197,
      "document_id": 23944,
      "institution": "societe_generale",
      "commitment_index": 3,
      "commitment_id": "a117fafb-0797-55c2-80e3-4ee1f47104dc",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/23944/synthesis?run=197&commitment=3",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-06-22",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        16607,
        17442
      ],
      "summary_text": "The Group will phase out existing exposure and refuse new financial products or services to private (non-state-owned) companies generating almost all of their revenues from upstream oil and gas activities.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": null,
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "group",
          "relationship_status": "new_and_existing",
          "certainty": null
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new_and_existing"
        }
      },
      "triggers": [
        {
          "metric": "other",
          "inequality": null,
          "value": null,
          "definition": "generates almost all of its revenues from upstream Oil and Gas activities (i.e. exploration, development and production)"
        }
      ],
      "commitment_type": "phase_out",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Company is majority-owned by a state (State-Owned Enterprise).",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": "Section 6.1, Client criteria — Exclusion criteria, page 8"
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
          "condition": "Account holding and cash management services provided to subsidiaries of integrated oil and gas companies (IOCs).",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": "Section 2.2, Scope of the Group's activities, page 4"
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
      "weaknesses": "The term 'almost all of their revenues' is not quantitatively defined, leaving room for subjective interpretation.",
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
      "strength": "hollowed",
      "strength_derivation": {
        "rule": "spec v3.29 §4.1 — the gap between the naive reading and what it catches",
        "inputs_source": "Watchtower record",
        "record_score": "hollowed",
        "weakness": true,
        "commitment_specific_carve_outs": 2,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 2,
        "previous_editorial_rating": "hollowed",
        "changed": false
      },
      "reviewed_by": null,
      "reviewed_at": null,
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "strength_reason": "It covers only private producers that do almost nothing else. State-owned producers are outside it by design, and existing loans run to their end.",
      "actual_reading": "it will not finance private oil and gas producers that it judges earn almost all of their revenue from production, and it lets existing contracts run out",
      "gaps": [
        {
          "title": "State-owned producers are outside it",
          "phrase_refs": [
            "private-company"
          ],
          "text": "A company majority-owned by a state is not private, so it is not covered. National oil companies are among the largest producers in the world."
        },
        {
          "title": "No number for “almost all”",
          "phrase_refs": [
            "almost-all",
            "consolidated"
          ],
          "text": "The policy gives no figure, so the bank decides where the line falls. And it measures the whole group, so a producer owned by a parent with other businesses is not caught."
        },
        {
          "title": "Existing contracts run to the end",
          "phrase_refs": [
            "existing-contracts"
          ],
          "text": "Existing financing is phased out in line with existing contracts. No end date is given, so the phase-out ends when the longest contract does."
        }
      ],
      "in_practice": "Upstream means finding, developing, and producing oil and gas, rather than refining or selling it. This commitment covers private companies that earn almost all of their revenue from that work.\n\nSociété Générale will not provide any financial product or service to a private company that does nothing but drill for oil and gas. Its existing financing is to be phased out, but only as its contracts allow. A ten-year loan signed before the policy can run its full ten years.\n\nA national oil company, majority-owned by its government, can drill just as much. But it is not private, so this commitment does not apply to it. A private producer can also move outside this commitment by selling a majority stake to a state, without changing anything about its drilling.\n\nA private producer with a refinery or a trading arm of real size raises a question: is almost all of its revenue from production? The policy gives no figure, so Société Générale decides. The same goes for a producer owned by a larger group. It is measured with its parent's other businesses, so it is no longer almost all upstream.\n\nSo what is left is a private, independent company that does little besides produce oil and gas.",
      "gets_right": "Above the line, Société Générale withholds every financial product and service, not only loans for a named project. And the policy does not leave existing financing alone: it says that financing will be phased out."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not finance private companies whose business is almost entirely upstream oil and gas. We have not reviewed its financing against this commitment yet, so this page has no figure.",
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
