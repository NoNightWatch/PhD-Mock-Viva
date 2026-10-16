# Transferable examiner questioning logic

Use these routes to generate questions from a document's actual arguments. Select relevant routes and supply evidence from the current document. The routes are not a checklist to impose on every study. Cross-disciplinary examples below are hypothetical and describe no particular study.

## Logic index

| Route | Core operation |
| --- | --- |
| L01 Claims and counterexamples | Preserve the premise and find conditions under which the conclusion fails. |
| L02 Method and objective alignment | Define what needs to be known, then compare what methods can establish. |
| L03 Changed conditions and predictions | Change a condition and trace consequences for mechanisms, parameters, and outcomes. |
| L04 Mechanisms across scales | Unpack an overall condition into explanatory intermediate links. |
| L05 Research redesign | Work backward from unresolved questions to evidence that distinguishes explanations. |
| L06 Hypotheses and findings | Compare expectations, observations, and untested components. |
| L07 Operational definitions and transfer | Examine what is represented and the assumptions needed for generalization. |
| L08 Model representations and approximations | Translate between representations and test an approximation's domain. |
| L09 Causal attribution and effect size | Distinguish an overall treatment effect from a specific factor's contribution. |
| L10 Conceptual boundaries | Move from a term to its components, conditions, process, and boundary cases. |
| L11 Many-to-one mappings | Test whether the same structure or outcome uniquely identifies a mechanism. |
| L12 Contribution, communication, and use | Separate new knowledge, public explanation, and decision relevance. |

## L01 Claims and counterexamples

**Textual trigger:** The author connects a higher indicator, efficiency, or particular characteristic to a better overall outcome.

**Core question:** Accepting that A is genuinely higher, under what conditions could B remain lower? What additional conditions does the argument require?

**Follow-up path:** Define A and B -> distinguish proportions from scale or flows from stocks -> identify other necessary factors -> construct a counterexample -> qualify the conclusion.

**Answer checkpoints:** The counterexample respects the premise, identifies the condition it changes, and explains where the original conclusion still applies.

**Stopping condition:** One sufficient route breaking the claimed necessity has been explained and the conclusion bounded. Do not demand an exhaustive list of factors.

**Hypothetical examples:** A more accurate model could produce lower service benefits. A more efficient manufacturing process could still yield lower total output. First verify that the document actually makes the relevant connection.

## L02 Method and objective alignment

**Textual trigger:** The document compares existing methods, introduces a method, or relies on a key proxy.

**Core question:** Why is this method suitable for the thesis's question? For what objective would you choose another method?

**Follow-up path:** Research object and target quantity -> direct observations and transformations -> assumptions and resolution -> alternatives -> validation evidence.

**Answer checkpoints:** Define the criterion for a good method. Compare what each method measures or explains, its temporal and spatial scale, precision, identifiability, cost, feasibility, and information gaps.

**Key distinction:** Larger outputs, better fit, wider coverage, and newer equipment establish different properties. An accuracy claim needs a reference and an account of that reference's uncertainty.

**Stopping condition:** The choice matches the objective and the candidate identifies a setting where an alternative is suitable. A universally best method is unnecessary.

**Humanities adaptation:** Compare the explanatory roles of archives, interviews, or close reading. Experimental validation is not the sole criterion across disciplines.

## L03 Changed conditions and predictions

**Textual trigger:** A mechanism, response curve, or model is established under fixed conditions.

**Core question:** If condition X changes, which processes change first, and how would the outcome respond?

**Follow-up path:** Specify the change and fixed conditions -> affected links -> observable response -> model parameters or interpretive framework -> evidence that could test the prediction.

**Answer checkpoints:** Distinguish rate from magnitude, short-term from long-term behavior, and main effects from interactions. Conditional alternative predictions are acceptable when their assumptions are explicit.

**Boundary:** Do not invent a numerical prediction when the model has no relationship for the changed variable. Identify where jointly changing factors prevent a unique prediction.

**Hypothetical examples:** Which performance measure changes first under a training-data distribution shift? Does a proposed institutional mechanism still operate after a change in governance?

