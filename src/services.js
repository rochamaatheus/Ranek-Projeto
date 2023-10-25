import axios from 'axios';

const a = axios.create({
  baseURL: 'http://ranekapilocal.local/wp-json/api',
});

a.interceptors.request.use(
  function (config) {
    const token = window.localStorage.token;
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const api = {
  get(endpoint) {
    return a.get(endpoint);
  },
  post(endpoint, body) {
    return a.post(endpoint, body);
  },
  put(endpoint, body) {
    return a.put(endpoint, body);
  },
  delete(endpoint) {
    return a.delete(endpoint);
  },
  login(body) {
    return axios.post(
      'http://ranekapilocal.local/wp-json/jwt-auth/v1/token',
      body
    );
  },
  validateToken() {
    return axios.post(
      'http://ranekapilocal.local/wp-json/jwt-auth/v1/token/validate'
    );
  },
};

export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}
