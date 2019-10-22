import { storiesOf } from '@storybook/vue';
import CheckboxInput from './CheckboxInput';
import Container from './Container';
import { action } from '@storybook/addon-actions';

storiesOf('Design System|Atoms/CheckboxInput', module)
.add('with label in columns', () => {
  return {
    components: { CheckboxInput, Container },
    template: `
    <div style="background-color: #c5ddf3;">
      <Container>
        <div class="columns">
          <div class="column">
            <CheckboxInput label="an abweichende lieferadresse versenden" />
          </div>
          <div class="column">
          </div>
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
.add('with label in columns checked', () => {
  return {
    components: { CheckboxInput, Container },
    template: `
    <div style="background-color: #c5ddf3;">
      <Container>
        <div class="columns">
          <div class="column">
            <CheckboxInput label="an abweichende lieferadresse versenden" value="true" />
          </div>
          <div class="column">
          </div>
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
    components: { CheckboxInput, Container },
    template: `
    <div style="background-color: #c5ddf3;">
      <Container>
        <div class="columns">
          <div class="column">
          <CheckboxInput label="an abweichende lieferadresse versenden" :value="checked" @click="onClick" />
          </div>
        </div>
      </Container>
    </div>`,
    data: () => ({
      checked: false
    }),
    methods: {
      onClick() {
        this.checked = !this.checked;
      }
    },
    watch: {
      checked() {
        action('v-model:checked')(this.checked)
      }
    }
  };
});