[mdp] <https://mdld.js.org/prov/>
[owl] <http://www.w3.org/2002/07/owl#>

# Core flow

## Entity {=prov:Entity .Class label}

> An entity is a physical, digital, conceptual, or other kind of thing with some fixed aspects; entities may be real or imaginary. {prov:definition @en}

**Disjoint with:** [InstantaneousEvent] {+prov:InstantaneousEvent ?owl:disjointWith}

## value {=prov:value .owl:DatatypeProperty label}

> Provides a value that is a direct representation of an entity. {comment @en}

Attaches a value to an [entity] {+prov:Entity ?domain}.

> This property serves the same purpose as rdf:value, but has been reintroduced to avoid some of the definitional ambiguity in the RDF specification (specifically, 'may be used in describing structured values')." {prov:editorialNote}

## Activity {=prov:Activity .Class label}

> An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities. {prov:definition @en}

> An activity is not an entity. This distinction is similar to the distinction between 'continuant' and 'occurrent' in logic. {comment @en}

Disjoint with [Entity] {+prov:Entity ?owl:disjointWith}

## InstantaneousEvent {=prov:InstantaneousEvent .Class label}

> The PROV data model is implicitly based on a notion of instantaneous events (or just events), that mark transitions in the world. Events include generation, usage, or invalidation of entities, as well as starting or ending of activities. This notion of event is not first-class in the data model, but it is useful for explaining its other concepts and its semantics. {prov:definition}

> An instantaneous event, or event for short, happens in the world and marks a change in the world, in its activities and in its entities. The term 'event' is commonly used in process algebra with a similar meaning. Events represent communications or interactions; they are assumed to be atomic and instantaneous. {comment}

## atTime {=prov:atTime .owl:DatatypeProperty label}

> The time at which an InstantaneousEvent occurred, in the form of xsd:dateTime. {comment @en}

Sets [dateTime] {+xsd:dateTime ?range} for an [InstantaneousEvent] {+prov:InstantaneousEvent ?sharesDefinitionsWith ?domain}.

Inverse: [timeOf] {+prov:timeOf ?inverse}

> This property is not functional because the many values could be at a variety of granularities (In this building, in this room, in that chair). {prov:editorialNote}

## atLocation {=prov:atLocation .owl:ObjectProperty label}

> The Location of any resource. {comment @en}

Points to a [Location] {+prov:Location ?range ?prov:sharesDefinitionWith} from [Activity] {+prov:Activity ?domain}, [Agent] {+prov:Agent ?domain}, [Entity] {+prov:Entity ?domain}, or [InstantaneousEvent] {+prov:InstantaneousEvent ?domain}.

Inverse: [locationOf] {prov:inverse}.

> The naming of prov:atLocation parallels prov:atTime, and is not named prov:hadLocation to avoid conflicting with the convention that prov:had* properties are used on prov:Influence classes. {prov:editorialNote}

## Location {=prov:Location .Class label}

> A location can be an identifiable geographic place (ISO 19112), but it can also be a non-geographic place such as a directory, row, or column. As such, there are numerous ways in which location can be expressed, such as by a coordinate, address, landmark, and so forth. {prov:definition @en}

See also [atLocation] {+prov:atLocation ?seeAlso}.


==============

## Summary

The core flow establishes the fundamental vocabulary of provenance by introducing three essential concepts that form the bedrock of all provenance modeling. This flow answers the most basic questions in any provenance investigation: "What exists?", "What happens?", and "When and where does it occur?"

At the heart of this flow lies a fundamental distinction between entities and activities. Entities represent the stable, enduring "things" in our world - documents that persist, datasets that maintain their structure, physical objects that exist over time, or even conceptual ideas that remain fixed. These are the nouns of provenance, the subjects and objects that we track, analyze, and reason about. In contrast, activities represent the dynamic processes - the verbs of provenance that transform, analyze, modify, relocate, or otherwise act upon entities. This clear separation between stable continuants and dynamic occurrents provides the conceptual clarity needed to model complex real-world scenarios.

Bridging these two concepts are instantaneous events, which mark the precise moments when the world changes. These events capture the transitions - the exact moment an entity comes into being, the instant it gets used, the point when it becomes invalid, or the moments when activities begin or end. By treating these transitions as first-class concepts, PROV-O enables precise temporal reasoning about when and how state changes occur.

This conceptual framework enables powerful real-world applications across diverse domains. In document management, it provides the language to track versions, transformations, and processing steps through the document lifecycle. For data processing pipelines, it models the computational processes and analytical workflows that turn raw data into insights. Physical asset tracking uses these concepts to monitor manufacturing processes, supply chain movements, and equipment lifecycles from deployment to retirement. Software development teams capture build processes, deployment activities, and code transformations with the same vocabulary.

The flow's essential properties provide the contextual depth needed for meaningful provenance. The value property allows direct representation of entity characteristics, bridging the gap between abstract provenance tracking and concrete data representation. Time properties anchor all events to precise moments using xsd:dateTime, enabling temporal analysis and chronological reasoning. Location properties provide spatial context, supporting both geographic positioning and non-geographic contexts like directories, containers, or logical positions.

The design benefits of this core flow extend far beyond simple bookkeeping. The clear separation between entities and activities prevents conceptual confusion and enables clean modeling patterns. Temporal precision through instantaneous events provides exact timing for all state changes, supporting sophisticated temporal queries. Spatial context through location properties enables geographic and logical positioning. Most importantly, this extensible foundation supports all advanced PROV-O patterns, from simple linear chains to complex networks of influence and responsibility.

By providing this essential vocabulary for describing what exists, what happens, and when/where it occurs, the core flow forms the backbone of complex provenance scenarios. It establishes the conceptual foundation upon which all specialized components and advanced provenance patterns are built, enabling organizations to capture, analyze, and reason about their processes with clarity and precision.