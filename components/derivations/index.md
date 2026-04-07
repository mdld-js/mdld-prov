[mdp] <https://mdld.js.org/prov/>
[owl] <http://www.w3.org/2002/07/owl#>

# Derivations {=mdp:components#derivations .mdp:Component label}

The second component of PROV-DM is concerned with: derivations of entities from other entities and derivation subtypes WasRevisionOf (Revision), WasQuotedFrom (Quotation), and HasPrimarySource (Primary Source). Figure 6 depicts the third component with PROV core structures in the yellow area, including two classes (Entity, Activity) and binary association WasDerivedFrom (Derivation). PROV extended structures are found outside this area. UML association classes express expanded n-ary relations. The subclasses are marked by the UML stereotype "prov:type" to indicate that the corresponding types are valid values for the attribute prov:type.

![](./component2.png)

[Derivation flow](./derivation.md)
[Revision flow](./revision.md)
[Quotation flow](./quotation.md)
[Primary Source flow](./source.md)
[Influence flow](./influence.md)

## Summary

The PROV-O Derivations component is organized into clear flows that model how entities are transformed, updated, or constructed from other entities. Each flow follows a consistent pattern of binary relations, qualified forms, and influence classes.

**Flow Architecture:**
Each derivation type follows the same three-part pattern:
1. **Binary Relation** (e.g., `wasDerivedFrom`, `wasRevisionOf`)
2. **Qualified Form** (e.g., `qualifiedDerivation`, `qualifiedRevision`) 
3. **Influence Class** (e.g., `Derivation`, `Revision`)

**Core Flows:**

**1. Derivation Flow** - Foundation for all entity transformations
- `wasDerivedFrom` → `qualifiedDerivation` → `Derivation`
- Base relation for all entity-to-entity transformations
- Enhanced with `hadGeneration` and `hadUsage` properties

**2. Revision Flow** - Versioning and content updates
- `wasRevisionOf` → `qualifiedRevision` → `Revision`
- Specializes derivation for versioned entities with substantial original content
- Sub-property of `wasDerivedFrom`

**3. Quotation Flow** - Copying and attribution
- `wasQuotedFrom` → `qualifiedQuotation` → `Quotation`
- Handles copying/quoting of entity content
- Sub-property of `wasDerivedFrom`

**4. Primary Source Flow** - Source citation and authority
- `hadPrimarySource` → `qualifiedPrimarySource` → `PrimarySource`
- Connects secondary entities to authoritative primary sources
- Sub-property of `wasDerivedFrom`

**5. Influence Flow** - Cross-cutting enhancement mechanisms
- `hadActivity` → `qualifiedInfluence` → `Influence`
- Connects all influence types to activities and provides broad influence modeling
- Supports delegation, derivation, end, and start processes

**Hierarchy and Relationships:**
```
Influence (broadest)
├── EntityInfluence
│   └── Derivation
│       ├── Revision
│       ├── Quotation
│       └── PrimarySource
└── qualifiedInfluence (supports all qualified forms)
```

**Benefits of Flow Organization:**
- Clear separation of derivation types
- Consistent patterns across all flows
- Easy navigation between related concepts
- Direct mapping from simple to complex provenance descriptions
- Modular understanding of derivation mechanisms
