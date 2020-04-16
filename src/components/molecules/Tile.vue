<template>
  <div class="tile" :class="{ highlight, high, wide }" :style="tileStyle" v-lazy:background-image="image">
    <div class="mainSlot">
      <slot>
        <HeadingCTA :heading="heading" :cta="cta" @click="$emit('click')" />
      </slot>
    </div>
  </div>
</template>

<script>
  import HeadingCTA from './../molecules/HeadingCTA.vue'

  export default {
    name: "Tile",
    components: {
      HeadingCTA
    },
    props: {
      heading: String,
      cta: String,
      image: String,
      highlight: Boolean,
      high: Boolean,
      wide: Boolean,
      highlightColor: {
        type: String,
        default: '#10cfc9'
      }
    },
    computed: {
      tileStyle() {
        return {
          boxShadow: this.highlight ? '0px 0px 0px 12px ' + this.highlightColor + ' inset' : ''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tile {
    position: relative;
    width: 100%;
    height: 100%;
    // padding-top: 66.7%;
    overflow: hidden;
    background-size: cover;
    background-color: #e3e3e3;
    box-sizing: border-box;
    &.high {
      padding-top: 134.4%;
    }
    &.wide {
      padding-top: 33.3%;
    }
  }
  .mainSlot {
    position: absolute;
    left: 18px;
    bottom: 20px;
  }
</style>
