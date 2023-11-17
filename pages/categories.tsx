import Grid02 from "@/#@/components/Grid/Grid2";
import axiosClient from "@/#@/libraries/axiosClient";

const Categories = ({ category }: any): JSX.Element | null => {
  // console.log("res.data", category);

  return (
    <div className="features pt-70">
      <div className="align-items-center">
        <div className="category-features">
          <ul className="row feature-details justify-content-center">
            <Grid02 imageSrc="/image/icon/tele.png" categories={category} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;

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
