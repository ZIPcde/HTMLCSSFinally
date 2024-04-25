import React from 'react';
import "./subscribe.css";
import round from "./img/Layer 40.png";
import nature from "./img/Layer 41.png";

const Subscribe = () => {
    return (
            <div className="subscribe_div__holder" >
                {/* style={{ "background-image": `url(${nature})` }} */}
                <div className="subscribe_div__pict">
                    <img src={round} alt="round" />
                    <p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“</p>
                </div>
                <div className="subscribe_div__email">
                    <h3>SUBSCRIBE </h3>
                    <h4>FOR OUR NEWLETTER AND PROMOTION</h4>
                    <div>
                        <input type="email" placeholder="Enter Your Email" />
                        <button type="submit">Subscribe</button>
                    </div>
                </div>
            </div>
    );
}

export default Subscribe;