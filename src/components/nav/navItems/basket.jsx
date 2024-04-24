import React from "react";
import "./basket.css";
import nav_basket from './img/nav_basket.svg';
import nav_Ellipse from './img/nav_Ellipse2.png';
const Basket = () => {
  return (
    <div className="basketcontainer">
      <div className="ellipseholder">
      <p className="basketcounter">0</p>
      <img className="ellipse" src={nav_Ellipse} alt="nav_Ellipse.svg" />
      </div>
      <img className="basket" src={nav_basket} alt="nav_basket.svg" />
    </div>
    );
    }

export default Basket;