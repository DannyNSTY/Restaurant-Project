import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './FindUs.css';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Encuentranos</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">C. Soberanía, n23, 28260 Galapagar, Madrid</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Sabado - Lunes: 10:00 am - 04:00 pm</p>
        <p className="p__opensans">Martes Cerrado</p>
        <p className="p__opensans">Miercoles - Viernes: 08:00 am - 04:00 pm, 07:00pm - 11:00pm</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visitanos</button>
    </div>

    <div className="app__wrapper_img">
      <img className="app__findus_img" src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;