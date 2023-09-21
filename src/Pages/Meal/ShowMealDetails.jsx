import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
// import mealDescription from "/mealDescription"

const ShowMealDetails = () => {
  const [data, setData] = useState([]);
  // const {singleMealInfo} = useLoaderData();
  const { id } = useParams();
  // console.log(singleMealInfo);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setData(data.meals));
  }, [id]);


  const navigate = useNavigate()
const handleGoBack = ()=>{
    navigate(-1)
}
// console.log(data);

  return (
    <div>
      {
        data &&
        data?.map((info) => 
          <div key={info.idMeal} className="card card-side bg-base-100 shadow-xl flex gap-6 py-10 px-20">
            <figure className="w-[30%] border-2">
              <img src={info?.strMealThumb} alt="meal" />
            </figure>
            <div className="card-body w-[70%] border-2">
              <h2 className="card-title">{info?.strMeal}</h2>
              <p>{info?.strInstructions}</p>
              <div className="card-actions justify-end">
                <button onClick={handleGoBack} className="btn btn-primary">Go back</button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default ShowMealDetails;
