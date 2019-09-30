<template>
  <div class="tileRow">
    <div v-for="(tile, index) in tiles" :key="index" class="tileContainer">
      <Tile v-bind="tile" />
    </div>
  </div>
</template>

<script>
import Tile from './../molecules/Tile.vue'

export default {
  name: "TileRow",
  components: {
    Tile
  },
  props: {
    tiles: Array
  }
}
</script>

<style lang="scss" scoped>
$margin: 10px;
.tileRow {
  display: flex;
  flex-flow: row wrap;
  margin-left: -$margin;
  margin-right: -$margin;
}
.tileContainer {
  flex: 0 1 50%;
  box-sizing: border-box;
  padding: $margin;
}
</style>