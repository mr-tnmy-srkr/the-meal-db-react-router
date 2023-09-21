import { useLoaderData } from "react-router-dom";
import MealsBtn from "./MealsBtn";

const Meals = () => {
  const { categories } = useLoaderData();
//   console.log(categories);
  return (
    <div className="flex gap-3 justify-center my-4 flex-wrap">
      {categories &&
        categories?.map((meal) => (
          <MealsBtn key={meal.idCategory} meal={meal}></MealsBtn>
        ))}
    </div>
  );
};

export default Meals;
