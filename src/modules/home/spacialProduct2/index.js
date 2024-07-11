import React from 'react'
import './product2.scss';
import { product5, product6, product7, product8 } from '../../../assets/images/png';

export default function Product2() {
  return (
    <>
      <div className="product2">
        <div className="container">
          <div className="product-head">
            <h2>Spacial Product</h2>
          </div>
          <div className="product-grid">
            <div className="product-grid-box">
              <div className="product-grid-img">
                <img src={product5} alt="product5" />
              </div>
              <div className="product-grid-text">
                <h3>Bittersweet Chocolate</h3>
                <h4><del>$20.00</del> <span>$15.00</span></h4>
              </div>
            </div>
            <div className="product-grid-box">
              <div className="product-grid-img">
                <img src={product6} alt="product6" />
              </div>
              <div className="product-grid-text">
                <h3>Milk Chocolate</h3>
                <h4><del>$29.00</del> <span>$20.00</span></h4>
              </div>
            </div>
            <div className="product-grid-box">
              <div className="product-grid-img">
                <img src={product7} alt="product7" />
              </div>
              <div className="product-grid-text">
                <h3>Dark Chocolate</h3>
                <h4><del>$24.00</del> <span>$19.00</span></h4>
              </div>
            </div>
            <div className="product-grid-box">
              <div className="product-grid-img">
                <img src={product8} alt="product8" />
              </div>
              <div className="product-grid-text">
                <h3>Ruby Chocolate</h3>
                <h4><del>$39.00</del> <span>$29.00</span></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
