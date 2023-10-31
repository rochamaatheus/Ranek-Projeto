<template>
  <section>
    <div v-if="compras">
      <h2>Compras</h2>
      <div
        class="produtos-wrapper"
        v-for="(compra, index) in compras"
        :key="index"
      >
        <ProdutoItem v-if="compra.produto" :produto="compra.produto">
          <p class="vendedor">
            <span>Vendedor:</span> {{ compra.vendedor_id }}
          </p>
        </ProdutoItem>
      </div>
    </div>
  </section>
</template>

<script>
import ProdutoItem from '@/components/ProdutoItem.vue';
import { mapState } from 'vuex';
import { api } from '@/services.js';

export default {
  name: 'UsuarioCompras',
  data() {
    return {
      compras: null,
    };
  },
  computed: {
    ...mapState(['usuario', 'login']),
  },
  methods: {
    getCompras() {
      api.get(`/transacao`).then((r) => (this.compras = r.data));
    },
  },
  watch: {
    login() {
      if (this.login) {
        this.getCompras();
      }
    },
  },
  created() {
    if (this.login) {
      this.getCompras();
    }
    document.title = 'Usuário | Compras';
  },
  components: {
    ProdutoItem,
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}
.produtos-wrapper {
  margin-bottom: 40px;
}
.vendedor span {
  color: #e80;
}
</style>
