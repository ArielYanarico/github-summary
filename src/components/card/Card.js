import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css'

const Card = ({image, title, outlink, inlink, text, footer}) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <h2 className='card-title'>{title}</h2>
      </div>
      <img className={`card-img-top ${image}`} src={image} alt={title}/>
      <div className='card-body'>
        <p className={`card-text ${text}`}>{text}</p>
        <Link 
          className={`card-link ${inlink.ref}`} 
          to={inlink.ref}
        >
          {inlink.text}
        </Link>
        <a 
          className={`card-link ${outlink.ref}`} 
          href={outlink.ref} target='_blank' 
          rel='noopener noreferrer'
        >
          {outlink.text}
        </a>
      </div>
      <div className={`card-footer text-muted ${footer}`}>
        {footer}
      </div>
    </div>
  );
}

export default Card;
