<template>
  <div class="icon" :style="style">
    
  </div>
</template>

<script>
import Container from './../atoms/Container.vue'

export default {
  name: "Icon",
  props: {
    icon: String
  },
  data() {
    return {
      dir: '/img/icons/ui/',
      icons: {
        'person': 'person_white.svg',
        'cart': 'cart_white.svg',
        'hamburger': 'hamburger_white.svg',
      }
    }
  },
  computed: {
    style() {
      return {
        backgroundImage: 'url(' + this.dir + this.icons[this.icon] + ')'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.icon {
  width: $icon-width;
  height: $icon-height;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
  
  }
}
</style>