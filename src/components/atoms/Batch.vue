<template>
  <div class="batch" :style="style">
    <slot>

    </slot>
  </div>
</template>

<script>
export default {
  name: "Batch",
  props: {
    color: {
      type: String,
      default: '#ffffff'
    },
    backgroundColor: {
      type: String,
      default: '#10cfc9'
    }
  },
  components: {

  },
  computed: {
    style() {
      return {
        color: this.color,
        backgroundColor: this.backgroundColor
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.batch {
  display: inline-block;
  padding: $batch-padding;
  margin-right: $batch-margin-right;
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
  
  }
}
</style>