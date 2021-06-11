import React from "react";
import { Link } from "react-router-dom";
import "./Category.scss";
const Category = () => {
  const style = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <div className="category__container">
      <div className="category__container--items">
        <div className="items__head">
          <p>Categories</p>
          <hr />
        </div>
        <div className="items__body">
          <ul className="items__body-content">
            <Link style={style} to="/">
              All Products
            </Link>
            <i className="fa fa-angle-right"></i>
          </ul>

          <ul className="items__body-content">
            <Link style={style} to="/Shirts">
              Shirts
            </Link>
            <i className="fa fa-angle-right"></i>
          </ul>

          <ul className="items__body-content">
            <Link style={style} to="/Trousers">
              Trousers
            </Link>
            <i className="fa fa-angle-right"></i>
          </ul>

          <ul className="items__body-content">
            <Link style={style} to="/T-shirts">
              T-shirts
            </Link>
            <i className="fa fa-angle-right"></i>
          </ul>
          <ul className="items__body-content">
            <Link style={style} to="/Coats">
              Coats
            </Link>
            <i className="fa fa-angle-right"></i>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;
