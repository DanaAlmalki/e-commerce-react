import React from "react";

import Products from "../components/Products/products";

export default function ProductsPage(props) {
  const { list, setInput, input, wishList, setWishList } = props;
  return (
    <div>
      <Products
        productsList={list}
        setInput={setInput}
        input={input}
        wishList={wishList}
        setWishList={setWishList}
      />
    </div>
  );
}
