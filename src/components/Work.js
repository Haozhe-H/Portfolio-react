import React from "react";
import "../styles/Styles.css";

function Work() {
  return (
    <section className="work" id="work">
      <div className="title">
        <h2>Work</h2>
      </div>

      <div className="container">
        <a className="button" href="https://teriannephillips.github.io/Feastful-Finds/">
          <div className="box">
            <h4>Feastful Finds</h4>
            <div className="box-text">
              <p>"Feastful Finds" is a recipe website that aims to make meal planning and preparation a breeze. With our easy-to-use platform, you can enter the ingredients you have on hand and receive a variety of recipe ideas that will help you make the most of what you already have. No more waste, no more searching for the perfect recipe, just delicious meals that you can make quickly and easily.</p>
            </div>
          </div>
        </a>

        <a className="button" href="https://calm-brook-30132.herokuapp.com/">
          <div className="box">
            <h4>EatsMatch</h4>
            <div className="box-text">
              <p>EatsMatch, is the place to go to save money when ordering in. No need to search through all the services to find the best price and coupon codes - EatsMatch allows users to compare food delivery prices from different services, such as UberEats and DoorDash, and automatically tells them where the price is right. </p>
            </div>
          </div>
        </a>

        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a className="button" href="">
          <div className="box">
            <h4>Work 3</h4>
            <div className="box-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem neque, interdum eget quam nec, laoreet malesuada augue. Sed ex dui, volutpat vitae sapien vitae, laoreet molestie justo. Mauris id elementum dolor. Pellentesque lectus odio, scelerisque a est quis, posuere posuere elit. Vestibulum fermentum purus neque, ut suscipit nunc maximus vel. Sed quis lectus tristique, consectetur elit at, dapibus dui. Donec lobortis elit non dolor dictum, ac lacinia erat porta. (Will be updating later) </p>
            </div>
          </div>
        </a>
      </div>

      <div className="container">
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a className="button" href="">
          <div className="box">
            <h4>Big Work</h4>
            <div className="box-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem neque, interdum eget quam nec, laoreet malesuada augue. Sed ex dui, volutpat vitae sapien vitae, laoreet molestie justo. Mauris id elementum dolor. Pellentesque lectus odio, scelerisque a est quis, posuere posuere elit. Vestibulum fermentum purus neque, ut suscipit nunc maximus vel. Sed quis lectus tristique, consectetur elit at, dapibus dui. Donec lobortis elit non dolor dictum, ac lacinia erat porta. (Will be updating later) </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Work;