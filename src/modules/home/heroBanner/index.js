import React from 'react'
import './heroBanner.scss';

export default function HeroBanner() {
    return (
        <>
            <div className="hero-banner">
                <div className="hero-banner-bg"></div>
                <div className="container">
                    <div className="hero-banner-div animate__animated animate__bounce">
                        <h1>Make More Moments <br />of Gododness </h1>
                        <p>Indulge in a heaven of chocolates and cals to setisfy your <br />carving. Dive into this heaven by choosing the best UI kit </p>
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}
