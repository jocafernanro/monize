<template>
  <div class="main-wrapper">
    <cookie-law theme="blood-orange--rounded">
      <div slot-scope="props">
        <p>
          This website uses cookies 🍪 to ensure you get the best experience on our website. More info <router-link to="/about" class="aboutLink">Click here</router-link>
        </p>
        <div class="center grid cookieButton">
          <vs-button
            color="rgb(59,222,200)"
            gradient
            @click="props.accept"
          >
            I accept
          </vs-button>
          <vs-button
            danger
            border
            @click="props.close"
          >
            Ignore me
          </vs-button>
        </div>
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
<style scoped>

  .aboutLink{
    color:dodgerblue;
  }
  .cookieButton{
    display: flex;
  }
</style>
