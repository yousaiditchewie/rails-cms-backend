import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Testimonial extends Component {
  static PropTypes = {
    quote: PropTypes.string,
    author: PropTypes.string
  };
  render() {
    return (
      <div className="Testimonial">
        <div className="Testimonial-icon">
          <span className="Testimonial-icon--inner">&#8220;</span>
        </div>
        <div className="Testimonial-quote">{this.props.quote}</div>
        <div className="Testimonial-author">{this.props.author}</div>
      </div>
    );
  }
}
