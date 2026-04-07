[mdp] <https://mdld.js.org/prov/>

# Agents, responsibility and influence {=mdp:components#agents-responsibility .mdp:Component label}

![](./component3.png)

![](./Component3b.png)

## Agent flow
=============

### Agent {=prov:Agent .Class label}

> An agent is something that bears some form of responsibility for an activity taking place, for the existence of an entity, or for another agent's activity. {prov:definition @en}

**Disjoint with:** [InstantaneousEvent] {+prov:InstantaneousEvent !owl:disjointWith}

### Person {=prov:Person .Class label}

Subclass of [Agent] {+prov:Agent ?subClassOf}

> Person agents are people. {prov:definition}

### Organization {=prov:Organization .Class label}

Subclass of [Agent] {+prov:Agent ?subClassOf}

> An organization is a social or legal institution such as a company, society, etc. {prov:definition}

### SoftwareAgent {=prov:SoftwareAgent .Class label}

Subclass of [Agent] {+prov:Agent ?subClassOf}

> A software agent is running software. {prov:definition}



## Association flow
======================

### wasAssociatedWith {=prov:wasAssociatedWith .owl:ObjectProperty label mdp:listed}

> An prov:Agent that had some (unspecified) responsibility for the occurrence of this prov:Activity. {comment @en}

Adds an [agent] {+prov:Agent ?range} to an [activity] {+prov:Activity ?domain}.

May be qualified by [qualifiedAssociation] {+prov:qualifiedAssociation ?prov:qualifiedForm} with [Association] {+prov:Association ?prov:qualifiedForm} attached.

Sub-property: [wasAssociateFor] {+prov:wasAssociateFor ?subPropertyOf}

Inverse: [wasAssociateFor] {prov:inverse}

### qualifiedAssociation {=prov:qualifiedAssociation .owl:ObjectProperty label mdp:listed}

> If this Activity prov:wasAssociatedWith Agent :ag, then it can qualify the Association using prov:qualifiedAssociation [ a prov:Association;  prov:agent :ag; :foo :bar ]. {comment @en}

As a qualified form of [wasAssociatedWith] {+prov:wasAssociatedWith ?prov:unqualifiedForm} it describes that an activity was [associated] {+prov:Association ?range ?prov:sharesDefinitionWith} with an [activity] {+prov:Activity ?domain}.

Sub-property of [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}.

Inverse: [qualifiedAssociationOf] {prov:inverse}.

### Association {=prov:Association .Class label}

Sub-class of [AgentInfluence] {+prov:AgentInfluence ?subClassOf}

> An activity association is an assignment of responsibility to an agent for an activity, indicating that the agent had a role in the activity. It further allows for a plan to be specified, which is the plan intended by the agent to achieve some goals in the context of this activity. {prov:definition}

> An instance of prov:Association provides additional descriptions about the binary prov:wasAssociatedWith relation from an prov:Activity to some prov:Agent that had some responsiblity for it. For example, :baking prov:wasAssociatedWith :baker; prov:qualifiedAssociation [ a prov:Association; prov:agent :baker; :foo :bar ]. {comment @en}

### hadPlan {=prov:hadPlan .owl:ObjectProperty label mdp:listed}

> The _optional_ Plan adopted by an Agent in Association with some Activity. Plan specifications are out of the scope of this specification. {comment @en}

Is used to connect [Association] {+prov:Association ?domain} to a [Plan] {+prov:Plan ?range ?prov:sharesDefinitionWith}.

Inverse: [wasPlanOf] {prov:inverse}

### Plan {=prov:Plan .Class label}

Sub-class of [Entity] {+prov:Entity ?subClassOf}

> A plan is an entity that represents a set of actions or steps intended by one or more agents to achieve some goals. {prov:definition @en}

> There exist no prescriptive requirement on the nature of plans, their representation, the actions or steps they consist of, or their intended goals. Since plans may evolve over time, it may become necessary to track their provenance, so plans themselves are entities. Representing the plan explicitly in the provenance can be useful for various tasks: for example, to validate the execution as represented in the provenance record, to manage expectation failures, or to provide explanations. {comment @en}

### hadRole {=prov:hadRole .owl:ObjectProperty label mdp:listed}

> The _optional_ Role that an Entity assumed in the context of an Activity. For example, :baking prov:used :spoon; prov:qualified [ a prov:Usage; prov:entity :spoon; prov:hadRole roles:mixing_implement ]. {comment @en}

