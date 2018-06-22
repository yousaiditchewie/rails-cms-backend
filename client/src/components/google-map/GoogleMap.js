import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./GoogleMap.css";
import bbar from "./assets/bbar.png";

const PinStyle = {
  width: "64px",
  height: "64px",
  //   borderRadius: "50%",
  border: "3px solid #f5d015",
  padding: "8px"
};
const CoordinatesComponent = () => (
  <img src={bbar} alt="The Biscuit Bar" style={PinStyle} />
);

export default class GoogleMap extends Component {
  static defaultProps = {
    center: { lat: 33.0901045, lng: -96.82327 },
    zoom: 17
  };
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
