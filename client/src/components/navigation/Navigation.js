import React, { Component, Fragment } from "react";
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
      <Fragment>
        <nav
          className={
            "Navigation--mobile " +
            (this.state.navIsOpen ? "nav-is-open" : "nav-is-closed")
          }
        >
          <a className="Navigation-link" href="/">
            BB<small>AR</small>
          </a>
          <div className="Navigation-menu-toggle" onClick={this.handleClick}>
            <span hidden>Open Menu</span>
            <div className="Navigation-menu-toggle--icon" />
          </div>
          <ul className="Navigation--mobile-list">
            <li>
              <a href="/menu" className="Navigation--mobile-link">
                Menu
              </a>
            </li>
            <li>
              <a href="/our-story" className="Navigation--mobile-link">
                Our&nbsp;Story
              </a>
            </li>
            <li>
              <a href="/jobs" className="Navigation--mobile-link">
                Jobs
              </a>
            </li>
          </ul>
        </nav>
        <nav className="Navigation">
          <a className="Navigation-link" href="/">
            BB<small>AR</small>
          </a>
          <a className="Navigation-link" href="/menu">
            Menu
          </a>
          <a className="Navigation-link" href="/our-story">
            Our&nbsp;Story
          </a>
          <a className="Navigation-link" href="/jobs">
            Jobs
          </a>
        </nav>
      </Fragment>
    );
  }
}
