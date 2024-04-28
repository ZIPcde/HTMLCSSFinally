// import "./nav.css";
import React from "react";
import nav_b from './img/nav_b.png';
import nav_Magnifier from './img/nav_Magnifier.svg';
import nav_Men from './img/nav_Men.svg';
// import nav_Menu from './img/nav_Menu.svg';
import Basket from "../navItems/basket";
import CustomMenu from "../navItems/menu/menu"
const Items = () => {
    return(
        <div className="navflex">
          <div className="peaces1">
        <img src={nav_b} alt="nav_b.png" />
        <img src={nav_Magnifier} alt="av_Magnifier" />
          </div>
          <div className="peaces2">
          <CustomMenu />
        {/* <img src={nav_Menu} alt="nav_Menu.svg" /> */}
        <img src={nav_Men} alt="nav_Men.svg" />
        <Basket />
          </div>
      </div>
    );
    }

    export default Items;