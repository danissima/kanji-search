<template>
  <v-app>
   <topMenu />
    <router-view />
  </v-app>
</template>

<script>
import topMenu from "./components/topMenu/topMenu.vue";

export default {
  name: 'App',

  components: {
    topMenu
  },

  data: () => ({
    //
  }),
};
</script>
