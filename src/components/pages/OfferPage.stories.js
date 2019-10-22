import { storiesOf } from '@storybook/vue';
import OfferPage from './OfferPage';

storiesOf('Design System|Pages/OfferPage', module)
  .add('default', () => {
    return {
      components: { OfferPage },
      template: `<OfferPage></OfferPage>`,
      data: () => ({ }),
    };
  });