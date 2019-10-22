import { storiesOf } from '@storybook/vue';
import EquipmentPage from './EquipmentPage';

storiesOf('Design System|Pages/EquipmentPage', module)
  .add('default', () => {
    return {
      components: { EquipmentPage },
      template: `<EquipmentPage></EquipmentPage>`,
      data: () => ({ }),
    };
  });