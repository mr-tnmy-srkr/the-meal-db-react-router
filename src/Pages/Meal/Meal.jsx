// import { useParams } from "react-router-dom";

import { useLoaderData } from "react-router-dom";
import ShowMeal from "./ShowMeal";

const Meal = () => {
  // const data = useParams();
  const meal = useLoaderData();
  // console.log(meal.meals);
  // const { strMeal, strMealThumb, idMeal } = meal;

  return (
   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto my-8 place-items-center">
    {
      meal &&
      meal?.meals?.map(item => <ShowMeal key={item.idMeal} item={item}></ShowMeal>) 
    }
    </div>

  );
};

export default Meal;
