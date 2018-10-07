import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Error.css'

class Error extends Component {
  render() {
    return (
      <div className="error">
        <h1>404</h1>
        <p>Oops! Something is wrong.</p>
        <Link class="button" to="/">
          <i class="icon-home" />
          Go back in initial page, is better.
        </Link>
      </div>
    );
  }
}

export default Error;
