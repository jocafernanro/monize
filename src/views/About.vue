<template>
  <div class="about">
    <section class="about__info">
      <h1 class="about__info__title">{{ $t("about.title") }}</h1>
      <p class="about__info__paragraph">{{ $t("about.mainParagraph") }}</p>
      <h2 class="about__info__subtitle">{{ $t("about.firstSubtitle") }}</h2>
      <p class="about__info__paragraph">{{ $t("about.firstParagraph") }}</p>
      <p class="about__info__paragraph">{{ $t("about.secondParagraph") }}</p>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: center;
  margin-top: 1.5em;
}

.about__info {
  width: 80%;
  max-width: var(--max-width);
  display: grid;
  min-width: 0;
  min-height: 0;

  &__title {
    font-size: 2rem;
  }

  &__subtitle {
    font-size: 1.5rem;
  }
}
</style>
