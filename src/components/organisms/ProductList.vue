<template>
  <div class="productList">
    <div v-for="(product, index) in products" :key="index" class="productCointainer">
      <ProductTile :product="product" />
    </div>
  </div>
</template>

<script>
import ProductTile from './../molecules/ProductTile.vue';

export default {
  name: "ProductList",
  props: {
    products: Array
  },
  components: {
    ProductTile
  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

$margin: 10px;
.productList {
  display: flex;
  flex-flow: row wrap;
  margin-left: -$margin;
  margin-right: -$margin;
}
.productCointainer {
  flex: 0 1 50%;
  box-sizing: border-box;
  padding: $margin;
  margin-bottom: 30px;
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
    flex: 0 1 50%;
  }
  @media only screen and (min-width: $breakpoint-tablet-landscape) {
    flex: 0 1 25%;
  }
}
</style>