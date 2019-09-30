<template>
  <div class="columns">
    <slot>
    </slot>
  </div>
</template>

<script>

export default {
  name: "Columns",
}
</script>

<style lang="scss" scoped>
.columns {
  width: 100%;
  display: flex;
}
</style>