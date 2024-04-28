import React from "react";
import productPict from './img.png';

const Card = () => {
    return (
        <div>
            <img className="prod" src={productPict} alt="productPict" />
            <h3 className="productName">Blue bologna jacket</h3>
            <p className="ptoductDiscr"></p>
            <p className="productPrice_$">100</p>
            <p className="gender">m</p>
            <p className="productSize">XL</p>
        </div>
    );
}

export default Card;
