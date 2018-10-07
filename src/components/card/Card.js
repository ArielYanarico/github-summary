import React from 'react';
import { Link } from "react-router-dom";

import './Card.css'

const Card = ({image, title, outlink}) => {
  return (
    <div className='card'>
      <img className='card-img-top' src={image} alt='Hello' />
      <div className='card-body'>
        <h1 className='card-title'>{title}</h1>
        <Link className='card-link' to='/error'>Inside</Link>
        <a 
          className='card-link' 
          href={outlink} target='_blank' 
          rel='noopener noreferrer'
        >
          Outside
        </a>
      </div>
    </div>
  );
}

export default Card;
