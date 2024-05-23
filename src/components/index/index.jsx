import React from 'react';
import Nav from '../nav/nav';
import Header from './header/header';
import Offer from '../offer/offer';
import Products from './products/products';
import Discount from '../discount/discount';
import Subscribe from '../subscribe/subscribe';
import Footer from '../footer/footer';
import "./index.css";

function Index() {
    return (
      <div className="index_App">
        <div className="index_center">
        <Nav />
        <Header />
        <Offer />
        <Products />
        <Discount />
        <Subscribe />
        <Footer />
        </div>
      </div>
    );
  }
  
  export default Index;