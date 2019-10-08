import { storiesOf } from '@storybook/vue';
import Component from './Component';

storiesOf('Design System|Atoms/Component', module)
  .add('default', () => {
    return {
      components: { Component },
      template: `<Component></Component>`,
      data: () => ({ }),
    };
  });