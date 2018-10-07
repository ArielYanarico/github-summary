import React, { Component } from 'react';
import _ from 'underscore';

import Card from '../card/Card'
import {getUsersSince} from '../../api/api'

class Grid extends Component {
  state = {
    users: [],
    lastId: 0
  }

  async componentDidMount() {
    const users = await getUsersSince(0);
    this.setState({users, lastId: _.last(users).id});
  }

  getMoreUsers = async () => {
    const {users, lastId} = this.state;
    const newUsers = await getUsersSince(lastId);
    this.setState({users: [...users, ...newUsers], lastId: _.last(users).id});
  }

  render() {
    const chunkedUsers = _.chunk(this.state.users, 4)
    return (
      <div className='grid'>
        <div className='container'>
          {_.map(chunkedUsers, (row, index) => (
            <div className='row row-eq-height' key={index}>
              {_.map(row, user => (
                <div className='col' key={user.id}>
                  <Card image={user.avatar_url} title={user.login} outlink={user.html_url}/>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button type='button' className='btn btn-primary' onClick={this.getMoreUsers}>More</button>
      </div>
    );
  }
}

export default Grid;
