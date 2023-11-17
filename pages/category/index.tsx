import Grid02 from "@/#@/components/Grid/Grid2";
import axiosClient from "@/#@/libraries/axiosClient";
import React from "react";

const Category = ({ category }: any): JSX.Element | null => {
  // console.log("res.data", category);

  return (
    <React.Fragment>
      <Grid02 imageSrc="/image/icon/tele.png" categories={category} />
    </React.Fragment>
  );
};

export default Category;

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
