import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "../components/Admin";
import Cart from "../components/Cart";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Home from "../components/Home";
import Checkout from "../components/CheckOut/Checkout";
import ProductDetails from "../components/Product/ProductDetails";
import Products from "../components/Product/Products";
import ProductContextProvider from "../contexts/ProductContext";
import "../css/HomePage.scss";
import Form from "../components/Login and Register/SignUp";
import About from "../components/About/index";
import SignIn from "../components/Login and Register/SignIn";
import SignUp from "../components/Login and Register/SignUp";
import api from "../api/api";
import UsersContextProvider from "../contexts/UsersContext";
import ContactContextProvider from "../contexts/ContactContext";
const HomePage = () => {
  return (
    <div className="grid-container">
      <ContactContextProvider>
        <UsersContextProvider>
          <ProductContextProvider>
            <Router>
              <Header />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/product">
                  <Products />
                </Route>
                <Route exact path="/cart">
                  <Cart />
                </Route>
                <Route exact path="/proceed">
                  <Checkout />
                </Route>
                <Route exact path="/contact">
                  <Contact />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/loginandRegister">
                  <SignUp />
                </Route>
                <Route exact path="/signIn">
                  <SignIn />
                </Route>
                <Route exact path="/signUp">
                  <SignUp />
                </Route>
                <Route exact path="/product/:id">
                  <ProductDetails />
                </Route>
                <Route path="/admin">
                  <Admin />
                </Route>
              </Switch>
            </Router>
          </ProductContextProvider>
        </UsersContextProvider>
      </ContactContextProvider>
    </div>
  );
};

export default HomePage;
