import { storiesOf } from '@storybook/vue';
import Button1 from './Button1';

storiesOf('Design System|Atoms/Button1', module)
  .add('default', () => {
    return {
      components: { Button1 },
      template: `<Button1>Hello World</Button1>`,
      data: () => ({}),
    };
  })
  .add('yellow', () => {
    return {
      components: { Button1 },
      template: `<Button1 variant="yellow">Hello World</Button1>`,
      data: () => ({}),
    };
  })
  .add('yellow fullWidth', () => {
    return {
      components: { Button1 },
      template: `<Button1 fullWidth variant="yellow">Hello World</Button1>`,
      data: () => ({}),
    };
  })
  .add('fullWidth', () => {
    return {
      components: { Button1 },
      template: `<Button1 fullWidth>Hello World</Button1>`,
      data: () => ({}),
    };
  })
  .add('brown', () => {
    return {
      components: { Button1 },
      template: `<Button1 variant="brown">Hello World</Button1>`,
      data: () => ({}),
    };
  });