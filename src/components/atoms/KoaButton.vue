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
}
.main {
  position: relative;
  background-color: $turquoise;
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
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: $yellow;
    transform: translate3d(5px, 4px, 0);
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
      color: $white;
      background-color: $yellow;
      &:after {
        background-color: $brown;
      }
    }
  }
}

</style>