It describes that an entity assumed a [Role] {+prov:Role ?range ?prov:sharesDefinitionWith} during an [Influence] {+prov:Influence ?domain} or [Association] {+prov:Association ?domain} or [InstantaneousEvent] {+prov:InstantaneousEvent ?domain} in general.

Inverse: [wasRoleIn] {prov:inverse}.

### Role {=prov:Role .Class label}

> A role is the function of an entity or agent with respect to an activity, in the context of a usage, generation, invalidation, association, start, and end. {prov:definition}

See also [hadRole] {+prov:hadRole ?seeAlso}.


## Responsibility flow
======================


### actedOnBehalfOf {=prov:actedOnBehalfOf .owl:ObjectProperty label mdp:listed}

> An object property to express the accountability of an agent towards another agent. The subordinate agent acted on behalf of the responsible agent in an actual activity {comment @en}

Connects one [Agent] {+prov:Agent ?domain} to another [Agent] {+prov:Agent ?range} with a [delegation] {+prov:Delegation ?qualifiedForm} relation that is a sub-property of the [wasInfluencedBy] {+prov:wasInfluencedBy ?subPropertyOf} property.

It's qualified form is the [qualifiedDelegation] {+prov:qualifiedDelegation ?qualifiedForm} property.

Inverse: not defined explicitly, rather a recommended name for use in additional ontologies if necessary - [hadDelegate] {prov:inverse}.

### qualifiedDelegation {=prov:qualifiedDelegation .owl:ObjectProperty label mdp:listed}

> If this Agent prov:actedOnBehalfOf Agent :ag, then it can qualify how with prov:qualifiedResponsibility [ a prov:Responsibility;  prov:agent :ag; :foo :bar ]. {comment @en}

Connects an [agent] {+prov:Agent ?domain} to a [delegation] {+prov:Delegation ?range ?prov:sharesDefinitionWith}.

Sub-property of [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}.

Inverse: [qualifiedDelegationOf] {prov:inverse}

### Delegation {=prov:Delegation .Class label}

Sub-class of [AgentInfluence] {+prov:AgentInfluence ?subClassOf}

> An instance of prov:Delegation provides additional descriptions about the binary prov:actedOnBehalfOf relation from a performing prov:Agent to some prov:Agent for whom it was performed. For example, :mixing prov:wasAssociatedWith :toddler . :toddler prov:actedOnBehalfOf :mother; prov:qualifiedDelegation [ a prov:Delegation; prov:entity :mother; :foo :bar ]. {comment @en}

``` {prov:definition @en}
Delegation is the assignment of authority and responsibility to an agent (by itself or by another agent) to carry out a specific activity as a delegate or representative, while the agent it acts on behalf of retains some responsibility for the outcome of the delegated work.

For example, a student acted on behalf of his supervisor, who acted on behalf of the department chair, who acted on behalf of the university; all those agents are responsible in some way for the activity that took place but we do not say explicitly who bears responsibility and to what degree.
```



## Attribution flow
===================

### wasAttributedTo {=prov:wasAttributedTo .owl:ObjectProperty label mdp:listed}

