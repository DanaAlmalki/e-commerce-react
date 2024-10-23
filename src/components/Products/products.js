import React from "react";

import Product from "./Product.js";
import "./products.css";

//import Product from "./Product.js";

export default function products(products) {
  // products = {productsList:[{} {} {}]}
  return (
    <div className="productsContainer">
      <h2>Products</h2>
      <div className="products">
        {products.productsList.map((productItem) => {
          return <Product product={productItem} />;
        })}
      </div>
    </div>
  );
}
