<template>
  <div class="textInput">
    <div class="label .hausschrift-22pt" v-if="label">{{label}}</div>
    <input type="text" class="inputField" />
  </div>
</template>

<script>
import Container from './../atoms/Container.vue'

export default {
  name: "TextInput",
  props: {
    label: String
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.textInput {
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
  
  }
}
.inputField {
  height: $textinput-height;
  padding: $textinput-padding;
  box-sizing: border-box;
  width: 100%;
  border: none;
}
</style>