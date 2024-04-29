import React from "react";
import { useDispatch } from 'react-redux';
import './card.css';
import productList from './productList';
import nav_basket from '../nav/navItems/img/nav_basket.svg';
import AddToCartButton from '../Cart/AddToCartButton';

const Card = (props) => {
    const { folder } = productList[props.indexout];
    // console.log(`./productStore/${folder}`);
    return (
        <div className="card">
            <div className="card_img__holder" style={{ backgroundColor: productList[props.indexout].backgroundColor }}>
                <img className="card_img__img" src={require(`./${folder}`)} alt="img" />
                <div className="overlay">
                    <div className="card_img__addtocart">
                        <AddToCartButton productId={props.indexout} />
                        <img className="basket" src={nav_basket} alt="nav_basket.svg" />
                        <div>
                            <p>Add to cart</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card_txt__holder">
            <h3 className="card_txt__name">{productList[props.indexout].productName}</h3>
            <p className="card_txt__discr">{productList[props.indexout].ptoductDiscr}</p>
            <p className="card_txt__price" style={{color: "#F26376"}}>Price: {productList[props.indexout].price}$</p>
            </div>
        </div>
    );
}

export default Card;
