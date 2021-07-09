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
        <infoIcon
          v-if="reciepeData.veryPopular"
          color="pink"
          icon="heart" 
          iconTitle="Very Popular"
        />
        <infoIcon
          color="blue"
          icon="alarm-check" 
          :iconTitle="`Ready in ${reciepeData.readyInMinutes} minutes`"
        />
        <infoIcon
          v-if="reciepeData.veryHealthy"
          color="green"
          icon="spa" 
          iconTitle="Very Healthy"
        />
      </div>
      <div class="single-reciepe__similar" v-if="similarReciepes.length">
        <h3 class="h3 single-reciepe__subtitle">Similar reciepes</h3>
        <reciepesList :list="similarReciepes" />
      </div>
    </v-container>
  </div>
</template>

<script>
import infoIcon from './includes/infoIcon/infoIcon.vue'
import reciepesList from '../reciepesList/reciepesList.vue'

export default {
  name: 'singleReciepe',
  data() {
    return {
      reciepeData: null,
      reciepeId: this.$route.params.reciepeId,
      similarReciepes: [],
    }
  },

  components: {
    infoIcon,
    reciepesList,
  },

  methods: {
    getReciepeData() {
      let xhr = new XMLHttpRequest()
      xhr.open('GET', `https://api.spoonacular.com/recipes/${this.reciepeId}/information?includeNutrition=false&apiKey=c15ed1406b824907af3d5942de225007`)
      xhr.responseType = 'json'
      xhr.onload = () => {
        this.reciepeData = xhr.response
      }
      xhr.send()
    },
    getSimilarReciepes() {
      let xhr = new XMLHttpRequest()
      xhr.open('GET', `https://api.spoonacular.com/recipes/${this.reciepeId}/similar?apiKey=c15ed1406b824907af3d5942de225007`)
      xhr.responseType = 'json'
      xhr.onload = () => {
        this.similarReciepes = xhr.response
      }
      xhr.send()
    },
  },

  watch: {
    $route(to) {
      this.reciepeId = to.params.reciepeId
      this.getReciepeData()
      this.getSimilarReciepes()
    }
  },

  beforeMount() {
    this.getReciepeData()
    this.getSimilarReciepes()
  },
}
</script>