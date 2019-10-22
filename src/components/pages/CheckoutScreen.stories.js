import { storiesOf } from '@storybook/vue';
import CheckoutScreen_Address from './CheckoutScreen_Address';
import CheckoutScreen_Delivery from './CheckoutScreen_Delivery';
import CheckoutScreen_Payment from './CheckoutScreen_Payment';
import CheckoutScreen_Confirmation from './CheckoutScreen_Confirmation';

storiesOf('Design System|Pages/Checkout', module)
.add('1. Address', () => {
  return {
    components: { CheckoutScreen_Address },
    template: `<CheckoutScreen_Address></CheckoutScreen_Address>`,
    data: () => ({ }),
  };
})
.add('2. Lieferung', () => {
  return {
    components: { CheckoutScreen_Delivery },
    template: `<CheckoutScreen_Delivery></CheckoutScreen_Delivery>`,
    data: () => ({ }),
  };
})
.add('3. Zahlungsart', () => {
  return {
    components: { CheckoutScreen_Payment },
    template: `<CheckoutScreen_Payment></CheckoutScreen_Payment>`,
    data: () => ({ }),
  };
})
.add('4. Bestätigung', () => {
  return {
    components: { CheckoutScreen_Confirmation },
    template: `<CheckoutScreen_Confirmation></CheckoutScreen_Confirmation>`,
    data: () => ({ }),
  };
});