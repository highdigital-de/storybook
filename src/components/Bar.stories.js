import { storiesOf } from '@storybook/vue';

import Bar from './Bar';

storiesOf('Bar', module)
  .add('default', () => {
    return {
      components: { Bar },
      template: `<Bar />`,
      data: () => ({ }),
    };
  })
  .add('default2', () => {
    return {
      components: { Bar },
      template: `<Bar />`,
      data: () => ({ }),
    };
  });