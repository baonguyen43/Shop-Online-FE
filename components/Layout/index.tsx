import React from "react";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";

export default function Layout({ children }: any) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
