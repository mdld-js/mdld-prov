[mdp] <https://mdld.js.org/prov/>
[owl] <http://www.w3.org/2002/07/owl#>

# Revision flow
================

## wasRevisionOf {=prov:wasRevisionOf .owl:ObjectProperty label}

> A revision is a derivation that revises an entity into a revised version. {comment @en}

Connects one [entity] {+prov:Entity ?domain} to [another] {+prov:Entity ?range} that is a revised version of it.

May be qualified by [qualifiedRevision] {+prov:qualifiedRevision ?prov:qualifiedForm} with a [Revision] {+prov:Revision ?prov:qualifiedForm}.

Sub-property of [wasDerivedFrom] {+prov:wasDerivedFrom ?subPropertyOf}.

Inverse: [hadRevision] {prov:inverse}

## qualifiedRevision {=prov:qualifiedRevision owl:ObjectProperty label}

> If this Entity prov:wasRevisionOf Entity :e, then it can qualify how it was revised using prov:qualifiedRevision [ a prov:Revision;  prov:entity :e; :foo :bar ]. {comment @en}

Adds a [Revision] {+prov:Revision ?range ?prov:sharesDefinitionWith} to an [entity] {+prov:Entity ?domain}.

A qualified version of [wasRevisionOf] {+prov:wasRevisionOf ?prov:unqualifiedForm}.

Sub-property: [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

Inverse: [revisedEntity] {prov:inverse}

## Revision {=prov:Revision .Class label}

Sub-class of [Derivation] {+prov:Derivation ?subClassOf}. 

> A revision is a derivation for which the resulting entity is a revised version of some original. The implication here is that the resulting entity contains substantial content from the original. Revision is a particular case of derivation. {prov:definition @en}

> An instance of prov:Revision provides additional descriptions about the binary prov:wasRevisionOf relation from some newer prov:Entity to an earlier prov:Entity. For example, :draft_2 prov:wasRevisionOf :draft_1; prov:qualifiedRevision [ a prov:Revision; prov:entity :draft_1; :foo :bar ]. {comment @en}

