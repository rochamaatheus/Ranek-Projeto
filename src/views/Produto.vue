<template>
  <section>
    <div v-if="produto" class="produto">
      <ul class="fotos" v-if="produto.fotos">
        <li v-for="(foto, index) in produto.fotos" :key="index">
          <img :src="foto.src" :alt="foto.titulo" />
        </li>
      </ul>
      <div class="info">
        <h1>{{ produto.nome }}</h1>
        <p class="preco">{{ produto.preco }}</p>
        <p class="descricao">{{ produto.descricao }}</p>
        <button class="btn" :disabled="produto.vendido === 'true'">
          {{ produto.vendido === 'true' ? 'Produto Vendido' : 'Comprar' }}
        </button>
      </div>
    </div>
    <PageLoading v-else />
  </section>
</template>

<script>
import PageLoading from '@/components/PageLoading.vue';
import { api } from '@/services.js';

export default {
  name: 'TheProduto',
  props: ['id'],
  data() {
    return {
      produto: null,
    };
  },
  methods: {
    getProduto() {
      api.get(`/produto/${this.id}`).then((r) => (this.produto = r.data));
    },
  },
  created() {
    this.getProduto();
  },
  components: { PageLoading },
};
</script>

<style></style>
