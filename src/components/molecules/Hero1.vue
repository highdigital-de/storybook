<template>
  <div class="hero1Container">
    <div class="hero1">
      <SfHero :sliderOptions="{autoplay: false}">
        <template>
          <div v-for="(item, index) in items" :key="index">
            <SfHeroItem
              :buttonText="item.buttonText"
              :background="item.background"
              :image="item.image"
              :class="index === 0 ? customClass1 : index === 1 ? customClass2 : customClass3"
            >
              <template #call-to-action>
                <div class="margin">
                  <InfoButton :title="title" :text="text" :buttonText="buttonText" />
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
  name: "Hero1",
  components: {
    SfHero,
    SfHeroItem,
    SfButton,
    InfoButton
  },
  data() {
    return {
      items: [
        {
          title: "Die Welt braucht dich wach",
          buttonText: "Kauf dich wach",
          background: "#eceff1",
          image: "/img/cacao-bg.jpg"
        },
        {
          title: "Die Welt braucht dich wach",
          buttonText: "Kauf dich wach",
          subtitle: "Mache mit einer Tasse koawach die Welt Schluck für Schluck fairer. Dank bester fair gehandelter Zutaten bleibt mehr bei den Bauern in Lateinamerika und mehr Genuss bei dir.",
          background: "#efebe9",
          image: "/img/cacao-bg.jpg"
        },
        {
          title: "Die Welt braucht dich wach",
          buttonText: "Kauf dich wach",
          subtitle: "Mache mit einer Tasse koawach die Welt Schluck für Schluck fairer. Dank bester fair gehandelter Zutaten bleibt mehr bei den Bauern in Lateinamerika und mehr Genuss bei dir.",
          background: "#fce4ec",
          image: "/img/cacao-bg.jpg"
        }
      ],
      title: "Die Welt braucht dich wach",
      text: "Mache mit einer Tasse koawach die Welt Schluck für Schluck fairer. Dank bester fair gehandelter Zutaten bleibt mehr bei den",
      buttonText: "Kauf dich wach",
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.hero1Container {
  filter: drop-shadow(0px 4px 0px #10cfc9);
}
.hero1 {
  @include clip-border;
  padding-bottom: 0;
  box-shadow: 0px 0px 0px 4px #10cfc9 inset;
}
.margin {
  margin-top: 200px;
  margin-bottom: 80px;
}
</style>