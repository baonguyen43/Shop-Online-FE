// import "@/#@/styles/globals.css";
import type { AppProps } from "next/app";

import "@/#@/styles/bootstrap.min.css";
import "@/#@/styles/style.css";
import "@/#@/styles/styles.scss";
import "@/#@/styles/boxicons.min.css";
import "@/#@/styles/responsive.scss";

import Layout from "../components/Layout";
import React from "react";

// import "@/#@/styles/styles.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}
