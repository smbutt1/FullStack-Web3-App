import { createReactClient } from "@livepeer/react";
import { studioProvider } from "livepeer/providers/studio";

const LivePeerClient = createReactClient({
  provider: studioProvider({ apiKey: "6967c611-3fc7-43d7-b34b-927e3a1ed79a" }),
});

export default LivePeerClient;
