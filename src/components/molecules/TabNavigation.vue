<template>
  <div class="tabNavigation">
    <div v-for="(tab, index) in tabs" :key="index" class="tab center" :class="{highlight: index==active}" @click="$emit('select', index)">
      {{ index+1 }}.<br />
      {{ tab.title }}
    </div>
  </div>
</template>

<script>
import Container from './../atoms/Container.vue'

export default {
  name: "TabNavigation",
  props: {
    tabs: Array,
    active: Number
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.tabNavigation {
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
  
  }
  display: flex;
}
.tab {
  flex: 0 0 auto;
  padding: 30px 60px;
  color: grey;
  cursor: pointer;
  &.highlight {
    color: $black;
  }
}
</style>