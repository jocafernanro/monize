<template>
  <header class="navbar">
    <div class="nav">
      <div class="nav__item">
        <router-link to="/">
          <img
            class="nav__item__logo"
            src="https://firebasestorage.googleapis.com/v0/b/monize-63cfc.appspot.com/o/logo.png?alt=media&token=be607f58-b60f-4a48-913d-7df5542afe84"
            alt="logo"
          />
        </router-link>
      </div>

      <div class="nav__item nav__item--menu">
        <router-link class="nav__item__link" to="/">Chollos</router-link>
        <router-link class="nav__item__link" to="/about">About</router-link>
      </div>

      <div class="nav__item nav__item--icon" @click="toggleResponsiveMenu">
        <vs-avatar>
          <i class="bx bx-menu-alt-right"></i>
        </vs-avatar>
      </div>
    </div>

    <div
      class="nav__responsive"
      v-show="responsiveMenuActivated"
      @click="responsiveMenuActivated= false"
    >
      <ul class="nav__responsive__list">
        <li>
          <router-link class="nav__responsive__list__item" to="/">Chollos</router-link>
        </li>
        <li>
          <router-link class="nav__responsive__list__item" to="/about">About</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      responsiveMenuActivated: false
    }
  },
  methods: {
    toggleResponsiveMenu () {
      this.responsiveMenuActivated = !this.responsiveMenuActivated
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: column;
}

.nav {
  background-color: var(--vs-theme-layout);
  padding: 1.2em;
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: var(--max-width);
  margin: 0 auto;

  &__item {
    &--menu {
      @media (max-width: 600px) {
        display: none;
      }
    }

    &--icon {
      display: none;

      @media (max-width: 600px) {
        display: inline-block;
        width: 1em;
        cursor: pointer;
      }
    }

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

      @media (max-width: 600px) {
        display: none;
      }

      &.router-link-exact-active {
        color: var(--vs-theme-color);
        font-weight: var(--font-weight-semibold);
      }
    }
  }
}

.nav__responsive {
  display: none;

  &__list {
    display: inline-block;
    text-align: right;
    list-style: none;
    background-color: var(--vs-theme-layout);
    padding: 2em;
    border-radius: 2em;
    box-sizing: border-box;
    box-shadow: 0 15px 30px -8px rgba(0, 0, 0, 0.18);

    &__item {
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;
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

  @media (max-width: 600px) {
    margin-right: 2em;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    z-index: 101;
    right: 0;
    top: 4em;
  }
}
</style>
