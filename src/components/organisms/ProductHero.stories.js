import { storiesOf } from '@storybook/vue';
import ProductHero from './ProductHero';

storiesOf('Design System|Organisms/ProductHero', module)
  .add('default Vanille', () => {
    return {
      components: { ProductHero },
      template: `<ProductHero :colors="this.colors" :sizeOptions="this.sizeOptions" :selectedSize="this.selectedSize"></ProductHero>`,
      data: () => ({
        colors: {
          background: '#93c0e9',
          color: '#ffffff',
          koaButton: 'yellow'
        },
        sizeOptions: [
          { label: '100 g', value: '100' },
          { label: '220 g', value: '220' },
          { label: '500 g', value: '500' }
        ],
        selectedSize: 220
      }),
    };
  });