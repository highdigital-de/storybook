import { storiesOf } from '@storybook/vue';
import FilterSelector from './FilterSelector';
import { action } from '@storybook/addon-actions';

storiesOf('Design System|Molecules/FilterSelector', module)
.add('default (with bound actions)', () => {
  return {
    components: { FilterSelector },
    template: `
    <div style="background-color: #93c0e9;">
      <FilterSelector @select="onSelect" :options="options" color="white" backgroundColor="#93c0e9" :selected="100"/>
    </div>
    `,
    data: () => ({
      options: [
        {label: '100 g', value: '100'},
        {label: '220 g', value: '220'},
        {label: '500 g', value: '500'}
      ]
    }),
    methods: {
      onSelect: action('on-select')
    }
  };
},
{
  notes: 'The actions are emitted as events.',
})
.add('default (with simulated actions)', () => {
  return {
    components: { FilterSelector },
    template: `
    <div style="background-color: #93c0e9;">
      <FilterSelector @select="onSelect" :options="options" color="white" backgroundColor="#93c0e9" :selected="this.selected"/>
    </div>
    `,
    data: () => ({
      options: [
        {label: '100 g', value: '100'},
        {label: '220 g', value: '220'},
        {label: '500 g', value: '500'}
      ],
      selected: 100,
    }),
    methods: {
      onSelect(value) {
        this.selected = value;
      }
    }
  };
},
{
  notes: 'The actions are emitted as events.',
})
.add('green (with simulated actions)', () => {
  return {
    components: { FilterSelector },
    template: `
    <div style="background-color: #10cfc9;">
      <FilterSelector @select="onSelect" :options="options" color="white" backgroundColor="#10cfc9" :selected="this.selected"/>
    </div>
    `,
    data: () => ({
      options: [
        {label: '100 g', value: '100'},
        {label: '220 g', value: '220'},
        {label: '500 g', value: '500'}
      ],
      selected: 100,
    }),
    methods: {
      onSelect(value) {
        this.selected = value;
      }
    }
  };
},
{
  notes: 'The actions are emitted as events.',
})
.add('no color (with simulated actions)', () => {
  return {
    components: { FilterSelector },
    template: `
    <div>
      <FilterSelector @select="onSelect" :options="options" :selected="this.selected"/>
    </div>
    `,
    data: () => ({
      options: [
        {label: '100 g', value: '100'},
        {label: '220 g', value: '220'},
        {label: '500 g', value: '500'}
      ],
      selected: 100,
    }),
    methods: {
      onSelect(value) {
        this.selected = value;
      }
    }
  };
},
{
  notes: 'The actions are emitted as events.',
});