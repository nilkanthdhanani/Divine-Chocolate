import React from 'react'
import './forget.scss';
import { forget } from '../../../assets/images/jpg';

export default function Forget() {
  return (
    <>
      <div className="forget">
        <div className="container">
          <div className="forget-div">
            <img src={forget} alt="forget" />
            <div className="forget-div-text">
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
