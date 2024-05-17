import React from 'react';
import "./header.css";

const Header = () => {
    return (
        <header className="catalog_pinkbg flex next-element">
            <div className="catalog_header__holder">
                <h2 className='catalog_header__header-h2 red'>NEW ARRIVALS</h2>
                <div className='catalog_header__nav-holder'>
                    <a href="./" className="catalog_header__nav-links">HOME / </a>
                    <a href="./catalog" className="catalog_header__nav-links">MEN /</a>
                    <a href="./catalog" className="catalog_header__nav-links red">NEW ARRIVALS</a>
                </div>
            </div>
        </header >
    );
}

export default Header;