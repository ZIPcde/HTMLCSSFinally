import React from "react";

const Menufilter = () => {
    return(
        <>
        <div className="menu_red__container">
          <div className="menu_sq__red"></div>
          <div className="menu_h3__redholder"><h3 className="menu_category__red">CATEGORY</h3></div>
        </div>
          
          <ul className="popup_menu__ul">
            <li>Accessories</li>
            <li>Bags</li>
            <li>Denim</li>
            <li>Hoodies & Sweatshirts</li>
            <li>Jackets & Coats</li>
            <li>Polos</li>
            <li>Shirts</li>
            <li>Shoes</li>
            <li>Sweaters & Knits</li>
            <li>T-Shirts</li>
            <li>Tanks</li>
          </ul>
          <div className="menu_red__container">
          <div className="menu_sq__red"></div>
          <div className="menu_h3__redholder"><h3 className="menu_category__red">BRAND</h3></div>
        </div>
        <div className="menu_red__container">
          <div className="menu_sq__red"></div>
          <div className="menu_h3__redholder"><h3 className="menu_category__red">DESIGNER</h3></div>
        </div>
        </>
    );
    }

    export default Menufilter;