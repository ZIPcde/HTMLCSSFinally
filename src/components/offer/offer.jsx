import React from 'react';
import "./offer.css";
// import firstMan from "./img/firstMan.png";

const Offer = () => {
    return (
        <div className="offerout">
            <div className="offer">
                <div className="picks3">
                    <div className="div1of3">
                        <div className="internalpict picture1">
                        <div className="offer_bcg-black"></div>
                            <img className='offer_picture' src={require('./img/Layer 43.png')} alt="for women" />
                            <p className="offerout_paragr"><span className="offerout_sp4"> 30% OFF </span><br /><span className="offerout_sp3">FOR WOMEN</span>
                            </p>

                        </div>
                    </div>
                    <div className="div1of3">
                        <div className="internalpict picture2">
                        <div className="offer_bcg-black"></div>
                            <img className='offer_picture' src={require('./img/Layer 30.png')} alt="for men" />
                            <p className="offerout_paragr"><span className="offerout_sp4">HOT DEAL
                            </span><br /><span className="offerout_sp3"><span> </span> FOR MEN</span></p>

                        </div>
                    </div>
                    <div className="div1of3">
                        <div className="internalpict picture3">
                        <div className="offer_bcg-black"></div>
                            <img className='offer_picture' src={require('./img/Layer 44.png')} alt="for kids" />
                            <p className="offerout_paragr"><span className="offerout_sp4">NEW ARRIVALS
                            </span><br /><span className="offerout_sp3">FOR KIDS</span></p>

                        </div>
                    </div>
                <div className="wide">
                    <div className="internalpict2 picture4">
                        <div className="offer_bcg-black"></div>
                        <img className='offer_picture-wide' src={require('./img/Layer 45.png')} alt="ACCESORIES" />
                        <p className="offerout_paragr"><span className="offerout_sp4">LUXIROUS & TRENDY
                        </span><br /><span className="offerout_sp3">ACCESORIES</span></p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Offer;