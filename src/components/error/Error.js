import React/*, { Component }*/ from 'react';
import {Link} from "react-router-dom";
import './Error.css'

const errors = {
  404: 'Oops! Page not found.',
  500: 'Oops! Something is wrong.'
}

const Error = ({code}) => {
  return (
    <div className="error">
      <h1>{code}</h1>
      <p>{errors[code]}</p>
      <Link class="button" to="/">
        <i class="icon-home" />
        Go back in initial page, is better.
      </Link>
    </div>
  );
}

/*class Error extends Component {
  render() {
    
  }
}*/

export default Error;
