<template>
  <div class="koaButton">
    <div class="main" :class="variant">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "KoaButton",
  props: {
    text: String,
    variant: String
  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.koaButton {
  z-index: 1;
  position: relative;
  display: inline-block;
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
  padding-top: 17px;
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
}

</style>