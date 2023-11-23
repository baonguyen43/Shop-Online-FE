import Grid01 from "@/#@/components/Share/SaleProducts";
import SectionTitle from "@/#@/components/Share/SectionTitle";
import axiosClient from "@/#@/libraries/axiosClient";
import { Inter } from "next/font/google";
import React, { useCallback, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

function Index() {
  const [products, setProducts] = useState([]);
  // Call API

  const getProducts = useCallback(async () => {
    try {
      const res = await axiosClient.get("/products");
      // console.log("res.data", res.data);
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
      {/* <DetailProduct /> */}
      {/* <ListProducts products={products} /> */}
      {/* <DetailProduct /> */}
      {/* <Grid01
            sectionTitle={
              <SectionTitle
                subTitle="hello"
                title="Sale Off"
                className=""
                desc="12.12 sale off toàn bộ sản phẩm "
              />
            }
          /> */}
    </React.Fragment>
  );
}
export default Index;
