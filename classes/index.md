[mdp] <https://mdld.js.org/prov/>
[owl] <http://www.w3.org/2002/07/owl#>
[dm] <http://www.w3.org/TR/2013/REC-prov-dm-20130430/#>
[n] <http://www.w3.org/TR/2013/REC-prov-n-20130430/#>


This list is grounded in original ontology in Turtle format [../prov-o.ttl] {=nih:sha-256-128;cf1acd21933033f75b215e665722ed13;1 .prov:Entity prov:atLocation}.

## Class List Shape {=mdp:shape:classes .sh:NodeShape label}

All [owl:Classes] {+owl:Class ?sh:targetClass} present is the system are validated - this is quite a broad approach and we had to comment out a couple of lines in original code, but this should be good enough for now.

**Class List integrity violation** {=mdp:rule:listed .sh:propertyShape ?sh:property sh:message} checks for it to have [listed] {+mdp:listed ?sh:path} exactly once [1] {sh:minCount sh:maxCount ^^xsd:integer}  - this is *informational* {+sh:Info ?sh:severity} constrain to keep the list integrity.

====

## Agent {=prov:Agent .Class label mdp:listed mdp:expanded}

> An agent is something that bears some form of responsibility for an activity taking place, for the existence of an entity, or for another agent's activity. {prov:definition}

**Disjoint with:** [InstantaneousEvent] {+prov:InstantaneousEvent !owl:disjointWith}

Has 3 sub-classes: **Organization** {+prov:Organization !subClassOf}, **Person** {+prov:Person !subClassOf} and **SoftwareAgent** {+prov:SoftwareAgent !subClassOf mdp:listed}.

## Person {=prov:Person .Class label mdp:listed}

> Person agents are people. {prov:definition}

## Organization {=prov:Organization .Class label mdp:listed}

> An organization is a social or legal institution such as a company, society, etc. {prov:definition}

## SoftwareAgent {=prov:SoftwareAgent .Class label mdp:listed}

> A software agent is running software. {prov:definition}

## Entity {=prov:Entity .Class label mdp:listed}

> An entity is a physical, digital, conceptual, or other kind of thing with some fixed aspects; entities may be real or imaginary. {prov:definition}

**Disjoint with:** [InstantaneousEvent] {+prov:InstantaneousEvent ?owl:disjointWith}

Has 3 sub-classes: [Collection] {+prov:Collection !subClassOf}, [Plan] {+prov:Plan !subClassOf} and [Bundle] {+prov:Bundle !subClassOf}.

## Collection {=prov:Collection .Class label mdp:listed}

> A collection is an entity that provides a structure to some constituents, which are themselves entities. These constituents are said to be member of the collections. {prov:definition}

The prov:Collection class can be used to express the provenance of the collection itself: e.g. who maintained the collection, which members it contained as it evolved, and how it was assembled. The prov:hadMember property is used to assert membership in a collection.

Has a subclass - **Empty Collection** {=prov:EmptyCollection .Class mdp:listed label !subClassOf} - *An empty collection is a collection without members.* {prov:definition}

## Plan {=prov:Plan .Class label mdp:listed}

> A plan is an entity that represents a set of actions or steps intended by one or more agents to achieve some goals. {prov:definition}

> There exist no prescriptive requirement on the nature of plans, their representation, the actions or steps they consist of, or their intended goals. Since plans may evolve over time, it may become necessary to track their provenance, so plans themselves are entities. Representing the plan explicitly in the provenance can be useful for various tasks: for example, to validate the execution as represented in the provenance record, to manage expectation failures, or to provide explanations. {comment}

## Bundle {=prov:Bundle .Class label mdp:listed}

> A bundle is a named set of provenance descriptions, and is itself an Entity, so allowing provenance of provenance to be expressed. {prov:definition}

> Note that there are kinds of bundles (e.g. handwritten letters, audio recordings, etc.) that are not expressed in PROV-O, but can be still be described by PROV-O. {comment}

A bundle's identifier id identifies a unique set of descriptions.

A bundle is a named set of descriptions, but it is also an entity so that its provenance can be described.

A prov:Bundle is a named set of provenance descriptions, which may itself have provenance. The named set of provenance descriptions may be expressed as PROV-O or any other form. The subclass of Bundle that names a set of PROV-O assertions is not provided by PROV-O, since it is more appropriate to do so using other recommendations, standards, or technologies. In any case, a Bundle of PROV-O assertions is an abstract set of RDF triples, and adding or removing a triple creates a new distinct Bundle of PROV-O assertions.

***

## Activity {=prov:Activity .Class label mdp:listed}

> An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities. {prov:definition}

> An activity is not an entity. This distinction is similar to the distinction between 'continuant' and 'occurrent' in logic. {prov:comment}

***

## Generation {=prov:Generation label mdp:listed}

> Generation is the completion of production of a new entity by an activity. This entity did not exist before generation and becomes available for usage after this generation. {prov:definition}

***

## Usage {=prov:Usage label mdp:listed}

