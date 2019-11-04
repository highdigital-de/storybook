<template>
  <div class="heroContainer" :class="{ border: !noBorder }">
    <div class="hero">
      <SfHero :sliderOptions="{autoplay: false}">
        <template>
          <div v-for="(item, index) in items" :key="index">
            <SfHeroItem
              :background="item.background"
              :image="item.image"
              :class="index === 0 ? customClass1 : index === 1 ? customClass2 : customClass3"
            >
              <template #call-to-action>
                <div class="margin">
                  <InfoButton :title="item.title" :text="item.text" :buttonText="item.buttonText" />
                </div>
              </template>
            </SfHeroItem>
          </div>
        </template>
      </SfHero>
    </div>
  </div>
</template>

<script>
import SfHero from '@storefront-ui/vue/src/components/organisms/SfHero/SfHero.vue'
import SfHeroItem from '@storefront-ui/vue/src/components/organisms/SfHero/_internal/SfHeroItem.vue'
import SfButton from '@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue'
import InfoButton from './../molecules/InfoButton.vue'

export default {
  name: "Hero",
  components: {
    SfHero,
    SfHeroItem,
    SfButton,
    InfoButton
  },
  props: {
    items: Array,
    noBorder: Boolean
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.heroContainer {
  &.border {
    filter: drop-shadow(0px 4px 0px #10cfc9);
  }
}
.hero {
  @include clip-border;
  padding-bottom: 0;
}
.margin {
  margin-top: 200px;
  margin-bottom: 80px;
}
</style>