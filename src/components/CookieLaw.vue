<template>
  <div class="main-wrapper">
    <cookie-law theme="blood-orange--rounded">
      <div slot="message">
        This website uses cookies to ensure you get the best experience on our website. More info <router-link to="/about">Click here</router-link>
      </div>
    </cookie-law>
  </div>
</template>

<script>
import CookieLaw from 'vue-cookie-law'

export default {
  components: {
    CookieLaw
  }
}
</script>
