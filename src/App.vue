<template>
  <div class id="app">
    <Header></Header>
    <section class="content">
      <router-view />
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/main/Footer'
import Header from './components/main/Header'

export default {
  components: {
    Footer,
    Header
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

:root {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  font-size: 16px;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

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
  --vs-theme-primary: #195bff;
  --vs-theme-warn: #ffba00;
  --vs-theme-danger: #ff4757;
  --vs-theme-success: #47c93a;
  --vs-theme-dark: #1e1e1e;

  --max-width: 1500px;
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

</style>
