<template>
  <div class="powderOverview">
    <TopBar :marginTop="50" />
    <Hero noBorder :items="heroItems" />
    <Container>
      <Headline>kakaopulver</Headline>
      <Title>unsere kakaopulver im Überblick</Title>
      <div>Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man macht keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere?</div>
      <Whitespace />
      <div>
        <Button2 active>mit Koffein</Button2>
        <Button2>ohne Koffein</Button2>
        <Button2>würzig</Button2>
        <Button2>fruchtig</Button2>
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
import Button2 from './../atoms/Button2.vue';
import Headline from './../atoms/Headline.vue';
import Title from './../atoms/Title.vue';
import Whitespace from './../atoms/Whitespace.vue';
import Columns from './../molecules/Columns.vue';
import Column from './../molecules/Column.vue';
import TopBar from './../molecules/TopBar.vue';
import Hero from './../molecules/Hero.vue';
import TileRow from './../molecules/TileRow.vue';
import ProductList from './../organisms/ProductList.vue';
import Footer from './../organisms/Footer.vue';

const product1 = {
  image: '/img/products/pur-produktbild@3x.png',
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
  image: '/img/products/klassik-produktbild@3x.png',
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
    Headline,
    Button2,
    Title,
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
.powderOverview {
}
</style>