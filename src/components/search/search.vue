<template>
  <div class="search">
    <v-container>
      <div class="search__panel">
        <h2 class="h2">Recipes searching</h2>
        <div class="search__filters">
          <div class="search__filter">
            <v-switch
              inset
              v-model="checkMaxReadyTime"
              label="max ready time (minutes)"
            ></v-switch>
            <v-slider
              v-model="maxReadyTime"
              min="5"
              max="300"
              :thumb-label="true" 
              :disabled="!checkMaxReadyTime"
            ></v-slider>
          </div>
          <div class="search__filter">
            <v-switch
              v-model="checkCaloriesRange"
              inset
              label="calories range"
            ></v-switch>
            <v-range-slider
              v-model="caloriesRange"
              :disabled="!checkCaloriesRange"
              min="50"
              max="2000"
              :thumb-label="true" 
            ></v-range-slider>
          </div>
          <div class="search__filter">
            <v-switch
              v-model="checkSelectDiet"
              inset
              label="diet"
            ></v-switch>
            <v-select
              v-model="selectDiet"
              :disabled="!checkSelectDiet"
              :items="['Gluten Free','Vegetarian', 'Ketogenic','Lacto-Vegetarian','Ovo-Vegetarian','Vegan','Pescetarian','Paleo','Primal','Whole30']"
              label="Your diet" 
            ></v-select>
          </div>        
        </div>
        <v-text-field
          name="reciepe"
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

export default  {
  name: 'tasks',

  components: {
    reciepesList
  },

  data() {
    return {
      searchResult: [],
      selectDiet: 'Vegetarian',
      caloriesRange: [500, 1000],
      maxReadyTime: 45, 
      checkMaxReadyTime: false,
      checkCaloriesRange: false,
      checkSelectDiet: false,
    }
  },
  
  methods: {
    searchReciepe() {
      let reciepe = this.$refs.reciepe.$refs.input.value
      let diet = this.toOption(this.checkSelectDiet, 'diet', this.selectDiet) 
      let minCalories = this.toOption(this.checkCaloriesRange, 'minCalories', this.caloriesRange[0]) 
      let maxCalories = this.toOption(this.checkCaloriesRange, 'maxCalories', this.caloriesRange[1]) 
      let readyTime = this.toOption(this.checkMaxReadyTime, 'maxReadyTime', this.maxReadyTime) 
      let xhr = new XMLHttpRequest()
      xhr.open("GET", `https://api.spoonacular.com/recipes/complexSearch?query=${reciepe}${diet}${minCalories}${maxCalories}${readyTime}&number=100&apiKey=c15ed1406b824907af3d5942de225007`)
      xhr.responseType = 'json'
      xhr.onload = () => {
        console.log(xhr.response)
        this.searchResult = xhr.response.results
      }
      xhr.send()
    },
    toOption(optCheck, optTitle, optValue) {
      return optCheck ? `&${optTitle}=${optValue}` : ''
    },
  },
}
</script>