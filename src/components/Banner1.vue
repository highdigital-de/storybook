<template>
  <div class="banner1">
    <div class="left">
      <h2>Unsere Mission</h2>
      <div class="text">
        Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein:
      </div>
      <KoaButton>
        mehr erfahren
      </KoaButton>
    </div>
    <div class="right">
      <img src="img/banner1.jpg">
    </div>
  </div>
</template>

<script>
import KoaButton from './KoaButton.vue'

export default {
  name: "Banner1",
  data() {
    return {
    }
  },
  components: {
    KoaButton
  }
}
</script>

<style lang="scss" scoped>
.banner1 {
  display: flex;
}
.left {
  flex: 1 1 50%;
  padding: 80px;
}
.text {
  margin-bottom: 30px;
}
.right {
  flex: 1 1 50%;
}
</style>