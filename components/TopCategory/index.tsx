import axiosClient from "@/#@/libraries/axiosClient";
import Grid02 from "../Grid/Grid2";

const TopCategories = ({ category }: any): JSX.Element | null => {
  return (
    <div className="features pt-70">
      <div className="align-items-center">
        <div className="category-features">
          <ul className="row feature-details justify-content-center">
            <Grid02 imageSrc="/image/icon/tele.png" categories={category} />
            {/* <Grid02 imageSrc="/image/icon/book.png"  />
            <Grid02 imageSrc="/image/icon/healthy.png" />
            <Grid02 imageSrc="/image/icon/clothes.png" />   
            <Grid02 imageSrc="/image/icon/iphone.png" />
            <Grid02 imageSrc="/image/icon/watch.png"  /> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;

export async function getServerSideProps() {
  try {
    const res = await axiosClient.get("/categories");
    const category = res.data;
    console.log("res.data", category);

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
