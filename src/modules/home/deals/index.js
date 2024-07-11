import React from 'react'
import './deals.scss';
import { wabChocolate } from '../../../assets/images/jpg';
import { next, star, starG } from '../../../assets/images/png';

export default function Deals() {
  return (
    <>
      <div className="deals">
        <div className="container">
          <div className="deals-grid">
            <div className="deals-grid1">
              <div className="deals-grid1-box animate__animated animate__fadeInLeftBig animate__slow wow" data-wow-offset="10">
                <img src={wabChocolate} alt="wabChocolate" />
                <div className="dg1b-text">
                  <div className="dg1b-text-star">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={starG} alt="starG" />
                  </div>
                  <h4>Mika choco milk chocolate</h4>
                  <span>$90.00 <b>$45.00</b></span>
                  <a href="/">Shop Now <img src={next} alt="next" /></a>
                </div>
              </div>
              <div className="deals-grid1-box animate__animated animate__fadeInLeftBig animate__slow wow" data-wow-offset="200">
                <img src={wabChocolate} alt="wabChocolate" />
                <div className="dg1b-text">
                  <div className="dg1b-text-star">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={starG} alt="starG" />
                  </div>
                  <h4>Mika choco milk chocolate</h4>
                  <span>$90.00 <b>$45.00</b></span>
                  <a href="/">Shop Now <img src={next} alt="next" /></a>
                </div>
              </div>
              <div className="deals-grid1-box animate__animated animate__fadeInLeftBig animate__slow wow" data-wow-offset="300">
                <img src={wabChocolate} alt="wabChocolate" />
                <div className="dg1b-text">
                  <div className="dg1b-text-star">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={starG} alt="starG" />
                  </div>
                  <h4>Mika choco milk chocolate</h4>
                  <span>$90.00 <b>$45.00</b></span>
                  <a href="/">Shop Now <img src={next} alt="next" /></a>
                </div>
              </div>
            </div>
            <div className="deals-grid2">
              <div className="deals-grid2-bg"></div>
              <div className="deals-grid2-div">
                <div className="dg2d-text">
                  <h2>Best Deal This Week</h2>
                  <p>Satisfy Your Sweet Tooth with the Best Deal This Week: Mouthwatering Chocolates and Decadent Cakes for Less!</p>
                </div>
                <div className="dg2d-boxes">
                  <div className="dg2d-boxes-main">
                    <h3>05</h3>
                    <span>Days</span>
                  </div>
                  <div className="dg2d-boxes-main">
                    <h3>14</h3>
                    <span>Hours</span>
                  </div>
                  <div className="dg2d-boxes-main">
                    <h3>32</h3>
                    <span>Min</span>
                  </div>
                  <div className="dg2d-boxes-main">
                    <h3>48</h3>
                    <span>Sec</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
