import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Ingredients from './components/Ingredients';
import NotFound from './NotFound';

import "./App.scss";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Navigation />
                <Router>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/ingredients' exact component={Ingredients} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
                {/* <Footer /> */}
            </Fragment>
        );
    }
}

export default App