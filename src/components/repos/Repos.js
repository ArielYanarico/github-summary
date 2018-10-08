import React, { Component } from 'react';
import _ from 'underscore';
import { Link } from 'react-router-dom';

import { getReposPaginated } from '../../backend/api'
import Grid from '../grid/Grid'

class Repos extends Component {
  state = {
    repos: [],
    lastPage: 1,
  }

  async componentDidMount() {
    const { match, location } = this.props
    const { userName } = match.params
    console.log('PARAMAS', "")
    const linkPage = location.hash.replace('#', '') || '1'
    const { link, json } = await getReposPaginated(userName, parseInt(linkPage))
    const lastPage = link.last.page
    this.setState({ repos: await json, lastPage, page: linkPage });
  }

  goToPage = async (page) => {
    const { match } = this.props
    const { userName } = match.params
    const { json } = await getReposPaginated(userName, page)
    this.setState({ repos: await json });
  }

  mapReposToItems = (repos) => {
    return _.map(repos, repo => (
      {
        id: repo.id,
        image: 'none',
        title: repo.name,
        outlink: {text:'View repository on git', ref: repo.html_url},
        inlink: {text:'none', ref: 'none'},
        text: repo.description,
        footer: `Open Issues: ${repo.open_issues_count} Forks: ${repo.forks_count}`
      }
    ));
  }

  render() {
    const { repos, lastPage } = this.state
    const mappedRepos = this.mapReposToItems(repos)
    const chunkedUsers = _.chunk(mappedRepos, 4)
    return (
      <div className='users'>
        <Grid itemMatrix={chunkedUsers} />
        <nav>
          <ul className='pagination justify-content-center'>
            {_.times(lastPage, (index) => (
              <li className='page-item' key={index}>
                <Link
                  className='page-link'
                  onClick={() => this.goToPage(index + 1)}
                  to={{hash: `#${index + 1}`}}
                >
                  {index + 1}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Repos;
