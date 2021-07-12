<template>
  <div class="reciepes-list">
    <v-pagination 
      v-if="pageCount > 1"
      :length="pageCount"
      v-model="pageNumber"
      :total-visible="7"
    ></v-pagination>
    <v-row class="reciepes-list__content">
      <reciepeItem v-for="item in listForPage" :key="item.id" :info="item" />
    </v-row>
  </div>
</template>

<script>
import reciepeItem from './includes/reciepeItem/reciepeItem.vue'

export default {
  name: 'reciepesList',
  components: {
    reciepeItem
  },
  props: {
    list: Array
  },

  data() {
    return {
      pageNumber: 1,
      itemsPerPage: 8
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.$props.list.length / this.itemsPerPage)
    },
    listForPage() {
      let start = (this.pageNumber - 1) * this.itemsPerPage
      let end = start + this.itemsPerPage
      return this.list.slice(start, end)
    }
  }
}
</script>