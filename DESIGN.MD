# Design

SDK consists of different open APIs like loard of the rings. Lord of the rings api service based of interface **ILOTRApi**, and have some own methods.

All open APIs services have included into class **SDK** through composition pattern.

SDK also uses node-fetch for all network calls.