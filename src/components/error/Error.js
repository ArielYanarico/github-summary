import React from 'react';
import {Link} from 'react-router-dom';
import './Error.css';

const errors = {
  404: 'Oops! Page not found.',
  500: 'Oops! Something is wrong.'
}

const Error = ({code}) => {
  return (
    <div className='error'>
      <h1 className='code'>{code}</h1>
      <p className='message'>{errors[code]}</p>
      <Link className='button' to='/'>
        Go back in initial page, is better.
      </Link>
    </div>
  );
}

export default Error;
