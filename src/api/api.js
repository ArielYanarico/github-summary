const api = 'https://api.github.com';

const headers = {
  'Accept': 'application/json',
  'Origin': 'http://localhost:3000'
}

export const getUsersSince = (sinceId) =>
  fetch(`${api}/users?since=${sinceId}`, { headers })
    .then(res => res.json());

export const getRepoPage = (userId, page) =>
  fetch(`${api}/users/${userId}/repos?page=${page}`, { headers })
    .then(res => {
      res.headers.forEach((h) => console.log('****************************', h))
      return res.json()
    });