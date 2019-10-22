import { storiesOf } from '@storybook/vue';
import ProductPage from './ProductPage';

storiesOf('Design System|Pages/ProductPage', module)
  .add('default', () => {
    return {
      components: { ProductPage },
      template: `<ProductPage color="#409ccf"></ProductPage>`,
      data: () => ({ }),
    };
  })
  .add('black color', () => {
    return {
      components: { ProductPage },
      template: `<ProductPage color="black"></ProductPage>`,
      data: () => ({ }),
    };
  });