## L04 Mechanisms across scales

**Textual trigger:** Material properties, structure, environment, institutions, or organization explain individual or system-level outcomes.

**Core question:** Through which specific links does the overall property affect the research object?

**Follow-up path:** Define the concept -> spatial or organizational arrangement -> access to contact, transport, resources, or information -> individual state -> collective outcome.

**Answer checkpoints:** Distinguish adjacent concepts, construct a conditional mechanism chain, and identify observable intermediate links.

**Boundary:** A list of associated factors needs an explanation of how the factors connect. An aggregate label rarely determines a unique direction of effect.

**Adaptation:** Physical, organizational, and social structures involve different mechanisms. Transfer the operation of unpacking intermediate links without assuming those mechanisms are interchangeable.

## L05 Research redesign

**Textual trigger:** Unresolved explanations, generalization limits, or an important unobserved process.

**Core question:** With fewer resource constraints, which uncertainty would you address first, and how would you design the study?

**Follow-up path:** Priority gap -> competing explanations or hypotheses -> distinguishing intervention, comparison, or sources -> observations and analysis -> result that would change the conclusion.

**Answer checkpoints:** Identify research units, comparison logic, timing, analysis strategy, discriminating outcomes, and reasons for prioritizing them.

**Boundary:** Unlimited funding does not remove ethical limits, physical constraints, conceptual problems, or identifiability concerns. A list of instruments, high-dimensional assays, or larger samples is insufficient as a design.

**Stopping condition:** At least one proposed design meaningfully reduces the central uncertainty and states its remaining limits.

## L06 Hypotheses and findings

**Textual trigger:** Explicit hypotheses accompany heterogeneous results, anomalies, or missing expected relationships.

**Core question:** Which expectations were supported, which were unsupported, and which were not directly tested?

**Follow-up path:** Recover the original hypothesis -> locate corresponding results -> distinguish effect direction from mechanism evidence -> explain mismatches -> propose a discriminating prediction.

**Answer checkpoints:** Address each hypothesis, preserve exceptions, and acknowledge measurement capability and contextual limits. Separate observational support from causal confirmation.

**Boundary:** Do not rewrite the original hypothesis after seeing the results. No detected difference does not automatically establish equality or absence of an effect. Agreement with an expected direction does not validate every intermediate mechanism.

**Work without prior hypotheses:** Examine initial questions, exploratory findings, and changes in interpretation without imposing a hypothesis-testing structure.

## L07 Operational definitions and transfer

**Textual trigger:** A particular input, sample, task, proxy, source, or controlled setting supports claims about broader objects.

**Core question:** What does the current method actually characterize? Which assumptions might fail for a different object or setting?

**Follow-up path:** Theoretical concept -> operational definition -> study coverage -> justified comparisons -> validation needed for transfer.

**Answer checkpoints:** State both the useful information provided and its scope. Explain whether a new object changes sampling, observation windows, transformations, modeling, or interpretation.

**Two distinct levels:**

- Construct representation: How well does the observed quantity represent the intended concept?
- Method transferability: Do the assumptions supporting calculation or interpretation remain valid for a new object?

**Boundary:** A context-dependent indicator can still support useful comparisons. Identical procedures alone do not guarantee that all samples yield quantities with the same meaning.

**Hypothetical examples:** A single benchmark score versus deployment performance; an interpretation supported by selected archives versus history in an unrepresented region.

## L08 Model representations and approximations

**Textual trigger:** An equation, curve, statistical model, complexity claim, theorem, or simplification supports a central explanation.

**Core question:** What does each component mean in another representation? Why is an approximation valid, and when does it fail?

**Possible follow-ups:**

- Convert cumulative quantities to rates, ratios to their component quantities, or geometry to algebra.
- Examine parameter units, limits, initial values, and allowed ranges.
- Identify the small quantity and omitted terms in a local approximation.
- Ask whether the data identify parameters separately and whether distinct mechanisms produce similar outputs.
- Ask whether improved fit from an added term supports its proposed scientific meaning.

