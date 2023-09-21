import { useNavigate } from "react-router-dom";

const ShowMeal = ({ item }) => {
  const { idMeal, strMeal, strMealThumb } = item;
  //   console.log(item);

  const navigate = useNavigate();
  const handleShowMeals = () => {
    navigate(`/product/${idMeal}`);
  };



  return (
    <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={strMealThumb} alt="Meals" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{strMeal}</h2>

            <div className="card-actions justify-end">
              <button onClick={handleShowMeals} className="btn btn-primary">
                Show Details
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ShowMeal;
