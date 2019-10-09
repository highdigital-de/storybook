import { storiesOf } from '@storybook/vue';
import Whitespace from './Whitespace';

storiesOf('Design System|Atoms/Whitespace', module)
  .add('default', () => {
    return {
      components: { Whitespace },
      template: `<Whitespace></Whitespace>`,
      data: () => ({ }),
    };
  });