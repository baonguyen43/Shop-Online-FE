import Cart from "@/#@/components/Share/Cart";
import axiosClient from "@/#@/libraries/axiosClient";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

const Index = (): JSX.Element | null => {
  // client-side rendering
  const [cartData, setCartData] = useState(null);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const userString = localStorage.getItem("user");
    const id = userString ? JSON.parse(userString).id : null;

    // getAPi cart theo customerId
    if (id) {
      axiosClient
        .get(`/cart/${id}`)
        .then((response) => {
          const cartData = response.data.payload;
          setCartData(cartData);

          const productIds = cartData.productId;
          axiosClient
            .get(`/products/${productIds}`)
            .then((responses) => {
              const productsData = responses.data;
              setProductsData(productsData);
              console.log("productsData", productsData);
            })
            .catch((error) => {
              console.log("error: ", error);
            });
        })
        .catch((error) => {
          console.log("error :>> ", error);
        });
    }
  }, []);

  if (!cartData || !Array.isArray(productsData)) {
    return <p>Loading...</p>;
  }

  return <React.Fragment></React.Fragment>;
};

export default Index;
