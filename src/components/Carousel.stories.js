import { storiesOf } from '@storybook/vue';
import Carousel from './Carousel';

storiesOf('Carousel', module)
  .add('default', () => {
    return {
      components: { Carousel },
      template: `<div style="max-width: 1024px;"><Carousel :items="items" /></div>`,
      data: () => ({
        items: [
          { image: "/img/carousel1.png" },
          { image: "/img/carousel2.png" },
          { image: "/img/carousel3.png" },
          { image: "/img/carousel1.png" },
          { image: "/img/carousel2.png" }
        ]
      }),
    };
  })
  .add('reseller', () => {
    return {
      components: { Carousel },
      template: `<div style="max-width: 1024px;"><Carousel :items="items" :settings="settings" /></div>`,
      data: () => ({
        items: [
          { image: "/img/reseller/1.png" },
          { image: "/img/reseller/2.png" },
          { image: "/img/reseller/3.png" },
          { image: "/img/reseller/4.png" },
          { image: "/img/reseller/5.png" },
          { image: "/img/reseller/6.png" },
          { image: "/img/reseller/1.png" },
          { image: "/img/reseller/2.png" },
          { image: "/img/reseller/3.png" },
          { image: "/img/reseller/4.png" }
        ],
        settings: {
          perView: 6
        }
      }),
    };
  });