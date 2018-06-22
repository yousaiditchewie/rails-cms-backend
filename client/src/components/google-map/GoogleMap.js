import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./GoogleMap.css";
import bbar from "./assets/bbar.png";

const PinStyle = {
  width: "4rem",
  height: "4rem",
  border: ".25rem solid #f5d015",
  padding: ".5rem"
};

const CoordinatesComponent = () => (
  <img src={bbar} alt="The Biscuit Bar" style={PinStyle} />
);

export default class GoogleMap extends Component {
  static defaultProps = { center: { lat: 33.090325, lng: -96.8216 }, zoom: 17 };
  render() {
    return (
      <div className="GoogleMap">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <CoordinatesComponent lat={33.090325} lng={-96.8216} text={"BBar"} />
        </GoogleMapReact>
      </div>
    );
  }
}
