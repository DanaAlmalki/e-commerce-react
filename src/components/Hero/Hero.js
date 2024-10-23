import React from "react";
import image from "../../images/vogue-3979499_1280.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <img src={image} />
      <div className="phrase">
        <h1>All you need to build your dream closet at one place</h1>
        <button>Shop Now</button>
      </div>
    </div>
  );
}
