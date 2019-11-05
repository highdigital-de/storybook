import { storiesOf } from '@storybook/vue';

import Title from './Title';

storiesOf('Design System|Atoms/Title', module)
.add('default', () => {
  return {
    components: { Title },
    template: `<Title>title</Title>`,
    data: () => ({ }),
  };
})
.add('center', () => {
  return {
    components: { Title },
    template: `<Title center>title</Title>`,
    data: () => ({ }),
  };
})
  .add('no text', () => {
    return {
      components: { Title },
      template: `<Title />`,
      data: () => ({ }),
    };
  });