<template>
  <v-col class="reciepe-item flex-column align-center col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="reciepe-item__content">
      <div class="reciepe-item__image">
        <img :src="info.image" :alt="info.title">
      </div>
      <h3 class="h3" @click="redirectToReciepe(info.id)">{{ info.title }}</h3>
      <v-divider></v-divider>
      <div class="reciepe-item__controls">
        <v-btn
          v-if="isAddedReciepe(info)"
          elevation="4"
          icon
          color="error"
          @click="removeReciepe(info)">
          <v-icon>
            mdi-minus
          </v-icon>
        </v-btn>
        <v-btn
          v-else
          elevation="4"
          icon
          color="success"
          @click="addReciepe(info)">
          <v-icon>
            mdi-plus
          </v-icon>
        </v-btn>
      </div>
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'reciepeItem',
  props: {
    info: Object
  },
  methods: {
    addReciepe(reciepe) {
      this.$store.commit('reciepes/addReciepe', reciepe)
    },
    removeReciepe(reciepe) {
      this.$store.commit('reciepes/removeReciepe', reciepe)
    },
    isAddedReciepe(reciepe) {
      return this.savedReciepes.some(item => {
        return item.id === reciepe.id
      })
    },
    redirectToReciepe(reciepeId) {
      this.$router.push({path: `/reciepe/${reciepeId}`})
    }
  },
  data() {
    return {
      savedReciepes: this.$store.getters["reciepes/getSavedReciepes"]
    }
  }
}
</script>