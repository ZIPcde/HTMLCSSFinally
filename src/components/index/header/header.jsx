import React from 'react';
import "./header.css";
import firstMan from "./img/firstMan.png";

const Header = () => {
    return (
        <header className="pinkbg next-element">
            <div className="div_header">
                <img src={firstMan} alt="firstMan" />
                <div className="text">
                    <div className="rectangle"></div>
                    <div className="text2">
                        <p className='header_p__nomargin'><span className="header_sp1">THE BRAND </span>
                            <br /></p>
                        <div >
                            <span className="header_sp2">OF LUXERIOUS </span>              <span className="header_sp3">FASHION</span>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
}

export default Header;