import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home/Home";
import Meals from "./Pages/Meals/Meals";
import DashboardLayout from "./Pages/DashboardLayout/DashboardLayout";
import Meal from "./Pages/Meal/Meal";
import ShowMealDetails from "./Pages/Meal/ShowMealDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Meals></Meals>,
        loader: () => fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`),
      },
      {
        path: "/category/:strCategory",
        element: <Meal></Meal>,
        loader: ({params}) => fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${params.strCategory}`),
      },
      {
        path: "/product/:id",
        element: <ShowMealDetails></ShowMealDetails>,
        // loader: ({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
      },
      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
