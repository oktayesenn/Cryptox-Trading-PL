import React from "react";

function Header() {
  return (
    <div className="header__wrapper">
        <div className="header__logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="Instagram Logo" />
        </div>
        <div className="header__search">
            <input type="text" placeholder="Search" />
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