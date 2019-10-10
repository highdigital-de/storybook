<template>
  <div class="carousel">
    <SfCarousel :settings="settings">
      <SfCarouselItem v-for="(product, index) in products" :key="index">
        <ProductTile :product="product" />
      </SfCarouselItem>
    </SfCarousel>
  </div>
</template>

<script>
import SfCarousel from '@storefront-ui/vue/src/components/organisms/SfCarousel/SfCarousel.vue'
import ProductTile from './../molecules/ProductTile.vue';

export default {
  name: "Carousel",
  props: {
    products: Array,
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
    ProductTile
  }
}
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  height: auto;
}
</style>