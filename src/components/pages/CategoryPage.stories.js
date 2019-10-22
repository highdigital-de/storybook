import { storiesOf } from '@storybook/vue';
import CategoryPage from './CategoryPage';

storiesOf('Design System|Pages/CategoryPage', module)
  .add('default', () => {
    return {
      components: { CategoryPage },
      template: `<CategoryPage></CategoryPage>`,
      data: () => ({ }),
    };
  });