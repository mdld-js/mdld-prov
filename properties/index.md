[mdp] <https://mdld.js.org/prov/>
[owl] <http://www.w3.org/2002/07/owl#>

# Lists Shape {=mdp:shape:list .sh:NodeShape label}

This shape keeps lists grounded in original ttl data - any missed IRI would trigger a violation.

[Object] {+owl:ObjectProperty ?sh:targetClass} and [Datatype] {+owl:DatatypeProperty ?sh:targetClass} properties lists in the catalog are validated.

**Property List integrity violation** {=mdp:rule:listed .sh:propertyShape ?sh:property sh:message} checks for it to have [listed] {+mdp:listed ?sh:path} at least once [1] {sh:minCount ^^xsd:integer}  - this is *informational* {+sh:Info ?sh:severity} constrain to keep the list integrity.


# Object Properties {=mdp:properties .Container label}

## actedOnBehalfOf {=prov:actedOnBehalfOf .owl:ObjectProperty label mdp:listed}

> An object property to express the accountability of an agent towards another agent. The subordinate agent acted on behalf of the responsible agent in an actual activity {comment @en}

Connects one [Agent] {+prov:Agent ?domain} to another [Agent] {+prov:Agent ?range} with a [delegation] {+prov:Delegation ?qualifiedForm} relation that is a sub-property of the [wasInfluencedBy] {+prov:wasInfluencedBy ?subPropertyOf} property.

It's qualified form is the [qualifiedDelegation] {+prov:qualifiedDelegation ?qualifiedForm} property.

Inverse: not defined explicitly, rather a recommended name for use in additional ontologies if necessary - [hadDelegate] {prov:inverse}.

## activity {=prov:activity .owl:ObjectProperty label mdp:listed}

Applies to [Activities] {+prov:Activity ?range} as a sub-property of [influencer] {+prov:influencer ?subPropertyOf} - it references an [Activity] that influenced a resource. 

> This property behaves in spirit like rdf:object; it references the object of a prov:wasInfluencedBy triple. {prov:editorialNote @en}

> The prov:activity property references an prov:Activity which influenced a resource. This property applies to an prov:ActivityInfluence, which is given by a subproperty of prov:qualifiedInfluence from the influenced prov:Entity, prov:Activity or prov:Agent. {prov:editorsDefinition @en}

Inverse: [activityOfInfluence] {prov:inverse}

## agent {=prov:agent .owl:ObjectProperty label mdp:listed}

Points to [Agents] {+prov:Agent ?range} from the [AgentInfluence] {+prov:AgentInfluence ?domain} qualified relations that are sub-properties of the [influencer] {+prov:influencer ?subPropertyOf} property.

> This property behaves in spirit like rdf:object; it references the object of a prov:wasInfluencedBy triple. {prov:editorialNote @en}

> The prov:agent property references an prov:Agent which influenced a resource. This property applies to an prov:AgentInfluence, which is given by a subproperty of prov:qualifiedInfluence from the influenced prov:Entity, prov:Activity or prov:Agent. {prov:editorsDefinition @en}

Inverse: [agentOfInfluence] {prov:inverse}

## alternateOf {=prov:alternateOf .owl:ObjectProperty label mdp:listed}

Connects two [entities] {+prov:Entity ?domain ?range} as describing the same thing from multiple perspectives - a sub-property of the [alternate] {+prov:alternate ?subPropertyOf} property - it's a [symmetrical] {+prov:alternateOf ?prov:inverse} relation.

> Two alternate entities present aspects of the same thing. These aspects may be the same or different, and the alternate entities may or may not overlap in time. {comment @en}

Related: [specializationOf] {+prov:specializationOf ?seeAlso}

## atLocation {=prov:atLocation .owl:ObjectProperty label mdp:listed}

> The Location of any resource. {comment @en}

Points to a [Location] {+prov:Location ?range ?prov:sharesDefinitionWith} from [Activity] {+prov:Activity ?domain}, [Agent] {+prov:Agent ?domain}, [Entity] {+prov:Entity ?domain}, or [InstantaneousEvent] {+prov:InstantaneousEvent ?domain}.

Inverse: [locationOf] {prov:inverse}.

