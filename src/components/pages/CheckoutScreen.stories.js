import { storiesOf } from '@storybook/vue';
import CheckoutScreen_Payment from './CheckoutScreen_Payment';
import CheckoutScreen_Delivery from './CheckoutScreen_Delivery';

storiesOf('Design System|Pages/Checkout', module)
.add('1. Rechnung', () => {
  return {
    components: { CheckoutScreen_Payment },
    template: `<CheckoutScreen_Payment></CheckoutScreen_Payment>`,
    data: () => ({ }),
  };
})
.add('2. Lieferung', () => {
  return {
    components: { CheckoutScreen_Delivery },
    template: `<CheckoutScreen_Delivery></CheckoutScreen_Delivery>`,
    data: () => ({ }),
  };
});