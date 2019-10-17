<template>
  <div class="textareaInput">
    <div class="label .hausschrift-22pt" v-if="label">{{label}}</div>
    <textarea
      type="text"
      class="inputField"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
import Container from './../atoms/Container.vue'

export default {
  name: "TextareaInput",
  props: {
    label: String,
    value: String
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
@import "../../../hdui.scss";

.textareaInput {
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
  }
}
.inputField {
  height: $textareainput-height;
  padding: $textareainput-padding;
  font-size: $textareainput-font-size;
  line-height: $textareainput-line-height;
  box-sizing: border-box;
  width: 100%;
  border: none;
}
</style>