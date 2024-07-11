import React from 'react'
import './collection.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { collection1, collection2, collection3, collection4, greater } from '../../../assets/images/png';

export default function Collection() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="collection">
        <div className="collection1">
          <div className="collection1-bg"></div>
          <div className="collection1-div">
            <div className="lovely-div-head">
              <h2>Chocolate Collection</h2>
            </div>
            <p>Excessive consumption of anything is harmful to health, whether it is veggies or chocolate. One must not eat more than 30 to 60 grams of chocolate in a day. Consuming too much chocolate will increase your daily calorie count leading to weight gain and other issues.
              Shop Now</p>
            <div className="main-button" id='white-button'>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
        <div className="collection2">
          <div className="container">
            <Slider {...settings}>
              <div>
                <div className="slider-main">
                  <div className="slider-box">
                    <div className="slider-text">
                      <h3>Milk Chocolate</h3>
                    </div>
                    <a href="/">View More <img src={greater} alt="greater" /><img src={greater} alt="greater" /></a>
                    <div className="slider-img">
                      <img src={collection1} alt="collection1" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="slider-main">
                  <div className="slider-box">
                    <div className="slider-text">
                      <h3>Milk Chocolate</h3>
                    </div>
                    <a href="/">View More <img src={greater} alt="greater" /><img src={greater} alt="greater" /></a>
                    <div className="slider-img">
                      <img src={collection2} alt="collection2" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="slider-main">
                  <div className="slider-box">
                    <div className="slider-text">
                      <h3>Milk Chocolate</h3>
                    </div>
                    <a href="/">View More <img src={greater} alt="greater" /><img src={greater} alt="greater" /></a>
                    <div className="slider-img">
                      <img src={collection3} alt="collection3" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="slider-main">
                  <div className="slider-box">
                    <div className="slider-text">
                      <h3>Milk Chocolate</h3>
                    </div>
                    <a href="/">View More <img src={greater} alt="greater" /><img src={greater} alt="greater" /></a>
                    <div className="slider-img">
                      <img src={collection4} alt="collection4" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="slider-main">
                  <div className="slider-box">
                    <div className="slider-text">
                      <h3>Milk Chocolate</h3>
                    </div>
                    <a href="/">View More <img src={greater} alt="greater" /><img src={greater} alt="greater" /></a>
                    <div className="slider-img">
                      <img src={collection1} alt="collection1" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="slider-main">
                  <div className="slider-box">
                    <div className="slider-text">
                      <h3>Milk Chocolate</h3>
                    </div>
                    <a href="/">View More <img src={greater} alt="greater" /><img src={greater} alt="greater" /></a>
                    <div className="slider-img">
                      <img src={collection2} alt="collection2" />
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}
