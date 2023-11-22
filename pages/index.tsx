import axiosClient from "@/#@/libraries/axiosClient";
import { Inter } from "next/font/google";
import React from "react";
import HomeBanner from "../components/Banner/HomeBanner";
import ListProducts from "../components/Share/ListProducts";
import TopCategories from "../components/Share/TopCategories";
import SectionTitle from "../components/Share/SectionTitle";
import Banner from "../components/Banner/CategoryBanner";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  category: any[];
  products: any[];
};
export default function Home({ category, products }: Props) {
  // console.log("category :>> ", category);
  // const [products, setProducts] = useState([]);

  // Hàm shuffle để trộn mảng sản phẩm
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
  const shuffledProducts = shuffle(products);

  return (
    <React.Fragment>
      <div>
        <Banner />
        <TopCategories categories={category} />
        <SectionTitle subTitle="" title="SẢN PHẨM DÀNH RIÊNG CHO BẠN" />
        <ListProducts products={shuffledProducts} />
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
