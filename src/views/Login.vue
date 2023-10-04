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
        v-model="login.password"
      />
      <button class="btn" @click.prevent="logar">Logar</button>
    </form>
    <p class="perdeu">
      <a href="/" target="_blank"> Perdeu a senha? Clique aqui </a>
    </p>
    <LoginCriar />
  </section>
</template>

<script>
import LoginCriar from '@/components/LoginCriar.vue';

export default {
  name: 'TheLogin',
  components: {
    LoginCriar,
  },
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
    };
  },
  methdos: {
    logar() {
      console.log('Logou');
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
