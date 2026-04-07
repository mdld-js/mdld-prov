[mdp] <https://mdld.js.org/prov/>
[owl] <http://www.w3.org/2002/07/owl#>

# Quotation flow
=================

## wasQuotedFrom {=prov:wasQuotedFrom .owl:ObjectProperty label}

> An entity is derived from an original entity by copying, or 'quoting', some or all of it. {comment @en}

Connects an [entity] {+prov:Entity ?domain} to another [entity] {+prov:Entity ?range} that is quoted from it.

May be qualified by a [qualifiedQuotation] {+prov:qualifiedQuotation ?prov:qualifiedForm} with [Quotation] {+prov:Quotation ?prov:qualifiedForm} attached.

Sub-property of [wasDerivedFrom] {+prov:wasDerivedFrom ?subPropertyOf}.

Inverse: [quotedAs] {prov:inverse}

## qualifiedQuotation {=prov:qualifiedQuotation owl:ObjectProperty label}

> If this Entity prov:wasQuotedFrom Entity :e, then it can qualify how using prov:qualifiedQuotation [ a prov:Quotation;  prov:entity :e; :foo :bar ]. {comment @en}

Adds a [Quotation] {+prov:Quotation ?range ?prov:sharesDefinitionWith} to an [entity] {+prov:Entity ?domain}.

A qualified version of [wasQuotedFrom] {+prov:wasQuotedFrom ?prov:unqualifiedForm}.

Sub-property: [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

Inverse: [qualifiedQuotationOf] {prov:inverse}

## Quotation {=prov:Quotation .Class label}

Sub-class of [Derivation] {+prov:Derivation ?subClassOf}. 

> A quotation is the repeat of (some or all of) an entity, such as text or image, by someone who may or may not be its original author. Quotation is a particular case of derivation. {prov:definition @en}

> An instance of prov:Quotation provides additional descriptions about the binary prov:wasQuotedFrom relation from some taken prov:Entity from an earlier, larger prov:Entity. For example, :here_is_looking_at_you_kid prov:wasQuotedFrom :casablanca_script; prov:qualifiedQuotation [ a prov:Quotation; prov:entity :casablanca_script; :foo :bar ]. {comment @en}