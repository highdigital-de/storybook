import { storiesOf } from '@storybook/vue';
import StartPageScreen from './StartPageScreen';

storiesOf('Design System|Pages/StartPageScreen', module)
  .add('default', () => {
    return {
      components: { StartPageScreen },
      template: `<StartPageScreen />`,
      data: () => ({ }),
    };
  });