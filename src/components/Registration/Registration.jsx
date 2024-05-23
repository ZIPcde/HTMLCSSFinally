import React from 'react';
import Nav from '../nav/nav';
// import CartControls from './CartControls';
import ProductCardList from './ProductCardList';
import Header from './header/header';
import "./Registration.css";
// import Offer from '../offer/offer';
// import Products from './products';
// import Discount from '../discount/discount';
import Subscribe from '../subscribe/subscribe';
import Footer from '../footer/footer';
// import ProductList from './ProductList';

function Registration() {
    return (
      <div className="registration_App">
        <Nav />
        <Header />
        {/* <Offer /> */}
        {/* <ProductList /> */}
        <ProductCardList />
        {/* <CartControls /> */}
        {/* <Discount /> */}
        <Subscribe />
        <Footer />
      </div>
    );
  }
  
  export default Registration;