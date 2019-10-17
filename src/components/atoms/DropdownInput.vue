<template>
  <div class="dropdownInput">
    <div class="label .hausschrift-22pt" v-if="label">{{label}}</div>
    <select
      size="1"
      class="selectField"
      :value="value" @input="$emit('input', $event.target.value)"
    >
      <option disabled hidden value="">{{ placeholder }}</option>
      <option class="optionField"
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >{{ option.label }}</option>
    </select>
  </div>
</template>

<script>
import Container from './../atoms/Container.vue'

export default {
  name: "DropdownInput",
  props: {
    label: String,
    value: String,
    options: Array,
    placeholder: String
  },
  data() {
    return {
      selected: this.value ? this.value : ''
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../../hdui.scss";

.dropdownInput {
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
  }
}
.selectField {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  height: $dropdownInput-height;
  padding: $dropdownInput-padding;
  font-size: $dropdownInput-font-size;
  border-radius: $dropdownInput-border-radius;
  background-color: $dropdownInput-background-color;
  color: $dropdownInput-color;
  box-sizing: border-box;
  width: 100%;
  border: none;
  background-image: url('/img/icons/ui/arrow_down.svg');
  background-repeat: no-repeat;
  background-position: right 10px center;
}
.selectField::-ms-expand {
  display: none;
}
.optionField {
  height: 100px;
}
</style>