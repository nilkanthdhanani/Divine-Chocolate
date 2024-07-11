import React from 'react'
import './product.scss';
import { product1, product2, product3, product4 } from '../../../assets/images/jpg';

export default function Product() {
  return (
    <>
      <div className="product">
        <div className="container">
          <div className="product-head">
            <h2 className="animate__animated animate__fadeInUpBig wow" data-wow-offset="100">Spacial Product</h2>
          </div>
          <div className="product-grid animate__animated animate__fadeInUpBig wow" data-wow-offset="200">
            <div className="product-grid-box">
              <img src={product1} alt="product1" />
              <h3>Cadbury Dairy Milk</h3>
            </div>
            <div className="product-grid-box">
              <img src={product2} alt="product2" />
              <h3>Mars Bar</h3>
            </div>
            <div className="product-grid-box">
              <img src={product3} alt="product3" />
              <h3>Cadbury  Caramilk</h3>
            </div>
            <div className="product-grid-box">
              <img src={product4} alt="product4" />
              <h3>Lindt Excellnce Bar</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
