import React from "react";

import "./product.css";

export default function Product(productProp) {
  const productItem = productProp.product;
  return (
    <div className="product">
      <div className="title">
        <p>{productItem.title}</p>
      </div>
      <img src={productItem.image} />
      <div>{productItem.price}</div>
    </div>
  );
}
