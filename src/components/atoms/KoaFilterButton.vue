<template>
  <div class="koaFilterButton">
    <div class="button" :class="{activ: activ}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "KoaFilterButton",
  props: {
    text: String,
    activ: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

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
  width: 124px;
  height: 37px;
  text-align: center;
  padding: 6px 15px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s;
  font-family: Futura;
  font-weight: 300;
  &:hover, &:focus {
    background-color: #99572e;
    color: white;
  }
  &.activ {
    background-color: #99572e;
    color: white;
    &:hover, &:focus {
      background-color: white;
      color: #99572e;
    }
  }
}

</style>