import { storiesOf } from '@storybook/vue';
import TileRow from './TileRow';

storiesOf('Design System|Molecules/TileRow', module)
.add('two', () => {
  return {
    components: { TileRow },
    template: `<TileRow :tiles="tiles" />`,
    data: () => ({
      tiles: [
        {
          heading: "kakao kaufen",
          cta: "jetzt entdecken",
          image: "/img/cacao-bg.jpg",
        },
        {
          heading: "abo",
          cta: "jetzt abonieren",
          image: "",
        }
      ]
    }),
  };
})
.add('four', () => {
  return {
    components: { TileRow },
    template: `<TileRow :tiles="tiles" />`,
    data: () => ({
      tiles: [
        {
          heading: "kakao kaufen",
          cta: "jetzt entdecken",
          image: "/img/cacao-bg.jpg",
        },
        {
          heading: "abo",
          cta: "jetzt abonieren",
          image: "",
        },
        {
          heading: "kakao kaufen",
          cta: "jetzt entdecken",
          image: "",
          highlight: true
        },
        {
          heading: "abo",
          cta: "jetzt abonieren",
          image: "/img/cacao-bg.jpg",
        }
      ]
    }),
  };
});