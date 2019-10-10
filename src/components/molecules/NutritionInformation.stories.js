import { storiesOf } from '@storybook/vue';
import NutritionInformation from './NutritionInformation';

storiesOf('Design System|Molecules/NutritionInformation', module)
.add('default', () => {
  return {
    components: { NutritionInformation },
    template: `<NutritionInformation :info="this.info"></NutritionInformation>`,
    data: () => ({
      info: {
        calories: "1513 kkJ / 360 kcal",
        fat: "5,9g",
        saturated: "3,5g",
        carbohydrates: "53g",
        sugars: "44g",
        protein: "14g",
        salt: "<0,03g"
      }
    }),
  };
})
.add('no data', () => {
  return {
    components: { NutritionInformation },
    template: `<NutritionInformation></NutritionInformation>`,
    data: () => ({ }),
  };
});