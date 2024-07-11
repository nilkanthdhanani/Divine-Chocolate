import React from 'react'
import './client.scss';
import { quotes, star, starG } from '../../../assets/images/png';

export default function Client() {
  return (
    <>
      <div className="client">
        <div className="container">
          <div className="client-div">
            <div className="client-div-head">
              <h2>What Our Client Says</h2>
            </div>
            <div className="client-grid">
              <div className="client-grid-box">
                <div className="triangel">
                </div>
                <div className="quots-image">
                  <img src={quotes} alt="quotes" />
                </div>
                <div className="dg1b-text-star">
                  <h4>4</h4>
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={starG} alt="starG" />
                </div>
                <p>Simplify the contract creation process with an easy to workflow rules engine right within SharePoint. Empower your contract managers and legal teams with powerful tools that will ensure structured process are followed during the request, draft</p>
                <h3>James Brown</h3>
              </div>
              <div className="client-grid-box">
                <div className="triangel">
                </div>
                <div className="quots-image">
                  <img src={quotes} alt="quotes" />
                </div>
                <div className="dg1b-text-star">
                  <h4>3</h4>
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={starG} alt="starG" />
                  <img src={starG} alt="starG" />
                </div>
                <p>I would rate your service a 5 star and definitely use you again! Very nice work done and the Virtina team under the leadership of Mansoor made sure to even help me on my second project at an affordable price, just to not lose me as a customer</p>
                <h3>Bruce Wayne</h3>
              </div>
              <div className="client-grid-box">
                <div className="triangel">
                </div>
                <div className="quots-image">
                  <img src={quotes} alt="quotes" />
                </div>
                <div className="dg1b-text-star">
                  <h4>5</h4>
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                </div>
                <p>Simplify the contract creation process with an easy to workflow rules engine right within SharePoint. Empower your contract managers and legal teams with powerful tools that will ensure structured process are followed during the request, draft</p>
                <h3>Martha Hill</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
