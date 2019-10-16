<template>
  <div class="ratingLink">
    <Rating :score="score" :max="max" /> <span class="text">{{ count }} {{ text }}</span>
  </div>
</template>

<script>
import Rating from './../atoms/Rating.vue'

export default {
  name: "RatingLink",
  props: {
    max: {
      type: Number,
      default: 5
    },
    score: {
      type: Number,
      default: 5
    },
    count: {
      type: Number,
      default: 0
    }
  },
  components: {
    Rating
  },
  computed: {
    text() {
      if (this.count == 1) {
        return "Kundenbewertung"
      }
      return "Kundenbewertungen"
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.text {
  text-decoration: underline;
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
  
  }
}
</style>