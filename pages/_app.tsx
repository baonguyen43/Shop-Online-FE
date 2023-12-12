// import "@/#@/styles/globals.css";
import type { AppProps } from "next/app";

import "@/#@/styles/bootstrap.min.css";
import "@/#@/styles/boxicons.min.css";
import "@/#@/styles/responsive.scss";
import "@/#@/styles/style.css";
import "@/#@/styles/styles.scss";

import React from "react";
import Layout from "../components/Layout";

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
