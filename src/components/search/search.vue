<template>
  <div class="search">
    <v-container>
      <div class="search__panel">
        <h2 class="h2">Recipes searching</h2>
        <v-text-field
          label='What are you looking for?'
          ref="reciepe"
        ></v-text-field>
        <v-btn @click="searchReciepe">Find Reciepe</v-btn>
      </div>
      <reciepesList v-if="searchResult.length" :list="searchResult" />
      <h3 v-else class="h3">No reciepes found</h3>
    </v-container>
  </div>
</template>

<script>
import reciepesList from '../reciepesList/reciepesList.vue'

export default {
  name: 'tasks',

  components: {
    reciepesList
  },

  data() {
    return {
     searchResult: []
    }
  },
  
  methods: {
    searchReciepe() {
      let reciepe = this.$refs.reciepe.$refs.input.value
      let xhr = new XMLHttpRequest()
      xhr.open("GET", `https://api.spoonacular.com/recipes/complexSearch?query=${reciepe}&number=100&apiKey=c15ed1406b824907af3d5942de225007`)
      xhr.responseType = 'json'
      xhr.onload = () => {
        console.log(xhr.response)
        this.searchResult = xhr.response.results
      }
      xhr.send()
    }
  }
}
</script>