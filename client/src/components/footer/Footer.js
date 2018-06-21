import React, { Component } from "react";
import "./Footer.css";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";

export default class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="Footer-wrapper">
          <div className="Footer-left">
            <span className="Footer-connect serif">Connect with us.</span>
            <br />
            <a
              href="https://www.facebook.com/TheBiscuitBarBoardwalk/"
              target="_blank"
              rel="noopener noreferrer"
              className="Footer-link"
            >
              <img
                src={facebook}
                alt="Find us on Facebook at facebook.com/TheBiscuitBarBoardwalk"
                className="Footer-facebook"
              />
            </a>
            <a
              href="https://www.instagram.com/thebiscuit.bar"
              target="_blank"
              rel="noopener noreferrer"
              className="Footer-link"
            >
              <img
                src={instagram}
                alt="Find us on Instagram at instagram.com/thebiscuit.bar"
                className="Footer-instagram"
              />
            </a>
          </div>
          <div className="Footer-right">
            <span className="Footer-copyright serif">
              &copy;2018 The Biscuit Bar LLC
            </span>
          </div>
        </div>
      </footer>
    );
  }
}
