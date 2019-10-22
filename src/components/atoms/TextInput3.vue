<template>
  <div class="textInput3">
    <input
      type="text"
      class="inputField"
      :class="{limited}"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
    <div class="label" v-if="label">{{label}}</div>
  </div>
</template>

<script>
import Container from './../atoms/Container.vue'

export default {
  name: "TextInput3",
  props: {
    label: String,
    value: String,
    limited: Boolean
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
@import "../../../hdui.scss";

.textInput3 {
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
  }
  margin-bottom: $textinput3-margin-bottom;
}
.inputField {
  height: $textinput3-height;
  padding: $textinput3-padding;
  font-size: $textinput3-font-size;
  font-family: $textinput3-font-family;
  caret-color: $textinput3-caret-color;
  background-color: $textinput3-background-color;
  box-sizing: border-box;
  width: 100%;
  border: none;
  margin-bottom: 10px;
  background-image: linear-gradient(to left, #bcbcbc 33%, rgba(255,255,255,0) 0%);
  background-position: bottom;
  background-size: 6px 2px;
  background-repeat: repeat-x;
  &.limited {
    max-width: $textinput3-limited-max-width;
  }
}
</style>