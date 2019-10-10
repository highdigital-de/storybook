<template>
  <h2 class="koaHeadline" :class="{center: center}">
    <slot>
    </slot>
  </h2>
</template>

<script>
export default {
  name: "KoaHeadline",
  props: {
    center: Boolean
  }
}
</script>

<style lang="scss" scoped>
.koaHeadline {
  font-family: Poets;
  font-size: 40px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: 1px;
  text-align: left;
  &.center {
    text-align: center;
  }
}
</style>