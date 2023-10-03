import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import Checkout from "./Checkout";
import SearchResults from "./SearchResults";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/plantproduct",
    element: <SingleProduct />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/checkout",
    element: <Checkout />
  },
  {
    path: "/searchresults",
    element: <SearchResults />
  }
]);

export { router, RouterProvider };
