<template>
  <div id="app">
    <navigation />
  </div>
</template>

<style>
@import url("./assets/css/style.css");
</style>

<script>
import navigation from './components/navigation.vue'
export default {
  name: "App",
  components: {
    navigation
  }
};
</script>

<style lang="sass">
  #app
    // background: linear-gradient(to top, #42b983 0%, #fff 100%)
    height: 100vh
  h1
    text-align: center
    margin-bottom: 50px
  .search
    &-top
      margin: 30px 0
      width: 100%
    &-form
      display: flex
      flex-direction: column
      align-items: center
    &-hint
      font-size: 14px
      margin-bottom: 20px
      opacity: .7
  .form
    &-input
      text-align: center
      width: 220px
      height: 50px
      border-radius: 10px
      outline: none
      border: 2px solid #efefef
      padding: 10px
      font-size: 18px
      margin-bottom: 10px
      transition: border-color .3s ease-out
      font-family: 'Montserrat Alternates', sans-serif
      &:focus
        border-color: #bbb
    &-button
      padding: 0 20px
      background-color: #fff
      font-family: 'Montserrat Alternates', sans-serif
      height: 50px
      border-radius: 100px
      border: none
      cursor: pointer
      box-shadow: 3px 3px 15px #333
      font-size: 18px
      transition: background-color .3s ease-out
      &:hover
        background-color: #333
        color: white
  .results
    display: flex
    flex-wrap: wrap
    justify-content: center
    align-items: baseline
</style>