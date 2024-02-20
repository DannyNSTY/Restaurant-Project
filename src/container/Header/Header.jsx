import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Las mejores croquetas de la sierra Madrileña</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Descubre el autentico sabor a Croqueta Casera en el corazon de Galapagar </p>
      <button type="button" className="custom__button">Explorar Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img className="app__header_img" src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;