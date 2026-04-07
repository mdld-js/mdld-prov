[mdp] <https://mdld.js.org/prov/>

# Collections {=mdp:components#collections .mdp:Component label}

The sixth component of PROV-DM is concerned with the notion of collections. A collection is an entity that has some members. The members are themselves entities, and therefore their provenance can be expressed. Some applications need to be able to express the provenance of the collection itself: e.g. who maintains the collection (attribution), which members it contains as it evolves, and how it was assembled. The purpose of Component 6 is to define the types and relations that are useful to express the provenance of collections. 

![](./component6.png)

## Collection {=prov:Collection .Class label}

Sub-class of [Entity] {+prov:Entity ?subClassOf}

> A collection is an entity that provides a structure to some constituents, which are themselves entities. These constituents are said to be member of the collections. {prov:definition @en}

The prov:Collection [entity] {+prov:Entity ?subClassOf} class can be used to express the provenance of the collection itself: e.g. who maintained the collection, which members it contained as it evolved, and how it was assembled. The prov:hadMember property is used to assert membership in a collection.

Has a subclass - **Empty Collection** {=prov:EmptyCollection .Class label !subClassOf} - *An empty collection is a collection without members.* {prov:definition @en}

## hadMember {=prov:hadMember .owl:ObjectProperty label mdp:listed}

Connects a [Collection] {+prov:Collection ?domain ?prov:sharesDefinitionWith} to its [member] {+prov:Entity ?range} with a relation that is a sub-property of [wasInfluencedBy] {+prov:wasInfluencedBy ?subPropertyOf}.

Inverse: [wasMemberOf] {prov:inverse}