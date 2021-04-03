import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "../components/Admin";
import Cart from "../components/Cart";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Home from "../components/Home";
import Proceed from "../components/Proceed";
import ProductDetails from "../components/Product/ProductDetails";
import Products from "../components/Product/Products";
import ProductContextProvider from "../contexts/ProductContext";
import "../css/HomePage.scss";
import Form from "../components/Login and Register/SignUp"
import SignIn from "../components/Login and Register/SignIn";
import SignUp from "../components/Login and Register/SignUp"
const HomePage = () => {
  return (
    <Fragment>
      <div className="grid-container">
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
                <Proceed />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/loginandRegister">
                <Form/>
              </Route>
              <Route exact path="/signIn">
                  <SignIn/>
              </Route>
              <Route exact path="/signUp">
                  <SignUp/>
              </Route>
              <Route exact path="/product/:id">
                <ProductDetails />
              </Route>
              <Route exact path="/admin">
                <Admin />
              </Route>
            </Switch>
          </Router>
        </ProductContextProvider>
      </div>
    </Fragment>
  );
};

export default HomePage;
