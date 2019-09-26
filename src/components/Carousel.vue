<template>
  <div class="carousel">
    <SfCarousel :settings="options">
      <SfCarouselItem>
        <img class="image" src="/img/carousel1.png" />
      </SfCarouselItem>
      <SfCarouselItem>
        <img class="image" src="/img/carousel2.png" />
      </SfCarouselItem>
      <SfCarouselItem>
        <img class="image" src="/img/carousel3.png" />
      </SfCarouselItem>
      <SfCarouselItem>
        <img class="image" src="/img/carousel1.png" />
      </SfCarouselItem>
      <SfCarouselItem>
        <img class="image" src="/img/carousel2.png" />
      </SfCarouselItem>
    </SfCarousel>
  </div>
</template>

<script>
import SfCarousel from '@storefront-ui/vue/src/components/organisms/SfCarousel/SfCarousel.vue'

export default {
  name: "Carousel",
  data() {
    return {
      options: {
        perView: 3,
      }
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