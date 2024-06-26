import React from 'react';
import "./header.css";
import firstMan from "./img/firstMan.png";

const Header = () => {
    return (
        <div className="index_pinkbg next-element">
            <div className="index_div_header">
                <img className='index_header_img-firstman' src={firstMan} alt="firstMan" />
                <div className="index_text">
                    <div className="index_rectangle"></div>
                    <div className="index_text2">
                        <p className='index_header_p__nomargin'><span className="index_header_sp1">THE BRAND </span>
                            <br /></p>
                        <div className='index_header-mediumtext-holder' >
                            <span className="index_header_sp2">OF LUXERIOUS </span>              <span className="index_header_sp3">FASHION</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Header;