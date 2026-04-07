[mdp] <https://mdld.js.org/prov/>

# Derivations {=mdp:components#derivations .mdp:Component label}

The second component of PROV-DM is concerned with: derivations of entities from other entities and derivation subtypes WasRevisionOf (Revision), WasQuotedFrom (Quotation), and HasPrimarySource (Primary Source). Figure 6 depicts the third component with PROV core structures in the yellow area, including two classes (Entity, Activity) and binary association WasDerivedFrom (Derivation). PROV extended structures are found outside this area. UML association classes express expanded n-ary relations. The subclasses are marked by the UML stereotype "prov:type" to indicate that the corresponding types are valid values for the attribute prov:type.

![](./component2.png)



## Classes
==========

### Derivation {=prov:Derivation .Class label}

Sub-class of [EntityInfluence] {+prov:EntityInfluence ?subClassOf}.

> A derivation is a transformation of an entity into another, an update of an entity resulting in a new one, or the construction of a new entity based on a pre-existing entity. {prov:definition @en}

> An instance of prov:Derivation provides additional descriptions about the binary prov:wasDerivedFrom relation from some derived prov:Entity to another prov:Entity from which it was derived. For example, :chewed_bubble_gum prov:wasDerivedFrom :unwrapped_bubble_gum; prov:qualifiedDerivation [ a prov:Derivation; prov:entity :unwrapped_bubble_gum; :foo :bar ]. {comment @en}

> The more specific forms of prov:Derivation (i.e., prov:Revision, prov:Quotation, prov:PrimarySource) should be asserted if they apply. {comment @en}

Has 3 sub-classes: [PrimarySource] {+prov:PrimarySource !subClassOf}, [Quotation] {+prov:Quotation !subClassOf} and [Revision] {+prov:Revision !subClassOf}.


### Influence {=prov:Influence .Class label}

> Influence is the capacity of an entity, activity, or agent to have an effect on the character, development, or behavior of another by means of usage, start, end, generation, invalidation, communication, derivation, attribution, association, or delegation. {prov:definition @en}

> An instance of prov:Influence provides additional descriptions about the binary prov:wasInfluencedBy relation from some influenced Activity, Entity, or Agent to the influencing Activity, Entity, or Agent. For example, :stomach_ache prov:wasInfluencedBy :spoon; prov:qualifiedInfluence [ a prov:Influence; prov:entity :spoon; :foo :bar ] . Because prov:Influence is a broad relation, the more specific relations (Communication, Delegation, End, etc.) should be used when applicable. {comment @en}

> Because prov:Influence is a broad relation, its most specific subclasses (e.g. prov:Communication, prov:Delegation, prov:End, prov:Revision, etc.) should be used when applicable. {comment @en}


### PrimarySource {=prov:PrimarySource .Class label}

Sub-class of [Derivation] {+prov:Derivation ?subClassOf}. 

> An instance of prov:PrimarySource provides additional descriptions about the binary prov:hadPrimarySource relation from some secondary prov:Entity to an earlier, primary prov:Entity. For example, :blog prov:hadPrimarySource :newsArticle; prov:qualifiedPrimarySource [ a prov:PrimarySource; prov:entity :newsArticle; :foo :bar ] . {comment @en}

``` {prov:definition @en}
A primary source for a topic refers to something produced by some agent with direct experience and knowledge about the topic, at the time of the topic's study, without benefit from hindsight.

Because of the directness of primary sources, they 'speak for themselves' in ways that cannot be captured through the filter of secondary sources. As such, it is important for secondary sources to reference those primary sources from which they were derived, so that their reliability can be investigated.

A primary source relation is a particular case of derivation of secondary materials from their primary sources. It is recognized that the determination of primary sources can be up to interpretation, and should be done according to conventions accepted within the application's domain.
```


### Quotation {=prov:Quotation .Class label}

Sub-class of [Derivation] {+prov:Derivation ?subClassOf}. 

> A quotation is the repeat of (some or all of) an entity, such as text or image, by someone who may or may not be its original author. Quotation is a particular case of derivation. {prov:definition @en}

