import { storiesOf } from '@storybook/vue';
import BackgroundBanner from './BackgroundBanner.vue';

storiesOf('BackgroundBanner', module)
  .add('default', () => {
    return {
      components: { BackgroundBanner },
      template: `<BackgroundBanner image="/img/cacao-bg.jpg">content</BackgroundBanner>`,
      data: () => ({ }),
    };
  });