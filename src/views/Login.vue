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
  comments: {
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

<style></style>
