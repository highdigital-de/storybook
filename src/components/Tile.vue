<template>
  <div class="tile" :class="{ highlight }" :style="tileStyle">
    <div class="mainSlot">
      <slot>
        <HeadingCTA :heading="heading" :cta="cta" />
      </slot>
    </div>
  </div>
</template>

<script>
import HeadingCTA from './HeadingCTA.vue'

export default {
  name: "Banner1",
  components: {
    HeadingCTA
  },
  props: {
    heading: String,
    cta: String,
    image: String,
    highlight: Boolean,
    highlightColor: {
      type: String,
      default: '#10cfc9'
    }
  },
  computed: {
    tileStyle() {
      return {
        backgroundImage: 'url(' + this.image + ')',
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
  padding-top: 66%;
  overflow: hidden;
  background-size: cover;
  background-color: #e3e3e3;
  box-sizing: border-box;
}
.mainSlot {
  position: absolute;
  left: 18px;
  bottom: 20px;
}
</style>