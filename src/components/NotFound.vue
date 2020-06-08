<template>
  <div class="notFound center">
    <img class="notFound__img" src="../assets/images/404.png">
    <section class="notFound__info">
      <h1 class="notFound__info__title">
        {{ $t("notFound.title") }}
      </h1>
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
/*  .notFound {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 1.5em;
    &__info, &__button{
      display: grid;
    }
  }*/

  .notFound{
    position: relative;
    text-align: center;

    &__info{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      &__title{
        font-size: 2rem;
        margin-top: 8rem;
      }
    }
  }

</style>
