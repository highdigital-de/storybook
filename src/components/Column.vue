<template>
  <div class="column" :style="style">
    <slot>
    </slot>
  </div>
</template>

<script>

export default {
  name: "Column",
  props: {
    flex: {
      type: Number,
      default: 1,
    }
  },
  computed: {
    style() {
      return {
        flex: this.flex
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.column {
  padding-right: 10px;
}
</style>