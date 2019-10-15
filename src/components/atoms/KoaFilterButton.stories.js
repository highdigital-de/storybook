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
  .add('active', () => {
    return {
      components: { KoaFilterButton },
      template: `<KoaFilterButton active>ohne Koffein</KoaFilterButton>`,
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
  .add('default color active', () => {
    return {
      components: { KoaFilterButton },
      template: `<div style="background-color: #93c0e9;"><KoaFilterButton color="white" backgroundColor="#93c0e9" active>ohne Koffein</KoaFilterButton></div>`,
      data: () => ({ }),
    };
  });