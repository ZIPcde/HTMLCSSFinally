import React, { useState } from 'react';
import "./menu.css";
// import Tooltip from '@mui/material/Tooltip';
import NavMenu from '../img/nav_Menu.svg';
import Filling from './fillingOfMenu';

const PopupMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="popup-menu-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={NavMenu} alt="menuBtnImg"/>
      {isOpen && (
        <div className="popup-menu">
          <Filling />
        </div>
      )}
    </div>
  );
};

export default PopupMenu;