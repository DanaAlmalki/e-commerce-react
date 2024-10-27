import React from "react";

import Product from "./Product.js";
import "./products.css";

export default function products(props) {
  const { productsList, setInput, input, wishList, setWishList } = props;

  function onChangeHandler(event) {
    setInput(event.target.value);
  }

  let products = productsList;

  if (input) {
    products = productsList.filter((product) =>
      product.title.toLowerCase().includes(input.toLowerCase())
    );
  }

  return (
    <div className="productsContainer">
      <div className="search">
        <h2>Products</h2>
        <form>
          <input
            type="text"
            placeholder="Enter product name"
            onChange={onChangeHandler}
          ></input>
        </form>
      </div>
      <div className="products">
        {products.map((productItem) => {
          return (
            <Product
              product={productItem}
              wishList={wishList}
              setWishList={setWishList}
            />
          );
        })}
      </div>
    </div>
  );
}
