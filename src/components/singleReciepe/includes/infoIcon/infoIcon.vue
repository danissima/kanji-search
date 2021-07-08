<template>
  <p class="info-icon">
    <v-icon
      large
      :color="color"
    >
      mdi-{{ icon }}
    </v-icon>
    <b>{{ iconTitle }}</b>
  </p>
</template>

<script>
export default {
  name: 'infoIcon',
  props: {
    icon: String,
    color: String,
    iconTitle: String
  }
}
</script>

