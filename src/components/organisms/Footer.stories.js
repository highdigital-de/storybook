import { storiesOf } from '@storybook/vue';
import Footer from './Footer';

storiesOf('Design System|Organisms/Footer', module)
  .add('default', () => {
    return {
      components: { Footer },
      template: `<Footer></Footer>`,
      data: () => ({ }),
    };
  });