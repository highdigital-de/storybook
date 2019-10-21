import { storiesOf } from '@storybook/vue';
import CartScreen from './CartScreen';

storiesOf('Design System|Pages/CartScreen', module)
.add('default', () => {
  return {
    components: { CartScreen },
    template: `<CartScreen></CartScreen>`,
    data: () => ({ }),
  };
})
.add('is subscription', () => {
  return {
    components: { CartScreen },
    template: `<CartScreen isSubscription></CartScreen>`,
    data: () => ({ }),
  };
})
.add('is empty', () => {
  return {
    components: { CartScreen },
    template: `<CartScreen isEmpty></CartScreen>`,
    data: () => ({ }),
  };
});