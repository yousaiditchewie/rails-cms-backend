import React, { Component, Fragment } from "react";
import Testimonial from "./testimonial/Testimonial";
import "./Testimonials.css";

export default class Testimonials extends Component {
  render() {
    return (
      <div className="Testimonials">
        <Testimonial
          quote={
            "Soft and flaky interior with just the right amount of golden, crunchy exterior."
          }
          author={"Dallas Morning News"}
        />
        <Testimonial
          quote={
            "I definitely will be back making it a point to try each of their unique biscuit creations."
          }
          author={"Crave DFW"}
        />
        <Testimonial
          quote={
            "Any time spend at the Biscuit Bar is fixin’ to be a good time."
          }
          author={"Plano Magazine"}
        />
      </div>
    );
  }
}
