<template>
  <div id="app">
    <kanjiSearch />
  </div>
</template>

<style>
@import url("./assets/css/style.css");
</style>

<script>
import kanjiSearch from './components/kanjiSearch.vue'
export default {
  name: "App",
  components: {
    kanjiSearch
  }
};
</script>

<style lang="sass">
  #app
    display: flex
    align-items: center
    flex-direction: column
    height: 100vh
</style>