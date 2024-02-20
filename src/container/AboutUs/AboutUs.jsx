import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Sobre Nostros</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Bar Familiar especializado en croquetas.</p>
        <button type="button" className="custom__button">Mas informacion</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.spoon2} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nuestra Historia</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Madre e Hijo con sangre Leonesa, maestros en el arte de las dos cucharas.</p>
        <button type="button" className="custom__button">Mas informacion</button>
      </div>
    </div>
  </div>
);

export default AboutUs;