import React from 'react';
import "./header.css";
import firstMan from "./img/firstMan.png";

const Header = () => {
    return (
        <header className="pinkbg">
            <div className="div_header">
                <img src={firstMan} alt="firstMan" />
                <div class="text">
                    <div class="rectangle"></div>
                    <div class="text2">
                        <p className='header_p__nomargin'><span class="header_sp1">THE BRAND </span>
                            <br /></p>
                        <div >
                            <span class="header_sp2">OF LUXERIOUS </span>              <span class="header_sp3">FASHION</span>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
}

export default Header;