import axiosClient from "@/#@/libraries/axiosClient";
import { Inter } from "next/font/google";
import React from "react";
import HomeBanner from "../components/Banner/HomeBanner";
import ListProducts from "../components/Share/ListProducts";
import TopCategories from "../components/Share/TopCategories";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  category: any[];
  products: any[];
};
export default function Home({ category, products }: Props) {
  // console.log("products :>> ", products);
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
        <TopCategories categories={category} />
        <ListProducts products={products} />
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
