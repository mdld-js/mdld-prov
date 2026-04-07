[mdp] <https://mdld.js.org/prov/>

# Bundles {=mdp:components#bundles .mdp:Component label}

The fourth component of PROV-DM is concerned with bundles, a mechanism to support provenance of provenance. Figure 9 depicts a UML class diagram for the fourth component. It comprises a Bundle class defined as a subclass of Entity. 

![](./component4.png)

## Bundle {=prov:Bundle .Class label}

> A bundle is a named set of provenance descriptions, and is itself an Entity, so allowing provenance of provenance to be expressed. {prov:definition @en}

> Note that there are kinds of bundles (e.g. handwritten letters, audio recordings, etc.) that are not expressed in PROV-O, but can be still be described by PROV-O. {comment @en}

A bundle's identifier id identifies a unique set of descriptions.

A bundle is a named set of descriptions, but it is also an [entity] {+prov:Entity ?subClassOf} so that its provenance can be described.

A prov:Bundle is a named set of provenance descriptions, which may itself have provenance. The named set of provenance descriptions may be expressed as PROV-O or any other form. The subclass of Bundle that names a set of PROV-O assertions is not provided by PROV-O, since it is more appropriate to do so using other recommendations, standards, or technologies. In any case, a Bundle of PROV-O assertions is an abstract set of RDF triples, and adding or removing a triple creates a new distinct Bundle of PROV-O assertions.