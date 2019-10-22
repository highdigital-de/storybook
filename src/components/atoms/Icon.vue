<template>
  <div class="icon" :style="style">
    
  </div>
</template>

<script>
import Container from './../atoms/Container.vue'

export default {
  name: "Icon",
  props: {
    icon: String,
    dark: Boolean
  },
  data() {
    return {
      icons: {
        'person': 'person.svg',
        'cart': 'cart.svg',
        'edit': 'edit.svg',
        'checked': 'checked.svg',
        'hamburger': 'hamburger.svg',
        'arrow_down': 'arrow_down.svg',
        'arrow_left': 'arrow_left.svg',
        'arrow_right': 'arrow_right.svg',
        'arrow_right_small': 'arrow_right_small.svg',
        'x': 'x.svg',
      }
    }
  },
  computed: {
    dir() {
      return this.dark ? '/img/icons/ui/black/' : '/img/icons/ui/white/'
    },
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
  display: inline-block;
  width: $icon-width;
  height: $icon-height;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
  
  }
}
</style>