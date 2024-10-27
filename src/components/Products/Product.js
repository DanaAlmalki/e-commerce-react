import React from "react";
import { Link } from "react-router-dom";

import "./product.css";

export default function Product(productProp) {
  const productItem = productProp.product;
  return (
    <div className="product" key={productItem.id}>
      <div className="title">
        <p>{productItem.title}</p>
      </div>
      <img src={productItem.image} />
      <div>${productItem.price}</div>
      <Link to={`${productItem.id}`}>
        <button>More details</button>
      </Link>
      <button>Add to cart</button>
      <button>Add to wishlist</button>
    </div>
  );
}
