<template>
  <div class="textInput2">
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
  name: "TextInput2",
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

.textInput2 {
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
  }
  margin-bottom: $textinput2-margin-bottom;
}
.inputField {
  height: $textinput2-height;
  padding: $textinput2-padding;
  font-size: $textinput2-font-size;
  font-family: $textinput2-font-family;
  caret-color: $textinput2-caret-color;
  background-color: $textinput2-background-color;
  box-sizing: border-box;
  width: 100%;
  border: none;
  margin-bottom: 10px;
  &.limited {
    max-width: $textinput2-limited-max-width;
  }
}
</style>