import { storiesOf } from '@storybook/vue';

import Heading from './Heading';

storiesOf('Heading', module)
  .add('default', () => {
    return {
      components: { Heading },
      template: `<Heading title="die kakaorevolution auf instagram" subtitle="poste #… mit etwas glück featuren wir dich auf unserer seite!" />`,
      data: () => ({ }),
    };
  })
  .add('only title', () => {
    return {
      components: { Heading },
      template: `<Heading title="5 gründe für unseren koffein kakao" />`,
      data: () => ({ }),
    };
  })
  .add('only subtitle', () => {
    return {
      components: { Heading },
      template: `<Heading subtitle="du bekommst unseren koffein kakao bei folgenden partnern" />`,
      data: () => ({ }),
    };
  })
  .add('no data', () => {
    return {
      components: { Heading },
      template: `<Heading />`,
      data: () => ({ }),
    };
  });