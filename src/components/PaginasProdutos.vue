<template>
  <div>
    <p>Páginas</p>
    <ul>
      <li v-for="pagina in paginasTotal" :key="pagina">
        <router-link :to="{ query: query(pagina) }">{{ pagina }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PaginasProdutos',
  props: {
    produtosPagina: {
      type: Number,
      default: 1,
    },
    produtosTotal: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    query(pagina) {
      return {
        ...this.$route.query,
        _page: pagina,
      };
    },
  },
  computed: {
    paginasTotal() {
      const total = this.produtosTotal / this.produtosPagina;
      return total !== Infinity ? Math.ceil(total) : 0;
    },
  },
};
</script>

<style></style>
