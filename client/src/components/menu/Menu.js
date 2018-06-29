import React, { Component, Fragment } from "react";
import "./Menu.css";

import mainMenu from "./assets/main-menu.jpg";
import drinkMenu from "./assets/drink-menu.jpg";
import happyHour from "./assets/happy-hour.jpg";

export default class Menu extends Component {
  render() {
    return (
      <Fragment>
        <header id="hero-menu" className="Hero-Menu">
          <h1 className="Hero-Menu-heading">
            Mind your biscuits, and life will be&nbsp;gravy.
          </h1>
        </header>
        <main className="Menu">
          <div className="Menu-wrapper">
            <img
              src={mainMenu}
              alt="Biscuits served daily"
              className="Menu-main"
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
            />{" "}
          </div>
        </main>
      </Fragment>
    );
  }
}
