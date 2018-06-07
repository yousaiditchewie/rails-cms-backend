import React, { Component, Fragment } from "react";
import "./Navigation.css";

export default class Navigation extends Component {
  render() {
    return (
      <nav className="Navigation">
        <a className="Navigation-link" href="/">
          BB<small>AR</small>
        </a>
        <a className="Navigation-link" href="/our-story">
          Our&nbsp;Story
        </a>
        <a className="Navigation-link" href="/jobs">
          Jobs
        </a>
      </nav>
    );
  }
}
