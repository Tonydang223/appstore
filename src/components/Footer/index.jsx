import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer__container">
            <div className="footer__container--row">
              <div className="footer__container--col">
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="#" target="_blank" rel="noopener">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#">Our services</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                  <li>
                    <a href="#">Affiliates program</a>
                  </li>
                </ul>
              </div>
              <div className="footer__container--col">
                <h4>Get Helps</h4>
                <ul>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Shipping</a>
                  </li>
                  <li>
                    <a href="#">Returns</a>
                  </li>
                  <li>
                    <a href="#">Order status</a>
                  </li>
                  <li>
                    <a href="#">Payment options</a>
                  </li>
                </ul>
              </div>
              <div className="footer__container--col">
                <h4>Online Shop</h4>
                <ul>
                  <li>
                    <a href="#">Pants</a>
                  </li>
                  <li>
                    <a href="#">Trouser</a>
                  </li>
                  <li>
                    <a href="#">T-Shirt</a>
                  </li>
                  <li>
                    <a href="#">Jean</a>
                  </li>
                </ul>
              </div>
              <div className="footer__container--col">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
