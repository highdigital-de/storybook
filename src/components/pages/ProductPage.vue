<template>
  <div class="productPage">
    <TopBar :marginTop="50" />
    <ProductHero />
    <ProductBody v-bind="productBody" />
    <Whitespace />
    <BackgroundBanner backgroundColor="#c5ddf3">
      <Container>
        <KoaTitle><Rating :score="5" />11 kundenbewertungen</KoaTitle>
        <h3>neueste Bewertungen</h3>
        <ReviewSection :reviews="reviews"></ReviewSection>
      </Container>
    </BackgroundBanner>
    <BackgroundBanner backgroundColor="#92c0e9">
      <Container>
        <KoaTitle center>andere leckere sorten für dich</KoaTitle>
        <ProductCarousel :products="featuredProducts" />
      </Container>
    </BackgroundBanner>
    <Footer />
  </div>
</template>

<script>
import Rating from './../atoms/Rating.vue';
import Container from './../atoms/Container.vue';
import Button2 from './../atoms/Button2.vue';
import Headline from './../atoms/Headline.vue';
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
import BackgroundBanner from './../atoms/BackgroundBanner.vue';
import ReviewSection from './../organisms/ReviewSection.vue';

export default {
  name: "ProductPage",
  props: {
    color: String
  },
  components: {
    Columns,
    Column,
    TopBar,
    ProductHero,
    Headline,
    Button2,
    KoaTitle,
    ProductList,
    Whitespace,
    TileRow,
    Container,
    Footer,
    ProductBody,
    ProductCarousel,
    BackgroundBanner,
    Rating,
    ReviewSection
  },
  data() {
    return {
      heroItems: [{ background: "#bcbcbc" }],
      productBody: {
        text: {
          headline: 'mit natürlicher vanille aus madagaskar',
          body: 'Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man macht keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere? Na gut, ich werde nie in den Bestsellerlisten stehen. Aber andere Texte schaffen das auch nicht. Und darum stört es mich nicht besonders blind zu sein. Und sollten Sie diese Zeilen noch immer lesen, so habe ich als kleiner Blindtext etwas geschafft, wovon all die richtigen und wichtigen Texte meist nur träumen.'
        },
        colors: {
          color: this.color
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
          image: "/img/products/pur-produktbild@3x.png"
        },
        {
          title: "koawach klassik",
          subtitle: "klassischer Kakaogenuss",
          price: 3.99,
          image: "/img/products/klassik-produktbild@3x.png"
        },
        {
          title: "koawach pur",
          subtitle: "purer Kakaogenuss",
          price: 3.99,
          image: "/img/products/pur-produktbild@3x.png"
        },
        {
          title: "koawach klassik",
          subtitle: "klassischer Kakaogenuss",
          price: 3.99,
          image: "/img/products/klassik-produktbild@3x.png"
        },
        {
          title: "koawach pur",
          subtitle: "purer Kakaogenuss",
          price: 3.99,
          image: "/img/products/pur-produktbild@3x.png"
        },
        {
          title: "koawach klassik",
          subtitle: "klassischer Kakaogenuss",
          price: 3.99,
          image: "/img/products/klassik-produktbild@3x.png"
        }
      ],
      reviews: [
          {
            title: 'ich liebe vanille',
            text: 'Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann.',
            name: 'Anna',
            date: '16.08.2019',
            score: 5,
          },
          {
            title: 'noch mehr vanille',
            text: 'Hallo. Ich bin ein kleiner Blindtext.',
            name: 'Anna',
            date: '15.08.2019',
            score: 4,
          },
          {
            title: 'mag kein vanille',
            text: 'Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Und zwar schon so lange ich denken kann.',
            name: 'Anna',
            date: '12.01.2019',
            score: 1,
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