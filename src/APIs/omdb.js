import axios from 'axios';

const KEY = '7c0c7639';

export default axios.create({
  baseURL: 'http://www.omdbapi.com/',
  params: {
    type: 'movie',
    apikey: KEY
  }
})