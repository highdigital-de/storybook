import { storiesOf } from '@storybook/vue';
import HeadingCTA from './HeadingCTA';

storiesOf('HeadingCTA', module)
  .add('default', () => {
    return {
      components: { HeadingCTA },
      template: `<div style="background-color: #e3e3e3; padding: 50px;"><HeadingCTA heading="kakaopulver" cta="jetzt entdecken" /></div>`,
      data: () => ({ }),
    };
  });