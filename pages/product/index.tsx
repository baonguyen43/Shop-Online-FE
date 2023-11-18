import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useCallback, useEffect, useState } from "react";
import axiosClient from "@/#@/libraries/axiosClient";
import Link from "next/link";
import HomeBanner from "@/#@/components/Banner/HomeBanner";
import DetailProduct from "@/#@/components/Share/DetailProduct";

const inter = Inter({ subsets: ["latin"] });

function Index() {
  const [products, setProducts] = useState([]);
  // Call API

  const getProducts = useCallback(async () => {
    try {
      const res = await axiosClient.get("/products");
      console.log("res.data", res.data);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);
  console.log("products", products);

  return (
    <React.Fragment>
      <DetailProduct />
    </React.Fragment>
  );
}
export default Index;
