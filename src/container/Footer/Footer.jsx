import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
  

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contacto</h1>
        <p className="p__opensans">C. Soberanía, N23, 28260 Galapagar, Madrid</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;Las mejores croquetas de la Sierra Madrileña te estan esperando.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horario Apertura</h1>
        <p className="p__opensans">Sabado-Lunes:</p>
        <p className="p__opensans">10:00 am - 04:00 pm</p>
        <p className="p__opensans">Miercoles - Viernes:</p>
        <p className="p__opensans">08:00 am - 04:00 pm</p>
        <p className="p__opensans">07:00pm - 11:00pm</p>
        <p className="p__opensans"></p>
        <p className="p__opensans">Martes Cerrado por descanso</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Con Dos Cucharas. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;