> Usage is the beginning of utilizing an entity by an activity. Before usage, the activity had not begun to utilize this entity and could not have been affected by the entity. (Note: This definition is formulated for a given usage; it is permitted for an activity to have used a same entity multiple times.) {prov:definition}

> Given that a usage is the beginning of utilizing an entity, it is instantaneous. {comment}

***

## Start {=prov:Start label mdp:listed}

> Start is when an activity is deemed to have been started by an entity, known as trigger. The activity did not exist before its start. Any usage, generation, or invalidation involving an activity follows the activity's start. A start may refer to a trigger entity that set off the activity, or to an activity, known as starter ◊, that generated the trigger. {prov:definition}

> Given that a start is when an activity is deemed to have started, it is instantaneous. {comment}

***

## End {=prov:End label mdp:listed}

> End is when an activity is deemed to have been ended by an entity, known as trigger. The activity no longer exists after its end. Any usage, generation, or invalidation involving an activity precedes the activity's end. An end may refer to a trigger entity that terminated the activity, or to an activity, known as ender ◊ that generated the trigger. {prov:definition}

> Given that an end is when an activity is deemed to have ended, it is instantaneous. {comment}

***

## Invalidation {=prov:Invalidation label mdp:listed}

> Invalidation is the start of the destruction, cessation, or expiry of an existing entity by an activity. The entity is no longer available for use (or further invalidation) after invalidation. Any generation or usage of an entity precedes its invalidation. {prov:definition}

> Given that an invalidation is the start of destruction, cessation, or expiry, it is instantaneous. {comment}

Entities have a duration. Generation marks the beginning of an entity, whereas invalidation marks its end.

***

## Communication {=prov:Communication label mdp:listed}

> Communication is the exchange of some unspecified entity by two activities, one activity using some entity generated by the other. {prov:definition}

> A communication implies that activity a2 is dependent on another a1, by way of some unspecified entity that is generated by a1 and used by a2. {comment}

***

## InstantaneousEvent {=prov:InstantaneousEvent label mdp:listed}

> The PROV data model is implicitly based on a notion of instantaneous events (or just events), that mark transitions in the world. Events include generation, usage, or invalidation of entities, as well as starting or ending of activities. This notion of event is not first-class in the data model, but it is useful for explaining its other concepts and its semantics. {prov:definition}

> An instantaneous event, or event for short, happens in the world and marks a change in the world, in its activities and in its entities. The term 'event' is commonly used in process algebra with a similar meaning. Events represent communications or interactions; they are assumed to be atomic and instantaneous. {comment}


## Other classes {=mdp:class:index .Container label}

**ActivityInfluence** {+prov:ActivityInfluence ?member .Class mdp:listed}
**AgentInfluence** {+prov:AgentInfluence ?member .Class mdp:listed}

## Association {=prov:Association .Class label mdp:listed}

> An activity association is an assignment of responsibility to an agent for an activity, indicating that the agent had a role in the activity. It further allows for a plan to be specified, which is the plan intended by the agent to achieve some goals in the context of this activity. {prov:definition}

> An instance of prov:Association provides additional descriptions about the binary prov:wasAssociatedWith relation from an prov:Activity to some prov:Agent that had some responsiblity for it. For example, :baking prov:wasAssociatedWith :baker; prov:qualifiedAssociation [ a prov:Association; prov:agent :baker; :foo :bar ]. {prov:comment}

## Attribution {=prov:Attribution .Class label mdp:listed}

> Attribution is the ascribing of an entity to an agent.

> When an entity e is attributed to agent ag, entity e was generated by some unspecified activity that in turn was associated to agent ag. Thus, this relation is useful when the activity is not known, or irrelevant. {prov:definition}

> An instance of prov:Attribution provides additional descriptions about the binary prov:wasAttributedTo relation from an prov:Entity to some prov:Agent that had some responsible for it. For example, :cake prov:wasAttributedTo :baker; prov:qualifiedAttribution [ a prov:Attribution; prov:entity :baker; :foo :bar ]. {prov:comment}

## Delegation {=prov:Delegation .Class label mdp:listed}

> Delegation is the assignment of authority and responsibility to an agent (by itself or by another agent) to carry out a specific activity as a delegate or representative, while the agent it acts on behalf of retains some responsibility for the outcome of the delegated work.

> For example, a student acted on behalf of his supervisor, who acted on behalf of the department chair, who acted on behalf of the university; all those agents are responsible in some way for the activity that took place but we do not say explicitly who bears responsibility and to what degree. {prov:definition}

> An instance of prov:Delegation provides additional descriptions about the binary prov:actedOnBehalfOf relation from a performing prov:Agent to some prov:Agent for whom it was performed. For example, :mixing prov:wasAssociatedWith :toddler . :toddler prov:actedOnBehalfOf :mother; prov:qualifiedDelegation [ a prov:Delegation; prov:entity :mother; :foo :bar ]. {prov:comment}

## Derivation {=prov:Derivation .Class label mdp:listed}

