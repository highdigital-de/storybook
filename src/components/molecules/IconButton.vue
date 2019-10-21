<template>
  <div class="iconButton" @click="$emit('click')">
    <div v-if="batch" class="batch" :class="{dark}">
      {{ batch }}
    </div>
    <Icon :icon="icon" :dark="dark" />
  </div>
</template>

<script>
import Icon from './../atoms/Icon.vue'

export default {
  name: "IconButton",
  props: {
    icon: String,
    batch: String,
    dark: Boolean
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
  position: relative;
  width: $iconButton-width;
  height: $iconButton-height;
  padding: $iconButton-padding;
  box-sizing: border-box;
  cursor: pointer;
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
  
  }
}
.batch {
  position: absolute;
  top: -5px;
  left: ($iconButton-width - 16);
  padding: $iconButton-batch-padding;
  text-align: center;
  height: $iconButton-batch-height;
  min-width: $iconButton-batch-height;
  border-radius: $iconButton-batch-border-radius;
  background-color: $iconButton-batch-background-color;
  color: $iconButton-batch-color;
  font-family: Poets;
  &.dark {
    background-color: $iconButton-batch-dark-background-color;
  }
}
</style>