<template>
  <div>
    <div class="search-top">
      <h1>Readings searching</h1>
      <form class="search-form" @submit.prevent="getData(inputValue)">
        <input
          pattern="[\u3040-\u309f\u30a0-\u30ff]+?"
          class="form-input"
          type="text"
          placeholder="Enter some reading"
          v-model="inputValue"
        />
        <span class="search-hint"> for example 'ほたる' or 'ケイ'</span>
        <button class="form-button">Search for readings</button>
      </form>
    </div>
    <kanjiResult v-if="kanjiInfo" :info="kanjiInfo" />
    <div v-if="results" class="results">
      <kanjiItem v-for="(kanji, i) in results" :key="i" :view="kanji" @click.native="searchKanji(kanji)" />
    </div>
  </div>
</template>

<script>
import kanjiItem from "./kanjiItem";
import kanjiResult from "./kanjiResult";
export default {
  name: "readings",
  data() {
    return {
      inputValue: "",
      results: null,
      kanjiInfo: null
    };
  },
  components: {
    kanjiItem,
    kanjiResult
  },
  methods: {
    getData(value) {
      let xml = new XMLHttpRequest();
      xml.responseType = 'json'
      xml.open("GET", `https://kanjiapi.dev/v1/reading/${value}`, true)
      xml.send();
      xml.onload = () => {
        this.results = xml.response ? xml.response.main_kanji : false
      };
    },
    searchKanji(value) {
        let xml = new XMLHttpRequest();
        xml.responseType = 'json'
        xml.open("GET", `https://kanjiapi.dev/v1/kanji/${value}`, true)
        xml.onload = () => {
          this.kanjiInfo = xml.response
        };
        xml.send();
    },
  },
};
</script>