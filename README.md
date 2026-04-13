# mdld-prov

A complete reconstruction of the W3C PROV-O provenance ontology in MDLD format, fully projected from the authoritative PROV-O specification with comprehensive narrative documentation.

## Overview

This project presents the W3C PROV-O standard reimagined for modern provenance workflows, featuring:

- **Complete PROV-O Implementation** - All classes, properties, and relationships faithfully reconstructed from `prov-o.ttl`
- **Single Consolidated Document** - Build script generates `prov-o.md`, a complete readable MDLD ontology with all explanations
- **Flow-Based Organization** - Components organized by conceptual flows for better understanding
- **Rich Documentation** - Narrative summaries explaining purpose and use cases
- **Real-World Examples** - 11 practical scenarios demonstrating provenance patterns

## Quick Start

**Start here:** [PROV-O MDLD Catalog](./index.md)

**Build the complete ontology document:**
```bash
node consolidate.js
```
This generates `prov-o.md` - a single consolidated document containing all categories and components with full narrative explanations.

## Organization

The PROV-O ontology is presented through two complementary organizational approaches that serve different purposes.

**Categories** organize terms by learning complexity, providing a progressive path for understanding provenance concepts. **Starting Point Terms** introduce the core concepts needed for immediate use — Entity, Activity, Agent, and their basic relationships like `prov:wasGeneratedBy` and `prov:used`. These form the foundation for creating simple provenance descriptions. **Expanded Terms** then offer additional patterns for more complex scenarios, including specialized classes like Person and Organization, temporal properties for tracking entity lifetimes, and structures for handling collections and bundles. Finally, **Qualified Terms** provide enhanced relationships with contextual detail through qualified forms that capture additional information about binary relations, enabling more precise provenance descriptions.

**Components** organize terms by functional modules, grouping related provenance concepts based on their role in describing different aspects of provenance. The **Entities and Activities** component covers the core building blocks and lifecycle management, modeling the fundamental "what" and "when" of provenance. **Derivations** focuses on entity transformation and lineage tracking, describing how entities derive from one another through various transformation processes. **Agents, Responsibility and Influence** addresses accountability and authority structures, capturing who is responsible for activities and entities. **Collections** handles dynamic membership and provenance of groups, while **Bundles** enables nested provenance and provenance-of-provenance for describing provenance about provenance. The **Alternate** component deals with multiple perspectives and specialization relationships, linking entities that represent different aspects of the same thing.

These two views interact: each PROV-O term belongs to both a category (based on complexity) and a component (based on function). For example, `prov:wasGeneratedBy` is a Starting Point term (simple, core concept) in the Entities and Activities component (deals with entity-activity relationships). This dual organization supports both progressive learning and functional reference, allowing users to approach the ontology from whichever perspective suits their needs.

Browse the complete catalog at [index.md](./index.md) for detailed exploration of all categories, components, and 11 real-world examples.

## Key Features

- **Complete Ontology Projection** - The authoritative `prov-o.ttl` (W3C PROV-O specification) is fully projected to MDLD format with all explanations and narrative
- **Universal Build Script** - `consolidate.js` dynamically discovers and consolidates all linked markdown files from index.md, making it reusable for any MDLD project
- **Single Consolidated Document** - Generates `prov-o.md` containing all categories, components, and examples in one readable document
- **35 Entities, 16 Activities, 16 Agents** - Comprehensive instance data for validation
- **Flow-Based Summaries** - Each component includes narrative explanations of conceptual flows
- **Progressive Learning** - Categories organized from basic to advanced concepts
- **Modern Tooling** - Built with MDLD for enhanced readability and validation

## Build Process

The `consolidate.js` script creates a complete, single-file ontology document by:

1. **Starting from index.md** - Reads the main catalog file as the entry point
2. **Extracting markdown links** - Finds all relative `.md` links using the pattern `[text](path.md)`
3. **Recursively following links** - Visits each linked file and extracts its links, building a complete tree
4. **Infinite recursion protection** - Tracks visited files to prevent processing the same file multiple times
5. **Anchor ID generation** - Creates unique anchor IDs for each file based on its path (e.g., `categories-starting-point-index`)
6. **Internal link conversion** - Converts internal markdown links to anchor links (e.g., `[text](path.md)` → `[text](#anchor-id)`)
7. **Link normalization** - Normalizes image and resource links with `./` prefix preservation
8. **Combining with separators** - Files are joined with MDLD section separators to maintain document structure

This approach is **universal for MDLD authoring** - any MDLD project with an index.md file can use this script to consolidate all linked documentation into a single file with preserved navigation.

**Result:** `prov-o.md` - a complete, readable ontology document containing the entire PROV-O specification with all narrative explanations and working internal navigation, suitable for:
- Single-file reference with working internal links
- Easy distribution
- Comprehensive review
- Integration into documentation systems

## Clone with Intelligraphs web-app

Clone the repo via [Intelligraphs app](https://app.intelligraphs.com/#/?clone=https://github.com/davay42/mdld-prov.git)

## Navigate with IG-CLI in terminal

```bash
mkdir mdld-prov
cd mdld-prov
git clone https://github.com/davay42/mdld-prov.git 
curl -O https://app.intelligraphs.com/ig-cli.js
chmod +x ig-cli.js
mv ig-cli.js /usr/local/bin/ig-cli
ig-cli --help
ig-cli stats
```

## Technical Notes

This reconstruction maintains full compatibility with the W3C PROV-O standard while adapting it for modern MDLD workflows. The authoritative source is `prov-o.ttl` (the official W3C PROV-O specification), which has been fully projected to MDLD format.

**Ontology Statistics (via ig-cli):**
- 57 supported files
- 2,830 RDF quads across 52 named graphs
- 226 subjects, 87 predicates
- 39 RDF types including all PROV-O classes and properties
- 35 Entities, 16 Activities, 16 Agents (instance data)

**Adaptations for MDLD:**
- Changed `owl:Class` to `rdfs:Class` for better MDLD integration
- Excluded `dm` and `n` links for cleaner documentation
- Enhanced with narrative summaries and flow-based organization
- Added category-based learning progression (Starting Point → Qualified → Expanded)
- Component organization by functional modules with conceptual flows

**Build Achievement:**
The `consolidate.js` script successfully combines the entire ontology into a single readable document (`prov-o.md`), making the complete PROV-O specification with all explanations available in one file for easy reference and distribution.