> An instance of prov:Quotation provides additional descriptions about the binary prov:wasQuotedFrom relation from some taken prov:Entity from an earlier, larger prov:Entity. For example, :here_is_looking_at_you_kid prov:wasQuotedFrom :casablanca_script; prov:qualifiedQuotation [ a prov:Quotation; prov:entity :casablanca_script; :foo :bar ]. {comment @en}


### Revision {=prov:Revision .Class label}

Sub-class of [Derivation] {+prov:Derivation ?subClassOf}. 

> A revision is a derivation for which the resulting entity is a revised version of some original. The implication here is that the resulting entity contains substantial content from the original. Revision is a particular case of derivation. {prov:definition @en}

> An instance of prov:Revision provides additional descriptions about the binary prov:wasRevisionOf relation from some newer prov:Entity to an earlier prov:Entity. For example, :draft_2 prov:wasRevisionOf :draft_1; prov:qualifiedRevision [ a prov:Revision; prov:entity :draft_1; :foo :bar ]. {comment @en}


## Properties
=============


### hadActivity {+prov:hadActivity .owl:ObjectProperty label mdp:listed}

> The _optional_ Activity of an Influence, which used, generated, invalidated, or was the responsibility of some Entity. This property is _not_ used by ActivityInfluence (use prov:activity instead). {comment}

Multidomain extension to an [influence] {+prov:Influence ?domain} with an [activity] {+prov:Activity ?prov:sharesDefinitionWith ?range} that influenced these processes: 

- Delegation {+prov:Delegation ?domain}, 
- Derivation {+prov:Derivation ?domain}, 
- End {+prov:End ?domain}, 
- Start {+prov:Start ?domain}.

Inverse: [wasActivityOfInfluence] {prov:inverse}


### hadGeneration {=prov:hadGeneration .owl:ObjectProperty label mdp:listed}

> The _optional_ Generation involved in an Entity's Derivation. {comment @en}

Points to an optional explicit [generation] {+prov:Generation ?prov:sharesDefinitionWith ?range} that influenced [derivation] {+prov:Derivation ?domain} of an entity.

Inverse: [generatedAsDerivation] {prov:inverse}.


### hadPrimarySource {=prov:hadPrimarySource .owl:ObjectProperty label mdp:listed}

Connects two [entities] {+prov:Entity ?domain ?range} with a source relation that is a sub-property of [wasDerivedFrom] {+prov:wasDerivedFrom ?subPropertyOf}.

Has a qualified form - [qualifiedPrimarySource] {+prov:qualifiedPrimarySource ?prov:qualifiedForm} that creates an explicit [PrimarySource] {+prov:PrimarySource ?prov:qualifiedForm} relation.

Inverse: [wasPrimarySourceOf] {prov:inverse}


### hadUsage {=prov:hadUsage .owl:ObjectProperty label mdp:listed}

> The _optional_ Usage involved in an Entity's Derivation. {comment @en}

It describes that an entity was [used] {+prov:Usage ?range ?prov:sharesDefinitionWith} during a [Derivation] {+prov:Derivation ?domain}.

Inverse: [wasUsedInDerivation] {prov:inverse}.


### wasDerivedFrom {=prov:wasDerivedFrom .owl:ObjectProperty label mdp:listed}
    
> The more specific subproperties of prov:wasDerivedFrom (i.e., prov:wasQuotedFrom, prov:wasRevisionOf, prov:hadPrimarySource) should be used when applicable. {comment @en}

> A derivation is a transformation of an entity into another, an update of an entity resulting in a new one, or the construction of a new entity based on a pre-existing entity. {comment @en}

Records that one [entity] {+prov:Entity ?domain} was derived from  [another] {+prov:Entity ?range}.

May be qualified by [qualifiedDerivation] {+prov:qualifiedDerivation ?prov:qualifiedForm} with [Derivation] {+prov:Derivation ?prov:qualifiedForm} attached.
    
Sub-property: [wasInfluencedBy] {+prov:wasInfluencedBy ?subPropertyOf}

Inverse: [hadDerivation] {prov:inverse}


### wasQuotedFrom {=prov:wasQuotedFrom .owl:ObjectProperty label mdp:listed}

> An entity is derived from an original entity by copying, or 'quoting', some or all of it. {comment @en}

Connects an [entity] {+prov:Entity ?domain} to another [entity] {+prov:Entity ?range} that is quoted from it.

