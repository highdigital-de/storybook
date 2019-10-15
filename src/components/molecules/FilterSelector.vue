<template>
  <div class="filterSelector">
    <KoaFilterButton v-for="(option, index) in options" :key="index" @click="$emit('select', option.value)" :color="color" :backgroundColor="backgroundColor" :active="option.value == selected">
      {{ option.label }}
    </KoaFilterButton>
  </div>
</template>

<script>
import Container from './../atoms/Container.vue'
import KoaFilterButton from './../atoms/KoaFilterButton.vue'

export default {
  name: "FilterSelector",
  props: {
    options: Array,
    selected: Number,
    onClick: Function,
    color: {
      type: String,
      default: 'white'
    },
    backgroundColor: {
      type: String,
      default: '#99572e'
    }
  },
  components: {
    Container,
    KoaFilterButton
  },
  methods: {
    select() {
      this.onClick()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.filterSelector {
  display: flex;
  color: white;
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
  
  }
}
.button {
  padding: $ammount-selector-button-padding;
  cursor: pointer;
}
.minusContainer {
  padding-left: 0;
}
.plusContainer {
  padding-right: 0;
}
.ammount {
  margin: $ammount-selector-button-padding;
}
</style>