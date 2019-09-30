import { storiesOf } from '@storybook/vue';
import Hero1 from './Hero1';

storiesOf('Design System|Molecules/Hero1', module)
  .add('default', () => {
    return {
      components: { Hero1 },
      template: `<Hero1 />`,
      data: () => ({ }),
    };
  });