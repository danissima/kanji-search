<template>
  <div>
    <div class="search-top">
      <h1>Kanji searching</h1>
      <form class="search-form" @submit.prevent="getData(inputValue)">
        <input
          pattern="[\u4e00-\u9faf\u3400-\u4dbf]+?"
          class="form-input"
          type="text"
          placeholder="Enter some kanji"
          v-model="inputValue"
        />
        <span class="search-hint"> for example '家' or '中学生'</span>
        <button class="form-button">Search for kanji</button>
      </form>
    </div>
    <div v-if="results.length" class="results">
      <kanjiResult v-for="(result, i) in results" :key="i"  :info="result" />
    </div>
  </div>
</template>

<script>
import kanjiResult from "./kanjiResult.vue";
export default {
  name: "kanjiSearch",
  data() {
    return {
      inputValue: "",
      results: [],
    };
  },
  components: {
    kanjiResult,
  },
  methods: {
    getData(value) {
      let returnedArray = []
      value.split('').forEach(item => {
        let xml = new XMLHttpRequest();
        xml.open("GET", `https://kanjiapi.dev/v1/kanji/${item}`, true)
        xml.onload = () => {
          returnedArray.push(JSON.parse(xml.response))
        };
        xml.send();
      });
      this.results = returnedArray
    },
  },
};
</script>
<style lang="sass">
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
    width: 200px
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
    background-color: #fff
    font-family: 'Montserrat Alternates', sans-serif
    width: 200px
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