import { storiesOf } from '@storybook/vue';
import DrinkPage from './DrinkPage';

storiesOf('Design System|Pages/DrinkPage', module)
  .add('default', () => {
    return {
      components: { DrinkPage },
      template: `<DrinkPage></DrinkPage>`,
      data: () => ({ }),
    };
  });