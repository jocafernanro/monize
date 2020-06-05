<template>
  <div class="login">
    <transition name="fade">
      <div v-if="performingRequest" class="loading">
        <p>Loading...</p>
      </div>
    </transition>
    <section>
      <form class="login__form" @submit.prevent>
        <h1>Admin login</h1>

        <vs-input
          class="login__form__input"
          color="#7d33ff"
          shadow
          type="email"
          v-model.trim="loginForm.email"
          placeholder="Email"
        >
          <template #icon>
            <i class="bx bx-user"></i>
          </template>
        </vs-input>

        <vs-input
          class="login__form__input"
          color="#7d33ff"
          shadow
          type="password"
          v-model.trim="loginForm.password"
          placeholder="Password"
        >
          <template #icon>
            <i class="bx bx-lock-open-alt"></i>
          </template>
          <template v-if="errorMsg !== ''" #message-danger>
            {{ errorMsg }}
          </template>
        </vs-input>

        <vs-button relief class="login__form__button" @click="login()">Login</vs-button>
      </form>
    </section>
  </div>
</template>

<script>
const fb = require('../../firebaseConfig')

export default {
  data: () => ({
    loginForm: {
      email: '',
      password: null
    },
    performingRequest: false,
    errorMsg: ''
  }),
  methods: {
    login () {
      this.performingRequest = true

      fb.auth
        .signInWithEmailAndPassword(
          this.loginForm.email,
          this.loginForm.password
        )
        .then(user => {
          this.$store.commit('setCurrentUser', user.user)
          this.$store.dispatch('fetchUserProfile')
          this.performingRequest = false
          this.$router.push('/admin')
        })
        .catch(err => {
          console.log(err)
          this.performingRequest = false
          this.errorMsg = err.message
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 30%;
  margin: 0 auto;
  font-size: 1em;
  padding: 2em 0;

  &__form {
    &__input {
      height: 3em;
    }

    &__button {
      width: 6em;
    }
  }
}
</style>
