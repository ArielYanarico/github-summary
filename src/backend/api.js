import parse from 'parse-link-header'

const api = 'https://api.github.com';
const headers = {}

export const getUsersSince = (sinceId) =>
  fetch(`${api}/users?since=${sinceId}`, { headers })
    .then(res => res.json());

export const getReposPaginated = (userName, page) =>
  fetch(`${api}/users/${userName}/repos?page=${page}`, { headers })
    .then(res => ({
      link: parse(res.headers.get('Link')),
      json: res.json()
    }));

export const getAllIssuesFromRepo = (repoFullName) => 
  fetch(`${api}/search/issues?q=repo:${repoFullName}+type:issue`, { headers })
  .then(res => res.json());
  