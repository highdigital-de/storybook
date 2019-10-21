import { storiesOf } from '@storybook/vue';
import RegisterScreen from './RegisterScreen';

storiesOf('Design System|Pages/RegisterScreen', module)
.add('default', () => {
  return {
    components: { RegisterScreen },
    template: `<RegisterScreen></RegisterScreen>`,
    data: () => ({ }),
  };
});