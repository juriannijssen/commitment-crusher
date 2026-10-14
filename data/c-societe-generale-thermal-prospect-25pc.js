/* Commitment data — generated from commitments/commitment-societe-generale-thermal-prospect-25pc.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "societe-generale-thermal-prospect-25pc",
    "bank": "Société Générale",
    "commitment_number": 5,
    "category": "thermal_coal",
    "effective_date": "2026-04-01",
    "title": "Société Générale's 25% Threshold for New Clients",
    "short_title": "25% Threshold for New Clients",
    "subject": "New Clients in Thermal Coal",
    "article_published": "2026-09-09",
    "intro": "Société Générale sets out this rule in its Thermal Coal Sector Policy, published in April 2026. It will not take on a new client that earns more than 25% of its revenue from thermal coal. The policy sets a different number for companies it already banks.",
    "naive_reading": "it will not take on new clients whose business depends on coal",
    "plain_language_note": "A number that applies only to newcomers, and a definition that decides what the number counts.",
    "sources_intro": "This rule comes from a single policy document. We quote two passages from it below: the rule, and the glossary entry that decides how the revenue is measured.",
    "sources_intro_closer": "lets_find_out",
    "sources": [
      {
        "id": "tcp2026",
        "document_title": "Société Générale Thermal Coal Sector Policy",
        "document_url": "https://www.societegenerale.com/sites/default/files/documents/CSR/thermal-coal-sector-policy.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=5",
        "watchtower_document_id": 28051,
        "watchtower_institution": "societe_generale",
        "synthesis_run": 306,
        "version_label": "April 2026",
        "published": "2026-04-01",
        "language": "en",
        "verbatim_confirmed": true,
        "text_status": "verbatim_on_file",
        "published_source": null,
        "published_confidence": null,
        "verbatim_check": {
          "document": "28051-societe-generale-thermal-coal.md",
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
        "source_id": "tcp2026",
        "title": "The promise",
        "intro": "This is where Société Générale sets out the rule.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "The Group will not provide new financial products and services to any… Prospect which has more than 25% of its revenue linked to the Thermal Coal Sector.",
        "plain_rendering": "Société Générale will not provide new financial products and services to any Prospect which has more than 25% of its revenue linked to the Thermal Coal Sector.",
        "phrases": [
          {
            "id": "prospect",
            "label": "Prospect",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              71,
              79
            ],
            "plain_range": [
              77,
              85
            ],
            "means": "This explains who this commitment applies to: a company that is not a client yet.",
            "lets_through": [
              "This wording lets through every existing client with a coal share between 25% and 50%. The same business, with the same share of coal, is turned away as a newcomer but kept as a client.",
              "It also lets through the bank's existing clients in general, because nothing in this commitment asks a current client to do anything."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          },
          {
            "id": "25pc",
            "label": "more than 25% of its revenue",
            "type": "narrowing_qualifier",
            "verbatim_range": [
              90,
              118
            ],
            "plain_range": [
              96,
              124
            ],
            "means": "This explains the threshold. More than 25% of the company's revenue has to be linked to thermal coal before the bank declines to take it on.",
            "lets_through": [
              "This wording lets through every diversified utility and trader below the line. A company can run a large coal fleet and stay under 25% if it also sells gas, renewables, and network services.",
              "It also lets through a company whose wider group earns a lot from coal. The wording measures the company's own revenue and says nothing about its parent or its group."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true
          }
        ],
        "watchtower_origin": null
      },
      {
        "index": 2,
        "role": "definition",
        "source_id": "tcp2026",
        "title": "The definition of “Revenue linked to the Thermal Coal Sector”",
        "intro": "Société Générale's policy defines the term in its glossary. The definition decides what counts toward the percentage for power companies.",
        "location": {
          "distance": "end_of_document",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "Revenue linked to the Thermal Coal Sector: For Companies of the power value chain, thermal coal revenue is primarily evaluated based on the revenue derived from coal-fueled power production.",
        "plain_rendering": "Revenue linked to the Thermal Coal Sector: For Companies of the power value chain, thermal coal revenue is primarily evaluated based on the revenue derived from coal-fueled power production.",
        "phrases": [
          {
            "id": "primarily-evaluated",
            "label": "primarily evaluated",
            "type": "undefined_term",
            "verbatim_range": [
              107,
              126
            ],
            "plain_range": [
              107,
              126
            ],
            "means": "This definition of “Revenue linked to the Thermal Coal Sector” is evaluated primarily on revenue from coal-fueled generation. The EU's rules for climate-aligned investment indexes also measure power companies on their generation. “Primarily” is not a rule, so the bank decides what else counts, and in what proportion. On the narrow reading, the threshold blocks fewer clients.",
            "lets_through": [
              "This wording lets through whichever measurement the bank prefers for a company near the line. “Primarily” leaves the rest of the calculation open, and this wording decides whether a company is above or below the line.",
              "It also lets through the rest of the coal value chain for power companies. A utility's revenue from coal transport, trading, and storage is not what this definition points to."
            ],
            "defined_in_clause": null,
            "bank_definition": null,
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "ordinary_source": [
              {
                "body": "European Union",
                "title": "EU Delegated Regulation 2020/1818, Article 12",
                "url": "https://eur-lex.europa.eu/eli/reg_del/2020/1818/oj"
              }
            ]
          }
        ],
        "watchtower_origin": null,
        "ordinary_direction": "narrower"
      }
    ],
    "glossary_refs": [
      "thermal-coal",
      "revenue-threshold",
      "client-level",
      "prospect",
      "capital-markets"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 306,
      "document_id": 28051,
      "institution": "societe_generale",
      "commitment_index": 5,
      "commitment_id": "14a30d45-ebcc-5e3e-a7d7-e58d87e8fa69",
      "url": "https://watchtower.bank.green/institution/societe_generale/document/28051/synthesis?run=306&commitment=5",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-28",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        11501,
        11975
      ],
      "summary_text": "Societe Generale will not provide new financial products and services to prospective clients deriving more than 25% of their revenue from the thermal coal sector.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": null,
          "activity_scope": "new_and_existing"
        },
        "geographic": {
          "global_scope": true
        },
        "counterparty": {
          "level": "counterparty",
          "relationship_status": "new",
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
          "value": 25,
          "definition": "revenue linked to the Thermal Coal Sector"
        }
      ],
      "commitment_type": "restriction",
      "effective_date": "immediate",
      "exceptions": [
        {
          "condition": "Financing products and services dedicated to the energy transition remain permitted",
          "carve_out_kind": "bounded_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": false,
          "standing": false,
          "where": "Section 6.1, Client criteria — Energy transition exception"
        },
        {
          "condition": "Deviations may be granted on an exceptional basis by the Societe Generale group oversight committee chaired by senior management",
          "carve_out_kind": "discretionary_carve_out",
          "carve_out_kind_source": "watchtower",
          "governance_process": true,
          "standing": true,
          "where": "Section 5.2, Implementation process"
        }
      ],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 9 fields corrected]\nCHANGES:\n- All commitments: Added missing `certainty` object with `certainty_rating: \"5\"` to all exceptions to comply with schema requirements.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "Deviations may be granted on an exceptional basis by the Societe Generale group oversight committee chaired by senior management",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "watchtower",
        "governance_process": true,
        "standing": true,
        "where": "Section 5.2, Implementation process"
      }
    ],
    "general_clauses_page": null,
    "disagreements": [
      {
        "field": "weaknesses",
        "severity": "omission",
        "watchtower": "No weakness recorded — as on every commitment in this document.",
        "bank_green": "Watchtower states no weakness anywhere in the Thermal Coal synthesis, on any of the nine commitments. The phrases highlighted on this page are Bank.Green's reading and are labelled as such.",
        "action": "Populate the weaknesses field for this document. Our highlighted phrases are the proposal."
      },
      {
        "field": "loopholes.exceptions",
        "severity": "inconsistency",
        "watchtower": "The section 7 exception for pre-existing business commitments and opportunities at an advanced stage of negotiation is attached to two of the nine commitments in this run — commitments 1 and 2. It is absent from commitments 3 to 9.",
        "bank_green": "Section 7 applies that exception to the sector policy as a whole, so it should sit on all nine commitments. We read the seven omissions as an extraction inconsistency rather than a feature of the policy.",
        "action": "Attach the section 7 exception to commitments 3 to 9. Note the consequence for the derived rating: spec v3.2 defines a standing carve-out as one appearing on EVERY commitment in a document, so as the record stands the section 7 exception counts as commitment-specific on commitments 1 and 2 and adds a point to each. Correcting the record would make it standing and move both from `hollowed` to `holds`. No other rating in this document would change."
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
        "project_finance_only": false,
        "new_business_only": true,
        "total": 2
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "A newcomer that depends on coal is turned away. But a mixed utility can easily stay under the line, and every company already banked is outside it.",
      "actual_reading": "it will not take on a new client that earns more than 25% of its own revenue from thermal coal, with coal power revenue as the main measure for power companies",
      "gaps": [
        {
          "title": "Companies it already banks",
          "text": "This commitment is about companies that are not clients yet. A company Société Générale already banks is outside it, whatever share of its revenue comes from coal.",
          "phrase_refs": [
            "prospect"
          ]
        },
        {
          "title": "Utilities that sell more than coal",
          "text": "The line is a share of revenue. A utility can run a large coal fleet and stay under 25% if it also sells gas, renewable power, and grid services.",
          "phrase_refs": [
            "25pc"
          ]
        },
        {
          "title": "What counts as coal revenue",
          "text": "For power companies, the bank looks “primarily” at revenue from coal-fired power. What else counts, and how much, is left to the bank, and for a company near the line, that decides the answer.",
          "phrase_refs": [
            "primarily-evaluated"
          ]
        }
      ],
      "in_practice": "Thermal coal is the coal burned to make electricity. This commitment asks one question of a company that wants to become a client: does more than 25% of its revenue come from that coal?\n\nTake a company that only mines thermal coal, or a power producer that only burns it. Its coal share is far above 25%, so if it is not a client yet, Société Générale will not take it on. That covers every product and service, not only loans.\n\nNow take a large utility that owns many coal plants but also sells gas, renewable power, grid services, and energy to homes. Coal can be a big business for it and still be well under 25% of its revenue, so this commitment lets it in.\n\nFor power companies, the bank measures coal revenue “primarily” on what coal-fired power earns. Revenue from moving, trading, or storing coal is not what that word points to, and anything else the bank adds is its own choice.\n\nThen there is timing, because the test is for newcomers only. A coal-heavy company that became a client before this commitment is not tested under it. This commitment changes who can join, not who stays.",
      "gets_right": "For a company that is not yet a client and earns more than 25% of its revenue from thermal coal, the answer is no. It covers every product and service, not only loans for a named project."
    }
  },
  "evidence": {
    "status": "not_checked",
    "teaser": "Société Générale will not take on new clients earning more than 25% of revenue from thermal coal. We have not reviewed its financing against this commitment yet.",
    "headline_figure": {
      "display": "Not yet checked",
      "combines": null,
      "complete": false
    },
    "deals": []
  },
  "provenance": {
    "built": "2026-10-02",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 306, document 28051",
    "reading": "drafted"
  }
};
