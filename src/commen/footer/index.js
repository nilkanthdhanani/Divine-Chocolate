import React from 'react'
import './footer.scss';
import { card1, card2, card3, card4, card5, logo } from '../../assets/images/png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-first">
            <div className="footer-first-logo">
              <Link to={"/"}>
                <img src={logo} alt="logo" />
              </Link>
              <p>Improves brain function: Flavonols in dark chocolate have a positive impact on brain function. including better reaction time, visualspatial awareness and stronger memory.</p>
            </div>
            <div className="footer-first-menu">
              <h2>Quick Links</h2>
              <li><a href="/">Shop</a></li>
              <li><a href="/">Best Selling</a></li>
              <li><a href="/">Offers</a></li>
              <li><a href="/">Our Story</a></li>
              <li><a href="/">Blogs</a></li>
            </div>
            <div className="footer-first-menu">
              <h2>Customer service</h2>
              <li><a href="/">Quality</a></li>
              <li><a href="/">Uniqueness</a></li>
              <li><a href="/">Sourcing</a></li>
            </div>
            <div className="footer-first-menu">
              <h2>Categories</h2>
              <li><a href="/">Milk Chocolate</a></li>
              <li><a href="/">White Chocolate</a></li>
              <li><a href="/">Dark Chocolate</a></li>
              <li><a href="/">Semisweet Chocolate</a></li>
              <li><a href="/">Bittersweet Chocolate</a></li>
            </div>
          </div>
          <div className="footer-last">
            <p>copyright © 2024 Divinechocolate.org</p>
            <div className="footer-cards">
              <a target='blank' href="https://www.mastercard.co.in/en-in.html"><img src={card1} alt="card1" /></a>
              <a target='blank' href="https://www.americanexpress.com/in/credit-cards/all-cards/?cpid=100495995&dsparms=dc_pcrid_703671577671_kword_american%20express_match_e&gad_source=1&gclid=CjwKCAjw4ri0BhAvEiwA8oo6F80zDBVkqvaDnHRq0F_ZV9P71mg1uFNJ-VCvNbsvmMSVcse-D7jcfRoCDWEQAvD_BwE&gclsrc=aw.ds"><img src={card2} alt="card2" /></a>
              <a target='blank' href="https://www.visa.co.in/"><img src={card3} alt="card3" /></a>
              <a target='blank' href="https://www.discover.com/"><img src={card4} alt="card4" /></a>
              <a target='blank' href="https://www.global.jcb/en/products/cards/index.html"><img src={card5} alt="card5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
