import axiosClient from "@/#@/libraries/axiosClient";
import { Inter } from "next/font/google";
import React, { useState } from "react";
import Banner from "../components/Banner/Banner";
import ListProducts from "../components/Share/ListProducts";
import SaleProducts from "../components/Share/SaleProducts";
import SectionTitle from "../components/Share/SectionTitle";
import TopCategories from "../components/Share/TopCategories";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  category: any[];
  products: any[];
  shuffledProducts: any[];
  discountProducts: any[];
};

export default function Home({ category, products, discountProducts }: Props) {
  // console.log("discountProducts :>> ", discountProducts);

  //config Products display
  const [displayedProducts, setDisplayedProducts] = useState(
    products.slice(0, 20)
  );
  const [loadMoreCount, setLoadMoreCount] = useState(20);
  const handleLoadMore = () => {
    setDisplayedProducts(
      products.slice(0, displayedProducts.length + loadMoreCount)
    );
  };
  return (
    <React.Fragment>
      <Banner />

      {/* Category */}
      <TopCategories categories={category} />

      <SaleProducts
        bgClassName="bg-white-color"
        disProduct={discountProducts}
        sectionTitle={<SectionTitle subTitle="" title="SALE SẬP SÀN " />}
      />

      <ListProducts
        bgClassName="bg-snow-color"
        products={displayedProducts}
        sectionTitle={
          <SectionTitle subTitle="" title="SẢN PHẨM DÀNH RIÊNG CHO BẠN" />
        }
      />
      <div className="load-more">
        <button onClick={handleLoadMore}>Tải thêm</button>
      </div>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const categoryRes = await axiosClient.get("/categories");
  const category = categoryRes.data;

  const shuffle = (array: any) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const productsRes = await axiosClient.get("/products");
  const products = productsRes.data;
  const shuffledProducts = shuffle(products);

  const res = await axiosClient.get("/super-sale");
  const discountProducts = res.data;
  return {
    props: {
      category,
      products,
      shuffledProducts,
      discountProducts,
    },
    revalidate: 60,
  };
}
