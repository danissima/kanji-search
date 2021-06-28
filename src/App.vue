<template>
  <div id="app">
    <h1>{{ loggedAs ? `Logged as ${loggedAs}` : "You are not logged in"}}</h1>
    <navigation />
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import navigation from "./components/navigation/navigation"

export default {
  name: "App",
  components: {
    navigation
  },
  computed: {
    loggedAs() {
      return this.$store.state.users.loggedAs
    }
  }
};
</script>

<style lang="sass">
  #app
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    height: 100vh
  h1
    margin-bottom: 40px
  h2
    margin-bottom: 20px
  .wrapper
    padding: 50px 0
    display: flex
    justify-content: center

</style>