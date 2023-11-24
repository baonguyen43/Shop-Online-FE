// import "@/#@/styles/globals.css";
import type { AppProps } from "next/app";

import "@/#@/styles/bootstrap.min.css";
import "@/#@/styles/style.css";
import "@/#@/styles/styles.scss";
import "@/#@/styles/boxicons.min.css";
import "@/#@/styles/responsive.scss";

import Layout from "../components/Layout";
import React, { useEffect } from "react";
import axiosClient from "../libraries/axiosClient";
import { useRouter } from "next/router";

// import "@/#@/styles/styles.scss";

export default function App({ Component, pageProps }: AppProps) {
  // const router = useRouter();

  // const token = localStorage.getItem("TOKEN");
  // useEffect(() => {
  //   if (token) {
  //     axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
  //   } else {
  //     router.push('/login');
  //   }
  // }, [router, token]);

  // useEffect(() => {
  //   const handleRouteChange = (url: string) => {
  //     if (url === '/login' && token) {
  //       router.push('/');
  //     }
  //   };

  //   router.events.on('routeChangeStart', handleRouteChange);

  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteChange);
  //   };
  // }, [router, token]);

  return (
    <React.Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}
// return !token ? (
//   <Routes>
//     <Route path="login" element={<Login />} />
//   </Routes>) :
