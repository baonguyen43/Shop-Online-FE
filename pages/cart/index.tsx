import Cart from "@/#@/components/Share/Cart";
import TopCategories from "@/#@/components/Share/TopCategories";
import axiosClient from "@/#@/libraries/axiosClient";
import React from "react";

const Index = ({}: any): JSX.Element | null => {
  // console.log("res.data", category);

  return (
    <React.Fragment>
      <Cart />
    </React.Fragment>
  );
};

export default Index;

export async function getServerSideProps() {
  try {
    const res = await axiosClient.get("/categories");
    const category = res.data;

    return {
      props: {
        category,
      },
    };
  } catch (error) {
    console.log("error :>> ", error);
    return {
      notFound: true,
    };
  }
}