**Answer checkpoints:** The derivation matches the original expression, the approximation conditions are explicit, and a failure case can be identified.

**Boundary:** Evaluate numerical fit, predictive performance, and mechanism identification separately. A local approximation does not become an equality at arbitrary times or scales.

**Work without equations:** Test logical equivalence, category transformations, and boundary cases in the interpretive framework without requiring artificial mathematical operations.

## L09 Causal attribution and effect size

**Textual trigger:** A treatment changes several conditions together, or an association is used to explain a specific factor's effect.

**Core question:** What effect does the study identify? How much can be attributed to a particular factor?

**Follow-up path:** Define the target effect -> identify conditions that change together -> competing explanations or mediation -> what existing comparisons exclude -> what additional evidence could identify.

**Separate these questions:**

- Does the entire effect come from X? This tests the scope of attribution.
- How large is Z's contribution? This tests the evidence for quantifying a separate contribution.

**Answer checkpoints:** Distinguish total, direct, and indirect effects from associations. Do not classify every post-treatment variable as a confounder or assume regression adjustment identifies its contribution.

**Stopping condition:** State what the current design identifies and a comparison that could improve the inference. Perfect constancy of every other condition is not required as a promise.

## L10 Conceptual boundaries

**Textual trigger:** A briefly explained reaction, theory, mechanism, term, or category carries an important part of the argument.

**Core question:** What defines the concept and its conditions? If a key component changes, do the name and mechanism still apply?

**Follow-up path:** Definition -> components and conditions -> process -> neighboring concepts -> substituted-condition boundary case -> consequence for the thesis argument.

**Answer checkpoints:** Explain how the term supports the thesis instead of only recalling its name. Acknowledge genuine naming differences or disputes and check original sources.

**Boundary:** Similar products, observations, or names alone do not establish an identical process. A simplified definition in one paper is not automatically a universal rule.

## L11 Many-to-one mappings

**Textual trigger:** Measures of structure, composition, state, and overall function change differently.

**Core question:** Does the same structure determine the same function? Does the same function identify the same structure?

**Follow-up path:** Define each measure -> distinguish structure from state -> identify different combinations yielding the same result -> specify what current observations cannot distinguish -> propose distinguishing information.

**Answer checkpoints:** Separate composition, activity state, process rates, and aggregate outcomes. Offer at least two explanations compatible with the observations.

**Boundary:** An aggregate measure may correspond to several combinations of mechanisms. Many-to-one mapping describes an identification problem; without an explicit model, it does not establish a quantified dimensionality-reduction process. Unobserved information in one study is not necessarily unobservable in principle.

**Hypothetical examples:** Identical total test scores with different skill profiles; identical prediction accuracy with different error distributions; identical organizational membership with different working states.

## L12 Contribution, communication, and use

**Textual trigger:** The abstract, contribution statement, significance discussion, or practical recommendations.

Treat three questions separately:

1. **Contribution:** What is added to existing work? Which result supports it? What knowledge, tool, or evidence would be missing without this study?
2. **Public explanation:** Can the problem, approach, and significance be explained in everyday language while retaining necessary limits?
3. **Decision relevance:** Who could make what decision with this evidence? What intermediate evidence, external validation, and implementation conditions remain necessary?

**Follow-up path:** New contribution -> supporting evidence -> audience or user -> decision that could change -> scope.

**Answer checkpoints:** Separate originality, usefulness, and communication. Distinguish methodological contributions from empirical findings. It is acceptable to explain that the thesis cannot yet support a specific policy.

**Boundary:** A threshold observed in one study does not directly establish a universal rule without validation across settings. Public explanations should not imply unmeasured long-term outcomes.

## Applying the routes to a new document

Find the important reasoning step in the text before selecting a route. If a question remains as broad as asking about limitations or contributions, locate a specific claim and evidence, or supply document-specific follow-ups.

Test generality by rebuilding the evidence map for a different topic. A history study may warrant source-selection and alternative-interpretation questions; a theoretical study may warrant definition and condition questions. Select routes from the new argument's structure instead of mechanically replacing variables from another study.
