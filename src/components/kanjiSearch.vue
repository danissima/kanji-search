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
        xml.responseType = 'json'
        xml.open("GET", `https://kanjiapi.dev/v1/kanji/${item}`, true)
        xml.onload = () => {
          returnedArray.push(xml.response)
        };
        xml.send();
      });
      this.results = returnedArray
    },
  },
};
</script>