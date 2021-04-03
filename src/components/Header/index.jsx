import React, { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { Link } from "react-router-dom";
import Menu from "../../svg/bars-solid.svg";
import Close from "../../svg/times-solid.svg";
import CartIcon from "../../svg/shopping-cart-solid.svg";
import "../../css/Header.scss";
import logo from "../../assets/image/logo.png";
const Header = () => {
  const { cartItems } = useContext(ProductContext);

  return (
    <header>
      <div className="header__menu">
        <img src={Menu} alt="pic1" width="20" />
      </div>
      <div className="header__logo">
        <h1>
          <Link to="/product">
            <img src={logo} alt={logo} width="100" />
          </Link>
        </h1>
      </div>
      <nav className="header__navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/loginandRegister">Login / Register</Link>
          </li>
          <li className="header__nav--close">
            <img src={Close} alt="pic2" width="20" />
          </li>
        </ul>
        <div className="header__nav--cart">
          <span>{cartItems.length}</span>
          <Link to="/cart">
            <img src={CartIcon} alt="pic3" width="20" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
