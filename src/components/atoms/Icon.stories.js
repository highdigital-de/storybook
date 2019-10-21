import { storiesOf } from '@storybook/vue';
import Icon from './Icon';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

const options = [
  'person',
  'cart',
  'hamburger',
  'arrow_down',
  'arrow_left',
  'arrow_right',
  'arrow_right_small',
  'x',
]

storiesOf('Design System|Atoms/Icon', module)
  .addDecorator(withKnobs)
  .add('person', () => {
    return {
      components: { Icon },
      template: `<div style="background-color: gray;">
    <Icon icon="person" />
    </div>`,
      data: () => ({}),
    };
  })
  .add('all icons', () => {
    return {
      components: { Icon },
      template: `<div style="background-color: gray;">
    <Icon :icon="this.icon" :dark="dark" />
    </div>`,
    props: {
      icon: {
        default: select('Select Icon', options, 'person')
      },
      dark: {
        default: boolean('Dark', false)
      }
    },
    };
  })
  .add('dark person', () => {
    return {
      components: { Icon },
      template: `<div style="background-color: gray;">
    <Icon icon="person" dark />
    </div>`,
      data: () => ({}),
    };
  })
  .add('no data', () => {
    return {
      components: { Icon },
      template: `<div style="background-color: gray;">
    <Icon />
    </div>`,
      data: () => ({}),
    };
  });