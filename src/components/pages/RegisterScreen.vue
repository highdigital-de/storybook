<template>
  <div class="registerScreen">
    <TopBar :marginTop="50" />
    <Hero noBorder :items="heroItems" />

    <Container>
      <div class="columns">
        <div class="column">
          <KoaTitle>ich bin bereits kunde</KoaTitle>
          <TextInput2 limited label="Deine E-mail Adresse" />
          <TextInput2 limited label="Dein Passwort" />
          <div class="right" style="max-width: 335px; margin-bottom: 30px;">
            <a href="#">Passwort vergessen?</a>
          </div>
          <Button1>anmelden</Button1>
        </div>
        <div class="column">
          <KoaTitle>ich bin neukunde</KoaTitle>
          <Button1>kundenkonto anlegen</Button1>
          <Button1>als gast bestellen</Button1>
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
import Headline from './../atoms/Headline.vue';
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
    Headline,
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

.registerScreen {
}
.productImage {
  width: 100%;
}
.nameColumn {
  display: flex;
  flex-flow: row wrap;
  height: 100%;
}
.title {
  flex: 0 1 100%;
}
.subtitle {
  flex: 0 1 100%;
}
.ammountRow {
  flex: 0 1 100%;
  align-self: flex-end;
}
.priceColumn {
  height: 100%;
  display: flex;
}
.price {
  flex: 0 1 100%;
  align-self: flex-end;
  text-align: right;
}
.buttonField {
  text-align: right;
}
.noMarginBottom {
  margin-bottom: 0 !important;
}
.couponButtonContainer {
  @media only screen and (max-width: $breakpoint-mobile-landscape) {
    text-align: right;
  }
}
</style>