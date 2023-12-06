import type { AppProps } from "next/app";

import { TRPCReactProvider } from "~/components/TRPCProvider";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TRPCReactProvider>
      <Component {...pageProps} />
    </TRPCReactProvider>
  );
}
