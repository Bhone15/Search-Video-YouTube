import axios from 'axios';

const KEY = 'AIzaSyCtMpIbH6FllTeQ3let-xAhNdr0i8l1RrM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
