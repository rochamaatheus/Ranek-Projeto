import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import PageLoading from '@/components/PageLoading.vue';

Vue.config.productionTip = false;

Vue.component('PageLoading', PageLoading);

Vue.filter('numeroPreco', (valor) => {
  valor = Number(valor);
  if (!isNaN(valor)) {
    return valor.toLocaleString('en-Us', {
      style: 'currency',
      currency: 'USD',
    });
  } else return '';
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
