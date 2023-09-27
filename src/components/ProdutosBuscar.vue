<template>
  <form>
    <label for="busca" aria-label="Buscar produto">
      <input
        type="text"
        name="busca"
        id="busca"
        v-model="busca"
        placeholder="O que vai comprar?"
      />
    </label>
    <input
      type="submit"
      id="lupa"
      value="Buscar"
      @click.prevent="buscarProdutos"
    />
  </form>
</template>

<script>
export default {
  name: 'ProdutosBuscar',
  data() {
    return {
      busca: '',
    };
  },
  methods: {
    buscarProdutos() {
      this.$router.push({ query: { q: this.busca } });
    },
  },
};
</script>

<style></style>
