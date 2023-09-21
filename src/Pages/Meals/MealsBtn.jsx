import { useNavigate } from "react-router-dom";

const MealsBtn = ({ meal }) => {
  const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } =
  meal;
  // console.log(idCategory);

  const navigate = useNavigate();
  const handleShowDetails = () => {
  const user = true;
  if(user){
    navigate(`/category/${strCategory}`);
  }else{
    navigate("/")
  }
} 

  return (
    <div>
      <div className="">
        <button onClick={handleShowDetails} className="btn btn-accent">
          {strCategory}
        </button>
      </div>
    </div>
  );
};

export default MealsBtn;
