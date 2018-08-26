import React, { Component, Fragment } from 'react';

import Cta from '../Cta/Cta';
import bbarStyles from '../../styles/bbarStyles';

import heroImgMobile from './assets/menu-hero-mobile.jpg';
import heroImgDesktop from './assets/menu-hero.jpg';
import mainMenu from './assets/main-menu.jpg';
import drinkMenu from './assets/drink-menu.jpg';
import happyHour from './assets/happy-hour.jpg';

export default class Menu extends Component {
  render() {
    return (
      <Fragment>
        {/* <header id="hero-menu" className="Hero-Menu">
          <h1 className="Hero-Menu-heading">
            Mind your biscuits, and life will be&nbsp;gravy.
          </h1>
        </header> */}
        <img
          src={heroImgMobile}
          alt="Mind your biscuits and life will be gravy."
          className="Menu-heroImg--mobile"
        />
        <img
          src={heroImgDesktop}
          alt="Mind your biscuits and life will be gravy."
          className="Menu-heroImg--desktop"
        />
        <main className="Menu">
          <div className="Menu-wrapper">
            <img
              src={mainMenu}
              alt="Biscuits served daily"
              className="Menu-main"
            />
            <Cta
              backgroundColor={bbarStyles.colors.bbarYellow}
              header="Like what you&nbsp;see?"
              copy="Email catering inquiries to "
              ctaText="info@thebiscuit.bar."
              ctaHref="mailto:info@thebiscuit.bar"
            />
            <img
              src={drinkMenu}
              alt="Drinks served daily"
              className="Menu-main"
            />
            <img
              src={happyHour}
              alt="Happy Hour Monday through Friday from 3pm to 6pm"
              className="Menu-main"
            />{' '}
          </div>
        </main>
      </Fragment>
    );
  }
}
