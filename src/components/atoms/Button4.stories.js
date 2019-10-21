import { storiesOf } from '@storybook/vue';
import Button4 from './Button4';
import { action } from '@storybook/addon-actions';

storiesOf('Design System|Atoms/Button4', module)
.add('default', () => {
  return {
    components: { Button4 },
    template: `<Button4 @click="onClick">ohne Koffein</Button4>`,
    data: () => ({ }),
    methods: {
      onClick: action('on-click')
    }
  };
})
.add('icon', () => {
  return {
    components: { Button4 },
    template: `<Button4 icon @click="onClick">ohne Koffein</Button4>`,
    data: () => ({ }),
    methods: {
      onClick: action('on-click')
    }
  };
});