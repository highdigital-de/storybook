import { storiesOf } from '@storybook/vue';
import KoaButton from './KoaButton';

storiesOf('Design System|Atoms/KoaButton', module)
  .add('default', () => {
    return {
      components: { KoaButton },
      template: `<KoaButton>Hello World</KoaButton>`,
      data: () => ({ }),
    };
  });