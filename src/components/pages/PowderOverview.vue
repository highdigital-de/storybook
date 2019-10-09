<template>
  <div class="powderOverview">
    <TopBar :marginTop="50" />
    <Hero noBorder :items="heroItems" />
    <Container>
      <KoaHeadline>kakaopulver</KoaHeadline>
      <KoaTitle>unsere kakaopulver im Überblick</KoaTitle>
      <div>Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man macht keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere?</div>
      <Whitespace />
      <div>
        <KoaFilterButton active>mit Koffein</KoaFilterButton>
        <KoaFilterButton>ohne Koffein</KoaFilterButton>
        <KoaFilterButton>würzig</KoaFilterButton>
        <KoaFilterButton>fruchtig</KoaFilterButton>
      </div>
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
import KoaFilterButton from './../atoms/KoaFilterButton.vue';
import KoaHeadline from './../atoms/KoaHeadline.vue';
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
  image: '/img/products/pur-mock-up-2@3x.png',
  title: 'koawach pur',
  subtitle: 'purer Kakaogenuss',
  price: 3.99
}
const product1Batch = {
  ...product1,
  batch: '100g Packung: -20%',
  batchMobile: '-20%'
}
const product2 = {
  image: '/img/products/klassik-mock-up-3@3x.png',
  title: 'koawach Klassik',
  subtitle: 'klassisch schokoladig',
  price: 3.99
}

export default {
  name: "powderOverview",
  props: {

  },
  components: {
    Columns,
    Column,
    TopBar,
    Hero,
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
.powderOverview {
}
</style>