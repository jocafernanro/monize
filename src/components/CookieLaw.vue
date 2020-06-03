<template>
  <cookie-law theme="blood-orange--rounded" class="cookie-law">
    <div slot-scope="props" class="cookie-law__props">
      <p class="cookie-law__props__info">
        {{ $t("cookies.info") }}
        <router-link to="/about" class="cookie-law__props__info__about-link">{{ $t("cookies.clickHere") }}</router-link>
      </p>
      <div class="center grid cookie-law__props__buttons">
        <vs-button color="rgb(59,222,200)" gradient @click="props.accept">{{ $t("cookies.accept") }}</vs-button>
        <vs-button dark shadow @click="props.close">{{ $t("cookies.ignoreMe") }}</vs-button>
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
