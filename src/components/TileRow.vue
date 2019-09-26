<template>
  <div class="tileRow">
    <Tile v-for="tile in tiles" :key="tile.heading" />
  </div>
</template>

<script>
export default {
  name: "TileRow",
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
.koaButton {
  z-index: 1;
}
.main {
  position: relative;
  background-color: #10cfc9;
  color: white;
  font-size: 22px;
  width: 250px;
  height: 57px;
  text-align: center;
  padding-top: 17px;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: Poets;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #ffe904;
    transform: translate3d(5px, 4px, 0);
    z-index: -1 ;
  }
  &:hover, &:focus {
    background-color: darken(#10cfc9, 10%);
  }
}

</style>