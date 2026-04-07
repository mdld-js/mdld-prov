[mdp] <https://mdld.js.org/prov/>
[owl] <http://www.w3.org/2002/07/owl#>

# Activity lifecycle flow

## startedAtTime {=prov:startedAtTime .owl:DatatypeProperty label}

> The time at which an activity started. See also prov:endedAtTime. {comment @en}

Sets starting [dateTime] {+xsd:dateTime ?range} literal for an [activity] {+prov:Activity ?sharesDefinitionsWith ?domain}.

May be qualified by [atTime] {+prov:atTime ?prov:qualifiedForm} in a [Start] {+prov:Start ?prov:qualifiedForm} attached to the activity.

> It is the intent that the property chain holds: (prov:qualifiedStart o prov:atTime) rdfs:subPropertyOf prov:startedAtTime. {prov:editorialNote @en}

## wasStartedBy {=prov:wasStartedBy .owl:ObjectProperty label}

> Start is when an activity is deemed to have started. A start may refer to an entity, known as trigger, that initiated the activity. {comment @en}

Connects an [activity] {+prov:Activity ?domain} to an [entity] {+prov:Entity ?range} that initiated it.

May be qualified by a [qualifiedStart] {+prov:qualifiedStart ?prov:qualifiedForm} with [Start] {+prov:Start ?prov:qualifiedForm} attached.

Sub-property of [wasInfluencedBy] {+prov:wasInfluencedBy ?subPropertyOf}.

Inverse: [started] {prov:inverse}

## qualifiedStart {=prov:qualifiedStart  owl:ObjectProperty label}

> If this Activity prov:wasStartedBy Entity :e1, then it can qualify how it was started using prov:qualifiedStart [ a prov:Start;  prov:entity :e1; :foo :bar ]. {comment @en}

Adds a [Start] {+prov:Start ?range ?prov:sharesDefinitionWith} to an [activity] {+prov:Activity ?domain}.

A qualified version of [wasStartedBy] {+prov:wasStartedBy ?prov:unqualifiedForm}.

