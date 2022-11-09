import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app-bg app-wrapper section-padding" id="contact">
    <div className="app-wrapper-info">
      <SubHeading title="Contact" />
      <h1 className="headtext-cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app-wrapper-content">
        <p className="p-opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className="p-cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p-opensans">Mon - Fri: 11:00 am - 09:00 pm</p>
        <p className="p-opensans">Sat - Sun: 5:00 pm - 09:00 pm</p>
      </div>
      <button type="button" className="custom-button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app-wrapper-img">
      <img src={images.findus} alt="finus-img" />
    </div>
  </div>
);

export default FindUs;