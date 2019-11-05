<template>
  <div class="button1" :class="{fullWidth}">
    <div class="main" :class="[variant, {fullWidth: fullWidth}]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Button1",
  props: {
    text: String,
    variant: String,
    fullWidth: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.button1 {
  z-index: 1;
  position: relative;
  display: inline-block;
  margin-bottom: $button1-margin-bottom;
  &.fullWidth {
    width: 100%;
    max-width: 100%;
  }
}
.main {
  position: relative;
  background-color: $turquoise;
  transform-style: preserve-3d;
  color: $white;
  font-size: 22px;
  width: 250px;
  height: 57px;
  text-align: center;
  padding: 17px 22px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s;
  font-family: Poets;
  transform: translate3d(0px, 0px, 0px);
  z-index: 1;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: $yellow;
    transform: translate3d(4px, 4px, -1px);
    transition: all 0.3s;
    z-index: -1 ;
  }
  &:hover, &:focus {
    color: $black;
    background-color: $yellow;
    &:after {
      background-color: $turquoise;
    }
  }
  &:active {
    transform: translate3d(4px, 4px, 0);
    &:after {
      transform: translate3d(0px, 0px, -1px);
    }
  }
  &.yellow {
    color: $black;
    background-color: $yellow;
    &:after {
      background-color: $turquoise;
    }
    &:hover, &:focus {
      color: $white;
      background-color: $turquoise;
      &:after {
        background-color: $yellow;
      }
    }
  }
  &.brown {
    color: $white;
    background-color: $brown;
    &:after {
      background-color: $yellow;
    }
    &:hover, &:focus {
      color: $black;
      background-color: $yellow;
      &:after {
        background-color: $brown;
      }
    }
  }
  &.fullWidth {
    width: 100%;
    max-width: 100%;
    min-width: unset;
  }
}

</style>