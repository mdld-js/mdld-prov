[mdp] <https://mdld.js.org/prov/>

# Derivations {=mdp:components#derivations .mdp:Component label}

The second component of PROV-DM is concerned with: derivations of entities from other entities and derivation subtypes WasRevisionOf (Revision), WasQuotedFrom (Quotation), and HasPrimarySource (Primary Source). Figure 6 depicts the third component with PROV core structures in the yellow area, including two classes (Entity, Activity) and binary association WasDerivedFrom (Derivation). PROV extended structures are found outside this area. UML association classes express expanded n-ary relations. The subclasses are marked by the UML stereotype "prov:type" to indicate that the corresponding types are valid values for the attribute prov:type.

![](./component2.png)

5 classes: 

-   Derivation {+prov:Derivation !prov:component}
-   Influence {+prov:Influence !prov:component}
-   PrimarySource {+prov:PrimarySource !prov:component}
-   Quotation {+prov:Quotation !prov:component}
-   Revision {+prov:Revision !prov:component}

11 properties:  

-   hadActivity {+prov:hadActivity !prov:component}
-   hadGeneration {+prov:hadGeneration !prov:component}
-   hadPrimarySource {+prov:hadPrimarySource !prov:component}
-   hadUsage {+prov:hadUsage !prov:component}
-   qualifiedDerivation {+prov:qualifiedDerivation !prov:component}
-   qualifiedInfluence {+prov:qualifiedInfluence !prov:component}
-   qualifiedPrimarySource {+prov:qualifiedPrimarySource !prov:component}
-   qualifiedQuotation {+prov:qualifiedQuotation !prov:component}
-   qualifiedRevision {+prov:qualifiedRevision !prov:component}
-   wasDerivedFrom {+prov:wasDerivedFrom !prov:component}
-   wasQuotedFrom {+prov:wasQuotedFrom !prov:component}
-   wasRevisionOf {+prov:wasRevisionOf !prov:component}
