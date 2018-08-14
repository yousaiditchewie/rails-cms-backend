import React, { Component, Fragment } from 'react';
import GoogleMap from '../google-map/GoogleMap';
import Testimonials from '../testimonials/Testimonials';
import Gallery from '../gallery/Gallery';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <header id="hero" className="Hero">
          <div className="Hero-image" />
          <div className="Hero-container">
            <h2 className="Hero-slogan">Biscuits.&nbsp;Tots.&nbsp;Taps.</h2>
            <address className="Hero-address">
              <a
                href="https://goo.gl/maps/Yxg4QjgPbDJ2"
                target="_blank"
                rel="noopener noreferrer"
              >
                5880 TX-121, Suite 102B<br />Plano, TX 75024
              </a>
              <br />
              <a className="Hero-phone" href="tel:4692382227">
                469.238.2227
              </a>
            </address>

            <p className="Hero-hours">
              Sunday 8am-10pm<br />
              Mon - Wed 8am-11pm<br />
              Thurs - Sat 8am-Midnight
            </p>
          </div>
          <div className="Hero-cta">
            <h2 className="Hero-cta--heading">We’re&nbsp;Hiring!</h2>
            <p className="Hero-cta--copy">
              Email your resume to{' '}
              <a
                href="mailto:jobs@thebiscuit.bar"
                target="_blank"
                rel="noopener noreferrer"
                className="Hero-cta--email"
              >
                jobs@thebiscuit.bar
              </a>
            </p>
          </div>
        </header>
        <GoogleMap />
        <Testimonials />
        <Gallery />
        <div className="Footer-cta">
          <h2 className="Footer-cta--heading">
            Let us cater your next&nbsp;event.
          </h2>
          <p className="Footer-cta--copy">
            Email catering inquiries to{' '}
            <a href="mailto:info@thebiscuit.bar" className="Footer-cta--email">
              info@thebiscuit.bar
            </a>
          </p>
        </div>
      </Fragment>
    );
  }
}
