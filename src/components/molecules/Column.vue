<template>
  <div class="column" :style="style" :class="{smallHalf: smallHalf}">
    <slot>
    </slot>
  </div>
</template>

<script>

export default {
  name: "Column",
  props: {
    flex: {
      type: Number,
      default: 1,
    },
    smallHalf: Boolean
  },
  computed: {
    style() {
      return {
        flex: this.flex
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.column {
  padding-right: 10px;
  box-sizing: border-box;
  @media only screen and (max-width: $breakpoint-mobile-landscape) {
    flex-basis: 100% !important;
  }
  &.smallHalf {
    @media only screen and (max-width: $breakpoint-mobile-landscape) {
      flex-basis: 50% !important;
    }
  }
}
</style>