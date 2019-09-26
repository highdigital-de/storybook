<template>
  <div class="carousel">
    <SfCarousel :settings="settings">
      <SfCarouselItem v-for="(item, index) in items" :key="index">
        <img class="image" :src="item.image" />
      </SfCarouselItem>
    </SfCarousel>
  </div>
</template>

<script>
import SfCarousel from '@storefront-ui/vue/src/components/organisms/SfCarousel/SfCarousel.vue'

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
    SfCarousel
  }
}
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  height: auto;
}
</style>