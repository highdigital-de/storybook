<template>
  <div class="productTile">
    <img :src="product.image" class="productImage" />
    <h3 class="title">{{ product.name }}</h3>
    <div>{{ product.subtitle }}</div>
    <h3 class="price">{{ product.price }}</h3>
    <div class="batch" v-if="product.batch">{{ product.batch }}</div>
    <div class="batchMobile" v-if="product.batchMobile">{{ product.batchMobile }}</div>
  </div>
</template>

<script>
export default {
  name: "ProductTile",
  props: {
    product: Object
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.productTile {
  text-align: center;
  position: relative;
}
.title {
  margin-bottom: 0px;
}
.productImage {
  width: 100%;
  height: auto;
}
.price {
  margin-top: 25px;
}
.batch, .batchMobile {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #10cfc9;
  color: white;
  padding: 0 10px;
}
.batch {
  display: none;
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
    display: block;
  }
}
.batchMobile {
  display: block;
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
    display: none;
  }
}
</style>