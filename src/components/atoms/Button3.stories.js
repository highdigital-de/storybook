import { storiesOf } from '@storybook/vue';
import Button3 from './Button3';

storiesOf('Design System|Atoms/Button3', module)
  .add('default', () => {
    return {
      components: { Button3 },
      template: `<Button3>Hello World</Button3>`,
      data: () => ({}),
    };
  })
  .add('yellow', () => {
    return {
      components: { Button3 },
      template: `<Button3 variant="yellow">Hello World</Button3>`,
      data: () => ({}),
    };
  })
  .add('brown', () => {
    return {
      components: { Button3 },
      template: `<Button3 variant="brown">Hello World</Button3>`,
      data: () => ({}),
    };
  })
  .add('long text', () => {
    return {
      components: { Button3 },
      template: `<Button3>Hello World Hello World Hello World Hello World </Button3>`,
      data: () => ({}),
    };
  });