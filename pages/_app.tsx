import "../styles/globals.css";
import type { AppProps } from "next/app";

import setupFakeBackend from "../fake-backend";

setupFakeBackend();

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
