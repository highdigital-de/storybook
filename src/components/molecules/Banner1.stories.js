import { storiesOf } from '@storybook/vue';
import Banner1 from './Banner1';

storiesOf('Design System|Molecules/Banner1', module)
  .add('default', () => {
    return {
      components: { Banner1 },
      template: `<Banner1 />`,
      data: () => ({ }),
    };
  });