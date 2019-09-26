import { storiesOf } from '@storybook/vue';
import Carousel from './Carousel';

storiesOf('Carousel', module)
  .add('default', () => {
    return {
      components: { Carousel },
      template: `<div style="max-width: 1024px;"><Carousel /></div>`,
      data: () => ({ }),
    };
  });