import { storiesOf } from '@storybook/vue';
import Banner2 from './Banner2';

storiesOf('Design System|Molecules/Banner2', module)
  .add('default', () => {
    return {
      components: { Banner2 },
      template: `<Banner2 />`,
      data: () => ({ }),
    };
  });