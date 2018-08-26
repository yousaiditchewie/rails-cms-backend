import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import fourOhFour from './assets/404.jpg';

export default class NotFound extends Component {
  render() {
    return (
      <header className="NotFound">
        <img
          className="NotFound-img"
          src={fourOhFour}
          alt="Biscuits not found!"
        />
        <h1 className="NotFound-heading">Biscuits not found!</h1>
        <p className="NotFound-copy">
          Better head back <Link to="/">home</Link>...
        </p>
      </header>
    );
  }
}