> The naming of prov:atLocation parallels prov:atTime, and is not named prov:hadLocation to avoid conflicting with the convention that prov:had* properties are used on prov:Influence classes. {prov:editorialNote}


## entity {=prov:entity .owl:ObjectProperty label mdp:listed}

A qualified [EntityInfluence] {+prov:EntityInfluence ?domain} uses this relation to point to an [entity] {+prov:Entity} that influences an entity/agent/activity with some [influence] {+prov:influencer ?subPropertyOf}.

Inverse: [entityOfInfluence] {prov:inverse}

> This property behaves in spirit like rdf:object; it references the object of a prov:wasInfluencedBy triple. {prov:editorialNote @en}

> The prov:entity property references an prov:Entity which influenced a resource. This property applies to an prov:EntityInfluence, which is given by a subproperty of prov:qualifiedInfluence from the influenced prov:Entity, prov:Activity or prov:Agent. {prov:editorsDefinition @en}


## generated {=prov:generated .owl:ObjectProperty mdp:listed}

Connects [activities] {+prov:Activity ?domain} to [entities] {+prov:Entity ?range} with a [generation] {+prov:Generation ?prov:sharedDefinitionWith} relation as a sub-property of [influenced] {+prov:influenced ?subPropertyOf}.

Inverse: [wasGeneratedBy] {prov:inverse} - one of few defined inverse properties - it's the inverse of [wasGeneratedBy] {+prov:wasGeneratedBy ?owl:inverseOf}.

> prov:generated is one of few inverse property defined, to allow Activity-oriented assertions in addition to Entity-oriented assertions. {comment @en}


## hadActivity {+prov:hadActivity .owl:ObjectProperty label mdp:listed}

> The _optional_ Activity of an Influence, which used, generated, invalidated, or was the responsibility of some Entity. This property is _not_ used by ActivityInfluence (use prov:activity instead). {comment}

Multidomain extension to an [influence] {+prov:Influence ?domain} with an [activity] {+prov:Activity ?prov:sharesDefinitionWith ?range} that influenced these processes: 

- Delegation {+prov:Delegation ?domain}, 
- Derivation {+prov:Derivation ?domain}, 
- End {+prov:End ?domain}, 
- Start {+prov:Start ?domain}.

Inverse: [wasActivityOfInfluence] {prov:inverse}

## hadGeneration {=prov:hadGeneration .owl:ObjectProperty label mdp:listed}

> The _optional_ Generation involved in an Entity's Derivation. {comment @en}

Points to an optional explicit [generation] {+prov:Generation ?prov:sharesDefinitionWith ?range} that influenced [derivation] {+prov:Derivation ?domain} of an entity.

Inverse: [generatedAsDerivation] {prov:inverse}.

## hadMember {=prov:hadMember .owl:ObjectProperty label mdp:listed}

Connects a [Collection] {+prov:Collection ?domain ?prov:sharesDefinitionWith} to its [member] {+prov:Entity ?range} with a relation that is a sub-property of [wasInfluencedBy] {+prov:wasInfluencedBy ?subPropertyOf}.

Inverse: [wasMemberOf] {prov:inverse}

## hadPlan {=prov:hadPlan .owl:ObjectProperty label mdp:listed}

> The _optional_ Plan adopted by an Agent in Association with some Activity. Plan specifications are out of the scope of this specification. {comment @en}

Is used to connect [Association] {+prov:Association ?domain} to a [Plan] {+prov:Plan ?range ?prov:sharesDefinitionWith}.

Inverse: [wasPlanOf] {prov:inverse}


## hadPrimarySource {=prov:hadPrimarySource .owl:ObjectProperty label mdp:listed}

Connects two [entities] {+prov:Entity ?domain ?range} with a source relation that is a sub-property of [wasDerivedFrom] {+prov:wasDerivedFrom ?subPropertyOf}.

Has a qualified form - [qualifiedPrimarySource] {+prov:qualifiedPrimarySource ?prov:qualifiedForm} that creates an explicit [PrimarySource] {+prov:PrimarySource ?prov:qualifiedForm} relation.

Inverse: [wasPrimarySourceOf] {prov:inverse}

