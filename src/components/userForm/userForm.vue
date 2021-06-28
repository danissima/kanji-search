<template>
  <form @submit.prevent="submitForm" class="form">
    <input v-for="(item, i) in formComponents.inputs" :key="i" 
      :type="item.type" 
      :placeholder="item.placeholder" 
      :name="item.name"
      :required="item.required ? true : false">
    <btn :btnText="formComponents.submitBtnText" />
    <p v-if="formComponents.errorMessage" class="error-message">{{ formComponents.errorMessage }}</p>
  </form>
</template>

<script>
import btn from "../btn/btn"
export default {
  name: "userForm",
  components: {
    btn,
  },
  props: {
    formComponents: Object,
    submitForm: Function,
  }
}
</script>