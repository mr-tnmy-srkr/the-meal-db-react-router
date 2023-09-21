import React from "react";

const ShowMeal = ({ item }) => {
    const {strMeal,strMealThumb}=item;
  console.log(item);
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={strMealThumb}
            alt="Meals"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strMeal}</h2>
          
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Show Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMeal;
