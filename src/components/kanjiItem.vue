<template>
  <button class="kanji-item">{{ view }}</button>
</template>
<script>
export default {
  name: "kanjiItem",
  props: {
    view: String,
  },
  
};
</script>
<style lang="sass">
  .kanji-item
    width: 60px
    height: 60px
    font-size: 28px
    border-radius: 10px
    margin: 10px
    cursor: pointer
    box-shadow: 3px 3px 7px #333
    background-color: #fff
    border: none
    transition: transform .3s ease-out
    &:hover
      transform: translateY(-3px)
</style>