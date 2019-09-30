<template>
  <div class="headingCTA">
    <h2 class="heading">{{ heading }}</h2>
    <div class="cta">{{ cta }}</div>
  </div>
</template>

<script>
export default {
  name: "Banner1",
  components: {
  },
  props: {
    heading: String,
    cta: String
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
.headingCTA {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
}
.heading {
  background-color: white;
  padding: 8px 13px;
  flex: 0 1 auto;
  margin-bottom: 4px;
  font-size: 30px;
}
.cta {
  background-color: #ffe904;
  padding: 8px 13px;
  color: #1a1a18;
  flex: 0 1 auto;
  margin-left: 17px;
  font-size: 18px;
  &:before {
    content: "> ";
  }
}
</style>