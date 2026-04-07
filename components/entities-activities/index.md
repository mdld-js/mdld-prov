[mdp] <https://mdld.js.org/prov/>

# Entities and Activities {=mdp:components#entities-activities .mdp:Component label}

The first component of PROV-DM is concerned with entities and activities, and their interrelations.

![](./component1.png)

includes 9 classes: 
- Activity {+prov:Activity !prov:component}
- Communication {+prov:Communication !prov:component}
- End {+prov:End !prov:component}
- Entity {+prov:Entity !prov:component}
- Generation {+prov:Generation !prov:component}
- InstantaneousEvent {+prov:InstantaneousEvent !prov:component}
- Invalidation {+prov:Invalidation !prov:component}
- Start {+prov:Start !prov:component}
- Usage {+prov:Usage !prov:component}

and 19 properties:

- atTime {+prov:atTime !prov:component}
- endedAtTime {+prov:endedAtTime !prov:component}
- generated {+prov:generated !prov:component}
- generatedAtTime {+prov:generatedAtTime !prov:component}
- invalidated {+prov:invalidated !prov:component}
- invalidatedAtTime {+prov:invalidatedAtTime !prov:component}
- qualifiedCommunication {+prov:qualifiedCommunication !prov:component}
- qualifiedEnd {+prov:qualifiedEnd !prov:component}
- qualifiedGeneration {+prov:qualifiedGeneration !prov:component}
- qualifiedInvalidation {+prov:qualifiedInvalidation !prov:component}
- qualifiedStart {+prov:qualifiedStart !prov:component}
- qualifiedUsage {+prov:qualifiedUsage !prov:component}
- startedAtTime {+prov:startedAtTime !prov:component}
- used {+prov:used !prov:component}
- value {+prov:value !prov:component}
- wasEndedBy {+prov:wasEndedBy !prov:component}
- wasGeneratedBy {+prov:wasGeneratedBy !prov:component}
- wasInformedBy {+prov:wasInformedBy !prov:component}
- wasInvalidatedBy {+prov:wasInvalidatedBy !prov:component}
- wasStartedBy {+prov:wasStartedBy !prov:component}