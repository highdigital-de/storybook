import { storiesOf } from '@storybook/vue';
import PowderOverview from './PowderOverview';

storiesOf('Design System|Pages/PowderOverview', module)
  .add('default', () => {
    return {
      components: { PowderOverview },
      template: `<PowderOverview></PowderOverview>`,
      data: () => ({ }),
    };
  });