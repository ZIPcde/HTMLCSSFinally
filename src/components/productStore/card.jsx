import React from "react";
import './card.css';
import { Link } from 'react-router-dom';
import productList from './productList';
import AddToCartButton from '../Cart/AddToCartButton';

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit'
};

const Card = (props) => {
  const { folder } = productList[props.indexout];

  const handleOverlayClick = (event) => {
    event.preventDefault(); 
  };

  return (
    <Link className="card_link_reactrouterdom" to="/product" style={linkStyle}>
      <div className="card">
        <div className="card_img__holder" style={{ backgroundColor: productList[props.indexout].backgroundColor }}>
          <img className="card_img__img" src={require(`./${folder}`)} alt="img" />
          <div className="overlay" onClick={handleOverlayClick}>
            <AddToCartButton productId={props.indexout} />
          </div>
        </div>
        <div className="card_txt__holder">
          <h3 className="card_txt__name lato">{productList[props.indexout].productName}</h3>
          <p className="card_txt__discr lato light st5D5D5D">{productList[props.indexout].ptoductDiscr}</p>
          <p className="card_txt__price lato" style={{color: "#F26376"}}>Price: {productList[props.indexout].price}$</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
