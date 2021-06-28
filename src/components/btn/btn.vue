<template>
  <button class="btn">{{ btnText ? btnText : "Отправить!"}}</button>
</template>

<script>
export default {
  name: "btn",
  props: {
    btnText: String
  },
}
</script>
