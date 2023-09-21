import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="text-black p-6 bg-blue-300 flex justify-between items-center">
      <div tabIndex={0} className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <RiMenu2Fill></RiMenu2Fill>
        )}
      </div>

      <div>
        <ul
          className={`md:flex md:items-center md:justify-center md:gap-10 absolute md:static duration-1000 ${
            open ? "top-20 left-5 " : "-top-60 left-5"
          }  shadow-lg md:shadow-none rounded-xl text-xl font-medium px-3 py-4`}
        >
          <Link to="/">
            <li className="hover:bg-slate-300 rounded-xl">
              <a>Homepage</a>
            </li>
          </Link>
          <Link to="/products">
            <li className="hover:bg-slate-300 rounded-xl">
              <a>Products</a>
            </li>
          </Link>
          <Link to="/dashboard">
            <li className="hover:bg-slate-300 rounded-xl">
              <a>Dashboard</a>
            </li>
          </Link>
        </ul>
      </div>
      <div className={"text-3xl font-semibold "}>
        <h1>The Meal DB</h1>
      </div>
    </nav>
  );
};

export default NavBar;
