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
export default {
  name: 'TheLogin',
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
    };
  },
};
</script>

<style></style>
