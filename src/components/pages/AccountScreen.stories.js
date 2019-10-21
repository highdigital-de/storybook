import { storiesOf } from '@storybook/vue';
import AccountScreen from './AccountScreen';

storiesOf('Design System|Pages/AccountScreen', module)
.add('default', () => {
  return {
    components: { AccountScreen },
    template: `<AccountScreen></AccountScreen>`,
    data: () => ({ }),
  };
});