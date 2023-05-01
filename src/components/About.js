import React from "react";
import "../styles/Styles.css";

function About() {
  return (
    <section className="about" id="about-me">
      <div className="main">
        <img src={process.env.PUBLIC_URL + './avatar.png'} alt="personal avatar" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem
            neque, interdum eget quam nec, laoreet malesuada augue. Sed ex dui,
            volutpat vitae sapien vitae, laoreet molestie justo. Mauris id
            elementum dolor. Pellentesque lectus odio, scelerisque a est quis,
            posuere posuere elit. Vestibulum fermentum purus neque, ut suscipit
            nunc maximus vel. Sed quis lectus tristique, consectetur elit at,
            dapibus dui. Donec lobortis elit non dolor dictum, ac lacinia erat
            porta. (Will be updating soon)
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
