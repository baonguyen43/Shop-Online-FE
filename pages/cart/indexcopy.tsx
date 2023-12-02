import Cart from "@/#@/components/Share/Cart";
import axiosClient from "@/#@/libraries/axiosClient";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

// export async function fetchCartData(id: any) {
//   try {
//     const res = await axiosClient.get(`/cart/${id}`);
//     return res.data.payload;
//   } catch (error) {
//     console.log("error :>> ", error);
//     return null;
//   }
// }

const Index = ({ cartData }: any): JSX.Element | null => {
  console.log("cart", cartData);

  // const [cartData, setCartData] = useState(null);

  // useEffect(() => {
  //   const userString = localStorage.getItem("user");
  //   const userId = userString ? JSON.parse(userString).id : null;

  //   if (userId) {
  //     fetchCartData(userId).then((data) => {
  //       setCartData(data);
  //     });
  //   }
  // }, []);

  // if (!cartData) {
  //   return <p>Loading...</p>;
  // }

  return (
    <React.Fragment>
      {/* <Cart /> */}

      <div style={{ display: "flex", flexDirection: "column" }}>
        {cartData && cartData.map((p: any) => <div key={p.id}> {p.body}</div>)}
      </div>
    </React.Fragment>
  );
};

export default Index;

// const userId = req.cookies.user ? JSON.parse(req.cookies.user).id : null;

export async function getStaticProps(context: {
  req: { headers: { cookie: string } };
}) {
  //get api products sale
  // const user = localStorage.getItem("user");
  // const id = user ? JSON.parse(user).id : null;

  const res = await axiosClient.get(`/cart/{id}`);
  const cartData = res.data;

  return {
    props: {
      cartData,
    },
    revalidate: 60,
  };
}
