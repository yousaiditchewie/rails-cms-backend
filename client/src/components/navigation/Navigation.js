import React, { Component } from 'react';
import './Navigation.css';
import logo from './assets/biscuit-bar-logo.png';

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
          'Navigation ' +
          (this.state.navIsOpen ? 'nav-is-open' : 'nav-is-closed')
        }
      >
        <div className="Navigation-logo--wrapper">
          <a className="Navigation-logo" href="/">
            <img
              src={logo}
              alt="The Biscuit Bar"
              className="Navigation-logo--img"
            />
          </a>
        </div>
        <div className="Navigation-menu-toggle" onClick={this.handleClick}>
          <span hidden>Open Menu</span>
          <div className="Navigation-menu-toggle--icon" />
        </div>
        <div className="Navigation-list">
          <a href="/menu" className="Navigation-link">
            Menu
          </a>
          <a href="/our-story" className="Navigation-link">
            Our&nbsp;Story
          </a>
          {/* <a href="/jobs" className="Navigation-link">
            Jobs
          </a> */}
        </div>
      </nav>
    );
  }
}
