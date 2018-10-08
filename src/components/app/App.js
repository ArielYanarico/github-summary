import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import './App.css';
import Users from '../users/Users'
import Repos from '../repos/Repos'
import Error from '../error/Error'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          Github Summary
        </header>
        <Router>
          <Switch>
            <Route path="/" exact component={Users} />
            <Route path="/:userId" component={Repos} />
            <Route render={() => <Error code='404' />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
