import { storiesOf } from '@storybook/vue';
import DropdownInput from './DropdownInput';
import Container from './Container';
import { action } from '@storybook/addon-actions';

storiesOf('Design System|Atoms/DropdownInput', module)
.add('with label in columns', () => {
  return {
    components: { DropdownInput, Container },
    template: `
    <div style="background-color: #c5ddf3;">
      <Container>
        <div class="columns">
          <div class="column">
            <DropdownInput label="Geschlecht" placeholder="bitte wählen" :options="this.options" />
          </div>
          <div class="column">
          </div>s
        </div>
      </Container>
    </div>`,
    data: () => ({
      options: [
        {label: 'Herr', value: 'male'},
        {label: 'Frau', value: 'female'}
      ]
    }),
  };
})
.add('with label in columns variant yellow', () => {
  return {
    components: { DropdownInput, Container },
    template: `
    <div style="background-color: #c5ddf3;">
      <Container>
        <div class="columns">
          <div class="column">
            <DropdownInput label="Geschlecht" placeholder="bitte wählen" :options="this.options" variant="yellow" />
          </div>
          <div class="column">
          </div>s
        </div>
      </Container>
    </div>`,
    data: () => ({
      options: [
        {label: 'Herr', value: 'male'},
        {label: 'Frau', value: 'female'}
      ]
    }),
  };
})
.add('v-model', () => {
  return {
    components: { DropdownInput, Container },
    template: `
    <div style="background-color: #c5ddf3;">
      <Container>
        <div class="columns">
          <div class="column">
            <DropdownInput label="geschlecht" placeholder="bitte wählen" v-model="gender" :options="this.options" />
          </div>
        </div>
      </Container>
    </div>`,
    data: () => ({
      options: [
        {label: 'Herr', value: 'male'},
        {label: 'Frau', value: 'female'}
      ],
      gender: ''
    }),
    watch: {
      gender() {
        action('v-model:gender')(this.gender)
      }
    }
  };
})
.add('preselected', () => {
  return {
    components: { DropdownInput, Container },
    template: `
    <div style="background-color: #c5ddf3;">
      <Container>
        <div class="columns">
          <div class="column">
            <DropdownInput label="geschlecht" placeholder="bitte wählen" v-model="this.gender" :options="this.options" />
          </div>
        </div>
      </Container>
    </div>`,
    data: () => ({
      options: [
        {label: 'Herr', value: 'male'},
        {label: 'Frau', value: 'female'}
      ],
      gender: 'female'
    }),
    watch: {
      gender() {
        action('v-model:gender')(this.gender)
      }
    }
  };
});