import React from 'react'
import './updated.scss';

export default function Updated() {
  const [email, setEmail] = React.useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email });
    setEmail('');
  };

  return (
    <>
      <div className="updated">
        <div className="container">
          <div className="updated-div">
            <div className="updated-div-bg"></div>
            <div className="updated-div-text animate__animated animate__fadeInUpBig wow">
              <h2>Stay Updated with Newsletter</h2>
              <p>Get the latest news, exclusive offers, and delicious updates delivered right to your inbox with our chocolate and cake shop newsletter.</p>
              <div className="updated-input">
                <form onSubmit={handleSubmit}>
                  <input type="email" name="email" value={email} onChange={handleChange} placeholder="Enter your email address" required />
                  <div className="updated-button">
                    <button>Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
