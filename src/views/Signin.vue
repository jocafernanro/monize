<template>
  <section>
    <h1>Sign up if you are cool</h1>
    <div id="firebaseui-auth-container"></div>
  </section>
</template>

<script>
import 'firebaseui/dist/firebaseui.css'
const firebase = require('../firebaseConfig.js')

export default {
  mounted () {
    firebase.ui.start('#firebaseui-auth-container', firebase.uiConfig)
  }
}
</script>
