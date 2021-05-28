<template>
  <div class="wrapper">
      <ul class="nav">
          <li class="nav-item"><router-link to="/">Главная</router-link></li>
          <li class="nav-item"><router-link to="/readings">Поиск по чтениям</router-link></li>
      </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "navigation",
};
</script>

<style lang="sass">
.wrapper
  display: flex
  align-items: center
  flex-direction: column
.nav
  margin: 30px 0
  list-style-type: none
  display: flex
  justify-content: center
  &-item
      margin-right: 20px
      &:last-child
          margin-right: 0
      &>a
          text-decoration: none
          color: black
</style>