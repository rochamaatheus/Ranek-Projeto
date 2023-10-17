<template>
  <section>
    <h2>Endereço de Envio</h2>
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

export default {
  name: 'FinalizarCompra',
  components: { UsuarioForm },
  props: ['produto'],
  methods: {
    finalizarCompra() {
      this.criarTransacao();
    },
    criarTransacao() {
      api.post('/transacao', this.compra).then(() => {
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

<style scoped></style>
