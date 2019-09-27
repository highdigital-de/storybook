<template>
  <div class="container">
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: "Container",
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 1020px;
  margin: 25px auto;
  padding: 0 5px;
  box-sizing: border-box;
}
</style>