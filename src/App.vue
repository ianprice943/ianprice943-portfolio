<template>
  <div id="app">
    <Header />
    <Main /> 
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
body {
  margin: 0;
  background-image: url("~@/assets/prism.png");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #0F0F0F;*/
  color: #FFF;
  /* background-image: url("~@/assets/prism.png"); */
  position: relative;
  min-height: 100vh;
}
</style>
