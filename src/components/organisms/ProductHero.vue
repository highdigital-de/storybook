<template>
  <div class="productHero" :style="heroStyle">
    <Container>
      <Whitespace />
      <div class="columns">
        <div class="column is-6">
          <img src="/img/screens/product/vanilla.png" class="image" />
        </div>
        <div class="column is-5">
          <Headline>typ vanille</Headline>
          <RatingLink :score="4" :count="11" />
          <h3>verführerisch vanillig enthält koffeinhaltiges guarana super lecker</h3>
          <Headline>3,59</Headline>
          <div>
            <Batch>-10%</Batch>statt 3,99€ pro 100g
          </div>
          <div class="columns">
            <div class="column is-one-third">
              <h3>Menge</h3>
              <AmmountSelector :ammount="1" />
            </div>
            <div class="column is-two-thirds">
              <h3>Größe</h3>
              <FilterSelector :options="sizeOptions" :selected="selectedSize" :color="colors.color" :backgroundColor="colors.background" />
            </div>
          </div>
          <p>
            inkl. 7 % MwSt. zzgl. Versand<br />
            Lieferzeit: ca. 1-3 Tage nach DE
          </p>
          <Button1 :variant="colors.button1" >in den Warencorb</Button1>
        </div>
        <div class="is-1">
          <img src="/img/screens/product/logos.png" width="80" class="logos" />
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from './../atoms/Container.vue';
import Title from './../atoms/Title.vue';
import Headline from './../atoms/Headline.vue';
import Whitespace from './../atoms/Whitespace.vue';
import Batch from './../atoms/Batch.vue';
import Button1 from './../atoms/Button1.vue';
import RatingLink from './../molecules/RatingLink.vue';
import AmmountSelector from './../molecules/AmmountSelector.vue';
import FilterSelector from './../molecules/FilterSelector.vue';

export default {
  name: "ProductHero",
  props: {
    colors: {
      type: Object,
      default: {
        background: '#93c0e9',
        color: '#ffffff',
        button1: 'yellow'
      }
    },
    sizeOptions: {
      type: Object,
      default: [
        {label: '100 g', value: '100'},
        {label: '220 g', value: '220'},
        {label: '500 g', value: '500'}
      ]
    },
    selectedSize: Number
  },
  components: {
    Container,
    Whitespace,
    Title,
    Headline,
    Batch,
    Button1,
    RatingLink,
    AmmountSelector,
    FilterSelector
  },
  computed: {
    heroStyle() {
      return {
        backgroundColor: this.colors.background,
        color: this.colors.color,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.productHero {
  min-height: 100px;
  width: 100%;
  @include clip-border;
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
  
  }
}
.image {
  width: 100%;
  height: auto;
}
.logos {
  float: right;
  @media only screen and (max-width: $breakpoint-mobile-landscape) {
    display: none;
  }
}
</style>