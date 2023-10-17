<template>
  <section>
    <h2>Endereço de Envio</h2>
    <UsuarioForm>
      <button class="btn" @click.prevent="atualizarCompra">
        Finalizar Compra
      </button>
    </UsuarioForm>
  </section>
</template>

<script>
import UsuarioForm from './UsuarioForm.vue';

export default {
  name: 'FinalizarCompra',
  components: { UsuarioForm },
  props: ['produto'],
  methods: {
    atualizarCompra() {
      alert('Comprou');
    },
  },
};
</script>

<style scoped></style>
