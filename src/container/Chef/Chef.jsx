import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In </h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in sapiente. </p>
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aut dolorum, vero incidunt nisi, unde, vel numquam ipsam quas minus porro sapiente reiciendis reprehenderit doloribus explicabo asperiores libero. Cupiditate, aut?</p>
      </div>

      <div className="app__chef-sign">
        <p> Kevin Luo </p>
        <p className="p__opensans"> Chef & Founder </p>
        <img src={images.sign} alt="sign" />
      </div>

    </div>
  </div>
);

export default Chef;
