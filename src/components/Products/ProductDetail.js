import React from "react";

import "./ProductDetail.css";

export default function ProductDetail(prop) {
  const product = prop.product;
  return (
    <div className="detail" key={product.id}>
      <div className="leftDetail">
        <h2 className="title">{product.title}</h2>
        <img className="productImg" src={product.image} />
      </div>
      <div className="rightDetail">
        <span>
          <p className="description">{product.description}</p>
          <div>${product.price}</div>
        </span>
      </div>
    </div>
  );
}
