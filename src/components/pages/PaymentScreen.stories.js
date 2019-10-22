import { storiesOf } from '@storybook/vue';
import PaymentScreen from './PaymentScreen';

storiesOf('Design System|Pages/PaymentScreen', module)
.add('default', () => {
  return {
    components: { PaymentScreen },
    template: `<PaymentScreen></PaymentScreen>`,
    data: () => ({ }),
  };
});