## hadRole {=prov:hadRole .owl:ObjectProperty label mdp:listed}

> The _optional_ Role that an Entity assumed in the context of an Activity. For example, :baking prov:used :spoon; prov:qualified [ a prov:Usage; prov:entity :spoon; prov:hadRole roles:mixing_implement ]. {comment @en}

It describes that an entity assumed a [Role] {+prov:Role ?range ?prov:sharesDefinitionWith} during an [Influence] {+prov:Influence ?domain} or [Association] {+prov:Association ?domain} or [InstantaneousEvent] {+prov:InstantaneousEvent ?domain} in general.

Inverse: [wasRoleIn] {prov:inverse}.

## hadUsage {=prov:hadUsage .owl:ObjectProperty label mdp:listed}

> The _optional_ Usage involved in an Entity's Derivation. {comment @en}

It describes that an entity was [used] {+prov:Usage ?range ?prov:sharesDefinitionWith} during a [Derivation] {+prov:Derivation ?domain}.

Inverse: [wasUsedInDerivation] {prov:inverse}.


## influenced {=prov:influenced .owl:ObjectProperty label mdp:listed}

Inverse: [wasInfluencedBy] {prov:inverse} with a defined [inverse] {+prov:wasInfluencedBy ?owl:inverseOf}.

See [Influence] {+prov:Influence ?prov:sharesDefinitionWith}

## influencer {=prov:influencer .owl:ObjectProperty label mdp:listed}

> Subproperties of prov:influencer are used to cite the object of an unqualified PROV-O triple whose predicate is a subproperty of prov:wasInfluencedBy (e.g. prov:used, prov:wasGeneratedBy). prov:influencer is used much like rdf:object is used. {comment @en}

Clarifies an [Influence] {+prov:Influence ?domain} with what was that [thing] {+owl:Thing ?range} that made the influence.

Inverse: [hadInfluence] {prov:inverse}.

> This property and its subproperties are used in the same way as the rdf:object property, i.e. to reference the object of an unqualified prov:wasInfluencedBy or prov:influenced triple. {prov:editorialNote @en}

> This property is used as part of the qualified influence pattern. Subclasses of prov:Influence use these subproperties to reference the resource (Entity, Agent, or Activity) whose influence is being qualified. {prov:editorialNote @en}

## invalidated {=prov:invalidated .owl:ObjectProperty label mdp:listed}

> prov:invalidated is one of few inverse property defined, to allow Activity-oriented assertions in addition to Entity-oriented assertions. {prov:editorialNote @en}

Connects an [Activity] {+prov:Activity ?domain} with an [Entity] {+prov:Entity ?range} that was [invalidated] {+prov:Invalidation ?prov:sharesDefinitionWith} by it.

A sub-property of [influenced] {+prov:influenced ?subPropertyOf}.

Inverse: [wasInvalidatedBy] {prov:inverse}.

## qualifiedAssociation {=prov:qualifiedAssociation .owl:ObjectProperty label mdp:listed}

> If this Activity prov:wasAssociatedWith Agent :ag, then it can qualify the Association using prov:qualifiedAssociation [ a prov:Association;  prov:agent :ag; :foo :bar ]. {comment @en}

As a qualified form of [wasAssociatedWith] {+prov:wasAssociatedWith ?prov:unqualifiedForm} it describes that an activity was [associated] {+prov:Association ?range ?prov:sharesDefinitionWith} with an [activity] {+prov:Activity ?domain}.

Sub-property of [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}.

Inverse: [qualifiedAssociationOf] {prov:inverse}.

## qualifiedAttribution {=prov:qualifiedAttribution .owl:ObjectProperty label mdp:listed}

> If this Entity prov:wasAttributedTo Agent :ag, then it can qualify how it was influenced using prov:qualifiedAttribution [ a prov:Attribution;  prov:agent :ag; :foo :bar ]. {comment @en}

As a qualified form of [wasAttributedTo] {+prov:wasAttributedTo ?prov:unqualifiedForm} it describes that an entity was [attributed] {+prov:Attribution ?range ?prov:sharesDefinitionWith} to an [entity] {+prov:Entity ?domain}.

