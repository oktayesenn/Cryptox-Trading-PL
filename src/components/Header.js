import React from "react";
import Logo from "./cryptox.jpg";
import './Header.css';

function Header() {
  return (
    // Logo
    <div className="header__wrapper">
        <div className="header__logo">
            <img src={Logo} width={100} />
        </div>
        {/* Search */}
        <div className="header__search">
            <div className="header__searchContainer">
                <input type="text" placeholder="Search" />
            </div>
        </div>
        {/* Menu */}
        <div className="header__menuItems">
            <a href="#">News</a>
            <a href="#">Portfolio</a>
            <a href="#">Cash</a>
            <a href="#">Messages</a>
            <a href="#">Account</a>
        </div>
    </div>
     
  );
}

export default Header;