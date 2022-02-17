import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase The New Flavour" />
      <h1 className="app__header-h1"> The Key To Fine Dining </h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>
        Sit tellus lobortis sed senectus vivamus molesite.Condimentum Volutpat morbai facilisis quam sceierusque sapien. Et, panetibus aliquam amet teelus
      </p>
      <button type="button" className="custom__button"> Explore Menu </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;