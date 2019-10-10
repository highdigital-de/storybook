import { storiesOf } from '@storybook/vue';

import KoaTitle from './KoaTitle';

storiesOf('Design System|Atoms/KoaTitle', module)
.add('default', () => {
  return {
    components: { KoaTitle },
    template: `<KoaTitle>title</KoaTitle>`,
    data: () => ({ }),
  };
})
.add('center', () => {
  return {
    components: { KoaTitle },
    template: `<KoaTitle center>title</KoaTitle>`,
    data: () => ({ }),
  };
})
  .add('no text', () => {
    return {
      components: { KoaTitle },
      template: `<KoaTitle />`,
      data: () => ({ }),
    };
  });