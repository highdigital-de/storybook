import { storiesOf } from '@storybook/vue';
import IconButton from './IconButton';
import { action } from '@storybook/addon-actions';

storiesOf('Design System|Molecules/IconButton', module)
.add('default', () => {
  return {
    components: { IconButton },
    template: `<div style="background-color: gray;">
    <IconButton icon="person" />
    </div>`,
    data: () => ({ }),
  };
})
.add('no data', () => {
  return {
    components: { IconButton },
    template: `<div style="background-color: gray;">
    <IconButton icon="person" />
    </div>`,
    data: () => ({ }),
  };
})
.add('on click event', () => {
  return {
    components: { IconButton },
    template: `<div style="background-color: gray;">
    <IconButton icon="person" @click="onClick" />
    </div>`,
    data: () => ({ }),
    methods: {
      onClick: action('on-click')
    }
  };
});