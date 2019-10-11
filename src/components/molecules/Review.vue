<template>
  <div class="review">
    <h3 class="title">{{ review.title }}</h3>
    <div class="text">{{ review.text }}</div>
    <div class="ratingRow">
      <Rating :score="review.score" />
      {{ review.name }} am {{ review.date }}
    </div>
  </div>
</template>

<script>
import Rating from './../atoms/Rating.vue'

export default {
  name: "Review",
  props: {
    review: {
      type: Object,
      default: {}
    }
  },
  components: {
    Rating
  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.review {
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
  
  }
}
.ratingRow {
  margin-top: 25px;
}
</style>