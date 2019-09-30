<template>
  <h3>
    <slot>
    </slot>
  </h3>
</template>

<script>
export default {
  name: "KoaTitle",
}
</script>

<style lang="scss" scoped>
.koaTitle {
  font-family: Poets;
  font-size: 30px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.12;
  letter-spacing: 0.75px;
  text-align: left;
  color: #000000;
}
</style>