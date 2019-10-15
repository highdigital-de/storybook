import { storiesOf } from '@storybook/vue';
import KoaFilterButton from './KoaFilterButton';
import { action } from '@storybook/addon-actions';

storiesOf('Design System|Atoms/KoaFilterButton', module)
  .add('default', () => {
    return {
      components: { KoaFilterButton },
      template: `<KoaFilterButton @click="onClick">ohne Koffein</KoaFilterButton>`,
      data: () => ({ }),
      methods: {
        onClick: action('on-click')
      }
    };
  })
  .add('activ', () => {
    return {
      components: { KoaFilterButton },
      template: `<KoaFilterButton activ>ohne Koffein</KoaFilterButton>`,
      data: () => ({ }),
    };
  })
  .add('default color', () => {
    return {
      components: { KoaFilterButton },
      template: `<div style="background-color: #93c0e9;"><KoaFilterButton color="white" backgroundColor="#93c0e9">ohne Koffein</KoaFilterButton></div>`,
      data: () => ({ }),
    };
  })
  .add('default color activ', () => {
    return {
      components: { KoaFilterButton },
      template: `<div style="background-color: #93c0e9;"><KoaFilterButton color="white" backgroundColor="#93c0e9" activ>ohne Koffein</KoaFilterButton></div>`,
      data: () => ({ }),
    };
  });