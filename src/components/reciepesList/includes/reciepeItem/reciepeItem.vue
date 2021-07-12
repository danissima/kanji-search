<template>
  <v-col class="reciepe-item flex-column align-center col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="reciepe-item__content">
      <div v-if="info.image" class="reciepe-item__image">
        <img :src="info.image" :alt="info.title">
      </div>
      <h3 class="h3" @click="redirectToReciepe(info.id)">{{ info.title }}</h3>
      <v-divider></v-divider>
      <div class="reciepe-item__controls">
        <addReciepeBtn :info="info" />
      </div>
    </div>
  </v-col>
</template>

<script>
import addReciepeBtn from '../../../addReciepeBtn/addReciepeBtn.vue'

export default {
  name: 'reciepeItem',
  props: {
    info: Object
  },
  components: {
    addReciepeBtn,
  },
  methods: {
    redirectToReciepe(reciepeId) {
      this.$router.push({path: `/reciepe/${reciepeId}`})
    }
  },
}
</script>