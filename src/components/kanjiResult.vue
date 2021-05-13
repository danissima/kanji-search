<template>
  <div class="result">
    <h2 class="result-title">Results for {{ info.kanji }}</h2>
    <div class="result-readings-wp">
      <h3 class="result-subtitle">Readings</h3>
      <div class="result-readings">
        <list
          class="result-readings-item list-jp"
          :title="'Onyomi'"
          :items="info.on_readings"
        />
        <list
          class="result-readings-item list-jp"
          :title="'Kunyomi'"
          :items="info.kun_readings"
        />
      </div>
    </div>
    <div class="result-meanings-wp">
      <h3 class="result-subtitle">Meanings</h3>
      <list :items="info.meanings" />
    </div>
    <div class="result-about">
      <h3 class="result-subtitle">Facts about {{ info.kanji }}</h3>
      <p class="result-about-text">
        Let me tell you something interesting about {{ info.kanji }}!
      </p>
      <p class="result-about-text">
        First, it has {{ info.stroke_count }} stroke{{
          info.stroke_count > 1 ? "s" : ""
        }}. Second, this kanji is {{ isCommon(info.jlpt) }}.
        <span v-if="info.jlpt"
          >You're gonna face it on passing jlpt {{ info.jlpt }}, so be ready
          ;)</span
        >
      </p>
      <p class="result-about-text" v-if="info.grade">
        Also, {{ info.kanji }} is studied at {{ info.grade }} grade of japanese
        schools
      </p>
    </div>
  </div>
</template> 

<script>
import list from "./list.vue";
export default {
  name: "kanjiResult",
  props: {
    info: Object,
  },
  components: {
    list,
  },
  methods: {
    isCommon(level) {
      switch (level) {
        case 5:
          return "very common";
        case 4:
          return "common";
        case 3:
          return "not very common";
        case 2:
          return "rare";
        case 1:
          return "very rare";
        default:
          return "so rare that you dont even need to know it to pass jlpt";
      }
    },
  },
};
</script>

<style lang="sass">
.result
  text-align: center
  margin: 20px
  padding: 40px
  border-radius: 30px
  box-shadow: 3px 3px 15px #333
  max-width: 500px
  &>div
    margin-bottom: 20px
  &-readings
    width: 300px
    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-gap: 70px
    margin: 0 auto
    justify-content: space-between
    &-item
      display: flex
      flex-direction: column
      align-items: center
  &-title
    margin-bottom: 30px
  &-subtitle
    margin-bottom: 15px
  &-about
    &-text
      text-align: left
      line-height: 26px
</style>
