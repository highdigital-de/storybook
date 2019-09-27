<template>
  <div class="infoButton">
    <div class="info">
      <h2>{{ title }}</h2>
      <div class="text">{{ text }}</div>
    </div>
    <div class="button">
      <KoaButton >{{ buttonText }}</KoaButton>
    </div>
  </div>
</template>

<script>
import KoaButton from './KoaButton.vue'

export default {
  name: "InfoButton",
  components: {
    KoaButton
  },
  props: {
    title: String,
    text: String,
    buttonText: String
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
.infoButton {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  max-width: 520px;
  position: relative;
}
.info {
  background-color: white;
  padding: 10px 25px;
  padding-bottom: 25px;
  h2 {
    margin: 0;
  }
}
.button {
  position: absolute;
  right: -25px;
  bottom: -44px;
  z-index: 1;
}
</style>