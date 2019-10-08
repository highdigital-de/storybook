<template>
  <div class="koaFilterButton">
    <div class="main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "KoaFilterButton",
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
.koaFilterButton {
  z-index: 1;
}
.main {
  position: relative;
  background-color: transparent;
  color: #99572e;
  border-color: #99572e;
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
}

</style>