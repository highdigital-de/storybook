<template>
  <div class="backgroundBanner" :class="{straightTop, straightBottom, straight}" :style="style">
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
    },
    backgroundImage: String,
    straightTop: Boolean,
    straightBottom: Boolean,
    straight: Boolean
  },
  components: {

  },
  computed: {
    style() {
      return {
        backgroundColor: this.backgroundColor,
        backgroundImage: 'URL(' + this.backgroundImage + ')'
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
  margin-bottom: -5vw;
  background-size: cover;
  &.straightBottom {
    -webkit-clip-path: polygon(0% calc(5vw), 100% 0%, 100% 100%, 0 100%);
    clip-path: polygon(0% calc(5vw), 100% 0%, 100% 100%, 0 100%);
    margin-bottom: 0;
  }
  &.straightTop {
    -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% calc(100% - 5vw), 0 100%);
    clip-path: polygon(0% 0%, 100% 0%, 100% calc(100% - 5vw), 0 100%);
    margin-top: 0;
  }
  &.straight {
    -webkit-clip-path: none;
    clip-path: none;
    margin-top: 0;
    margin-bottom: 0;
  }
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
  
  }
}
</style>