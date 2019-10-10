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
            image: "/img/products/pur-mock-up-2@3x.png"
          },
          { 
            title: "koawach klassik",
            subtitle: "klassischer Kakaogenuss",
            price: 3.99,
            image: "/img/products/klassik-mock-up-3@3x.png"
          },
          { 
            title: "koawach pur",
            subtitle: "purer Kakaogenuss",
            price: 3.99,
            image: "/img/products/pur-mock-up-2@3x.png"
          },
          { 
            title: "koawach klassik",
            subtitle: "klassischer Kakaogenuss",
            price: 3.99,
            image: "/img/products/klassik-mock-up-3@3x.png"
          },
          { 
            title: "koawach pur",
            subtitle: "purer Kakaogenuss",
            price: 3.99,
            image: "/img/products/pur-mock-up-2@3x.png"
          },
          { 
            title: "koawach klassik",
            subtitle: "klassischer Kakaogenuss",
            price: 3.99,
            image: "/img/products/klassik-mock-up-3@3x.png"
          }
        ]
      }),
    };
  });