import React from "react";
import { useSelector } from 'react-redux';
import "./basket.css";
import nav_basket from './img/nav_basket.svg';
import nav_Ellipse from './img/nav_Ellipse2.png';
import { Link } from 'react-router-dom';
const Basket = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="basketcontainer">
      <div className="ellipseholder">
      <div className="basketcounter"><p className="basketcounter-p">{totalItems}</p></div>
      <img className="ellipse" src={nav_Ellipse} alt="nav_Ellipse.svg" />
      </div>
      <Link to="/">
                </Link>
                <Link to="/cart">
                <img className="basket" src={nav_basket} alt="nav_basket.svg" />
                </Link>


    </div>
    );
    }

export default Basket;