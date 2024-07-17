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
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/plantproduct",
    element: (
      <Layout>
        <SingleProduct />
      </Layout>
    ),
  },
  {
    path: "/cart",
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Layout>
        <Checkout />
      </Layout>
    ),
  },
  {
    path: "/searchresults",
    element: (
      <Layout>
        <SearchResults />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/signup",
    element: (
      <Layout>
        <Signup />
      </Layout>
    ),
  },
  {
    path: "/plant-quiz",
    element: (
      <Layout>
        <Quiz />
      </Layout>
    ),
  },
  {
    path: "/products",
    element: (
      <Layout>
        <HousePlants />
      </Layout>
    ),
  },
  {
    path: "/plant-tools",
    element: (
      <Layout>
        <PlantTools />
      </Layout>
    ),
  },
]);

export { router, RouterProvider };
