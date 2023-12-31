import Vue from 'vue';
import Vuex from 'vuex';
import { api } from '@/services.js';
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    usuario: {
      id: '',
      nome: '',
      email: '',
      senha: '',
      cep: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
    },
    usuario_produtos: null,
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = Object.assign(state.usuario, payload);
    },
    UPDATE_USUARIO_PRODUTOS(state, payload) {
      state.usuario_produtos = payload;
    },
    ADD_USUARIO_PRODUTOS(state, payload) {
      state.usuario_produtos.unshit(payload);
    },
  },
  actions: {
    getUsuarioProdutos(context) {
      api.get(`/produto?usuario_id=${context.state.usuario.id}`).then((r) => {
        context.commit('UPDATE_USUARIO_PRODUTOS', r.data);
      });
    },
    getUsuario(context) {
      return api.get(`/usuario`).then((r) => {
        context.commit('UPDATE_USUARIO', r.data);
        context.commit('UPDATE_LOGIN', true);
      });
    },
    criarUsuario(context, payload) {
      context.commit('UPDATE_USUARIO', { id: payload.email });
      return api.post('/usuario', payload);
    },
    logarUsuario(context, payload) {
      return api
        .login({
          username: payload.email,
          password: payload.senha,
        })
        .then((r) => {
          window.localStorage.token = `Bearer ${r.data.token}`;
        });
    },
    deslogarUsuario(context) {
      context.commit('UPDATE_USUARIO', {
        id: '',
        nome: '',
        email: '',
        senha: '',
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
      });
      window.localStorage.removeItem('token');
      context.commit('UPDATE_LOGIN', false);
    },
  },
});
