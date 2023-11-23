import Grid01 from "@/#@/components/Share/SaleProducts";
import SectionTitle from "@/#@/components/Share/SectionTitle";
import axiosClient from "@/#@/libraries/axiosClient";
import React from "react";

const DiscountProducts = ({ disProducts }: any): JSX.Element | null => {
  //   console.log("disProducts :>> ", disProducts);
  return (
    <React.Fragment>
      <Grid01
        disProduct={disProducts}
        sectionTitle={<SectionTitle subTitle="" title="SALE SẬP SÀN " />}
      />
    </React.Fragment>
  );
};
export default DiscountProducts;

export async function getServerSideProps() {
  try {
    const res = await axiosClient.get("/super-sale");
    const disProducts = res.data;

    return {
      props: {
        disProducts,
      },
    };
  } catch (error) {
    console.log("error :>> ", error);
    return {
      notFound: true,
    };
  }
}
