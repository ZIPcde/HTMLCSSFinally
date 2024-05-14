import React from 'react';
import "./discount.css";
import crown from "./img/crown.svg";
import perc from "./img/perc.svg";
import Truck from "./img/Truck.svg";

const Discount = () => {
    return (
            <div className="div_discount">
                <div className="div_discount__holder">
                    <div>
                        <img src={Truck} alt="Truck" />
                    </div>
                    <h3 className="delivery_text">Free Delivery</h3>
                    <p className="delivery_text__p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                </div>
                <div className="div_discount__holder">
                    <div>
                         <img src={crown} alt="crown" />
                    </div>
                    <h3 className="delivery_text">Sales & discounts</h3>
                    <p className="delivery_text__p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                </div>
                <div className="div_discount__holder">
                    <div>
                         <img src={perc} alt="perc" />
                    </div>
                    <h3 className="delivery_text">Quality assurance</h3>
                    <p className="delivery_text__p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                </div>
            </div>
    );
}

export default Discount;