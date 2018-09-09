import React, { Component } from 'react';
import gallery1 from './assets/gallery-1.jpg';
import gallery2 from './assets/gallery-2.jpg';
import gallery3 from './assets/gallery-3.jpg';
import gallery4 from './assets/gallery-4.jpg';
import gallery5 from './assets/gallery-5.jpg';

import './backgroundImage.css';

export default class Gallery extends Component {
  render() {
    return (
      <div className="Gallery">
        <div
          style={{ backgroundImage: gallery1 }}
          className="Gallery-image Gallery-image--1"
        />
        <div
          style={{ backgroundImage: gallery2 }}
          className="Gallery-image Gallery-image--2"
        />
        <div
          style={{ backgroundImage: gallery3 }}
          className="Gallery-image Gallery-image--3"
        />
        <div
          style={{ backgroundImage: gallery4 }}
          className="Gallery-image Gallery-image--4"
        />
        <div
          style={{ backgroundImage: gallery5 }}
          className="Gallery-image Gallery-image--5"
        />
      </div>
    );
  }
}
