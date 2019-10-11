<template>
  <div class="backgroundBanner" :style="style">
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: "backgroundBanner",
  props: {
    backgroundColor: {
      type: String,
      default: 'white'
    }
  },
  components: {

  },
  computed: {
    style() {
      return {
        backgroundColor: this.backgroundColor
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.backgroundBanner {
  width: 100%;
  -webkit-clip-path: polygon(0% calc(5vw), 100% 0%, 100% calc(100% - 5vw), 0 100%);
  clip-path: polygon(0% calc(5vw), 100% 0%, 100% calc(100% - 5vw), 0 100%);
  padding-top: 5vw;
  padding-bottom: 5vw;
  margin-top: -5vw;
  margin-bottom: -5vw;
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
  
  }
}
</style>