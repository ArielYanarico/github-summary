import React, { Component } from 'react';
import _ from 'underscore';

import {getUsersSince} from '../../api/api'
import Grid from '../grid/Grid'

class Users extends Component {
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
      <div className='users'>
        <Grid itemMatrix={chunkedUsers}/>
        <button type='button' className='btn btn-primary' onClick={this.getMoreUsers}>More</button>
      </div>
    );
  }
}

export default Users;
