import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
// import mealDescription from "/mealDescription"

const ShowMealDetails = () => {
  const [data, setData] = useState({});
  // const {singleMealInfo} = useLoaderData();
  const { id } = useParams();
  // console.log(singleMealInfo);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setData(data.meals));
  }, [id]);

console.log(data);

  return (
    <div>
      {/* <h1>Single Meal</h1> */}
      {
        data &&
        data?.map((info) => {
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img src={info.strMealThumb} alt="meal" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{info.strMeal}</h2>
              <p>{info.strInstructions}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>;
        })
        }
    </div>
  );
};

export default ShowMealDetails;
