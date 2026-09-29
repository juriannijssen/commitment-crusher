/* Commitment data — generated from commitments/commitment-barclays-coal-mine-infrastructure.md
   by prototype/build/render_commitments.py. Do not edit by hand.
   Assigned to a global rather than fetched, so the page still opens
   from file:// without a server. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "barclays-coal-mine-infrastructure",
    "bank": "Barclays",
    "commitment_number": 18,
    "category": "coal",
    "effective_date": null,
    "title": "Barclays' Commitment on Coal Mine Infrastructure",
    "short_title": "Commitment on Coal Mine Infrastructure",
    "article_published": null,
    "intro": "Barclays sets out this restriction in the Thermal Coal Mining section of its Climate Change Statement of December 2025. It commits the bank not to finance infrastructure built for thermal coal mines anywhere in the world.",
    "naive_reading": "it will not finance the railways, ports and roads that serve coal mines",
    "plain_language_note": "The rule is plain and the plain version changes almost nothing.",
    "sources_intro": "One policy document states this commitment, and one passage from it is quoted here.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "ccs2025",
        "document_title": "Barclays Climate Change Statement",
        "document_url": "https://home.barclays/content/dam/home-barclays/documents/citizenship/our-reporting-and-policy-positions/Climate-Change-Statement.pdf",
        "synthesis_url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=18",
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
        "source_id": "ccs2025",
        "title": "The promise",
        "intro": "This is where Barclays makes the commitment.",
        "location": {
          "distance": "same_passage",
          "signposting": "explicit",
          "signposting_note": null
        },
        "verbatim": "We will not provide project finance for development of infrastructure projects primarily to be used for thermal coal mines anywhere in the world.",
        "plain_rendering": "Barclays will not provide project finance for developing infrastructure projects primarily to be used for thermal coal mines anywhere in the world.",
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
            "id": "primarily",
            "label": "primarily",
            "type": "undefined_term",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              79,
              88
            ],
            "plain_range": [
              81,
              90
            ],
            "means": "The word “primarily” means infrastructure is caught only when most of its use serves coal mines, and the statement never says how much counts as most.",
            "lets_through": [
              "This wording lets through a rail line or port that carries coal alongside other cargo, however much coal it carries."
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
        "intro": "How Barclays' policy defines it in its table of definitions.",
        "location": {
          "distance": "end_of_document",
          "signposting": "weak",
          "signposting_note": "“project finance” is set in italics in the wording above, and nothing else points to the definitions table."
        },
        "verbatim": "Project Finance — Refers to transactions that are a form of loan financing originated by Barclays (either as an agent or as part of a syndicate) where the repayment depends primarily on the project’s cash flow and on the collateral value of the project’s assets. Project Finance excludes corporate level asset financing.",
        "plain_rendering": "Project finance means loan financing arranged by Barclays where the repayment depends primarily on the project’s cash flow and on the value of the project’s assets. Project finance excludes corporate level asset financing.",
        "phrases": [
          {
            "id": "repayment-depends-on-project",
            "label": "the repayment depends primarily on the project’s cash flow",
            "type": "narrowing_qualifier",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              151,
              209
            ],
            "plain_range": [
              64,
              122
            ],
            "means": "Only a loan repaid out of the project itself counts as project finance.",
            "lets_through": [
              "A loan the parent company guarantees, which is repaid whether the project earns anything or not."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "excludes-corporate-level",
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
              181,
              221
            ],
            "means": "This definition of “project finance” is narrower than what it usually means. In the market, project finance is financing raised for a named project and repaid from what that project earns. Barclays limits it to loans it arranged itself, and writes company-level asset financing out by name. Lending to the company that owns the project is not project finance, so this commitment does not reach it — and it blocks far less than it appears to, because company-level lending is the ordinary way these projects are paid for.",
            "lets_through": [
              "A loan to the company building the rail line or port, repaid out of its other earnings.",
              "Any financing arranged at the parent rather than against the project itself.",
              "This wording lets through general corporate financing to the owners of rail lines, ports and terminals that serve coal mines."
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
      "project-finance"
    ],
    "glossary_inline": [],
    "watchtower": {
      "synthesis_backed": true,
      "run": 219,
      "document_id": 4122,
      "institution": "barclays",
      "commitment_index": 18,
      "commitment_id": "65da7bae-9ac8-51e6-886b-f5da80c1b7ef",
      "url": "https://watchtower.bank.green/institution/barclays/document/4122/synthesis?run=219&commitment=18",
      "agent_name": "gemini-flash-latest",
      "schema": "Policy synthesis (id 10)",
      "synthesis_created": "2026-08-27",
      "synthesis_updated": "2026-08-28",
      "quotation_matched": true,
      "quotation_matched_note": null,
      "quotation_char_range": [
        10023,
        10169
      ],
      "summary_text": "Barclays will not provide project finance for infrastructure projects primarily dedicated to thermal coal mines globally.",
      "scope": {
        "industry": {
          "themes": "coal",
          "coal_types": "thermal",
          "oil_gas_types": null,
          "value_chain": "midstream",
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
      "exceptions": [],
      "weaknesses": null,
      "reviewer_notes": "STATS: [0 added, 0 removed, 0 split, 1 fields corrected]\nCHANGES:\n- Barclays will not finance oil sands exploration and production companies (majority owners or operators deriving ≥10% revenue from oil sands).: Removed exception for <10% revenue as it is already captured in the threshold field.",
      "not_in_synthesis_note": null
    },
    "general_carve_outs": [
      {
        "condition": "A CASE-BY-CASE EXCEPTION FOR TRANSITION FINANCE · THERMAL COAL MINING — “We will consider exceptions to our thermal coal mining policy on a case-by-case basis for any transition finance provided by Barclays to clients reducing their thermal coal portfolio including retrofitting of existing facilities.”",
        "carve_out_kind": "discretionary_carve_out",
        "carve_out_kind_source": "bank_green",
        "governance_process": true,
        "standing": true,
        "recorded_by_watchtower": false,
        "where": "THERMAL COAL MINING · EXCEPTION"
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
        "commitment_specific_carve_outs": 0,
        "project_finance_only": true,
        "new_business_only": false,
        "total": 1
      },
      "verdict_needs_review": true,
      "verdict_review_reason": "Drafted by Bank.Green in the form in parts (spec §3.61). A person has to read it before it publishes: reviewed_by and reviewed_at are unset.",
      "reviewed_by": null,
      "reviewed_at": null,
      "strength_reason": "It stops one kind of loan for rail lines and ports that serve mostly coal mines. Shared lines, and loans to the companies that own them, get through.",
      "actual_reading": "it will not arrange project finance, repaid from the project's own income, for rail lines, ports or roads used mostly by coal mines",
      "gaps": [
        {
          "title": "Lines and ports shared with other cargo",
          "text": "Infrastructure is caught only if it is “primarily” for coal mines, and the statement gives no share. A line carrying coal alongside other cargo can fall outside, however much coal it carries.",
          "phrase_refs": [
            "primarily"
          ]
        },
        {
          "title": "Loans to the owner, not the project",
          "text": "“Project finance” here is a loan repaid only from the project's own income. A loan to the company that owns the line, repaid from its other earnings, is not covered.",
          "phrase_refs": [
            "excludes-corporate-level",
            "repayment-depends-on-project"
          ]
        }
      ],
      "in_practice": "Project finance is a particular kind of loan. It pays for one project and is repaid only from what that project earns. Barclays covers this kind of loan alone, and writes company-level asset financing out by name.\n\nTake a company building a rail line from a coal field to a port. If it asks Barclays for project finance, repaid from the line's own freight income, the rule applies. If it asks for a loan to the company as a whole, repaid from its other earnings, the rule does not. The same line gets built. A loan the parent company guarantees falls outside too, because repayment no longer depends on the line.\n\nThen there is the word “primarily”. The infrastructure is caught only if coal mines are its main users. The statement gives no share. A line that carries coal alongside grain or containers can be judged as not primarily for coal, however much coal it carries.\n\nSo what this commitment stops is a project loan for a line or port that serves mostly coal. What it leaves open is shared infrastructure, and every loan to the companies that own it.",
      "gets_right": "It looks past the mine to the rail lines and ports a mine needs to sell its coal. And it applies anywhere in the world."
    }
  },
  "evidence": {
    "status": "financing_found",
    "teaser": "That is what Barclays put into the railways that haul coal, against a commitment written to stop it.",
    "headline_figure": {
      "display": "$86.9M",
      "combines": "4 2025 financings to railways hauling coal in North America and Australia",
      "complete": false
    },
    "deals": [
      {
        "id": "barclays-canadian-pacific-railway-2025",
        "company": "Canadian Pacific Railway Co",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 33645312.2457228,
        "amount_display": "$33.6M",
        "instruments": [],
        "contradiction": "A North American railway that hauls coal from mines to ports. It carries grain, potash, containers and cars on the same tracks. This commitment only reaches infrastructure primarily serving coal mines, and a mixed freight railway is not that.",
        "phrase_refs": [
          "primarily"
        ],
        "source_url": null
      },
      {
        "id": "barclays-aurizon-holdings-2025",
        "company": "Aurizon Holdings Ltd",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 25827875.9685,
        "amount_display": "$25.8M",
        "instruments": [],
        "contradiction": "Australia's largest rail freight operator, built around hauling coal from Queensland mines to port. It also carries iron ore and general freight, and the wording gives no share at which coal becomes the primary use.",
        "phrase_refs": [
          "primarily"
        ],
        "source_url": null
      },
      {
        "id": "barclays-csx-2025",
        "company": "CSX Corp",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 20155200.0,
        "amount_display": "$20.2M",
        "instruments": [],
        "contradiction": "An eastern US railway carrying coal out of Appalachia to power stations and export terminals. Coal is one commodity among many on its network, so the wording never settles on it.",
        "phrase_refs": [
          "primarily"
        ],
        "source_url": null
      },
      {
        "id": "barclays-union-pacific-2025",
        "company": "Union Pacific Corp",
        "kind": "loophole",
        "year": 2025,
        "amount_usd": 7300000.0,
        "amount_display": "$7.3M",
        "instruments": [],
        "contradiction": "A western US railway hauling Powder River Basin coal. Its freight is mostly everything else, which puts the network outside this commitment.",
        "phrase_refs": [
          "primarily"
        ],
        "source_url": null
      }
    ],
    "what_it_funded": "the railways that haul coal"
  },
  "provenance": {
    "built": "2026-09-29",
    "spec": "Commitment Analysis Spec v3.13",
    "source": "Watchtower synthesis run 219, document 4122",
    "reading": "drafted"
  }
};
