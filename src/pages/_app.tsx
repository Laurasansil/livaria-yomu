import "../styles/globals.css";
import type { AppProps } from "next/app";

import React from "react";
import setupFakeBackend from "../../fake-backend";
import { AuthProvider } from "../contexts/Auth/AuthProvider";

setupFakeBackend();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
