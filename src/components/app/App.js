import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import './App.css';
import Grid from '../grid/Grid'
import Error from '../error/Error'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          Github Summary
        </header>
        <Router>
          <div>
            <Switch>
              <Route path="/" exact component={Grid} />
              <Route render={() => <Error code='500' />} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
