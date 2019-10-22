<template>
  <div class="button3" :class="{fullWidth}">
    <div class="main" :class="[variant, {fullWidth: fullWidth}]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Button3",
  props: {
    text: String,
    variant: String,
    fullWidth: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.button3 {
  z-index: 1;
  display: inline-block;
  margin: 2.5px;
  &.fullWidth {
    width: 100%;
    max-width: 100%;
  }
}
.main {
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
  &.yellowTransparent {
    color: $yellow;
    background-color: transparent;
    border: solid 1px $yellow;
    &:hover, &:focus {
      color: $white;
      background-color: $yellow;
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
  &.fullWidth {
    width: 100%;
    max-width: 100%;
    min-width: unset;
  }
}

</style>