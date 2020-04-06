<template>
  <div class="infoButton">
    <div class="info" v-if="visible">
      <h2 v-if="title">{{ title }}</h2>
      <div v-if="text" class="text">{{ text }}</div>
    </div>
    <div class="buttonContainer" v-if="buttonText">
      <a :href="link" target="_new">
        <Button1 >{{ buttonText }}</Button1>
      </a>
    </div>
  </div>
</template>

<script>
import Button1 from './../atoms/Button1.vue'

export default {
  name: "InfoButton",
  components: {
    Button1
  },
  props: {
    title: String,
    text: String,
    buttonText: String,
    link: String
  },
  data() {
    return {
    }
  },
  computed: {
    visible() {
      return !!this.title || !!this.text || !!this.buttonText;
    }
  }
}
</script>

<style lang="scss" scoped>
.infoButton {
  position: relative;
  flex-flow: column nowrap;
  align-items: flex-start;
  max-width: 520px;
  position: relative;
}
.info {
  position: relative;
  background-color: white;
  padding: 10px 25px;
  padding-bottom: 25px;
  h2 {
    margin: 0;
  }
}
.buttonContainer {
  position: absolute;
  right: -25px;
  bottom: -80px;
  z-index: 1;
}
</style>