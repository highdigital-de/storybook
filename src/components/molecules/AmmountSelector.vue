<template>
  <div class="ammountSelector">
    <div class="minusContainer button" @click="$emit('decrease')" >
      <svg height="3.439" viewBox="0 0 9.559 3.439" width="9.559" xmlns="http://www.w3.org/2000/svg"><path d="m604.877 835.912h9.559v3.44h-9.559z" fill="#fff" transform="translate(-604.877 -835.912)"/></svg>
    </div>
    <div class="ammount">
      {{ ammount }}
    </div>
    <div class="plusContainer button" @click="$emit('increase')">
      <svg height="9.559" viewBox="0 0 9.559 9.559" width="9.559" xmlns="http://www.w3.org/2000/svg"><path d="m533.513 912.168v3.439h-3.08v3.039h-3.439v-3.039h-3.04v-3.439h3.04v-3.08h3.439v3.08z" fill="#fff" transform="translate(-523.954 -909.088)"/></svg>
    </div>
  </div>
</template>

<script>
import Container from './../atoms/Container.vue'

export default {
  name: "AmmountSelector",
  props: {
    ammount: Number,
    onSelect: Function
  },
  components: {

  },
  methods: {
    select() {
      this.onSelect()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.ammountSelector {
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