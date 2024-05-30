import React from 'react';
import "./subscribe.css";
import round from "./img/Layer 40.png";
import subsrbcg from "./img/Layer 41.png";
import red from "./img/Rounded Rectangle 5 copy.png";
import grey from "./img/Rounded Rectangle 6.png";
// import nature from "./img/Layer 41.png";

const Subscribe = () => {
    return (
            <div className="subscribe_div__holder" >
                <div className="subscribe_bcgrnd__holder">
                    <img className='subscr_bckgr_img' src={subsrbcg} alt="subscr_img" />
                </div>    
                <div className="subscribe_div__internalholder">
                <div className="subscribe_div__pict1">
                    <div className="subscribe_pict__frameholder1">
                    <div className="subscribe_pict__holder">
                    <img className="subscribe_pict__picture" src={round} alt="round" />
                    </div>
                    </div>
                    <div className="subscribe_pict__textholder">
                    <p className="subscribe_pict__discrholder">“Vestibulum quis porttitor dui! Quisque</p><p className="subscribe_pict__discrholder"> viverra nunc mi, a pulvinar purus</p> <p className="subscribe_pict__discrholder">condimentum“</p>
                    </div>
                    
                </div>
                <div className="subscribe_div__email">
                    <h3 className="subscribe_pict__discrholder">SUBSCRIBE </h3>
                    <h4 className="subscribe_pict__discrholder subscribe_pict__discrholder-end">FOR OUR NEWLETTER AND PROMOTION</h4>
                    <div className="subscribe_input__centering">
                        <div className="subscribe_input__frame">
                            <div className="subscribe_left-bckg"></div>
                            <div className="subscribe_right-bckg"></div>
                            {/* <img className='subscribe_left-bckg' src={grey} alt="red" />
                            <img className='subscribe_right-bckg'src={red} alt="red" /> */}
                        </div>
                        <div className="subscribe_input__frame2">
                        <input className="subscribe_input__email" type="email" placeholder="Enter Your Email" />
                        <button className="subscribe_input__btn" type="submit">Subscribe</button>
                        </div>

                    </div>
                </div>
                </div>
            </div>
    );
}

export default Subscribe;