import { storiesOf } from '@storybook/vue';
import TabNavigation from './TabNavigation';

storiesOf('Design System|Molecules/TabNavigation', module)
  .add('default', () => {
    return {
      components: { TabNavigation },
      template: `<TabNavigation :tabs="this.tabs" :active="2"></TabNavigation>`,
      data: () => ({
        tabs: [
          {title: 'Adresse'},
          {title: 'Lieferung'},
          {title: 'Zahlung'},
          {title: 'Bestätigung'}
        ]
      }),
    };
  });