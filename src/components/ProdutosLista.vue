<template>
  <section class="produtos-container">
    <div v-if="produtos && produtos.length" class="produtos">
      <div v-for="produto in produtos" :key="produto.id" class="produto">
        <router-link to="/">
          <img
            v-if="produto.fotos[0]"
            :src="produto.fotos[0].src"
            alt="produto.fotos[0].titulo"
          />
          <p class="preco">{{ produto.preco }}</p>
          <h2 class="titulo">{{ produto.nome }}</h2>
          <p>{{ produto.descricao }}</p>
        </router-link>
      </div>
    </div>
    <div v-else-if="produtos && produtos.length === 0">
      <p>Busca sem resultados.</p>
    </div>
  </section>
</template>

<script>
import { api } from '@/services.js';
import { serialize } from '@/helpers.js';

export default {
  name: 'ProdutosLista',
  data() {
    return {
      produtos: null,
      produtosPagina: 9,
    };
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);
      return `/produto?_limit=${this.produtosPagina}${query}`;
    },
  },
  watch: {
    url() {
      this.getProdutos();
    },
  },
  methods: {
    getProdutos() {
      api.get(this.url).then((r) => (this.produtos = r.data));
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style></style>
