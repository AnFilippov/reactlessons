import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import ModalAuth from "../ModalAuth/ModalAuth";

const Header = () => {

  const [isLoginModal, setIsLoginModal] = useState(false);

  const toogleLoginModalOpen = () => {
    setIsLoginModal(!isLoginModal)
  }

  const logo = require("../../assets/img/icon/logo.svg").default

  return (
    <header className="store-header">
      <div className="container">

        <div className="store-header__wrapper">

          <Link to='/'>
            <img src={logo} alt="logo" />
          </Link>
          <label className="store-header__address">
            <input type="text" className='input store-header__input-address' placeholder='Адрес доставки' />
          </label>
          <div className="store-header__buttons">
            <span className="store-header__user-name">Login</span>
            <button className="button button-primary button-auth" onClick={toogleLoginModalOpen}>
              <span className="button-auth-svg"></span>
              <span className="button-text">Войти</span>
            </button>

            <button className="button button-cart">
              <span className="button-cart-svg"></span>
              <span className="button-text">Корзина</span>
            </button>

            <button className="button button-primary button-out">
              <span className="button-out-svg"></span>
              <span className="button-text">Выйти</span>
            </button>
          </div>
        </div>
      </div>

      {isLoginModal && <ModalAuth onClose={toogleLoginModalOpen} />}
    </header>
  )
}


export default Header;