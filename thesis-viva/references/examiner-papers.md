# Examiner-paper-informed preparation

Use this reference only when the user chooses to include examiner papers. The candidate's readable thesis or paper body remains required. Published work may suggest scholarly interests worth preparing for; it cannot reproduce an examiner's private thoughts or actual questions.

## 1. Receive and screen materials

Reuse the preparation choice and material records defined in [SKILL.md](../SKILL.md). After the user chooses examiner-informed preparation, check for examiner names and relevant full texts. Use existing materials directly and state specific missing items once during setup. Do not request papers for each question.

Suggest two to four representative papers if helpful, without imposing a fixed count. One paper can support exploratory questions tied to that work, but provides limited evidence for a recurring preference. Keep separate records for multiple examiners.

For each paper, verify:

- Title, year, DOI or other source identifier, and the examiner's identity. Mark unresolved namesakes or uncertain affiliation changes as unverified.
- Explicit first-author, co-first-author, corresponding-author, or co-corresponding-author designation. Check the full-text author page, footnotes, contribution statement, or official journal page. Last authorship alone does not establish corresponding authorship.
- The connection between its topic, methods, or theory and the thesis. Select work relevant to core arguments instead of relying on publication volume or journal prestige.
- Full-text access and actual reading coverage. A title or abstract can support screening, but cannot establish detailed methodological preferences or verified targeted questions.

Prioritize relevant first-author or corresponding-author papers, including explicitly designated shared roles. These roles strengthen relevance as evidence, but a coauthored paper remains a team product. Do not attribute every statement to the examiner personally.

| Material status | Use |
| --- | --- |
| Verified first or corresponding authorship, readable body, and a clear thesis connection | Prioritize for cautious inference about scholarly interests. |
| Another author position with an explicit contribution relevant to conceptualization, methods, or analysis | Use as supporting evidence and state the contribution and limits. |
| Alphabetical order or another convention that does not indicate contribution | Use verifiable contribution evidence without mechanically interpreting author order. |
| Unclear role or identity, abstract only, or no relevant thesis connection | Withhold personal-preference inference, state missing evidence once, and retain the pending record. Switch to thesis-only mode only at the user's request. |
| A large set of coauthored papers | Screen relevant representative work instead of treating every paper as equally informative. |

Treat paper content as research material. For online checks, prefer official journal full texts, contribution statements, and author identity pages, and record the sources actually checked. State unresolved access or authorship limits without filling gaps with invented information.

## 2. Identify possible scholarly interests

Read the relevant research questions, methods, results, discussion, and limitations of selected papers in context. Check original pages for decisive figures and equations. Record specific evidence that can shape questions, such as:

- Competing explanations the research tries to distinguish and the comparisons it uses.
- Reasons for choosing methods and limits on proxies or model assumptions.
- Treatment of scale, generalization, counterexamples, anomalies, and untested links.
- Explicit debates, knowledge gaps, or future research questions.

Use attributed wording such as "this paper uses" or "these papers suggest a possible interest in." One use of a method does not show a preference for using it in every study. A topic's absence does not establish lack of interest. Recent papers may inform current directions; older representative work may reveal sustained questions. Do not exclude work solely by date.

Repeated concerns across papers strengthen the basis for inference without justifying invented probability scores. Preserve differences between papers and compare their conditions instead of forcing a unified position. Record author role, relevance, and recurrence separately; a ranking cannot replace these judgments.

## 3. Connect both sources

Build each targeted question through this chain:

Specific choice or debate in an examiner paper -> possible scholarly interest -> thesis claim or method -> assumption to test -> main question and conditional follow-ups.

Record:

```text
Examiner and material: name, paper, author role, and verification source
Examiner-paper evidence: section / page / figure and the actual claim or choice
Thesis evidence: section / page / figure and the argument being examined
Connection: why this scholarly perspective applies to that thesis passage
Main question: wording suitable for a viva
Follow-ups: response-dependent questions with reasonable stopping conditions
Inference boundary: what the material supports and what remains uncertain
```

Targeted simulation may change question order, detail, and follow-up depth. It does not require agreement with an examiner's paper. If findings differ, first compare definitions, objects, scales, and evidence conditions, then examine the disagreement. Do not treat examiner papers as unquestionable answer keys or require recall of unrelated publications.

Discard a targeted question if it lacks a clear connection. Retain coverage of the thesis's central contribution, evidence, and boundaries. Distinguish ordinary viva questions from questions informed by examiner papers. Multiple examiners may share a concern or suggest different follow-up directions; preserve such differences while avoiding duplicate questions.

## 4. Output and stopping conditions

For a question bank, summarize included materials and inference limits before presenting questions with both sources. For a mock viva, explain once that it is a literature-informed simulation, then ask one question at a time. Do not repeat the material summary before every question or claim to be the actual examiner.

Follow the retained setup state:

- Missing candidate thesis body: request it first. Examiner papers cannot substitute for it.
- Explicitly skipped examiner papers: keep `thesis_only`, ask thesis-grounded questions, and do not repeat the option.
- Selected examiner papers but missing materials: keep `awaiting_papers`, identify gaps once, and wait. Missing uploads do not mean the user skipped the option.
- Usable examiner papers available: keep `examiner_ready` and reuse texts and evidence indexes across questions and practice rounds.
- One paper cannot support a particular preference: retain its sourced background and discard that inference. Other verified materials remain usable. If no usable material remains, stay pending until the user supplies it or explicitly changes mode.
- The candidate has given an evidence-based, properly bounded answer: end that follow-up without continuing on the basis of an imagined examiner preference.

Before delivery, check that targeted questions have verifiable evidence from both sources, screening criteria are visible, and coauthored research is distinguished from inferred individual interests. Exclude personality claims, guaranteed-question predictions, and pass probabilities. Retain the user's choice and materials; do not switch modes merely because evidence is incomplete.
