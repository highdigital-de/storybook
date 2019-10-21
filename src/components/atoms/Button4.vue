<template>
  <div class="button4">
    <div class="button" :class="{icon}" @click="$emit('click')">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "button4",
  props: {
    icon: Boolean
  },
}
</script>

<style lang="scss" scoped>
@import "../../../hdui.scss";

.button4 {
  z-index: 1;
  display: inline-block;
  margin: $button4-margin;
}
.button {
  position: relative;
  background-color: $yellow;
  color: $black;
  font-size: 18px;
  min-width: 135px;
  height: 37px;
  text-align: center;
  padding: 6px 15px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s;
  font-family: Futura;
  font-weight: 300;
  &:hover,
  &:focus {
    background-color: $turquoise;
    color: $black;
  }
  &:active {
    color: $white;
  }
  &.icon {
    background-image: url('/img/icons/ui/black/arrow_right_small.svg');
    background-repeat: no-repeat;
    background-position: left 10px center;
    padding-left: 30px;
    &:active {
      background-image: url('/img/icons/ui/white/arrow_right_small.svg');
    }
  }
}
</style>