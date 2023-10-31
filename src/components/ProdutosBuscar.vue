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

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
}
#busca {
  padding: 20px;
  border: none;
}
#busca:focus,
#busca:hover {
  transform: scale(1.1);
}
@media (max-width: 700px) {
  #busca:focus,
  #busca:hover {
    transform: initial;
  }
}
#lupa {
  width: 62px;
  height: 62px;
  background: url('../assets/search.svg') no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  box-shadow: none;
}
</style>
