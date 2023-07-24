import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import backGroundVideo from"../venkateshwara-realty.mp4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



class Hero extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      dots: false,
      arrows: false,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: true,
    };

    return (
      <section className="hero-area">
        <div className="hero-social">
          <ul>
            <li>
              <Link to="/">
                <i className="fa fa-pinterest-p" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-facebook-f" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-instagram" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-twitter" />
              </Link>
            </li>
          </ul>
          <p>Follow Us</p>
        </div>

        <div className="hero-slider">
          <div className="hero_arrows">
            <button className="button" onClick={this.previous}>
              <i className="fa fa-angle-left"></i>
            </button>
            <button className="button" onClick={this.next}>
              <i className="fa fa-angle-right"></i>
            </button>
          </div>
          <video className="background-video" autoPlay loop muted>
            <source src={backGroundVideo} type="video/mp4"/>
          </video>
        </div>
      </section>
    );
  }
}

export default Hero;
