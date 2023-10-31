<template>
  <section class="produtos-container">
    <transition mode="out-in">
      <div v-if="produtos && produtos.length" class="produtos" key="produtos">
        <div v-for="produto in produtos" :key="produto.id" class="produto">
          <router-link :to="{ name: 'produto', params: { id: produto.id } }">
            <img
              v-if="produto.fotos && produto.fotos[0]"
              :src="produto.fotos[0].src"
              :alt="produto.fotos[0].titulo"
            />
            <p class="preco">{{ produto.preco }}</p>
            <h2 class="titulo">{{ produto.nome }}</h2>
            <p>{{ produto.descricao }}</p>
          </router-link>
        </div>
        <PaginasProdutos
          :produtosTotal="produtosTotal"
          :produtosPagina="produtosPagina"
        />
      </div>
      <div v-else-if="produtos && produtos.length === 0" key="sem-resultados">
        <p class="sem-resultados">Busca sem resultados.</p>
      </div>
      <PageLoading v-else key="loading" />
    </transition>
  </section>
</template>

<script>
import PaginasProdutos from '@/components/PaginasProdutos.vue';
import { api } from '@/services.js';
import { serialize } from '@/helpers.js';

export default {
  name: 'ProdutosLista',
  components: {
    PaginasProdutos,
  },
  data() {
    return {
      produtos: null,
      produtosPagina: 9,
      produtosTotal: 0,
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
      this.produtos = null;
      setTimeout(() => {
        api.get(this.url).then((r) => {
          this.produtosTotal = Number(r.headers['x-total-count']);
          this.produtos = r.data;
        });
      }, 1500);
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style scoped>
.produtos-container {
  max-width: 900px;
  margin: 0 auto;
}
.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 30px;
}
@media (max-width: 500px) {
  .produtos {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin: 10px;
  }
}
.produto {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}
.produto:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  z-index: 1;
}
.produto img {
  border-radius: 4px;
  margin-bottom: 20px;
}
.titulo {
  margin-bottom: 10px;
}
.preco {
  opacity: 0.5;
  color: #e80;
  font-weight: bold;
}
.produto:hover .preco {
  opacity: 0.7;
}
.sem-resultados {
  text-align: center;
}
</style>
