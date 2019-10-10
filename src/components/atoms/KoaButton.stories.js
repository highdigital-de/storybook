import { storiesOf } from '@storybook/vue';
import KoaButton from './KoaButton';

storiesOf('Design System|Atoms/KoaButton', module)
  .add('default', () => {
    return {
      components: { KoaButton },
      template: `<KoaButton>Hello World</KoaButton>`,
      data: () => ({}),
    };
  })
  .add('yellow', () => {
    return {
      components: { KoaButton },
      template: `<KoaButton variant="yellow">Hello World</KoaButton>`,
      data: () => ({}),
    };
  })
  .add('brown', () => {
    return {
      components: { KoaButton },
      template: `<KoaButton variant="brown">Hello World</KoaButton>`,
      data: () => ({}),
    };
  });