<template>
  <div class="productTile">
    <img :src="product.image" class="productImage" />
    <h3>{{ product.title }}</h3>
    <div>{{ product.subtitle }}</div>
    <h3 class="price">{{ product.price }}</h3>
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
.productTile {
  text-align: center;
}
.price {
  margin-top: 25px;
}
</style>