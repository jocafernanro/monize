<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__copyright">
        <h6 class="footer__copyright__info">{{ $t('footer.copyright') }}</h6>
      </div>

      <div class="footer__info">
        <h6 class="footer__info__subtitle">{{ $t('footer.aboutUs.title') }}</h6>
        <router-link to="/about" class="footer__info__link">{{ $t('footer.aboutUs.link') }}</router-link>
      </div>

      <div class="footer__info">
        <h6 class="footer__info__subtitle">{{ $t('footer.legal.title') }}</h6>
        <router-link to="/legal" class="footer__info__link">{{ $t('footer.legal.link') }}</router-link>
      </div>

      <div class="footer__info">
        <h6 class="footer__info__subtitle">{{ $t('footer.contact.title') }}</h6>
        <a href class="footer__info__link">{{ $t('footer.contact.link') }}</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang='scss' scoped>
.footer {
  background-color: var(--vs-theme-layout);
  margin-top:auto;

  &__copyright {
    margin: 1em 0;
    flex-grow: 3;

    &__info {
      font-size: 1em;
      margin: 0;
    }
  }

  &__info {
    flex-grow: 1;
    margin: 1em 0;

    &__subtitle {
      font-size: 1em;
      margin: 0 0 1em 0;
    }

    &__link {
      text-decoration: none;
      color: var(--vs-theme-main);
    }
  }
}

.footer__content {
  width: 80%;
  margin: 0 auto;
  padding: 2em 0 4em 0;
  display: flex;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 800px){
  flex-direction: column;
  }
}
</style>
