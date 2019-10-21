<template>
  <div class="cartScreen">
    <TopBar :marginTop="50" />
    <Hero noBorder :items="heroItems" />

    <template v-if="isEmpty">
        <Container>
          <div class="center">
            <div class="Headline-hausschrift-40-pt">
              dein warenkorb ist leer
            </div>
            <Whitespace />
            <KoaButton>
              koffein-kakao kaufen
            </KoaButton>
          </div>
        </Container>
      <BackgroundBanner backgroundColor="#10cfc9">
        <Container>
          <KoaTitle center>schon probiert?</KoaTitle>
          <ProductCarousel :products="products" />
        </Container>
      </BackgroundBanner>
    </template>
    <Container v-else>
      <KoaHeadline>dein warenkorb</KoaHeadline>
      <div class="columns is-gapless is-mobile" v-for="(product, index) in cart.products" :key="index">
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
      <div class="columns is-gapless">
        <div class="column is-1"></div>
        <div
          class="column is-10"
        >Noch 12 € und wir schenken dir die Versandkosten. Noch 22 € und du bekommst 2 Tassen gratis dazu.</div>
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
      <div class="columns noMarginBottom is-gapless">
        <div class="column is-1"></div>
        <div class="column is-5 mobileMarginBottom">
          <div class="hausschrift-22pt">
            gutschein
          </div>
          <TextInput />
          <div class="couponButtonContainer">
            <Button4 backgroundColor="#ffe904" color="black">Gutschein einlösen</Button4>
          </div>
        </div>
        <div class="column is-6 mobileMarginBottom">
          <div class="columns is-mobile">
            <div class="column is-narrow ">
              <Icon icon="checked" dark v-if="isSubscription" />
              <div v-else style="background-color: gray; width: 34px; height: 34px;"></div>
            </div>
            <div class="column">
              <div class="hausschrift-22pt">lieferung als abo bestellen</div>
              <div v-if="!isSubscription">
                - jederzeit anpassbar<br>
                - jederzeit kündbar
              </div>
              <div v-if="isSubscription">
                <div class="hausschrift-22pt">lieferzyklus</div>
                <dropdownInput :options="deliveryOptions" placeholder="bitte wählen" variant="yellow" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns noMarginBottom is-gapless">
        <div class="column is-1"></div>
        <div class="column is-11 buttonField">
          <Button3 variant="yellow">zur kasse</Button3>
          <Button3 variant="yellow">weiter shoppen</Button3>
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
import KoaButton from './../atoms/KoaButton.vue';
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
import TextInput from './../atoms/TextInput.vue';

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
  name: "CartScreen",
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
    KoaButton,
    KoaTitle,
    ProductCarousel,
    Whitespace,
    TileRow,
    Container,
    Footer,
    Icon,
    AmmountSelector,
    TextInput,
    Button3,
    DropdownInput,
    BackgroundBanner
  },
  data() {
    return {
      heroItems: [{ background: "#eceff1" }],
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

.cartScreen {
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