<template>
  <section class="login">
    <h1>Login</h1>
    <form>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="login.email" />
      <label for="password">Senha</label>
      <input
        type="password"
        name="password"
        id="password"
        v-model="login.senha"
      />
      <button class="btn" @click.prevent="logar">Logar</button>
      <ErrorNotificacao :erros="erros" />
    </form>
    <p class="perdeu">
      <a
        href="http://ranekapilocal.local/wp-login.php?action=lostpassword"
        target="_blank"
      >
        Perdeu a senha? Clique aqui
      </a>
    </p>
    <LoginCriar />
  </section>
</template>

<script>
import ErrorNotificacao from '@/components/ErrorNotificacao.vue';
import LoginCriar from '@/components/LoginCriar.vue';

export default {
  name: 'TheLogin',
  components: {
    LoginCriar,
    ErrorNotificacao,
  },
  data() {
    return {
      login: {
        email: '',
        senha: '',
      },
      erros: [],
    };
  },
  created() {
    document.title = 'Login';
  },
  methods: {
    logar() {
      this.erros = [];
      this.$store
        .dispatch('logarUsuario', this.login)
        .then(() => {
          this.$store.dispatch('getUsuario');
          this.$router.push({ name: 'usuario' });
        })
        .catch((e) => this.erros.push(e.response.data.message));
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}
h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}
form {
  display: grid;
}
.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.perdeu {
  text-align: center;
  margin: 20px auto 0;
}
.perdeu a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
