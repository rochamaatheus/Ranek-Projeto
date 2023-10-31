<template>
  <section>
    <UsuarioForm>
      <button class="btn" @click.prevent="atualizarUsuario">
        Atualizar Usuário
      </button>
    </UsuarioForm>
    <ErrorNotificacao :erros="erros" />
  </section>
</template>

<script>
import ErrorNotificacao from '@/components/ErrorNotificacao.vue';
import UsuarioForm from '@/components/UsuarioForm.vue';
import { api } from '@/services.js';

export default {
  name: 'UsuarioEditar',
  data() {
    return {
      erros: [],
    };
  },
  components: {
    UsuarioForm,
    ErrorNotificacao,
  },
  created() {
    document.title = 'Usuário | Editar';
  },
  methods: {
    atualizarUsuario() {
      this.erros = [];
      api
        .put(`/usuario`, this.$store.state.usuario)
        .then(() => {
          this.$store.dispatch('getUsuario', this.$store.state.usuario.id);
          this.$router.push({ name: 'usuario' });
        })
        .catch((e) => this.erros.push(e.response.data.message));
    },
  },
};
</script>

<style scoped></style>
