import { storiesOf } from '@storybook/vue';

import KoaHeadline from './KoaHeadline';

storiesOf('Design System|Atoms/KoaHeadline', module)
  .add('default', () => {
    return {
      components: { KoaHeadline },
      template: `<KoaHeadline>headline</KoaHeadline>`,
      data: () => ({ }),
    };
  })
  .add('no text', () => {
    return {
      components: { KoaHeadline },
      template: `<KoaHeadline />`,
      data: () => ({ }),
    };
  });