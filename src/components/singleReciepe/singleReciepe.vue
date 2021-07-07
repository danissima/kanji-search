<template>
  <div class="single-reciepe" v-if="reciepeData">
    <v-container>
      <h2 class="h2">{{ reciepeData.title }}</h2>
      <div class="single-reciepe__main">
        <div class="single-reciepe__img">
          <img :src="reciepeData.image" :alt="reciepeData.title">
        </div>
        <div class="single-reciepe__ingredients">
          <h3 class="h3 single-reciepe__subtitle">You will need</h3>
          <ul class="single-reciepe__list">
            <li 
              class="single-reciepe__ingredient" 
              v-for="(ingredient, i) in reciepeData.extendedIngredients" 
              :key="i"
            >{{ Math.ceil(ingredient.measures.metric.amount) }} {{ ingredient.measures.metric.unitShort }} {{ ingredient.measures.metric.unitShort ? 'of' : '' }} {{ ingredient.originalName }}</li>
          </ul>
        </div>
      </div>
      <div class="single-reciepe__instructions">
        <h3 class="h3 single-reciepe__subtitle">Instructions</h3>
        <p ref="reciepeInstructions" v-html="reciepeData.instructions" class="single-reciepe__text"></p>
      </div>
      <div class="single-reciepe__pros">
        <p v-if="reciepeData.veryPopular">
          <v-icon
            large
            color="pink"
          >
            mdi-heart
          </v-icon>
          <b>Very popular</b>
        </p>
        <p>
          <v-icon
            large
            color="blue"
          >
            mdi-alarm-check
          </v-icon>
          <b>Ready in {{ reciepeData.readyInMinutes }} minutes</b>
        </p>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'singleReciepe',
  data() {
    return {
      reciepeData: null
    }
  },
  methods: {
    getReciepeData(reciepeId) {
      let xhr = new XMLHttpRequest()
      xhr.open('GET', `https://api.spoonacular.com/recipes/${reciepeId}/information?includeNutrition=false&apiKey=c15ed1406b824907af3d5942de225007`)
      xhr.responseType = 'json'
      xhr.onload = () => {
        console.log(xhr.response)
        this.reciepeData = xhr.response
      }
      xhr.send()
    },
  },
  beforeMount() {
    this.getReciepeData(this.$route.params.reciepeId)
  },
}
</script>