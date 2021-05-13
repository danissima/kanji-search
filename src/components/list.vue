<template>
  <div>
    <h4 v-if="title" class="list-title">{{ title }}</h4>
    <ul class="list">
      <li class="list-item" :class="{'list-item_hidden': hideElements && i > 4}" v-for="(item, i) in items" :key="i">{{ item }}</li>
    </ul>
    <button @click="switchHiding" class="list-button" v-if="items.length > 5">{{ hideElements ? 'Show all' : 'Hide' }}</button>
  </div>
</template>

<script>
export default {
  name: "list",
  props: {
    items: Array,
    title: String
  },
  data() {
    return {
      hideElements: true
    }
  },
  methods: {
    switchHiding() {
      this.hideElements = !this.hideElements
    }
  }
};
</script>

<style lang="sass">
  .list
    list-style-type: circle
    text-align: left
    list-style-position: inside
    font-size: 18px
    &-title
      margin-bottom: 10px
    &-jp
      font-family: 'Noto Serif JP', serif
    &-item
      transition: display .3s ease-out
      &_hidden
        display: none
    &-button
      margin-top: 10px
      background: none
      border: none
      cursor: pointer
      font-size: 14px
      font-family: 'Montserrat Alternates', sans-serif
      outline: none
      &::after
        content: ''
        display: block
        height: 1px
        width: 0
        margin: 0 auto
        background-color: #333
        transition: width .3s ease-out
      &:hover::after
        width: 100%
</style>
