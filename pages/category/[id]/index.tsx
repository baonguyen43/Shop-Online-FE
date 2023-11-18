import TopDetailCategory from "@/#@/components/Share/TopDetailCategory";
import axiosClient from "@/#@/libraries/axiosClient";
import React from "react";

const Index = ({ products }: any): JSX.Element | null => {
  return (
    <React.Fragment>
      {/* <CategoryBanner /> */}
      <TopDetailCategory products={products} />
    </React.Fragment>
  );
};

export default Index;

export async function getStaticProps({ params }: any) {
  const { id } = params;
  try {
    const res = await axiosClient.get(`/products/getProductByCateId/${id}`);
    const data = await res.data;

    return {
      props: {
        products: data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths(context: any) {
  const res = await axiosClient.get("/categories");
  const categories = await res.data;

  const paths = categories.map((category: any) => ({
    params: { id: category.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
}
