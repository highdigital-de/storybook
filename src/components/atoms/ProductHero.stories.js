import { storiesOf } from '@storybook/vue';
import ProductHero from './ProductHero';

storiesOf('Design System|Organisms/ProductHero', module)
  .add('default Vanille', () => {
    return {
      components: { ProductHero },
      template: `<ProductHero :colors="this.colors"></ProductHero>`,
      data: () => ({
        colors: {
          background: '#93c0e9',
          color: '#ffffff',
          koaButton: 'yellow'
        }
      }),
    };
  });