import { storiesOf } from '@storybook/vue';
import Batch from './Batch';

storiesOf('Design System|Atoms/Batch', module)
  .add('default', () => {
    return {
      components: { Batch },
      template: `<Batch>-10 %</Batch>`,
      data: () => ({ }),
    };
  });