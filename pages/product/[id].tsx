import DetailProduct from "@/#@/components/Share/DetailProduct";
import axiosClient from "@/#@/libraries/axiosClient";
import React from "react";

const ProductDetail = ({ product }: any): JSX.Element | null => {
  // const router = useRouter();
  // console.log("productDetail :>> ", product);
  return (
    <React.Fragment>
      <DetailProduct productDetail={product} />
    </React.Fragment>
  );
};
export default ProductDetail;

export async function getStaticProps({ params }: any) {
  const { id } = params;

  try {
    //   console.log('««««« req »»»»»', req);
    const res = await axiosClient.get(`/products/${id}`);
    const product = res.data;
    return {
      props: {
        product,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
export async function getStaticPaths() {
  const res = await axiosClient.get("/products");
  const products = await res.data;
  const paths = products.map((p: any) => ({
    params: { id: p.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
}
