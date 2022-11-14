import React from "react";
import Logo from "./cryptox.jpg";

function Header() {
  return (
    <div className="header__wrapper">
        <div className="header__logo">
            <img src={Logo} width={50} />
        </div>
        <div className="header__search">
            <div className="header__searchContainer">
                <input type="text" placeholder="Search" />
            </div>
        </div>
        <div className="header__nav">
            <div className="header__nav__item">
                <img src="https://www.flaticon.com/svg/static/icons/svg/1384/1384063.svg" alt="Home" />
            </div>
            <div className="header__nav__item">
                <img src="https://www.flaticon.com/svg/static/icons/svg/1384/1384063.svg" alt="Direct" />
            </div>
            <div className="header__nav__item">
                <img src="https://www.flaticon.com/svg/static/icons/svg/1384/1384063.svg" alt="Explore" />
            </div>
            <div className="header__nav__item">
                <img src="https://www.flaticon.com/svg/static/icons/svg/1384/1384063.svg" alt="Activity" />
            </div>
            <div className="header__nav__item">
                <img src="https://www.flaticon.com/svg/static/icons/svg/1384/1384063.svg" alt="Profile" />
            </div>
        </div>
    </div>
     
  );
}

export default Header;