<template>
  <h2 class="koaHeadline">
    <slot>
    </slot>
  </h2>
</template>

<script>
export default {
  name: "KoaHeadline",
}
</script>

<style lang="scss" scoped>
.koaHeadline {
  font-family: Poets;
  font-size: 40px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: 1px;
  text-align: left;
}
</style>