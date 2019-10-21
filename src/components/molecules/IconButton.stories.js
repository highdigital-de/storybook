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
.add('dark', () => {
  return {
    components: { IconButton },
    template: `<div style="background-color: gray;">
    <IconButton icon="person" dark />
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
.add('with batch 1', () => {
  return {
    components: { IconButton },
    template: `<div style="background-color: gray;">
    <IconButton icon="person" batch="1" />
    </div>`,
    data: () => ({ }),
  };
})
.add('with batch 22', () => {
  return {
    components: { IconButton },
    template: `<div style="background-color: gray;">
    <IconButton icon="person" batch="22" />
    </div>`,
    data: () => ({ }),
  };
})
.add('with batch 22 dark', () => {
  return {
    components: { IconButton },
    template: `<div style="background-color: gray;">
    <IconButton icon="person" batch="22" dark />
    </div>`,
    data: () => ({ }),
  };
})
.add('with batch 4444', () => {
  return {
    components: { IconButton },
    template: `<div style="background-color: gray;">
    <IconButton icon="person" batch="4444" />
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