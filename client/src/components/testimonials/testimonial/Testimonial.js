import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Testimonial.css";

export default class Testimonial extends Component {
  static PropTypes = {
    quote: PropTypes.string,
    author: PropTypes.string
  };
  render() {
    return (
      <div className="Testimonial">
        <div className="Testimonial-icon">"</div>
        <div className="Testimonial-quote">{this.props.quote}</div>
        <div className="Testimonial-author">{this.props.author}</div>
      </div>
    );
  }
}
