import axiosClient from "@/#@/libraries/axiosClient";
import { Inter } from "next/font/google";
import React, { useCallback, useEffect, useState } from "react";
import HomeBanner from "../components/Banner/HomeBanner";
import Grid01 from "../components/Grid/Grid01";
import TopCategories from "../components/TopCategory";
import Categories from "./categories";
import Grid02 from "../components/Grid/Grid2";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  category: any[];
  products: any[];
};
export default function Home({ category, products }: Props) {
  // const [products, setProducts] = useState([]);
  // // Call API

  // const getProducts = useCallback(async () => {
  //   try {
  //     const res = await axiosClient.get("/products");
  //     setProducts(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  // useEffect(() => {
  //   getProducts();
  // }, [getProducts]);

  return (
    <React.Fragment>
      <div>
        <HomeBanner />
        <Grid02 imageSrc="/image/icon/tele.png" categories={category} />
        <Grid01 products={products} />
      </div>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const categoryRes = await axiosClient.get("/categories");
  const category = categoryRes.data;

  const productsRes = await axiosClient.get("/products");
  const products = productsRes.data;
  return {
    props: {
      category,
      products,
    },
  };
}
