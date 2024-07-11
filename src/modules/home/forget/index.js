import React from 'react'
import './forget.scss';
import { forget } from '../../../assets/images/jpg';

export default function Forget() {
  return (
    <>
      <div className="forget">
        <div className="container">
          <div className="forget-div">
            <img src={forget} alt="forget" className="animate__animated animate__fadeInLeftBig animate__slow wow" data-wow-offset="200"/>
            <div className="forget-div-text animate__animated animate__fadeInRightBig animate__slow wow" data-wow-offset="200">
              <h2>Forget Love, I'd Rather Fall In Chocolate</h2>
              <p>Increases heart health: The antioxidants in dark chocolate have been shown to lower blood pressure, reduce the risk of clotting and increase.</p>
              <div className="main-button">
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