> A derivation is a transformation of an entity into another, an update of an entity resulting in a new one, or the construction of a new entity based on a pre-existing entity. {prov:definition}

> An instance of prov:Derivation provides additional descriptions about the binary prov:wasDerivedFrom relation from some derived prov:Entity to another prov:Entity from which it was derived. For example, :chewed_bubble_gum prov:wasDerivedFrom :unwrapped_bubble_gum; prov:qualifiedDerivation [ a prov:Derivation; prov:entity :unwrapped_bubble_gum; :foo :bar ]. {prov:comment}

> The more specific forms of prov:Derivation (i.e., prov:Revision, prov:Quotation, prov:PrimarySource) should be asserted if they apply. {prov:comment}

Has 3 sub-classes: [PrimarySource] {+prov:PrimarySource !subClassOf}, [Quotation] {+prov:Quotation !subClassOf} and [Revision] {+prov:Revision !subClassOf}.

## EntityInfluence {=prov:EntityInfluence .Class label mdp:listed}

> EntityInfluence is the capacity of an entity to have an effect on the character, development, or behavior of another by means of usage, start, end, derivation, or other. {prov:editorsDefinition}

> EntityInfluence provides additional descriptions of an Entity's binary influence upon any other kind of resource. Instances of EntityInfluence use the prov:entity property to cite the influencing Entity. {prov:comment}

> It is not recommended that the type EntityInfluence be asserted without also asserting one of its more specific subclasses. {prov:comment}

## Influence {=prov:Influence .Class label mdp:listed}

> Influence is the capacity of an entity, activity, or agent to have an effect on the character, development, or behavior of another by means of usage, start, end, generation, invalidation, communication, derivation, attribution, association, or delegation. {prov:definition}

> An instance of prov:Influence provides additional descriptions about the binary prov:wasInfluencedBy relation from some influenced Activity, Entity, or Agent to the influencing Activity, Entity, or Agent. For example, :stomach_ache prov:wasInfluencedBy :spoon; prov:qualifiedInfluence [ a prov:Influence; prov:entity :spoon; :foo :bar ] . Because prov:Influence is a broad relation, the more specific relations (Communication, Delegation, End, etc.) should be used when applicable. {prov:comment}

> Because prov:Influence is a broad relation, its most specific subclasses (e.g. prov:Communication, prov:Delegation, prov:End, prov:Revision, etc.) should be used when applicable. {prov:comment}

## Location {=prov:Location .Class label mdp:listed}

> A location can be an identifiable geographic place (ISO 19112), but it can also be a non-geographic place such as a directory, row, or column. As such, there are numerous ways in which location can be expressed, such as by a coordinate, address, landmark, and so forth. {prov:definition}

## PrimarySource {=prov:PrimarySource .Class label mdp:listed}

> A primary source for a topic refers to something produced by some agent with direct experience and knowledge about the topic, at the time of the topic's study, without benefit from hindsight.

Because of the directness of primary sources, they 'speak for themselves' in ways that cannot be captured through the filter of secondary sources. As such, it is important for secondary sources to reference those primary sources from which they were derived, so that their reliability can be investigated.

> A primary source relation is a particular case of derivation of secondary materials from their primary sources. It is recognized that the determination of primary sources can be up to interpretation, and should be done according to conventions accepted within the application's domain. {prov:definition}

> An instance of prov:PrimarySource provides additional descriptions about the binary prov:hadPrimarySource relation from some secondary prov:Entity to an earlier, primary prov:Entity. For example, :blog prov:hadPrimarySource :newsArticle; prov:qualifiedPrimarySource [ a prov:PrimarySource; prov:entity :newsArticle; :foo :bar ] . {prov:comment}

## Quotation {=prov:Quotation .Class label mdp:listed}

> A quotation is the repeat of (some or all of) an entity, such as text or image, by someone who may or may not be its original author. Quotation is a particular case of derivation. {prov:definition}

> An instance of prov:Quotation provides additional descriptions about the binary prov:wasQuotedFrom relation from some taken prov:Entity from an earlier, larger prov:Entity. For example, :here_is_looking_at_you_kid prov:wasQuotedFrom :casablanca_script; prov:qualifiedQuotation [ a prov:Quotation; prov:entity :casablanca_script; :foo :bar ]. {prov:comment}

## Revision {=prov:Revision .Class label mdp:listed}

> A revision is a derivation for which the resulting entity is a revised version of some original. The implication here is that the resulting entity contains substantial content from the original. Revision is a particular case of derivation. {prov:definition}

> An instance of prov:Revision provides additional descriptions about the binary prov:wasRevisionOf relation from some newer prov:Entity to an earlier prov:Entity. For example, :draft_2 prov:wasRevisionOf :draft_1; prov:qualifiedRevision [ a prov:Revision; prov:entity :draft_1; :foo :bar ]. {prov:comment}

## Role {=prov:Role .Class label mdp:listed}

> A role is the function of an entity or agent with respect to an activity, in the context of a usage, generation, invalidation, association, start, and end. {prov:definition}
