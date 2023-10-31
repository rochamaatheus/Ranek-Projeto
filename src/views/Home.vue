<template>
  <section>
    <h1>&#x1F44D; Compre ou Venda &#x1F44E;</h1>
    <ProdutosBuscar />
    <ProdutosLista />
  </section>
</template>

<script>
import ProdutosBuscar from '@/components/ProdutosBuscar.vue';
import ProdutosLista from '@/components/ProdutosLista.vue';

export default {
  name: 'TheHome',
  components: {
    ProdutosBuscar,
    ProdutosLista,
  },
  created() {
    document.title = 'Ranek';
  },
};
</script>

<style scoped>
h1 {
  color: #87f;
  font-size: 2rem;
  margin-top: 40px;
  text-align: center;
}
</style>
