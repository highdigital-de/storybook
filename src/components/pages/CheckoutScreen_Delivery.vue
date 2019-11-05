<template>
  <div class="CheckoutScreen_Delivery">
    <TopBar :marginTop="50" />
    <Hero noBorder :items="heroItems" />

    <Container>
      <div class="columns is-multiline is-mobile nav">
        <div class="column is-3 center">
          1.<br>Adresse
        </div>
        <div class="column is-3 center active">
          2.<br>Lieferung
        </div>
        <div class="column is-3 center">
          3.<br>Zahlung
        </div>
        <div class="column is-3 center">
          4.<br>Bestätigung
        </div>
      </div>
      <KoaTitle>lieferadresse</KoaTitle>
      <div class="hausschrift-22pt">
        max mustermann<br>
        ordensmeisterstraße 186<br>
        mm.mustermann.de<br>
        12345 musterstadt
      </div>
      <Whitespace />

      <div class="columns is-multiline">
        <div class="column is-half-tablet">
          <CheckboxInput label="an abweichende lieferadresse versenden" :value="true" />
        </div>
        <div class="column is-half-tablet">
          <CheckboxInput label="an eine packstation versenden" :value="false" />
        </div>
      </div>
      <div class="columns is-multiline">
        <div class="column is-half-tablet">
          <DropdownInput label="Anrede" placeholder="Bitte wählen" :options="salutationOptions" variant="yellow" />
        </div>
      </div>
      <div class="columns is-multiline">
        <div class="column is-half-tablet">
          <TextInput3 label="Vorname" />
        </div>
        <div class="column is-half-tablet">
          <TextInput3 label="Nachname" />
        </div>
        <div class="column is-half-tablet">
          <TextInput3 label="Email" />
        </div>
        <div class="column is-half-tablet">
          <TextInput3 label="Straße und Hausnummer" />
        </div>
        <div class="column is-half-tablet">
          <TextInput3 label="Postleitzahl" />
        </div>
        <div class="column is-half-tablet">
          <TextInput3 label="Stadt" />
        </div>
        <div class="column is-half-tablet">
          <DropdownInput label="Land" placeholder="Bitte wählen" :options="countryOptions" variant="yellow" />
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="column is-2-tablet is-offset-8-tablet is-6-mobile">
          <Button3 fullWidth variant="yellowTransparent">zurück</Button3>
        </div>
        <div class="column is-2-tablet is-6-mobile">
          <Button3 fullWidth variant="yellow">weiter</Button3>
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
import TextInput3 from './../atoms/TextInput3.vue';
import TabNavigation from './../molecules/TabNavigation.vue';
import CheckboxInput from './../atoms/CheckboxInput.vue';

export default {
  name: "CheckoutScreen_Delivery",
  props: {
    isSubscription: Boolean,
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
      tabs: [
        {title: 'Adresse'},
        {title: 'Lieferung'},
        {title: 'Zahlung'},
        {title: 'Bestätigung'}
      ],
      salutationOptions: [
        {label: 'Herr', value: 'male'},
        {label: 'Frau', value: 'female'}
      ],
      countryOptions: [
        {label: 'Deutschland', value: 'germany'},
        {label: 'Schweiz', value: 'switzerland'}
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.CheckoutScreen_Delivery {
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