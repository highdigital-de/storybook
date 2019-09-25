import { storiesOf } from '@storybook/vue';
import TopBar from './TopBar';

storiesOf('TopBar', module)
  .add('default', () => {
    return {
      components: { TopBar },
      template: `<TopBar />`,
      data: () => ({ }),
    };
  });