import React, { Component } from 'react';
import _ from 'underscore';

import {getRepoPage} from '../../api/api'
import Grid from '../grid/Grid'

class Repos extends Component {
  state = {
    repos: [],
    page: 1
  }

  async componentDidMount() {
    const {match} = this.props
    const {userId} = match.params
    this.setState({repos: getRepoPage(userId, 1)});
  }

  render() {
    const chunkedUsers = _.chunk(this.state.repos, 4)
    return (
      <div className='users'>
        <Grid itemMatrix={chunkedUsers}/>
      </div>
    );
  }
}

export default Repos;
