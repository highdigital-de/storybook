import { storiesOf } from '@storybook/vue';
import ProductPage from './ProductPage';

storiesOf('Design System|Pages/ProductPage', module)
  .add('default', () => {
    return {
      components: { ProductPage },
      template: `<ProductPage></ProductPage>`,
      data: () => ({ }),
    };
  });