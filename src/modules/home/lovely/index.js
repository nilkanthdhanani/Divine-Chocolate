import React from 'react'
import './lovely.scss';
import { lovely } from '../../../assets/images/png';

export default function Lovely() {
  return (
    <>
      <div className='lovely'>
        <div className="container">
          <div className="lovely-div animate__animated animate__fadeInUpBig animate__slow wow" data-wow-offset="100">
            <div className="lovely-div-choco">
              <img src={lovely} alt="lovely" />
            </div>
            <div className="lovely-div-head">
              <h2>Lovely Chocolate</h2>
            </div>
            <p>Increases heart health: The antioxidants in dark chocolate have been shown to lower blood pressure, reduce the risk of clotting and increase blood circulation to the heart, thus lowering the risks of stroke, coronary heart disease and death from heart disease. Increases heart health: The antioxidants in dark chocolate have been shown to lower blood.</p>
            <div className="main-button">
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
