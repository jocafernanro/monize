<template>
  <div class="notFound center">
    <section class="notFound__info">
      <h1 class="notFound__info__title">
        {{ $t("notFound.title") }}
      </h1>
      <router-link to="/">
        <vs-button
          border
        >
          Volver a la principal
        </vs-button>
      </router-link>
    </section>
  </div>

</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="scss" scoped>
  .notFound {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5em;
    &__info, &__button{
      display: grid;
    }

  }

</style>
