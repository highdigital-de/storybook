<template>
  <div class="drinkPage">
    <TopBar :marginTop="50" />
    <Hero noBorder :items="heroItems" />
    <Container>
      <Headline>kakaopulver</Headline>
      <KoaTitle>unsere kakaopulver im Überblick</KoaTitle>
      <div>Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man macht keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere?</div>
      <Whitespace />
      <ProductList :products="this.products" />
      <Columns>
        <Column
          flex="3"
        >
        Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man macht keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere?</Column>
        <Column>
          <img src="/img/screens/powder/logos.png" width="200" style="float: right;"/>
        </Column>
      </Columns>
      <Whitespace />
      <TileRow :tiles="tiles" />
    </Container>
    <Footer />
  </div>
</template>

<script>
import Container from './../atoms/Container.vue';
import Button2 from './../atoms/Button2.vue';
import Headline from './../atoms/Headline.vue';
import KoaTitle from './../atoms/KoaTitle.vue';
import Whitespace from './../atoms/Whitespace.vue';
import Columns from './../molecules/Columns.vue';
import Column from './../molecules/Column.vue';
import TopBar from './../molecules/TopBar.vue';
import Hero from './../molecules/Hero.vue';
import TileRow from './../molecules/TileRow.vue';
import ProductList from './../organisms/ProductList.vue';
import Footer from './../organisms/Footer.vue';

const product1 = {
  image: '/img/placeholder_gray.png',
  title: 'tasse',
  subtitle: 'purer Kakaogenuss',
  batch: 'Angebot: -10%',
  price: 3.99
}
const product1Batch = {
  ...product1,
  batch: 'Sonderangebot: -30%',
  batchMobile: '-20%'
}
const product2 = {
  image: '/img/placeholder_gray.png',
  title: 'angebot',
  subtitle: 'klassisch schokoladig',
  batch: 'Angebot: -20%',
  price: 3.99
}

export default {
  name: "drinkPage",
  props: {

  },
  components: {
    Columns,
    Column,
    TopBar,
    Hero,
    Headline,
    Button2,
    KoaTitle,
    ProductList,
    Whitespace,
    TileRow,
    Container,
    Footer
  },
  data() {
    return {
      heroItems: [{ background: "#bcbcbc" }],
      products: [
        product1,
        product2,
        product1Batch,
        product2,
        product1,
        product2,
        product1,
        product2,
        product1,
        product2
      ],
      tiles: [
        {
          heading: "zutaten",
          cta: "jetzt entdecken",
          image: "/img/screens/powder/1.png",
        },
        {
          heading: "kakaosets",
          cta: "jetzt ansehen",
          image: "",
        },
        {
          heading: "drinks",
          cta: "jetzt entdecken",
          image: "",
        },
        {
          heading: "abo",
          cta: "jetzt ansehen",
          image: "",
        },
        {
          heading: "fairtrade",
          cta: "jetzt entdecken",
          image: "/img/screens/powder/2.png",
        },
        {
          heading: "rezepte",
          cta: "jetzt ansehen",
          image: "/img/screens/powder/3.png",
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.drinkPage {
}
</style>