<template>
  <div class="notFound center">
    <h1 class="notFound__title">
      {{ $t("notFound.title") }}
    </h1>
    <img class="notFound__img" src="../assets/images/404.png">
    <section class="notFound__info">
      <vs-button
          size="xl"
          border
          to="/"
          flat
        >
          Volver a la principal
      </vs-button>
    </section>
  </div>

</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="scss" scoped>
  .notFound{
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;

    &__title{
      margin: 0;
      text-shadow: 0.5px .5px 2px #000000;
      text-align: center;
      font-size: 1.8rem;
    }

    &__info{
      position: absolute;
      top: 75%;
      left: 20%;
      transform: translate(-50%, -50%);
    }
  }

</style>
