[mdp] <https://mdld.js.org/prov/>
[owl] <http://www.w3.org/2002/07/owl#>

# Derivation flow
==================

## wasDerivedFrom {=prov:wasDerivedFrom .owl:ObjectProperty label}
    
> The more specific subproperties of prov:wasDerivedFrom (i.e., prov:wasQuotedFrom, prov:wasRevisionOf, prov:hadPrimarySource) should be used when applicable. {comment @en}

> A derivation is a transformation of an entity into another, an update of an entity resulting in a new one, or the construction of a new entity based on a pre-existing entity. {comment @en}

Records that one [entity] {+prov:Entity ?domain} was derived from  [another] {+prov:Entity ?range}.

May be qualified by [qualifiedDerivation] {+prov:qualifiedDerivation ?prov:qualifiedForm} with [Derivation] {+prov:Derivation ?prov:qualifiedForm} attached.
    
Sub-property: [wasInfluencedBy] {+prov:wasInfluencedBy ?subPropertyOf}

Inverse: [hadDerivation] {prov:inverse}

## qualifiedDerivation {=prov:qualifiedDerivation owl:ObjectProperty label}

> If this Entity prov:wasDerivedFrom Entity :e, then it can qualify how it was derived using prov:qualifiedDerivation [ a prov:Derivation;  prov:entity :e; :foo :bar ]. {comment @en}

Informs that an [entity] {+prov:Entity ?domain} was [derived] {+prov:Derivation ?range ?prov:sharesDefinitionWith} from another entity.

A qualified version of [wasDerivedFrom] {+prov:wasDerivedFrom ?prov:unqualifiedForm}.

Sub-property: [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

Inverse: [qualifiedDerivationOf] {prov:inverse}

## Derivation {=prov:Derivation .Class label}

Sub-class of [EntityInfluence] {+prov:EntityInfluence ?subClassOf}.

> A derivation is a transformation of an entity into another, an update of an entity resulting in a new one, or the construction of a new entity based on a pre-existing entity. {prov:definition @en}

> An instance of prov:Derivation provides additional descriptions about the binary prov:wasDerivedFrom relation from some derived prov:Entity to another prov:Entity from which it was derived. For example, :chewed_bubble_gum prov:wasDerivedFrom :unwrapped_bubble_gum; prov:qualifiedDerivation [ a prov:Derivation; prov:entity :unwrapped_bubble_gum; :foo :bar ]. {comment @en}

> The more specific forms of prov:Derivation (i.e., prov:Revision, prov:Quotation, prov:PrimarySource) should be asserted if they apply. {comment @en}

Has 3 sub-classes: [PrimarySource] {+prov:PrimarySource !subClassOf}, [Quotation] {+prov:Quotation !subClassOf} and [Revision] {+prov:Revision !subClassOf}.

## hadGeneration {=prov:hadGeneration .owl:ObjectProperty label}

> The _optional_ Generation involved in an Entity's Derivation. {comment @en}

Points to an optional explicit [generation] {+prov:Generation ?prov:sharesDefinitionWith ?range} that influenced [derivation] {+prov:Derivation ?domain} of an entity.

Inverse: [generatedAsDerivation] {prov:inverse}.

### hadUsage {=prov:hadUsage .owl:ObjectProperty label}

> The _optional_ Usage involved in an Entity's Derivation. {comment @en}

It describes that an entity was [used] {+prov:Usage ?range ?prov:sharesDefinitionWith} during a [Derivation] {+prov:Derivation ?domain}.

Inverse: [wasUsedInDerivation] {prov:inverse}.