Sub-property of [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}.

Inverse: [qualifiedAttributionOf] {prov:inverse}.

## qualifiedCommunication {=prov:qualifiedCommunication .owl:ObjectProperty label mdp:listed}

> If this Activity prov:wasInformedBy Activity :a, then it can qualify how it was influenced using prov:qualifiedCommunication [ a prov:Communication;  prov:activity :a; :foo :bar ]. {comment @en}

Clarifies if an [activity] {+prov:Activity ?domain} was [communicated] {+prov:Communication ?range ?prov:sharesDefinitionWith ?prov:qualifiedForm} by another one.

Sub-property of [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}.

Inverse: [qualifiedCommunicationOf] {rov:inverse}.

## qualifiedDelegation {=prov:qualifiedDelegation .owl:ObjectProperty label mdp:listed}

> If this Agent prov:actedOnBehalfOf Agent :ag, then it can qualify how with prov:qualifiedResponsibility [ a prov:Responsibility;  prov:agent :ag; :foo :bar ]. {comment @en}

Connects an [agent] {+prov:Agent ?domain} to a [delegation] {+prov:Delegation ?range ?prov:sharesDefinitionWith}.

Sub-property of [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}.

Inverse: [qualifiedDelegationOf] {prov:inverse}

## qualifiedDerivation {=prov:qualifiedDerivation owl:ObjectProperty label mdp:listed}

> If this Entity prov:wasDerivedFrom Entity :e, then it can qualify how it was derived using prov:qualifiedDerivation [ a prov:Derivation;  prov:entity :e; :foo :bar ]. {comment @en}

Informs that an [entity] {+prov:Entity ?domain} was [derived] {+prov:Derivation ?range ?prov:sharesDefinitionWith} from another entity.

A qualified version of [wasDerivedFrom] {+prov:wasDerivedFrom ?prov:unqualifiedForm}.

