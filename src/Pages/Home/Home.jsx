import { useNavigation } from "react-router-dom";
import Meal from "../Meal/Meal";
import GridLoader from "react-spinners/GridLoader";

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
   
    {
        navigation.state === "loading" ? <div className="flex justify-center items-center my-48"><GridLoader></GridLoader></div> :  <Meal></Meal>
      }
        </div>
    );
};

export default Home;