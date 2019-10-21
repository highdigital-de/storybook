<template>
  <div class="button3">
    <div class="main" :class="variant">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Button3",
  props: {
    text: String,
    variant: String
  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.button3 {
  z-index: 1;
}
.main {
  display: inline-block;
  position: relative;
  background-color: $turquoise;
  color: $white;
  font-size: 22px;
  min-width: 135px;
  height: 57px;
  text-align: center;
  padding: 20px 22px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s;
  font-family: Poets;
  &:hover, &:focus {
    color: $black;
    background-color: $yellow;
    &:after {
      background-color: $turquoise;
    }
  }
  &.yellow {
    color: $black;
    background-color: $yellow;
    &:hover, &:focus {
      color: $white;
      background-color: $turquoise;
    }
  }
  &.brown {
    color: $white;
    background-color: $brown;
    &:hover, &:focus {
      color: $black;
      background-color: $yellow;
    }
  }
}

</style>