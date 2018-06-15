import React, { Component } from "react";
import "./Home.css";
import logo from "./assets/logo.png";

export default class Home extends Component {
  render() {
    return (
      <section id="hero" className="Hero">
        <div className="Hero-overlay" />
        <div className="Hero-flexWrapper">
          <div className="Hero-container">
            <h1 className="Hero-logo">
              <img
                className="Hero-logo--image"
                src={logo}
                alt="The Biscuit Bar"
              />
            </h1>
            <h2 className="Hero-slogan">Biscuits.&nbsp;Tots.&nbsp;Taps.</h2>
            <address className="Hero-address">
              5880 TX-121, Suite 102B<br />Plano, TX 75024<br />
              <a href="tel:4692382227">469.238.2227</a>
            </address>

            <p className="Hero-hours">
              Sunday 8am-10pm<br />
              Mon - Wed 8am-11pm<br />
              Thurs - Sat 8am-Midnight
            </p>
          </div>
        </div>
      </section>
    );
  }
}
