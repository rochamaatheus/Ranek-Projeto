import axios from 'axios';

const a = axios.create({
  baseURL: 'http://localhost:3000',
});

export const api = {
  get(endpoint) {
    return a.get(endpoint);
  },
};
