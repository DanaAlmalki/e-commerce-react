import React from "react";

import Products from "../components/Products/products";

export default function ProductsPage(props) {
  return (
    <div>
      <Products productsList={props.list} />
    </div>
  );
}
