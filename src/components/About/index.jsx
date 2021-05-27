import React from "react";
import Clothing from "../../assets/image/clothing.jpg";
import Footer from "../Footer";
import "./About.scss";
import {useContext, useState} from 'react'
import { ProductContext } from "../../contexts/ProductContext";
import Review from "./Review";
import History from "./History";
import Event from "./Event";
const About = () => {
  const [page, setPage] = useState("history");
  return (
    <>
      <div className="about__container">
        <div className="about__container--content">
          <div className="about__content--above">
            <div className="menu-above">
              <h2>Coi Clothing</h2>
              <div className="menu-list">
                <ul>
                  <li onClick={() => setPage("history")}><a>History</a></li>
                  <li onClick={() => setPage("review")}><a>Review</a> </li>
                  <li onClick={() => setPage("event")}><a>Event</a></li>
                </ul>
              </div>
            </div>
            <div className="article-above">
              <div className="inside">
                 {page === "review"&& <Review/>}
                 {page === "history"&& <History/>}
                 {page === "event"&& <Event/>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
