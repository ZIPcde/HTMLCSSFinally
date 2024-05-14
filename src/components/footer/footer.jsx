import React from 'react';
import "./footer.css";
import Items from "./footerItems/footerItem";

const Footer = () => {
    return(
    <footer className="black">
        <div className='footer_text'>© 2022  Brand  All Rights Reserved.</div>
        <Items />
    </footer>
    );
    }

    export default Footer;