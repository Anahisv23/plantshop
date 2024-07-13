import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HousePlants from "./HousePlants";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import Checkout from "./Checkout";
import SearchResults from "./SearchResults";
import Login from "./Login";
import Signup from "./Signup";
import Quiz from "./Quiz";
import PlantTools from "./PlantTools";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/plantproduct",
    element: <SingleProduct />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/searchresults",
    element: <SearchResults />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/plant-quiz",
    element: <Quiz />,
  },
  {
    path: "/products",
    element: <HousePlants />,
  },
  {
    path: "/plant-tools",
    element: <PlantTools />
  }
]);

export { router, RouterProvider };
