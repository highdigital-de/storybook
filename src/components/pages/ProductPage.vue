<template>
  <div class="powderOverview">
    <TopBar :marginTop="50" />
    <ProductHero />
    <Container>
      
    </Container>
    <Footer />
  </div>
</template>

<script>
import Container from './../atoms/Container.vue';
import KoaFilterButton from './../atoms/KoaFilterButton.vue';
import KoaHeadline from './../atoms/KoaHeadline.vue';
import KoaTitle from './../atoms/KoaTitle.vue';
import Whitespace from './../atoms/Whitespace.vue';
import Columns from './../molecules/Columns.vue';
import Column from './../molecules/Column.vue';
import TopBar from './../molecules/TopBar.vue';
import ProductHero from './../organisms/ProductHero.vue';
import TileRow from './../molecules/TileRow.vue';
import ProductList from './../organisms/ProductList.vue';
import Footer from './../organisms/Footer.vue';


export default {
  name: "powderOverview",
  props: {

  },
  components: {
    Columns,
    Column,
    TopBar,
    ProductHero,
    KoaHeadline,
    KoaFilterButton,
    KoaTitle,
    ProductList,
    Whitespace,
    TileRow,
    Container,
    Footer
  },
  data() {
    return {
      heroItems: [{ background: "#eceff1" }],
    }
  }
}
</script>

<style lang="scss" scoped>
.powderOverview {
}
</style>