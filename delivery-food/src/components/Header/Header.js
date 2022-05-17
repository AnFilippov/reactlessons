import React from "react";

const Header = () => {
  const logo = require("../../assets/img/icon/logo.svg").default

  return (
    <header className="store-header">
      <div className="container">

        <div className="store-header__wrapper">

          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <label className="store-header__address">
            <input type="text" className='input store-header__input-address' placeholder='Адрес доставки' />
          </label>
        </div>
      </div>
    </header>
  )
}


export default Header;