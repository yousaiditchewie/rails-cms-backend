import React, { Component } from "react";
import "./Gallery.css";
import stock1 from "./assets/stock1.jpg";
import stock2 from "./assets/stock2.jpg";
import stock3 from "./assets/stock3.jpg";
import stock4 from "./assets/stock4.jpg";
import stock5 from "./assets/stock5.jpg";

export default class Gallery extends Component {
  render() {
    return (
      <div className="Gallery">
        <div
          style={{ backgroundImage: stock1 }}
          className="Gallery-stock Gallery-stock--1"
        />
        <div
          style={{ backgroundImage: stock2 }}
          className="Gallery-stock Gallery-stock--2"
        />
        <div
          style={{ backgroundImage: stock3 }}
          className="Gallery-stock Gallery-stock--3"
        />
        <div
          style={{ backgroundImage: stock4 }}
          className="Gallery-stock Gallery-stock--4"
        />
        <div
          style={{ backgroundImage: stock5 }}
          className="Gallery-stock Gallery-stock--5"
        />
      </div>
    );
  }
}
