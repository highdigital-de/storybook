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
@import '../../../hdui.scss';

.tileRow {
  display: flex;
  flex-flow: row wrap;
  margin-left: -$tilerow-margin;
  margin-right: -$tilerow-margin;
}
.tileContainer {
  flex: 0 1 100%;
  box-sizing: border-box;
  padding: $tilerow-margin;
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
    flex: 0 1 50%;
  }
}
</style>