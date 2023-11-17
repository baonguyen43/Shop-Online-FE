import Grid01 from "@/#@/components/Grid/Grid01";
import Grid03 from "@/#@/components/Grid/Grid03";
import Grid02 from "@/#@/components/Grid/Grid2";
import axiosClient from "@/#@/libraries/axiosClient";
import { AnyARecord } from "dns";
import Category from "..";
import React from "react";
import CategoryBanner from "@/#@/components/Banner/CategoryBanner";

const Index = ({ products }: any): JSX.Element | null => {
  return (
    <React.Fragment>
      <CategoryBanner />
      <Grid03 products={products} />
    </React.Fragment>
  );
};

export default Index;

// export async function getServerSideProps(context: any) {
//   const { id } = context.params;
//   try {
//     const res = await axiosClient.get(`/products/category/${id}`);
//     const category = res.data;

//     console.log("res.data", category);

//     return {
//       props: {
//         category,
//         id,
//       },
//     };
//   } catch (error) {
//     console.log("error :>> ", error);
//     return {
//       notFound: true,
//     };
//   }
// }

export async function getStaticProps({ params }: any) {
  const { id } = params;
  try {
    const res = await axiosClient.get(`/products/category/${id}`);
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
  // const validCategories = categories.filter((category: any) => category.slug);

  const paths = categories.map((category: any) => ({
    params: { id: category.id.toString() },
  }));
  // blogSlug: category.slug
  return {
    paths,
    fallback: true,
  };
}
