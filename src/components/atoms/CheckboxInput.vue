<template>
  <div class="CheckboxInput" @click="$emit('click')">
    <div class="columns is-mobile">
      <div class="column is-3 center">
        <div class="container" :class="{checked: value}">
        </div>
      </div>
      <div class="column is-9">
        <div class="labelContainer hausschrift-22pt" v-if="label">{{label}}</div>
      </div>
    </div>
  </div>

</template>

<script>
import Icon from './../atoms/Icon.vue'

export default {
  name: "CheckboxInput",
  props: {
    label: String,
    value: Boolean,
    variant: String
  },
  data() {
    return {
      selected: this.value ? this.value : ''
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
@import "../../../hdui.scss";

.CheckboxInput {
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
  }
  cursor: pointer;
}
.container {
  float: center;
  width: $checkboxInput-width;
  height: $checkboxInput-height;
  background-color: $checkboxInput-background-color;
  box-sizing: border-box;
  &.checked {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 70%;
    background-image: url('/assets/img/icons/ui/black/checked.svg');
  }
}
.labelContainer{
  display: inline-block;
}
</style>