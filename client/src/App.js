import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import OurStory from "./components/our-story/OurStory";
import Jobs from "./components/jobs/Jobs";
import NotFound from "./components/not-found/NotFound";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/our-story" exact component={OurStory} />
            <Route path="/jobs" exact component={Jobs} />
            <Route component={NotFound} />
          </Switch>
        </Router>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
