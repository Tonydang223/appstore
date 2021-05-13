import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { Link, useHistory } from "react-router-dom";
import Menu from "../../svg/bars-solid.svg";
import Close from "../../svg/times-solid.svg";
import CartIcon from "../../svg/shopping-cart-solid.svg";
import "../../css/Header.scss";
import logo from "../../assets/image/logo.png";
import { UsersContext } from "../../contexts/UsersContext";
import Account from "../Login and Register/Account";
import MenuListComposition from "./MenuListComposition";
const Header = () => {
  const { cartItems, setCartItems } = useContext(ProductContext);
  const history = useHistory();
  const { setCurrentUser, currentUser } = useContext(UsersContext);
  const onClickLogOut = () => {
    setCurrentUser("");
    setCartItems([]);
    localStorage.removeItem("current", JSON.stringify(currentUser));
    history.push("/signIn");
  };

  const handleMovingCart = () => {
    if (currentUser) {
      history.push("/cart");
    } else {
      alert("You must to login to do that");
    }
  };
  // useEffect(() => {
  //   localStorage.removeItem("current", JSON.stringify(currentUser));
  //   setCartItems([]);
  // }, [currentUser])
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
          {!currentUser ? (
            <li>
              <Link to="/loginandRegister">Login / Register</Link>
            </li>
          ) : (
            <>
              <li>
                <MenuListComposition
                  onClickLogOut={onClickLogOut}
                  currentUser={currentUser}
                />
              </li>
            </>
          )}

          <li className="header__nav--close">
            <img src={Close} alt="pic2" width="20" />
          </li>
        </ul>
        <div className="header__nav--cart" onClick={handleMovingCart}>
          <span>{cartItems.length}</span>
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/shopping-cart.png"
            alt="pic3"
            width="20"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
