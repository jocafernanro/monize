<template>
  <div class="information">
    <section class="information__info">
      <h1 class="information__info__title">{{ $t("about.title") }}</h1>
      <p class="information__info__paragraph">{{ $t("about.mainParagraph") }}</p>
      <h2 class="information__info__subtitle">{{ $t("about.firstSubtitle") }}</h2>
      <p class="information__info__paragraph">{{ $t("about.firstParagraph") }}</p>
      <h2 class="information__info__subtitle">{{ $t("about.secondSubtitle") }}</h2>
      <p class="information__info__paragraph">{{ $t("about.secondParagraph") }}</p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
 @import "src/assets/styles/shared-styles";
</style>
