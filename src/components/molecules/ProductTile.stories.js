import { storiesOf } from '@storybook/vue';
import ProductTile from './ProductTile';

storiesOf('Design System|Molecules/ProductTile', module)
.add('default', () => {
  return {
    components: { ProductTile },
    template: `<div style="width: 303px;"><ProductTile :product="product"></ProductTile></div>`,
    data: () => ({
      product: {
        image: '/img/products/pur-mock-up-2@3x.png',
        title: 'koawach pur',
        subtitle: 'purer Kakaogenuss',
        price: 3.99
      }
    }),
  };
})
.add('with batch', () => {
  return {
    components: { ProductTile },
    template: `<div style="width: 303px;"><ProductTile :product="product"></ProductTile></div>`,
    data: () => ({
      product: {
        image: '/img/products/pur-mock-up-2@3x.png',
        title: 'koawach pur',
        subtitle: 'purer Kakaogenuss',
        price: 3.99,
        batch: '100g Packung: -20%'
      }
    }),
  };
})
.add('with batch mobile', () => {
  return {
    components: { ProductTile },
    template: `<div style="width: 198px;"><ProductTile :product="product"></ProductTile></div>`,
    data: () => ({
      product: {
        image: '/img/products/pur-mock-up-2@3x.png',
        title: 'koawach pur',
        subtitle: 'purer Kakaogenuss',
        price: 3.99,
        batchMobile: '  -20%'
      }
    }),
  };
});