[mdp] <https://mdld.js.org/prov/>
[owl] <http://www.w3.org/2002/07/owl#>

# Influence flow
=================

## hadActivity {+prov:hadActivity .owl:ObjectProperty label}

> The _optional_ Activity of an Influence, which used, generated, invalidated, or was the responsibility of some Entity. This property is _not_ used by ActivityInfluence (use prov:activity instead). {comment}

Multidomain extension to an [influence] {+prov:Influence ?domain} with an [activity] {+prov:Activity ?prov:sharesDefinitionWith ?range} that influenced these processes: 

- Delegation {+prov:Delegation ?domain}, 
- Derivation {+prov:Derivation ?domain}, 
- End {+prov:End ?domain}, 
- Start {+prov:Start ?domain}.

Inverse: [wasActivityOfInfluence] {prov:inverse}


## qualifiedInfluence {=prov:qualifiedInfluence owl:ObjectProperty label}

> Because prov:qualifiedInfluence is a broad relation, the more specific relations (qualifiedCommunication, qualifiedDelegation, qualifiedEnd, etc.) should be used when applicable. {comment @en}

Attaches a broad term [influence] {+prov:Influence ?range ?prov:sharesDefinitionWith} to an [entity] {+prov:Entity ?domain}, [activity] {+prov:Activity ?domain} or [agent] {+prov:Agent ?domain}.

Inverse: [qualifiedInfluenceOf] {prov:inverse}

## Influence {=prov:Influence .Class label}

> Influence is the capacity of an entity, activity, or agent to have an effect on the character, development, or behavior of another by means of usage, start, end, generation, invalidation, communication, derivation, attribution, association, or delegation. {prov:definition @en}

> An instance of prov:Influence provides additional descriptions about the binary prov:wasInfluencedBy relation from some influenced Activity, Entity, or Agent to the influencing Activity, Entity, or Agent. For example, :stomach_ache prov:wasInfluencedBy :spoon; prov:qualifiedInfluence [ a prov:Influence; prov:entity :spoon; :foo :bar ] . Because prov:Influence is a broad relation, the more specific relations (Communication, Delegation, End, etc.) should be used when applicable. {comment @en}

> Because prov:Influence is a broad relation, its most specific subclasses (e.g. prov:Communication, prov:Delegation, prov:End, prov:Revision, etc.) should be used when applicable. {comment @en}

