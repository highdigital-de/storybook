<template>
  <div class="productBody" :style="{color: colors.color}">
    <Container>
      <Columns>
        <Column flex="2">
          <KoaTitle>{{ text.headline }}</KoaTitle>
          <p>{{ text.body }}</p>
          <Whitespace />
          <img src="/img/placeholder_gray.png" width="474" height="267" class="translatedImage" />
          <Whitespace />
          <KoaTitle>zubereitung</KoaTitle>
          <Columns>
            <Column smallHalf>
              <KoaTitle>1.</KoaTitle>
              <p>2 Telöffel koawach</p>
            </Column>
            <Column smallHalf>
              <KoaTitle>2.</KoaTitle>
              <p>mit natürlicher vanille aus madagaskar</p>
            </Column>
            <Column smallHalf>
              <KoaTitle>3.</KoaTitle>
              <p>zu einer cremigen Masse verrühren.</p>
            </Column>
            <Column smallHalf>
              <KoaTitle>4.</KoaTitle>
              <p>Mit 180 ml Flüssigkeit heiß oder kalt aufgießen.</p>
            </Column>
          </Columns>
        </Column>
        <Column flex="1">
          <img src="/img/placeholder_gray.png" width="335" height="503" />
          <Tile
            image="/img/screens/product/recipe.png"
            heading="rezepte mit koawach vanille"
            cta="jetzt ansehen"
          />
        </Column>
      </Columns>
      <Columns>
        <Column flex="2">
          <Columns>
            <Column flex="1">
              <KoaTitle>zutaten</KoaTitle>
              <p>
                52% Kakao*
                Kokosblütenzucker*
                10% Guaranasamenpulver*
                natürliches Vanillearoma
                Vanillepulver*
                *aus biologischem Anbau
              </p>
            </Column>
            <Column flex="2">
              <KoaTitle>nährwertangaben je 100 g</KoaTitle>
              <NutritionInformation :info="nutritionInformation" />
            </Column>
          </Columns>
        </Column>
        <Column flex="1">
          <KoaTitle>hinweise</KoaTitle>
          <p>Eine Portion (200 ml) koawach Vanille enthält rund 62 mg Koffein (31 mg/100 ml). Nicht für Kinder, Schwangere und Stillende geeignet.</p>
        </Column>
      </Columns>
    </Container>
  </div>
</template>

<script>
import Whitespace from './../atoms/Whitespace.vue';
import Container from './../atoms/Container.vue';
import NutritionInformation from './../molecules/NutritionInformation.vue';
import Columns from './../molecules/Columns.vue';
import Column from './../molecules/Column.vue';
import Tile from './../molecules/Tile.vue';
import KoaTitle from './../atoms/KoaTitle.vue';
import KoaHeadline from './../atoms/KoaHeadline.vue';

export default {
  name: "ProductBody",
  props: {
    text: {
      type: Object,
      default: {
        headline: 'Headline',
        body: 'Body Text'
      }
    },
    colors: {
      type: Object,
      default: {
        color: 'black'
      }
    }
  },
  components: {
    Container,
    Columns,
    Column,
    KoaHeadline,
    Whitespace,
    KoaTitle,
    Tile,
    NutritionInformation
  }
}
</script>

<style lang="scss" scoped>
@import "../../../hdui.scss";

.productBody {
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
  }
}
.translatedImage {
  position: relative;
}
</style>