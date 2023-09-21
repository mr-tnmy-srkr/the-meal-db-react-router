import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";


const MainLayout = () => {
    return (
        <div>
        <div><NavBar></NavBar></div>
        <div className="min-h-[60vh]"><Outlet></Outlet></div>
        <div><Footer></Footer></div>
        </div>
    );
};

export default MainLayout;