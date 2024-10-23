import logo from "./logo.svg";
import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";
import Products from "./components/Products/products.js";
import Hero from "./components/Hero/Hero.js";
import axios from "axios";
import { useState, useEffect } from "react";
import "./fonts/Alegreya.ttf";
import "./App.css";

function App() {
  const url = "https://fakestoreapi.com/products";
  // setup useState
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Products productsList={productList} />
      <Footer />
    </div>
  );
}

export default App;
