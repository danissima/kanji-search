<template>
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
</template>

<script>
export default {
  props: {
    info: Object,
  },
  
  data() {
    return {
      savedReciepes: this.$store.getters["reciepes/getSavedReciepes"],
    }
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
  },
  
}
</script>
