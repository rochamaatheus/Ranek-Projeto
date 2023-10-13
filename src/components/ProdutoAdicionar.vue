<template>
  <form class="adicionar-produto">
    <label for="nome">Nome</label>
    <input type="text" id="nome" name="nome" v-model="produto.nome" />
    <label for="preco">Preço (USD)</label>
    <input type="number" id="preco" name="preco" v-model="produto.preco" />
    <label for="fotos">Fotos</label>
    <input type="file" id="fotos" name="fotos" ref="fotos" />
    <label for="descricao">Descrição</label>
    <textarea
      name="descricao"
      id="descricao"
      v-model="produto.descricao"
    ></textarea>
    <input
      class="btn"
      type="button"
      value="Adicionar Produto"
      @click.prevent="adicionarProduto"
    />
  </form>
</template>

<script>
export default {
  name: 'ProdutoAdicionar',
  data() {
    return {
      produto: {
        nome: '',
        preco: '',
        fotos: '',
        descricao: '',
      },
    };
  },
};
</script>

<style scoped></style>
