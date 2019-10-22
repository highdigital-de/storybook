import { storiesOf } from '@storybook/vue';
import CategoryPage from './CategoryPage';
import DrinkPage from './DrinkPage';
import EquipmentPage from './EquipmentPage';
import OfferPage from './OfferPage';
import SetPage from './SetPage';

storiesOf('Design System|Pages/CategoryPage', module)
.add('PowerOverview', () => {
  return {
    components: { CategoryPage },
    template: `<CategoryPage></CategoryPage>`,
    data: () => ({ }),
  };
})
.add('DrinkPage', () => {
  return {
    components: { DrinkPage },
    template: `<DrinkPage></DrinkPage>`,
    data: () => ({ }),
  };
})
.add('EquipmentPage', () => {
  return {
    components: { EquipmentPage },
    template: `<EquipmentPage></EquipmentPage>`,
    data: () => ({ }),
  };
})
.add('OfferPage', () => {
  return {
    components: { OfferPage },
    template: `<OfferPage></OfferPage>`,
    data: () => ({ }),
  };
})
.add('SetPage', () => {
  return {
    components: { SetPage },
    template: `<SetPage></SetPage>`,
    data: () => ({ }),
  };
});