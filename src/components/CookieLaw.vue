<template>
  <cookie-law theme="blood-orange--rounded" class="cookie-law">
    <div slot-scope="props" class="cookie-law__props">
      <p class="cookie-law__props__info">
        This website uses cookies 🍪 to ensure you get the best experience on our website. More info
        <router-link to="/about" class="cookie-law__props__info__about-link">Click here</router-link>
      </p>
      <div class="center grid cookie-law__props__buttons">
        <vs-button color="rgb(59,222,200)" gradient @click="props.accept">I accept</vs-button>
        <vs-button dark shadow @click="props.close">Ignore me</vs-button>
      </div>
    </div>
  </cookie-law>
</template>

<script>
import CookieLaw from 'vue-cookie-law'

export default {
  components: {
    CookieLaw
  }
}
</script>
<style lang="scss" scoped>

.cookie-law {
  background-color: var(--vs-theme-primary);
  &__props {
    &__info {
      &__about-link {
        color: var(--vs-theme-warn);
        text-decoration: none;
      }
    }

    &__buttons {
      display: flex;
    }
  }
}

</style>
