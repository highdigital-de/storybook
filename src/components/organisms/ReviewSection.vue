<template>
  <div class="reviewSection">
    <Columns>
      <Column v-for="(review, index) in reviews" :key="index" paddingRight>
        <Review :review="review" />
      </Column>
    </Columns>
  </div>
</template>

<script>
import Column from './../molecules/Column.vue'
import Columns from './../molecules/Columns.vue'
import Review from './../molecules/Review.vue'

export default {
  name: "ReviewSection",
  props: {
    reviews: Array
  },
  components: {
    Column,
    Columns,
    Review
  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.reviewSection {
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
  
  }
}
</style>