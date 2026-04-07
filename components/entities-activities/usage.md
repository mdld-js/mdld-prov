[mdp] <https://mdld.js.org/prov/>
[owl] <http://www.w3.org/2002/07/owl#>

# Usage of entities by activities flow

## used {=prov:used .owl:ObjectProperty label}

> A prov:Entity that was used by this prov:Activity. For example, :baking prov:used :spoon, :egg, :oven . {comment @en}

Adds an [entity] {+prov:Entity ?range} to an [activity] {+prov:Activity ?domain}.

May be qualified by [qualifiedUsage] {+prov:qualifiedUsage ?prov:qualifiedForm} with [Usage] {+prov:Usage ?prov:qualifiedForm} attached.

Sub-property: [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

Inverse: [qualifiedUsage] {prov:inverse}

## qualifiedUsage {=prov:qualifiedUsage  owl:ObjectProperty label}

> If this Activity prov:used Entity :e, then it can qualify how it used it using prov:qualifiedUsage [ a prov:Usage; prov:entity :e; :foo :bar ]. {comment @en}

Adds a [Usage] {+prov:Usage ?range ?prov:sharesDefinitionWith} to an [activity] {+prov:Activity ?domain}.

A qualified version of [used] {+prov:used ?prov:unqualifiedForm}.

Sub-property: [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

Inverse: [qualifiedUsingActivity] {prov:inverse}

## Usage {=prov:Usage .Class label}

> Usage is the beginning of utilizing an entity by an activity. Before usage, the activity had not begun to utilize this entity and could not have been affected by the entity. (Note: This definition is formulated for a given usage; it is permitted for an activity to have used a same entity multiple times.) {prov:definition @en}

Sub-class of [EntityInfluence] {+prov:EntityInfluence ?subClassOf} and [InstantaneousEvent] {+prov:InstantaneousEvent ?subClassOf}.

> Given that a usage is the beginning of utilizing an entity, it is instantaneous. {comment @en}

==============

## Summary

The usage flow captures the precise moment when activities begin consuming entities, establishing the fundamental input relationships that drive all transformations. This flow answers the critical question: "What resources did this activity use, and when did that consumption begin?"

Usage marks the instantaneous transition when entities move from being passive resources to active inputs that influence activity behavior. This temporal precision enables powerful dependency tracking across computational workflows, manufacturing processes, and research pipelines. By capturing the exact moment resources become available to activities, the flow supports sophisticated analysis of resource consumption patterns, process optimization, and audit trail maintenance.

The bidirectional used relationship provides flexible querying - both "What did this activity consume?" and "Which activities used this resource?" - while qualified Usage classes enrich these relationships with contextual depth about how, where, and under what conditions resources were applied. This combination of precise timing and contextual richness transforms simple resource tracking into meaningful provenance narratives that support optimization, debugging, and compliance reporting.
