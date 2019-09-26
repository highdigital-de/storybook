<template>
  <div class="heading">
    <h2 class="title">{{ title }}</h2>
    <div class="subtitle">{{ subtitle }}</div>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: {
    title: String,
    subtitle: String
  },
  data() {
    return {
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
.heading {
  text-align: center;
}
.subtitle {
  font-size: 22px;
}
</style>