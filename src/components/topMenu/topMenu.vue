<template>
  <v-container class="top-menu">
    <v-row class="top-menu__nav justify-center align-center">
      <router-link class="top-menu__link" to="/">Home</router-link>
      <router-link class="top-menu__link" to="/search">Find Reciepe</router-link>
      <router-link class="top-menu__link" to="/saved">Saved Reciepes</router-link>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "navigation",
  
}
</script>