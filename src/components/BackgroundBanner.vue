<template>
  <div class="backgroundBanner" :style="style">
    <Container>
      <slot>
      </slot>
    </Container>
  </div>
</template>

<script>
import Container from './Container.vue'

export default {
  name: "BackgroundBanner",
  props: {
    image: String,
  },
  data() {
    return {
    }
  },
  components: {
    Container
  },
  computed: {
    style () {
      return {
        backgroundImage: 'url(' +  this.image + ')'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.backgroundBanner {
  width: 100%;
  max-width: 1920px;
  background-size: cover;
  padding-top: 80px;
  padding-bottom: 80px;
  box-sizing: border-box;
}
</style>