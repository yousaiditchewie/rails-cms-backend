import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import bbar from './assets/bbar.png';

const PinStyle = {
  width: '3.25rem',
  height: '3.25rem',
  border: '.25rem solid #f5d015',
  backgroundColor: '#fff',
  padding: '.25rem'
};

const CoordinatesComponent = () => (
  <a
    href="https://goo.gl/maps/Yxg4QjgPbDJ2"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={bbar} alt="The Biscuit Bar" style={PinStyle} />
  </a>
);

export default class GoogleMap extends Component {
  static defaultProps = { center: { lat: 33.090325, lng: -96.8216 }, zoom: 15 };
  render() {
    return (
      <div className="GoogleMap">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <CoordinatesComponent lat={33.090325} lng={-96.8216} text={'BBar'} />
        </GoogleMapReact>
      </div>
    );
  }
}
