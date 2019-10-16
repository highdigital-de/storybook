import { storiesOf } from '@storybook/vue';
import ProductCarousel from './ProductCarousel';

storiesOf('Design System|Organisms/ProductCarousel', module)
  .add('default', () => {
    return {
      components: { ProductCarousel },
      template: `<div style="max-width: 1024px;"><ProductCarousel :products="products" /></div>`,
      data: () => ({
        products: [
          { 
            title: "koawach pur",
            subtitle: "purer Kakaogenuss",
            price: 3.99,
            image: "/img/products/pur-produktbild@3x.png"
          },
          { 
            title: "koawach klassik",
            subtitle: "klassischer Kakaogenuss",
            price: 3.99,
            image: "/img/products/klassik-produktbild@3x.png"
          },
          { 
            title: "koawach pur",
            subtitle: "purer Kakaogenuss",
            price: 3.99,
            image: "/img/products/pur-produktbild@3x.png"
          },
          { 
            title: "koawach klassik",
            subtitle: "klassischer Kakaogenuss",
            price: 3.99,
            image: "/img/products/klassik-produktbild@3x.png"
          },
          { 
            title: "koawach pur",
            subtitle: "purer Kakaogenuss",
            price: 3.99,
            image: "/img/products/pur-produktbild@3x.png"
          },
          { 
            title: "koawach klassik",
            subtitle: "klassischer Kakaogenuss",
            price: 3.99,
            image: "/img/products/klassik-produktbild@3x.png"
          }
        ]
      }),
    };
  });