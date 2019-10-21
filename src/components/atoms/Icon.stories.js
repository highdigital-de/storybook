import { storiesOf } from '@storybook/vue';
import Icon from './Icon';

storiesOf('Design System|Atoms/Icon', module)
.add('person', () => {
  return {
    components: { Icon },
    template: `<div style="background-color: gray;">
    <Icon icon="person" />
    </div>`,
    data: () => ({ }),
  };
})
.add('dark person', () => {
  return {
    components: { Icon },
    template: `<div style="background-color: gray;">
    <Icon icon="person" dark />
    </div>`,
    data: () => ({ }),
  };
})
.add('no data', () => {
  return {
    components: { Icon },
    template: `<div style="background-color: gray;">
    <Icon />
    </div>`,
    data: () => ({ }),
  };
});