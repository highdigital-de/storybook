import { storiesOf } from '@storybook/vue';
import TopBar from './TopBar';

storiesOf('Design System|Molecules/TopBar', module)
  .add('default', () => {
    return {
      components: { TopBar },
      template: `<TopBar />`,
      data: () => ({ }),
    };
  });