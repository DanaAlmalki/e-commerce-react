import React from "react";
import { Link } from "react-router-dom";

import "./product.css";

export default function Product(productProp) {
  const { product, wishList, setWishList } = productProp;

  function addToFav(item) {
    setWishList([...wishList, item]);
  }

  return (
    <div className="product" key={product.id}>
      <div className="title">
        <p>{product.title}</p>
      </div>
      <img src={product.image} />
      <div>${product.price}</div>
      <Link to={`${product.id}`}>
        <button>More details</button>
      </Link>
      <button onClick={() => addToFav(product)}>Add to wishlist</button>
    </div>
  );
}
