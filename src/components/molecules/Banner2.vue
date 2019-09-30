<template>
  <div class="banner1">
    <SfSection
      :class="customClass"
      :titleHeading="titleHeading"
      :subtitleHeading="subtitleHeading"
      :levelHeading="levelHeading"
    >
      <div :style="row">
        <div :style="colFirst">1</div>
        <div :style="col">2</div>
      </div>
    </SfSection>
  </div>
</template>

<script>
import KoaButton from './../atoms/KoaButton.vue'
import SfSection from '@storefront-ui/vue/src/components/molecules/SfSection/SfSection.vue'

export default {
  name: "Banner1",
  data() {
    return {
      row: {
        display: "flex"
      },
      col: {
        flex: 1,
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "1rem",
        backgroundColor: "rgb(94, 206, 123)",
        color: "#FFF",
        fontSize: "2em"
      },
      colFirst: {
        flex: 1,
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "0",
        backgroundColor: "rgb(94, 206, 123)",
        color: "#FFF",
        fontSize: "3rem"
      }
    };
  },
  components: {
    KoaButton,
    SfSection
  }
}
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/components/SfSection.scss";
@import "~@storefront-ui/shared/styles/variables";

$section-margin-y: $spacer-big * 3 !default;
$section-margin-y-desktop: 10rem !default;
$section__content-margin-top: $spacer-big !default;
$section__content-margin-top-desktop: $spacer-extra-big * 1.5 !default;

.sf-section {
  margin: $section-margin-y 0;
  @media screen and (min-width: $desktop-min) {
    margin: $section-margin-y-desktop 0;
  }
  &__content {
    margin-top: $section__content-margin-top;
    @media screen and (min-width: $desktop-min) {
      margin-top: $section__content-margin-top-desktop;
    }
  }
}
</style>