<template>
  <div class="rating">
    <div class="starContainer" v-for="index in Math.abs(score)">
      <svg height="13.23" viewBox="0 0 13.912 13.23" width="13.912" xmlns="http://www.w3.org/2000/svg"><path d="m204.883 663.8 4.3 3.3-1.815-5.11 4.472-3.068-5.421.147-1.535-5.2-1.535 5.2-5.421-.147 4.472 3.068-1.815 5.11z" fill="#ffe904" transform="translate(-197.928 -653.874)"/></svg>
    </div><div class="starContainer" v-for="index in Math.abs(max - score)">
      <svg height="13.23" viewBox="0 0 13.912 13.23" width="13.912" xmlns="http://www.w3.org/2000/svg"><path d="m204.883 663.8 4.3 3.3-1.815-5.11 4.472-3.068-5.421.147-1.535-5.2-1.535 5.2-5.421-.147 4.472 3.068-1.815 5.11z" fill="#ffffff" transform="translate(-197.928 -653.874)"/></svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rating",
  props: {
    max: {
      type: Number,
      default: 5
    },
    score: {
      type: Number,
      default: 1
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.rating {
  display: inline-block;
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
  
  }
}
.starContainer{
  display: inline;
  margin-right: 3px;
}
</style>