<template>
  <div class="productHero" :style="heroStyle">
    <Container>
      <Whitespace />
      <Columns>
        <Column flex="2">
          <img src="/img/screens/product/vanilla.png" class="image" />
        </Column>
        <Column flex="2">
          <KoaHeadline>typ vanille</KoaHeadline>
          <KoaTitle>verführerisch vanillig enthält koffeinhaltiges guarana super lecker</KoaTitle>
          <KoaHeadline>3,59</KoaHeadline>
          <div>
            <Batch>-10%</Batch>statt 3,99€ pro 100g
          </div>
          <p>
            inkl. 7 % MwSt. zzgl. Versand<br />
            Lieferzeit: ca. 1-3 Tage nach DE
          </p>
          <KoaButton :variant="colors.koaButton" >in den Warencorb</KoaButton>
        </Column>
        <Column flex="1">
          <img src="/img/screens/product/logos.png" width="80" class="logos" />
        </Column>
      </Columns>
    </Container>
  </div>
</template>

<script>
import Columns from './../molecules/Columns.vue';
import Column from './../molecules/Column.vue';
import Container from './../atoms/Container.vue';
import KoaTitle from './../atoms/KoaTitle.vue';
import KoaHeadline from './../atoms/KoaHeadline.vue';
import Whitespace from './../atoms/Whitespace.vue';
import Batch from './../atoms/Batch.vue';
import KoaButton from './../atoms/KoaButton.vue';

export default {
  name: "ProductHero",
  props: {
    colors: Object,
  },
  components: {
    Columns,
    Column,
    Container,
    Whitespace,
    KoaTitle,
    KoaHeadline,
    Batch,
    KoaButton
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