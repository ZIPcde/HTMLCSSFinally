import React from 'react';
import Nav from '../nav/nav';
import Header from './header/header';
// import Offer from '../offer/offer';
import Products from './products/products';
import Discount from '../discount/discount';
import Subscribe from '../subscribe/subscribe';
import Footer from '../footer/footer';
import "./Catalog.css";

function Catalog() {
    return (
      <div className="catalog_App">
        <Nav />
        <Header />
        {/* <Offer /> */}
        <Products />
        <Discount />
        <Subscribe />
        <Footer />
      </div>
    );
  }
  
  export default Catalog;