import React from "react";
import dynamic from "next/dynamic.js";

import { api } from "~/utils/api";

const MyAblyComponent = dynamic(() => import("~/components/MyAblyComponent"), {
  ssr: false,
});

export default function Index() {
  /*
  Use TRPC to get some data in the same component as Ably is used
  In our use case this is a modal that handles payment and ably shows the order status/details etc.
  From some investigation, it seems every time the TRPC endpoint is called, it causes a new connection to Ably
  So if you have a 404 response like in this example, you can like 10 connections to Ably
  In our production use case, we get a 200 response and it gives us 2 connections to Ably
  */
  const _ = api.post.all.useQuery();

  return <MyAblyComponent />;
}
