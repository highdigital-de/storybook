<template>
  <div style="max-width: 1240px; margin: auto">
    <SfHero :sliderOptions="{autoplay: false}">
      <template>
        <div v-for="(item, index) in items" :key="index">
          <SfHeroItem
            :title="item.title"
            :subtitle="item.subtitle"
            :buttonText="item.buttonText"
            :background="item.background"
            :image="item.image"
            :class="index === 0 ? customClass1 : index === 1 ? customClass2 : customClass3"
          />
        </div>
      </template>
    </SfHero>
  </div>
</template>

<script>
import SfHero from '@storefront-ui/vue/src/components/organisms/SfHero/SfHero.vue'

export default {
  name: "Hero1",
  data() {
    return {
      items: [
        {
          title: "Die Welt braucht dich wach",
          buttonText: "Kauf dich wach",
          subtitle: "Mache mit einer Tasse koawach die Welt Schluck für Schluck fairer. Dank bester fair gehandelter Zutaten bleibt mehr bei den Bauern in Lateinamerika und mehr Genuss bei dir.",
          background: "#eceff1",
          image: "https://i.ibb.co/Jn6JRGh/hero-bg-left.png"
        },
        {
          title: "Colorful summer dresses are already in store",
          subtitle: "SUMMER COLLECTION 2019",
          buttonText: "Learn more",
          background: "#efebe9",
          image: "https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png"
        },
        {
          title: "Colorful summer dresses are already in store",
          subtitle: "SUMMER COLLECTION 2019",
          buttonText: "Learn more",
          background: "#fce4ec",
          image: "https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png"
        }
      ]
    }
  },
  components: {
    SfHero
  }
}
</script>