May be qualified by a [qualifiedQuotation] {+prov:qualifiedQuotation ?prov:qualifiedForm} with [Quotation] {+prov:Quotation ?prov:qualifiedForm} attached.

Sub-property of [wasDerivedFrom] {+prov:wasDerivedFrom ?subPropertyOf}.

Inverse: [quotedAs] {prov:inverse}


### wasRevisionOf {=prov:wasRevisionOf .owl:ObjectProperty label mdp:listed}

> A revision is a derivation that revises an entity into a revised version. {comment @en}

Connects one [entity] {+prov:Entity ?domain} to [another] {+prov:Entity ?range} that is a revised version of it.

May be qualified by [qualifiedRevision] {+prov:qualifiedRevision ?prov:qualifiedForm} with a [Revision] {+prov:Revision ?prov:qualifiedForm}.

Sub-property of [wasDerivedFrom] {+prov:wasDerivedFrom ?subPropertyOf}.

Inverse: [hadRevision] {prov:inverse}


## Qualified Properties
=======================

### qualifiedDerivation {=prov:qualifiedDerivation owl:ObjectProperty label mdp:listed}

> If this Entity prov:wasDerivedFrom Entity :e, then it can qualify how it was derived using prov:qualifiedDerivation [ a prov:Derivation;  prov:entity :e; :foo :bar ]. {comment @en}

Informs that an [entity] {+prov:Entity ?domain} was [derived] {+prov:Derivation ?range ?prov:sharesDefinitionWith} from another entity.

A qualified version of [wasDerivedFrom] {+prov:wasDerivedFrom ?prov:unqualifiedForm}.

Sub-property: [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

Inverse: [qualifiedDerivationOf] {prov:inverse}


### qualifiedInfluence {=prov:qualifiedInfluence owl:ObjectProperty label mdp:listed}

> Because prov:qualifiedInfluence is a broad relation, the more specific relations (qualifiedCommunication, qualifiedDelegation, qualifiedEnd, etc.) should be used when applicable. {comment @en}

Attaches a broad term [influence] {+prov:Influence ?range ?prov:sharesDefinitionWith} to an [entity] {+prov:Entity ?domain}, [activity] {+prov:Activity ?domain} or [agent] {+prov:Agent ?domain}.

Inverse: [qualifiedInfluenceOf] {prov:inverse}

### qualifiedPrimarySource {=prov:qualifiedPrimarySource owl:ObjectProperty label mdp:listed}

> If this Entity prov:hadPrimarySource Entity :e, then it can qualify how using prov:qualifiedPrimarySource [ a prov:PrimarySource; prov:entity :e; :foo :bar ]. {comment @en}

Adds a [PrimarySource] {+prov:PrimarySource ?range ?prov:sharesDefinitionWith} to an [entity] {+prov:Entity ?domain}.

A qualified version of [hadPrimarySource] {+prov:hadPrimarySource ?prov:unqualifiedForm}.

Sub-property: [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

Inverse: [qualifiedSourceOf] {prov:inverse}

### qualifiedQuotation {=prov:qualifiedQuotation owl:ObjectProperty label mdp:listed}

> If this Entity prov:wasQuotedFrom Entity :e, then it can qualify how using prov:qualifiedQuotation [ a prov:Quotation;  prov:entity :e; :foo :bar ]. {comment @en}

Adds a [Quotation] {+prov:Quotation ?range ?prov:sharesDefinitionWith} to an [entity] {+prov:Entity ?domain}.

A qualified version of [wasQuotedFrom] {+prov:wasQuotedFrom ?prov:unqualifiedForm}.

Sub-property: [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

Inverse: [qualifiedQuotationOf] {prov:inverse}

### qualifiedRevision {=prov:qualifiedRevision owl:ObjectProperty label mdp:listed}

> If this Entity prov:wasRevisionOf Entity :e, then it can qualify how it was revised using prov:qualifiedRevision [ a prov:Revision;  prov:entity :e; :foo :bar ]. {comment @en}

Adds a [Revision] {+prov:Revision ?range ?prov:sharesDefinitionWith} to an [entity] {+prov:Entity ?domain}.

A qualified version of [wasRevisionOf] {+prov:wasRevisionOf ?prov:unqualifiedForm}.

Sub-property: [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

Inverse: [revisedEntity] {prov:inverse}
