import React from "react";
import './card.css';
import productList from './productList';


const Card = (props) => {
    const { folder } = productList[props.indexout];
    console.log(`./productStore/${folder}`);
    return (
        <div className="card">
            <div className="card_img__holder" style={{ backgroundColor: productList[props.indexout].backgroundColor }}>
            <img className="card_img__img" src={require(`./${folder}`)} alt="img" />
            </div>
            <div className="card_txt__holder">
            <h3 className="card_txt__name">{productList[props.indexout].productName}</h3>
            <p className="card_txt__discr">{productList[props.indexout].ptoductDiscr}</p>
            <p className="card_txt__price" style={{color: "red"}}>Price: {productList[props.indexout].price}$</p>
            </div>
        </div>
    );
}

export default Card;
