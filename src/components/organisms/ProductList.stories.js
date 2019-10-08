import { storiesOf } from '@storybook/vue';
import ProductList from './ProductList';

const product1 = {
  image: '/img/products/pur-mock-up-2@3x.png',
  title: 'koawach pur',
  subtitle: 'purer Kakaogenuss',
  price: 3.99
}
const product1Batch = {
  ...product1,
  batch: '100g Packung: -20%',
  batchMobile: '-20%'
}
const product2 = {
  image: '/img/products/klassik-mock-up-3@3x.png',
  title: 'koawach Klassik',
  subtitle: 'klassisch schokoladig',
  price: 3.99
}

storiesOf('Design System|Organisms/ProductList', module)
  .add('default', () => {
    return {
      components: { ProductList },
      template: `<ProductList :products="this.products" />`,
      data: () => ({
        products: [
          product1,
          product2,
          product1Batch,
          product2,
          product1,
          product2,
          product1,
          product2,
          product1,
          product2
        ]
      }),
    };
  });