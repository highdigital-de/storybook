<template>
  <div class="carousel">
    <SfCarousel :settings="settings">
      <SfCarouselItem v-for="(item, index) in items" :key="index">
        <img class="image" :src="item.image" />
      </SfCarouselItem>

      <template v-slot:prev="{ go }">
        <div @click="go">
          <IconButton icon="arrow_left" dark />
        </div>
      </template>

      <template v-slot:next="{ go }">
        <div @click="go">
          <IconButton icon="arrow_right" dark />
        </div>
      </template>
    </SfCarousel>
  </div>
</template>

<script>
import SfCarousel from '@storefront-ui/vue/src/components/organisms/SfCarousel/SfCarousel.vue'
import IconButton from './../molecules/IconButton.vue';

export default {
  name: "Carousel",
  props: {
    items: Array,
    settings: {
      type: Object,
      default: {
        perView: 3
      }
    }
  },
  data() {
    return {
    }
  },
  components: {
    SfCarousel,
    IconButton
  }
}
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  height: auto;
}
</style>