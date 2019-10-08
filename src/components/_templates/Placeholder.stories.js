import { storiesOf } from '@storybook/vue';
import Placeholder from './Placeholder';

storiesOf('Design System|Atoms/Placeholder', module)
  .add('default', () => {
    return {
      components: { Placeholder },
      template: `<Placeholder></Placeholder>`,
      data: () => ({ }),
    };
  });