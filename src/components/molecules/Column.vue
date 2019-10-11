<template>
  <div class="column" :style="style" :class="{smallHalf: smallHalf, paddingRight: paddingRight}">
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
    smallHalf: Boolean,
    paddingRight: Boolean
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
  padding: $column-margin;
  box-sizing: border-box;
  @media only screen and (max-width: $breakpoint-mobile-landscape) {
    flex-basis: 100% !important;
    padding: 0;
  }
  &.smallHalf {
    @media only screen and (max-width: $breakpoint-mobile-landscape) {
      flex-basis: 50% !important;
    }
  }
  &.paddingRight {
    padding-right: $column-padding-right;
    @media only screen and (max-width: $breakpoint-mobile-landscape) {
      padding-right: inherit;
    }
  }
}
</style>