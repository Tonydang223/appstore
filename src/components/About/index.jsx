import React from "react";
import Clothing from "../../assets/image/clothing.jpg";
import Footer from "../Footer";
import "./About.scss";
const About = () => {
  return (
    <>
      <div className="about__container">
        <div className="about__container--title">
          <h1>About Us</h1>
        </div>
        <div className="about__container--content">
          <div className="about__content--above">
            <div className="image-above">
              <img src={Clothing} alt="clothing" />
            </div>
            <div className="article-above">
              <h4>
                <span>About</span> our website
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                possimus. Non necessitatibus unde delectus, quasi libero
                suscipit debitis. Quas, non. A doloribus repellat ad natus
                itaque illum nulla molestias minus placeat iure magni ea
                sapiente incidunt mollitia sint quam, tenetur laudantium nihil
                id quis eum modi in. Quia, unde rerum. Hic rem architecto
                aliquam expedita eos reprehenderit voluptatem temporibus
                praesentium corrupti, natus officiis doloribus veniam mollitia
                laboriosam voluptate ullam eius obcaecati, recusandae optio
                tempore assumenda ipsum.
              </p>
              <p>
                Quas aliquid harum incidunt expedita, debitis pariatur similique
                voluptate mollitia! Quaerat explicabo exercitationem dolores?
                Quaerat facilis magnam dolores? Ipsa suscipit dolore officiis
                asperiores recusandae.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
