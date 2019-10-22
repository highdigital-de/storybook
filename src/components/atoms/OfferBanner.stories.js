import { storiesOf } from '@storybook/vue';
import OfferBanner from './OfferBanner';
import { action } from '@storybook/addon-actions';

storiesOf('Design System|Atoms/OfferBanner', module)
.add('default', () => {
  return {
    components: { OfferBanner },
    template: `<OfferBanner text="schnapp dir pur: nur heute die 100 g packung für 2,99 euro kaufen!" />`,
    data: () => ({ }),
  };
})
.add('different color', () => {
  return {
    components: { OfferBanner },
    template: `<OfferBanner backgroundColor="red" color="black" text="schnapp dir pur: nur heute die 100 g packung für 2,99 euro kaufen!" />`,
    data: () => ({ }),
  };
})
.add('no text', () => {
  return {
    components: { OfferBanner },
    template: `<OfferBanner />`,
    data: () => ({ }),
  };
});