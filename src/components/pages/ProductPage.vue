<template>
  <div class="productPage">
    <TopBar :marginTop="50" />
    <ProductHero />
    <ProductBody v-bind="productBody" />
    <Whitespace />
    <Container>
      <KoaTitle center>andere leckere sorten für dich</KoaTitle>
      <ProductCarousel :products="featuredProducts" />
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
import ProductBody from './../organisms/ProductBody.vue';
import ProductCarousel from './../organisms/ProductCarousel.vue';

export default {
  name: "ProductPage",
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
    Footer,
    ProductBody,
    ProductCarousel
  },
  data() {
    return {
      heroItems: [{ background: "#eceff1" }],
      productBody: {
        text: {
          headline: 'mit natürlicher vanille aus madagaskar',
          body: 'Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man macht keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere? Na gut, ich werde nie in den Bestsellerlisten stehen. Aber andere Texte schaffen das auch nicht. Und darum stört es mich nicht besonders blind zu sein. Und sollten Sie diese Zeilen noch immer lesen, so habe ich als kleiner Blindtext etwas geschafft, wovon all die richtigen und wichtigen Texte meist nur träumen.'
        },
        colors: {
          color: '#409ccf'
        },
        nutritionInformation: {
          calories: "1513 kkJ / 360 kcal",
          fat: "5,9g",
          saturated: "3,5g",
          carbohydrates: "53g",
          sugars: "44g",
          protein: "14g",
          salt: "<0,03g"
        }
      },
      featuredProducts: [
        {
          title: "koawach pur",
          subtitle: "purer Kakaogenuss",
          price: 3.99,
          image: "/img/products/pur-mock-up-2@3x.png"
        },
        {
          title: "koawach klassik",
          subtitle: "klassischer Kakaogenuss",
          price: 3.99,
          image: "/img/products/klassik-mock-up-3@3x.png"
        },
        {
          title: "koawach pur",
          subtitle: "purer Kakaogenuss",
          price: 3.99,
          image: "/img/products/pur-mock-up-2@3x.png"
        },
        {
          title: "koawach klassik",
          subtitle: "klassischer Kakaogenuss",
          price: 3.99,
          image: "/img/products/klassik-mock-up-3@3x.png"
        },
        {
          title: "koawach pur",
          subtitle: "purer Kakaogenuss",
          price: 3.99,
          image: "/img/products/pur-mock-up-2@3x.png"
        },
        {
          title: "koawach klassik",
          subtitle: "klassischer Kakaogenuss",
          price: 3.99,
          image: "/img/products/klassik-mock-up-3@3x.png"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.productPage {
}
</style>