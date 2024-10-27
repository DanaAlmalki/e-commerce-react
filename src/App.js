import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./fonts/Alegreya.ttf";

import HomePage from "./Pages/HomePage.js";
import WishListPage from "./Pages/WishListPage.js";
import ProductsPage from "./Pages/ProductsPage.js";
import NotFound from "./Pages/NotFound.js";
import LayOut from "./components/LayOut/LayOut.js";
import ProductDetailPage from "./Pages/ProductDetailPage.js";
import "./App.css";

function App() {
  const url = "https://fakestoreapi.com/products";
  // setup useState
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [input, setInput] = useState("");
  const [wishList, setWishList] = useState([]);

  console.log(wishList, "wishList");

  function getData() {
    axios
      .get(url)
      .then((response) => {
        setProductList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  // array of all routes in the app
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/products",
          element: (
            <ProductsPage
              list={productList}
              setInput={setInput}
              input={input}
              wishList={wishList}
              setWishList={setWishList}
            />
          ),
        },
        {
          path: "/products/:productId",
          element: <ProductDetailPage />,
        },
        {
          path: "/wishList",
        },
        {
          path: "/*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
