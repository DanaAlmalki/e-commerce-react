import React from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import ProductDetail from "../components/Products/ProductDetail";

export default function ProductDetailPage() {
  const params = useParams();
  let productId = params.productId;

  const url = "https://fakestoreapi.com/products/" + productId;

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function getData() {
    axios
      .get(url)
      .then((response) => {
        setProduct(response.data);
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

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
}
