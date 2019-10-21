<template>
  <div class="koaFilterButton">
    <div class="button" :style="style" :class="{active: active, white: white}" @click="$emit('click')">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "KoaFilterButton",
  props: {
    text: String,
    color: {
      type: String,
      default: 'white'
    },
    backgroundColor: {
      type: String,
      default: '#99572e'
    },
    active: Boolean
  },
  computed: {
    style() {
      return {
        color: this.active ? this.backgroundColor : this.color,
        borderColor: this.active ? this.backgroundColor : this.color,
        backgroundColor: this.active ? this.color : this.backgroundColor
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../hdui.scss";

.koaFilterButton {
  z-index: 1;
  display: inline-block;
  margin-right: $koafilterbutton-margin-right;
  margin-bottom: $koafilterbutton-margin-bottom;
}
.button {
  position: relative;
  background-color: transparent;
  color: #99572e;
  border: solid 1px #99572e;
  font-size: 15px;
  min-width: 124px;
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
    background-color: #99572e;
    color: white;
  }
  &.active {
    background-color: #99572e;
    color: white;
    &:hover,
    &:focus {
      background-color: white;
      color: #99572e;
    }
  }
}
</style>