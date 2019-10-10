import { storiesOf } from '@storybook/vue';
import ProductBody from './ProductBody';

storiesOf('Design System|Organisms/ProductBody', module)
  .add('default', () => {
    return {
      components: { ProductBody },
      template: `<ProductBody :text="this.text" :colors="this.colors"></ProductBody>`,
      data: () => ({
        text: {
          headline: 'mit natürlicher vanille aus madagaskar',
          body: 'Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man macht keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere? Na gut, ich werde nie in den Bestsellerlisten stehen. Aber andere Texte schaffen das auch nicht. Und darum stört es mich nicht besonders blind zu sein. Und sollten Sie diese Zeilen noch immer lesen, so habe ich als kleiner Blindtext etwas geschafft, wovon all die richtigen und wichtigen Texte meist nur träumen.'
        },
        colors: {
          color: '#409ccf'
        },
        nutritionInformation: {
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
  });