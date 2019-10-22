import { storiesOf } from '@storybook/vue';
import SetPage from './SetPage';

storiesOf('Design System|Pages/SetPage', module)
  .add('default', () => {
    return {
      components: { SetPage },
      template: `<SetPage></SetPage>`,
      data: () => ({ }),
    };
  });