Sub-property: [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

Inverse: [qualifiedDerivationOf] {prov:inverse}

## qualifiedEnd {=prov:qualifiedEnd owl:ObjectProperty label mdp:listed}

> If this Activity prov:wasEndedBy Entity :e1, then it can qualify how it was ended using prov:qualifiedEnd [ a prov:End;  prov:entity :e1; :foo :bar ]. {comment @en}

Informs that an [activity] {+prov:Activity ?domain} was [ended] {+prov:End ?range ?prov:sharesDefinitionWith} by an [entity] {+prov:Entity ?domain}.

A qualified version of [wasEndedBy] {+prov:wasEndedBy ?prov:unqualifiedForm}.

Sub-property: [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

Inverse: [qualifiedEndOf] {prov:inverse}

## qualifiedGeneration {=prov:qualifiedGeneration owl:ObjectProperty label mdp:listed}

> If this Activity prov:generated Entity :e, then it can qualify how it performed the Generation using prov:qualifiedGeneration [ a prov:Generation;  prov:entity :e; :foo :bar ]. {comment @en}

Informs that an [entity] {+prov:Entity ?domain} was [generated] {+prov:Generation ?range ?prov:sharesDefinitionWith} by an [activity] {+prov:Activity ?domain}.

A qualified version of [wasGeneratedBy] {+prov:wasGeneratedBy ?prov:unqualifiedForm}.

Sub-property: [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

Inverse: [qualifiedGenerationOf] {prov:inverse}

## qualifiedInfluence {=prov:qualifiedInfluence owl:ObjectProperty label mdp:listed}

> Because prov:qualifiedInfluence is a broad relation, the more specific relations (qualifiedCommunication, qualifiedDelegation, qualifiedEnd, etc.) should be used when applicable. {comment @en}

Attaches a broad term [influence] {+prov:Influence ?range ?prov:sharesDefinitionWith} to an [entity] {+prov:Entity ?domain}, [activity] {+prov:Activity ?domain} or [agent] {+prov:Agent ?domain}.

Inverse: [qualifiedInfluenceOf] {prov:inverse}

## qualifiedInvalidation {=prov:qualifiedInvalidation  owl:ObjectProperty label mdp:listed}

> If this Entity prov:wasInvalidatedBy Activity :a, then it can qualify how it was invalidated using prov:qualifiedInvalidation [ a prov:Invalidation;  prov:activity :a; :foo :bar ]. {comment @en}

Records the [invalidation] {+prov:Invalidation ?range ?prov:sharesDefinitionWith} of an [entity] {+prov:Entity ?domain} by an [activity] {+prov:Activity ?domain}.

A qualified version of [wasInvalidatedBy] {+prov:wasInvalidatedBy ?prov:unqualifiedForm}.

Inverse: [qualifiedInvalidationOf] {prov:inverse}


## qualifiedPrimarySource {=prov:qualifiedPrimarySource owl:ObjectProperty label mdp:listed}

> If this Entity prov:hadPrimarySource Entity :e, then it can qualify how using prov:qualifiedPrimarySource [ a prov:PrimarySource; prov:entity :e; :foo :bar ]. {comment @en}

Adds a [PrimarySource] {+prov:PrimarySource ?range ?prov:sharesDefinitionWith} to an [entity] {+prov:Entity ?domain}.

A qualified version of [hadPrimarySource] {+prov:hadPrimarySource ?prov:unqualifiedForm}.

Sub-property: [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

Inverse: [qualifiedSourceOf] {prov:inverse}


## qualifiedQuotation {=prov:qualifiedQuotation owl:ObjectProperty label mdp:listed}

> If this Entity prov:wasQuotedFrom Entity :e, then it can qualify how using prov:qualifiedQuotation [ a prov:Quotation;  prov:entity :e; :foo :bar ]. {comment @en}

Adds a [Quotation] {+prov:Quotation ?range ?prov:sharesDefinitionWith} to an [entity] {+prov:Entity ?domain}.

A qualified version of [wasQuotedFrom] {+prov:wasQuotedFrom ?prov:unqualifiedForm}.

Sub-property: [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

Inverse: [qualifiedQuotationOf] {prov:inverse}

## qualifiedRevision {=prov:qualifiedRevision owl:ObjectProperty label mdp:listed}

> If this Entity prov:wasRevisionOf Entity :e, then it can qualify how it was revised using prov:qualifiedRevision [ a prov:Revision;  prov:entity :e; :foo :bar ]. {comment @en}

Adds a [Revision] {+prov:Revision ?range ?prov:sharesDefinitionWith} to an [entity] {+prov:Entity ?domain}.

A qualified version of [wasRevisionOf] {+prov:wasRevisionOf ?prov:unqualifiedForm}.

Sub-property: [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

Inverse: [revisedEntity] {prov:inverse}

## qualifiedStart {=prov:qualifiedStart  owl:ObjectProperty label mdp:listed}

> If this Activity prov:wasStartedBy Entity :e1, then it can qualify how it was started using prov:qualifiedStart [ a prov:Start;  prov:entity :e1; :foo :bar ]. {comment @en}

Adds a [Start] {+prov:Start ?range ?prov:sharesDefinitionWith} to an [activity] {+prov:Activity ?domain}.

A qualified version of [wasStartedBy] {+prov:wasStartedBy ?prov:unqualifiedForm}.

Sub-property: [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

Inverse: [qualifiedStartOf] {prov:inverse}

## qualifiedUsage {=prov:qualifiedUsage  owl:ObjectProperty label mdp:listed}

> If this Activity prov:used Entity :e, then it can qualify how it used it using prov:qualifiedUsage [ a prov:Usage; prov:entity :e; :foo :bar ]. {comment @en}

Adds a [Usage] {+prov:Usage ?range ?prov:sharesDefinitionWith} to an [activity] {+prov:Activity ?domain}.

A qualified version of [used] {+prov:used ?prov:unqualifiedForm}.

Sub-property: [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

Inverse: [qualifiedUsingActivity] {prov:inverse}

## specializationOf {=prov:specializationOf .owl:ObjectProperty label mdp:listed}

> An entity that is a specialization of another shares all aspects of the latter, and additionally presents more specific aspects of the same thing as the latter. In particular, the lifetime of the entity being specialized contains that of any specialization. Examples of aspects include a time period, an abstraction, and a context associated with the entity. {comment @en}

Connects two [entities] {+prov:Entity ?range ?domain} where one is a more specific version of the other.

Sub-property: [alternateOf] {+prov:alternateOf ?subPropertyOf ?seeAlso}

Inverse: [generalizationOf] {prov:inverse}

## used {=prov:used .owl:ObjectProperty label mdp:listed}

> A prov:Entity that was used by this prov:Activity. For example, :baking prov:used :spoon, :egg, :oven . {comment @en}

Adds an [entity] {+prov:Entity ?range} to an [activity] {+prov:Activity ?domain}.

May be qualified by [qualifiedUsage] {+prov:qualifiedUsage ?prov:qualifiedForm} with [Usage] {+prov:Usage ?prov:qualifiedForm} attached.

Sub-property: [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

Inverse: [qualifiedUsage] {prov:inverse}

## wasAssociatedWith {=prov:wasAssociatedWith .owl:ObjectProperty label mdp:listed}

> An prov:Agent that had some (unspecified) responsibility for the occurrence of this prov:Activity. {comment @en}

Adds an [agent] {+prov:Agent ?range} to an [activity] {+prov:Activity ?domain}.

May be qualified by [qualifiedAssociation] {+prov:qualifiedAssociation ?prov:qualifiedForm} with [Association] {+prov:Association ?prov:qualifiedForm} attached.

Sub-property: [wasAssociateFor] {+prov:wasAssociateFor ?subPropertyOf}

Inverse: [wasAssociateFor] {prov:inverse}

## wasAttributedTo {=prov:wasAttributedTo .owl:ObjectProperty label mdp:listed}

> Attribution is the ascribing of an entity to an agent. {comment @en}

Adds an [agent] {+prov:Agent ?range} to an [entity] {+prov:Entity ?domain}.

May be qualified by [qualifiedAttribution] {+prov:qualifiedAttribution ?prov:qualifiedForm} with [Attribution] {+prov:Attribution ?prov:qualifiedForm} attached.

Sub-property: [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

Inverse: [qualifiedAttribution] {prov:inverse}

## wasDerivedFrom {=prov:wasDerivedFrom .owl:ObjectProperty label mdp:listed}
    
> The more specific subproperties of prov:wasDerivedFrom (i.e., prov:wasQuotedFrom, prov:wasRevisionOf, prov:hadPrimarySource) should be used when applicable. {comment @en}

> A derivation is a transformation of an entity into another, an update of an entity resulting in a new one, or the construction of a new entity based on a pre-existing entity. {comment @en}

Records that one [entity] {+prov:Entity ?domain} was derived from  [another] {+prov:Entity ?range}.

May be qualified by [qualifiedDerivation] {+prov:qualifiedDerivation ?prov:qualifiedForm} with [Derivation] {+prov:Derivation ?prov:qualifiedForm} attached.
    
Sub-property: [wasInfluencedBy] {+prov:wasInfluencedBy ?subPropertyOf}

Inverse: [hadDerivation] {prov:inverse}

## wasEndedBy {=prov:wasEndedBy .owl:ObjectProperty label mdp:listed}

> End is when an activity is deemed to have ended. An end may refer to an entity, known as trigger, that terminated the activity. {comment @en}

Records that one [activity] {+prov:Activity ?domain} was ended by a [trigger] {+prov:Entity ?range} that terminated it.

May be qualified by [qualifiedEnd] {+prov:qualifiedEnd ?prov:qualifiedForm} with [End] {+prov:End ?prov:qualifiedForm} attached.

Sub-property: [wasInfluencedBy] {+prov:wasInfluencedBy ?subPropertyOf}

Inverse: [ended] {prov:inverse}

## wasGeneratedBy {=prov:wasGeneratedBy .owl:ObjectProperty label mdp:listed}

Records that one [entity] {+prov:Entity ?domain} was generated by an [activity] {+prov:Activity ?range}.

May be qualified by [qualifiedGeneration] {+prov:qualifiedGeneration ?prov:qualifiedForm} with [Generation] {+prov:Generation ?prov:qualifiedForm} attached.

Sub-property: [wasInfluencedBy] {+prov:wasInfluencedBy ?subPropertyOf}

Inverse: [generated] {prov:inverse}

## wasInfluencedBy {=prov:wasInfluencedBy .owl:ObjectProperty label mdp:listed}

> Because prov:wasInfluencedBy is a broad relation, its more specific subproperties (e.g. prov:wasInformedBy, prov:actedOnBehalfOf, prov:wasEndedBy, etc.) should be used when applicable. {comment @en}

It describes that an entity was influenced by another entity.

This is a broad relation of [Influence] {+prov:Influence ?prov:qualifiedForm ?prov:sharesDefinitionWith} that can connect any of [agents] {+prov:Agent ?domain ?range}, [entities] {+prov:Entity ?domain ?range} or [activities] {+prov:Activity ?domain ?range} to each other. 

Can be qualified with [qualifiedInfluence] {+prov:qualifiedInfluence ?prov:qualifiedForm}.

Inverse: [influenced] {prov:inverse} is one of few that are [defined] {+prov:influenced ?prov:inverse}.

``` {prov:editorialNote @en}
The sub-properties of prov:wasInfluencedBy can be elaborated in more detail using the Qualification Pattern. For example, the binary relation :baking prov:used :spoon can be qualified by asserting :baking prov:qualifiedUsage [ a prov:Usage; prov:entity :spoon; prov:atLocation :kitchen ] .

Subproperties of prov:wasInfluencedBy may also be asserted directly without being qualified.

prov:wasInfluencedBy should not be used without also using one of its subproperties. 
```

## wasInformedBy {=prov:wasInformedBy .owl:ObjectProperty label mdp:listed}

> An activity a2 is dependent on or informed by another activity a1, by way of some unspecified entity that is generated by a1 and used by a2. {comment @en}

Connects one [activity] {+prov:Activity ?domain} to another [activity] {+prov:Activity ?range}.

May be qualified by [qualifiedCommunication] {+prov:qualifiedCommunication ?prov:qualifiedForm} with [Communication] {+prov:Communication ?prov:qualifiedForm} attached.

Sub-property of [wasInfluencedBy] {+prov:wasInfluencedBy ?subPropertyOf}.

Inverse: [informed] {prov:inverse}.

## wasInvalidatedBy {=prov:wasInvalidatedBy .owl:ObjectProperty label mdp:listed}

Connects an [entity] {+prov:Entity ?domain} to an [activity] {+prov:Activity ?range} that terminated it.

May be qualified by a [qualifiedInvalidation] {+prov:qualifiedInvalidation ?prov:qualifiedForm} with [Invalidation] {+prov:Invalidation ?prov:qualifiedForm} attached.

Sub-property of [wasInfluencedBy] {+prov:wasInfluencedBy ?subPropertyOf}.

Inverse: [invalidated] {prov:inverse}

## wasQuotedFrom {=prov:wasQuotedFrom .owl:ObjectProperty label mdp:listed}

> An entity is derived from an original entity by copying, or 'quoting', some or all of it. {comment @en}

Connects an [entity] {+prov:Entity ?domain} to another [entity] {+prov:Entity ?range} that is quoted from it.

May be qualified by a [qualifiedQuotation] {+prov:qualifiedQuotation ?prov:qualifiedForm} with [Quotation] {+prov:Quotation ?prov:qualifiedForm} attached.

Sub-property of [wasDerivedFrom] {+prov:wasDerivedFrom ?subPropertyOf}.

Inverse: [quotedAs] {prov:inverse}

## wasRevisionOf {=prov:wasRevisionOf .owl:ObjectProperty label mdp:listed}

> A revision is a derivation that revises an entity into a revised version. {comment @en}

Connects one [entity] {+prov:Entity ?domain} to [another] {+prov:Entity ?range} that is a revised version of it.

May be qualified by [qualifiedRevision] {+prov:qualifiedRevision ?prov:qualifiedForm} with a [Revision] {+prov:Revision ?prov:qualifiedForm}.

Sub-property of [wasDerivedFrom] {+prov:wasDerivedFrom ?subPropertyOf}.

Inverse: [hadRevision] {prov:inverse}

## wasStartedBy {=prov:wasStartedBy .owl:ObjectProperty label mdp:listed}

> Start is when an activity is deemed to have started. A start may refer to an entity, known as trigger, that initiated the activity. {comment @en}

Connects an [activity] {+prov:Activity ?domain} to an [entity] {+prov:Entity ?range} that initiated it.

May be qualified by a [qualifiedStart] {+prov:qualifiedStart ?prov:qualifiedForm} with [Start] {+prov:Start ?prov:qualifiedForm} attached.

Sub-property of [wasInfluencedBy] {+prov:wasInfluencedBy ?subPropertyOf}.

Inverse: [started] {prov:inverse}

===============

# Datatype Properties

## atTime {=prov:atTime .owl:DatatypeProperty label mdp:listed}

> The time at which an InstantaneousEvent occurred, in the form of xsd:dateTime. {comment @en}

Sets [dateTime] {+xsd:dateTime ?range} for an [InstantaneousEvent] {+prov:InstantaneousEvent ?sharesDefinitionsWith ?domain}.

Inverse: [timeOf] {+prov:timeOf ?inverse}

> This property is not functional because the many values could be at a variety of granularities (In this building, in this room, in that chair). {prov:editorialNote}

## endedAtTime {=prov:endedAtTime .owl:DatatypeProperty label mdp:listed}

> The time at which an activity ended. See also prov:startedAtTime. {comment @en}

Sets ending [dateTime] {+xsd:dateTime ?range} literal for an [activity] {+prov:Activity ?sharesDefinitionsWith ?domain}.

May be qualified by [atTime] {+prov:atTime ?prov:qualifiedForm} in an [End] {+prov:End ?prov:qualifiedForm} attached to the activity.

> It is the intent that the property chain holds: (prov:qualifiedEnd o prov:atTime) rdfs:subPropertyOf prov:endedAtTime. {prov:editorialNote @en}


## generatedAtTime {=prov:generatedAtTime .owl:DatatypeProperty label mdp:listed}

> The time at which an entity was completely created and is available for use. {comment @en}

Sets [dateTime] {+xsd:dateTime ?range} literal for an [entity] {+prov:Entity ?domain}.

May be qualified by [atTime] {+prov:atTime ?prov:qualifiedForm} in a [Generation] {+prov:Generation ?prov:qualifiedForm} attached to the entity.

> It is the intent that the property chain holds: (prov:qualifiedGeneration o prov:atTime) rdfs:subPropertyOf prov:generatedAtTime. {prov:editorialNote @en}


## invalidatedAtTime {=prov:invalidatedAtTime .owl:DatatypeProperty label mdp:listed}

> The time at which an entity was invalidated (i.e., no longer usable). {comment @en}

Sets [dateTime] {+xsd:dateTime ?range} literal for an [entity] {+prov:Entity ?domain}.

May be qualified by [atTime] {+prov:atTime ?prov:qualifiedForm} in an [Invalidation] {+prov:Invalidation ?prov:qualifiedForm} attached to the entity.

> It is the intent that the property chain holds: (prov:qualifiedInvalidation o prov:atTime) rdfs:subPropertyOf prov:invalidatedAtTime. {prov:editorialNote @en}

## startedAtTime {=prov:startedAtTime .owl:DatatypeProperty label mdp:listed}

> The time at which an activity started. See also prov:endedAtTime. {comment @en}

Sets starting [dateTime] {+xsd:dateTime ?range} literal for an [activity] {+prov:Activity ?sharesDefinitionsWith ?domain}.

May be qualified by [atTime] {+prov:atTime ?prov:qualifiedForm} in a [Start] {+prov:Start ?prov:qualifiedForm} attached to the activity.

> It is the intent that the property chain holds: (prov:qualifiedStart o prov:atTime) rdfs:subPropertyOf prov:startedAtTime. {prov:editorialNote @en}

## value {=prov:value .owl:DatatypeProperty label mdp:listed}

> Provides a value that is a direct representation of an entity. {comment @en}

Attaches a value to an [entity] {+prov:Entity ?domain}.

> This property serves the same purpose as rdf:value, but has been reintroduced to avoid some of the definitional ambiguity in the RDF specification (specifically, 'may be used in describing structured values')." {prov:editorialNote}