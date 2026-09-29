/* Commitment data — generated from commitments/commitment-barclays-arctic-materially-engaged.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "barclays-arctic-materially-engaged",
    "bank": "Barclays",
    "commitment_number": 10,
    "category": "arctic",
    "effective_date": "2024-02-01",
    "title": "Barclays' Commitment on Arctic Oil & Gas Companies",
    "short_title": "Commitment on Arctic Oil & Gas Companies",
    "article_published": null,
    "intro": "Barclays sets out this restriction in its Climate Change Statement. Introduced in February 2024 and carried into the December 2025 statement, it commits the bank not to provide financing to clients engaged in Arctic oil and gas exploration, production or pipeline transportation.",
    "naive_reading": "it will not finance companies that drill for or pipe oil and gas in the Arctic",
    "plain_language_note": "Barclays writes plainly and defines its own key term, which is unusual. The plain versions change little; the definitions come from a table at the end of the statement and are set out here as sentences.",
    "sources_intro": "One policy document states this commitment. Three passages from it are quoted here, and the second and third are definitions the first depends on.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=10",
        "watchtower_document_id": 4122,
        "watchtower_institution": "barclays",
        "synthesis_run": 219,
        "version_label": "December 2025",
        "published": "2025-12-01",
        "published_source": null,
        "published_confidence": null,
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "verbatim_check": {
          "document": "4122-barclays-arctic-oil-gas.md",
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
        "source_id": "ccs2025",
        "title": "The promise",
        "intro": "This rule reaches the client as a whole, and counts pipelines as well as drilling.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not provide financing to Clients materially engaged in oil & gas exploration and production or pipeline transportation operations in the Arctic Circle.",
        "plain_rendering": "Barclays will not provide financing to Clients materially engaged in oil & gas exploration and production or pipeline transportation operations in the Arctic Circle.",
        "phrases": [
          {
            "id": "materially-engaged",
            "label": "materially engaged in",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              41,
              62
            ],
            "plain_range": [
              47,
              68
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "see-arctic-circle",
            "label": "Arctic Circle",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              145,
              158
            ],
            "plain_range": [
              151,
              164
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 3,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "definition",
        "source_id": "ccs2025",
        "title": "The definition of “materially engaged in”",
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "The defined term is set in italics in the sentence above. Nothing else marks it, and the definition itself sits in a table at the end of the statement."
        },
        "verbatim": "Materially engaged in - Arctic Circle — For Arctic Circle, Groups are defined as \"materially engaged in\" if they have over 20% revenue from oil & gas activities in the Arctic Circle or have, after February 2024, approved capital investment for new exploration and production or new pipeline transportation of oil & gas within the Arctic Circle",
        "plain_rendering": "A group counts as materially engaged in Arctic oil and gas if it earns over 20% revenue from Arctic oil and gas activities, or has, after February 2024, approved capital investment for new Arctic exploration, production or pipeline transportation.",
        "phrases": [
          {
            "id": "threshold",
            "label": "over 20% revenue",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              118,
              134
            ],
            "plain_range": [
              71,
              87
            ],
            "means": "This definition of “materially engaged in” is narrower in one way and wider in another. By materially we normally mean big enough to matter, with no number attached. Barclays sets it at 20% of group revenue from the Arctic, so 19% is not material — a test of proportion and timing, not of conduct. The other half is wider: a group that has approved new Arctic investment counts even with no Arctic revenue at all.",
            "lets_through": [
              "This wording lets through every diversified producer. A group can run one of the largest Arctic operations in the world and stay far below 20% of its own revenue, because the denominator is everything else it does. The threshold scales with the size of the company rather than with the size of the drilling.",
              "This wording lets through any group whose Arctic business is a small share of the whole. The test is measured against everything else the group does, so the more a company does elsewhere, the further it sits from the threshold."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "cutoff",
            "label": "after February 2024",
            "type": "escape_hatch",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              191,
              210
            ],
            "plain_range": [
              132,
              151
            ],
            "means": "This explains a date attached to the capital-investment half of the test. Investment approved before that date does not count towards being materially engaged.",
            "lets_through": [
              "The date lets through every Arctic project approved before February 2024, however large, and however many years of construction and production still lie ahead of it. This commitment reaches the decision to invest, not the investment itself, so a project already approved is permanently outside the test."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "mixed"
      },
      {
        "index": 3,
        "role": "definition",
        "source_id": "ccs2025",
        "title": "The definition of “the Arctic Circle”",
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "nearby",
          "signposting": "weak",
          "signposting_note": "“Arctic Circle” is set in italics in the rule, marking it as a defined term, and nothing else points to its definition."
        },
        "verbatim": "Arctic Circle — Refers to the area within the Arctic Circle, which is subject to sea ice, the Arctic National Wildlife Refuge (ANWR) and Coastal Plains.",
        "plain_rendering": "The Arctic Circle means the area within the Arctic Circle, which is subject to sea ice, the Arctic National Wildlife Refuge (ANWR) and Coastal Plains.",
        "phrases": [
          {
            "id": "subject-to-sea-ice",
            "label": "subject to sea ice",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              70,
              88
            ],
            "plain_range": [
              68,
              86
            ],
            "means": "This definition of “the Arctic Circle” is narrower than what it usually means. Where the Arctic starts is a choice, and definitions built on the tree line or the limit of permafrost reach a long way further south. Barclays takes the line of latitude, plus two named areas in Alaska. Read as a limit, it covers the area within the Arctic Circle that is subject to sea ice. The comma before “which” leaves open whether those words limit the area or only describe it. Taking the latitude rather than the tree line puts less of the Arctic inside the restriction, so it blocks less.",
            "lets_through": [
              "Read as a limit, this wording lets through Arctic land that is neither covered by sea ice nor named, and both halves of the test above are measured only inside the defined area. Revenue and investment in the rest of the Arctic do not count."
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
      "arctic",
      "revenue-threshold",
      "capital-investment",
      "group-level",
      "pipelines",
      "exploration"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 10,
      "commitment_id": "d8f6d75f-3d4c-58c8-b63d-24b14048dd2a",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=10",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        8432,
        8618
      ],
      "summary_text": "Barclays will not finance clients materially engaged in Arctic Circle oil & gas E&P or pipeline transportation (>20% revenue or post-Feb 2024 capex approvals).",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "arctic"
          ],
          "value_chain": null,
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": false
        },
        "counterparty": {
          "level": "group",
          "relationship_status": "new_and_existing",
          "certainty": "5"
        },
        "product": {
          "financing_type": "corporate",
          "capital_markets": true,
          "transaction_status": "new_and_existing"
        }
      },
      "triggers": [
        {
          "metric": "revenue_share",
          "inequality": ">",
          "value": 20,
          "definition": "revenue from oil & gas activities in the Arctic Circle, or approval of capex for new Arctic E&P / pipelines after February 2024"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 1 fields corrected]\nCHANGES:\n- Barclays will not finance oil sands exploration and production companies (majority owners or operators deriving ≥10% revenue from oil sands).: Removed exception for <10% revenue as it is already captured in the threshold field.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "EXISTING OIL AND GAS FINANCING STAYS IN PLACE · APPLICABILITY OF FINANCING RESTRICTIONS — “Any existing commitments or financing entered into prior to any of the restrictions coming into effect under the Upstream Oil & Gas and Unconventional Oil & Gas sections of this statement may remain in place”; only refinancings are subject to the restrictions.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": "commitment 6 only",
        "where": "APPLICABILITY OF FINANCING RESTRICTIONS"
      },
      {
        "condition": "SECONDARY MARKETS AND DISTRESSED COMPANIES ARE NOT “FINANCING” · KEY DEFINITIONS — Financing “excludes, without limitation, any debt or securities traded or placed through secondary market activity”. Buying or selling a company’s existing bonds and shares is not financing here, so no restriction reaches it. Barclays also excludes primary financing for companies in financial difficulty, such as debt-for-equity swaps and other recapitalisations. A coal or oil company in trouble can be refinanced with none of these restrictions applying.",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "KEY DEFINITIONS"
      },
      {
        "condition": "RESTRICTIONS DEPEND ON THIRD-PARTY DATA · THIRD PARTY DATA — “Where data is not available or is not of a reliably high quality, this may impact our ability to apply restrictions and other provisions set out in this statement.”",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "THIRD PARTY DATA"
      },
      {
        "condition": "SUBJECT TO APPLICABLE LAW · ABOUT THIS DOCUMENT — “The application of the provisions in this statement is subject to compliance with applicable laws and regulations, which may change from time to time.”",
        "carve_out_kind": "bounded_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": false,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "ABOUT THIS DOCUMENT"
      }
    ],
    "general_clauses_page": {
      "url": "general-clauses-barclays.html",
      "title": "The clauses that apply to every Barclays commitment"
    },
    "disagreements": [
      {
        "field": "quotation",
        "severity": "contradiction",
        "watchtower": "Watchtower's quotation reads “Clients materially engaged in - Arctic Circle in oil & gas exploration and production …”.",
        "bank_green": "The statement reads “Clients materially engaged in oil & gas exploration and production …”. The words “- Arctic Circle” are the label of the definitions-table row, carried from Watchtower's parsed copy into the sentence. Checked against the PDF Watchtower stores.",
        "action": "Correct the quotation."
      },
      {
        "field": "loopholes.exceptions",
        "severity": "omission",
        "watchtower": "The record carries the statement's document-wide provisions on at most two commitments: the grandfathering rule on commitment 6, and the transition-finance allowance on commitments 4 and 5.",
        "bank_green": "The definition of financing excludes secondary-market activity and distressed-company financing; the statement applies only as far as third-party data allows, and subject to applicable law; existing oil and gas financing may remain in place until refinanced; and transition finance may reach restricted upstream groups. Each reaches more commitments than the record attaches it to.",
        "action": "Record each as a standing exception on every commitment it reaches."
      }
    ],
    "assessment": {
      "strength": "crushed",
      "strength_derivation": {
        "rule": "spec v3.29 §4.1 — the gap between the naive reading and what it catches",
        "inputs_source": "Watchtower record",
        "record_score": "holds",
        "weakness": false,
        "commitment_specific_carve_outs": 0,
        "project_finance_only": false,
        "new_business_only": false,
        "total": 0
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "The test is a share of group revenue. A group can run one of the largest Arctic operations and sit far below 20%, and projects approved before 2024 never count.",
      "actual_reading": "it will not finance a group that earns over 20% of its revenue from Arctic oil and gas, or that approved a new Arctic project after February 2024",
      "gaps": [
        {
          "title": "A share of revenue, not a size",
          "text": "The 20% is measured against everything the group does. The more it does elsewhere, the further it sits from the line, however large its Arctic business.",
          "phrase_refs": [
            "threshold"
          ]
        },
        {
          "title": "Projects approved before February 2024",
          "text": "Only investment approved after February 2024 counts. A project approved earlier stays outside the test for its whole life.",
          "phrase_refs": [
            "cutoff"
          ]
        },
        {
          "title": "Only part of the Arctic counts",
          "text": "Read as a limit, the Arctic here is the area within the Arctic Circle that has sea ice, plus two named areas in Alaska. Revenue and investment elsewhere in the Arctic do not count.",
          "phrase_refs": [
            "subject-to-sea-ice"
          ]
        }
      ],
      "in_practice": "A group is caught in one of two ways. More than 20% of its revenue comes from Arctic oil and gas. Or, after February 2024, it approved investment in new Arctic drilling or pipelines.\n\nTake a large oil group that also refines, trades and drills on other continents. Its Arctic fields may be among the largest there are. But they earn a small share of its total revenue, far below 20%. The first test does not catch it.\n\nNow suppose its main Arctic project was approved in 2023. Building and production may run for many years. But the approval came before February 2024, so the second test does not catch it either. Barclays can keep financing the group in every form.\n\nThe second test does catch a group that approves a new Arctic project from now on. It does nothing about the projects already under way.\n\nBoth tests also count only the Arctic as the statement defines it. Read as a limit, that is the area with sea ice plus two named areas in Alaska. Arctic land outside them does not count.\n\nSo what is left is a group that works mostly in the Arctic, or one approving a new project there now. Established groups with projects already approved are not affected."
    }
  },
  "evidence": {
    "status": "financing_found",
    "teaser": "That is what Barclays put into the largest oil producer in the Arctic, against a commitment written to stop it.",
    "headline_figure": {
      "display": "$188.4M",
      "combines": "1 2025 financing to the largest oil producer on the Alaskan North Slope",
      "complete": false
    },
    "deals": [
      {
        "id": "barclays-conocophillips-2025",
        "company": "ConocoPhillips",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 188400000.0,
        "amount_display": "$188.4M",
        "instruments": [],
        "contradiction": "The largest oil producer in Alaska, developing the Willow project on the North Slope. Its Arctic business is very large in absolute terms and small against everything else it produces. The threshold measures one against the other, so this commitment does not reach it.",
        "phrase_refs": [
          "threshold"
        ],
        "source_url": null
      }
    ],
    "what_it_funded": "the largest oil producer in the Arctic"
  },
  "provenance": {
    "built": "2026-09-29",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 219, document 4122",
    "reading": "drafted"
  }
};
