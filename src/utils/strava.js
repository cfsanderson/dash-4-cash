import auth from './auth'

const BASE_URL = 'https://www.strava.com/api/v3'

const API = {
  get: (url) => {
    return window.fetch(BASE_URL + url, {
      headers: { 'Authorization': `Bearer ${auth.stravaToken}` }
    }).then(response => response.json())
  }
}

// Makes for easy testing in the console.
window.API = { get: (url) => API.get.then(console.log) }

export default API
