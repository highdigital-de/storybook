<template>
  <div class="paymentScreen">
    <TopBar :marginTop="50" />
    <Hero noBorder :items="heroItems" />

    <Container>
      <div class="columns is-multiline is-mobile">
        <div class="column is-3 center">
          1.<br>Adresse
        </div>
        <div class="column is-3 center">
          2.<br>Lieferung
        </div>
        <div class="column is-3 center">
          3.<br>Zahlung
        </div>
        <div class="column is-3 center">
          4.<br>Bestätigung
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
      </div>
      <div class="columns is-mobile">
        <div class="column is-2-tablet is-offset-8-tablet is-6-mobile">
          <Button3 fullWidth variant="yellow">zurück</Button3>
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
import TextInput3 from './../atoms/TextInput3.vue';
import TabNavigation from './../molecules/TabNavigation.vue';

export default {
  name: "paymentScreen",
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
    KoaButton,
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
    TabNavigation
  },
  data() {
    return {
      heroItems: [{ background: "#eceff1" }],
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.paymentScreen {
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