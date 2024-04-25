import React from "react";
import productPict from './img.png';

const Card = () => {
    return (
        <div className="card">
            <div className="card_img__holder">
            <img className="prod" src={productPict} alt="productPict" />
            </div>
            <div className="card_txt__holder">
            <h3 className="productName">Blue bologna jacket</h3>
            <p className="ptoductDiscr"></p>
            <p className="productPrice_$">100</p>
            <p className="gender">m</p>
            <p className="productSize">XL</p>
            </div>
        </div>
    );
}

export default Card;
