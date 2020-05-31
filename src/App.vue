<template>
  <div class="center grid" id="app">
    <header class="nav">
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="2">
          <img src="https://firebasestorage.googleapis.com/v0/b/monize-63cfc.appspot.com/o/logo.png?alt=media&token=edb2810f-c47a-4f6d-91f4-3bb619723459" class="nav__logo" alt="logo">
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="8">
          <router-link class="nav__link" to="/">Chollos</router-link>
          <router-link class="nav__link" to="/about">About</router-link>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="2"></vs-col>
      </vs-row>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

:root {
  --font-weight-light: 400;
  --font-weight-regular: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --color-grey: #aaaaaa;

  --vs-theme-bg: #f4f7f8;
  --vs-theme-color: #2c3e50;
  --vs-theme-layout: #fff;
  --vs-theme-bg2: #eef2f5;
  --vs-theme-code: #3f3d56;
  --vs-theme-code2: #363449;

}

#app {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.nav {
  background-color: var(--vs-theme-layout);
  padding: 1.2em;
  text-align: center;

  &__logo {
    width: 110px;
  }

  &__link {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding-right: 1em;
    font-size: 1.2em;
    font-weight: var(--font-weight-regular);
    letter-spacing: normal;
    color: var(--color-grey);
    line-height: 1.2em;
    text-align: start;

    &.router-link-exact-active {
      color: var(--vs-theme-color);
      font-weight: var(--font-weight-semibold);
    }
  }
}
</style>
