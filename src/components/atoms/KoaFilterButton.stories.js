import { storiesOf } from '@storybook/vue';
import KoaFilterButton from './KoaFilterButton';

storiesOf('Design System|Atoms/KoaFilterButton', module)
  .add('default', () => {
    return {
      components: { KoaFilterButton },
      template: `<KoaFilterButton>ohne Koffein</KoaFilterButton>`,
      data: () => ({ }),
    };
  });