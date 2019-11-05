import { storiesOf } from '@storybook/vue';
import Button2 from './Button2';
import { action } from '@storybook/addon-actions';

storiesOf('Design System|Atoms/Button2', module)
  .add('default', () => {
    return {
      components: { Button2 },
      template: `<Button2 @click="onClick">ohne Koffein</Button2>`,
      data: () => ({ }),
      methods: {
        onClick: action('on-click')
      }
    };
  })
  .add('active', () => {
    return {
      components: { Button2 },
      template: `<Button2 active>ohne Koffein</Button2>`,
      data: () => ({ }),
    };
  })
  .add('default color', () => {
    return {
      components: { Button2 },
      template: `<div style="background-color: #93c0e9;"><Button2 color="white" backgroundColor="#93c0e9">ohne Koffein</Button2></div>`,
      data: () => ({ }),
    };
  })
  .add('default color active', () => {
    return {
      components: { Button2 },
      template: `<div style="background-color: #93c0e9;"><Button2 color="white" backgroundColor="#93c0e9" active>ohne Koffein</Button2></div>`,
      data: () => ({ }),
    };
  });