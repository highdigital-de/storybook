<template>
  <div class="columns">
    <slot>
    </slot>
  </div>
</template>

<script>

export default {
  name: "Columns",
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.columns {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  margin-left: -$column-margin;
  margin-right: -$column-margin;
  @media only screen and (max-width: $breakpoint-mobile-landscape) {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>