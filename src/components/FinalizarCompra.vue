<template>
  <section>
    <h2>Endereço de Envio</h2>
    <ErrorNotificacao :erros="erros" />
    <UsuarioForm>
      <button class="btn" @click.prevent="finalizarCompra">
        Finalizar Compra
      </button>
    </UsuarioForm>
  </section>
</template>

<script>
import UsuarioForm from './UsuarioForm.vue';
import { api } from '@/services.js';
import { mapState } from 'vuex';
import ErrorNotificacao from './ErrorNotificacao.vue';

export default {
  name: 'FinalizarCompra',
  components: { UsuarioForm, ErrorNotificacao },
  props: ['produto'],
  data() {
    return {
      erros: [],
    };
  },
  methods: {
    finalizarCompra() {
      this.erros = [];
      if (this.$store.state.login) this.criarTransacao();
      else this.criarUsuario();
    },
    async criarUsuario() {
      try {
        await this.$store.dispatch('criarUsuario', this.$store.state.usuario);
        await this.$store.dispatch('getUsuario');
        await this.criarTransacao();
      } catch (e) {
        this.erros.push(e.response.data.message);
      }
    },
    criarTransacao() {
      return api.post('/transacao', this.compra).then(() => {
        this.$router.push({ name: 'compras' });
      });
    },
  },
  computed: {
    ...mapState(['usuario']),
    compra() {
      return {
        comprador_id: this.usuario.email,
        vendedor_id: this.produto.usuario_id,
        produto: this.produto,
        endereco: {
          cep: this.usuario.cep,
          rua: this.usuario.rua,
          numero: this.usuario.numero,
          bairro: this.usuario.bairro,
          cidade: this.usuario.cidade,
          estado: this.usuario.estado,
        },
      };
    },
  },
};
</script>

<style scoped>
h2 {
  margin-top: 40px;
  margin-bottom: 20px;
}
.btn {
  background: #e80;
}
</style>
