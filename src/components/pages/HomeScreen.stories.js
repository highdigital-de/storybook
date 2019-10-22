import { storiesOf } from '@storybook/vue';
import HomeScreen from './HomeScreen';

storiesOf('Design System|Pages/HomeScreen', module)
  .add('default', () => {
    return {
      components: { HomeScreen },
      template: `<HomeScreen />`,
      data: () => ({ }),
    };
  });