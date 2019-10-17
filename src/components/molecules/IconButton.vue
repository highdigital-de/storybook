<template>
  <div class="iconButton" @click="$emit('click')">
    <Icon :icon="icon" />
  </div>
</template>

<script>
import Icon from './../atoms/Icon.vue'

export default {
  name: "IconButton",
  props: {
    icon: String,

  },
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.iconButton {
  display: inline-block;
  width: $iconButton-width;
  height: $iconButton-height;
  padding: $iconButton-padding;
  box-sizing: border-box;
  cursor: pointer;
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
  
  }
}
</style>