<template>
  <div class="CheckoutScreen_Confirmation">
    <TopBar :marginTop="50" />
    <Hero noBorder :items="heroItems" />

    <Container>
      <div class="columns is-multiline is-mobile nav">
        <div class="column is-3 center">
          1.
          <br />Adresse
        </div>
        <div class="column is-3 center">
          2.
          <br />Lieferung
        </div>
        <div class="column is-3 center">
          3.
          <br />Zahlung
        </div>
        <div class="column is-3 center active">
          4.
          <br />Bestätigung
        </div>
      </div>
      <KoaTitle>bestellung abschließen</KoaTitle>
      <div class="columns is-multiline">
        <div class="column is-4">
          <KoaTitle>
            Rechnungsadresse
            <Icon icon="edit" dark />
          </KoaTitle>
          <div class="hausschrift-22pt">
            max mustermann
            <br />ordensmeisterstraße 186
            <br />mm.mustermann.de
            <br />12345 musterstadt
          </div>
        </div>
        <div class="column is-4">
          <KoaTitle>
            Lieferadresse
            <Icon icon="edit" dark />
          </KoaTitle>
          <div class="hausschrift-22pt">
            max mustermann
            <br />ordensmeisterstraße 186
            <br />mm.mustermann.de
            <br />12345 musterstadt
          </div>
        </div>
        <div class="column is-4">
          <KoaTitle>
            Zahlungsart
            <Icon icon="edit" dark />
          </KoaTitle>
          <div class="hausschrift-22pt">paypal</div>
        </div>
      </div>
      <Whitespace />
      <KoaTitle>bestellübersicht</KoaTitle>
      <div
        class="columns is-gapless is-mobile"
        v-for="(product, index) in cart.products"
        :key="index"
      >
        <div class="column is-1">
          <Icon icon="x" dark />
        </div>
        <div class="column is-2 is-half-mobile">
          <img :src="product.image" class="productImage" />
        </div>
        <div class="column">
          <div class="nameColumn">
            <div class="hausschrift-22pt title">{{product.title}}</div>
            <div class="subtitle">{{product.subtitle}}</div>
            <div class="ammountRow">
              <AmmountSelector :ammount="1" dark />
            </div>
          </div>
        </div>
        <div class="column is-narrow">
          <div class="priceColumn">
            <div class="price hausschrift-22pt">{{ product.price }}</div>
          </div>
        </div>
      </div>
      <div class="columns noMarginBottom is-mobile is-gapless">
        <div class="column is-1"></div>
        <div class="column hausschrift-22pt">zwischensumme</div>
        <div class="column is-narrow hausschrift-22pt price">3,99</div>
      </div>
      <div class="columns noMarginBottom is-mobile is-gapless">
        <div class="column is-1"></div>
        <div class="column hausschrift-22pt">versandkosten</div>
        <div class="column is-narrow hausschrift-22pt price">3,99</div>
      </div>
      <div class="columns noMarginBottom is-mobile is-gapless">
        <div class="column is-1"></div>
        <div class="column hausschrift-22pt">lieferung</div>
        <div class="column is-narrow hausschrift-22pt price">3,99</div>
      </div>
      <div class="columns noMarginBottom is-mobile is-gapless">
        <div class="column is-1"></div>
        <div class="column hausschrift-22pt">gesamtsumme inkl. mwst.</div>
        <div class="column is-narrow hausschrift-22pt price">3,99</div>
      </div>
      <div class="columns noMarginBottom is-mobile is-gapless">
        <div class="column is-1"></div>
        <div class="column hausschrift-22pt">zwischensumme</div>
        <div class="column is-narrow hausschrift-22pt price">3,99</div>
      </div>

      <Whitespace />

      <div class="columns is-multiline">
        <div class="column is-8">
          <CheckboxInput label="ich möchte den newsletter abonnieren" />
        </div>
        <div class="column is-8">
          Ich habe die AGB gelesen und erkläre mit dem Absenden der Registrierung mein Einverständnis. <br>
Die Datenschutzbestimmungen habe ich zur Kenntnis genommen.
        </div>
      </div>

      <Whitespace />

      <div class="columns is-mobile">
        <div class="column is-3-tablet is-offset-6-tablet is-6-mobile">
          <Button3 fullWidth variant="yellowTransparent">zurück</Button3>
        </div>
        <div class="column is-3-tablet is-6-mobile">
          <Button1 fullWidth>jetzt kaufen</Button1>
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
import TextInput3 from './../atoms/TextInput3.vue';
import TabNavigation from './../molecules/TabNavigation.vue';
import CheckboxInput from './../atoms/CheckboxInput.vue';

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
  name: "CheckoutScreen_Confirmation",
  props: {
    isSubscription: Boolean,
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
    TextInput3,
    Button3,
    DropdownInput,
    BackgroundBanner,
    TabNavigation,
    CheckboxInput
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../hdui.scss";

.CheckoutScreen_Confirmation {
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
.nav {
  color: $gray;
}
.active {
  color: $black;
}
</style>