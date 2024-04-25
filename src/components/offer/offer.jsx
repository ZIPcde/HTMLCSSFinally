import React from 'react';
import "./offer.css";
// import firstMan from "./img/firstMan.png";

const Offer = () => {
    return (
        <div className="offerout">
            <div className="offer">
                <div className="picks3">
                    <div className="1of3">
                        <div className="internalpict picture1">
                            <p className="paragr"><span className="sp4"> 30% OFF </span><br /><span className="sp3">FOR WOMEN</span>
                            </p>

                        </div>
                    </div>
                    <div className="1of3">
                        <div className="internalpict picture2">
                            <p className="paragr"><span className="sp4">HOT DEAL
                            </span><br /><span className="sp3"><span> </span> FOR MEN</span></p>

                        </div>
                    </div>
                    <div className="1of3">
                        <div className="internalpict picture3">
                            <p className="paragr"><span className="sp4">NEW ARRIVALS
                            </span><br /><span className="sp3">FOR KIDS</span></p>

                        </div>
                    </div>
                </div>
                <div className="wide">
                    <div className="internalpict2 picture4">
                        <p className="offer_wide"><span className="sp4">LUXIROUS & TRENDY
                        </span><br /><span className="sp3">ACCESORIES</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offer;