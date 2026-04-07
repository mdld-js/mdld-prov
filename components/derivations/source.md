[mdp] <https://mdld.js.org/prov/>
[owl] <http://www.w3.org/2002/07/owl#>

# Primary Source flow
=======================

## hadPrimarySource {=prov:hadPrimarySource .owl:ObjectProperty label}

Connects two [entities] {+prov:Entity ?domain ?range} with a source relation that is a sub-property of [wasDerivedFrom] {+prov:wasDerivedFrom ?subPropertyOf}.

Has a qualified form - [qualifiedPrimarySource] {+prov:qualifiedPrimarySource ?prov:qualifiedForm} that creates an explicit [PrimarySource] {+prov:PrimarySource ?prov:qualifiedForm} relation.

Inverse: [wasPrimarySourceOf] {prov:inverse}

## qualifiedPrimarySource {=prov:qualifiedPrimarySource owl:ObjectProperty label}

> If this Entity prov:hadPrimarySource Entity :e, then it can qualify how using prov:qualifiedPrimarySource [ a prov:PrimarySource; prov:entity :e; :foo :bar ]. {comment @en}

Adds a [PrimarySource] {+prov:PrimarySource ?range ?prov:sharesDefinitionWith} to an [entity] {+prov:Entity ?domain}.

A qualified version of [hadPrimarySource] {+prov:hadPrimarySource ?prov:unqualifiedForm}.

Sub-property: [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

Inverse: [qualifiedSourceOf] {prov:inverse}

## PrimarySource {=prov:PrimarySource .Class label}

Sub-class of [Derivation] {+prov:Derivation ?subClassOf}. 

> An instance of prov:PrimarySource provides additional descriptions about the binary prov:hadPrimarySource relation from some secondary prov:Entity to an earlier, primary prov:Entity. For example, :blog prov:hadPrimarySource :newsArticle; prov:qualifiedPrimarySource [ a prov:PrimarySource; prov:entity :newsArticle; :foo :bar ] . {comment @en}

``` {prov:definition @en}
A primary source for a topic refers to something produced by some agent with direct experience and knowledge about the topic, at the time of the topic's study, without benefit from hindsight.

Because of the directness of primary sources, they 'speak for themselves' in ways that cannot be captured through the filter of secondary sources. As such, it is important for secondary sources to reference those primary sources from which they were derived, so that their reliability can be investigated.

A primary source relation is a particular case of derivation of secondary materials from their primary sources. It is recognized that the determination of primary sources can be up to interpretation, and should be done according to conventions accepted within the application's domain.
```

