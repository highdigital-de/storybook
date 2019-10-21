import { storiesOf } from '@storybook/vue';
import CartScreen from './CartScreen';

storiesOf('Design System|Pages/CartScreen', module)
  .add('default', () => {
    return {
      components: { CartScreen },
      template: `<CartScreen></CartScreen>`,
      data: () => ({ }),
    };
  });