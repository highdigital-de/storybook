import { storiesOf } from '@storybook/vue';
import AmmountSelector from './AmmountSelector';
import { action } from '@storybook/addon-actions';

storiesOf('Design System|Molecules/AmmountSelector', module)
  .add('default (with bound actions)', () => {
    return {
      components: { AmmountSelector },
      template: `
      <div style="background-color: #93c0e9;">
        <AmmountSelector @decrease="onDecrease" @increase="onIncrease" :ammount="1" />
      </div>
      `,
      data: () => ({}),
      methods: {
        onDecrease: action('on-decrease'),
        onIncrease: action('on-increase')
      }
    };
  },
  {
    notes: 'The actions are emitted as events.',
  })
  .add('action bound', () => {
    return {
      components: { AmmountSelector },
      template: `
        <div style="background-color: #93c0e9;">
          <AmmountSelector @decrease="onDecrease" @increase="onIncrease" :ammount="this.ammount" />
        </div>
        `,
      data: () => ({
        ammount: 1
      }),
      methods: {
        onDecrease() {this.ammount -= 1},
        onIncrease() {this.ammount += 1}
      }
    };
  },
  {
    notes: 'Action are bound to storybook data. The component is a non-functional component that emits actions and does not calculate or safe state.',
  })
  .add('action bound dark', () => {
    return {
      components: { AmmountSelector },
      template: `
        <div style="background-color: #93c0e9;">
          <AmmountSelector @decrease="onDecrease" @increase="onIncrease" :ammount="this.ammount" dark />
        </div>
        `,
      data: () => ({
        ammount: 1
      }),
      methods: {
        onDecrease() {this.ammount -= 1},
        onIncrease() {this.ammount += 1}
      }
    };
  },
  {
    notes: 'Action are bound to storybook data. The component is a non-functional component that emits actions and does not calculate or safe state.',
  });