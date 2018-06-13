import React, { Component } from "react";
import "./Navigation.css";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { navIsOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ navIsOpen: !this.state.navIsOpen });
  }

  render() {
    return (
      <nav
        className={
          "Navigation " +
          (this.state.navIsOpen ? "nav-is-open" : "nav-is-closed")
        }
      >
        <a className="Navigation-logo" href="/">
          BB<small>AR</small>
        </a>
        <div className="Navigation-menu-toggle" onClick={this.handleClick}>
          <span hidden>Open Menu</span>
          <div className="Navigation-menu-toggle--icon" />
        </div>
        <ul className="Navigation-list">
          <li>
            <a href="/menu" className="Navigation-link">
              Menu
            </a>
          </li>
          <li>
            <a href="/our-story" className="Navigation-link">
              Our&nbsp;Story
            </a>
          </li>
          <li>
            <a href="/jobs" className="Navigation-link">
              Jobs
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