Sub-property of [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

> Attribution is the ascribing of an entity to an agent. {comment @en}

Adds an [agent] {+prov:Agent ?range} to an [entity] {+prov:Entity ?domain}.

May be qualified by [qualifiedAttribution] {+prov:qualifiedAttribution ?prov:qualifiedForm} with [Attribution] {+prov:Attribution ?prov:qualifiedForm} attached.

Inverse: [qualifiedAttribution] {prov:inverse}

### qualifiedAttribution {=prov:qualifiedAttribution .owl:ObjectProperty label mdp:listed}

> If this Entity prov:wasAttributedTo Agent :ag, then it can qualify how it was influenced using prov:qualifiedAttribution [ a prov:Attribution;  prov:agent :ag; :foo :bar ]. {comment @en}

As a qualified form of [wasAttributedTo] {+prov:wasAttributedTo ?prov:unqualifiedForm} it describes that an entity was [attributed] {+prov:Attribution ?range ?prov:sharesDefinitionWith} to an [entity] {+prov:Entity ?domain}.

Sub-property of [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}.

Inverse: [qualifiedAttributionOf] {prov:inverse}.


### Attribution {=prov:Attribution .Class label}

Sub-class of [AgentInfluence] {+prov:AgentInfluence ?subClassOf}

> Attribution is the ascribing of an entity to an agent.

> When an entity e is attributed to agent ag, entity e was generated by some unspecified activity that in turn was associated to agent ag. Thus, this relation is useful when the activity is not known, or irrelevant. {prov:definition @en}

> An instance of prov:Attribution provides additional descriptions about the binary prov:wasAttributedTo relation from an prov:Entity to some prov:Agent that had some responsible for it. For example, :cake prov:wasAttributedTo :baker; prov:qualifiedAttribution [ a prov:Attribution; prov:entity :baker; :foo :bar ]. {comment @en} 


## Influence flow
=================

### wasInfluencedBy {=prov:wasInfluencedBy .owl:ObjectProperty label mdp:listed}

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

### ActivityInfluence** {=prov:ActivityInfluence.Class label}

Sub-class of [Influence] {+prov:Influence ?subClassOf}

> ActivityInfluence provides additional descriptions of an Activity's binary influence upon any other kind of resource. Instances of ActivityInfluence use the prov:activity property to cite the influencing Activity. {comment @en}

> It is not recommended that the type ActivityInfluence be asserted without also asserting one of its more specific subclasses. {comment @en}

Disjoint with [EntityInfluence] {+prov:EntityInfluence ?owl:disjointWith}.

See also: [activity] {+prov:activity ?seeAlso}

> ActivitiyInfluence is the capacity of an activity to have an effect on the character, development, or behavior of another by means of generation, invalidation, communication, or other. {prov:editorsDefinition @en}

### AgentInfluence {=prov:AgentInfluence .Class label}

Sub-class of [Influence] {+prov:Influence ?subClassOf}

> AgentInfluence provides additional descriptions of an Agent's binary influence upon any other kind of resource. Instances of AgentInfluence use the prov:agent property to cite the influencing Agent. {comment @en}

> AgentInfluence is the capacity of an agent to have an effect on the character, development, or behavior of another by means of attribution, association, delegation, or other. {prov:editorsDefinition @en}

### EntityInfluence {=prov:EntityInfluence .Class label}

Sub-class of [Influence] {+prov:Influence ?subClassOf}.

> EntityInfluence is the capacity of an entity to have an effect on the character, development, or behavior of another by means of usage, start, end, derivation, or other. {prov:editorsDefinition @en}

> EntityInfluence provides additional descriptions of an Entity's binary influence upon any other kind of resource. Instances of EntityInfluence use the prov:entity property to cite the influencing Entity. {comment @en}

> It is not recommended that the type EntityInfluence be asserted without also asserting one of its more specific subclasses. {comment @en}


### influenced {=prov:influenced .owl:ObjectProperty label mdp:listed}

Inverse: [wasInfluencedBy] {prov:inverse} with a defined [inverse] {+prov:wasInfluencedBy ?owl:inverseOf}.

See [Influence] {+prov:Influence ?prov:sharesDefinitionWith}

### influencer {=prov:influencer .owl:ObjectProperty label mdp:listed}

> Subproperties of prov:influencer are used to cite the object of an unqualified PROV-O triple whose predicate is a subproperty of prov:wasInfluencedBy (e.g. prov:used, prov:wasGeneratedBy). prov:influencer is used much like rdf:object is used. {comment @en}

Clarifies an [Influence] {+prov:Influence ?domain} with what was that [thing] {+owl:Thing ?range} that made the influence.

Inverse: [hadInfluence] {prov:inverse}.

> This property and its subproperties are used in the same way as the rdf:object property, i.e. to reference the object of an unqualified prov:wasInfluencedBy or prov:influenced triple. {prov:editorialNote @en}

> This property is used as part of the qualified influence pattern. Subclasses of prov:Influence use these subproperties to reference the resource (Entity, Agent, or Activity) whose influence is being qualified. {prov:editorialNote @en}


### activity {=prov:activity .owl:ObjectProperty label mdp:listed}

Applies to [Activities] {+prov:Activity ?range} as a sub-property of [influencer] {+prov:influencer ?subPropertyOf} - it references an [Activity] that influenced a resource. 

> This property behaves in spirit like rdf:object; it references the object of a prov:wasInfluencedBy triple. {prov:editorialNote @en}

> The prov:activity property references an prov:Activity which influenced a resource. This property applies to an prov:ActivityInfluence, which is given by a subproperty of prov:qualifiedInfluence from the influenced prov:Entity, prov:Activity or prov:Agent. {prov:editorsDefinition @en}

Inverse: [activityOfInfluence] {prov:inverse}

### agent {=prov:agent .owl:ObjectProperty label mdp:listed}

Points to [Agents] {+prov:Agent ?range} from the [AgentInfluence] {+prov:AgentInfluence ?domain} qualified relations that are sub-properties of the [influencer] {+prov:influencer ?subPropertyOf} property.

> This property behaves in spirit like rdf:object; it references the object of a prov:wasInfluencedBy triple. {prov:editorialNote @en}

> The prov:agent property references an prov:Agent which influenced a resource. This property applies to an prov:AgentInfluence, which is given by a subproperty of prov:qualifiedInfluence from the influenced prov:Entity, prov:Activity or prov:Agent. {prov:editorsDefinition @en}

Inverse: [agentOfInfluence] {prov:inverse}


### entity {=prov:entity .owl:ObjectProperty label mdp:listed}

A qualified [EntityInfluence] {+prov:EntityInfluence ?domain} uses this relation to point to an [entity] {+prov:Entity} that influences an entity/agent/activity with some [influence] {+prov:influencer ?subPropertyOf}.

Inverse: [entityOfInfluence] {prov:inverse}

> This property behaves in spirit like rdf:object; it references the object of a prov:wasInfluencedBy triple. {prov:editorialNote @en}

> The prov:entity property references an prov:Entity which influenced a resource. This property applies to an prov:EntityInfluence, which is given by a subproperty of prov:qualifiedInfluence from the influenced prov:Entity, prov:Activity or prov:Agent. {prov:editorsDefinition @en}

## Summary

The PROV-O Agents, Responsibility and Influence component models the "who" and "why" of provenance through a comprehensive framework of agent types, responsibility relationships, and influence mechanisms. The component is organized into clear flows that establish agent hierarchies and their various modes of influence.

**Flow Architecture:**
Each agent-related flow follows the provenance pattern of binary relations, qualified forms, and influence classes, creating consistent and predictable modeling approaches.

**Core Flows:**

**1. Agent Flow** - Foundation of all provenance actors
- **Agent Hierarchy**: `Agent` → `Person`, `Organization`, `SoftwareAgent`
- Establishes the fundamental types of provenance actors
- Provides the "who" for all provenance statements
- Disjoint from `InstantaneousEvent` to maintain clear semantic boundaries

**2. Association Flow** - Agent participation in activities
- `wasAssociatedWith` → `qualifiedAssociation` → `Association`
- **Enhancement Properties**: `hadPlan` → `Plan`, `hadRole` → `Role`
- Models how agents participate in and take responsibility for activities
- Supports plan-based activity execution and role-based participation
- Example: Baker associated with baking activity using recipe plan

**3. Responsibility Flow** - Hierarchical accountability
- `actedOnBehalfOf` → `qualifiedDelegation` → `Delegation`
- Models chains of responsibility and authority delegation
- Supports multi-level accountability (student → supervisor → department → university)
- Maintains responsibility while allowing task delegation
- Sub-property of `wasInfluencedBy` for influence framework integration

**4. Attribution Flow** - Entity-to-agent responsibility
- `wasAttributedTo` → `qualifiedAttribution` → `Attribution`
- Ascribes entities to agents when the specific activity is unknown or irrelevant
- Provides direct entity-agent responsibility links
- Useful for authorship and ownership attribution
- Sub-property of `qualifiedInfluence`

**5. Influence Flow** - Cross-cutting influence framework
- `wasInfluencedBy` → `qualifiedInfluence` → `Influence`
- **Specialized Influence Types**: `ActivityInfluence`, `AgentInfluence`, `EntityInfluence`
- **Supporting Properties**: `influencer`, `influenced`, `activity`, `agent`, `entity`
- Provides the foundational influence mechanism for all other flows
- Connects agents, entities, and activities in flexible influence relationships

**Key Relationships:**
```
Influence (broadest)
├── ActivityInfluence (activity-based influence)
├── AgentInfluence (agent-based influence)
│   ├── Association (activity participation)
│   ├── Delegation (responsibility chains)
│   └── Attribution (entity responsibility)
└── EntityInfluence (entity-based influence)
```

**Benefits of Flow Organization:**
- Clear separation of agent responsibility concepts
- Consistent binary→qualified→influence patterns
- Hierarchical responsibility modeling
- Cross-cutting influence framework
- Comprehensive agent type support
- Flexible role and plan integration

