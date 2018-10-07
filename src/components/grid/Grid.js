import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import _ from 'underscore';

import users from './mock.json';

const chunkedUsers = _.chunk(users, 4)

class Grid extends Component {
  render() {
    return (
      <div className='grid'>
        <div className='container'>
          {_.map(chunkedUsers, (row, index) => (
            <div className='row' key={index}>
              {_.map(row, user => (
                <div className='col' key={user.id}>
                  <div className='card'>
                    <img className='card-img-top' src={user.avatar_url} alt='Hello'/>
                    <div className='card-body'>
                      <span className='card-title'>{user.login}</span>
                      <Link to='/error'>Inside</Link>
                      <a href={user.html_url} target='_blank' rel='noopener noreferrer'>Outside</a> 
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Grid;
