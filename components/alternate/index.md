[mdp] <https://mdld.js.org/prov/>

# Alternate {=mdp:components#alternate .mdp:Component label}

![](./component5.png)


## alternateOf {=prov:alternateOf .owl:ObjectProperty label mdp:listed}

Connects two [entities] {+prov:Entity ?domain ?range} as describing the same thing from multiple perspectives - a sub-property of the [alternate] {+prov:alternate ?subPropertyOf} property - it's a [symmetrical] {+prov:alternateOf ?prov:inverse} relation.

> Two alternate entities present aspects of the same thing. These aspects may be the same or different, and the alternate entities may or may not overlap in time. {comment @en}

Related: [specializationOf] {+prov:specializationOf ?seeAlso}

## specializationOf {=prov:specializationOf .owl:ObjectProperty label mdp:listed}

> An entity that is a specialization of another shares all aspects of the latter, and additionally presents more specific aspects of the same thing as the latter. In particular, the lifetime of the entity being specialized contains that of any specialization. Examples of aspects include a time period, an abstraction, and a context associated with the entity. {comment @en}

Connects two [entities] {+prov:Entity ?range ?domain} where one is a more specific version of the other.

Sub-property: [alternateOf] {+prov:alternateOf ?subPropertyOf ?seeAlso}

Inverse: [generalizationOf] {prov:inverse}

## Summary

The PROV-O Alternate component provides mechanisms for expressing relationships between entities that represent the same thing in different ways. It enables precise modeling of how entities relate through alternation and specialization.

**Core Relations:**
- **alternateOf**: Symmetric relation between entities describing the same thing from different perspectives
- **specializationOf**: Asymmetric relation where one entity is a more specific version of another

**Key Characteristics:**
- **Multiple Perspectives**: `alternateOf` handles different representations, formats, or viewpoints of the same underlying thing
- **Hierarchical Refinement**: `specializationOf` models entity refinement with additional specific aspects
- **Temporal Containment**: Specializations exist within the lifetime of their generalizations

**Use Cases:**
- Document format conversions (PDF, Word, HTML versions)
- Dataset representations (raw, processed, summarized)
- Software versions and variants
- Context-specific entity views

**Benefits:**
- Clear provenance for entity relationships
- Support for format and abstraction tracking
- Hierarchical entity organization
- Temporal relationship modeling