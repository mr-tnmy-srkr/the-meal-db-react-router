import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import MealsBtn from "./MealsBtn";
import PropagateLoader from "react-spinners/PropagateLoader";

const Meals = () => {
  const navigation = useNavigation();
  const { categories } = useLoaderData();
  // const { categories } = useLoaderData();
  //   console.log(categories);
  const loading = navigation.state === "loading";
  return (
    <div className="flex gap-3 justify-center my-4 flex-wrap">
      {loading ? (
        // Render a spinner while data is being loaded
        <div className="flex justify-center items-center my-48">
          <PropagateLoader></PropagateLoader>
        </div>
      ) : (
        // Render meal buttons when data is available
        categories &&
        categories.map((meal) => (
          <div key={meal.idCategory}>
            <MealsBtn meal={meal}></MealsBtn>
          </div>
        ))
      )}
      <Outlet></Outlet>
    </div>
  );
};

export default Meals;
