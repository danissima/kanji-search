<template>
  <div class="savedReciepes">
    <v-container>
      <h2 class="h2">Your saved reciepes</h2>
      <reciepesList v-if="reciepes.length" :list="reciepes" />
      <h3 v-else class="h3">No reciepes found</h3>
    </v-container>
  </div>
</template>

<script>
import reciepesList from "../reciepesList/reciepesList.vue";

export default {
  name: 'savedReciepes',
  components: {
    reciepesList
  },
  data() {
    return {
      reciepes: this.$store.getters["reciepes/getSavedReciepes"]
    }
  },
}
</script>