<template>
  <section>
    <h2>Crie a Sua Conta</h2>
    <button @click="criar = true">Criar Conta</button>
    <UsuarioForm />
  </section>
</template>

<script>
import UsuarioForm from '@/components/UsuarioForm.vue';

export default {
  name: 'LoginCriar',
  components: {
    UsuarioForm,
  },
};
</script>

<style scoped></style>
