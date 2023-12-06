"use client";

import type { PropsWithChildren } from "react";
import * as Ably from "ably";
import { AblyProvider } from "ably/react";

function AblyInvoker(props: PropsWithChildren) {
  /*
  We need the client inside the function to do a custom callback with TRPC
  When inside the component, it makes multiple connections, however when outside we only get 1 as it should
  */
  const client = new Ably.Realtime.Promise("TOKEN");

  return <AblyProvider client={client}>{props.children}</AblyProvider>;
}

export default function MyAblyComponent() {
  return <AblyInvoker>Here is Ably</AblyInvoker>;
}
