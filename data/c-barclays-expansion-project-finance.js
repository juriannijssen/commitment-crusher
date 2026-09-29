/* Commitment data — generated from commitments/commitment-barclays-expansion-project-finance.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "barclays-expansion-project-finance",
    "bank": "Barclays",
    "commitment_number": 2,
    "category": "oil_gas_expansion",
    "effective_date": null,
    "title": "Barclays' Commitment on Oil & Gas Expansion Projects",
    "short_title": "Commitment on Oil & Gas Expansion Projects",
    "article_published": null,
    "intro": "Barclays sets out this restriction in the Upstream Oil & Gas section of its Climate Change Statement of December 2025. It commits the bank not to finance new oil and gas projects or the infrastructure built for them.",
    "naive_reading": "it will not finance new oil and gas fields or the pipelines built for them",
    "plain_language_note": "The rule is plain. Its two key terms are defined in the table at the end of the statement, quoted here beside it.",
    "sources_intro": "One policy document states this commitment. Three passages from it are needed to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=2",
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
        "intro": "This is where Barclays makes the commitment.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not provide project finance for expansion projects or infrastructure projects primarily to be used for such expansion projects.",
        "plain_rendering": "Barclays will not provide project finance for expansion projects, or for infrastructure projects primarily to be used for them.",
        "phrases": [
          {
            "id": "project-finance",
            "label": "project finance",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              20,
              35
            ],
            "plain_range": [
              26,
              41
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "see-expansion",
            "label": "expansion",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              40,
              49
            ],
            "plain_range": [
              46,
              55
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 3,
            "bank_definition": null
          },
          {
            "id": "primarily",
            "label": "primarily",
            "type": "undefined_term",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              86,
              95
            ],
            "plain_range": [
              97,
              106
            ],
            "means": "The word “primarily” means infrastructure is caught only when most of its use serves expansion projects, and the statement never says how much counts as most.",
            "lets_through": [
              "This wording lets through pipelines, terminals and processing plants that also serve older fields or other users."
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
        "title": "The definition of “project finance”",
        "intro": "How Barclays' policy defines it in the same table.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Project finance” is set in italics in the rule, and nothing else points to its definition."
        },
        "verbatim": "Project Finance — Refers to transactions that are a form of loan financing originated by Barclays (either as an agent or as part of a syndicate) where the repayment depends primarily on the project’s cash flow and on the collateral value of the project’s assets. Project Finance excludes corporate level asset financing.",
        "plain_rendering": "Project finance means loans Barclays originates, alone or in a syndicate, that are repaid mainly from the project's own cash flow and secured on its assets. Project Finance excludes corporate level asset financing.",
        "phrases": [
          {
            "id": "excludes-corporate",
            "label": "excludes corporate level asset financing",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              279,
              319
            ],
            "plain_range": [
              173,
              213
            ],
            "means": "This definition of “project finance” is narrower than what it usually means. In the market, project finance is financing raised for a named project and repaid from what that project earns. Barclays limits it to loans it arranged itself, and writes company-level asset financing out by name. Lending to the company that owns the project is not project finance, so this commitment does not reach it — and it blocks far less than it appears to, because company-level lending is the ordinary way these projects are paid for.",
            "lets_through": [
              "This wording lets through asset financing arranged at company level for an expansion project — a reserve-based loan, for instance, secured on the producer's fields rather than on one project's cash flow.",
              "This wording lets through general corporate financing, bonds and every other company-level financing to the producers developing expansion projects."
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
        "role": "definition",
        "source_id": "ccs2025",
        "title": "The definition of “expansion”",
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Expansion” is set in italics in the rule, marking it as a defined term. Nothing else points to the definitions table."
        },
        "verbatim": "Expansion — Refers to any upstream oil & gas projects with a final investment decision (or equivalent) after 31 December 2021. This includes, but is not limited to, exploration, development, and production.",
        "plain_rendering": "Expansion means any upstream oil & gas project with a final investment decision after 31 December 2021, including exploration, development and production.",
        "phrases": [
          {
            "id": "fid-2021",
            "label": "after 31 December 2021",
            "type": "narrowing_qualifier",
            "source": "watchtower_exception",
            "watchtower_ref": "Projects with FID on or before 31 December 2021 are excluded from the definition of expansion",
            "not_in_synthesis": false,
            "verbatim_range": [
              103,
              125
            ],
            "plain_range": [
              80,
              102
            ],
            "means": "This definition of “expansion” is narrower than what it usually means. By expansion we normally mean a company producing more oil and gas than before. Barclays makes it a date test instead: only projects signed off after 31 December 2021 are expansion, and the date does not move. A field approved in 2021 and drilled out through the 2030s is never expansion here, however much it adds — so the restriction blocks less than the word suggests, for as long as those fields produce.",
            "lets_through": [
              "The date lets through every project sanctioned in or before 2021, for its whole life, including its later phases if they need no new investment decision."
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
      "project-finance",
      "upstream",
      "fid",
      "pipelines",
      "corporate-finance"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 2,
      "commitment_id": "180990bb-1e19-5ed3-8082-da369de873bc",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=2",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        6152,
        6300
      ],
      "summary_text": "Barclays will not provide project finance for upstream oil & gas expansion projects (FID after 31 December 2021) or infrastructure primarily used for them.",
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
          "relationship_status": null,
          "certainty": "5"
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
          "condition": "Projects with FID on or before 31 December 2021 are excluded from the definition of expansion",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": null,
          "standing": false,
          "where": null
        }
      ],
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
        "condition": "TRANSITION FINANCE FOR RESTRICTED UPSTREAM GROUPS · APPLICABILITY OF FINANCING RESTRICTIONS — Barclays “may enter into Sustainable Finance or Transition Finance transactions with an entity in a Group that would otherwise be restricted” by the Upstream Oil & Gas section, where it is satisfied they “will not be used directly to support oil & gas activity.”",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "recorded_by_watchtower": "commitments 4 and 5 only",
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
        "field": "loopholes.exceptions",
        "severity": "omission",
        "watchtower": "The record carries the statement's document-wide provisions on at most two commitments: the grandfathering rule on commitment 6, and the transition-finance allowance on commitments 4 and 5.",
        "bank_green": "The definition of financing excludes secondary-market activity and distressed-company financing; the statement applies only as far as third-party data allows, and subject to applicable law; existing oil and gas financing may remain in place until refinanced; and transition finance may reach restricted upstream groups. Each reaches more commitments than the record attaches it to.",
        "action": "Record each as a standing exception on every commitment it reaches."
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
        "project_finance_only": true,
        "new_business_only": false,
        "total": 2
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "It covers one kind of loan, and most new fields are paid for another way. A date fixed at 2021 also frees every older project for its whole life.",
      "actual_reading": "it will not arrange project finance for oil and gas projects approved after 2021, or for infrastructure mainly serving them",
      "gaps": [
        {
          "title": "Loans to the company, not the project",
          "phrase_refs": [
            "excludes-corporate"
          ],
          "text": "Barclays' “Project Finance” is a loan repaid from one project's own income. Its definition leaves out company-level asset financing. A producer can borrow as a company, or issue bonds, and spend that on a new field."
        },
        {
          "title": "Anything approved before 2022",
          "phrase_refs": [
            "fid-2021"
          ],
          "text": "“Expansion” means a project approved after 31 December 2021. A field approved earlier is never expansion here, however long it is drilled or however much it adds."
        },
        {
          "title": "Pipelines that serve more than one field",
          "phrase_refs": [
            "primarily"
          ],
          "text": "Infrastructure is covered only when it mainly serves new projects. The statement does not say how much counts as mainly. A pipeline that also serves older fields can get through."
        }
      ],
      "in_practice": "Project finance is one way to pay for an oil field. The lenders are repaid from what that one project earns, and the project's assets are their security. It suits smaller developers with a single field and little else to borrow against.\n\nTake a small developer with one new field, approved in 2023. It wants Barclays to arrange a project loan. This commitment applies, and Barclays will not arrange it.\n\nNow take a large producer developing the same kind of field. It does not need project finance. It can take a general loan to the company, issue a bond, or borrow against the reserves it already owns. None of those is project finance as Barclays defines it. The producer can spend all of them on the new field.\n\nThen there is the date. A field approved in 2021 is not expansion. It can be drilled and extended through the 2030s, and new project loans for it are not covered. Its later phases are not covered either, if they need no new approval.\n\nSo this commitment binds developers that depend on project loans for fields approved after 2021. Large producers, and older fields, carry on as before.",
      "gets_right": "The date is fixed and published. Anyone can check whether a project was approved after 2021. And this commitment covers the pipelines and plants built mainly for new fields, not only the fields themselves."
    }
  },
  "evidence": {
    "status": "financing_found",
    "teaser": "That is what Barclays put into gas pipelines, processing plants and LNG terminals serving expanding production, against a commitment written to stop it.",
    "headline_figure": {
      "display": "$4.2B",
      "combines": "13 2025 financings to gas gathering systems, pipelines and LNG export terminals across the US onshore",
      "complete": false
    },
    "deals": [
      {
        "id": "barclays-m6-midstream-2025",
        "company": "M6 Midstream LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 1102500000.0,
        "amount_display": "$1.1B",
        "instruments": [],
        "contradiction": "A gas gathering and processing system in the East Texas Haynesville shale. It takes gas from new wells and from wells drilled years ago. This commitment only reaches infrastructure primarily serving expansion, and mixed use is not that.",
        "phrase_refs": [
          "primarily"
        ],
        "source_url": null
      },
      {
        "id": "barclays-cp2-lng-holdings-2025",
        "company": "CP2 LNG Holdings LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 662343254.1426389,
        "amount_display": "$662.3M",
        "instruments": [],
        "contradiction": "An LNG export terminal under construction in Cameron Parish, Louisiana. It will chill gas from across the US onshore, new wells and old. A terminal that serves a whole market is not primarily serving expansion projects.",
        "phrase_refs": [
          "primarily"
        ],
        "source_url": null
      },
      {
        "id": "barclays-m6-etx-holdings-ii-midco-2025",
        "company": "M6 ETX Holdings II Midco LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 628125000.0,
        "amount_display": "$628.1M",
        "instruments": [],
        "contradiction": "The holding company above that East Texas system. The same mixed gas runs through the pipes, so the wording does not settle on it.",
        "phrase_refs": [
          "primarily"
        ],
        "source_url": null
      },
      {
        "id": "barclays-al-gcx-holdings-2025",
        "company": "AL GCX Holdings LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 366142857.142857,
        "amount_display": "$366.1M",
        "instruments": [],
        "contradiction": "A stake in the Gulf Coast Express pipeline, carrying Permian gas to the Texas coast. The line serves fields of every vintage, which puts it outside a test of what it primarily serves.",
        "phrase_refs": [
          "primarily"
        ],
        "source_url": null
      },
      {
        "id": "barclays-oryx-midstream-services-permian-basin-2025",
        "company": "Oryx Midstream Services Permian Basin LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 311419578.00000036,
        "amount_display": "$311.4M",
        "instruments": [],
        "contradiction": "A crude gathering system across the Permian basin. It connects wells drilled this year to wells drilled a decade ago, so the primary-use test never lands.",
        "phrase_refs": [
          "primarily"
        ],
        "source_url": null
      },
      {
        "id": "barclays-brazos-delaware-ii-2025",
        "company": "Brazos Delaware II LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 284887944.375,
        "amount_display": "$284.9M",
        "instruments": [],
        "contradiction": "A gas gathering and processing system in the Delaware basin of west Texas. Older and newer wells feed the same plants, which keeps it clear of this wording.",
        "phrase_refs": [
          "primarily"
        ],
        "source_url": null
      },
      {
        "id": "barclays-al-ngpl-holdings-2025",
        "company": "AL NGPL Holdings LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 185500000.0,
        "amount_display": "$185.5M",
        "instruments": [],
        "contradiction": "A stake in a long-established interstate gas pipeline system. It moves gas from new and old production alike, and this commitment reaches only what primarily serves expansion.",
        "phrase_refs": [
          "primarily"
        ],
        "source_url": null
      },
      {
        "id": "barclays-rio-grande-lng-train-5-2025",
        "company": "Rio Grande LNG Train 5 LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 143110978.93400002,
        "amount_display": "$143.1M",
        "instruments": [],
        "contradiction": "One liquefaction unit of an export terminal being built at Brownsville, Texas. The gas reaching it comes from the Permian basin at large, not from any single new field.",
        "phrase_refs": [
          "primarily"
        ],
        "source_url": null
      },
      {
        "id": "barclays-rio-grande-lng-phase-1-finco-2025",
        "company": "Rio Grande LNG Phase 1 FinCo LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 139172727.272727,
        "amount_display": "$139.2M",
        "instruments": [],
        "contradiction": "The company funding the first phase of that terminal. What it builds serves the basin's whole output, which this wording does not reach.",
        "phrase_refs": [
          "primarily"
        ],
        "source_url": null
      },
      {
        "id": "barclays-rio-grande-lng-train-4-2025",
        "company": "Rio Grande LNG Train 4 LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 134825921.98200002,
        "amount_display": "$134.8M",
        "instruments": [],
        "contradiction": "A second unit at the same Brownsville terminal. The same mixed supply feeds it, so the primary-use test is never met.",
        "phrase_refs": [
          "primarily"
        ],
        "source_url": null
      },
      {
        "id": "barclays-matterhorn-express-pipeline-2025",
        "company": "Matterhorn Express Pipeline LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 84375000.0,
        "amount_display": "$84.4M",
        "instruments": [],
        "contradiction": "A large pipeline built to carry Permian gas east to Katy, Texas. It serves the basin as a whole rather than any one expansion project.",
        "phrase_refs": [
          "primarily"
        ],
        "source_url": null
      },
      {
        "id": "barclays-venture-global-plaquemines-lng-2025",
        "company": "Venture Global Plaquemines LNG LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 71108577.8282642,
        "amount_display": "$71.1M",
        "instruments": [],
        "contradiction": "An LNG export terminal on the Mississippi River in Louisiana. It liquefies gas gathered from many fields, and a terminal serving all of them is not primarily serving expansion.",
        "phrase_refs": [
          "primarily"
        ],
        "source_url": null
      },
      {
        "id": "barclays-whitewater-matterhorn-holdings-2025",
        "company": "WhiteWater Matterhorn Holdings LLC",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 46119375.0,
        "amount_display": "$46.1M",
        "instruments": [],
        "contradiction": "The holding company above that pipeline. The same reasoning applies: a basin-wide line is not infrastructure primarily serving new fields.",
        "phrase_refs": [
          "primarily"
        ],
        "source_url": null
      }
    ],
    "what_it_funded": "gas pipelines, processing plants and LNG terminals serving expanding production"
  },
  "provenance": {
    "built": "2026-09-29",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 219, document 4122",
    "reading": "drafted"
  }
};
