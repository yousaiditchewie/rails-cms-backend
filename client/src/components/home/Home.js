import React, { Component } from "react";
import GoogleMap from "../google-map/GoogleMap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <header id="hero" className="Hero">
        <div className="Hero-image" />
        <div className="Hero-container">
          <h2 className="Hero-slogan">Biscuits.&nbsp;Tots.&nbsp;Taps.</h2>
          <address className="Hero-address">
            <a href="https://goo.gl/maps/Yxg4QjgPbDJ2" target="_blank">
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
        <GoogleMap />
      </header>
    );
  }
}
