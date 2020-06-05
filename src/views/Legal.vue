<template>
  <div class="about">
    <section class="about__info">
      <h1 class="about__info__title">{{ $t("legal.title") }}</h1>
      <h2 class="about__info__subtitle">{{ $t("legal.firstSubtitle") }}</h2>
      <p class="about__info__paragraph">{{ $t("legal.firstParagraph") }}</p>
      <h2 class="about__info__subtitle">{{ $t("legal.secondSubtitle") }}</h2>
      <p class="about__info__paragraph">{{ $t("legal.secondParagraph") }}</p>
      <h2 class="about__info__subtitle">{{ $t("legal.thirdSubtitle") }}</h2>
      <p class="about__info__paragraph">{{ $t("legal.thirdParagraph") }}</p>
      <h2 class="about__info__subtitle">{{ $t("legal.fourthTitle") }}</h2>
      <p class="about__info__paragraph">{{ $t("legal.fourthParagraph") }}</p>
      <h2 class="about__info__subtitle">{{ $t("legal.fifthTitle") }}</h2>
      <p class="about__info__paragraph">{{ $t("legal.fifthParagraph") }}</p>
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
  &__paragraph {
    font-size: 1.5rem;
    white-space: pre-line;
  }
}
</style>
