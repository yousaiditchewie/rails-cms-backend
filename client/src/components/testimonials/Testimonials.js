import React, { Component } from 'react';
import Testimonial from './testimonial/Testimonial';

export default class Testimonials extends Component {
  render() {
    return (
      <div className="Testimonials">
        <Testimonial
          quote={
            'We were more than satisfied. Thankfully, they do excellent\u00a0biscuits.'
          }
          author={'Dallas Morning News'}
        />
        <Testimonial
          quote={
            'I definitely will be back making it a point to try each of their unique biscuit\u00a0creations.'
          }
          author={'Crave DFW'}
        />
        <Testimonial
          quote={
            'Any time spent at the Biscuit Bar is fixin’ to be a good\u00a0time.'
          }
          author={'Plano Magazine'}
        />
      </div>
    );
  }
}
