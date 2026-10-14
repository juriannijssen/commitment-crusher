/* Commitment data — generated from commitments/commitment-barclays-unconventional-production-20pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "barclays-unconventional-production-20pc",
    "bank": "Barclays",
    "commitment_number": 16,
    "category": "oil_gas_expansion",
    "effective_date": null,
    "title": "Barclays' 20% Threshold on Unconventional Oil & Gas",
    "short_title": "20% Threshold on Unconventional Oil & Gas",
    "subject": "Unconventional Oil & Gas Producers",
    "article_published": null,
    "intro": "Barclays sets out this restriction at entity level in the Unconventional Oil & Gas section of its Climate Change Statement of December 2025. It commits the bank not to finance energy groups whose production relies heavily on unconventional oil and gas.",
    "naive_reading": "it will not finance companies that rely on unconventional oil and gas",
    "plain_language_note": "The rule is plain, and the Arctic definition it depends on comes from the table at the end of the statement.",
    "sources_intro": "This commitment comes from a single policy document, and it takes two passages from it to see what it covers.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=16",
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
        "source_id": "ccs2025",
        "title": "The promise",
        "intro": "This client rule combines four kinds of unconventional production into one test.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not provide financing to Energy Groups whose aggregate share of production in Oil Sands, Extra Heavy Oil, Hydraulic Fracturing in the UK/EU, and Arctic Circle oil & gas exceeds 20% of their total oil & gas production.",
        "plain_rendering": "Barclays will not provide financing to Energy Groups whose combined production from Oil Sands, Extra Heavy Oil, Hydraulic Fracturing in the UK/EU and Arctic Circle oil & gas exceeds 20% of their total oil & gas production.",
        "phrases": [
          {
            "id": "see-energy-group",
            "label": "Energy Groups",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              33,
              46
            ],
            "plain_range": [
              39,
              52
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 2,
            "bank_definition": null
          },
          {
            "id": "see-oil-sands",
            "label": "Oil Sands",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              86,
              95
            ],
            "plain_range": [
              84,
              93
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": null,
            "bank_definition": null,
            "plain_gloss": "Oil sands are deposits of sand and clay soaked with bitumen, an oil so thick it will not flow at room temperature. It has to be dug out or heated underground before it can be moved."
          },
          {
            "id": "extra-heavy-oil",
            "label": "Extra Heavy Oil",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              97,
              112
            ],
            "plain_range": [
              95,
              110
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 3,
            "bank_definition": null
          },
          {
            "id": "fracking-uk-eu",
            "label": "Hydraulic Fracturing in the UK/EU",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              114,
              147
            ],
            "plain_range": [
              112,
              145
            ],
            "means": "The words “Hydraulic Fracturing in the UK/EU” mean that only fracking in the UK and the EU counts toward the 20%.",
            "lets_through": [
              "This wording lets through shale producers in North America and Argentina, because their fracking does not count, however much of their production it is."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "plain_gloss": "Fracking is pumping liquid into rock at high pressure to crack it open, so the oil or gas held inside can flow out."
          },
          {
            "id": "see-arctic-circle",
            "label": "Arctic Circle",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              153,
              166
            ],
            "plain_range": [
              150,
              163
            ],
            "means": null,
            "lets_through": [],
            "defined_in_clause": 4,
            "bank_definition": null
          },
          {
            "id": "exceeds-20pc",
            "label": "exceeds 20%",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              177,
              188
            ],
            "plain_range": [
              174,
              185
            ],
            "means": "This explains the threshold: the four kinds of production combined, as a share of the group's total oil and gas production.",
            "lets_through": [
              "This wording lets through groups at or below 20%, however large their unconventional production in absolute terms."
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
        "title": "The definition of “Energy Groups”",
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Energy Group” is set in italics in the wording above, and nothing else points to the definitions table."
        },
        "verbatim": "Energy Group(s) — Groups that have over 20% revenue from upstream oil & gas activities (i.e. exploration, development and production) and/or Groups that are considered to be supermajor or major integrated oil & gas companies.",
        "plain_rendering": "Energy Groups are groups that have over 20% revenue from upstream oil and gas activities, and groups considered to be supermajor or major integrated oil and gas companies.",
        "phrases": [
          {
            "id": "over-20pc-revenue",
            "label": "over 20% revenue",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              35,
              51
            ],
            "plain_range": [
              35,
              51
            ],
            "means": "This definition of “Energy Groups” is narrower than what it usually means. No standard-setting body defines “energy group.” In the industry, it generally means any company whose main business is energy. Barclays counts only groups that earn over 20% of their revenue from upstream oil and gas, plus the named category of majors. A large utility, a trading house, or a diversified miner with an oil arm is not an Energy Group here. So the restriction blocks fewer of the companies behind these projects than the words suggest.",
            "lets_through": [
              "A group at 19%, which can still be a large producer if the group itself is large.",
              "A diversified company whose oil and gas arm is small beside its other businesses."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "supermajor-or-major-integrated",
            "label": "considered to be supermajor or major integrated",
            "type": "unverifiable_metric",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              157,
              204
            ],
            "plain_range": [
              101,
              148
            ],
            "means": "The second test names no number and no list, so Barclays decides which companies count as major.",
            "lets_through": [
              "A large oil and gas producer the bank does not consider a supermajor or a major integrated company."
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
        "title": "The definition of “Extra Heavy Oil”",
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Extra Heavy Oil” is set in italics in the wording above, and nothing else points to the definitions table."
        },
        "verbatim": "Extra Heavy Oil — Refers to Crude Oil with an API gravity of less than 15°.",
        "plain_rendering": "Extra heavy oil means crude oil with an API gravity of less than 15°.",
        "phrases": [
          {
            "id": "api-gravity-under-15",
            "label": "an API gravity of less than 15°",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              43,
              74
            ],
            "plain_range": [
              37,
              68
            ],
            "means": "This definition of “Extra Heavy Oil” is broader than what it usually means. All of it is crude oil. API gravity is a scale of how dense that crude is, and the lower the number, the thicker and harder to move it is. Extra heavy oil is the densest slice of that range, and the International Energy Agency (IEA) puts the line at 10 degrees. Barclays draws it at 15, so a wider slice of crude counts as extra heavy here than the term usually covers. This definition blocks more projects than the ordinary meaning would, not fewer.",
            "lets_through": [
              "This wording lets through crude at 15 degrees or just above. That crude is nearly as heavy, and nearly as hard on the climate to get out."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "ordinary_source": [
              {
                "body": "International Energy Agency",
                "title": "IEA Glossary",
                "term": "Extra-heavy oil",
                "url": "https://www.iea.org/glossary#extra-heavy-oil"
              }
            ]
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "broader"
      },
      {
        "index": 4,
        "role": "definition",
        "source_id": "ccs2025",
        "title": "The definition of “the Arctic Circle”",
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“Arctic Circle” is set in italics in the rule, and nothing else points to its definition."
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
            "means": "This definition of “the Arctic Circle” is narrower than what it usually means. Where the Arctic starts is a choice. In the strictest sense, it is everything north of the Arctic Circle. The Arctic Council's monitoring program uses an area that reaches much farther south. Barclays takes the line of latitude, plus two named areas in Alaska. Read as a limit, it covers the area within the Arctic Circle that is subject to sea ice. The comma before “which” leaves open whether those words limit the area or only describe it. Taking the latitude rather than a wider boundary puts less of the Arctic inside the restriction, so it blocks less.",
            "lets_through": [
              "Read as a limit, this wording lets through production from Arctic land outside those areas, which does not count toward the 20%."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "ordinary_source": [
              {
                "body": "National Oceanic and Atmospheric Administration",
                "title": "NOAA Arctic Zone FAQ",
                "term": "Where is the Arctic?",
                "url": "https://www.pmel.noaa.gov/arctic-zone/faq.html#1"
              },
              {
                "body": "Arctic Monitoring and Assessment Programme",
                "title": "AMAP, Geographical coverage",
                "url": "https://www.amap.no/about/geographical-coverage"
              }
            ]
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "narrower"
      }
    ],
    "glossary_refs": [
      "oil-sands",
      "extra-heavy-oil",
      "shale",
      "arctic",
      "unconventional"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 16,
      "commitment_id": "38cf2073-d67c-513c-858f-8d9f9987f76d",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=16",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        9566,
        9803
      ],
      "summary_text": "Barclays will not finance Energy Groups where unconventional oil & gas (Oil Sands, Extra Heavy Oil, UK/EU Fracking, Arctic) exceeds 20% of total production.",
      "scope": {
        "industry": {
          "themes": "oil_gas",
          "coal_types": null,
          "oil_gas_types": [
            "oil_sands",
            "arctic",
            "shale"
          ],
          "value_chain": "upstream",
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
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
          "metric": "production_share",
          "inequality": ">",
          "value": 20,
          "definition": "aggregate share of production in Oil Sands, Extra Heavy Oil, Hydraulic Fracturing in UK/EU, and Arctic Circle oil & gas as % of total oil & gas production"
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
      "title": "The clauses that apply to every Barclays commitment",
      "selected_for_publication": true
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
      "strength_reason": "Fracking counts only in the UK and the EU, so the largest source of unconventional oil and gas adds nothing to the 20%. A shale producer passes with none of its fracking counted.",
      "actual_reading": "it will not finance energy groups whose oil sands, extra heavy oil, Arctic oil and gas, and UK or EU fracking together make up over 20% of their oil and gas production",
      "gaps": [
        {
          "title": "Fracking outside the UK and EU",
          "phrase_refs": [
            "fracking-uk-eu"
          ],
          "text": "Fracking only counts in the UK and the EU. So shale in North America and Argentina adds nothing to the 20%, however much of a group's production it is."
        },
        {
          "title": "A share, not an amount",
          "phrase_refs": [
            "exceeds-20pc"
          ],
          "text": "The line is a share of the group's production. So a very large producer can pump a lot of oil sands or Arctic oil and stay at 20% or below."
        },
        {
          "title": "Only groups Barclays counts as “Energy Groups”",
          "phrase_refs": [
            "over-20pc-revenue",
            "supermajor-or-major-integrated"
          ],
          "text": "Only groups with over 20% of their revenue from producing oil and gas, or that Barclays considers majors, count. A diversified group with an oil arm is outside this commitment."
        }
      ],
      "in_practice": "Unconventional oil and gas is the kind that is harder and dirtier to get out. This commitment adds up four kinds: oil sands, extra heavy oil, Arctic oil and gas, and fracking in the UK and EU. If together they pass 20% of a group's production, Barclays will not finance it.\n\nSay a shale producer in Texas gets nearly all its oil from fracking. Because fracking only counts in the UK and EU, its share is zero, and Barclays can finance it in any way it likes.\n\nFracking in North America and Argentina is the largest source of unconventional oil and gas in the world. Leaving it out means the test misses the producers it sounds most aimed at.\n\nA large oil company with a big oil sands business passes too. Its oil sands output is very large, but its conventional fields are bigger still, so the oil sands are only 15% of its production.\n\nThe test does catch a group that mainly produces oil sands, extra heavy oil, or Arctic oil and gas. Barclays will not finance those groups in any form.\n\nSo this commitment binds producers of the hardest sources to grow. It does not cover the source that has grown most."
    },
    "featured": {
      "rank": 2,
      "kind": "a threshold built from definitions",
      "because": "Four kinds of unconventional oil and gas, three definitions, one 20% test — and $1.6B of financing found."
    }
  },
  "evidence": {
    "status": "financing_found",
    "teaser": "That is how much Barclays put into one of the largest shale producers in America, despite a commitment that seems to rule out exactly this. And that is only what we have found so far.",
    "headline_figure": {
      "display": "$1.6B",
      "combines": "1 2025 financing to a major with large Permian shale production",
      "complete": false
    },
    "deals": [
      {
        "id": "barclays-chevron-usa-2025",
        "company": "Chevron USA Inc",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 1643176858.45993,
        "amount_display": "$1.6B",
        "instruments": [],
        "contradiction": "The US arm of an oil major and one of the largest producers in the Permian basin. Shale is a substantial part of what it pumps. The threshold counts fracking only in the UK and the EU, so American shale adds nothing to the 20%.",
        "phrase_refs": [
          "fracking-uk-eu"
        ],
        "source_url": null
      }
    ],
    "what_it_funded": "one of the largest shale producers in America"
  },
  "provenance": {
    "built": "2026-10-02",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 219, document 4122",
    "reading": "drafted"
  }
};
