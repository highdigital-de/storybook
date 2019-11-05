<template>
  <div class="registerScreen">
    <TopBar :marginTop="50" />
    <Hero noBorder :items="heroItems" />

    <Container>
      <KoaTitle center>hi maxi!</KoaTitle>
      <Whitespace />
      <div class="columns is-multiline is-gapless center is-mobile">
        <div class="column is-one-third-tablet is-half-mobile">
          <img class="image" src="/img/account/account-6.svg" />
          <div class="text hausschrift-22pt">persönliche daten</div>
        </div>
        <div class="column is-one-third-tablet is-half-mobile">
          <img class="image" src="/img/account/account-2.svg" />
          <div class="text hausschrift-22pt">meine adressen</div>
        </div>
        <div class="column is-one-third-tablet is-half-mobile">
          <img class="image" src="/img/account/account-3.svg" />
          <div class="text hausschrift-22pt">meine bestellungen</div>
        </div>
        <div class="column is-one-third-tablet is-half-mobile">
          <img class="image" src="/img/account/account-1.svg" />
          <div class="text hausschrift-22pt">mein abonemment</div>
        </div>
        <div class="column is-one-third-tablet is-half-mobile">
          <img class="image" src="/img/account/account-4.svg" />
          <div class="text hausschrift-22pt">freunde werben freunde</div>
        </div>
        <div class="column is-one-third-tablet is-half-mobile">
          <img class="image" src="/img/account/account-5.svg" />
          <div class="text hausschrift-22pt">newsletter-verwaltung</div>
        </div>
      </div>
    </Container>
    <Footer />
  </div>
</template>

<script>
import Container from './../atoms/Container.vue';
import BackgroundBanner from './../atoms/BackgroundBanner.vue';
import Button4 from './../atoms/Button4.vue';
import Button1 from './../atoms/Button1.vue';
import Button3 from './../atoms/Button3.vue';
import KoaHeadline from './../atoms/KoaHeadline.vue';
import DropdownInput from './../atoms/DropdownInput.vue';
import KoaTitle from './../atoms/KoaTitle.vue';
import Whitespace from './../atoms/Whitespace.vue';
import Icon from './../atoms/Icon.vue';
import Columns from './../molecules/Columns.vue';
import Column from './../molecules/Column.vue';
import TopBar from './../molecules/TopBar.vue';
import Hero from './../molecules/Hero.vue';
import TileRow from './../molecules/TileRow.vue';
import ProductCarousel from './../organisms/ProductCarousel.vue';
import Footer from './../organisms/Footer.vue';
import AmmountSelector from './../molecules/AmmountSelector.vue';
import TextInput2 from './../atoms/TextInput2.vue';

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
  name: "RegisterScreen",
  props: {
    isSubscription: Boolean,
    isEmpty: Boolean
  },
  components: {
    Columns,
    Column,
    TopBar,
    Hero,
    KoaHeadline,
    Button4,
    Button1,
    KoaTitle,
    ProductCarousel,
    Whitespace,
    TileRow,
    Container,
    Footer,
    Icon,
    AmmountSelector,
    TextInput2,
    Button3,
    DropdownInput,
    BackgroundBanner
  },
  data() {
    return {
      heroItems: [{ background: "#bcbcbc" }],
      cart: {
        products: [
          product1,
          product2,
        ],
      },
      deliveryOptions: [
        {label: 'Monatlich', value: 'monthly'},
        {label: 'Wöchentlich', value: 'weekly'}
      ],
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
        ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.image {
  max-width: 100%;
  height: 120px;
  margin-bottom: 20px;
}
.text {
  margin-bottom: 90px;
}
</style>