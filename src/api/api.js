const api = 'https://api.github.com';

const headers = {
  'Accept': 'application/json'
}

export const getUsersSince = (sinceId) =>
  fetch(`${api}/users?since=${sinceId}`, { headers })
    .then(res => res.json());