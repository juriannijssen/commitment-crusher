/* General-clauses article — generated from commitments/general-clauses-macquarie.md
   by prototype/build/render_commitments.py. Do not edit by hand. */
window.WATCHTOWER_CASE = {
  "schema_version": "3.13",
  "commitment": {
    "commitment_id": "macquarie-general-clauses",
    "page_kind": "general_clauses",
    "bank": "Macquarie",
    "commitment_number": null,
    "category": "general",
    "effective_date": null,
    "title": "The clauses that apply to every Macquarie commitment",
    "short_title": "The clauses that apply to every commitment",
    "article_published": null,
    "intro": "Macquarie's report sets out its coal position as a list of points. The last point is not a restriction. It says what Macquarie can still do for coal companies, and it reaches every coal commitment in the list.",
    "naive_reading": null,
    "plain_language_note": null,
    "sources_intro": "One report states it, as the last point in its list on coal.",
    "sources_intro_closer": "lets_take_a_look",
    "sources": [
      {
        "id": "mq2026",
        "document_title": "Macquarie Group Sustainability Report",
        "document_url": null,
        "synthesis_url": "https://watchtower.bank.green/institution/macquaire_bank/document/34887/synthesis?run=204",
        "watchtower_document_id": 34887,
        "watchtower_institution": "macquaire_bank",
        "synthesis_run": 204,
        "version_label": "Sustainability Report 2026 (Group) — see date note",
        "published": "2026-03-31",
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
        "role": "exception",
        "source_id": "mq2026",
        "title": "The transition allowance",
        "intro": "The last point in the report's list on coal. It says what Macquarie can still finance for coal companies, whatever the rest of the list says.",
        "location": {
          "distance": "elsewhere_in_document",
          "signposting": "none",
          "signposting_note": "The last point in the report's list on coal"
        },
        "verbatim": "Macquarie maintains the ability to work with coal companies to finance projects that will significantly reduce their carbon emissions in line with science-based scenarios or are for the purpose of diversifying away from the coal sector in line with a credible transition plan.",
        "plain_rendering": "Macquarie can still work with coal companies to finance projects that will significantly reduce their carbon emissions in line with science-based scenarios, or that help them move away from coal in line with a credible transition plan.",
        "phrases": [
          {
            "id": "significant-reduction",
            "label": "significantly reduce their carbon emissions in line with science-based scenarios",
            "type": "escape_hatch",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              90,
              170
            ],
            "plain_range": [
              75,
              155
            ],
            "means": "This lets a coal company be financed for a project that cuts its emissions. The report does not say how much of a cut counts as significant, which scenarios apply, or who checks.",
            "lets_through": [
              "This wording lets through financing for a coal company's project that Macquarie judges will cut its emissions, such as efficiency work at a coal plant that keeps it running longer."
            ],
            "defined_in_clause": null,
            "bank_definition": null
          },
          {
            "id": "credible-plan",
            "label": "a credible transition plan",
            "type": "escape_hatch",
            "source": "bank_green",
            "watchtower_ref": null,
            "not_in_synthesis": true,
            "verbatim_range": [
              249,
              275
            ],
            "plain_range": [
              208,
              234
            ],
            "means": "This lets a coal company be financed to move away from coal, if its plan is credible. The report does not say what makes a plan credible, or who decides.",
            "lets_through": [
              "This wording lets through financing to a coal company whose transition plan Macquarie finds credible, however long it keeps its coal business running."
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
      "strength_reason": "Every coal restriction in Macquarie's report has the same way out: a project Macquarie judges to be transition finance.",
      "naive_reading": "its coal restrictions hold for every coal company",
      "actual_reading": "its coal restrictions hold, except for any coal company project that Macquarie judges will cut its emissions, or help it move away from coal under a plan Macquarie finds credible",
      "gaps": [
        {
          "title": "Projects Macquarie says will cut emissions",
          "phrase_refs": [
            "significant-reduction"
          ],
          "text": "Macquarie can finance a coal company's project if it will significantly cut emissions in line with science-based scenarios. The report does not say how big a cut counts, or which scenarios."
        },
        {
          "title": "Plans Macquarie finds credible",
          "phrase_refs": [
            "credible-plan"
          ],
          "text": "Macquarie can also finance a coal company moving away from coal under a credible transition plan. The report does not say what makes a plan credible, or who decides."
        }
      ],
      "in_practice": "Macquarie sets out its coal position as a list of points. The last point is not a restriction. It says what Macquarie can still do for coal companies, and it reaches every other point on the list.\n\nTake a company that runs coal power stations. A Macquarie restriction would normally keep it out. But the company asks for financing for efficiency work at one of its plants. If Macquarie judges that the work will significantly cut the company's emissions, the financing can go ahead. The plant keeps burning coal.\n\nNow take a coal miner with a plan to move into other minerals over the next twenty years. If Macquarie finds that plan credible, it can finance projects under it. The miner keeps mining coal while the plan runs.\n\nBoth routes turn on Macquarie's own judgement. The report does not say how much of a cut is significant, which scenarios it is measured against, or what makes a plan credible. It does not say who decides, or whether the decisions are published.\n\nSo every coal restriction in the report can be set aside for a project Macquarie calls transition finance."
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
    "built": "2026-09-29",
    "spec": "3.13",
    "source": "editorial/general-clauses-34887.json"
  }
};
