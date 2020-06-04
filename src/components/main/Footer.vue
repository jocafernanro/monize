<template>
  <footer class='footer'>

    <div class="footer__copyright">
      <h6 class="footer__copyright__info">© 2020</h6>
    </div>

    <div class="footer__info">
      <h6 class="footer__info__subtitle">About us</h6>
      <router-link to="/about" class="footer__info__link">Conócenos</router-link>
    </div>

    <div class="footer__info">
      <h6 class="footer__info__subtitle">Legal</h6>
      <router-link to="/legal" class="footer__info__link">Políticas de privacidad</router-link>
    </div>

    <div class="footer__info">
      <h6 class="footer__info__subtitle">Contacto</h6>
      <a href="" class="footer__info__link">monize4dmin@gmail.com</a>
    </div>

  </footer>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
  .footer {
    width: 80%;
    margin: 0 auto;
    padding: 2em 0 4em 0;
    display: flex;
    justify-content: center;
    flex-direction: row;
    background-color: var(--vs-theme-layout);

    &__copyright {
      flex-grow: 3;

      &__info {
        font-size: 1em;
        margin: 0;
      }
    }

    &__info {
      flex-grow: 1;

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
</style>
