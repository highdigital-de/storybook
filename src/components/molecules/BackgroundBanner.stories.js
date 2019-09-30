import { storiesOf } from '@storybook/vue';
import BackgroundBanner from './BackgroundBanner.vue';

storiesOf('Design System|Molecules/BackgroundBanner', module)
  .add('default', () => {
    return {
      components: { BackgroundBanner },
      template: `<BackgroundBanner image="/img/green-bg.png">
        <img src="/img/newsletter_form.png" />
      </BackgroundBanner>`,
      data: () => ({ }),
    };
  });