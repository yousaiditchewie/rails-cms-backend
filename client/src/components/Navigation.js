import React, { Component } from "react";

export default class Navigation extends Component {
    render() {
        return (
            <nav className="Navigation">
                <a className="Navigation-logo" href="/">BB<small>AR</small></a>
                <a className="Navigation-ourStory" href="/">Our&nbsp;Story</a>
                <a className="Navigation-jobs" href="/">Jobs</a>
            </nav>
        );
    }
}