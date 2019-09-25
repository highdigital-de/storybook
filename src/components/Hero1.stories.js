import { storiesOf } from '@storybook/vue';
import Hero1 from './Hero1';

storiesOf('Hero1', module)
  .add('default', () => {
    return {
      components: { Hero1 },
      template: `<Hero1 />`,
      data: () => ({ }),
    };
  });