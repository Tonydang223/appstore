import React, { useContext, useState } from "react";
import "./style.css";
import Hero from "../../assets/image/hero.png";
import Brand1 from "../../assets/image/brand1.png";
import Brand2 from "../../assets/image/brand2.png";
import Brand3 from "../../assets/image/brand3.png";
import Brand4 from "../../assets/image/brand4.png";
import Brand5 from "../../assets/image/brand5.png";
import Brand6 from "../../assets/image/brand6.png";
import Brand7 from "../../assets/image/brand7.png";
import Promo1 from "../../assets/image/promo1.jpg";
import Promo2 from "../../assets/image/promo2.jpg";
import Promo3 from "../../assets/image/promo3.jpg";
import Promo4 from "../../assets/image/promo4.jpg";
import Promo5 from "../../assets/image/promo5.jpg";
import Promo6 from "../../assets/image/promo6.jpg";
import Promo7 from "../../assets/image/promo7.jpg";
import Promo8 from "../../assets/image/promo8.jpg";
import Footer from "../Footer";
import { ProductContext } from "../../contexts/ProductContext";
import Star from "../Star";
import { Link } from "react-router-dom";
const MainPage = () => {
  const { products, handleAddToCart } = useContext(ProductContext);
  const productBestSeller = products.slice(0, 6);

  const startDetail = productBestSeller.map((product) =>
    product.rate.map((el) => el.star)
  );

  return (
    <>
      <div className="hero">
        <div className="left">
          <span>Exclusive Sales</span>
          <h1>UP TO 50% OFF ON SALES</h1>
          <small>Get all exclusive offers for the season</small>
          <a href="">View Collection </a>
        </div>
        <div className="right">
          <img src={Hero} alt="" />
        </div>
      </div>

      <section className="section promotion">
        <div className="title">
          <h2>Shop Collections</h2>
          <span>Select from the premium product and save plenty money</span>
        </div>

        <div className="promotion-layout container">
          <div className="promotion-item">
            <img src={Promo1} alt="" />
            <div className="promotion-content">
              <h3>FOR MEN</h3>
              <a href="">SHOP NOW</a>
            </div>
          </div>

          <div className="promotion-item">
            <img src={Promo2} alt="" />
            <div className="promotion-content">
              <h3>CASUAL SHOES</h3>
              <a href="">SHOP NOW</a>
            </div>
          </div>

          <div className="promotion-item">
            <img src={Promo3} alt="" />
            <div className="promotion-content">
              <h3>FOR WOMEN</h3>
              <a href="">SHOP NOW</a>
            </div>
          </div>

          <div className="promotion-item">
            <img src={Promo4} alt="" />
            <div className="promotion-content">
              <h3>LEATHER BELTS</h3>
              <a href="">SHOP NOW</a>
            </div>
          </div>

          <div className="promotion-item">
            <img src={Promo5} alt="" />
            <div className="promotion-content">
              <h3>DESIGNER BAGS</h3>
              <a href="">SHOP NOW</a>
            </div>
          </div>

          <div className="promotion-item">
            <img src={Promo6} alt="" />
            <div className="promotion-content">
              <h3>WATCHES</h3>
              <a href="">SHOP NOW</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section products">
        <div className="title">
          <h2>New Products</h2>
          <span>
            Select from the premium product brands and save plenty money
          </span>
        </div>

        <div className="product-layout">
          {productBestSeller.map((product) => {
            return (
              <div className="product" key={product.id}>
                <div className="img-container">
                  <img src={product.image} alt="" />
                  <div
                    className="addCart"
                    onClick={() => handleAddToCart(product)}
                  >
                    <i className="fas fa-shopping-cart"></i>
                  </div>

                  <ul className="side-icons">
                    <span>
                      <Link to={`/product/${product.id}`}>
                        <i className="fas fa-sliders-h"></i>
                      </Link>
                    </span>
                  </ul>
                </div>
                <div className="bottom">
                  <p>{product.title}</p>
                  <div className="price">
                    <span>${product.price}</span>
                    <span
                      className="discount"
                      style={{ color: "grey", fontSize: "1.2rem" }}
                    >
                      ${product.discount}
                    </span>
                  </div>
                  <div className="star">
                    <Star rating={product.rate} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section advert">
        <div className="advert-layout container">
          <div className="item ">
            <img src={Promo7} alt="" />
            <div className="content left">
              <span>Exclusive Sales</span>
              <h3>Spring Collections</h3>
              <a href="">View Collection</a>
            </div>
          </div>
          <div className="item">
            <img src={Promo8} alt="" />
            <div className="content  right">
              <span>New Trending</span>
              <h3>Designer Bags</h3>
              <a href="">Shop Now </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MainPage;
