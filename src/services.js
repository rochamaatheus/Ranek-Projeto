import axios from 'axios';

const a = axios.create({
  baseURL: 'http://localhost:3000',
});

export const api = {
  get(endpoint) {
    return a.get(endpoint);
  },
  post(endpoint) {
    return a.post(endpoint, body);
  },
};

export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}
