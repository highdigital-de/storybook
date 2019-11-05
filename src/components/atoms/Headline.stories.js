import { storiesOf } from '@storybook/vue';

import Headline from './Headline';

storiesOf('Design System|Atoms/Headline', module)
.add('default', () => {
  return {
    components: { Headline },
    template: `<Headline>headline</Headline>`,
    data: () => ({ }),
  };
})
.add('center', () => {
  return {
    components: { Headline },
    template: `<Headline center>headline</Headline>`,
    data: () => ({ }),
  };
})
  .add('no text', () => {
    return {
      components: { Headline },
      template: `<Headline />`,
      data: () => ({ }),
    };
  });