Sub-property: [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

Inverse: [qualifiedStartOf] {prov:inverse}

## Start {=prov:Start .Class label}

> Start is when an activity is deemed to have been started by an entity, known as trigger. The activity did not exist before its start. Any usage, generation, or invalidation involving an activity follows the activity's start. A start may refer to a trigger entity that set off the activity, or to an activity, known as starter ◊, that generated the trigger. {prov:definition @en}

> An instance of prov:Start provides additional descriptions about the binary prov:wasStartedBy relation from some started prov:Activity to an prov:Entity that started it. For example, :foot_race prov:wasStartedBy :bang; prov:qualifiedStart [ a prov:Start; prov:entity :bang; :foo :bar; prov:atTime '2012-03-09T08:05:08-05:00'^^xsd:dateTime ] . {comment @en}


## endedAtTime {=prov:endedAtTime .owl:DatatypeProperty label}

> The time at which an activity ended. See also prov:startedAtTime. {comment @en}

Sets ending [dateTime] {+xsd:dateTime ?range} literal for an [activity] {+prov:Activity ?sharesDefinitionsWith ?domain}.

May be qualified by [atTime] {+prov:atTime ?prov:qualifiedForm} in an [End] {+prov:End ?prov:qualifiedForm} attached to the activity.

> It is the intent that the property chain holds: (prov:qualifiedEnd o prov:atTime) rdfs:subPropertyOf prov:endedAtTime. {prov:editorialNote @en}


## wasEndedBy {=prov:wasEndedBy .owl:ObjectProperty label}

> End is when an activity is deemed to have ended. An end may refer to an entity, known as trigger, that terminated the activity. {comment @en}

Records that one [activity] {+prov:Activity ?domain} was ended by a [trigger] {+prov:Entity ?range} that terminated it.

May be qualified by [qualifiedEnd] {+prov:qualifiedEnd ?prov:qualifiedForm} with [End] {+prov:End ?prov:qualifiedForm} attached.

Sub-property: [wasInfluencedBy] {+prov:wasInfluencedBy ?subPropertyOf}

Inverse: [ended] {prov:inverse}

## qualifiedEnd {=prov:qualifiedEnd owl:ObjectProperty label}

> If this Activity prov:wasEndedBy Entity :e1, then it can qualify how it was ended using prov:qualifiedEnd [ a prov:End;  prov:entity :e1; :foo :bar ]. {comment @en}

Informs that an [activity] {+prov:Activity ?domain} was [ended] {+prov:End ?range ?prov:sharesDefinitionWith} by an [entity] {+prov:Entity ?domain}.

A qualified version of [wasEndedBy] {+prov:wasEndedBy ?prov:unqualifiedForm}.

Sub-property: [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

Inverse: [qualifiedEndOf] {prov:inverse}

## End {=prov:End .Class label}

Sub-class of [EntityInfluence] {+prov:EntityInfluence ?subClassOf} and [InstantaneousEvent] {+prov:InstantaneousEvent ?subClassOf}.

> End is when an activity is deemed to have been ended by an entity, known as trigger. The activity no longer exists after its end. Any usage, generation, or invalidation involving an activity precedes the activity's end. An end may refer to a trigger entity that terminated the activity, or to an activity, known as ender ◊ that generated the trigger. {prov:definition @en}

> An instance of prov:End provides additional descriptions about the binary prov:wasEndedBy relation from some ended prov:Activity to an prov:Entity that ended it. For example, :ball_game prov:wasEndedBy :buzzer; prov:qualifiedEnd [ a prov:End; prov:entity :buzzer; :foo :bar; prov:atTime '2012-03-09T08:05:08-05:00'^^xsd:dateTime ]. {comment @en}

==============

## Summary

The activity lifecycle flow captures the temporal boundaries and triggering mechanisms of activities, modeling how dynamic processes begin, execute, and eventually conclude. This flow provides the essential framework for understanding the temporal dimension of processes - when they start, what initiates them, when they end, and what terminates them.

At its core, this flow addresses a fundamental question in process provenance: "When did this activity occur, and what brought it into or out of existence?" The answer emerges through a clear pattern of start and end events, each precisely timed and causally linked to triggering entities. Every activity begins with a start moment - a discrete point when the activity transitions from non-existence to active execution. This start may be triggered by an entity that serves as the catalyst, such as a timer event, a command signal, or a prerequisite condition being met. The activity then executes through its duration until its end moment, when another entity triggers its termination and the activity ceases to exist.

This temporal framework enables sophisticated process management across diverse domains. In workflow orchestration, it tracks when automated processes begin based on schedule triggers or input availability, and when they complete successfully or terminate due to error conditions. For computational pipelines, it monitors job initiation from queue systems and completion through success or failure signals. In manufacturing processes, it captures production line activation from start buttons and shutdown through safety triggers or completion sensors. Project management uses these concepts to track task initiation from authorization and completion through deliverable submission.

The flow's temporal precision provides the foundation for process analysis and optimization. The startedAtTime and endedAtTime properties establish exact boundaries for activity execution, enabling duration calculations, overlap detection, and performance metrics. The atTime property in qualified forms offers event-level granularity, capturing the precise moments when triggers occur and when activities transition between states.

Crucially, the flow maintains clear trigger relationships through bidirectional properties. The wasStartedBy and wasEndedBy relations link activities to their triggering entities, while their inverse properties (started, ended) enable entity-centric queries. This dual perspective allows analysts to ask both "What activities did this trigger start?" and "What triggered this activity?" depending on their investigative needs.

The qualified forms through Start and End classes enrich these basic relationships with contextual depth. They capture not just that an activity started, but how, where, by whom, and under what environmental conditions. Similarly, end events can include details about termination reasons, completion status, and contextual factors. This contextual richness transforms simple temporal bookkeeping into meaningful process narratives that support root cause analysis and process improvement.

By providing complete temporal coverage with trigger integration and contextual enhancement, this flow becomes the foundation for process monitoring, performance analysis, and operational intelligence. It enables organizations to answer critical questions about process efficiency, maintain audit trails for operational compliance, and optimize workflows through precise temporal understanding and trigger analysis.

